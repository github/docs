---
title: About GitHub Code Quality
intro: 'Decide whether {% data variables.product.prodname_code_quality %} meets your team''s needs, how it complements other {% data variables.product.github %} products, and what to consider before purchasing.'
product: '{% data reusables.gated-features.code-quality-availability %}'
versions:
  feature: code-quality
shortTitle: GitHub Code Quality
category:
  - Explore GitHub plans and features
---

## About {% data variables.product.prodname_code_quality %}

{% data variables.product.prodname_code_quality %} analyzes your code for quality and coverage issues using {% data variables.product.prodname_codeql %} rules and AI-powered analysis.

* On pull requests, findings appear as inline comments with one-click {% data variables.product.prodname_copilot_short %}-powered fixes, so new quality debt doesn't accumulate before code is merged.
* On your default branch, scans surface existing quality debt. You can apply autofixes directly, or delegate remediation to {% data variables.copilot.copilot_cloud_agent %}.

You can enforce quality thresholds with rulesets to block pull requests that don't meet your team's standards. To also enforce line coverage thresholds, upload a Cobertura XML coverage report from your tests.

To purchase {% data variables.product.prodname_code_quality %}, see {% data variables.product.pricing_link %}. For more information, including supported languages, see [AUTOTITLE](/code-security/concepts/code-quality/code-quality).

## How {% data variables.product.prodname_code_quality_short %} fits with other {% data variables.product.github %} products

{% data variables.product.prodname_code_quality_short %} is purchased separately from {% data variables.product.prodname_GHAS %} and {% data variables.product.prodname_copilot_short %}. It focuses on metrics related to code quality, such as code coverage. {% data variables.product.prodname_GHAS %} products focus on security, and {% data variables.copilot.copilot_code-review_short %} provides AI-powered feedback on pull requests.

{% data variables.product.prodname_code_quality_short %} enforces deterministic quality and coverage rules that you can use to block merges, while {% data variables.copilot.copilot_code-review_short %} gives broader, conversational AI feedback. Many teams use both: {% data variables.copilot.copilot_code-review_short %} for general review, and {% data variables.product.prodname_code_quality_short %} for enforceable standards.

## Costs to consider

Before purchasing {% data variables.product.prodname_code_quality_short %}, consider these costs:

* A per-active-committer fee for repositories where it's enabled
* {% data variables.product.prodname_actions %} minutes for scans, unless you use self-hosted runners
* {% data variables.product.prodname_ai_credits %} for {% data variables.product.prodname_copilot_short %}-powered fixes and AI-powered detections (no {% data variables.product.prodname_copilot_short %} license required)

For more information, see [AUTOTITLE](/billing/concepts/product-billing/github-code-quality).

## Next steps

To start using {% data variables.product.prodname_code_quality_short %}, see [AUTOTITLE](/code-security/how-tos/maintain-quality-code/enable-code-quality).
