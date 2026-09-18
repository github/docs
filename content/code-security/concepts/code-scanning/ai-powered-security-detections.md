---
title: AI Scan for pull requests
shortTitle: AI Scan
allowTitleToDifferFromFilename: true
intro: 'AI Scan uses an AI-based scanning engine to find security vulnerabilities in pull requests for languages and frameworks not covered by {% data variables.product.prodname_codeql %}.'
versions:
  feature: ai-powered-security-detections
contentType: concepts
category:
  - Find and fix code vulnerabilities
---

> [!NOTE]
> AI Scan is currently in {% data variables.release-phases.public_preview %} and subject to change.

AI Scan produces additional security findings with an AI-based scanning engine that runs on pull requests and complements {% data variables.product.prodname_codeql %}. Unlike {% data variables.product.prodname_codeql %} alerts, AI Scan findings are only available on pull requests and do not appear as backlog alerts in the repository's security view.

While {% data variables.product.prodname_codeql %} provides high-precision static analysis for a specific set of supported languages and queries, many repositories use languages and frameworks that {% data variables.product.prodname_codeql %} does not cover. AI Scan expands {% data variables.product.prodname_code_scanning %} coverage into these areas, helping you find vulnerabilities without adding new tools or configuration.

During the {% data variables.release-phases.public_preview %}, AI Scan requires a {% data variables.product.prodname_GHAS %} license and a {% data variables.product.prodname_copilot %} license.

Usage consumes {% data variables.product.prodname_ai_credits_short %}. See [AUTOTITLE](/copilot/concepts/billing/organizations-and-enterprises/usage-based-billing).

## How AI Scan works

AI Scan runs automatically when {% data variables.product.prodname_code_scanning %} is enabled for a repository, the repository's effective AI Scan setting is enabled, and an eligible pull request contains qualifying changes in a supported language or framework that {% data variables.product.prodname_codeql %} does not cover. These conditions also determine when AI Scan usage begins. The scan is triggered on pull request creation and after each new commit, the same as {% data variables.product.prodname_codeql %}.

AI Scan does not require {% data variables.product.prodname_codeql %} default setup and does not depend on the state of {% data variables.product.prodname_codeql %} analysis. If {% data variables.product.prodname_codeql %} analysis fails or is in a waiting state, AI Scan will still run.

AI Scan findings are advisory and do not block pull request merges. They provide signals about where code security can be improved without interrupting your workflow.

The AI scanning engine works directly with the code in the pull request and does not require a build system. It uses tools such as code search to gather additional context from the repository when deciding whether to flag an issue. It uses its own specialized prompts and does not use custom instruction files such as `/.github/copilot-instructions.md` or `/CLAUDE.md`.

Results are posted to the pull request as they are found. If the {% data variables.product.prodname_codeql %} scan takes longer to complete, you may see AI Scan findings before {% data variables.product.prodname_codeql %} results appear, or vice versa.

## How AI Scan findings appear on pull requests

AI Scan findings appear alongside {% data variables.product.prodname_codeql %} alerts on the **Conversation** and **Files changed** tabs of a pull request. Each finding is labeled with an "AI" indicator so you can distinguish it from {% data variables.product.prodname_codeql %} alerts.

Each finding includes a description of the security issue and an explanation of the risk. Most findings also include a suggested remediation, but not every finding has one. Where a suggested remediation is available, {% data variables.copilot.copilot_autofix_short %} is included and provides a recommended code change to fix the issue, the same way it does for {% data variables.product.prodname_codeql %} alerts. Findings also include a thumbs up/down feedback mechanism that helps improve detection quality over time.

## Limitations

* AI Scan analyzes pull requests only. Full repository scans are not supported.
* AI Scan findings cannot yet be used in rulesets to enforce merge requirements.
* AI Scan does not run on pull requests from forks or pull requests created by {% data variables.product.prodname_dependabot %}.
* Detection categories and supported languages may change as the feature evolves.
* As with any AI-based tool, AI Scan findings may include false positives. Use the feedback mechanism to report inaccurate results.

## Supported languages

AI Scan is designed to cover languages and frameworks that are not currently supported by {% data variables.product.prodname_codeql %}. This includes, but is not limited to, languages such as PHP, Shell/Bash, Terraform configuration (HCL), and Dockerfiles, as well as framework coverage gaps such as JSP for Java and Blazor for C#.

For a full list of languages supported by {% data variables.product.prodname_codeql %}, see [AUTOTITLE](/code-security/concepts/code-scanning/codeql/codeql-code-scanning).

## Detection categories

AI Scan currently covers the following categories. These categories describe how findings are classified. The scanning engine may evolve over time as models improve.

* **String injection** — Unsafe string-built SQL, HTML, shell, JSON, or YAML with missing or incorrect escaping or sanitization.
* **Weak cryptography** — Weak algorithms, small keys, insecure randomness, missing encryption, or weak password hashing.
* **Broken access control** — Path traversal, CSRF gaps, or user-driven open redirects.
* **Sensitive data exposure** — Secrets, tokens, passwords, or stack traces stored, logged, or sent without adequate protection.
* **Security misconfiguration** — Risky defaults or settings, such as disabling security controls or enabling debug features.
* **Authentication failures** — Missing TLS or validation, insecure authentication flows, or missing rate limiting.
* **Data integrity failures** — Unsafe deserialization, HTTP for sensitive actions, prototype pollution, or executing untrusted content.
* **Server-side request forgery (SSRF)** — Server fetches attacker-controlled URLs, hosts, or protocols.
* **Supply chain risks** — Unpinned third-party actions, packages, or images, or downloads without integrity checks.

## Enabling AI Scan

AI Scan is not allowed at the enterprise level by default and disabled at the organization and repository levels. Enterprise owners must allow AI Scan before organization administrators can enable it. Enabling AI Scan for an organization applies it to eligible repositories where {% data variables.product.prodname_code_scanning %} is enabled. Repository administrators can opt out for individual repositories. For an eligible public repository owned by a personal account, a repository administrator must enable AI Scan directly for the repository.

You do not need to select a model to enable AI Scan.

* **Enterprise**: The **AI Scan** policy under "Code Security" controls whether organizations can enable the feature. See [AUTOTITLE](/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise#enforcing-a-policy-to-manage-ai-scan-in-your-enterprises-repositories).
* **Organization**: The **AI Scan** setting under "Code scanning" enables AI Scan for eligible repositories in the organization where {% data variables.product.prodname_code_scanning %} is enabled. See [AUTOTITLE](/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/configure-global-settings#enabling-ai-scan).
* **Repository**: For an organization-owned repository, the **AI Scan for pull requests** toggle under "Code scanning" lets repository administrators opt out when AI Scan is enabled for the organization. For an eligible public repository owned by a personal account, the toggle enables or disables AI Scan directly.

You can use the REST API to manage the organization or repository `ai-scan` setting. See [AUTOTITLE](/rest/code-scanning/code-scanning#get-the-ai-scan-setting-for-an-organization).
