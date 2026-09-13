import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;
const HOST = '0.0.0.0';

const DATA_DIR = path.join(__dirname, 'data');
const ENQUIRIES_FILE = path.join(DATA_DIR, 'enquiries.json');
const TRAINING_FILE = path.join(DATA_DIR, 'training_registrations.json');

// Ensure data files exist
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}
if (!fs.existsSync(ENQUIRIES_FILE)) {
  fs.writeFileSync(ENQUIRIES_FILE, '[]', 'utf-8');
}
if (!fs.existsSync(TRAINING_FILE)) {
  fs.writeFileSync(TRAINING_FILE, '[]', 'utf-8');
}

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Security & PWA Headers
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  if (req.path === '/sw.js') {
    res.setHeader('Service-Worker-Allowed', '/');
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
  } else if (req.path === '/manifest.webmanifest') {
    res.setHeader('Content-Type', 'application/manifest+json; charset=utf-8');
  }
  next();
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    name: 'Pathways Mapping Nigeria Limited',
    compliance: 'CAC Incorporated, FIRS Tax Compliant, SURCON Regulated, and NIS Member',
    pwaReady: true,
    timestamp: new Date().toISOString()
  });
});

// Survey quote enquiry endpoints
app.get('/api/enquiries', (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(ENQUIRIES_FILE, 'utf-8'));
    res.json({ success: true, count: data.length, enquiries: data });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Failed to read enquiries' });
  }
});

app.post('/api/enquiries', (req, res) => {
  try {
    const { name, phone, email, service, organisation, location, size, timeline, details } = req.body;
    
    if (!name || !phone || !location) {
      return res.status(400).json({
        success: false,
        error: 'Name, Phone and Location are required fields.'
      });
    }

    const enquiries = JSON.parse(fs.readFileSync(ENQUIRIES_FILE, 'utf-8'));
    const nextNum = enquiries.length + 101;
    const id = `PM-${new Date().getFullYear()}-Q${nextNum}`;
    
    const newEntry = {
      id,
      createdAt: new Date().toISOString(),
      name: String(name).trim(),
      organisation: organisation ? String(organisation).trim() : '',
      phone: String(phone).trim(),
      email: email ? String(email).trim() : '',
      service: service || 'general',
      location: String(location).trim(),
      size: size ? String(size).trim() : 'Standard Parcel',
      timeline: timeline || 'Standard',
      details: details ? String(details).trim() : '',
      status: 'Received & Logged'
    };

    enquiries.unshift(newEntry);
    fs.writeFileSync(ENQUIRIES_FILE, JSON.stringify(enquiries, null, 2), 'utf-8');

    res.status(201).json({
      success: true,
      message: 'Enquiry successfully registered',
      referenceId: id,
      enquiry: newEntry
    });
  } catch (err) {
    console.error('Error saving enquiry:', err);
    res.status(500).json({ success: false, error: 'Internal server error saving enquiry' });
  }
});

// Institute training interest registration
app.get('/api/training-register', (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(TRAINING_FILE, 'utf-8'));
    res.json({ success: true, count: data.length, registrations: data });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Failed to read training registrations' });
  }
});

app.post('/api/training-register', (req, res) => {
  try {
    const { name, phone, email, course, format, level, notes } = req.body;

    if (!name || !phone || !course) {
      return res.status(400).json({
        success: false,
        error: 'Full name, Phone number and Course of interest are required.'
      });
    }

    const records = JSON.parse(fs.readFileSync(TRAINING_FILE, 'utf-8'));
    const nextNum = records.length + 101;
    const id = `PGI-${new Date().getFullYear()}-T${nextNum}`;

    const newRecord = {
      id,
      createdAt: new Date().toISOString(),
      name: String(name).trim(),
      phone: String(phone).trim(),
      email: email ? String(email).trim() : '',
      course: String(course).trim(),
      format: format || 'Physical — Akure',
      level: level || 'Not specified',
      notes: notes ? String(notes).trim() : '',
      status: 'Interest Registered'
    };

    records.unshift(newRecord);
    fs.writeFileSync(TRAINING_FILE, JSON.stringify(records, null, 2), 'utf-8');

    res.status(201).json({
      success: true,
      message: 'Interest registered successfully',
      registrationId: id,
      record: newRecord
    });
  } catch (err) {
    console.error('Error saving training registration:', err);
    res.status(500).json({ success: false, error: 'Internal server error saving registration' });
  }
});

// Technical Survey Scope & Methodology Estimator API
app.post('/api/estimate', (req, res) => {
  try {
    const { surveyType, unitType, quantity, terrain, urgency } = req.body;
    const qty = Math.max(parseFloat(quantity) || 1, 0.1);

    let daysField = 1;
    let daysOffice = 1;
    let instruments = [];
    let deliverables = [];
    let methodology = '';

    switch (surveyType) {
      case 'topographic':
        daysField = Math.ceil(Math.sqrt(qty) * 1.4);
        daysOffice = Math.ceil(daysField * 0.8);
        instruments = ['Multi-Frequency RTK GNSS Receiver with IMU Tilt', 'Total Station for tree canopy traverse', 'Automatic & Digital Level for benchmark ties'];
        deliverables = ['Contour Plan (0.5m/1.0m interval)', 'AutoCAD Civil 3D Surface / DTM (.dwg)', 'Coordinate point schedule (CSV/XLS)', 'SURCON-standard Survey Report'];
        methodology = 'Establish primary static GNSS control tied to NIGNET CORS network, followed by RTK grid radial detail & breakline observation with IMU tilt compensation.';
        break;
      case 'cadastral':
        daysField = Math.ceil(qty * 0.4) + 1;
        daysOffice = Math.ceil(daysField * 0.7);
        instruments = ['Multi-Frequency RTK GNSS receiver', 'Electronic Total Station & Steel Tapes', 'SURCON Standard Cast Beacons'];
        deliverables = ['Registered Survey Plan in Minna Datum / UTM Zone 31N', 'Beacon Coordinate Schedule signed by SURCON-Registered Surveyor', 'Pillar return documentation for State Ministry lodgement'];
        methodology = 'Statutory perimeter traverse with redundant occupation of every corner monument, tied to State Ministry cadastral control beacons.';
        break;
      case 'uav':
        daysField = Math.ceil(qty * 0.15) + 1;
        daysOffice = Math.ceil(daysField * 1.5);
        instruments = ['Enterprise Mapping Commercial Drone / UAV Platform', 'RTK Base & Rover for Ground Control Points (GCPs)', 'Dual-frequency aerial sensor'];
        deliverables = ['High-resolution GeoTIFF Orthomosaic (sub-3cm GSD)', 'Digital Surface Model (DSM) & DTM', '3D Dense Point Cloud (.las)', 'UAV Flight Quality & Volumetric Report'];
        methodology = 'Autonomous photogrammetric grid flight with 75% forward and 70% lateral overlap, calibrated with surveyor-measured pre-marked ground control targets.';
        break;
      case 'engineering':
        daysField = Math.ceil(qty * 0.8) + 1;
        daysOffice = Math.ceil(daysField * 0.6);
        instruments = ['Precision Electronic Total Station', 'Precise Digital Level & Invar Staff', 'Multi-Frequency RTK GNSS Receiver'];
        deliverables = ['Building Grid & Column Alignment Drawing', 'Pile Offset & Foundation Setting-Out Certificate', 'Verticality & Tilt Monitoring Log'];
        methodology = 'Micro-triangulation baseline network with closed-loop optical levelling to sub-millimetre tolerance, verified with orthogonal coordinate offsets.';
        break;
      case 'corridor':
        daysField = Math.ceil((qty / 10) * 1.5) + 1;
        daysOffice = Math.ceil(daysField * 1.0);
        instruments = ['Mobile RTK GNSS Receiver Fleet', 'Electronic Total Station', 'Civil 3D Corridor Processing Suite'];
        deliverables = ['Longitudinal Profile & Cross-Sections (DWG/PDF)', 'Right-of-Way (ROW) Cadastral Boundary Strip Plan', 'Earthwork Cut/Fill Quantity Takeoff'];
        methodology = 'Continuous corridor centreline traverse with cross-sections at 25m intervals and culvert/bridge hydraulic structure detailing.';
        break;
      default:
        daysField = 2;
        daysOffice = 2;
        instruments = ['Multi-Frequency RTK GNSS Receiver', 'Electronic Total Station'];
        deliverables = ['Certified Technical Survey Deliverables Package'];
        methodology = 'Standard Geodetic and Cadastral Survey Standards under SURCON Regulation.';
    }

    if (terrain === 'dense') {
      daysField = Math.ceil(daysField * 1.4);
      methodology += ' High-canopy protocol: Total station clearing lines supplement satellite observations.';
    } else if (terrain === 'swamp') {
      daysField = Math.ceil(daysField * 1.6);
      methodology += ' Specialized riverine/swamp access logistics engaged.';
    }

    if (urgency === 'urgent') {
      daysField = Math.max(1, Math.round(daysField * 0.7));
      daysOffice = Math.max(1, Math.round(daysOffice * 0.7));
    }

    res.json({
      success: true,
      surveyType,
      quantity: qty,
      unitType: unitType || 'hectares',
      terrain: terrain || 'flat',
      urgency: urgency || 'standard',
      estimatedDuration: `${daysField} field days + ${daysOffice} office processing days`,
      instruments,
      deliverables,
      methodology,
      compliance: 'Certified by Surv. Bayode Emmanuel Ozovehe (SURCON Regulated, NIS Member) in full compliance with SURCON standards.'
    });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Estimation calculation failed' });
  }
});

// Serve static assets and HTML pages with clean URL support
app.use(
  express.static(__dirname, {
    extensions: ['html', 'htm'],
    index: 'index.html',
    maxAge: '1h'
  })
);

// Fallback to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, HOST, () => {
  console.log(`Pathways Mapping web server running at http://${HOST}:${PORT}`);
});
