# -*- coding: utf-8 -*-
"""Shared chrome (head, top bar, header, footer, floating actions) for every page.

Edit here once; run `python _src/build.py` to regenerate the HTML files in the
repository root. The generated files are the ones GitHub Pages serves.
"""

SITE = "https://pathwaysmapping.github.io/home"

PHONE_E164 = "+2348165329943"
PHONE_HUMAN = "+234 816 532 9943"
WA = "2348165329943"
EMAIL = "pathwaysmapping@gmail.com"

NAV = [
    ("index.html", "Home"),
    ("about.html", "About"),
    ("services.html", "Services"),
    ("projects.html", "Projects"),
    ("training.html", "Training Institute"),
    ("contact.html", "Contact"),
]

# ── Icons ────────────────────────────────────────────────────────────────────

IC_LINKEDIN = '<svg viewBox="0 0 24 24"><path d="M19 3A2 2 0 0121 5v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .92.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>'
IC_FACEBOOK = '<svg viewBox="0 0 24 24"><path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 008.44-9.9c0-5.53-4.5-10.02-10-10.02z"/></svg>'
IC_X = '<svg viewBox="0 0 24 24"><path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.46l8.6-9.83L0 1.15h7.6l5.24 6.93 6.06-6.93zm-1.29 19.5h2.04L6.49 3.24H4.3L17.61 20.65z"/></svg>'
IC_YOUTUBE = '<svg viewBox="0 0 24 24"><path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"/></svg>'
IC_TIKTOK = '<svg viewBox="0 0 24 24"><path d="M16.6 5.82A4.28 4.28 0 0115.54 3h-3.09v12.4a2.59 2.59 0 01-2.59 2.5 2.59 2.59 0 01-2.59-2.59 2.59 2.59 0 013.42-2.45V9.72a5.72 5.72 0 00-.83-.06A5.69 5.69 0 004.17 15.3a5.69 5.69 0 005.69 5.7 5.69 5.69 0 005.7-5.7V9.01a7.35 7.35 0 004.3 1.38V7.3a4.28 4.28 0 01-3.26-1.48z"/></svg>'
IC_WA = '<svg viewBox="0 0 24 24"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 004.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.2 8.2 0 012.41 5.83c0 4.54-3.7 8.23-8.24 8.23a8.2 8.2 0 01-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 01-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.85-.87 2.07 0 1.22.89 2.39 1 2.56.14.17 1.72 2.62 4.17 3.68.58.25 1.04.4 1.4.51.58.19 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.05.14-1.16-.06-.1-.22-.16-.47-.28-.24-.14-1.47-.72-1.69-.8-.23-.09-.4-.13-.56.12-.17.26-.65.82-.8.99-.15.17-.29.19-.53.07-.26-.14-1.06-.4-2.03-1.25-.75-.67-1.25-1.5-1.4-1.75-.14-.26-.02-.4.1-.53.11-.11.26-.29.38-.44.13-.15.17-.26.25-.42.09-.17.05-.32-.02-.44-.08-.13-.56-1.36-.77-1.86-.2-.5-.4-.44-.56-.44-.14 0-.3-.03-.46-.03z"/></svg>'
IC_PHONE = '<svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z"/></svg>'

ARROW = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M5 12h13M13 6l6 6-6 6"/></svg>'
TICK = '<svg viewBox="0 0 24 24"><path d="M4 12l6 6L20 6"/></svg>'

SOCIALS = [
    ("https://www.linkedin.com/in/survemmanuelbayode", "LinkedIn", IC_LINKEDIN),
    ("https://www.facebook.com/surv.emmanuelbayode", "Facebook", IC_FACEBOOK),
    ("https://x.com/Pathways_map", "X (Twitter)", IC_X),
    ("https://www.youtube.com/@Surv.EmmanuelBayode", "YouTube", IC_YOUTUBE),
    ("https://www.tiktok.com/@surv.emmanuelbayode", "TikTok", IC_TIKTOK),
]

SAME_AS = ",\n        ".join('"%s"' % u for u, _, _ in SOCIALS)


# ── Structured data ──────────────────────────────────────────────────────────

ORG_LD = """    {
      "@type": ["ProfessionalService", "LocalBusiness"],
      "@id": "%(site)s/#org",
      "name": "Pathways Mapping Nigeria Limited",
      "alternateName": "Pathways Mapping",
      "description": "Registered indigenous geospatial and surveying company providing professional surveying, GIS, mapping and geospatial consultancy services across Nigeria.",
      "url": "%(site)s/",
      "logo": "%(site)s/assets/img/logo.png",
      "image": "%(site)s/assets/img/og-cover.png",
      "email": "%(email)s",
      "telephone": "%(phone)s",
      "foundingDate": "2021-09-30",
      "legalName": "Pathways Mapping Nigeria Limited",
      "knowsLanguage": "en",
      "identifier": [
        { "@type": "PropertyValue", "name": "RC Number", "value": "1846467" },
        { "@type": "PropertyValue", "name": "TIN", "value": "24029799-0001" }
      ],
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
      "founder": { "@id": "%(site)s/#principal" },
      "employee": { "@id": "%(site)s/#principal" },
      "sameAs": [
        %(sameas)s
      ]
    },
    {
      "@type": "Person",
      "@id": "%(site)s/#principal",
      "name": "Bayode Emmanuel Ozovehe",
      "honorificPrefix": "Surv.",
      "jobTitle": "Principal Surveyor / Managing Director",
      "worksFor": { "@id": "%(site)s/#org" },
      "email": "ozoveheemmanuel@gmail.com",
      "telephone": "%(phone)s",
      "alumniOf": [
        { "@type": "CollegeOrUniversity", "name": "Abubakar Tafawa Balewa University" },
        { "@type": "CollegeOrUniversity", "name": "Federal University of Technology, Akure" },
        { "@type": "CollegeOrUniversity", "name": "Rufus Giwa Polytechnic, Owo" }
      ],
      "hasCredential": [
        { "@type": "EducationalOccupationalCredential", "credentialCategory": "Professional Registration", "name": "SURCON Registration No. 5898", "recognizedBy": { "@type": "Organization", "name": "Surveyors Council of Nigeria" } },
        { "@type": "EducationalOccupationalCredential", "credentialCategory": "Professional Membership", "name": "NIS Membership No. NIS/ASS/2736", "recognizedBy": { "@type": "Organization", "name": "Nigerian Institution of Surveyors" } },
        { "@type": "EducationalOccupationalCredential", "credentialCategory": "degree", "name": "MSc Surveying and Geo-informatics (Geodesy and Geodynamics)" }
      ],
      "sameAs": [
        %(sameas)s
      ]
    },
    {
      "@type": "WebSite",
      "@id": "%(site)s/#website",
      "url": "%(site)s/",
      "name": "Pathways Mapping Nigeria Limited",
      "publisher": { "@id": "%(site)s/#org" },
      "inLanguage": "en-NG"
    }""" % {"site": SITE, "email": EMAIL, "phone": PHONE_E164, "sameas": SAME_AS}


def breadcrumb_ld(trail):
    """trail: list of (name, relative-url) — the last item is the current page."""
    items = []
    for i, (name, url) in enumerate(trail, start=1):
        items.append(
            '        { "@type": "ListItem", "position": %d, "name": "%s", "item": "%s/%s" }'
            % (i, name, SITE, url)
        )
    return (
        '    {\n      "@type": "BreadcrumbList",\n      "itemListElement": [\n'
        + ",\n".join(items)
        + "\n      ]\n    }"
    )


# ── Head ─────────────────────────────────────────────────────────────────────

def head(page):
    extra_ld = page.get("extra_ld") or []
    graph = [ORG_LD]
    if page.get("trail"):
        graph.append(breadcrumb_ld(page["trail"]))
    graph.extend(extra_ld)

    return """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>%(title)s</title>
<meta name="description" content="%(desc)s">
<meta name="keywords" content="%(kw)s">
<meta name="author" content="Pathways Mapping Nigeria Limited">
<meta name="robots" content="index, follow, max-image-preview:large">
<link rel="canonical" href="%(site)s/%(canon)s">

<meta property="og:type" content="website">
<meta property="og:site_name" content="Pathways Mapping Nigeria Limited">
<meta property="og:title" content="%(ogtitle)s">
<meta property="og:description" content="%(desc)s">
<meta property="og:url" content="%(site)s/%(canon)s">
<meta property="og:image" content="%(site)s/assets/img/og-cover.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="en_NG">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@Pathways_map">
<meta name="twitter:title" content="%(ogtitle)s">
<meta name="twitter:description" content="%(desc)s">
<meta name="twitter:image" content="%(site)s/assets/img/og-cover.png">
<meta name="theme-color" content="#15204f">
<meta name="geo.region" content="NG-ON">
<meta name="geo.placename" content="Akure, Ondo State, Nigeria">
<meta name="geo.position" content="7.2571;5.2058">

<link rel="icon" href="assets/img/favicon.png" type="image/png">
<link rel="apple-touch-icon" href="assets/img/logo.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/css/style.css">

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
%(graph)s
  ]
}
</script>
</head>
<body>

<a class="skip-link" href="#main">Skip to content</a>
""" % {
        "title": page["title"],
        "ogtitle": page.get("ogtitle", page["title"]),
        "desc": page["desc"],
        "kw": page.get("kw", ""),
        "canon": page["canon"],
        "site": SITE,
        "graph": ",\n".join(graph),
    }


# ── Header ───────────────────────────────────────────────────────────────────

def header(active):
    social = "".join(
        '<a href="%s" target="_blank" rel="noopener" aria-label="%s">%s</a>' % (u, n, i)
        for u, n, i in SOCIALS
    )
    links = "".join(
        '      <a href="%s"%s>%s</a>\n'
        % (href, ' class="is-active" aria-current="page"' if href == active else "", label)
        for href, label in NAV
    )
    return """
<div class="topbar">
  <div class="shell">
    <div class="topbar-facts">
      <span>RC 1846467</span>
      <span>SURCON Reg. 5898</span>
      <span><a href="mailto:%(email)s">%(email)s</a></span>
      <span><a href="tel:%(phone)s">%(phoneh)s</a></span>
    </div>
    <div class="topbar-social">%(social)s</div>
  </div>
</div>

<header class="site-head">
  <div class="shell">
    <a class="brand" href="index.html">
      <img src="assets/img/logo.png" alt="Pathways Mapping Nigeria Limited logo" width="46" height="46">
      <span class="brand-name">Pathways Mapping<span>Nigeria Limited</span></span>
    </a>
    <nav class="nav" id="nav" aria-label="Main">
%(links)s      <a href="contact.html#quote" class="btn btn--primary">Request a Quote</a>
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
""" % {"email": EMAIL, "phone": PHONE_E164, "phoneh": PHONE_HUMAN, "social": social, "links": links}


# ── Page banner for inner pages ──────────────────────────────────────────────

def pagehead(title, lede, trail):
    crumbs = ""
    if trail:
        parts = []
        for name, url in trail[:-1]:
            parts.append('<a href="%s">%s</a>' % (url, name))
        parts.append(trail[-1][0])
        crumbs = '      <div class="crumbs">%s</div>\n' % "<span>/</span>".join(parts)
    return """
<section class="pagehead">
  <div class="shell">
%(crumbs)s    <h1>%(title)s</h1>
    <p>%(lede)s</p>
  </div>
</section>
""" % {"crumbs": crumbs, "title": title, "lede": lede}


# ── CTA band ─────────────────────────────────────────────────────────────────

def cta(heading, text, primary=("contact.html#quote", "Request a Quote")):
    return """
<section class="cta-band">
  <div class="shell">
    <div class="cta-inner">
      <div>
        <h2>%(h)s</h2>
        <p>%(t)s</p>
      </div>
      <div class="btn-row">
        <a href="%(purl)s" class="btn btn--primary btn--lg">%(plabel)s</a>
        <a href="tel:%(phone)s" class="btn btn--onnavy btn--lg">Call %(phoneh)s</a>
      </div>
    </div>
  </div>
</section>
""" % {"h": heading, "t": text, "purl": primary[0], "plabel": primary[1],
       "phone": PHONE_E164, "phoneh": PHONE_HUMAN}


# ── Footer ───────────────────────────────────────────────────────────────────

def footer():
    social = "".join(
        '<a href="%s" target="_blank" rel="noopener" aria-label="%s" style="color:#8f9ac0">%s</a>'
        % (u, n, i.replace("<svg ", '<svg width="17" height="17" ').replace('viewBox', 'fill="currentColor" viewBox'))
        for u, n, i in SOCIALS
    )
    return """
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
            <strong>RC 1846467</strong> &middot; Incorporated 30 September 2021<br>
            <strong>TIN</strong> 24029799-0001<br>
            <strong>SURCON</strong> Reg. No. 5898 &middot; <strong>NIS</strong> NIS/ASS/2736
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
            <li><a href="tel:%(phone)s">%(phoneh)s</a></li>
            <li><a href="mailto:%(email)s">%(email)s</a></li>
            <li><a href="https://wa.me/%(wa)s" target="_blank" rel="noopener">Message us on WhatsApp</a></li>
          </ul>
          <div style="display:flex;gap:14px;margin-top:18px">%(social)s</div>
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
  <a class="fab-wa" href="https://wa.me/%(wa)s?text=Hello%%20Pathways%%20Mapping%%2C%%20I%%27d%%20like%%20to%%20discuss%%20a%%20project."
     target="_blank" rel="noopener" aria-label="Chat with us on WhatsApp">%(icwa)s</a>
  <a class="fab-call" href="tel:%(phone)s" aria-label="Call Pathways Mapping">%(icph)s</a>
</div>

<script src="assets/js/main.js" defer></script>
</body>
</html>
""" % {"phone": PHONE_E164, "phoneh": PHONE_HUMAN, "email": EMAIL, "wa": WA,
       "social": social, "icwa": IC_WA, "icph": IC_PHONE}
