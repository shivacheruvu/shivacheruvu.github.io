/**
 * AI Frontier Portfolio Scripts
 * Shiva Preetham Chinthalacheruvu
 * Theme: Claude Code Prioritized • Antigravity • Codex
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initAgenticIntelligence();
  initProjectFiltering();
  initCodeCopier();
  initMockRunner();
});

/* -------------------------------------------------------------
 * 1. Dark / Light Theme Toggle
 * ------------------------------------------------------------- */
function initThemeToggle() {
  const toggleBtn = document.getElementById('themeToggleBtn');
  const toggleBtnMobile = document.getElementById('themeToggleBtnMobile');

  const currentTheme = localStorage.getItem('theme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  document.documentElement.setAttribute('data-theme', currentTheme);
  if (toggleBtn) updateThemeIcon(toggleBtn, currentTheme);
  if (toggleBtnMobile) updateThemeIcon(toggleBtnMobile, currentTheme);

  const handleToggle = () => {
    const activeTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    if (toggleBtn) updateThemeIcon(toggleBtn, newTheme);
    if (toggleBtnMobile) updateThemeIcon(toggleBtnMobile, newTheme);
  };

  if (toggleBtn) toggleBtn.addEventListener('click', handleToggle);
  if (toggleBtnMobile) toggleBtnMobile.addEventListener('click', handleToggle);
}

function updateThemeIcon(btn, theme) {
  if (theme === 'dark') {
    btn.innerHTML = '<i class="bi bi-sun-fill text-warning"></i>';
    btn.setAttribute('aria-label', 'Switch to light mode');
  } else {
    btn.innerHTML = '<i class="bi bi-moon-stars-fill text-primary"></i>';
    btn.setAttribute('aria-label', 'Switch to dark mode');
  }
}

/* -------------------------------------------------------------
 * 2. Agentic Intelligence Module (Claude Code • Antigravity • Codex)
 * ------------------------------------------------------------- */
const INTEL_KNOWLEDGE_BASE = {
  "claude-code": {
    topic: "Autonomous Data Pipelines with Claude Code",
    badge: "Primary Agent Driver: Claude Code",
    response: `<strong>Claude Code CLI</strong> serves as Shiva's primary agentic pairing partner for infrastructure automation and software engineering:<br>
    <ul>
      <li><strong>Autonomous Pipeline Generation:</strong> Utilizing Claude Code to rapidly scaffold PySpark medallion transformation models, automate YAML workflow configs, and orchestrate schema diffing scripts.</li>
      <li><strong>Test Synthesis & Static Verification:</strong> Claude Code automates edge-case unit test generation for data reconciliation, validating row-level assertions before execution on clusters.</li>
      <li><strong>Zero-Leak Defense:</strong> Claude Code is configured with strict credential avoidance rules—automatically stripping tokens, utilizing <code>.env.example</code> templates, and validating against local <code>gitleaks</code> pre-commit hooks.</li>
    </ul>`
  },
  "frontier": {
    topic: "Enterprise Delta Lake & PySpark (Verizon)",
    badge: "Databricks & Delta Lake",
    response: `At <strong>Verizon</strong>, Shiva serves as a Forward Deployed Data Engineer, modernizing legacy enterprise data warehouses:<br>
    <ul>
      <li><strong>Informatica Migration:</strong> Architected PySpark pipelines replacing legacy IICS & Oracle ETL, cutting runtime by <strong>42%</strong>.</li>
      <li><strong>Lakehouse Ingestion:</strong> Ingests multi-gigabyte compressed <code>.gz</code> archives into Delta Lake Medallion (Bronze &rarr; Silver &rarr; Gold) with Z-Ordering and partition pruning for <strong>3.5x query acceleration</strong>.</li>
      <li><strong>Reconciliation Engine:</strong> Engineered automated PK validation and schema drift detection diffing billions of records between on-prem EDW and cloud storage.</li>
      <li><strong>Governance & SLAs:</strong> Built CCPA & OneTrust automated deletion pipelines across Unity Catalog and configured modular YAML Databricks Multi-Task Workflows achieving <strong>99.9% SLA reliability</strong>.</li>
    </ul>`
  },
  "yuka": {
    topic: "ANTeater (open-source Yuka alternative)",
    badge: "Live app &middot; Claude Code build",
    response: `<strong>ANTeater</strong> is Shiva's open-source replacement for paid grocery scanners like Yuka. <a href="https://shivacheruvu.github.io/ANTeater/" target="_blank" rel="noopener">Try it live</a>.<br>
    <ul>
      <li><strong>Why:</strong> Shiva shops for groceries daily and didn't want to pay a subscription for a lookup built on open data.</li>
      <li><strong>How it works:</strong> camera barcode scan, Open Food Facts lookup, and a transparent 0&ndash;100 score (nutrition 60, additives 30, organic 10, high-risk additives cap it at 49).</li>
      <li><strong>AI:</strong> optional Gemini reads ingredient-label photos into the same scoring engine and explains scores in plain English.</li>
      <li><strong>Zero-leak:</strong> no backend and no stored keys; AI features use each visitor's own Gemini key, kept in their browser.</li>
    </ul>`
  },
  "cloud": {
    topic: "Cost-Capped Cloud Infrastructure (Databricks 14-Day Trial & GCP)",
    badge: "Infra Cost Guardrails",
    response: `Shiva's cloud infrastructure shortcuts demonstrate deep expertise in compute cost optimization:<br>
    <ul>
      <li><strong>Databricks 14-Day Trial Daemon:</strong> Automated cluster orchestrator enforcing 15-minute inactivity termination, single-node autoscaling, and zero idle spend so trial credits never burn out.</li>
      <li><strong>GCP Credit Protection:</strong> GCS Coldline lifecycle rules, BigQuery query byte billing limits, and Workload Identity Federation (keyless GitHub Actions &rarr; GCP deployment).</li>
      <li><strong>Multi-Cloud Scope:</strong> Hands-on across AWS (S3, EC2), GCP (GCS, BigQuery), and Azure, backed by AWS Cloud Practitioner and Okta certifications.</li>
    </ul>`
  },
  "security": {
    topic: "Security-First Development & Secret Protection",
    badge: "Gitleaks & Identity Security",
    response: `All projects in this repository and Shiva's portfolio adhere to strict security guardrails:<br>
    <ul>
      <li><strong>Zero Hardcoded Credentials:</strong> Every repo uses <code>.env.example</code> with placeholder configurations. Live keys never leave local environment variables.</li>
      <li><strong>Automated Scanning:</strong> Continuous CI/CD scanning via <code>gitleaks-action</code> across full commit histories plus pre-commit hooks.</li>
      <li><strong>Access Control:</strong> Certified Okta Professional expertise applied to SSO, IAM principles, and least-privilege cloud roles.</li>
      <li><strong>Outside Viewership Protection:</strong> External visitors cannot spend Shiva's cloud credits or access private resources.</li>
    </ul>`
  }
};

function initAgenticIntelligence() {
  const outputBox = document.getElementById('intelOutputBox');
  const promptButtons = document.querySelectorAll('.intel-prompt-btn');
  const customInput = document.getElementById('intelCustomInput');
  const customSubmit = document.getElementById('intelSubmitBtn');

  if (!outputBox) return;

  function displayTopic(key) {
    const data = INTEL_KNOWLEDGE_BASE[key];
    if (!data) return;

    outputBox.innerHTML = `
      <div class="intel-badge">${data.badge}</div>
      <h5 class="fw-bold mb-2 text-agent-gradient">${data.topic}</h5>
      <div class="text-secondary small line-height-lg">${data.response}</div>
    `;
  }

  promptButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      promptButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const topic = btn.getAttribute('data-topic');
      displayTopic(topic);
    });
  });

  if (customSubmit && customInput) {
    const handleCustomSearch = () => {
      const query = customInput.value.toLowerCase().trim();
      if (!query) return;

      let matchedKey = 'claude-code';
      if (query.includes('claude') || query.includes('codex') || query.includes('antigravity') || query.includes('agent')) {
        matchedKey = 'claude-code';
      } else if (query.includes('frontier') || query.includes('verizon') || query.includes('pyspark') || query.includes('databricks')) {
        matchedKey = 'frontier';
      } else if (query.includes('yuka') || query.includes('grocery') || query.includes('food') || query.includes('app')) {
        matchedKey = 'yuka';
      } else if (query.includes('cloud') || query.includes('gcp') || query.includes('trial') || query.includes('cost')) {
        matchedKey = 'cloud';
      } else if (query.includes('security') || query.includes('leak') || query.includes('secret') || query.includes('key')) {
        matchedKey = 'security';
      }

      displayTopic(matchedKey);
      customInput.value = '';
    };

    customSubmit.addEventListener('click', handleCustomSearch);
    customInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') handleCustomSearch();
    });
  }
}

/* -------------------------------------------------------------
 * 3. Project Filter Tabs
 * ------------------------------------------------------------- */
function initProjectFiltering() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-item');

  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterCategory = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterCategory === 'all' || cardCategory === filterCategory) {
          card.style.display = 'block';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
        }
      });
    });
  });
}

/* -------------------------------------------------------------
 * 4. Code Copier
 * ------------------------------------------------------------- */
function initCodeCopier() {
  const copyButtons = document.querySelectorAll('.copy-btn');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const codeElement = document.getElementById(targetId);
      if (!codeElement) return;

      navigator.clipboard.writeText(codeElement.innerText).then(() => {
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="bi bi-check-lg text-success"></i> Copied!';
        setTimeout(() => {
          btn.innerHTML = originalText;
        }, 2000);
      });
    });
  });
}

/* -------------------------------------------------------------
 * 5. Interactive Mock Output Runner for Micro-Tooling
 * ------------------------------------------------------------- */
function initMockRunner() {
  const runnerBtn = document.getElementById('runMicrotoolBtn');
  const terminalOutput = document.getElementById('microtoolConsole');

  if (!runnerBtn || !terminalOutput) return;

  runnerBtn.addEventListener('click', () => {
    terminalOutput.innerHTML = `
<span class="text-warning">[CLAUDE CODE]</span> Executing cloud-infra daemon: databricks_trial_bootstrap.py
<span class="text-info">[INIT]</span> Initializing Databricks 14-Day Trial Capped Compute...
<span class="text-success">[CHECK]</span> Auth protocol: Keyless Workload Identity. Zero stored secrets detected.
<span class="text-info">[CONFIG]</span> Single-node compute driver: Standard_D4ds_v5 (0 workers).
<span class="text-warning">[GUARD]</span> Auto-termination idle threshold locked to 15m. Billable overage cap: $0.00.
<span class="text-info">[UNITY]</span> Mounting Delta Medallion schemas: /raw &rarr; /bronze &rarr; /silver &rarr; /gold.
<span class="text-success">[DONE]</span> Cluster ready. Cluster ID: trial-capped-sandbox-1003.
<span class="text-muted">Status: Running within 14-day free trial limits. Auto-shutdown daemon active.</span>
    `;
  });
}

/* -------------------------------------------------------------
 * Microfeatures: rendered live from the cloud-microfeatures repo
 * ------------------------------------------------------------- */
(function () {
  const tracks = ['databricks', 'gcp'];
  if (!document.getElementById('mf-databricks-list')) return;
  const REPO = 'shivacheruvu/cloud-microfeatures';
  const SRC = `https://raw.githubusercontent.com/${REPO}/main/manifest.json`;
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const safeUrl = (u) => (/^https:\/\//.test(String(u || '')) ? String(u) : '#');
  const STATUS = { ran: 'Ran in the cloud', 'ran-local': 'Ran locally', built: 'Built and tested', blocked: 'Blocked' };
  const COLOR = { databricks: ['rgba(255,54,33,.12)', '#d6331f'], gcp: ['rgba(66,133,244,.12)', '#2f6fdb'] };
  const box = (html) => `<div class="p-4 rounded-3 text-center text-muted small" style="background: var(--bg-surface); border: 1px dashed var(--border-color);">${html}</div>`;
  const el = (t, k) => document.getElementById(`mf-${t}-${k}`);

  const card = (f) => {
    const [bg, fg] = COLOR[f.platform];
    const nf = f.new_feature || {};
    return `<div class="p-3 rounded-3 d-flex flex-column" style="background: var(--bg-surface); border: 1px solid var(--border-color);">
      <div class="d-flex justify-content-between align-items-center mb-2">
        <span class="badge small" style="background:${bg};color:${fg}">Day ${Number(f.day)}</span>
        <span class="small text-muted">${esc(STATUS[f.status] || f.status)}</span>
      </div>
      <div class="fw-bold mb-1">${esc(f.title)}</div>
      <div class="small text-muted mb-2">${esc(f.summary)}</div>
      ${nf.name ? `<div class="small mb-2"><i class="bi bi-stars"></i> New: <a href="${esc(safeUrl(nf.source))}" target="_blank" rel="noopener">${esc(nf.name)}</a> <span class="text-muted">(${esc(nf.released)})</span></div>` : ''}
      ${f.headline ? `<div class="small fw-bold mb-2">${esc(f.headline)}</div>` : ''}
      <div class="d-flex flex-wrap gap-1 mb-2">${(f.skills || []).map((s) => `<span class="badge-tech">${esc(s)}</span>`).join('')}</div>
      <a class="small" href="https://github.com/${REPO}/tree/main/${encodeURI(f.path)}" target="_blank" rel="noopener">Code, test and results</a>
    </div>`;
  };

  fetch(SRC, { cache: 'no-store' })
    .then((r) => { if (!r.ok) throw new Error(r.status); return r.json(); })
    .then(({ program, features }) => {
      const total = program.total_days || 80;
      const start = new Date(program.start_date + 'T12:00:00').toLocaleDateString([], { month: 'long', day: 'numeric' });
      tracks.forEach((t) => {
        const mine = features.filter((f) => f.platform === t).sort((a, b) => b.day - a.day);
        el(t, 'count').textContent = `${mine.length} / ${total}`;
        el(t, 'bar').style.width = `${(mine.length / total) * 100}%`;
        el(t, 'list').innerHTML = mine.length ? mine.map(card).join('') : box(`Day 1 ships ${esc(start)}.`);
      });
    })
    .catch(() => {
      tracks.forEach((t) => {
        el(t, 'list').innerHTML = box(`Couldn't load the latest progress. See it on <a href="https://github.com/${REPO}" target="_blank" rel="noopener">GitHub</a>.`);
      });
    });
})();
