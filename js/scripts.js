/**
 * AI Frontier Portfolio Scripts
 * Shiva Preetham Chinthalacheruvu
 * Implements Theme Switching, Personal Intelligence Terminal, Filter Tabs, Code Copier
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initPersonalIntelligence();
  initProjectFiltering();
  initCodeCopier();
  initMockRunner();
});

/* -------------------------------------------------------------
 * 1. Dark / Light Theme Toggle
 * ------------------------------------------------------------- */
function initThemeToggle() {
  const toggleBtn = document.getElementById('themeToggleBtn');
  if (!toggleBtn) return;

  const currentTheme = localStorage.getItem('theme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(toggleBtn, currentTheme);

  toggleBtn.addEventListener('click', () => {
    const activeTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(toggleBtn, newTheme);
  });
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
 * 2. Personal Intelligence Module (Gemini / Antigravity Agent)
 * ------------------------------------------------------------- */
const INTEL_KNOWLEDGE_BASE = {
  "frontier": {
    topic: "Enterprise Delta Lake & PySpark (Frontier/Verizon)",
    badge: "Databricks & Delta Lake",
    response: `At <strong>Frontier/Verizon</strong>, Shiva serves as a Forward Deployed Data Engineer, modernizing legacy enterprise data warehouses:<br>
    <ul>
      <li><strong>Informatica Migration:</strong> Architected PySpark pipelines replacing legacy IICS & Oracle ETL, cutting runtime by <strong>42%</strong>.</li>
      <li><strong>Lakehouse Ingestion:</strong> Ingests multi-gigabyte compressed <code>.gz</code> archives into Delta Lake Medallion (Bronze &rarr; Silver &rarr; Gold) with Z-Ordering and partition pruning for <strong>3.5x query acceleration</strong>.</li>
      <li><strong>Reconciliation Engine:</strong> Engineered automated PK validation and schema drift detection diffing billions of records between on-prem EDW and cloud storage.</li>
      <li><strong>Governance & SLAs:</strong> Built CCPA & OneTrust automated deletion pipelines across Unity Catalog and configured modular YAML Databricks Multi-Task Workflows achieving <strong>99.9% SLA reliability</strong>.</li>
    </ul>`
  },
  "yuka": {
    topic: "SmartGrocery AI (End-to-End Yuka Alternative)",
    badge: "AI E2E Vision & Cost-Optimization",
    response: `<strong>SmartGrocery AI</strong> is Shiva's self-directed end-to-end AI application replacing subscription-based food scanning apps like Yuka:<br>
    <ul>
      <li><strong>Daily Utility:</strong> Designed for everyday grocery shopping to save money and safeguard health without paying recurring subscription fees.</li>
      <li><strong>Vision Pipeline:</strong> Mobile barcode & ingredient OCR parsed via Gemini Multimodal Vision to flag ultra-processed additives, endocrine disruptors, and carcinogens.</li>
      <li><strong>Price Arbitrage:</strong> Aggregates live supermarket price feeds to surface cheaper, healthier pantry alternatives.</li>
      <li><strong>Zero-Leak BYOK:</strong> Built on a client-side Bring-Your-Own-Key model—anyone can clone and run it on free-tier Gemini API with zero cloud credit leakage or exposed secrets.</li>
    </ul>`
  },
  "cloud": {
    topic: "Cloud Infrastructure & Cost Guardrails (GCP & Databricks)",
    badge: "Cost-Capped Cloud Architecture",
    response: `Shiva's cloud infrastructure methodology focuses on high throughput with strict budget guardrails:<br>
    <ul>
      <li><strong>Databricks 14-Day Trial Daemon:</strong> Automated cluster orchestrator that enforces 15-minute inactivity termination, single-node autoscaling, and zero idle spend.</li>
      <li><strong>GCP Credit-Protected Lakehouse:</strong> GCS lifecycle rule scripts, BigQuery byte-billing limits, and Workload Identity Federation (keyless GitHub Actions &rarr; GCP deployment).</li>
      <li><strong>Multi-Cloud Scope:</strong> Hands-on across AWS (S3, EC2), GCP (GCS, BigQuery), and Azure, backed by AWS Cloud Practitioner and Okta certifications.</li>
    </ul>`
  },
  "security": {
    topic: "Security-First Development & Secret Protection",
    badge: "Gitleaks & Identity Security",
    response: `All projects in this repository and Shiva's portfolio adhere to ironclad security standards:<br>
    <ul>
      <li><strong>Zero Hardcoded Credentials:</strong> Every repo uses <code>.env.example</code> with placeholder configurations. Live keys never leave local environment variables or Secret Manager.</li>
      <li><strong>Automated Scanning:</strong> Continuous CI/CD scanning via <code>gitleaks-action</code> across full commit histories plus pre-commit hooks.</li>
      <li><strong>Access Control:</strong> Certified Okta Professional expertise applied to SSO, IAM principles, and least-privilege cloud roles.</li>
      <li><strong>Consumer Isolation:</strong> Outside viewers can inspect and run Shiva's code using their own accounts without touching Shiva's cloud credits or billing resources.</li>
    </ul>`
  },
  "education": {
    topic: "University of Minnesota & Certifications",
    badge: "Academic & Professional Credentials",
    response: `<strong>Education:</strong> Bachelor of Science in Data Science from the <strong>University of Minnesota, Twin Cities</strong>.<br>
    <strong>Certifications & Track:</strong><br>
    <ul>
      <li>Databricks Certified Professional Data Engineer <em>(In Progress)</em></li>
      <li>Google Cloud Certified Professional Data Engineer <em>(In Progress)</em></li>
      <li>AWS Certified Cloud Practitioner <em>(Foundational Cloud Architecture)</em></li>
      <li>Okta Certified Professional <em>(Identity Access Management & App Security)</em></li>
    </ul>`
  }
};

function initPersonalIntelligence() {
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
      <h5 class="fw-bold mb-2 text-gemini-gradient">${data.topic}</h5>
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

      let matchedKey = 'frontier';
      if (query.includes('yuka') || query.includes('grocery') || query.includes('food') || query.includes('ai app')) {
        matchedKey = 'yuka';
      } else if (query.includes('cloud') || query.includes('gcp') || query.includes('databricks') || query.includes('cost') || query.includes('trial')) {
        matchedKey = 'cloud';
      } else if (query.includes('security') || query.includes('leak') || query.includes('secret') || query.includes('key') || query.includes('okta')) {
        matchedKey = 'security';
      } else if (query.includes('degree') || query.includes('school') || query.includes('cert') || query.includes('minnesota') || query.includes('education')) {
        matchedKey = 'education';
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
<span class="text-info">[INIT]</span> Initializing Databricks 14-Day Trial Bootstrap...
<span class="text-success">[CHECK]</span> Auth protocol: Keyless Workload Identity. Zero stored secrets detected.
<span class="text-info">[CONFIG]</span> Compute config: Single-node standard (Driver: Standard_D4ds_v5, Workers: 0).
<span class="text-warning">[GUARD]</span> Auto-termination idle threshold locked to 15m. Max spend cap: $0.00 billable overage.
<span class="text-info">[UNITY]</span> Mounting Delta Medallion schemas: /raw_landing &rarr; /bronze &rarr; /silver &rarr; /gold.
<span class="text-success">[DONE]</span> Cluster ready. Cluster ID: 1003-trial-sandbox-capped.
<span class="text-muted">Status: Running within free limits. Scheduled teardown daemon active.</span>
    `;
  });
}