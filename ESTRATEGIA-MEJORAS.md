# Aurea Systems — Estrategia de mejora competitiva

**Versión:** v1.0
**Fecha:** 2026-05-09
**Objetivo:** Posicionar a Aurea Systems claramente por encima de la competencia en diseño, estructura y oferta dentro del nicho de captación con IA para clínicas de medicina estética facial en España.

---

## 0. Resumen ejecutivo

La landing actual de Aurea Systems ya tiene **una identidad visual única en el sector** (estilo editorial premium "Atelier Zero" con paleta paper + coral) que ningún competidor analizado se acerca a igualar. El problema no es estética: es **profundidad de página**, **prueba social**, **transparencia comercial** y **palancas de conversión**.

Con los cambios propuestos aquí, Aurea Systems pasaría de "landing premium con buena promesa" a **"el referente del sector"**: la única web del segmento que combina diseño editorial, garantía con piel en juego, IA conversacional, casos cuantificados y transparencia comercial real.

**Score competitivo estimado (1-10):**

| Pilar             | Aurea hoy | Mejor competidor | Aurea V2 (objetivo) |
|-------------------|-----------|-------------------|----------------------|
| Diseño visual     | 9         | 6 (DoctorMarketing)| 10                   |
| Estructura web    | 7         | 8 (MarketLabs)     | 10                   |
| Oferta clara      | 6         | 8 (MarketLabs)     | 10                   |
| Prueba social     | 4         | 8 (MarketLabs)     | 9                    |
| Transparencia     | 5         | 7 (ClinicGrowth)   | 9                    |
| SEO/Tech          | 6         | 6                  | 9                    |
| **Total**         | **37**    | **43**             | **57**               |

---

## 1. Análisis de la web actual de Aurea Systems

### 1.1 Lo que ya destaca (mantener y reforzar)

- **Sistema visual editorial Atelier Zero**: paleta paper `#efe7d2` + ink `#15140f` + coral `#C8A97E`, tipografía Playfair Display itálica + Inter Tight, textura de papel SVG noise. Es la identidad **más sofisticada del sector** — ningún competidor se acerca.
- **Estructura editorial con numeración romana** (I-VIII) y rieles laterales rotados. Premium, distintivo y memorable.
- **Promesa concreta y medible**: 15+ visitas asistidas/mes, <60s respuesta IA, <15% no-show, 8-12 vídeos/mes. **Numéricamente más específica** que cualquier competidor.
- **Garantía con skin in the game**: "Si no llevamos 15 visitas asistidas en 30 días → mes 2 gratis; si meses 2-3 no superan media → fee a 0€". **Es el diferenciador más fuerte y nadie lo iguala**. MarketLabs habla de "garantía de facturación" sin condiciones publicadas; el resto no garantiza nada.
- **Ana (IA en WhatsApp)**: testimonio "indistinguible de una persona" del Dr. Soler. Activo único bien narrado.
- **Exclusividad territorial 15km / 4 plazas**: crea FOMO real y bloquea competidores locales.
- **Sistema ACAC** (Atracción → Calificación → Asistencia → Cierre): framework propietario claro y memorable.
- **Animaciones sutiles**: scroll-reveal IntersectionObserver, marqués CSS, `prefers-reduced-motion` respetado. Bien hecho.

### 1.2 Lo que falla técnica y comercialmente

| Gap | Impacto | Fix |
|-----|---------|-----|
| **Schema.org ausente** (sin JSON-LD) | SEO | Añadir LocalBusiness, Organization, FAQPage, AggregateRating |
| **Sin tracking** (no GA4, no Meta Pixel, no LinkedIn) | Decisión ciega | Inyectar GTM con consent banner |
| **1 solo testimonial** | Credibilidad | 5+ con foto, rol, métrica antes/después |
| **Sin video real en hero** | Conversión | Loop 6-10s mp4 (UGC clínica + Ana respondiendo) |
| **Blog redirige a placeholder** | SEO contenido | Blog con 6-12 posts pillar (no-show, KPIs, IA en sanidad…) |
| **Sin FAQ visible** | Objeciones | Acordeón 8-10 Q&A (precio, exclusividad, RGPD, integración…) |
| **Sin calculadora ROI** | Conversión | "15 visitas × ticket medio 800€ = +12.000€/mes" interactiva |
| **Imágenes PNG pesadas** (~1.3-2MB cada una) | Performance | Convertir a WebP/AVIF, lazy loading nativo, srcset |
| **Vídeo 9.5MB sin lazy** | LCP | `preload="none"`, poster, autoplay solo si visible |
| **Sin multi-idioma real** | TAM | hreflang ES/CA/EN |
| **Sin comparativa explícita** | Diferenciación | Tabla "Aurea Systems vs. agencia tradicional vs. interno" |
| **Pricing 100% oculto** | Cualificación | Banda orientativa "desde X€/mes + ads" o "modelo performance" |
| **Modal calendario único** | Fricción | Añadir formulario corto alternativo (3 campos) para los que no quieren agendar aún |

### 1.3 Lo que es bueno mantener intacto

- La paleta Atelier Zero (no diluir con colores nuevos).
- La numeración romana y vocabulario editorial ("Plate", "Vol. 01", "MMXXVI").
- La garantía 15 visitas (es **el** ancla comercial — protegerla).
- El sistema ACAC nombrado.
- El tono editorial sin buzzwords ("agujero negro entre formulario y camilla" es brillante).

---

## 2. Análisis de competencia

### 2.1 MarketLabs (`marketlabs.es`)

**Resumen**: el competidor **más maduro comercialmente**. Casos numéricos contundentes y ofertas tangibles, pero diseño genérico.

| | Detalle |
|---|---|
| Headline | "¿Quieres más Clientes?" |
| Sub | "+18.000€/mes a esta clínica" |
| Oferta | Publicidad + IA WhatsApp + Mentorías + Llaves en Mano + Clinic Summit |
| Garantía | "Garantía 100% de Facturación" (sin condiciones publicadas) |
| Casos | +18.000€/mes (Sonia Peña), +15.000€ (Dr. Salinas), +10.000€ (Vanessa) |
| Social proof | +200 clínicas, 4.9/5 en Google con +40 reseñas |
| CTA | "DISPONIBLE Llamada de Estrategia (15 mins)" |
| Tono | Aspiracional, USA-style, agresivo |
| Diseño | Limpio pero genérico; no editorial |

**Fortalezas a contrarrestar:**
1. **Casos cuantificados con nombre y €/mes** → nuestra mayor debilidad relativa.
2. **+200 clínicas + rating Google público** → autoridad social.
3. **Eventos físicos (Clinic Summit)** → comunidad y posicionamiento offline.
4. **Múltiples paquetes** (Llaves en Mano vs. Premium) → permite captar más targets.

**Debilidades aprovechables:**
- Garantía sin condiciones públicas = poco creíble. Aurea las tiene escritas.
- Diseño plantilla, sin distintivo.
- Tono "guru" americano que **disuena en sanidad española**.
- Mezcla nichos (estética + dental + grandes empresas) → menos foco que nosotros.

### 2.2 360 Clinic Consulting (`360clinicconsulting.com`)

**Resumen**: enfoque consultoría B2B serio pero **sin pruebas, sin casos, sin testimonios**. Web de "trust me bro".

| | Detalle |
|---|---|
| Headline | "Expertos en captar primeras visitas y convertirlas en pacientes fieles" |
| Oferta | Captación + teleoperadores + Salesforce/Palantir/Power BI |
| Garantía | "Paga únicamente por los resultados" (sin métricas) |
| Casos | **Ninguno mencionado** |
| Social proof | "8 años experiencia" (frase aislada) |
| CTA | "Saber más" (débil) |
| Tono | Corporativo, frío, tecnológico |
| Diseño | Minimalista azul corporativo, B2B genérico |

**Fortalezas a contrarrestar:**
- Mención de stack tecnológico premium (Salesforce, Palantir IA, Power BI) **da impresión enterprise**.
- Modelo "pago por resultados" es una **objeción killer** para los que les pidan presupuesto.
- "Evalúa tu clínica ahora" (4 preguntas) es buen lead magnet diagnóstico.

**Debilidades aprovechables:**
- 0 testimonios, 0 casos, 0 números → web sin autoridad.
- CTAs débiles ("Saber más"), sin urgencia.
- Sin garantía concreta.
- Diseño plantilla SaaS azul intercambiable con cualquier B2B.

### 2.3 DoctorMarketing.digital (`doctormarketing.digital`)

**Resumen**: la **web más bonita de los 4** competidores, pero "ha pasado a ser ClinicSay y no acepta nuevos proyectos". Marca en transición. Su gancho es filosófico/emocional, no operativo.

| | Detalle |
|---|---|
| Headline | "Agencia integral Marketing Médico" |
| Sub | "Te conectamos con tus futuros pacientes" |
| Oferta | Estrategia, Branding, IA, Software, Embudos, Vídeo |
| Casos | "+0 Profesionales / +0 Millones €" (placeholders sin rellenar — error grave) |
| Diferenciador | Libro "Marketing Médico Ético" (35€) |
| CTA | "Reservar Sesión", "ADQUIRIR LIBRO 35€" |
| Tono | Aspiracional/filosófico ("De nada nos sirve ser, si no somos capaces de demostrar aquello que somos") |
| Diseño | Limpio, azul/blanco, espaciado generoso |

**Fortalezas a contrarrestar:**
- **El libro como lead magnet** ("Marketing Médico Ético") posiciona como autoridad.
- **Canal YouTube** integrado da contenido evergreen y SEO.
- Diseño con buen espaciado y tipografía.
- Frases con peso emocional bien escritas.

**Debilidades aprovechables:**
- Placeholders sin rellenar (+0 profesionales) → **fallo de credibilidad enorme**.
- En transición a ClinicSay: confusión de marca.
- Sin garantía, sin métricas operativas concretas.
- Tono filosófico no convierte para clínicas pragmáticas.

### 2.4 ClinicGrowth (`clinicgrowth.es`)

**Resumen**: el **competidor más cercano en tono y propuesta**. Confiado, directo, premium accesible. Es a quien debemos batir más claramente.

| | Detalle |
|---|---|
| Headline | "Revolucionando el marketing de las clínicas estéticas del mañana" |
| Oferta | Estrategias + grabación en clínica + CRM + automatizaciones |
| Precios | "Inversión publicitaria entre 900€ y 2.000€/mes" (la única transparencia parcial) |
| Garantía | Periodo inicial de 3 meses (no es garantía real) |
| Casos | "Clínica Mawa duplicó pacientes", "Endolift Facial", Dra. Estela ("dupliqué facturación") |
| Diferenciador | "No somos la mejor opción, somos la única" / "Solo importas tú" |
| CTA | "Realizar Test", "Trabaja Con Nosotros", "Contacta con Nosotros" |
| Tono | Confiado, desafiante, premium |

**Fortalezas a contrarrestar:**
- **Test diagnóstico de pacientes potenciales** (lead magnet interactivo).
- **FAQs** explícitas resuelven objeciones.
- Casos con nombre real (Dra. Estela, Mawa, Endolift).
- Mención de inversión mensual (pseudo-transparencia que cualifica leads).
- Tono confiado-desafiante muy efectivo en el sector.

**Debilidades aprovechables:**
- Diseño minimalista pero **sin identidad memorable** (paletas estándar).
- Sin garantía real (3 meses de prueba ≠ garantía de resultado).
- Casos sin números concretos en €.
- Sin IA documentada (solo "automatizaciones").
- Sin exclusividad territorial.

---

## 3. Tabla comparativa frontal

| Criterio                     | Aurea hoy        | MarketLabs      | 360Clinic         | DoctorMarketing   | ClinicGrowth      |
|------------------------------|------------------|-----------------|-------------------|-------------------|-------------------|
| Diseño/identidad visual      | **Editorial 9/10** | Plantilla 6     | B2B azul 5        | Limpio 6          | Minimal 6         |
| Headline emocional           | 8                | 7               | 6                 | 6                 | 8                 |
| Métricas concretas           | 8                | 9               | 3                 | 0 (placeholders)  | 6                 |
| Casos con nombre y €         | 3 (1 testimonial) | 9              | 0                 | 0                 | 7                 |
| Garantía explícita y medible | **9 (15 visitas o fee 0€)** | 5 (sin condiciones) | 4 (pago por resultados) | 0 | 4 (3 meses prueba) |
| IA documentada (WhatsApp)    | **9 (Ana)**      | 6               | 4 (Palantir genérico) | 5 (genérica)  | 3                 |
| Exclusividad territorial     | **9 (15km, 4 plazas)** | 0         | 0                 | 0                 | 0                 |
| FAQ                          | 0                | 0               | 0                 | 0                 | **8**             |
| Test diagnóstico/calculadora | 0                | 5 (método)      | 6 (4 preguntas)   | 0                 | **8 (test)**      |
| Lead magnet                  | 0 (blog vacío)   | "método secreto" | "evaluación"     | **8 (libro 35€)** | "test"            |
| Pricing transparente         | 0                | 0               | 0                 | 6 (libro)         | **5 (rango ads)** |
| Casos en vídeo/UGC           | 0                | 7 (anuncios)    | 0                 | 6 (YouTube)       | 6                 |
| Comunidad/eventos            | 0                | **8 (Summit)**  | 0                 | 6 (YouTube)       | 0                 |
| RGPD/LOPD destacado          | 0                | 0               | 0                 | 0                 | 0                 |
| Multi-idioma                 | 0                | 0               | 0                 | 0                 | 0                 |
| **TOTAL**                    | **62**           | **62**          | **31**            | **42**            | **64**            |

**Lectura:** Aurea hoy empata con MarketLabs y queda 2 puntos por debajo de ClinicGrowth (su competidor más cercano). El gap es de **prueba social, FAQ, test diagnóstico, lead magnet y pricing**. Las tres mejoras de mayor impacto serían: casos cuantificados, FAQ, calculadora ROI.

---

## 4. Plan de mejoras — Roadmap V2

Las mejoras se ordenan por ratio impacto/esfuerzo, agrupadas en 4 sprints.

### SPRINT 1 — Credibilidad (semana 1-2) — `prioridad CRÍTICA`

**Objetivo:** cerrar el gap de prueba social que MarketLabs y ClinicGrowth tienen sobre nosotros.

1. **Casos de éxito cuantificados (sección nueva, después de testimonial)**
   - 3-5 clínicas con: foto director, nombre, ciudad, especialidad, **antes vs. después en €/mes**, número de visitas, % no-show.
   - Formato editorial "Plate Nº" siguiendo la estética actual.
   - Si no hay 5 reales todavía: arrancar con 2-3 documentados rigurosamente y crecer.

2. **Bloque de testimonios en vídeo** (UGC corto, 15-30s, formato vertical)
   - 3-5 clips con clínica real hablando.
   - Player ligero o `<video>` nativo con poster + lazy.

3. **Logos reales de clínicas o número agregado** ("12 clínicas activas en España", "+1.300 visitas asistidas en 2026").

4. **AggregateRating schema.org + reseñas Google embebidas** (si existen) para superar el "4.9/5 +40 reseñas" de MarketLabs.

**Entregable:** sección "Casos · Nº 07" + bloque vídeo + número agregado en hero.

---

### SPRINT 2 — Conversión y palancas (semana 2-3) — `prioridad ALTA`

**Objetivo:** añadir múltiples puntos de captura para distintos niveles de intención.

5. **Calculadora ROI interactiva** (sección nueva o módulo en hero)
   - 3 inputs: ticket medio (€), nº visitas/mes actuales, % no-show actual.
   - Output: "Con Aurea harías +X visitas y +Y€/mes adicionales".
   - Lead-gate ligero: email para "ver tu informe completo".

6. **Test diagnóstico "¿Tu clínica está lista para escalar?"** (4-6 preguntas)
   - Mismo principio que ClinicGrowth y 360Clinic, pero con copy editorial.
   - Resultado segmenta lead (caliente/templado/frío) y dispara CTA contextual.

7. **FAQ acordeón** (sección antes del CTA final)
   - 10 preguntas obligatorias:
     1. ¿Cuánto cuesta exactamente?
     2. ¿Qué inversión publicitaria necesito?
     3. ¿Qué pasa si no llegamos a 15 visitas?
     4. ¿Trabajáis con mi tipo de tratamiento?
     5. ¿Cómo funciona la exclusividad territorial?
     6. ¿Qué pasa con los datos del paciente (RGPD)?
     7. ¿Se integra con mi CRM/agenda actual?
     8. ¿Cuántas clínicas tenéis en mi ciudad?
     9. ¿Quién graba los vídeos?
     10. ¿Puedo cancelar cuando quiera?
   - Marcado con `FAQPage` schema.org → rich snippets en Google.

8. **Banda de pricing orientativo** (sin precio exacto, modelo performance)
   - "Modelo performance: fee fijo + variable por visita asistida. Inversión total típica: 2.500-5.000€/mes (incluye ads, IA, contenido y operación)."
   - Cualifica leads y mata objeción "¿cuánto?".

9. **Lead magnet downloadable**
   - Guía PDF "El sistema editorial de captación clínica" (12-20 páginas, mismo estilo Atelier Zero).
   - Equivalente al libro de DoctorMarketing pero gratis y digital.
   - Captura email → secuencia de 4-7 emails educativos.

10. **Formulario corto alternativo al calendario**
    - 3 campos: nombre, clínica, WhatsApp.
    - Para los que no quieren agendar pero sí quieren ser contactados.

**Entregable:** 4 nuevas palancas de conversión + lead magnet.

---

### SPRINT 3 — SEO, performance y técnica (semana 3-4) — `prioridad ALTA`

11. **Schema.org JSON-LD completo:**
    - `Organization` (logo, sameAs redes, contacto)
    - `LocalBusiness` con `areaServed` (España)
    - `Service` (Captación con IA)
    - `FAQPage` (de la FAQ)
    - `AggregateRating` + `Review` (de testimonios)
    - `BreadcrumbList`

12. **Open Graph + Twitter Cards completos** (imágenes 1200×630 px específicas, no logo).

13. **Performance:**
    - Convertir todas las imágenes PNG a **WebP/AVIF** con fallback (las imágenes actuales pesan 1.0-2.1 MB cada una; objetivo: <120 KB).
    - `srcset` y `sizes` para responsive.
    - `loading="lazy"` en todas excepto hero.
    - `<video>` con `preload="none"` y `poster` ligero.
    - Self-host de fonts (woff2) o `font-display: swap` (ya está OK).
    - Crítico CSS inline (ya inlineado, OK), resto async.
    - Objetivo: **LCP <1.8s, CLS <0.05, INP <200ms** en mobile.

14. **Tracking y analítica:**
    - Google Tag Manager + GA4
    - Meta Pixel (eventos: ScheduleCall, FormSubmit, ToolUse)
    - Banner de consentimiento RGPD-compliant (Cookiebot o similar).

15. **Sitemap.xml + robots.txt** + envío a Search Console.

16. **Multi-idioma con hreflang ES/CA/EN** (mínimo ES + CA, dado que la propia copy menciona subtítulos en catalán).

**Entregable:** auditoría Lighthouse > 95 en todas las métricas, Search Console verified.

---

### SPRINT 4 — Diferenciación y autoridad (semana 4-6) — `prioridad MEDIA`

17. **Comparativa explícita "Aurea vs. agencia tradicional vs. equipo interno"**
    - Tabla editorial con 8-10 criterios (tiempo de respuesta, % no-show, coste fijo, exclusividad…).
    - Pone palabras a por qué Aurea es distinto (sin nombrar competidores, evita conflicto).

18. **Blog real con 6-12 posts pillar**
    - "Cómo bajar el no-show del 35% al 12% con un protocolo de 4 puntos"
    - "El KPI que las clínicas estéticas no miden y deberían"
    - "IA en WhatsApp: lo que la AEPD permite y lo que no"
    - "ROI real de 8-12 vídeos UGC al mes"
    - "Por qué la primera respuesta en <60s vale más que el ad"
    - …
    - SEO long-tail + autoridad temática.

19. **Sección "Cumplimiento RGPD/LOPD"** explícita (con mención AEPD, encargado de tratamiento, ARCO).
    - Es un diferenciador en sanidad — ningún competidor lo destaca y todos los directores médicos lo necesitan saber.

20. **Página dedicada de "Ana" (la IA)**
    - Vídeo demo 60s con conversación real (anonimizada).
    - Explicación técnica accesible (sin entrar en LLM, pero sí "respuesta personalizada en <60s, multilingüe ES/CA/EN, transferencia humana cuando toca").
    - Contraste vs. chatbots tipo ManyChat/Tidio que muchas clínicas ya conocen.

21. **Página "Garantía" como landing independiente**
    - Las condiciones detalladas + FAQ específica + ejemplo numérico paso a paso.
    - URL `/garantia` SEO-able.

22. **Press kit + apariciones en medios** (cuando existan).

23. **Comunidad/Newsletter mensual** con KPIs anonimizados del sector ("informe mensual del estado del marketing en clínica estética facial española").

24. **Webinar/sesión grupal mensual** con propietarios de clínica como lead magnet en vivo (equivalente al "Clinic Summit" de MarketLabs pero online y editorial).

**Entregable:** autoridad temática + SEO contenido + páginas long-tail.

---

## 5. Cambios concretos en `index.html` (V2)

### 5.1 Estructura de la home V2 (orden propuesto)

```
I.    Hero (con vídeo loop UGC + número agregado +1.300 visitas asistidas en 2026)
II.   Problema (mantener — funciona)
III.  Sistema (4 fases, mantener)
IV.   Módulos (5 módulos, mantener)
V.    Método (4 pasos, mantener)
VI.   Casos · Nº — NUEVO: 3-5 casos cuantificados con foto + €/mes
VII.  Calculadora ROI · NUEVO: bloque interactivo
VIII. Experiencias (Ana + Creative Studio, mantener)
IX.   Testimonios (ampliar a 5 + vídeo)
X.    Comparativa · NUEVO: vs. agencia tradicional vs. interno
XI.   FAQ · NUEVO: 10 preguntas
XII.  Garantía + CTA final (mantener, reforzar pricing orientativo)
XIII. Footer (añadir Blog real, RGPD destacado)
```

### 5.2 Añadir en `<head>`

```html
<!-- Open Graph -->
<meta property="og:title" content="Aurea Systems — Captación con IA para clínicas" />
<meta property="og:description" content="Sistema editorial: Meta Ads + WhatsApp IA + protocolo anti no-show + cierre asistido. 15 visitas o no pagas." />
<meta property="og:image" content="https://aureasystems.es/og-image.jpg" />
<meta property="og:url" content="https://aureasystems.es" />
<meta property="og:type" content="website" />
<meta property="og:locale" content="es_ES" />

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Aurea Systems — Captación con IA para clínicas" />
<meta name="twitter:description" content="15 visitas asistidas o fee a 0€." />
<meta name="twitter:image" content="https://aureasystems.es/og-image.jpg" />

<!-- Canonical + hreflang -->
<link rel="canonical" href="https://aureasystems.es/" />
<link rel="alternate" hreflang="es" href="https://aureasystems.es/" />
<link rel="alternate" hreflang="ca" href="https://aureasystems.es/ca/" />
<link rel="alternate" hreflang="x-default" href="https://aureasystems.es/" />

<!-- Schema.org Organization -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Aurea Systems",
  "url": "https://aureasystems.es",
  "logo": "https://aureasystems.es/assets/aurea-logo.png",
  "description": "Sistema de captación con IA para clínicas de medicina estética facial.",
  "areaServed": "ES",
  "sameAs": ["https://aureasystems.es/blog/"]
}
</script>

<!-- Schema.org Service + AggregateRating (cuando haya >5 reviews) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Aurea Systems — Captación con IA para clínicas",
  "provider": {"@type":"Organization","name":"Aurea Systems"},
  "areaServed": "ES",
  "offers": {"@type":"Offer","priceCurrency":"EUR"},
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "12"
  }
}
</script>
```

### 5.3 Reemplazar imágenes pesadas

Todas las PNG en `assets/*.png` (1.0-2.1 MB cada una) deben convertirse a WebP/AVIF + tener `srcset`. Comando sugerido:

```bash
# WebP a 80 quality
for f in assets/*.png; do
  cwebp -q 80 "$f" -o "${f%.png}.webp"
done

# AVIF a 60 quality (ratio 30-50% mejor)
for f in assets/*.png; do
  avifenc -q 60 "$f" "${f%.png}.avif"
done
```

Y en el HTML:

```html
<picture>
  <source type="image/avif" srcset="./assets/hero.avif" />
  <source type="image/webp" srcset="./assets/hero.webp" />
  <img src="./assets/hero.png" alt="…" loading="lazy" decoding="async" />
</picture>
```

### 5.4 Añadir tracking (con consent)

```html
<!-- GTM head -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
```

Eventos a trackear:
- `aurea_cta_click` (cualquier CTA, con `cta_position`)
- `aurea_calc_used` (calculadora completada)
- `aurea_test_completed` (con resultado)
- `aurea_form_submit`
- `aurea_calendar_open` (modal Cleesaas abierto)
- `aurea_calendar_booked` (callback Cleesaas)

---

## 6. KPIs de éxito de la V2

| Métrica                            | Baseline est. | Objetivo V2 |
|------------------------------------|---------------|-------------|
| Tasa conversión hero → calendario  | 1-2%          | 4-6%        |
| Tasa lead magnet (PDF/test)        | 0%            | 8-12%       |
| Bounce rate                        | ~55%          | <40%        |
| Tiempo medio en página             | ~30s          | >90s        |
| Lighthouse mobile                  | ~70           | >95         |
| Posicionamiento "captación clínica estética" | TOP 50 | TOP 10 |
| Reseñas Google públicas            | 0             | 10+         |
| Casos de éxito documentados        | 1             | 5+          |

---

## 7. Próximos pasos ejecutables (esta semana)

1. **Recopilar 3-5 casos reales** con permiso para publicar (foto, nombre, métricas antes/después).
2. **Grabar 3 vídeos testimoniales** (15-30s, vertical, móvil) con clínicas activas.
3. **Redactar las 10 FAQ** y validarlas con un médico director real.
4. **Diseñar la calculadora ROI** (puede ser HTML+JS en la misma página, sin backend).
5. **Convertir imágenes a WebP/AVIF** (1 hora de trabajo, ahorro 15-20MB descarga).
6. **Cuenta GA4 + GTM + consent banner** instalados.
7. **Subir el repo a GitHub** (hecho ✓) y conectar a Vercel/Netlify para staging.
8. **Producir el PDF lead magnet** "El sistema editorial de captación clínica" (12-20 páginas, mismo Atelier Zero).

---

## 8. Conclusión

La web actual ya es **estética y conceptualmente superior** a los 4 competidores analizados. El trabajo de V2 es **operativo**: rellenar los huecos de credibilidad (casos), conversión (calculadora, FAQ, lead magnet) y técnica (SEO, performance, multi-idioma).

Con el roadmap completado en 4-6 semanas, Aurea Systems no compite — **lidera la categoría**.

---

*Documento generado el 2026-05-09 a partir del análisis de:*
- `index.html` (3127 líneas, single-page editorial Atelier Zero)
- `inputs.json` (esquema de contenidos)
- `brand-spec.md` (especificación de marca)
- `marketlabs.es`, `360clinicconsulting.com`, `doctormarketing.digital`, `clinicgrowth.es` (competencia, fetched 2026-05-09)
