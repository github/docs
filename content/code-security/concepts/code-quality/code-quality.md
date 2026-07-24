---
title: GitHub Code Quality
shortTitle: GitHub Code Quality
allowTitleToDifferFromFilename: true
intro: '{% data variables.product.prodname_code_quality %} catches quality issues before merge, delivers one-click {% data variables.product.prodname_copilot_short %}-powered fixes inline, and checks your code coverage.'
product: '{% data reusables.gated-features.code-quality-availability %}'
versions:
  feature: code-quality
contentType: concepts
audience:
  - driver
redirect_from:
  - /code-security/code-quality/concepts/about-code-quality
  - /code-security/code-quality/concepts
  - /code-security/code-quality
  - /code-security/concepts/about-code-quality
category:
  - Improve code quality
---

{% data variables.product.prodname_code_quality %} analyzes your code for quality and coverage issues and delivers {% data variables.product.prodname_copilot_short %}-powered fixes you can apply in one click. It runs in two places:

* **On pull requests**, findings appear as inline comments before code is merged. If you upload a Cobertura XML coverage report, coverage metrics show whether a change maintains or reduces coverage. You can enforce quality and coverage thresholds with rulesets to block pull requests that don't meet your criteria, so new quality debt doesn't accumulate.
* **On the default branch**, scans identify existing quality debt across your codebase, with autofixes you can apply directly or assign to {% data variables.copilot.copilot_cloud_agent %} to resolve on your behalf.

Detection combines deterministic {% data variables.product.prodname_codeql %} rules for known anti-patterns with AI-powered analysis for issues that fall outside existing rule sets, including languages not yet covered by {% data variables.product.prodname_codeql %} queries.

## Use cases

Here's what {% data variables.product.prodname_code_quality %} looks like in practice.

For developers and teams:

* **A developer opens a pull request** that introduces a reliability or maintainability issue. {% data variables.product.prodname_code_quality_short %} posts a comment explaining the issue and offers a one-click fix before the code is merged. The developer also sees a report of coverage metrics, and can tell at a glance whether the pull request improves or reduces coverage compared to the default branch.
* **A team adopts AI coding assistants** and needs assurance that generated code meets the same bar as hand-written code. AI-powered analysis catches issues that rule-based queries weren't written for, while {% data variables.product.prodname_codeql %} rules cover well-defined anti-patterns.
* **A team inherits a large codebase** with years of accumulated quality debt. {% data variables.product.prodname_code_quality_short %} scans the default branch, surfaces findings with autofixes on a dashboard, and the team assigns remediation work to {% data variables.copilot.copilot_cloud_agent %} to open fix pull requests automatically.

For administrators and leads:

* **An engineering lead sets coverage and quality thresholds** using rulesets. Pull requests that don't meet the criteria are blocked from merging, so no new quality or coverage debt accumulates.
* **An administrator needs visibility across repositories** for audits or compliance reporting. {% data variables.product.prodname_code_quality_short %} reports through the security overview alongside security tools, so they can see quality posture across the organization at a glance, identify which repositories need attention, and track improvement metrics using standard {% data variables.product.github %} audit controls and policies.

## Availability and billing

Usage costs are determined by:

* A per-seat license fee based on active committers.
* AI-powered detections and {% data variables.product.prodname_copilot_short %}-powered autofixes, which consume {% data variables.product.prodname_ai_credits %} (no {% data variables.product.prodname_copilot_short %} license required).
* {% data variables.product.prodname_actions %} minutes for deterministic {% data variables.product.prodname_codeql %} scans, if you don't use self-hosted runners.

Optional features, such as delegating code quality remediation work to {% data variables.product.prodname_copilot_short %}, require a {% data variables.product.prodname_copilot_short %} license.

For more information, see [AUTOTITLE](/billing/concepts/product-billing/github-code-quality).

## Supported languages

{% data variables.product.prodname_code_quality_short %} performs rule-based analysis of the following languages using {% data variables.product.prodname_codeql %}:

{% data reusables.code-quality.codeql-supported-languages %}

It also performs AI-powered analysis on pull requests and on your repository's recently changed code, including languages beyond those supported by rule-based queries.

## Next steps

* **For your enterprise:** Ensure repositories in your enterprise can enable {% data variables.product.prodname_code_quality_short %}. See [AUTOTITLE](/code-security/how-tos/secure-at-scale/configure-enterprise-security/configure-specific-tools/allow-github-code-quality-in-enterprise?utm_campaign=code-quality-ga-july-2026&utm_medium=docs&utm_source=docs-cq-intro-enable-cq-enterprise).
* **For your repository or organization:** Turn on {% data variables.product.prodname_code_quality_short %} to start generating results. See [AUTOTITLE](/code-security/how-tos/maintain-quality-code/enable-code-quality?utm_campaign=code-quality-ga-july-2026&utm_medium=docs&utm_source=docs-cq-intro-enable-cq-repo).
* **On your pull request:** Learn how to fix code quality findings on your pull request. See [AUTOTITLE](/code-security/tutorials/improve-code-quality/catch-issues-before-merge?utm_campaign=code-quality-ga-july-2026&utm_medium=docs&utm_source=docs-cq-intro-fix-on-pr).
