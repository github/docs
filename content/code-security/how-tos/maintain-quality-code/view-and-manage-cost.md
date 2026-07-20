---
title: Viewing and managing {% data variables.product.prodname_code_quality %} costs
shortTitle: View and manage cost
intro: 'Keep your {% data variables.product.prodname_code_quality_short %} spend predictable by seeing exactly where charges come from and using the levers that bring them down.'
versions:
  feature: code-quality
product: '{% data reusables.gated-features.code-quality-availability %}'
permissions: '{% data reusables.permissions.enhanced-billing-cloud-all %}'
audience:
  - driver
contentType: how-tos
category:
  - Improve code quality
---

Knowing what {% data variables.product.prodname_code_quality_short %} costs, and which levers you can pull, lets you justify the spend before you roll it out, and keep it predictable afterward. This article covers where charges come from, where to watch your usage, and how to bring costs down.

## How you're charged for {% data variables.product.prodname_code_quality_short %}

{% data variables.product.prodname_code_quality_short %} usage adds up from three types of cost across your organization:

* **License usage**, based on the number of unique, active committers to repositories where {% data variables.product.prodname_code_quality_short %} is enabled.
* **{% data variables.product.prodname_actions %} minutes**, consumed each time a scan runs (unless you use self-hosted runners).
* **{% data variables.product.prodname_ai_credits %}**, consumed by {% data variables.product.prodname_code_quality_short %}'s AI features: the fixes it generates for findings, and the AI detections scans if you turn that page on.

For exactly how each cost is measured, see [AUTOTITLE](/billing/concepts/product-billing/github-code-quality?utm_campaign=code-quality-ga-july-2026&utm_medium=docs&utm_source=docs-view-manage-cost-billing).

It's important to understand how {% data variables.product.prodname_code_quality %} uses {% data variables.product.prodname_ai_credits_short %} before you scale:

* {% data variables.product.prodname_code_quality_short %} draws from your **shared {% data variables.product.prodname_ai_credits_short %} pool**, the same pool every AI product (like {% data variables.product.prodname_copilot_short %}) draws from. It isn't a separate {% data variables.product.prodname_code_quality_short %} allowance.
* This pool is shared at your **billing entity** level. If your organization is billed through an enterprise, {% data variables.product.prodname_code_quality_short %} draws from the enterprise-wide pool rather than an organization-only one.
* Once the shared pool is exhausted, what happens next depends on how you've configured your policy for additional usage. To avoid unexpected charges, set a budget with a hard stop.
* Your per-committer license charge is separate and isn't affected by {% data variables.product.prodname_ai_credits_short %} usage.

## Where to see your usage

{% data variables.product.prodname_code_quality_short %} usage appears in the **same billing and usage views as your other products**, not in a separate {% data variables.product.prodname_code_quality_short %} meter. Where you look depends on how granular a breakdown you need:

* **For a repository- or organization-level breakdown, download the billing usage report** from the "Billing and licensing" tab. This is the only place you can attribute {% data variables.product.prodname_code_quality_short %} spend, including {% data variables.product.prodname_actions %} minutes, down to a specific repository or organization. There's no equivalent view in the UI. See [AUTOTITLE](/billing/how-tos/products/view-productlicense-use).
* **For {% data variables.product.prodname_code_quality_short %}'s {% data variables.product.prodname_ai_credits_short %} usage over time, use the AI usage page** and group it by **Product** using the dropdown at the top right. This separates {% data variables.product.prodname_code_quality_short %} from your other AI products, like {% data variables.product.prodname_copilot_short %}, so you can track its share of the pool. To monitor the pool as a whole instead, see [AUTOTITLE](/copilot/concepts/billing/usage-based-billing-for-organizations-and-enterprises).

## Monitoring your spend

Once {% data variables.product.prodname_code_quality_short %} is running, watch your actual usage over time so costs stay predictable. Track two things:

* Your **{% data variables.product.prodname_actions %} minutes**, which grow with the number of repositories running scans.
* Your **shared {% data variables.product.prodname_ai_credits_short %} pool**, which {% data variables.product.prodname_code_quality_short %} draws down alongside your other AI products. Watch the pool as a whole to avoid overage, and group the AI usage page by **Product** when you want {% data variables.product.prodname_code_quality_short %}'s share specifically.

## Controlling your costs

You have several levers to keep spend in check. In rough order of impact:

* **Enable selectively.** Turn {% data variables.product.prodname_code_quality_short %} on where it adds value rather than across every repository at once. See [AUTOTITLE](/code-security/how-tos/maintain-quality-code/enable-code-quality).
* **Disable low-value repositories.** Disabling {% data variables.product.prodname_code_quality_short %} on a repository frees the licenses for committers unique to it, and stops its scans and AI usage. See [AUTOTITLE](/code-security/how-tos/maintain-quality-code/disable-code-quality).
* **Set a budget.** A budget for {% data variables.product.prodname_code_quality_short %} stops your spending automatically once you hit your limit, because the hard stop is mandatory (see below).
* **Keep the AI detections page off.** This page is **off by default** and stays in {% data variables.release-phases.public_preview %}, so it only draws down {% data variables.product.prodname_ai_credits_short %} if you turn it on. Repositories that enabled it during the preview keep it on, so turn it off there if you don't want the usage.

<!-- VERIFY before GA: exact path to turn off the AI detections page for a repo that enabled it during preview. (Default-off-at-GA confirmed in github/security-products#2357.) -->

### Setting a budget

Budgets are your main control for the {% data variables.product.prodname_ai_credits_short %} side of {% data variables.product.prodname_code_quality_short %}, because {% data variables.product.prodname_code_quality_short %} draws from the shared {% data variables.product.prodname_ai_credits_short %} pool.

For {% data variables.product.prodname_code_quality_short %}, a budget is always a hard cap. When you create the budget, **Stop usage when budget limit is reached** is enabled by default and can't be turned off, so usage stops automatically once you exhaust the budget.

When you create a budget, you choose a **Budget type**. Two apply to {% data variables.product.prodname_code_quality_short %}:

* An **{% data variables.product.prodname_ai_credits_short %} budget**, which covers every SKU that consumes {% data variables.product.prodname_ai_credits_short %}, including {% data variables.product.prodname_code_quality_short %}. Use this to cap total AI spend across products.
* A **SKU-level budget**, scoped to {% data variables.product.prodname_code_quality_short %} alone, so you can limit its spend without affecting your other AI products. This gives you granular, product-specific control, for example to contain spend during a rollout without touching your {% data variables.product.prodname_copilot_short %} budget.

To get started, see [AUTOTITLE](/billing/how-tos/set-up-budgets).

## What you can't control

Be aware of two limits so there are no surprises:

* **You can't pre-estimate spend** before you enable {% data variables.product.prodname_code_quality_short %}. Usage depends on your committers, scan frequency, and findings, so plan to watch actuals after you turn it on rather than forecast them precisely.
* **You can't turn off the in-pull-request AI features.** {% data variables.product.prodname_code_quality_short %} generates a fix for every detected finding, so {% data variables.product.prodname_ai_credits_short %} usage is inherent to running it. To stop that usage entirely, disable {% data variables.product.prodname_code_quality_short %} on the repository.

## Next steps

* **Roll out across your organization.** See [AUTOTITLE](/code-security/how-tos/maintain-quality-code/roll-out-at-scale).
* **Assess health across your organization.** See [AUTOTITLE](/code-security/how-tos/maintain-quality-code/explore-code-quality).
