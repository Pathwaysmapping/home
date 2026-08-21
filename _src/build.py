# -*- coding: utf-8 -*-
"""Assemble the static site.

    python _src/build.py

Reads the body fragment for each page from `_src/body/<name>.html`, wraps it in
the shared chrome from `chrome.py`, and writes the finished page to the
repository root, where GitHub Pages serves it. Also emits sitemap.xml.
"""

import io
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import chrome  # noqa: E402

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BODY = os.path.join(ROOT, "_src", "body")

HOME = ("Home", "index.html")

COURSE_LD = """    {
      "@type": "EducationalOrganization",
      "@id": "%(site)s/#institute",
      "name": "Pathways GIS Institute",
      "alternateName": "Pathways Mapping Training Institute",
      "description": "Geospatial training institute in Akure, Ondo State offering drone mapping, GIS, remote sensing, RTK GNSS, spatial data science and AI for geospatial analysis.",
      "url": "%(site)s/training.html",
      "parentOrganization": { "@id": "%(site)s/#org" },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "140 Oyemekun Road, beside Sterling Bank",
        "addressLocality": "Akure",
        "postalCode": "340110",
        "addressRegion": "Ondo State",
        "addressCountry": "NG"
      },
      "telephone": "%(phone)s",
      "email": "%(email)s"
    }""" % {"site": chrome.SITE, "phone": chrome.PHONE_E164, "email": chrome.EMAIL}

FAQ_LD = """    {
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
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Every participant who completes the assessment receives a certificate of completion issued by Pathways Mapping Nigeria Limited (RC 1846467) and signed by a SURCON-registered surveyor. We are actively building institutional and regulatory partnerships to strengthen recognition of the certificate." }
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
    }"""

PAGES = [
    {
        "name": "index",
        "canon": "",
        "active": "index.html",
        "title": "Pathways Mapping Nigeria Limited | Surveying, GIS & Drone Mapping — Akure, Ondo State",
        "ogtitle": "Pathways Mapping Nigeria Limited | Surveying, GIS & Drone Mapping",
        "desc": "SURCON-registered surveying, GIS and drone mapping consultancy in Akure, Ondo State. Topographic, cadastral, engineering, mining cadastral and UAV survey services nationwide. RC 1846467.",
        "kw": "land surveyor Akure, surveying company Ondo State, drone mapping Nigeria, GIS consultancy Nigeria, mining cadastral survey, topographic survey Akure, SURCON registered surveyor, UAV mapping Nigeria, geospatial company Nigeria",
        "trail": None,
        "banner": None,
        "cta": ("Have a site that needs surveying?",
                "Send us the location and scope. You will get a written quotation with methodology, deliverables and turnaround — not a bare figure."),
    },
    {
        "name": "about",
        "canon": "about.html",
        "active": "about.html",
        "title": "About Us | Pathways Mapping Nigeria Limited — Registered Surveying Firm, Akure",
        "ogtitle": "About Pathways Mapping Nigeria Limited",
        "desc": "Registered indigenous geospatial firm incorporated 2021 (RC 1846467), led by Surv. Bayode Emmanuel Ozovehe, SURCON Reg. 5898. Our profile, credentials, team and equipment register.",
        "kw": "Pathways Mapping Nigeria Limited, RC 1846467, SURCON 5898, Bayode Emmanuel Ozovehe, registered surveyor Akure, NIS member, geospatial firm Ondo State",
        "trail": [HOME, ("About", "about.html")],
        "banner": ("About Pathways Mapping",
                   "A registered indigenous geospatial and surveying company, incorporated in 2021 and led by a surveyor the regulator recognises by name."),
        "cta": ("Want to see our full company profile?",
                "We can send the complete corporate profile, CAC documents, tax clearance and professional registrations for your vendor pre-qualification."),
    },
    {
        "name": "services",
        "canon": "services.html",
        "active": "services.html",
        "title": "Survey, GIS & Drone Mapping Services | Pathways Mapping Nigeria Limited",
        "ogtitle": "Our Services | Pathways Mapping Nigeria Limited",
        "desc": "Twelve core service lines: engineering, topographic, construction, cadastral, mining cadastral, route and as-built survey, UAV mapping, GIS, remote sensing, CAD drafting and geospatial training.",
        "kw": "topographic survey Nigeria, cadastral survey Akure, setting out survey, mining cadastral survey Nigeria, drone survey company, as-built survey, route corridor survey, GIS mapping services, remote sensing Nigeria",
        "trail": [HOME, ("Services", "services.html")],
        "banner": ("Services",
                   "Twelve core service lines, delivered in-house from ground control to certified plan — so your project never waits on a handoff between contractors."),
        "cta": ("Not sure which service you need?",
                "Describe the site and what the output is for. We will tell you the right survey type, the method that suits the terrain, and what it will cost."),
    },
    {
        "name": "projects",
        "canon": "projects.html",
        "active": "projects.html",
        "title": "Projects & Track Record | Pathways Mapping Nigeria Limited",
        "ogtitle": "Projects | Pathways Mapping Nigeria Limited",
        "desc": "Selected survey projects across aviation, road infrastructure, transport terminals and institutional boundary work in Lagos, Abuja FCT, Adamawa, Bauchi and Ondo State.",
        "kw": "survey projects Nigeria, NESTAV hangar survey, Yola Mubi road survey, Abuja bus terminal survey, Itas Gadau road, surveying track record Nigeria",
        "trail": [HOME, ("Projects", "projects.html")],
        "banner": ("Projects",
                   "Twelve years of field delivery under contract to major Nigerian construction and energy groups — across five states and four sectors."),
        "cta": ("Want references from these projects?",
                "We can put you in touch with past clients and supply detailed project sheets on request as part of a tender or pre-qualification submission."),
    },
    {
        "name": "training",
        "canon": "training.html",
        "active": "training.html",
        "title": "Pathways GIS Institute | Drone, GIS, Remote Sensing & AI Training in Akure",
        "ogtitle": "Pathways GIS Institute | Geospatial Training in Akure, Nigeria",
        "desc": "Geospatial training institute in Akure, Ondo State. Drone mapping, GIS, remote sensing, RTK GNSS, AutoCAD Civil 3D, spatial data science and AI for geospatial analysis — taught by a registered surveyor.",
        "kw": "GIS training Akure, drone training Nigeria, drone mapping course Ondo State, remote sensing course Nigeria, GIS institute Akure, AutoCAD Civil 3D training, spatial data science Nigeria, AI geospatial training, surveying training institute Nigeria",
        "trail": [HOME, ("Training Institute", "training.html")],
        "banner": ("Pathways GIS Institute",
                   "A geospatial training institute for Akure, Ondo State — drone mapping, GIS, remote sensing, RTK GNSS practice and AI for spatial analysis, taught on live project data by a registered surveyor."),
        "cta": ("Want a place in the first cohort?",
                "Register your interest now. You will be first to receive the confirmed schedule, fee structure and early-enrolment place when cohorts open."),
        "cta_primary": ("training.html#interest", "Register your interest"),
        "extra_ld": [COURSE_LD, FAQ_LD],
    },
    {
        "name": "contact",
        "canon": "contact.html",
        "active": "contact.html",
        "title": "Contact & Request a Quote | Pathways Mapping Nigeria Limited, Akure",
        "ogtitle": "Contact Pathways Mapping Nigeria Limited",
        "desc": "Request a survey quotation, book a site visit or reach our Akure office. Call +234 816 532 9943, message on WhatsApp, or send the enquiry form.",
        "kw": "contact surveyor Akure, survey quote Nigeria, hire land surveyor Ondo State, survey company phone number Nigeria",
        "trail": [HOME, ("Contact", "contact.html")],
        "banner": ("Contact us",
                   "Tell us the location, the scope and what the survey output is for. We reply to every enquiry — WhatsApp gets the fastest response."),
        "cta": None,
    },
]


def read(name):
    path = os.path.join(BODY, name + ".html")
    with io.open(path, encoding="utf-8") as fh:
        return fh.read()


def build():
    written = []
    for page in PAGES:
        parts = [chrome.head(page), chrome.header(page["active"])]

        if page.get("banner"):
            parts.append(chrome.pagehead(page["banner"][0], page["banner"][1], page.get("trail")))

        parts.append(read(page["name"]))

        if page.get("cta"):
            primary = page.get("cta_primary", ("contact.html#quote", "Request a Quote"))
            parts.append(chrome.cta(page["cta"][0], page["cta"][1], primary))

        parts.append(chrome.footer())

        out = os.path.join(ROOT, page["name"] + ".html")
        with io.open(out, "w", encoding="utf-8", newline="\n") as fh:
            fh.write("".join(parts))
        written.append(out)
        print("  wrote %s (%d KB)" % (page["name"] + ".html", os.path.getsize(out) // 1024))

    sitemap(written)
    return written


def sitemap(_written):
    urls = []
    priority = {"": "1.0", "training.html": "0.9", "services.html": "0.9", "contact.html": "0.8"}
    for page in PAGES:
        loc = "%s/%s" % (chrome.SITE, page["canon"])
        urls.append(
            "  <url>\n    <loc>%s</loc>\n    <changefreq>monthly</changefreq>\n"
            "    <priority>%s</priority>\n  </url>"
            % (loc, priority.get(page["canon"], "0.7"))
        )
    xml = (
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
        + "\n".join(urls)
        + "\n</urlset>\n"
    )
    with io.open(os.path.join(ROOT, "sitemap.xml"), "w", encoding="utf-8", newline="\n") as fh:
        fh.write(xml)
    print("  wrote sitemap.xml (%d urls)" % len(urls))


if __name__ == "__main__":
    print("Building Pathways Mapping site...")
    build()
    print("Done.")
