const fs = require('fs');
const path = require('path');

const iconsDir = path.join(__dirname, 'public', 'icons');

function getBase64(filename) {
  const filePath = path.join(iconsDir, filename);
  if (fs.existsSync(filePath)) {
    const ext = path.extname(filename).substring(1);
    const b64 = fs.readFileSync(filePath).toString('base64');
    return `data:image/${ext === 'jpg' ? 'jpeg' : ext};base64,${b64}`;
  }
  return '';
}

const brianB64 = getBase64('brian.jpg');
const ezraB64 = getBase64('ezra.jpg');
const ntiB64 = getBase64('nti-logo.jpg');
const sarahB64 = getBase64('sarah.jpg');

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>Ezrelyn AI Proctor System & NTL Hub</title>
  <meta name="theme-color" content="#090d16">
  <link rel="manifest" href="/manifest.json">

  <style>
    :root {
      --bg-color: #090d16;
      --card-bg: rgba(15, 23, 42, 0.75);
      --card-border: rgba(30, 58, 138, 0.4);
      --accent-blue: #2563eb;
      --accent-cyan: #38bdf8;
      --text-main: #f1f5f9;
      --text-sub: #94a3b8;
      --gold: #d4af37;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }

    body {
      background-color: var(--bg-color);
      color: var(--text-main);
      min-height: 100vh;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      -webkit-tap-highlight-color: transparent;
    }

    .container { width: 100%; max-width: 480px; }

    .top-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.75rem;
    }

    .brand { display: flex; align-items: center; gap: 10px; }
    .brand-avatar { width: 44px; height: 44px; border-radius: 50%; border: 2px solid var(--accent-cyan); object-fit: cover; }
    .brand-title { font-size: 1.05rem; font-weight: 700; line-height: 1.25; }
    .brand-title span { color: var(--accent-cyan); }

    .install-top-btn {
      background: linear-gradient(135deg, #1d4ed8, #3b82f6);
      color: #fff;
      border: none;
      padding: 8px 14px;
      border-radius: 20px;
      font-weight: 600;
      font-size: 0.8rem;
      cursor: pointer;
      box-shadow: 0 0 12px rgba(37, 99, 235, 0.4);
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .tagline {
      text-align: center;
      font-style: italic;
      color: var(--text-sub);
      font-size: 0.82rem;
      margin-bottom: 1.25rem;
    }

    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.72rem;
      letter-spacing: 1.2px;
      color: var(--text-sub);
      text-transform: uppercase;
      font-weight: 700;
      margin-bottom: 0.85rem;
    }

    .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-bottom: 1.25rem; }

    .card {
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: 12px;
      padding: 10px 6px;
      text-align: center;
      backdrop-filter: blur(8px);
    }

    .card-icon { font-size: 1.4rem; margin-bottom: 4px; display: block; }
    .card-title { font-size: 0.72rem; font-weight: 700; margin-bottom: 8px; color: #fff; line-height: 1.1; }

    .level-list { display: flex; flex-direction: column; gap: 6px; text-align: left; padding-left: 2px; }
    .level-item { font-size: 0.62rem; color: var(--text-sub); }
    .level-item strong { color: #f8fafc; font-weight: 600; }
    .level-link { color: var(--accent-cyan); text-decoration: none; font-size: 0.58rem; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

    .launch-btn {
      width: 100%;
      padding: 12px;
      border-radius: 14px;
      background: linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%);
      color: #fff;
      font-weight: 700;
      font-size: 0.95rem;
      border: none;
      box-shadow: 0 4px 18px rgba(37, 99, 235, 0.35);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      margin-bottom: 1.25rem;
    }

    .launch-avatar { width: 26px; height: 26px; border-radius: 50%; object-fit: cover; }

    .footer-card {
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: 14px;
      padding: 1rem;
      text-align: center;
      margin-bottom: 1.25rem;
    }

    .footer-brand {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      color: var(--gold);
      font-size: 0.78rem;
      font-weight: 800;
      letter-spacing: 0.8px;
      margin-bottom: 4px;
    }

    .footer-brand img { width: 20px; height: 20px; border-radius: 50%; object-fit: cover; }
    .footer-sub { font-size: 0.7rem; color: var(--text-sub); margin-bottom: 0.85rem; }

    .team-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }
    .team-card {
      background: rgba(15, 23, 42, 0.6);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 10px;
      padding: 8px;
      text-align: center;
    }

    .team-avatar { width: 44px; height: 44px; border-radius: 50%; border: 2px solid var(--gold); margin-bottom: 4px; object-fit: cover; }
    .team-name { font-size: 0.75rem; font-weight: 700; }
    .team-role { font-size: 0.62rem; color: var(--text-sub); }

    .install-bottom-btn {
      width: 100%;
      padding: 14px;
      border-radius: 12px;
      background: linear-gradient(135deg, #d4af37 0%, #b8860b 100%);
      color: #0b0d14;
      font-weight: 800;
      font-size: 0.95rem;
      border: none;
      box-shadow: 0 4px 18px rgba(212, 175, 55, 0.35);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      margin-bottom: 1.5rem;
    }

    /* Custom Glassmorphism Modal */
    .modal-overlay {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(5, 8, 15, 0.85);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      display: none;
      justify-content: center;
      align-items: center;
      z-index: 999;
      padding: 1rem;
    }

    .modal-box {
      background: #0f172a;
      border: 1px solid var(--card-border);
      border-radius: 16px;
      padding: 1.5rem;
      width: 100%;
      max-width: 380px;
      text-align: center;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
    }

    .modal-overlay.active { display: flex; }

    .modal-title {
      color: var(--gold);
      font-size: 1.1rem;
      font-weight: 800;
      margin-bottom: 8px;
    }

    .modal-text {
      color: var(--text-main);
      font-size: 0.88rem;
      line-height: 1.4;
      margin-bottom: 1.25rem;
    }

    .modal-close-btn {
      background: linear-gradient(135deg, #1d4ed8, #3b82f6);
      color: #fff;
      border: none;
      padding: 10px 24px;
      border-radius: 20px;
      font-weight: 700;
      font-size: 0.85rem;
      cursor: pointer;
    }
  </style>
</head>
<body>

  <div class="container">
    <header class="top-bar">
      <div class="brand">
        <img src="${sarahB64 || '/public/icons/sarah.jpg'}" alt="Ezrelyn" class="brand-avatar">
        <div class="brand-title">
          Ezrelyn AI <span>✓</span><br>Proctor System
        </div>
      </div>
      <button class="install-top-btn" onclick="triggerPwaInstall()">📦 Install</button>
    </header>

    <p class="tagline">“Empower your learning — Monitor with integrity”</p>

    <div class="section-header">
      <span>COURSES & 6 LEVELS</span>
      <span>🤖</span>
    </div>

    <main class="grid">
      <div class="card">
        <span class="card-icon">💻</span>
        <div class="card-title">Computer Science</div>
        <div class="level-list">
          <div class="level-item">▶ <strong>L1 • CS50x</strong></div>
          <a href="https://cs50.harvard.edu" target="_blank" class="level-link">cs50.harvard.edu ↗</a>
          <div class="level-item">▶ <strong>L2 • Saylor</strong></div>
          <a href="https://saylor.org" target="_blank" class="level-link">saylor.org ↗</a>
          <div class="level-item">▶ <strong>L3 • MIT</strong></div>
          <a href="https://ocw.mit.edu" target="_blank" class="level-link">MIT OpenCourse ↗</a>
        </div>
      </div>

      <div class="card">
        <span class="card-icon">🌐</span>
        <div class="card-title">Web Full-Stack</div>
        <div class="level-list">
          <div class="level-item">▶ <strong>L1 • fCC</strong></div>
          <a href="https://freecodecamp.org" target="_blank" class="level-link">freecodecamp.org ↗</a>
          <div class="level-item">▶ <strong>L2 • Odin</strong></div>
          <a href="https://theodinproject.com" target="_blank" class="level-link">theodinproject.com ↗</a>
          <div class="level-item">▶ <strong>L3 • web.dev</strong></div>
          <a href="https://web.dev/learn" target="_blank" class="level-link">web.dev/learn ↗</a>
        </div>
      </div>

      <div class="card">
        <span class="card-icon">🧠</span>
        <div class="card-title">AI Data Science</div>
        <div class="level-list">
          <div class="level-item">▶ <strong>L1 • Kaggle</strong></div>
          <a href="https://kaggle.com" target="_blank" class="level-link">Kaggle Learn ↗</a>
          <div class="level-item">▶ <strong>L2 • WQU</strong></div>
          <a href="https://wqu.edu" target="_blank" class="level-link">WorldQuant U. ↗</a>
          <div class="level-item">▶ <strong>L3 • Fast.ai</strong></div>
          <a href="https://fast.ai" target="_blank" class="level-link">fast.ai ↗</a>
        </div>
      </div>

      <div class="card">
        <span class="card-icon">🛡️</span>
        <div class="card-title">Cybersecurity</div>
        <div class="level-list">
          <div class="level-item">▶ <strong>L1 • Cisco</strong></div>
          <a href="https://netacad.com" target="_blank" class="level-link">Cisco NetAcad ↗</a>
          <div class="level-item">▶ <strong>L2 • THM</strong></div>
          <a href="https://tryhackme.com" target="_blank" class="level-link">tryhackme.com ↗</a>
          <div class="level-item">▶ <strong>L3 • PortSwig</strong></div>
          <a href="https://portswigger.net" target="_blank" class="level-link">PortSwigger Acad ↗</a>
        </div>
      </div>

      <div class="card">
        <span class="card-icon">🌱</span>
        <div class="card-title">Agri-Tech</div>
        <div class="level-list">
          <div class="level-item">▶ <strong>L1 • FAO</strong></div>
          <a href="https://elearning.fao.org" target="_blank" class="level-link">FAO E-learning ↗</a>
          <div class="level-item">▶ <strong>L2 • atingi</strong></div>
          <a href="https://atingi.org" target="_blank" class="level-link">atingi.org ↗</a>
          <div class="level-item">▶ <strong>L3 • OpenCV</strong></div>
          <a href="https://opencv.org" target="_blank" class="level-link">OpenCV Univ. ↗</a>
        </div>
      </div>

      <div class="card">
        <span class="card-icon">🤖</span>
        <div class="card-title">Robotics</div>
        <div class="level-list">
          <div class="level-item">▶ <strong>L1 • Tinker</strong></div>
          <a href="https://tinkercad.com" target="_blank" class="level-link">Tinkercad Cir. ↗</a>
          <div class="level-item">▶ <strong>L2 • Webots</strong></div>
          <a href="https://cyberbotics.com" target="_blank" class="level-link">Webots Docs ↗</a>
          <div class="level-item">▶ <strong>L3 • ROS 2</strong></div>
          <a href="https://ros.org" target="_blank" class="level-link">ROS2 Tutorials ↗</a>
        </div>
      </div>
    </main>

    <button class="launch-btn" onclick="launchProctorEngine()">
      <img src="${sarahB64 || '/public/icons/sarah.jpg'}" alt="Ezrelyn" class="launch-avatar">
      Launch Live Proctor AI ➔
    </button>

    <footer class="footer-card">
      <div class="footer-brand">
        <img src="${ntiB64 || '/public/icons/nti-logo.jpg'}" alt="NTI">
        NAVAKHOLO TERRAHUB INITIATIVE
      </div>
      <p class="footer-sub">Created with passion by the student founders & tech leaders:</p>

      <div class="team-grid">
        <div class="team-card">
          <img src="${ezraB64 || '/public/icons/ezra.jpg'}" alt="Ezra Wanyama" class="team-avatar">
          <div class="team-name">Ezra Wanyama</div>
          <div class="team-role">Co-Creator / Lead Dev</div>
        </div>
        <div class="team-card">
          <img src="${brianB64 || '/public/icons/brian.jpg'}" alt="Brian" class="team-avatar">
          <div class="team-name">Brian</div>
          <div class="team-role">Co-Creator / Coordinator</div>
        </div>
      </div>
    </footer>

    <button class="install-bottom-btn" onclick="triggerPwaInstall()">
      📱 Install App to Phone Screen
    </button>
  </div>

  <div class="modal-overlay" id="customModal">
    <div class="modal-box">
      <div class="modal-title" id="modalTitle">NTI System Notification</div>
      <div class="modal-text" id="modalMessage">Notification details...</div>
      <button class="modal-close-btn" onclick="closeCustomModal()">OK</button>
    </div>
  </div>

  <script>
    function showCustomModal(title, text) {
      document.getElementById('modalTitle').innerText = title;
      document.getElementById('modalMessage').innerText = text;
      document.getElementById('customModal').classList.add('active');
    }

    function closeCustomModal() {
      document.getElementById('customModal').classList.remove('active');
    }

    function launchProctorEngine() {
      showCustomModal('Ezrelyn Proctor AI', 'Launching Ezrelyn Proctor Engine v3...');
    }

    let deferredPrompt;

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;
    });

    async function triggerPwaInstall() {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
          deferredPrompt = null;
        }
      } else {
        showCustomModal(
          'Install App Option', 
          'PWA Installation ready! Tap your browser menu (⋮) and select "Install app" or "Add to Home Screen".'
        );
      }
    }

    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(() => {});
      });
    }
  </script>
</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, 'index.html'), htmlContent);
console.log('✅ Generated index.html with embedded Base64 icons from public/icons!');
