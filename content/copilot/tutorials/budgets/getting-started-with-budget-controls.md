---
title: Getting started with budget controls
shortTitle: Get started with budgets
intro: 'Set up budget guardrails for your enterprise before your team starts consuming {% data variables.product.prodname_ai_credits_short %}.'
versions:
  feature: copilot
permissions: Enterprise owners, organization owners, and billing managers
product: '{% data variables.copilot.copilot_enterprise_short %} or {% data variables.copilot.copilot_business_short %}'
contentType: tutorials
category:
  - Manage Copilot for a team
---

Under usage-based billing, your enterprise's included {% data variables.product.prodname_ai_credits_short %} are pooled and shared across all licensed users. Without budget controls in place, a single heavy user or automated agent session can consume a disproportionate share of the pool early in the billing cycle, leaving less for everyone else.

<!-- expires 2026-07-01 -->

This tutorial walks you through the recommended setup steps in order. Complete them as soon as usage-based billing is available for your enterprise.

<!-- end expires 2026-07-01 -->

Before you begin, make sure you understand how the four budget controls work and how the system evaluates them. See [AUTOTITLE](/copilot/concepts/billing/budgets-for-usage-based-billing).

<!-- expires 2026-09-01 -->

> [!NOTE]
> If your enterprise was using {% data variables.product.prodname_copilot_short %} before June 1, 2026, you are on a promotional period (June–August 2026) where your included {% data variables.product.prodname_ai_credits_short %} are higher than the standard amounts. When the promotional period ends on September 1, 2026, the shared pool will be smaller. Use this period to understand your team's baseline consumption and adjust your spending limits before the transition. See [AUTOTITLE](/copilot/concepts/billing/usage-based-billing-for-organizations-and-enterprises#how-do-ai-credits-work) for the standard and promotional amounts.

<!-- end expires 2026-09-01 -->

## Step 1: Set a universal user-level budget

The universal user-level budget (ULB) is the single most important control. It caps how much any one user can consume per billing cycle—from both the shared pool and any additional metered usage—and applies automatically to every licensed user in your enterprise.

Set the universal ULB **above** the per-license value ({% data variables.copilot.cfb_price_per_month %} for {% data variables.copilot.copilot_business_short %}, {% data variables.copilot.ce_price_per_month %} for {% data variables.copilot.copilot_enterprise_short %}). Setting it above the per-license value lets pooling work as intended: heavier users can draw from lighter users' unused portions, rather than being capped at exactly their own license value.

For step-by-step instructions, see [AUTOTITLE](/billing/how-tos/set-up-budgets#creating-a-budget).

## Step 2: Identify your power users and set individual overrides

Once you have a universal ULB in place, review your AI usage dashboard to identify your heaviest consumers. Users who consistently need more capacity than the universal default—for example, developers running frequent agent sessions or working with large codebases—may be blocked unnecessarily if their limit is too low.

For these users, set an individual user-level budget override. Individual overrides take precedence over the universal default. You can increase or decrease the limit for a specific user without affecting anyone else.

> [!TIP]
> If you're setting up budgets for the first time and don't yet have usage data, start with a universal ULB that feels reasonable for your organization and revisit after your first billing cycle. Your AI usage dashboard will give you the data you need to tune individual overrides.

## Step 3: Set an enterprise spending limit

The enterprise spending limit caps your total metered charges after the shared pool is exhausted. It doesn't affect how users draw from the pool, it only applies once the pool runs out and usage moves to pay-as-you-go.

See [Sizing your spending limits](/copilot/tutorials/budgets/optimizing-your-budget-configuration#sizing-your-spending-limits) for guidance on calculating the right amount for your enterprise.

## Step 4: Enable "Stop usage when budget limit is reached" on every spending limit

By default, reaching a spending limit sends a notification but does not stop usage. Charges continue to accrue without a cap until you manually intervene.

To turn your spending limit into a hard stop, enable "Stop usage when budget limit is reached" on every spending limit you create: enterprise-level and cost center-level. When enabled, metered usage is blocked when the limit is reached rather than allowed to continue. User-level budgets don't require this step—they always enforce a hard stop automatically.

> [!IMPORTANT]
> Without "Stop usage when budget limit is reached" enabled, your spending limits are alerts only, not guardrails. Always enable it when creating a spending limit.

## Step 5: Monitor regularly

Once your budgets are in place, check your AI usage dashboard at least monthly. Look for:

* **Users getting blocked early in the cycle**: Your universal ULB is too restrictive, or that a power user needs an individual override.
* **Metered charges appearing unexpectedly**: The pool is being exhausted before the end of the cycle. Consider whether usage patterns have changed and whether your spending limits need adjusting.
* **Pool lasting all month with no blocked users**: This is the target state. Your budgets are well-sized.

## Next steps

* To go deeper on budget configuration for your organization's structure, see [AUTOTITLE](/copilot/tutorials/budgets/optimizing-your-budget-configuration).
