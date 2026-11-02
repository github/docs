---
title: AI Scan for a repository's backlog
shortTitle: AI Scan for repositories
intro: 'Find additional security vulnerabilities across languages and manage the results in your existing {% data variables.product.prodname_code_scanning %} backlog.'
versions:
  feature: ai-scan-for-repositories
contentType: concepts
category:
  - Find and fix code vulnerabilities
---

> [!NOTE]
> {% data reusables.code-scanning.ai-scan-for-repositories-preview %}

AI Scan for repositories uses a proprietary harness that leverages multiple models, when available, to find security vulnerabilities on your repository's default branch. It supports all languages, extending coverage beyond {% data variables.product.prodname_codeql %}-supported languages and finding additional vulnerabilities in languages {% data variables.product.prodname_codeql %} already analyzes. You run scans on demand, independently of {% data variables.product.prodname_codeql %}.

AI Scan for repositories adds findings to your {% data variables.product.prodname_code_scanning %} backlog alongside {% data variables.product.prodname_codeql %} alerts. You can use existing workflows to assign alerts, apply {% data variables.copilot.agentic_autofix %}, include alerts in security campaigns, and link them to issues.

## Availability

Availability depends on who owns the repository and its visibility.

{% data reusables.code-scanning.ai-scan-availability %}

You do not need a {% data variables.product.prodname_copilot %} license.

## Billing

You run AI Scan for repositories on demand, and each scan consumes **{% data variables.product.prodname_code_security %} {% data variables.product.prodname_ai_credits_short %}**. This usage is separate from active-committer licensing.

Usage is billed to the account responsible for the organization's billing. 

{% data reusables.code-scanning.ai-scan-personal-account-billing %}

{% data reusables.code-scanning.ai-scan-billing-credits %}

AI scan for repositories has some limits to prevent it from consuming very high amounts of budget. Detection steps are limited to 30 minutes and 150,000 {% data variables.product.prodname_ai_credits_short %}.

For more information, see [AUTOTITLE](/billing/concepts/product-billing/github-advanced-security#how-ai-feature-usage-is-billed).

## How AI Scan works

Users with **write access** to a repository manually trigger a scan of the repository's default branch. The AI agent searches across the repository to identify files and functions to examine. It selects code for further analysis rather than reading every file in full. The agent runs within a time budget. When that budget is exhausted, it stops searching and reports its findings.

AI Scan runs independently of {% data variables.product.prodname_codeql %}. If the repository already has {% data variables.product.prodname_codeql %} alerts, AI Scan uses those alerts to suppress matching findings.

## How AI Scan findings appear in the code scanning backlog

When a scan finishes, its findings appear as alerts in the repository's {% data variables.product.prodname_code_scanning %} alert list, under the **Security and quality** tab, alongside alerts from {% data variables.product.prodname_codeql %}. You can filter the list by the **AI Scan** tool to focus on these findings.

Use the existing alert severity filters to prioritize findings for assessment. You can assign alerts, link them to issues, include them in security campaigns, or use {% data variables.copilot.agentic_autofix %} to help remediate them. See [AUTOTITLE](/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/assess-alerts).

During {% data variables.release-phases.public_preview %}, merging a potential fix does not automatically trigger another AI Scan. You must manually trigger a new scan to check for resolved alerts.

The alert will only close automatically if the applied fix changes the exact line of code that triggered the alert. Otherwise, you must manually close the alert.

## Limitations

* Scans analyze the default branch only.
* Scans are manually triggered. Scheduled scans and automatic scans on push are not supported.
* The agent selects which code to examine within a time budget. A scan does not exhaustively analyze every file or guarantee that it finds every vulnerability.
* Matching against existing {% data variables.product.prodname_codeql %} alerts is best effort, so duplicate alerts can occur.
* AI-generated findings can be inaccurate. Review each finding before deciding how to address it.

For guidance on using AI-powered security features responsibly, see [AUTOTITLE](/code-security/responsible-use/security-and-quality-ai-features).

## Supported languages

AI Scan for repositories supports all languages, including languages already supported by {% data variables.product.prodname_codeql %}. Use it alongside {% data variables.product.prodname_codeql %} to find additional vulnerabilities, or to extend scanning coverage to languages that {% data variables.product.prodname_codeql %} does not support.

## Enabling AI Scan for repositories

Before enabling AI Scan for repositories, confirm repository eligibility, review the billing account's included {% data variables.product.prodname_ai_credits_short %}, and configure budgets for metered usage.

* **Enterprise**: Enterprise owners can allow or prevent organizations from enabling AI Scan for repositories. This policy controls both AI Scan on pull requests and AI Scan for a repository's backlog. The policy is set to "Not allowed" by default. Allowing AI Scan does not enable it automatically. See [AUTOTITLE](/enterprise-cloud@latest/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise#enforcing-a-policy-to-manage-ai-scan-in-your-enterprises-repositories).
* **Organization**: Organization owners and security managers can enable AI Scan for repositories for eligible repositories. Repositories inherit the organization setting. See [AUTOTITLE](/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/configure-global-settings#enabling-ai-scan-for-repositories).
* **Organization-owned repository**: People with admin access to the repository can opt out when the organization has enabled AI Scan. They cannot opt in when the organization setting is disabled. To disable the feature, go to the repository's "Settings" page, under "{% data variables.product.prodname_AS %}", then under "{% data variables.product.UI_code_security_scanning %}", toggle off **AI Scan for repositories**.

## Next steps

To run a scan and manage the resulting alerts, see [AUTOTITLE](/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/viewing-and-managing-ai-scan-alerts).
