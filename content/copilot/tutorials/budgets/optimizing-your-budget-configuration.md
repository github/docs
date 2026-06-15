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

Before optimizing your budget configuration, make sure you understand how budget controls work and how the system evaluates them. See [AUTOTITLE](/copilot/concepts/billing/budgets-for-usage-based-billing).

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

## Choosing a scope

For most enterprises, we recommend **cost center budgets with users directly assigned**. When users are assigned directly to a cost center, charges always follow the user, so enforcement is predictable regardless of how licenses are structured.

| Scope | Use when | Who can set it |
| --- | --- | --- |
| Cost center budget | You want predictable organization-level spending control as an enterprise admin. | Enterprise owners, billing managers |
| Organization budget | Organization owners need to set their own spending limits without enterprise admin involvement. | Organization owners |
| Enterprise budget | You need a failsafe that caps total metered charges for all users not covered by a narrower budget. | Enterprise owners, billing managers |

If users in your enterprise have {% data variables.product.prodname_copilot_short %} licenses from multiple organizations, both organization budgets and cost centers that only contain organizations (not users) will enforce unpredictably. The billing organization is chosen at random each cycle, so spend may count against a different budget from month to month. Assigning users directly to cost centers avoids this problem.

### Migrating from organization budgets to cost centers

If your enterprise already has organization budgets, they will continue to work. However, if you have users with {% data variables.product.prodname_copilot_short %} licenses assigned through multiple organizations, migrating to cost centers with direct user assignment gives more predictable enforcement.

1. Create cost centers and assign users directly (not just organizations).
1. Set cost center budgets matching your desired spending caps.
1. Remove the organization budgets once cost center budgets are in place.

## Common scenarios

The following scenarios show common budget configurations for different enterprise structures.

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

### Delegating control to organization owners

**Situation:** Organization owners need to set their own spending guardrails without involving an enterprise admin.

**Configuration:**

* Each organization owner sets an **organization budget** for their organization.
* The enterprise admin sets an **enterprise budget** as a safety net.
* Enable **"Stop usage when budget limit is reached"** on all budgets.

Organization budgets are the only budget option available to organization owners. An organization budget can only further restrict usage below any budget set by an enterprise admin. It cannot override a higher-level budget.

If users in your enterprise have {% data variables.product.prodname_copilot_short %} licenses assigned through multiple organizations, organization budgets may not enforce predictably for those users. In this case, {% data variables.product.github %} picks one organization at random each billing cycle to bill the seat. This means the user's spend could count against a different organization's budget from month to month, making enforcement unpredictable. To avoid this, ensure each user has a single license through one organization, or use cost center budgets with direct user assignment.

## Using historical data to size budgets

Your AI usage dashboard and the usage export CSV are the best tools for sizing budgets. Look at:

* **Per-user consumption:** Identify how credits are distributed across your users. If consumption is concentrated in a small group, user-level budgets with individual overrides will be more effective than a single high universal ULB.
* **Model usage patterns:** Different models consume credits at different rates. If a few users are driving high spend through premium models, consider whether model policies (restricting which models are available) would be more effective than tightening budgets.
* **Monthly trends:** Check whether consumption is steady or spiky. A spike might be temporary (a migration project, an onboarding sprint) rather than a new baseline. Size budgets for the steady state and use individual overrides for temporary exceptions.
