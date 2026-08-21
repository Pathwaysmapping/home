/* Pathways Mapping Nigeria Limited — site behaviour
   Vanilla JS, no dependencies. Every block guards against missing elements
   so the same file can be shared across all pages. */
(function () {
  'use strict';

  var WA_NUMBER = '2348165329943';

  /* ── Mobile navigation ────────────────────────────────────────────────── */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    var scrim = document.createElement('div');
    scrim.className = 'nav-scrim';
    document.body.appendChild(scrim);

    var setNav = function (open) {
      nav.classList.toggle('is-open', open);
      scrim.classList.toggle('is-on', open);
      toggle.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    };

    toggle.addEventListener('click', function () {
      setNav(!nav.classList.contains('is-open'));
    });
    scrim.addEventListener('click', function () { setNav(false); });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setNav(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setNav(false);
    });
  }

  /* ── Sticky header shadow ─────────────────────────────────────────────── */
  var head = document.querySelector('.site-head');
  if (head) {
    var onScroll = function () {
      head.classList.toggle('is-stuck', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ── Reveal on scroll ─────────────────────────────────────────────────── */
  var reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    if (!('IntersectionObserver' in window)) {
      reveals.forEach(function (el) { el.classList.add('is-in'); });
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -40px' });
      reveals.forEach(function (el, i) {
        el.style.transitionDelay = (Math.min(i % 4, 3) * 70) + 'ms';
        io.observe(el);
      });
    }
  }

  /* ── Animated stat counters ───────────────────────────────────────────── */
  var nums = document.querySelectorAll('[data-count]');
  if (nums.length && 'IntersectionObserver' in window) {
    var countIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        countIO.unobserve(el);
        var target = parseFloat(el.getAttribute('data-count'));
        var suffix = el.getAttribute('data-suffix') || '';
        var start = null;
        var run = function (ts) {
          if (start === null) start = ts;
          var p = Math.min((ts - start) / 1400, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(target * eased) + suffix;
          if (p < 1) requestAnimationFrame(run);
        };
        requestAnimationFrame(run);
      });
    }, { threshold: 0.5 });
    nums.forEach(function (el) { countIO.observe(el); });
  }

  /* ── Filter bars (projects, courses) ──────────────────────────────────── */
  document.querySelectorAll('[data-filter-group]').forEach(function (bar) {
    var groupName = bar.getAttribute('data-filter-group');
    var items = document.querySelectorAll('[data-filter-target="' + groupName + '"]');
    var empty = document.querySelector('[data-filter-empty="' + groupName + '"]');

    bar.addEventListener('click', function (e) {
      var btn = e.target.closest('.filter-btn');
      if (!btn) return;

      bar.querySelectorAll('.filter-btn').forEach(function (b) {
        b.classList.toggle('is-on', b === btn);
        b.setAttribute('aria-pressed', String(b === btn));
      });

      var want = btn.getAttribute('data-filter');
      var shown = 0;
      items.forEach(function (item) {
        var tags = (item.getAttribute('data-tags') || '').split(/\s+/);
        var match = want === 'all' || tags.indexOf(want) !== -1;
        item.hidden = !match;
        if (match) shown++;
      });
      if (empty) empty.hidden = shown !== 0;
    });
  });

  /* ── Accordions ───────────────────────────────────────────────────────── */
  document.querySelectorAll('.acc-q').forEach(function (q) {
    var item = q.closest('.acc-item');
    var panel = item && item.querySelector('.acc-a');
    if (!panel) return;

    q.setAttribute('aria-expanded', 'false');
    q.addEventListener('click', function () {
      var open = item.classList.toggle('is-open');
      q.setAttribute('aria-expanded', String(open));
      panel.style.maxHeight = open ? panel.scrollHeight + 'px' : '';
    });
  });
  window.addEventListener('resize', function () {
    document.querySelectorAll('.acc-item.is-open .acc-a').forEach(function (p) {
      p.style.maxHeight = p.scrollHeight + 'px';
    });
  });

  /* ── Forms → WhatsApp / email ─────────────────────────────────────────────
     Static hosting has no server, so a submitted form is composed into a
     structured message and handed to WhatsApp (default) or the mail client.
     `data-wa-form` marks the form; `data-subject` titles the message.       */
  document.querySelectorAll('[data-wa-form]').forEach(function (form) {
    var compose = function () {
      var lines = [];
      var subject = form.getAttribute('data-subject') || 'Enquiry';
      lines.push('*' + subject + '*');
      lines.push('');

      form.querySelectorAll('input, select, textarea').forEach(function (el) {
        if (!el.name || el.type === 'submit' || el.classList.contains('hp')) return;
        var value = (el.value || '').trim();
        if (!value) return;
        var labelEl = form.querySelector('label[for="' + el.id + '"]');
        var label = labelEl
          ? labelEl.textContent.replace(/\*/g, '').trim()
          : el.name;
        lines.push('*' + label + ':* ' + value);
      });

      lines.push('');
      lines.push('— sent from pathwaysmapping.github.io');
      return lines.join('\n');
    };

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Honeypot: silently drop bot submissions.
      var pot = form.querySelector('.hp');
      if (pot && pot.value) return;

      if (!form.reportValidity()) return;

      var body = compose();
      var via = (e.submitter && e.submitter.getAttribute('data-via')) || 'whatsapp';

      if (via === 'email') {
        var subject = form.getAttribute('data-subject') || 'Enquiry';
        window.location.href =
          'mailto:pathwaysmapping@gmail.com?subject=' + encodeURIComponent(subject) +
          '&body=' + encodeURIComponent(body.replace(/\*/g, ''));
      } else {
        window.open(
          'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(body),
          '_blank',
          'noopener'
        );
      }

      var ok = form.querySelector('[data-form-ok]');
      if (ok) ok.hidden = false;
    });
  });

  /* ── Prefill a form field from ?course=… ──────────────────────────────── */
  var params = new URLSearchParams(window.location.search);
  ['course', 'service'].forEach(function (key) {
    var val = params.get(key);
    if (!val) return;
    var field = document.querySelector('[data-prefill="' + key + '"]');
    if (!field) return;
    var match = Array.prototype.find.call(field.options || [], function (o) {
      return o.value === val;
    });
    if (match) field.value = val;
    else if (!field.options) field.value = val;
  });

  /* ── Footer year ──────────────────────────────────────────────────────── */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });
})();
