---
title: AI applications scanning for pull requests
shortTitle: '{% data variables.product.prodname_ai_applications_scanning %}'
allowTitleToDifferFromFilename: true
intro: 'Catch risky data flows in AI applications and agents, such as indirect prompt injection, before they reach production.'
product: '{% data reusables.gated-features.ai-applications-scanning %}'
versions:
  feature: ai-applications-scanning
contentType: concepts
category:
  - Find and fix code vulnerabilities
---

> [!NOTE]
> {% data variables.product.prodname_ai_applications_scanning %} is currently in {% data variables.release-phases.public_preview %} and subject to change.

## What is {% data variables.product.prodname_ai_applications_scanning %}?

{% data variables.product.prodname_ai_applications_scanning %} is a detector that finds security risks specific to AI applications and agents. It detects:

* **Indirect prompt injection:** When malicious instructions embedded in external content, such as documents, websites, or API responses, can influence a model's behavior.
* **Sensitive information disclosure:** When an AI application can expose sensitive information, such as credentials, personal data, or confidential business data.
* **Excessive agency:** When an AI application or agent has excessive functionality, permissions, or autonomy that could allow it to perform unintended or harmful actions.

This detector is separate from {% data variables.product.prodname_codeql %}-based code scanning and from AI Scan for pull requests, {% data variables.product.github %}'s other AI-based code scanning detector on pull requests. AI Scan for pull requests focuses on traditional code security vulnerabilities, while {% data variables.product.prodname_ai_applications_scanning %} focuses on vulnerabilities specific to AI applications and agents, such as prompt injection and excessive agency. If your organization builds AI applications or agents, evaluate both. For more information about AI Scan for pull requests, see [AUTOTITLE](/code-security/concepts/code-scanning/ai-powered-security-detections).

## How it works

{% data variables.product.prodname_ai_applications_scanning %} uses an LLM-based detection approach instead of {% data variables.product.prodname_codeql %}. Because it doesn't rely on static analysis built for specific languages, it has no language or framework limitations.

The detector analyzes pull requests for code patterns and data flows that can expose AI applications to indirect prompt injection, sensitive information disclosure, or excessive agency.

Scans run when a pull request is created and after each new commit.

## How findings appear on pull requests

Findings from {% data variables.product.prodname_ai_applications_scanning %} appear as pull request comments, the same way other code scanning findings do. Each finding includes:

* The same "AI" label and thumbs up/down feedback control as findings from AI Scan for pull requests
* A dismiss button

As with AI Scan, these findings are advisory. They don't block a pull request from being merged.

{% data variables.copilot.copilot_autofix_short %} suggestions are generated automatically for findings from this detector. This behavior is independent of the Code Scanning Autofix setting, which controls {% data variables.copilot.copilot_autofix_short %} for {% data variables.product.prodname_codeql %} results.

## Detection coverage

During {% data variables.release-phases.public_preview %}, {% data variables.product.prodname_ai_applications_scanning %} only detects indirect prompt injection (XPIA) vulnerabilities in AI agents.

This detector covers pull requests only. It doesn't scan your full repository or existing backlog for AI application risks.

As with AI Scan for pull requests, this detector doesn't run on pull requests from forks or pull requests created by {% data variables.product.prodname_dependabot %}, and its findings can't be used in rulesets to enforce merge requirements.

## How to enable {% data variables.product.prodname_ai_applications_scanning %}

{% data variables.product.prodname_ai_applications_scanning %} is off by default at the enterprise, organization, and repository level.

* **Enterprise**: Enablement is controlled by the shared **AI Scan** enterprise policy. Enterprise owners can allow organizations to enable AI-powered code scanning features, including {% data variables.product.prodname_ai_applications_scanning %}. See [AUTOTITLE](/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise#enforcing-a-policy-to-manage-ai-scan-in-your-enterprises-repositories).
* **Organization**: Organization owners can enable **Scan for AI applications** for eligible repositories where it's allowed. See [AUTOTITLE](/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/configure-global-settings#enabling-ai-applications-scanning).
* **Repository**: Repository administrators can opt out for individual repositories once their organization allows it.

If your organization already has AI Scan for pull requests enabled, or you're moving from the private preview of {% data variables.product.prodname_ai_applications_scanning %}, you still need to separately enable **Scan for AI applications** at the organization level. Enabling AI Scan for pull requests doesn't enable {% data variables.product.prodname_ai_applications_scanning %}, and the reverse is also true. Both features share the same enterprise-level policy, but organizations must enable each one separately.

## Billing

Using {% data variables.product.prodname_ai_applications_scanning %} requires a {% data variables.product.prodname_GHAS %} license and consumes {% data variables.product.prodname_ai_credits_short %} on top of that license. Eligible public repositories are also included in this billing requirement. For more information, see [AUTOTITLE](/billing/concepts/product-billing/github-advanced-security#how-ai-feature-usage-is-billed).
