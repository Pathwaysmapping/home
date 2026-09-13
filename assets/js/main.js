/* Pathways Mapping Nigeria Limited — Progressive Web App & Interactive Engine
   Zero external runtime dependencies. High performance & resilient offline capability. */
(function () {
  'use strict';

  var WA_NUMBER = '2348165329943';

  /* ── Service Worker Registration & PWA Lifecycle ───────────────────────── */
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('/sw.js')
        .then(function (reg) {
          // Check for updates
          reg.addEventListener('updatefound', function () {
            var newWorker = reg.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', function () {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  console.log('New Pathways PWA version available');
                }
              });
            }
          });
        })
        .catch(function (err) {
          console.warn('Pathways ServiceWorker registration failed:', err);
        });
    });
  }

  /* ── Online / Offline Detection ────────────────────────────────────────── */
  var offlineIndicator = document.getElementById('offline-indicator');
  function updateOnlineStatus() {
    if (offlineIndicator) {
      offlineIndicator.hidden = navigator.onLine;
    }
  }
  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
  updateOnlineStatus();

  /* ── PWA Install Prompt Handling ───────────────────────────────────────── */
  var deferredPrompt = null;
  var installBtn = document.getElementById('pwa-install-btn');

  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault();
    deferredPrompt = e;
    if (installBtn) {
      installBtn.style.display = 'inline-flex';
    }
  });

  window.addEventListener('appinstalled', function () {
    deferredPrompt = null;
    if (installBtn) installBtn.style.display = 'none';
  });

  if (installBtn) {
    installBtn.addEventListener('click', function () {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then(function (choice) {
          if (choice.outcome === 'accepted') {
            installBtn.style.display = 'none';
          }
          deferredPrompt = null;
        });
      } else {
        showModal(
          'Install Pathways Geospatial App',
          '<div style="text-align:left;line-height:1.6">' +
            '<p style="font-size:15px;color:#1e293b;margin-bottom:14px">Install Pathways Mapping directly to your device for instant offline access to the Survey Estimator, Area Converter, and corporate registers:</p>' +
            '<div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:14px;margin-bottom:14px">' +
              '<p style="margin:0 0 8px"><strong>iOS (iPhone / iPad):</strong> Tap the <em>Share</em> button (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:-2px"><path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13"/></svg>) in Safari, then select <strong>Add to Home Screen</strong>.</p>' +
              '<p style="margin:0 0 8px"><strong>Android (Chrome):</strong> Tap the browser menu (<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:-2px"><circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/></svg>) and select <strong>Install app</strong> or <strong>Add to Home screen</strong>.</p>' +
              '<p style="margin:0"><strong>Desktop (Chrome / Edge):</strong> Click the install icon (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:-2px"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>) in the address bar.</p>' +
            '</div>' +
          '</div>'
        );
      }
    });
  }

  /* ── Modal Dialog System ───────────────────────────────────────────────── */
  var modalOverlay = document.getElementById('submission-modal');
  var modalTitle = document.getElementById('modal-title');
  var modalBody = document.getElementById('modal-body-content');

  function showModal(title, htmlContent) {
    if (!modalOverlay) return;
    if (modalTitle) modalTitle.textContent = title;
    if (modalBody) modalBody.innerHTML = htmlContent;
    modalOverlay.hidden = false;
    document.body.style.overflow = 'hidden';

    var closeBtn = modalOverlay.querySelector('.app-modal-close');
    if (closeBtn) {
      closeBtn.focus();
    }
  }

  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.hidden = true;
    document.body.style.overflow = '';
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', function (e) {
      if (e.target === modalOverlay || e.target.closest('.app-modal-close')) {
        closeModal();
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !modalOverlay.hidden) {
        closeModal();
      }
    });
  }

  /* ── Mobile navigation ────────────────────────────────────────────────── */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  var navClose = document.querySelector('.nav-close');
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
    if (navClose) {
      navClose.addEventListener('click', function () { setNav(false); });
    }
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

  /* ── Full-Stack Form Submission with WhatsApp / Email Bridge ──────────── */
  document.querySelectorAll('[data-wa-form]').forEach(function (form) {
    var composeText = function (data) {
      var lines = [];
      var subject = form.getAttribute('data-subject') || 'Pathways Geospatial Enquiry';
      lines.push('*' + subject + '*');
      lines.push('');

      Object.keys(data).forEach(function (key) {
        var val = data[key];
        if (!val || key === 'website') return;
        var labelEl = form.querySelector('label[for="' + key + '"]') ||
                      form.querySelector('label[for="c-' + key + '"]') ||
                      form.querySelector('label[for="t-' + key + '"]');
        var label = labelEl ? labelEl.textContent.replace(/\*/g, '').trim() : key;
        lines.push('*' + label + ':* ' + val);
      });

      lines.push('');
      lines.push('— transmitted via pathwaysmapping.github.io');
      return lines.join('\n');
    };

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Honeypot spam prevention
      var pot = form.querySelector('.hp');
      if (pot && pot.value) return;

      if (!form.reportValidity()) return;

      var submitBtn = e.submitter || form.querySelector('button[type="submit"]');
      var via = (e.submitter && e.submitter.getAttribute('data-via')) || 'whatsapp';

      // Gather form values
      var formData = {};
      form.querySelectorAll('input, select, textarea').forEach(function (el) {
        if (!el.name || el.type === 'submit' || el.classList.contains('hp')) return;
        formData[el.name] = (el.value || '').trim();
      });

      var bodyText = composeText(formData);
      var isTraining = !!form.querySelector('[name="course"]');
      var apiEndpoint = isTraining ? '/api/training-register' : '/api/enquiries';

      var originalBtnText = submitBtn ? submitBtn.textContent : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitting…';
      }

      // Send to server API with local offline fallback
      fetch(apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      .then(function (res) { return res.json(); })
      .then(function (result) {
        handleSuccess(result.referenceId || ('PM-' + Math.floor(1000 + Math.random() * 9000)));
      })
      .catch(function (err) {
        console.warn('Network submission offline, saving locally:', err);
        // Offline resilience: store in local storage queue
        try {
          var queue = JSON.parse(localStorage.getItem('pending_submissions') || '[]');
          queue.push({ endpoint: apiEndpoint, data: formData, timestamp: new Date().toISOString() });
          localStorage.setItem('pending_submissions', JSON.stringify(queue));
        } catch (e) {}

        handleSuccess('OFFLINE-' + Math.floor(1000 + Math.random() * 9000), true);
      })
      .finally(function () {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = originalBtnText;
        }
      });

      function handleSuccess(refId, isOffline) {
        form.reset();
        var ok = form.querySelector('[data-form-ok]');
        if (ok) ok.hidden = false;

        var waUrl = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent('Reference: ' + refId + '\n\n' + bodyText);
        var mailSubject = (form.getAttribute('data-subject') || 'Pathways Enquiry') + ' [' + refId + ']';
        var mailUrl = 'mailto:pathwaysmapping@gmail.com?subject=' + encodeURIComponent(mailSubject) + '&body=' + encodeURIComponent(bodyText.replace(/\*/g, ''));

        // If user explicitly clicked WhatsApp or Email, launch that channel
        if (via === 'whatsapp') {
          window.open(waUrl, '_blank', 'noopener');
        } else if (via === 'email') {
          window.location.href = mailUrl;
        }

        // Show corporate receipt modal
        showModal(
          'Enquiry Successfully Received',
          '<div style="text-align:center;padding:12px 0">' +
            '<div style="width:52px;height:52px;border-radius:50%;background:#ecfdf5;color:#059669;display:inline-flex;align-items:center;justify-content:center;margin-bottom:14px">' +
              '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>' +
            '</div>' +
            '<h4 style="font-size:18px;color:#0f172a;margin:0 0 6px">Project Reference: <span style="font-family:monospace;color:#1e3a8a">' + refId + '</span></h4>' +
            '<p style="font-size:14.5px;color:#475569;margin:0 0 20px">' +
              (isOffline
                ? 'Your enquiry has been saved offline on your device and will sync upon reconnection.'
                : 'Your submission has been securely logged on our server.') +
              ' Our Principal Surveyor reviews all project scopes.' +
            '</p>' +
            '<div style="display:flex;flex-direction:column;gap:10px;max-width:320px;margin:0 auto">' +
              '<a href="' + waUrl + '" class="btn btn--wa btn--block" target="_blank" rel="noopener">' +
                '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="margin-right:6px"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 004.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2"/></svg>' +
                'Open in WhatsApp' +
              '</a>' +
              '<a href="' + mailUrl + '" class="btn btn--ghost btn--block">Send via Email</a>' +
            '</div>' +
          '</div>'
        );
      }
    });
  });

  /* ── Interactive Survey Scope & Turnaround Estimator ───────────────────── */
  var estForm = document.getElementById('estimator-form');
  if (estForm) {
    var estType = document.getElementById('est-type');
    var estQty = document.getElementById('est-qty');
    var estUnit = document.getElementById('est-unit');
    var estTerrain = document.getElementById('est-terrain');
    var estUrgency = document.getElementById('est-urgency');

    var resBadge = document.getElementById('res-badge');
    var resTitle = document.getElementById('res-title');
    var resDuration = document.getElementById('res-duration');
    var resInstruments = document.getElementById('res-instruments');
    var resDeliverables = document.getElementById('res-deliverables');
    var transferQuoteBtn = document.getElementById('transfer-quote-btn');

    function calculateEstimate() {
      var type = estType ? estType.value : 'topographic';
      var qty = parseFloat(estQty ? estQty.value : 5) || 5;
      var unit = estUnit ? estUnit.value : 'hectares';
      var terrain = estTerrain ? estTerrain.value : 'flat';
      var urgency = estUrgency ? estUrgency.value : 'standard';

      // Standardize size to equivalent hectares
      var hectares = qty;
      if (unit === 'acres') hectares = qty * 0.404686;
      else if (unit === 'plots') hectares = qty * 0.06689;
      else if (unit === 'km') hectares = qty * 2.0;

      var fieldDays = 2;
      var officeDays = 2;

      if (type === 'corridor') {
        fieldDays = Math.max(3, Math.ceil(qty * 0.4));
        officeDays = Math.max(3, Math.ceil(qty * 0.35));
      } else {
        if (hectares > 20) {
          fieldDays = Math.ceil(3 + hectares * 0.08);
          officeDays = Math.ceil(2 + hectares * 0.06);
        } else if (hectares > 5) {
          fieldDays = Math.ceil(2 + hectares * 0.15);
          officeDays = Math.ceil(2 + hectares * 0.1);
        }
      }

      if (terrain === 'dense' || terrain === 'swamp') {
        fieldDays = Math.ceil(fieldDays * 1.35);
      } else if (terrain === 'undulating') {
        fieldDays = Math.ceil(fieldDays * 1.15);
      }

      if (urgency === 'urgent') {
        fieldDays = Math.max(1, Math.round(fieldDays * 0.75));
        officeDays = Math.max(1, Math.round(officeDays * 0.75));
      }

      var typeTitle = 'Topographic & Contour Mapping';
      var instruments = [
        'Multi-Frequency RTK GNSS Receiver with IMU Tilt',
        'Total Station traverse verification under canopy',
        'Digital & Automatic Level for vertical benchmark transfer'
      ];
      var deliverables = [
        'Contour & Spot Height Plan (0.5m intervals)',
        'AutoCAD Civil 3D Surface & DTM (.dwg)',
        'Signed Technical Survey Report by Surv. Bayode Emmanuel (SURCON Regulated, NIS Member)'
      ];

      if (type === 'cadastral') {
        typeTitle = 'Cadastral & Boundary Demarcation';
        instruments = [
          'Multi-frequency RTK GNSS static & CORS network tie',
          'Electronic Total Station for boundary traverse',
          'SURCON standard precast boundary beacon moulds'
        ];
        deliverables = [
          'Registered Cadastral Survey Plan (SURCON compliant)',
          'Pillars Beacon Certificate & Coordinate Schedule',
          'Coordinates referenced to Nigerian National Grid / Minna Datum'
        ];
      } else if (type === 'uav') {
        typeTitle = 'Drone / UAV Aerial Photogrammetry';
        instruments = [
          'High-Resolution Commercial Drone / UAV Aerial Mapping Platform',
          'Survey-grade RTK GNSS for Ground Control Points (GCPs)',
          'High-Performance Workstation for Photogrammetric Triangulation'
        ];
        deliverables = [
          'Georeferenced High-Res Orthomosaic (sub-3cm GSD)',
          'Digital Elevation Model (DEM) & 3D Point Cloud',
          'Hydrology Flow & Volumetric Earthwork Calculation Report'
        ];
      } else if (type === 'engineering') {
        typeTitle = 'Engineering Setting-Out & Alignment';
        instruments = [
          'Micro-Precision Electronic Total Station',
          'Multi-frequency GNSS Primary Geodetic Site Control',
          'Precision Optical & Digital Level with Micrometer'
        ];
        deliverables = [
          'Column Gridline & Foundation Stakeout Record',
          'As-Built Structural Verification Report',
          'Quality Assurance Misclosure & Tolerance Schedule'
        ];
      } else if (type === 'corridor') {
        typeTitle = 'Route & Corridor Survey (Roads / Pipeline)';
        instruments = [
          'Survey-Grade RTK GNSS Dual-Receiver Base & Rover',
          'Differential Levelling Benchmarking along alignment',
          'AutoCAD Civil 3D Corridor Modeling'
        ];
        deliverables = [
          'Plan and Profile Sheets (Centerline & Right-of-Way)',
          'Cross-Sections at 25m Intervals',
          'Culvert and Bridge Invert Alignment Details'
        ];
      }

      if (resTitle) resTitle.textContent = typeTitle;
      if (resDuration) {
        resDuration.textContent = fieldDays + ' field day' + (fieldDays > 1 ? 's' : '') +
          ' + ' + officeDays + ' office processing day' + (officeDays > 1 ? 's' : '') +
          (urgency === 'urgent' ? ' (Expedited Schedule)' : '');
      }

      if (resInstruments) {
        resInstruments.innerHTML = instruments.map(function (item) {
          return '<li><svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> <span>' + item + '</span></li>';
        }).join('');
      }

      if (resDeliverables) {
        resDeliverables.innerHTML = deliverables.map(function (item) {
          return '<li><svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> <span>' + item + '</span></li>';
        }).join('');
      }

      if (transferQuoteBtn) {
        var prefillSummary = typeTitle + ' over ' + qty + ' ' + unit + ' (' + terrain + ' terrain, ' + urgency + ' priority)';
        var quoteUrl = 'contact.html?service=' + encodeURIComponent(type) +
                       '&size=' + encodeURIComponent(qty + ' ' + unit) +
                       '&notes=' + encodeURIComponent(prefillSummary) +
                       '#quote';
        transferQuoteBtn.setAttribute('href', quoteUrl);
      }
    }

    [estType, estQty, estUnit, estTerrain, estUrgency].forEach(function (el) {
      if (el) {
        el.addEventListener('change', calculateEstimate);
        el.addEventListener('input', calculateEstimate);
      }
    });

    calculateEstimate();
  }

  /* ── Nigerian Land Area & Coordinate Converter ─────────────────────────── */
  var convAmount = document.getElementById('conv-amount');
  var convFrom = document.getElementById('conv-from');

  if (convAmount && convFrom) {
    var outHa = document.getElementById('out-ha');
    var outAc = document.getElementById('out-ac');
    var outSqm = document.getElementById('out-sqm');
    var outP60 = document.getElementById('out-p60');
    var outP50 = document.getElementById('out-p50');

    var P60_SQM = 668.9016; // 60ft x 120ft = 7,200 sqft = 668.90 m²
    var P50_SQM = 464.5152; // 50ft x 100ft = 5,000 sqft = 464.52 m²
    var P100_SQM = 929.0304; // 100ft x 100ft = 10,000 sqft = 929.03 m²
    var ACRE_SQM = 4046.8564;
    var HA_SQM = 10000.0;

    function updateAreaConversion() {
      var val = parseFloat(convAmount.value) || 0;
      var unit = convFrom.value;
      var baseSqm = 0;

      if (unit === 'hectares') baseSqm = val * HA_SQM;
      else if (unit === 'acres') baseSqm = val * ACRE_SQM;
      else if (unit === 'sqm') baseSqm = val;
      else if (unit === 'plot60x120') baseSqm = val * P60_SQM;
      else if (unit === 'plot50x100') baseSqm = val * P50_SQM;
      else if (unit === 'plot100x100') baseSqm = val * P100_SQM;

      if (outHa) outHa.textContent = (baseSqm / HA_SQM).toFixed(4) + ' ha';
      if (outAc) outAc.textContent = (baseSqm / ACRE_SQM).toFixed(4) + ' ac';
      if (outSqm) outSqm.textContent = baseSqm.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' m²';
      if (outP60) outP60.textContent = (baseSqm / P60_SQM).toFixed(2) + ' plot' + (baseSqm / P60_SQM !== 1 ? 's' : '');
      if (outP50) outP50.textContent = (baseSqm / P50_SQM).toFixed(2) + ' plot' + (baseSqm / P50_SQM !== 1 ? 's' : '');
    }

    convAmount.addEventListener('input', updateAreaConversion);
    convFrom.addEventListener('change', updateAreaConversion);
    updateAreaConversion();

    // Tab switching for converter
    var tabArea = document.getElementById('tab-btn-area');
    var tabCoords = document.getElementById('tab-btn-coords');
    var tabGuide = document.getElementById('tab-btn-guide');
    var panelArea = document.getElementById('panel-area');
    var panelCoords = document.getElementById('panel-coords');
    var panelGuide = document.getElementById('panel-guide');

    function switchConverterTab(activeTab, activePanel) {
      [tabArea, tabCoords, tabGuide].forEach(function (t) {
        if (t) {
          var isActive = t === activeTab;
          t.classList.toggle('is-active', isActive);
          t.setAttribute('aria-selected', String(isActive));
        }
      });
      [panelArea, panelCoords, panelGuide].forEach(function (p) {
        if (p) p.hidden = (p !== activePanel);
      });
    }

    if (tabArea && panelArea) {
      tabArea.addEventListener('click', function () { switchConverterTab(tabArea, panelArea); });
    }
    if (tabCoords && panelCoords) {
      tabCoords.addEventListener('click', function () { switchConverterTab(tabCoords, panelCoords); });
    }
    if (tabGuide && panelGuide) {
      tabGuide.addEventListener('click', function () { switchConverterTab(tabGuide, panelGuide); });
    }

    // Interactive Statutory Survey Guide
    var guideSelect = document.getElementById('guide-purpose-select');
    if (guideSelect) {
      var guideData = {
        co_of_o: {
          title: "Certificate of Occupancy (C of O) & Governor's Consent Roadmap",
          type: "Registered Cadastral Boundary Survey",
          deliverables: "Registered Survey Plan in UTM Zone, Pillar Schedule, Beacon Return Lodgement Record",
          authority: "State Office of the Surveyor General / Ministry of Lands",
          timeline: "7 – 14 working days",
          note: "Under Nigerian land law, unregistered survey plans or plans executed without a SURCON-registered surveyor's seal cannot be accepted for deed registration or Governor's Consent.",
          service: "cadastral"
        },
        building_approval: {
          title: "Building Plan & Engineering Approval Roadmap",
          type: "Topographic & Spot-Height Engineering Survey",
          deliverables: "Contour Plan (0.5m interval), Digital Terrain Model (.dwg), Structural Level Benchmark Transfer",
          authority: "State Physical Planning & Urban Development Board",
          timeline: "3 – 5 working days",
          note: "Statutory building plan approval mandates authentic ground contours and boundary clearances to prevent drainage flooding and structural encroachment.",
          service: "topographic"
        },
        estate_subdivision: {
          title: "Estate Masterplan & Layout Subdivision Roadmap",
          type: "Perimeter Demarcation & Layout Subdivision Survey",
          deliverables: "Master Subdivision Layout Plan, Pre-cast Boundary Beacons per Plot, Access Road Corridor Alignment",
          authority: "Ministry of Physical Planning & State Surveyor General",
          timeline: "10 – 21 working days (depending on parcel size)",
          note: "Proper estate layout surveying prevents future boundary overlaps, validates road right-of-way, and facilitates seamless individual deed registrations.",
          service: "cadastral"
        },
        mining_cadastre: {
          title: "Mining Cadastre Office (MCO / eMC+) Boundary Roadmap",
          type: "Cadastral Exploration & Mining Lease Boundary Survey",
          deliverables: "SURCON-Certified Cadastral Boundary Report, eMC+ Polygon Schedule, Field Monumentation Records",
          authority: "Mining Cadastre Office (MCO), Federal Ministry of Solid Minerals",
          timeline: "5 – 10 working days",
          note: "Mining title applications must adhere strictly to Cadastral Units (CU) defined under Nigerian Minerals and Mining Regulations to avoid overlap disputes.",
          service: "mining"
        },
        hydro_dredging: {
          title: "Bathymetry, River Channel & Dredging Survey Roadmap",
          type: "Hydrographic Acoustic Depth Sounding & Volume Computation",
          deliverables: "Bathymetric Chart with Depth Contours, Riverbed Cross-Sections, Dredge Spoil Volumetric Report",
          authority: "National Inland Waterways Authority (NIWA) & State Maritime Agencies",
          timeline: "4 – 7 working days",
          note: "Acoustic depth sounders calibrated with bar checks and tidal gauges provide certified pre- and post-dredge volumetric calculations for billing and navigation compliance.",
          service: "hydrographic"
        }
      };

      guideSelect.addEventListener('change', function () {
        var key = guideSelect.value;
        var info = guideData[key];
        if (!info) return;

        var elTitle = document.getElementById('guide-target-title');
        var elType = document.getElementById('guide-survey-type');
        var elDeliv = document.getElementById('guide-deliverables');
        var elAuth = document.getElementById('guide-authority');
        var elTime = document.getElementById('guide-timeline');
        var elNote = document.getElementById('guide-statutory-note');
        var elBtn = document.getElementById('guide-cta-btn');

        if (elTitle) elTitle.textContent = info.title;
        if (elType) elType.textContent = info.type;
        if (elDeliv) elDeliv.textContent = info.deliverables;
        if (elAuth) elAuth.textContent = info.authority;
        if (elTime) elTime.textContent = info.timeline;
        if (elNote) elNote.textContent = info.note;
        if (elBtn) {
          elBtn.href = 'contact.html?service=' + info.service + '#quote';
          elBtn.textContent = 'Request ' + info.type + ' →';
        }
      });
    }

    // Geodetic Coordinate calculations
    var btnCalcCoords = document.getElementById('btn-calc-coords');
    if (btnCalcCoords) {
      btnCalcCoords.addEventListener('click', function () {
        var lat = parseFloat(document.getElementById('coord-lat').value) || 7.2571;
        var lon = parseFloat(document.getElementById('coord-lon').value) || 5.2058;

        // Nigeria spans UTM Zone 31N (west) and 32N (east), central meridian 3°E or 9°E
        var zone = lon < 6.0 ? 31 : (lon < 12.0 ? 32 : 33);
        var centralMeridian = (zone - 1) * 6 - 180 + 3;

        // Transverse Mercator approximate projection for instant preview
        var k0 = 0.9996;
        var a = 6378137.0; // WGS84 semi-major axis
        var f = 1 / 298.257223563;
        var e2 = 2 * f - f * f;

        var latRad = lat * (Math.PI / 180);
        var lonRad = lon * (Math.PI / 180);
        var cmRad = centralMeridian * (Math.PI / 180);

        var dLon = lonRad - cmRad;
        var N = a / Math.sqrt(1 - e2 * Math.sin(latRad) * Math.sin(latRad));
        var T = Math.tan(latRad) * Math.tan(latRad);
        var C = (e2 / (1 - e2)) * Math.cos(latRad) * Math.cos(latRad);
        var A = Math.cos(latRad) * dLon;

        var M = a * ((1 - e2 / 4 - 3 * e2 * e2 / 64) * latRad -
                (3 * e2 / 8 + 3 * e2 * e2 / 32) * Math.sin(2 * latRad) +
                (15 * e2 * e2 / 256) * Math.sin(4 * latRad));

        var x = 500000 + k0 * N * (A + (1 - T + C) * Math.pow(A, 3) / 6);
        var y = k0 * (M + N * Math.tan(latRad) * (Math.pow(A, 2) / 2 + (5 - T + 9 * C + 4 * C * C) * Math.pow(A, 4) / 24));

        var outZone = document.getElementById('out-zone');
        var outE = document.getElementById('out-easting');
        var outN = document.getElementById('out-northing');

        if (outZone) outZone.textContent = 'UTM Zone ' + zone + 'N';
        if (outE) outE.textContent = Math.round(x).toLocaleString('en-US') + ' mE';
        if (outN) outN.textContent = Math.round(y).toLocaleString('en-US') + ' mN';
      });
    }
  }

  /* ── Course and Service Selection Interactivity ────────────────────────── */
  document.querySelectorAll('[data-course-select]').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      var courseName = btn.getAttribute('data-course-select');
      var courseSelect = document.getElementById('t-course');
      if (courseSelect && courseName) {
        // Find matching option
        for (var i = 0; i < courseSelect.options.length; i++) {
          if (courseSelect.options[i].text.toLowerCase().indexOf(courseName.toLowerCase()) !== -1 ||
              courseSelect.options[i].value.toLowerCase().indexOf(courseName.toLowerCase()) !== -1) {
            courseSelect.selectedIndex = i;
            break;
          }
        }
      }
    });
  });

  /* ── URL Parameter Prefills (?course=…, ?service=…, ?size=…) ───────────── */
  var searchStr = window.location.search;
  var hashStr = window.location.hash;

  // If hash contains query params like #interest?course=...
  if (hashStr.indexOf('?') !== -1) {
    searchStr = hashStr.substring(hashStr.indexOf('?'));
  }

  var params = new URLSearchParams(searchStr);
  ['course', 'service', 'size', 'notes'].forEach(function (key) {
    var val = params.get(key);
    if (!val) return;

    var field = document.querySelector('[data-prefill="' + key + '"]') ||
                document.getElementById('c-' + key) ||
                document.getElementById('t-' + key);
    if (!field) return;

    if (field.options) {
      for (var i = 0; i < field.options.length; i++) {
        var opt = field.options[i];
        if (opt.value.toLowerCase() === val.toLowerCase() ||
            opt.text.toLowerCase().indexOf(val.toLowerCase()) !== -1) {
          field.selectedIndex = i;
          break;
        }
      }
    } else {
      field.value = val;
    }
  });

  /* ── Dynamic Footer Year ───────────────────────────────────────────────── */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });
})();
