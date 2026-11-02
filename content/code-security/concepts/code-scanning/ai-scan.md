---
title: About AI Scan
shortTitle: AI Scan
intro: 'AI Scan extends {% data variables.product.prodname_code_scanning %} with AI-based detection to help find security vulnerabilities.'
versions:
  feature: ai-powered-security-detections
contentType: concepts
category:
  - Find and fix code vulnerabilities
---

AI Scan is a set of AI-powered scanning capabilities that complement {% data variables.product.prodname_codeql %}. The capabilities differ in their scope:

* **AI Scan for repositories** scans a repository’s default branch on demand across all languages, including languages already supported by {% data variables.product.prodname_codeql %}.
* **AI Scan for pull requests** currently finds general security vulnerabilities in selected languages and frameworks not covered by {% data variables.product.prodname_codeql %}.
* **Scan for AI applications** finds risks specific to AI applications and agents, such as indirect prompt injection, independently of {% data variables.product.prodname_codeql %} language coverage.

Each feature has its own coverage, availability, and billing requirements.

{% ifversion ai-scan-for-repositories %}

## AI Scan for repositories

{% data reusables.code-scanning.ai-scan-for-repositories-preview %}

AI Scan for repositories finds security vulnerabilities across your repository's default branch, in any language. It extends coverage beyond {% data variables.product.prodname_codeql %}-supported languages and can find additional vulnerabilities in languages {% data variables.product.prodname_codeql %} already analyzes.

Users with write access run scans on demand. Findings are added to your {% data variables.product.prodname_code_scanning %} backlog alongside {% data variables.product.prodname_codeql %} alerts, where you can assign them, link them to issues, include them in security campaigns, or use {% data variables.copilot.agentic_autofix %} to help fix them.

For more information, including availability, billing, limitations, and enablement guidance, see [AUTOTITLE](/code-security/concepts/code-scanning/ai-scan-for-repositories).

{% endif %}

## AI scanning on pull requests

### General code security vulnerabilities

**AI Scan for pull requests** finds security vulnerabilities in pull request changes for selected languages and frameworks not covered by {% data variables.product.prodname_codeql %}. Examples include PHP and Terraform configuration (HCL).

When enabled, it scans eligible pull requests when they are created and after each new commit. Findings appear alongside {% data variables.product.prodname_codeql %} alerts with an "AI" label.

For more information, including coverage, availability, billing, and enablement guidance, see [AUTOTITLE](/code-security/concepts/code-scanning/ai-powered-security-detections).

{% ifversion ai-applications-scanning %}

### AI application and agent risks

**Scan for AI applications** finds security risks in AI applications and agents in pull requests, initially focusing on indirect prompt injection.

When enabled, the detector scans eligible pull requests when they are created and after each new commit. Findings appear as comments on the pull request.

For more information, including coverage, availability, billing, and enablement guidance, see [AUTOTITLE](/code-security/concepts/code-scanning/ai-applications-scanning-for-pull-requests).

{% endif %}

## Managing AI Scan

For enterprises, a shared **AI Scan** policy controls whether organizations can enable these features. Allowing AI Scan does not automatically enable any feature. See [AUTOTITLE](/enterprise-cloud@latest/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise#enforcing-a-policy-to-manage-ai-scan-in-your-enterprises-repositories).

Organizations enable each feature separately, and repository administrators can opt out for each feature independently. For permissions and setup instructions, see the dedicated article for each feature.
