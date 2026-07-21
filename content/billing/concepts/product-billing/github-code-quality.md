---
title: '{% data variables.product.prodname_code_quality %} billing'
intro: 'In addition to standard {% data variables.product.prodname_actions %} minutes, {% data variables.product.prodname_code_quality %} billing has two parts: a per-committer license and {% data variables.product.prodname_ai_credit_singular %} usage for AI-powered features.'
product: '{% data reusables.gated-features.code-quality-availability %}'
versions:
  feature: code-quality
shortTitle: GitHub Code Quality
contentType: concepts
category:
  - Understand product costs
---

## How {% data variables.product.prodname_code_quality %} billing is measured

Use of {% data variables.product.prodname_code_quality_short %} incurs three types of costs for an organization:
* **{% data variables.product.prodname_actions %} minutes** — {% data variables.product.prodname_code_quality_short %} scans run as {% data variables.product.prodname_actions %} workflows and consume {% data variables.product.prodname_actions %} minutes, unless you use self-hosted runners. For more information, see [AUTOTITLE](/billing/concepts/product-billing/github-actions).
* **{% data variables.product.prodname_ai_credits %}** — {% data variables.product.prodname_code_quality_short %} features that use AI models consume {% data variables.product.prodname_ai_credits_short %} from your shared {% data variables.product.prodname_ai_credits_short %} pool, rather than a separate {% data variables.product.prodname_code_quality_short %} allowance. Each interaction is priced based on the number of tokens consumed, where 1 {% data variables.product.prodname_ai_credit_singular %} = {% data variables.product.prodname_ai_credits_value %}. {% data reusables.code-quality.model-usage %} For more information about how {% data variables.product.prodname_ai_credits_short %} work, see [AUTOTITLE](/copilot/concepts/billing/usage-based-billing-for-organizations-and-enterprises).
* **Active committers** — {% data variables.product.prodname_code_quality %} is a standalone product with its own license: it uses **one {% data variables.product.prodname_code_quality %} license per active committer**, and does not consume {% data variables.product.prodname_GH_advanced_security %} or any other product's licenses. Your license usage is calculated based on the number of unique, active committers to repositories with {% data variables.product.prodname_code_quality_short %} enabled. {% data variables.product.prodname_github_app %} bots are ignored. For information about differences between bot and machine accounts, see [AUTOTITLE](/apps/oauth-apps/building-oauth-apps/differences-between-github-apps-and-oauth-apps#machine-vs-bot-accounts).

### Active and unique committers

Each **active committer** to at least one repository with {% data variables.product.prodname_code_quality_short %} enabled uses **one {% data variables.product.prodname_code_quality %} license**. A committer is considered active if one of their commits has been pushed to the repository within the last 90 days, regardless of when it was originally authored.

* **Active committers** are committers who contributed to at least one repository and have a {% data variables.product.prodname_team %} or {% data variables.product.prodname_enterprise %} license with your organization or enterprise. This includes members, enterprise-managed users, external collaborators, and people with a pending invitation to join your organization or enterprise.
* **Unique committers** is the number of active committers who contributed only to one repository, or only to repositories in one organization. You can free up this number of licenses by disabling {% data variables.product.prodname_code_quality_short %} for that repository or organization.

Users can contribute to multiple repositories or organizations. Usage is measured across the whole organization or enterprise to ensure that each member uses one license regardless of how many repositories or organizations the user contributes to.

## Further reading

* [AUTOTITLE](/code-security/tutorials/improve-code-quality/catch-issues-before-merge)
* [AUTOTITLE](/billing/concepts/product-billing/github-actions)
* [AUTOTITLE](/copilot/concepts/billing/usage-based-billing-for-organizations-and-enterprises)
