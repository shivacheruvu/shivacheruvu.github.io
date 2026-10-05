# AI Frontier Portfolio & Engineering Showcase

**Shiva Preetham Chinthalacheruvu** &middot; Forward Deployed Data Engineer &middot; [shivacheruvu.github.io](https://shivacheruvu.github.io)

[![Secret scan](https://github.com/shivacheruvu/shivacheruvu.github.io/actions/workflows/secret-scan.yml/badge.svg)](https://github.com/shivacheruvu/shivacheruvu.github.io/actions/workflows/secret-scan.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Zero-Leak: BYOK Compliant](https://img.shields.io/badge/Security-BYOK%20Zero--Leak-success)](SECURITY.md)

This repository powers the personal portfolio and engineering showcase for **Shiva Preetham Chinthalacheruvu**, redesigned around forward-deployed enterprise data engineering on **Databricks, Delta Lake, PySpark, and Cloud Lakehouse Architectures (AWS & GCP)**, integrated with modern agentic development prioritizing **Claude Code CLI**, **Google Antigravity**, and **OpenAI Codex**.

---

## 🏛️ Portfolio Structure & Project Pillars

The portfolio is architected into 3 core sections:

### 1. AI End-to-End Consumer App &mdash; [ANTeater](https://shivacheruvu.github.io/ANTeater/) (Yuka Replacement)
- **Problem**: Paid grocery-scanning apps charge a subscription for lookups built on open data.
- **Solution**: An open-source PWA: barcode to a transparent 0&ndash;100 health score, additive warnings with sources, and higher-scoring alternatives. Spend tracking with CSV export.
- **Stack**: JavaScript PWA &middot; BarcodeDetector/ZXing &middot; Open Food Facts API &middot; optional Gemini (label OCR, explanations) &middot; GitHub Actions &amp; Pages.
- **Zero-Leak Security**: No backend and no stored keys. AI features are Bring-Your-Own-Key, kept in the visitor's browser. Code: [shivacheruvu/ANTeater](https://github.com/shivacheruvu/ANTeater).

### 2. Functional Tooling & Microfeatures &mdash; Cloud & Data Infra Shortcuts
- **Problem**: Cloud engineering experiments often exhaust trial limits (e.g. Databricks 14-day trial) or burn unexpected cloud credits.
- **Solution**: Modular, cost-capped infrastructure shortcuts:
  - **Databricks 14-Day Trial Daemon**: Single-node bootstrap with an immutable 15-minute inactivity termination policy and automatic Unity Catalog scaffolding.
  - **GCP Credit-Protected Lakehouse**: GCS Coldline lifecycle rules and BigQuery maximum query byte billing caps.
  - **PySpark Production Reconciliation Utility**: Fast primary-key and schema drift diff engine across billions of records.

### 3. Production & Legacy Engineering Projects
- **NBA Player Clustering**: Unsupervised ML (PCA, K-Means) mapping modern positionless basketball roles ([Repo](https://github.com/shivacheruvu/NBA-Clustering-Project)).
- **SLOW-ARC**: Affordable computer vision trajectory tracking for softball ball/strike decisions ([Repo](https://github.com/shivacheruvu/SLOW-ARC)).
- **Sales Intelligence Dashboard**: Enterprise Tableau analytics visualizing multi-dimensional sales performance ([Repo](https://github.com/shivacheruvu/Sales-Project---Tableau)).
- **Automated Schema & PK Extraction Utility**: PySpark metadata extraction and CI/CD drift alert engine.

---

## 🔒 Security, Credential Isolation & Outside Viewership Policy

This repository is publicly inspectable as open-source portfolio code, but is strictly isolated against resource abuse:

1. **No Credentials in Code, Ever**: API keys, service-account JSON, private keys, and session tokens are strictly blocked by `.gitignore`.
2. **Automated Scanning**: Every push and pull request is scanned across full Git history by [`gitleaks`](.github/workflows/secret-scan.yml).
3. **Local Pre-Commit Guard**: Developers must run `pre-commit install` using [`.pre-commit-config.yaml`](.pre-commit-config.yaml) to block accidental secrets before committing.
4. **Bring-Your-Own-Key (BYOK)**: All code templates provide `.env.example`. Anyone replicating these projects runs them on their own free-tier credentials; no external entity can consume Shiva's cloud accounts or quotas.
5. **Anti-Scraping / PII Protection**: Raw telephone numbers and personal addresses are kept out of public source files.

For full details, please refer to [`SECURITY.md`](SECURITY.md).

---

## 🛠️ Local Development & Preview

This website is a zero-build-step static site compatible with GitHub Pages:

```bash
# Clone the repository
git clone https://github.com/shivacheruvu/shivacheruvu.github.io.git
cd shivacheruvu.github.io

# Switch to the AI Frontier Portfolio branch
git checkout ai-frontier-portfolio-update

# Run a local lightweight HTTP server
python3 -m http.server 8000
```

Open `http://localhost:8000` in your browser.

---

## 📄 License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for details.
