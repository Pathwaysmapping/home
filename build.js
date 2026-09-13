import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT = __dirname;
const BODY = path.join(ROOT, '_src', 'body');

const SITE = 'https://pathwaysmapping.github.io/home';
const PHONE_E164 = '+2348165329943';
const PHONE_HUMAN = '+234 816 532 9943';
const WA = '2348165329943';
const EMAIL = 'pathwaysmapping@gmail.com';

const HOME = ['Home', 'index.html'];

const NAV = [
  ['index.html', 'Home'],
  ['about.html', 'About'],
  ['services.html', 'Services'],
  ['projects.html', 'Projects'],
  ['training.html', 'Training Institute'],
  ['contact.html', 'Contact'],
];

const IC_LINKEDIN = '<svg viewBox="0 0 24 24"><path d="M19 3A2 2 0 0121 5v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .92.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>';
const IC_FACEBOOK = '<svg viewBox="0 0 24 24"><path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 008.44-9.9c0-5.53-4.5-10.02-10-10.02z"/></svg>';
const IC_X = '<svg viewBox="0 0 24 24"><path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.46l8.6-9.83L0 1.15h7.6l5.24 6.93 6.06-6.93zm-1.29 19.5h2.04L6.49 3.24H4.3L17.61 20.65z"/></svg>';
const IC_YOUTUBE = '<svg viewBox="0 0 24 24"><path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"/></svg>';
const IC_TIKTOK = '<svg viewBox="0 0 24 24"><path d="M16.6 5.82A4.28 4.28 0 0115.54 3h-3.09v12.4a2.59 2.59 0 01-2.59 2.5 2.59 2.59 0 01-2.59-2.59 2.59 2.59 0 013.42-2.45V9.72a5.72 5.72 0 00-.83-.06A5.69 5.69 0 004.17 15.3a5.69 5.69 0 005.69 5.7 5.69 5.69 0 005.7-5.7V9.01a7.35 7.35 0 004.3 1.38V7.3a4.28 4.28 0 01-3.26-1.48z"/></svg>';
const IC_WA = '<svg viewBox="0 0 24 24"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 004.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.2 8.2 0 012.41 5.83c0 4.54-3.7 8.23-8.24 8.23a8.2 8.2 0 01-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 01-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.85-.87 2.07 0 1.22.89 2.39 1 2.56.14.17 1.72 2.62 4.17 3.68.58.25 1.04.4 1.4.51.58.19 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.05.14-1.16-.06-.1-.22-.16-.47-.28-.24-.14-1.47-.72-1.69-.8-.23-.09-.4-.13-.56.12-.17.26-.65.82-.8.99-.15.17-.29.19-.53.07-.26-.14-1.06-.4-2.03-1.25-.75-.67-1.25-1.5-1.4-1.75-.14-.26-.02-.4.1-.53.11-.11.26-.29.38-.44.13-.15.17-.26.25-.42.09-.17.05-.32-.02-.44-.08-.13-.56-1.36-.77-1.86-.2-.5-.4-.44-.56-.44-.14 0-.3-.03-.46-.03z"/></svg>';
const IC_PHONE = '<svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z"/></svg>';

const SOCIALS = [
  ['https://www.linkedin.com/in/survemmanuelbayode', 'LinkedIn', IC_LINKEDIN],
  ['https://www.facebook.com/surv.emmanuelbayode', 'Facebook', IC_FACEBOOK],
  ['https://x.com/Pathways_map', 'X (Twitter)', IC_X],
  ['https://www.youtube.com/@Surv.EmmanuelBayode', 'YouTube', IC_YOUTUBE],
  ['https://www.tiktok.com/@surv.emmanuelbayode', 'TikTok', IC_TIKTOK],
];

const SAME_AS = SOCIALS.map(([u]) => `"${u}"`).join(',\n        ');

const ORG_LD = `    {
      "@type": ["ProfessionalService", "LocalBusiness"],
      "@id": "${SITE}/#org",
      "name": "Pathways Mapping Nigeria Limited",
      "alternateName": "Pathways Mapping",
      "description": "Registered indigenous geospatial and surveying company providing professional surveying, GIS, mapping and geospatial consultancy services across Nigeria.",
      "url": "${SITE}/",
      "logo": "${SITE}/assets/img/logo.png",
      "image": "${SITE}/assets/img/og-cover.png",
      "email": "${EMAIL}",
      "telephone": "${PHONE_E164}",
      "foundingDate": "2021-09-30",
      "legalName": "Pathways Mapping Nigeria Limited",
      "knowsLanguage": "en",
      "knowsAbout": ["Cadastral Surveying", "Engineering Surveying", "Drone Photogrammetry", "GIS", "Hydrographic Bathymetry"],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "140 Oyemekun Road, beside Sterling Bank",
        "addressLocality": "Akure",
        "postalCode": "340110",
        "addressRegion": "Ondo State",
        "addressCountry": "NG"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": 7.2571, "longitude": 5.2058 },
      "areaServed": { "@type": "Country", "name": "Nigeria" },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
        "opens": "08:00", "closes": "17:00"
      },
      "founder": { "@id": "${SITE}/#principal" },
      "employee": { "@id": "${SITE}/#principal" },
      "sameAs": [
        ${SAME_AS}
      ]
    },
    {
      "@type": "Person",
      "@id": "${SITE}/#principal",
      "name": "Bayode Emmanuel Ozovehe",
      "honorificPrefix": "Surv.",
      "jobTitle": "Principal Surveyor / Managing Director",
      "worksFor": { "@id": "${SITE}/#org" },
      "email": "ozoveheemmanuel@gmail.com",
      "telephone": "${PHONE_E164}",
      "alumniOf": [
        { "@type": "CollegeOrUniversity", "name": "Abubakar Tafawa Balewa University" },
        { "@type": "CollegeOrUniversity", "name": "Federal University of Technology, Akure" },
        { "@type": "CollegeOrUniversity", "name": "Rufus Giwa Polytechnic, Owo" }
      ],
      "hasCredential": [
        { "@type": "EducationalOccupationalCredential", "credentialCategory": "Professional Registration", "name": "SURCON Regulated Surveyor", "recognizedBy": { "@type": "Organization", "name": "Surveyors Council of Nigeria" } },
        { "@type": "EducationalOccupationalCredential", "credentialCategory": "Professional Membership", "name": "NIS Member", "recognizedBy": { "@type": "Organization", "name": "Nigerian Institution of Surveyors" } },
        { "@type": "EducationalOccupationalCredential", "credentialCategory": "degree", "name": "MSc Surveying and Geo-informatics (Geodesy and Geodynamics)" }
      ],
      "sameAs": [
        ${SAME_AS}
      ]
    },
    {
      "@type": "WebSite",
      "@id": "${SITE}/#website",
      "url": "${SITE}/",
      "name": "Pathways Mapping Nigeria Limited",
      "publisher": { "@id": "${SITE}/#org" },
      "inLanguage": "en-NG"
    }`;

const COURSE_LD = `    {
      "@type": "EducationalOrganization",
      "@id": "${SITE}/#institute",
      "name": "Pathways GIS Institute",
      "alternateName": "Pathways Mapping Training Institute",
      "description": "Geospatial training institute in Akure, Ondo State offering drone mapping, GIS, remote sensing, RTK GNSS, spatial data science and AI for geospatial analysis.",
      "url": "${SITE}/training.html",
      "parentOrganization": { "@id": "${SITE}/#org" },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "140 Oyemekun Road, beside Sterling Bank",
        "addressLocality": "Akure",
        "postalCode": "340110",
        "addressRegion": "Ondo State",
        "addressCountry": "NG"
      },
      "telephone": "${PHONE_E164}",
      "email": "${EMAIL}"
    }`;

const FAQ_LD = `    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do I need a surveying background to enrol?",
          "acceptedAnswer": { "@type": "Answer", "text": "No. Foundation-level courses assume no prior geospatial experience and start from first principles. Professional-level courses assume working familiarity with survey or GIS practice, which is stated on each course." }
        },
        {
          "@type": "Question",
          "name": "Will I get a certificate?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Every participant who completes the assessment receives a certificate of completion issued by Pathways Mapping Nigeria Limited and signed by a SURCON-registered surveyor. We are actively building institutional and regulatory partnerships to strengthen recognition of the certificate." }
        },
        {
          "@type": "Question",
          "name": "Is training available online?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Courses run in three formats: physical hands-on training in Akure, live online cohorts, and on-site corporate training delivered at your premises anywhere in Nigeria." }
        },
        {
          "@type": "Question",
          "name": "Do participants get hands-on time with real instruments?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Physical and corporate cohorts include supervised field sessions on an RTK GNSS receiver, total station and UAV mapping platform. Field practicals use live project data rather than textbook exercises." }
        },
        {
          "@type": "Question",
          "name": "Where is the institute located?",
          "acceptedAnswer": { "@type": "Answer", "text": "Akure, Ondo State — at 140 Oyemekun Road, beside Sterling Bank. Corporate cohorts can be delivered at a client site anywhere in Nigeria." }
        }
      ]
    }`;

function breadcrumb_ld(trail) {
  const items = trail.map(([name, url], i) =>
    `        { "@type": "ListItem", "position": ${i + 1}, "name": "${name}", "item": "${SITE}/${url}" }`
  );
  return `    {\n      "@type": "BreadcrumbList",\n      "itemListElement": [\n${items.join(',\n')}\n      ]\n    }`;
}

function head(page) {
  const extra_ld = page.extra_ld || [];
  const graph = [ORG_LD];
  if (page.trail) {
    graph.push(breadcrumb_ld(page.trail));
  }
  graph.push(...extra_ld);

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${page.title}</title>
<meta name="description" content="${page.desc}">
<meta name="keywords" content="${page.kw || ''}">
<meta name="author" content="Pathways Mapping Nigeria Limited">
<meta name="robots" content="index, follow, max-image-preview:large">
<link rel="canonical" href="${SITE}/${page.canon}">

<meta property="og:type" content="website">
<meta property="og:site_name" content="Pathways Mapping Nigeria Limited">
<meta property="og:title" content="${page.ogtitle || page.title}">
<meta property="og:description" content="${page.desc}">
<meta property="og:url" content="${SITE}/${page.canon}">
<meta property="og:image" content="${SITE}/assets/img/og-cover.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="en_NG">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@Pathways_map">
<meta name="twitter:title" content="${page.ogtitle || page.title}">
<meta name="twitter:description" content="${page.desc}">
<meta name="twitter:image" content="${SITE}/assets/img/og-cover.png">
<meta name="theme-color" content="#15204f">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Pathways">
<meta name="geo.region" content="NG-ON">
<meta name="geo.placename" content="Akure, Ondo State, Nigeria">
<meta name="geo.position" content="7.2571;5.2058">

<link rel="manifest" href="manifest.webmanifest">
<link rel="icon" href="assets/img/favicon.png" type="image/png">
<link rel="apple-touch-icon" href="assets/img/apple-touch-icon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/css/style.css">

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
${graph.join(',\n')}
  ]
}
</script>
</head>
<body>

<a class="skip-link" href="#main">Skip to content</a>
`;
}

function header(active) {
  const social = SOCIALS.map(([u, n, i]) =>
    `<a href="${u}" target="_blank" rel="noopener" aria-label="${n}">${i}</a>`
  ).join('');

  const links = NAV.map(([href, label]) =>
    `      <a href="${href}"${href === active ? ' class="is-active" aria-current="page"' : ''}>${label}</a>\n`
  ).join('');

  return `
<div id="offline-indicator" class="offline-banner" hidden>
  <span>You are currently offline. Local estimates, converters, and cached portfolios remain fully operational.</span>
</div>

<div class="topbar">
  <div class="shell">
    <div class="topbar-facts">
      <span>CAC Incorporated</span>
      <span>SURCON Regulated</span>
      <span><a href="mailto:${EMAIL}">${EMAIL}</a></span>
      <span><a href="tel:${PHONE_E164}">${PHONE_HUMAN}</a></span>
    </div>
    <div class="topbar-social">
      <button type="button" id="pwa-install-btn" class="pwa-install-pill" style="display:none">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
        Install App
      </button>
      ${social}
    </div>
  </div>
</div>

<header class="site-head">
  <div class="shell">
    <a class="brand" href="index.html">
      <img src="assets/img/logo.png" alt="Pathways Mapping Nigeria Limited logo" width="46" height="46">
      <span class="brand-name">Pathways Mapping<span>Nigeria Limited</span></span>
    </a>
    <nav class="nav" id="nav" aria-label="Main Navigation">
      <div class="nav-drawer-head">
        <span class="nav-drawer-title">Navigation</span>
        <button type="button" class="nav-close" aria-label="Close navigation menu">&times;</button>
      </div>
      <div class="nav-links-wrap">
${links}      </div>
      <div class="nav-drawer-foot">
        <a href="contact.html#quote" class="btn btn--primary btn--block">Request a Quote</a>
        <div class="nav-drawer-contact">
          <a href="tel:${PHONE_E164}" class="nav-drawer-call">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.4 11.4 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.4 11.4 0 00.57 3.58 1 1 0 01-.24 1.02l-2.21 2.19z"/></svg>
            <span>Call Us</span>
          </a>
          <a href="https://wa.me/2348165329943" class="nav-drawer-wa" target="_blank" rel="noopener">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 004.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.2 8.2 0 012.41 5.83c0 4.54-3.7 8.23-8.24 8.23a8.2 8.2 0 01-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 01-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.85-.87 2.07 0 1.22.89 2.39 1 2.56.14.17 1.72 2.62 4.17 3.68.58.25 1.04.4 1.4.51.58.19 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.05.14-1.16-.06-.1-.22-.16-.47-.28-.24-.14-1.47-.72-1.69-.8-.23-.09-.4-.13-.56.12-.17.26-.65.82-.8.99-.15.17-.29.19-.53.07-.26-.14-1.06-.4-2.03-1.25-.75-.67-1.25-1.5-1.4-1.75-.14-.26-.02-.4.1-.53.11-.11.26-.29.38-.44.13-.15.17-.26.25-.42.09-.17.05-.32-.02-.44-.08-.13-.56-1.36-.77-1.86-.2-.5-.4-.44-.56-.44-.14 0-.3-.03-.46-.03z"/></svg>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </nav>
    <div class="head-cta">
      <a href="contact.html#quote" class="btn btn--primary">Request a Quote</a>
      <button class="nav-toggle" type="button" aria-label="Open menu" aria-controls="nav" aria-expanded="false">
        <svg viewBox="0 0 24 24"><path d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2z"/></svg>
      </button>
    </div>
  </div>
</header>

<main id="main">
`;
}

function pagehead(title, lede, trail) {
  let crumbs = '';
  if (trail) {
    const parts = trail.slice(0, -1).map(([name, url]) => `<a href="${url}">${name}</a>`);
    parts.push(trail[trail.length - 1][0]);
    crumbs = `      <div class="crumbs">${parts.join('<span>/</span>')}</div>\n`;
  }
  return `
<section class="pagehead">
  <div class="shell">
${crumbs}    <h1>${title}</h1>
    <p>${lede}</p>
  </div>
</section>
`;
}

function cta(heading, text, primary = ['contact.html#quote', 'Request a Quote']) {
  return `
<section class="cta-band">
  <div class="shell">
    <div class="cta-inner">
      <div>
        <h2>${heading}</h2>
        <p>${text}</p>
      </div>
      <div class="btn-row">
        <a href="${primary[0]}" class="btn btn--primary btn--lg">${primary[1]}</a>
        <a href="tel:${PHONE_E164}" class="btn btn--onnavy btn--lg">Call ${PHONE_HUMAN}</a>
      </div>
    </div>
  </div>
</section>
`;
}

function footer() {
  const social = SOCIALS.map(([u, n, i]) =>
    `<a href="${u}" target="_blank" rel="noopener" aria-label="${n}" style="color:#8f9ac0">${i.replace('<svg ', '<svg width="17" height="17" ').replace('viewBox', 'fill="currentColor" viewBox')}</a>`
  ).join('');

  return `
</main>

<footer class="site-foot">
  <div class="foot-main">
    <div class="shell">
      <div class="foot-grid">
        <div>
          <div class="foot-brand">
            <img src="assets/img/logo.png" alt="" width="52" height="52">
            <span class="foot-brand-name">Pathways Mapping<span>Nigeria Limited</span></span>
          </div>
          <p style="font-size:14.5px">
            A registered indigenous geospatial and surveying company delivering professional
            surveying, GIS, mapping and consultancy services across Nigeria.
          </p>
          <div class="foot-rc">
            <strong>CAC</strong> Incorporated &middot; 30 September 2021<br>
            <strong>FIRS</strong> Tax Compliant<br>
            <strong>SURCON</strong> Regulated &middot; <strong>NIS</strong> Member
          </div>
        </div>

        <div>
          <h4>Services</h4>
          <ul class="foot-links">
            <li><a href="services.html#engineering">Engineering Survey</a></li>
            <li><a href="services.html#topographic">Topographic Survey</a></li>
            <li><a href="services.html#cadastral">Cadastral &amp; Boundary</a></li>
            <li><a href="services.html#mining">Mining Cadastral</a></li>
            <li><a href="services.html#uav">Drone / UAV Mapping</a></li>
            <li><a href="services.html#gis">GIS &amp; Remote Sensing</a></li>
            <li><a href="services.html">All twelve services</a></li>
          </ul>
        </div>

        <div>
          <h4>Institute</h4>
          <ul class="foot-links">
            <li><a href="training.html#courses">Course catalogue</a></li>
            <li><a href="training.html#formats">Physical &amp; online</a></li>
            <li><a href="training.html#corporate">Corporate training</a></li>
            <li><a href="training.html#partners">Partner with us</a></li>
            <li><a href="training.html#interest">Register interest</a></li>
            <li><a href="training.html#faq">Training FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul class="foot-links">
            <li>140 Oyemekun Road, beside Sterling Bank,<br>Akure 340110, Ondo State</li>
            <li><a href="tel:${PHONE_E164}">${PHONE_HUMAN}</a></li>
            <li><a href="mailto:${EMAIL}">${EMAIL}</a></li>
            <li><a href="https://wa.me/${WA}" target="_blank" rel="noopener">Message us on WhatsApp</a></li>
          </ul>
          <div style="display:flex;gap:14px;margin-top:18px">${social}</div>
        </div>
      </div>
    </div>
  </div>
  <div class="foot-bar">
    <div class="shell">
      <span>&copy; <span data-year>2026</span> Pathways Mapping Nigeria Limited. All rights reserved.</span>
      <span>Akure &middot; Ondo State &middot; Nigeria &mdash; operating nationwide</span>
    </div>
  </div>
</footer>

<div class="fab">
  <a class="fab-wa" href="https://wa.me/${WA}?text=Hello%20Pathways%20Mapping%2C%20I%27d%20like%20to%20discuss%20a%20project."
     target="_blank" rel="noopener" aria-label="Chat with us on WhatsApp">${IC_WA}</a>
  <a class="fab-call" href="tel:${PHONE_E164}" aria-label="Call Pathways Mapping">${IC_PHONE}</a>
</div>

<!-- Modal Dialog -->
<div id="submission-modal" class="app-modal-overlay" hidden>
  <div class="app-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
    <div class="app-modal-head">
      <h3 id="modal-title" style="margin:0;font-size:18px">Submission Received</h3>
      <button type="button" class="app-modal-close" aria-label="Close dialog">&times;</button>
    </div>
    <div class="app-modal-body" id="modal-body-content"></div>
  </div>
</div>

<script src="assets/js/main.js" defer></script>
</body>
</html>
`;
}

const PAGES = [
  {
    name: 'index',
    canon: '',
    active: 'index.html',
    title: 'Pathways Mapping Nigeria Limited | Surveying, GIS & Drone Mapping — Akure, Ondo State',
    ogtitle: 'Pathways Mapping Nigeria Limited | Surveying, GIS & Drone Mapping',
    desc: 'SURCON-regulated surveying, GIS and drone mapping consultancy in Akure, Ondo State. Topographic, cadastral, engineering, mining cadastral and UAV survey services nationwide.',
    kw: 'land surveyor Akure, surveying company Ondo State, drone mapping Nigeria, GIS consultancy Nigeria, mining cadastral survey, topographic survey Akure, SURCON regulated surveyor, UAV mapping Nigeria, geospatial company Nigeria, CAC incorporated',
    trail: null,
    banner: null,
    cta: [
      'Have a site that needs surveying?',
      'Send us the location and scope. You will get a written quotation with methodology, deliverables and turnaround — not a bare figure.',
    ],
  },
  {
    name: 'about',
    canon: 'about.html',
    active: 'about.html',
    title: 'About Us | Pathways Mapping Nigeria Limited — Registered Surveying Firm, Akure',
    ogtitle: 'About Pathways Mapping Nigeria Limited',
    desc: 'Registered indigenous geospatial firm incorporated 2021, led by Surv. Bayode Emmanuel Ozovehe, SURCON-regulated surveyor and NIS Member. Our profile, credentials, team and equipment register.',
    kw: 'Pathways Mapping Nigeria Limited, CAC incorporated, SURCON regulated, Bayode Emmanuel Ozovehe, registered surveyor Akure, NIS member, geospatial firm Ondo State',
    trail: [HOME, ['About', 'about.html']],
    banner: [
      'About Pathways Mapping',
      'A registered indigenous geospatial and surveying company, incorporated in 2021 and led by a surveyor the regulator recognises by name.',
    ],
    cta: [
      'Want to see our full company profile?',
      'We can send the complete corporate profile, CAC documents, tax clearance and professional registrations for your vendor pre-qualification.',
    ],
  },
  {
    name: 'services',
    canon: 'services.html',
    active: 'services.html',
    title: 'Survey, GIS & Drone Mapping Services | Pathways Mapping Nigeria Limited',
    ogtitle: 'Our Services | Pathways Mapping Nigeria Limited',
    desc: 'Twelve core service lines: engineering, topographic, construction, cadastral, mining cadastral, route and as-built survey, UAV mapping, GIS, remote sensing, CAD drafting and geospatial training.',
    kw: 'topographic survey Nigeria, cadastral survey Akure, setting out survey, mining cadastral survey Nigeria, drone survey company, as-built survey, route corridor survey, GIS mapping services, remote sensing Nigeria',
    trail: [HOME, ['Services', 'services.html']],
    banner: [
      'Services',
      'Twelve core service lines, delivered in-house from ground control to certified plan — so your project never waits on a handoff between contractors.',
    ],
    cta: [
      'Not sure which service you need?',
      'Describe the site and what the output is for. We will tell you the right survey type, the method that suits the terrain, and what it will cost.',
    ],
  },
  {
    name: 'projects',
    canon: 'projects.html',
    active: 'projects.html',
    title: 'Projects & Track Record | Pathways Mapping Nigeria Limited',
    ogtitle: 'Projects | Pathways Mapping Nigeria Limited',
    desc: 'Selected survey projects across aviation, road infrastructure, transport terminals and institutional boundary work in Lagos, Abuja FCT, Adamawa, Bauchi and Ondo State.',
    kw: 'survey projects Nigeria, NESTAV hangar survey, Yola Mubi road survey, Abuja bus terminal survey, Itas Gadau road, surveying track record Nigeria',
    trail: [HOME, ['Projects', 'projects.html']],
    banner: [
      'Projects',
      'Twelve years of field delivery under contract to major Nigerian construction and energy groups — across five states and four sectors.',
    ],
    cta: [
      'Want references from these projects?',
      'We can put you in touch with past clients and supply detailed project sheets on request as part of a tender or pre-qualification submission.',
    ],
  },
  {
    name: 'training',
    canon: 'training.html',
    active: 'training.html',
    title: 'Pathways GIS Institute | Drone, GIS, Remote Sensing & AI Training in Akure',
    ogtitle: 'Pathways GIS Institute | Geospatial Training in Akure, Nigeria',
    desc: 'Geospatial training institute in Akure, Ondo State. Drone mapping, GIS, remote sensing, RTK GNSS, AutoCAD Civil 3D, spatial data science and AI for geospatial analysis — taught by a registered surveyor.',
    kw: 'GIS training Akure, drone training Nigeria, drone mapping course Ondo State, remote sensing course Nigeria, GIS institute Akure, AutoCAD Civil 3D training, spatial data science Nigeria, AI geospatial training, surveying training institute Nigeria',
    trail: [HOME, ['Training Institute', 'training.html']],
    banner: [
      'Pathways GIS Institute',
      'A geospatial training institute for Akure, Ondo State — drone mapping, GIS, remote sensing, RTK GNSS practice and AI for spatial analysis, taught on live project data by a registered surveyor.',
    ],
    cta: [
      'Want a place in the first cohort?',
      'Register your interest now. You will be first to receive the confirmed schedule, fee structure and early-enrolment place when cohorts open.',
    ],
    cta_primary: ['training.html#interest', 'Register your interest'],
    extra_ld: [COURSE_LD, FAQ_LD],
  },
  {
    name: 'contact',
    canon: 'contact.html',
    active: 'contact.html',
    title: 'Contact & Request a Quote | Pathways Mapping Nigeria Limited, Akure',
    ogtitle: 'Contact Pathways Mapping Nigeria Limited',
    desc: 'Request a survey quotation, book a site visit or reach our Akure office. Call +234 816 532 9943, message on WhatsApp, or send the enquiry form.',
    kw: 'contact surveyor Akure, survey quote Nigeria, hire land surveyor Ondo State, survey company phone number Nigeria',
    trail: [HOME, ['Contact', 'contact.html']],
    banner: [
      'Contact us',
      'Tell us the location, the scope and what the survey output is for. We reply to every enquiry — WhatsApp gets the fastest response.',
    ],
    cta: null,
  },
];

function readBody(name) {
  const filePath = path.join(BODY, `${name}.html`);
  return fs.readFileSync(filePath, 'utf-8');
}

export function build() {
  console.log('Building Pathways Mapping site with Node.js...');
  const written = [];
  for (const page of PAGES) {
    const parts = [head(page), header(page.active)];

    if (page.banner) {
      parts.push(pagehead(page.banner[0], page.banner[1], page.trail));
    }

    parts.push(readBody(page.name));

    if (page.cta) {
      const primary = page.cta_primary || ['contact.html#quote', 'Request a Quote'];
      parts.push(cta(page.cta[0], page.cta[1], primary));
    }

    parts.push(footer());

    const out = path.join(ROOT, `${page.name}.html`);
    fs.writeFileSync(out, parts.join(''), 'utf-8');
    const sizeKb = Math.floor(fs.statSync(out).size / 1024);
    console.log(`  wrote ${page.name}.html (${sizeKb} KB)`);
    written.push(out);
  }

  generateSitemap(written);
  console.log('Done building site.');
  return written;
}

function generateSitemap() {
  const priority = { '': '1.0', 'training.html': '0.9', 'services.html': '0.9', 'contact.html': '0.8' };
  const urls = PAGES.map((page) => {
    const loc = `${SITE}/${page.canon}`;
    const p = priority[page.canon] || '0.7';
    return `  <url>\n    <loc>${loc}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>${p}</priority>\n  </url>`;
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`;
  const sitemapPath = path.join(ROOT, 'sitemap.xml');
  fs.writeFileSync(sitemapPath, xml, 'utf-8');
  console.log(`  wrote sitemap.xml (${urls.length} urls)`);
}

build();
