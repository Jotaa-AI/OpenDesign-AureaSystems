/*
 * Aurea Systems — Meta Conversions API proxy
 *
 * Tiny vanilla Node service that accepts client-side event payloads at
 * POST /event and forwards them to the Meta Conversions API.
 *
 * Why: pixel calls from the browser are often blocked by ad-blockers,
 * iOS Safari ITP, etc. CAPI from server-side fills that gap. Each event
 * carries an `event_id` that matches the client-side pixel call so Meta
 * dedupes both signals.
 *
 * Config (via env / EnvironmentFile):
 *   META_PIXEL_ID         (required)  — your Pixel ID
 *   META_ACCESS_TOKEN     (required)  — Conversions API token
 *   META_TEST_EVENT_CODE  (optional)  — e.g. TEST12345 (for Events Manager test)
 *   CAPI_PORT             (default 3001)
 *   CAPI_HOST             (default 127.0.0.1)
 */
'use strict';

const http = require('http');
const https = require('https');

const PORT  = parseInt(process.env.CAPI_PORT || '3001', 10);
const HOST  = process.env.CAPI_HOST || '127.0.0.1';
const PIXEL_ID = process.env.META_PIXEL_ID;
const ACCESS_TOKEN = process.env.META_ACCESS_TOKEN;
const TEST_EVENT_CODE = process.env.META_TEST_EVENT_CODE || '';

if (!PIXEL_ID || !ACCESS_TOKEN) {
  console.error('FATAL: META_PIXEL_ID and META_ACCESS_TOKEN must be set');
  process.exit(1);
}

const MAX_BODY = 32 * 1024;
const ALLOWED_EVENTS = new Set([
  'PageView', 'Lead', 'Contact',
  'ViewContent', 'InitiateCheckout', 'CompleteRegistration', 'Schedule'
]);

function getClientIp(req) {
  return (req.headers['x-forwarded-for'] || '').split(',')[0].trim()
    || req.socket.remoteAddress || '';
}

function postToMeta(events) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      data: events,
      ...(TEST_EVENT_CODE ? { test_event_code: TEST_EVENT_CODE } : {})
    });
    const req = https.request({
      method: 'POST',
      hostname: 'graph.facebook.com',
      path: `/v18.0/${encodeURIComponent(PIXEL_ID)}/events?access_token=${encodeURIComponent(ACCESS_TOKEN)}`,
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(body)
      },
      timeout: 4000
    }, res => {
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => {
        const text = Buffer.concat(chunks).toString('utf8');
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve({ status: res.statusCode, body: text });
        } else {
          reject(new Error(`Meta API ${res.statusCode}: ${text}`));
        }
      });
    });
    req.on('timeout', () => req.destroy(new Error('Meta API timeout')));
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

function sanitizeEvent(payload, req) {
  const ip = getClientIp(req);
  const ua = req.headers['user-agent'] || '';
  const name = String(payload.event_name || 'PageView').slice(0, 64);
  if (!ALLOWED_EVENTS.has(name)) {
    throw new Error(`event_name not allowed: ${name}`);
  }

  const userData = {
    client_ip_address: ip,
    client_user_agent: ua
  };
  if (payload.user_data) {
    if (payload.user_data.fbp) userData.fbp = String(payload.user_data.fbp).slice(0, 256);
    if (payload.user_data.fbc) userData.fbc = String(payload.user_data.fbc).slice(0, 256);
  }

  const event = {
    event_name: name,
    event_time: typeof payload.event_time === 'number'
      ? payload.event_time
      : Math.floor(Date.now() / 1000),
    event_source_url: String(payload.event_source_url || '').slice(0, 2048),
    action_source: 'website',
    user_data: userData,
    custom_data: (payload.custom_data && typeof payload.custom_data === 'object')
      ? payload.custom_data
      : {}
  };
  if (payload.event_id) {
    event.event_id = String(payload.event_id).slice(0, 64);
  }
  return event;
}

const server = http.createServer((req, res) => {
  // Health check
  if (req.method === 'GET' && (req.url === '/health' || req.url === '/healthz')) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    return res.end('ok');
  }

  if (req.method !== 'POST' || !/^\/event\/?$/.test(req.url)) {
    res.writeHead(404);
    return res.end();
  }

  let body = '';
  let aborted = false;
  req.on('data', chunk => {
    if (aborted) return;
    body += chunk;
    if (body.length > MAX_BODY) {
      aborted = true;
      res.writeHead(413, { 'Content-Type': 'text/plain' });
      res.end('payload too large');
      req.destroy();
    }
  });
  req.on('end', async () => {
    if (aborted) return;
    try {
      const payload = JSON.parse(body || '{}');
      const event = sanitizeEvent(payload, req);
      await postToMeta([event]);
      res.writeHead(204);
      res.end();
    } catch (err) {
      console.error('[CAPI]', err.message);
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('bad request');
    }
  });
  req.on('error', () => {});
});

server.listen(PORT, HOST, () => {
  console.log(`Aurea CAPI listening on ${HOST}:${PORT} (pixel ${PIXEL_ID})`);
});

// Graceful shutdown
function shutdown() {
  server.close(() => process.exit(0));
  setTimeout(() => process.exit(1), 5000).unref();
}
process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
