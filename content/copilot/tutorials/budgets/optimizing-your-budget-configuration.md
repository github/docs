---
title: Optimizing your budget configuration
shortTitle: Optimize budget configuration
intro: 'Find the right combination of budget controls for your organization based on your size, structure, and spending goals.'
redirect_from:
  - /copilot/concepts/billing/premium-request-management
  - /copilot/how-tos/manage-and-track-spending/manage-request-allowances
  - /copilot/how-tos/premium-requests/manage-for-enterprise
  - /copilot/how-tos/spending/manage-for-enterprise
  - /copilot/how-tos/spending/manage-for-your-enterprise
  - /copilot/how-tos/manage-and-track-spending/manage-for-your-enterprise
versions:
  feature: copilot
permissions: Enterprise owners, organization owners, and billing managers
product: '{% data variables.copilot.copilot_enterprise_short %} or {% data variables.copilot.copilot_business_short %}'
contentType: tutorials
category:
  - Manage Copilot for a team
---

Before optimizing your budget configuration, make sure you understand how the four budget controls work and how the system evaluates them. See [AUTOTITLE](/copilot/concepts/billing/budgets-for-usage-based-billing).

If you haven't set up budgets yet, start with [AUTOTITLE](/copilot/tutorials/budgets/getting-started-with-budget-controls) to get the basics in place, then come back to this guide to optimize your configuration.

## Sizing your budgets

The relationship between user-level budgets (ULB) and other budgets is the most common source of unexpected blocking. If user-level budgets collectively allow more consumption than the shared pool provides, the difference becomes metered charges, and your budgets need to be high enough to cover that gap.

Here's how to estimate:

1. Calculate the maximum total consumption your user-level budgets allow: multiply the number of regular users by the universal ULB, then add the sum of any individual ULB overrides.
1. Calculate your pool value: multiply your {% data variables.copilot.copilot_business_short %} seats by {% data variables.copilot.cfb_price_per_month %} and your {% data variables.copilot.copilot_enterprise_short %} seats by {% data variables.copilot.ce_price_per_month %}, then add them together.
1. Subtract the pool value from the maximum total consumption. The result is the maximum metered charges your budgets need to cover.

If you also use cost center budgets, the sum of your cost center budgets and your enterprise budget should cover the gap. The enterprise budget applies to users not assigned to a cost center.

> [!TIP]
> Whenever you raise user-level budgets, re-check this calculation. Raising ULBs without raising the enterprise budget can cause the enterprise budget to block users before they reach their individual budgets.

## Common scenarios

The following scenarios show common budget configurations for different enterprise structures. Each one builds on the previous, adding more controls. Start with the simplest configuration that matches your needs. You can layer on additional controls later as your usage patterns become clearer.

### Manage shared usage responsibly

**Situation:** You want to prevent any single user from consuming a disproportionate share of the pool, while still allowing flexibility for heavier users.

**Configuration:**

* Set a **universal user-level budget** above the per-license value to allow pooling to work.
* Set **individual user-level budget overrides** for known power users who need higher limits.
* Set an **enterprise budget** as a safety net for metered charges.
* Enable **"Stop usage when budget limit is reached"** on the enterprise budget.

This is the simplest configuration and a good starting point for most enterprises.

### Budget by business unit

**Situation:** You have multiple business units or organizations and want each to be accountable for their own metered spend.

**Configuration:**

* Create **cost centers** scoped to each organization. See [AUTOTITLE](/billing/how-tos/products/use-cost-centers).
* Set a **cost center budget** for each business unit.
* Set an **enterprise budget** as a failsafe for any users not assigned to a cost center.
* Enable **"Stop usage when budget limit is reached"** on all budgets.

With this configuration, each business unit has its own metered spending cap. When a cost center's budget runs out, only users in that cost center are blocked, other business units are unaffected. The enterprise budget catches any users who aren't assigned to a cost center.

Consider enabling **cost center exclusion** if you want business units to operate independently of the enterprise budget. This allows cost center users to keep spending even if the enterprise budget reaches $0 USD, but it means their metered charges are only capped by their own cost center budget.

### Power users within business units

**Situation:** You want per-team accountability and need to give specific developers higher limits within a business unit.

**Configuration:**

* Create **cost centers** scoped to each organization.
* Set a **universal user-level budget** to cap most users.
* Set **individual user-level budget overrides** for power users who need more capacity.
* Set **cost center budgets** for each business unit.
* Set an **enterprise budget** as a failsafe.
* Enable **"Stop usage when budget limit is reached"** on all budgets.

This is the most granular configuration. It combines per-user controls (who can consume how much), per-team controls (how much metered spend each business unit can generate), and an enterprise-wide safety net. Use this when you have a mix of usage patterns across teams and need fine-grained governance.

## Using historical data to size budgets

Your AI usage dashboard and the usage export CSV are the best tools for sizing budgets. Look at:

* **Per-user consumption:** Identify how credits are distributed across your users. If consumption is concentrated in a small group, user-level budgets with individual overrides will be more effective than a single high universal ULB.
* **Model usage patterns:** Different models consume credits at different rates. If a few users are driving high spend through premium models, consider whether model policies (restricting which models are available) would be more effective than tightening budgets.
* **Monthly trends:** Check whether consumption is steady or spiky. A spike might be temporary (a migration project, an onboarding sprint) rather than a new baseline. Size budgets for the steady state and use individual overrides for temporary exceptions.
