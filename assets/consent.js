/*
 * Aurea Systems — Consent gate + Meta Pixel + CTA tracking
 *
 * Single source of truth that replaces the inline Meta Pixel snippet
 * previously duplicated across 8 HTML files. Behaviour:
 *
 *   1. Reads user consent from localStorage (key `aurea-consent`).
 *   2. If granted     → boots Meta Pixel, fires PageView.
 *   3. If denied      → pixel never loads.
 *   4. If undecided   → renders bottom banner (Accept / Reject).
 *   5. CTA delegation → fires `Lead` / `Contact` events on intent
 *                       signals, respecting consent state.
 *   6. Mirrors every event to /api/capi/event (server-side CAPI).
 *
 * Public surface:
 *   window.aureaConsent.track(eventName, customData)
 *   window.aureaConsent.isGranted() / isDenied() / grant() / revoke()
 *   window.aureaConsent.revisit()  // re-open banner
 */
(function () {
  'use strict';

  var PIXEL_ID = '1255787176340976';
  var STORAGE_KEY = 'aurea-consent';
  var CONSENT_VERSION = '1';
  var CAPI_ENDPOINT = '/api/capi/event';

  /* ---------- storage helpers ---------- */
  function getConsent() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      var p = JSON.parse(raw);
      if (!p || p.v !== CONSENT_VERSION) return null;
      return p.granted ? 'granted' : 'denied';
    } catch (e) { return null; }
  }
  function setConsent(granted) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        v: CONSENT_VERSION, granted: !!granted, ts: Date.now()
      }));
    } catch (e) {}
  }

  /* ---------- helpers ---------- */
  function getCookie(name) {
    var m = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]+)'));
    return m ? decodeURIComponent(m[1]) : null;
  }
  function genEventId() {
    // RFC4122-ish v4. Used to dedupe pixel vs CAPI events on Meta's side.
    var hex = '';
    for (var i = 0; i < 32; i++) {
      hex += Math.floor(Math.random() * 16).toString(16);
    }
    return hex.slice(0, 8) + '-' + hex.slice(8, 12) + '-4'
      + hex.slice(13, 16) + '-' + hex.slice(16, 20) + '-' + hex.slice(20);
  }

  /* ---------- Meta Pixel boot ---------- */
  function bootMetaPixel() {
    if (window.fbq && window.fbq.loaded) return;
    /* eslint-disable */
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document, 'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    /* eslint-enable */
    var pvEventId = genEventId();
    window.fbq('init', PIXEL_ID);
    window.fbq('track', 'PageView', {}, { eventID: pvEventId });
    sendCapi('PageView', {}, pvEventId);
  }

  /* ---------- CAPI client-side mirror ---------- */
  function sendCapi(eventName, customData, eventId) {
    if (getConsent() !== 'granted') return;
    var payload = {
      event_name: eventName,
      event_id: eventId,
      event_time: Math.floor(Date.now() / 1000),
      event_source_url: window.location.href,
      action_source: 'website',
      custom_data: customData || {},
      user_data: {
        fbp: getCookie('_fbp'),
        fbc: getCookie('_fbc')
      }
    };
    try {
      if (navigator.sendBeacon) {
        navigator.sendBeacon(
          CAPI_ENDPOINT,
          new Blob([JSON.stringify(payload)], { type: 'application/json' })
        );
      } else {
        fetch(CAPI_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          keepalive: true
        }).catch(function () {});
      }
    } catch (e) {}
  }

  /* ---------- public API ---------- */
  window.aureaConsent = {
    queue: [],
    track: function (eventName, customData) {
      if (getConsent() === 'granted') {
        var eventId = genEventId();
        if (window.fbq && window.fbq.loaded) {
          window.fbq('track', eventName, customData || {}, { eventID: eventId });
        }
        sendCapi(eventName, customData, eventId);
      } else {
        this.queue.push([eventName, customData || {}]);
      }
    },
    isGranted: function () { return getConsent() === 'granted'; },
    isDenied: function () { return getConsent() === 'denied'; },
    grant: function () {
      setConsent(true);
      bootMetaPixel();
      this._drain();
    },
    revoke: function () { setConsent(false); },
    revisit: function () {
      try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
      renderBanner();
    },
    _drain: function () {
      var q = this.queue;
      while (q.length) {
        var e = q.shift();
        var eventId = genEventId();
        if (window.fbq) window.fbq('track', e[0], e[1] || {}, { eventID: eventId });
        sendCapi(e[0], e[1] || {}, eventId);
      }
    }
  };

  /* ---------- banner ---------- */
  function renderBanner() {
    if (document.getElementById('aurea-consent-banner')) return;
    var html =
      '<div class="aurea-consent__inner">' +
        '<div class="aurea-consent__copy">' +
          '<strong class="aurea-consent__title">Este sitio utiliza cookies</strong>' +
          '<p class="aurea-consent__text">Aurea Systems utiliza cookies propias y de terceros de tipo técnico que son necesarias para el correcto funcionamiento de la web y también cookies de tipo analítico y de publicidad con la intención de mostrar información relevante y atractiva para mejorar su experiencia de usuario.</p>' +
          '<p class="aurea-consent__text">Al aceptar, confirmas que estás de acuerdo con la <a href="/politica-de-privacidad/">política de cookies de Aurea Systems</a>. Puedes modificar tus preferencias cuando quieras.</p>' +
        '</div>' +
        '<div class="aurea-consent__actions">' +
          '<button type="button" class="aurea-consent__btn aurea-consent__btn--ghost" data-consent-reject>Rechazar</button>' +
          '<button type="button" class="aurea-consent__btn aurea-consent__btn--solid" data-consent-accept>Aceptar</button>' +
        '</div>' +
      '</div>';

    var banner = document.createElement('div');
    banner.id = 'aurea-consent-banner';
    banner.className = 'aurea-consent';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-live', 'polite');
    banner.setAttribute('aria-label', 'Aviso de cookies');
    banner.innerHTML = html;
    document.body.appendChild(banner);

    banner.querySelector('[data-consent-accept]').addEventListener('click', function () {
      window.aureaConsent.grant();
      banner.classList.remove('is-visible');
      setTimeout(function () { if (banner.parentNode) banner.remove(); }, 300);
    });
    banner.querySelector('[data-consent-reject]').addEventListener('click', function () {
      window.aureaConsent.revoke();
      banner.classList.remove('is-visible');
      setTimeout(function () { if (banner.parentNode) banner.remove(); }, 300);
    });

    requestAnimationFrame(function () {
      banner.classList.add('is-visible');
    });
  }

  /* ---------- "Gestionar cookies" link wiring ---------- */
  function wireRevisitLinks() {
    document.addEventListener('click', function (e) {
      var t = findActionable(e.target);
      if (!t) return;
      if (
        t.hasAttribute('data-cookies-revisit') ||
        (t.matches('a[href]') && t.getAttribute('href') === '#cookies-settings')
      ) {
        e.preventDefault();
        window.aureaConsent.revisit();
      }
    });
  }

  /* ---------- CTA tracking (event delegation) ---------- */
  function findActionable(node) {
    while (node && node !== document) {
      if (node.matches && (node.matches('a') || node.matches('button'))) return node;
      node = node.parentNode;
    }
    return null;
  }
  function wireCtaTracking() {
    document.addEventListener('click', function (e) {
      var t = findActionable(e.target);
      if (!t) return;

      // High intent — calendar modal or direct Cleesaas link
      if (
        t.matches('[data-calendar-open]') ||
        (t.matches('a[href]') && /cleesaas\.com/i.test(t.getAttribute('href') || ''))
      ) {
        window.aureaConsent.track('Lead', {
          content_name: 'reserva_llamada',
          content_category: 'cta_high_intent'
        });
        return;
      }

      // Email contact (mailto:)
      if (t.matches('a[href^="mailto:"]')) {
        window.aureaConsent.track('Contact', { method: 'email' });
        return;
      }

      // Any anchor that scrolls to #reservar (hero / nav / etc.)
      if (t.matches('a[href]') && /#reservar/.test(t.getAttribute('href') || '')) {
        window.aureaConsent.track('Lead', {
          content_name: 'reservar_anchor',
          content_category: 'cta_medium_intent'
        });
        return;
      }
    }, { capture: true });
  }

  /* ---------- bootstrap ---------- */
  function init() {
    var c = getConsent();
    if (c === 'granted') {
      bootMetaPixel();
    } else if (c === null) {
      renderBanner();
    }
    /* denied → do nothing */
    wireCtaTracking();
    wireRevisitLinks();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
