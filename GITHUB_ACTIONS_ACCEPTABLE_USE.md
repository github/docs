# GitHub Actions Workflows — TOS / Acceptable Use Violation Guide

## Purpose

This document outlines common patterns, anti-patterns, and activities within GitHub Actions workflows that **can break GitHub’s Terms of Service (TOS)** or **Acceptable Use Policies (AUP)**. Violations can lead to:

- workflow termination by GitHub,
- restriction or suspension of GitHub Actions,
- repository disablement,
- account suspension or termination.

This guidance supplements the official terms: GitHub Terms of Service, GitHub Terms for Additional Products, and GitHub Acceptable Use Policies. :contentReference[oaicite:1]{index=1}

---

## 1. Disallowed Workflow Use Cases

### ❌ Cryptomining or Other Unrelated Compute Tasks

Workflows must not be used for general computing tasks unrelated to repository software production, testing, deployment, or publication. Examples included 

- running cryptomining jobs in workflows. :contentReference[oaicite:2]{index=2}
- serving general compute jobs not tied to the repo’s development lifecycle.

GitHub explicitly prohibits using Actions for high-burden compute services (e.g., as a general serverless platform). :contentReference[oaicite:3]{index=3}

---

### ❌ Unauthorized Access or Security Violations

Workflows must not perform activities that:

- attempts to disrupt or gain unauthorized access to devices, services, accounts, or networks outside authorized bug bounty programs; or
- initiates attacks (e.g., scanning, exploitation, denial of service). :contentReference[oaicite:4]{index=4}

Workflows that include malicious scripts, malware, or code designed to breach systems are prohibited.

---

### ❌ Excessive or Abusive Automation

GitHub’s Acceptable Use Policies ban content and activity that:

- use the platform for excessive automated bulk activity;
- place undue burden on GitHub’s infrastructure through automation. :contentReference[oaicite:5]{index=5}

Workflows that run on overly aggressive schedules, spawn thousands of concurrent jobs, or perform arbitrary network calls purely for automation strain GitHub resources.

---

### ❌ Spam, Inauthentic, or Misleading Content

Avoid workflows that:

- mass-generate notifications, issues, comments, or pull requests for spam purposes;
- automate fake stars, forks, or bot activity to artificially inflate metrics;
- publish promotions or solicitations that violate the AUP. :contentReference[oaicite:6]{index=6}
- Using GitHub actions to scam/spam is against our Rules
---

## 2. Content and Code Restrictions

### ❌ Publishing Unlawful Content

Workflows should not be used to upload or distribute illegal or harmful content via generated artifacts or repository commits, including:

- malware or exploit binaries as outputs of CI jobs; or
- code explicitly meant to violate laws. :contentReference[oaicite:7]{index=7}

GitHub may remove such content and take action.

---

### ❌ Intellectual Property Violations

Workflows that publish artifacts, binaries, or code that infringe copyright, trademark rights, or proprietary licenses are violations under the Acceptable Use Policies. :contentReference[oaicite:8]{index=8}

---

## 3. Workflow Security-Related Concerns (Operational Risks)

*Note: The following are **security best practices** but can also correlate to **policy violations if misused**.*

### ⚠️ Using Untrusted or Unsigned Actions

Workflows that reference unverified third-party actions (e.g., from unknown authors or with typo-squatted names) create security risks, which can lead to unintended malicious code execution. Though not a direct TOS clause, this **enables violations** when workflows execute harmful logic. :contentReference[oaicite:9]{index=9}

**Mitigation:**

- use verified actions or restrict allowed actions at the org level,
- pin action versions to commit hashes or specific releases.

---

### ⚠️ Exposing Secrets

Workflows with insecure handling of secrets (e.g., printing them to logs, uploading them in public artifacts) can lead to compromise. While this is primarily a security issue, GitHub may take action if secrets are leaked at scale or used in harmful ways.

---

### ⚠️ Self-Hosted Runner Misconfiguration

Self-hosted runners exposed to untrusted code (e.g., in public fork PRs) can execute arbitrary code on internal infrastructure. Misconfigurations that lead to unauthorized access on private networks can trigger policy enforcement. :contentReference[oaicite:10]{index=10}

---

## 4. API and Tokens Misuse

- Abuse or excessive API usage (including workflow tokens and GitHub API clients) can lead to enforcement actions under API Terms and TOS. :contentReference[oaicite:11]{index=11}
- Sharing API tokens to exceed rate limits is prohibited.

---

## 5. Consequences of Violations

GitHub’s policy enforcement actions may include:

- termination or disabling of offending workflows,
- throttling or restricting GitHub Actions use,
- disabling repositories created solely for TOS violations,
- account suspension or termination. :contentReference[oaicite:12]{index=12}

---

## 6. Recommended Safe Practices

✔ Only run Actions directly related to the software’s build, test, deployment, or publishing.  
✔ Pin action versions to stable releases.  
✔ Restrict workflows from running on untrusted pull requests without approval.  
✔ Avoid metascheduling unrelated compute tasks.

---

## 7. References

- **GitHub Terms of Service & Acceptable Use Policies** — official source of usage restrictions. :contentReference[oaicite:13]{index=13}  
- **Additional Terms for GitHub Actions** — limitations on compute and prohibited uses. :contentReference[oaicite:14]{index=14}  
