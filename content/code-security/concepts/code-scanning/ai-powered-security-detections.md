---
title: AI Scan for pull requests
shortTitle: AI Scan for pull requests
allowTitleToDifferFromFilename: true
intro: 'AI Scan uses an AI-based scanning engine to find security vulnerabilities in pull requests for languages and frameworks not covered by {% data variables.product.prodname_codeql %}.'
versions:
  feature: ai-powered-security-detections
contentType: concepts
category:
  - Find and fix code vulnerabilities
---

AI Scan for pull requests produces additional security findings with an AI-based scanning engine that runs on pull requests and complements {% data variables.product.prodname_codeql %}.

AI Scan expands {% data variables.product.prodname_code_scanning %} coverage for pull requests without requiring a separate scanning tool or build configuration.

AI Scan for pull requests is one of the independently controlled features grouped under **AI Scan** in {% data variables.product.github %} settings. See [AUTOTITLE](/code-security/concepts/code-scanning/ai-scan).

## Availability

Availability depends on who owns the repository and its visibility.

{% data reusables.code-scanning.ai-scan-availability %}

AI Scan for pull requests is not available for repositories in a {% data variables.enterprise.prodname_managed_user %}'s personal namespace, even if {% data variables.product.prodname_code_scanning %} is enabled for the repository.

You do not need a {% data variables.product.prodname_copilot %} license to use AI Scan.

## Billing

AI Scan usage is separate from active-committer licensing and is reported under the **{% data variables.product.prodname_code_security %} {% data variables.product.prodname_ai_credits_short %}s** SKU. Usage begins only when a qualifying pull request is scanned.

For organization-owned repositories, usage is billed to the account responsible for the organization's billing.

{% data reusables.code-scanning.ai-scan-personal-account-billing %}

{% data reusables.code-scanning.ai-scan-billing-credits %}

For details about the billing model, see [AUTOTITLE](/billing/concepts/product-billing/github-advanced-security#how-ai-feature-usage-is-billed).

## How AI Scan works

AI Scan runs automatically when all the following conditions are met:

* {% data variables.product.prodname_code_scanning_caps %} is enabled for the repository.
* The repository's AI Scan on pull requests setting is enabled.
* A pull request that is not from a fork or created by {% data variables.product.prodname_dependabot %} contains changes in a supported language or framework that {% data variables.product.prodname_codeql %} does not cover.

Scans run when a pull request is created and after each new commit, as they do for {% data variables.product.prodname_codeql %}.

AI Scan does not require {% data variables.product.prodname_codeql %} default setup and does not depend on the state of {% data variables.product.prodname_codeql %} analysis. If {% data variables.product.prodname_codeql %} analysis fails or is in a waiting state, AI Scan will still run.

Results are posted to the pull request as they are found. If the {% data variables.product.prodname_codeql %} scan takes longer to complete, you may see AI Scan findings before {% data variables.product.prodname_codeql %} results appear, or vice versa.

Findings are advisory. They do not fail the **{% data variables.product.prodname_code_scanning_caps %}** check and cannot block pull request merges through ruleset requirements. They provide signals about where code security can be improved without interrupting your workflow.

The scanning engine analyzes pull request code without requiring a build system and may use code search to gather more context from the repository before flagging an issue. It uses specialized prompts, not custom instruction files such as `/.github/copilot-instructions.md` or `/CLAUDE.md`.

## How AI Scan findings appear on pull requests

AI Scan findings appear alongside {% data variables.product.prodname_codeql %} alerts on the **Conversation** and **Files changed** tabs of a pull request. Each finding is labeled with an "AI" indicator so you can distinguish it from {% data variables.product.prodname_codeql %} alerts.

Each finding describes the security issue and explains the risk. Most findings also include a suggested remediation. When available, {% data variables.copilot.copilot_autofix_short %} recommends a code change, as it does for {% data variables.product.prodname_codeql %} alerts.

You can use the thumbs up or thumbs down control to provide feedback and help improve detection quality.

## Limitations

* AI Scan findings cannot yet be used in rulesets to enforce merge requirements.
* AI Scan does not run on pull requests from forks or pull requests created by {% data variables.product.prodname_dependabot %}.
* Detection categories and supported languages may change as the feature evolves.
* As with any AI-based tool, AI Scan findings may include false positives. Use the feedback mechanism to report inaccurate results.

## Supported languages

AI Scan on pull requests supports selected languages and frameworks that {% data variables.product.prodname_codeql %} does not currently cover. Examples include PHP, Shell/Bash, Terraform configuration (HCL), Dockerfiles, JSP for Java, and Blazor for C#.

To check whether {% data variables.product.prodname_codeql %} supports a language, see [AUTOTITLE](/code-security/concepts/code-scanning/codeql/codeql-code-scanning).

## Detection categories

AI Scan currently classifies findings into the following categories. Coverage may change as the feature evolves.

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

{% ifversion ai-applications-scanning %}

AI Scan for pull requests and {% data variables.product.prodname_ai_applications_scanning %} are separate features under AI Scan. {% data variables.product.prodname_ai_applications_scanning %} has its own **Scan for AI applications** control and detects risks such as indirect prompt injection in AI applications and agents. Enabling either feature doesn't enable the other. For more information about {% data variables.product.prodname_ai_applications_scanning %}, see [AUTOTITLE](/code-security/concepts/code-scanning/ai-applications-scanning-for-pull-requests).

{% endif %}

Before enabling AI Scan on pull requests for an organization, confirm repository eligibility, review the billing account's included {% data variables.product.prodname_ai_credits_short %}, and configure budgets for metered usage.

Enabling the organization setting enables AI Scan immediately for all eligible repositories where {% data variables.product.prodname_code_scanning %} is enabled. Repository administrators can then opt out, but qualifying pull requests can consume Code Security AI Credits before they do.

You do not need to select a model to enable AI Scan.

* **Enterprise**: Enterprise owners can allow or prevent organizations from enabling AI Scan. The policy is set to "Not allowed" by default. This policy controls both AI Scan on pull requests and AI Scan for a repository's backlog. Allowing AI Scan does not enable it automatically. See [AUTOTITLE](/enterprise-cloud@latest/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise#enforcing-a-policy-to-manage-ai-scan-in-your-enterprises-repositories).
* **Organization**: Organization owners and security managers can enable AI Scan for pull requests for eligible repositories. Repositories inherit the organization setting. See [AUTOTITLE](/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/configure-global-settings#enabling-ai-scan-for-pull-requests).
* **Organization-owned repository**: People with admin access to the repository can opt out when the organization has enabled AI Scan. They cannot opt in when the organization setting is disabled.
* **Public repository owned by a personal account**: People with admin access to the repository enable or disable AI Scan directly by using the **AI Scan for pull requests** toggle under "{% data variables.product.prodname_code_scanning_caps %}".

Organization owners and security managers can review the effective enablement status of AI Scan for pull requests in the "Coverage" view of security overview. See [AUTOTITLE](/code-security/how-tos/view-and-interpret-data/analyze-organization-data/assessing-adoption-code-security).

People with access to security overview can also monitor AI Scan findings across an organization or enterprise:

* The **Prevention** tab on the overview dashboard shows trends in AI Scan findings, how many findings were resolved, and how often developers accepted a {% data variables.copilot.copilot_autofix_short %} suggestion.
* The **AI Scan** tab in the "Code scanning on pull requests" report shows findings over time, the availability of {% data variables.copilot.copilot_autofix_short %} suggestions, and the outcomes of findings with and without suggestions.

For more information, see [AUTOTITLE](/code-security/concepts/code-scanning/code-scanning-on-pull-requests).

You can use the REST API to manage the organization or repository `ai-scan` setting. See [AUTOTITLE](/rest/code-scanning/code-scanning#get-the-ai-scan-setting-for-an-organization).
