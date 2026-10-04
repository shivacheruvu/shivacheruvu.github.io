### Summary of Changes
<!-- Describe the purpose and implementation details of this PR -->

### Security & Secret Leakage Checklist
Before submitting this pull request, verify that every check passes:
- [ ] **No Hardcoded Secrets**: Verified that no API keys, tokens, service account credentials, `.env` files, or passwords are included in this PR.
- [ ] **BYOK Compliant**: Any cloud or AI examples use `.env.example` placeholders so external viewers use their own accounts.
- [ ] **PII Protection**: No phone numbers, home addresses, or private internal IDs are contained in public files.
- [ ] **Gitleaks Passed**: Ran local `gitleaks detect` or verified `.pre-commit-config.yaml` passed.
- [ ] **Cost Caps Verified**: Cloud infrastructure configs include explicit idle-timeout policies (e.g. 15-minute termination) or query byte limits.
