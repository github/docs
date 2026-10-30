---
title: Budgets for usage-based billing
shortTitle: Budgets
intro: 'Under usage-based billing, budget controls at the user, organization, cost center, and enterprise levels determine how {% data variables.product.prodname_copilot_short %} usage is served, metered, or blocked.'
versions:
  feature: copilot
permissions: 'Enterprise owners and billing managers can set all budget controls. Organization owners can set organization-level budgets.'
product: '{% data reusables.copilot.enterprise-billing-availability %}'
contentType: concepts
redirect_from:
  - /copilot/concepts/billing/budgets-for-usage-based-billing
category:
  - Manage Copilot for a team
---

Budget controls govern individual {% data variables.product.prodname_ai_credit_singular %} consumption and metered spending. They let you set per-user limits and spending limits for organizations, cost centers, or your enterprise.

{% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %} include a shared pool of credits. Metered charges begin after that pool is exhausted. The {% data variables.product.prodname_copilot_short %} access plan, through {% data variables.product.prodname_ghe_cloud %} or as {% data variables.copilot.copilot_standalone_short %}, has no included allowance, so metered charges begin with the first use.

## Understanding budget controls

You have budget controls at the user, organization, cost center, and enterprise levels, each serving a different purpose. They work together, not as alternatives.

### User-level budget

The user-level budget (ULB) caps how many {% data variables.product.prodname_ai_credits_short %} a single user can consume in a billing cycle, whether usage is metered or drawn from an included pool. ULBs always enforce a hard stop. A $0 USD ULB immediately blocks features that consume {% data variables.product.prodname_ai_credits_short %}.

There are three types, listed from the broadest scope to the most specific:

* **Universal user-level budget:** A default budget applied to every {% data variables.product.prodname_copilot_short %}-licensed user in your enterprise. This is your primary tool for setting a baseline consumption limit.
* **Cost center user-level budget:** A default budget applied to every user in a single cost center, sometimes called a group-scoped user-level budget. You set one per-user amount on the cost center and it applies to every current and future member, so you can give different departments different per-user limits—for example, $20 USD per user for engineering and $5 USD per user for marketing—without creating thousands of individual budgets. It overrides the universal budget for members of that cost center.
* **Individual user-level budget:** A budget set for a specific user, which overrides both the universal default and any cost center user-level budget. Use this for power users who need higher limits, or to restrict specific users to a lower amount.

When more than one type applies to a user, the most specific budget wins: an individual user-level budget takes precedence over a cost center user-level budget, which takes precedence over the universal user-level budget.

#### Expiration dates for individual user-level budgets

You can set an optional expiration date on an individual user-level budget, so a temporary override cleans itself up instead of requiring you to remember to remove it. This is useful when you raise a user's limit for a single sprint, an incident, or a short-term project.

You can choose one of the following:

* **No expiration**, which is the default and means the budget applies until you edit or delete it.
* **Expiration at the end of the current billing cycle.**
* **Expiration on a specific date.**

At the end of the expiration period, {% data variables.product.github %} removes the individual budget. The user then falls back to their cost center user-level budget, if they have one, or otherwise to the universal user-level budget. If no broader budget applies, the user has no remaining user-level budget.

You can change or clear an expiration date at any time. Expiration is only available for individual user-level budgets, not for universal or cost center user-level budgets.

To set an expiration date, see [AUTOTITLE](/billing/how-tos/set-up-budgets#creating-a-budget). You can also set an expiration date with the REST API by using the `expires_at` field when creating or updating a budget. See [AUTOTITLE](/rest/billing/budgets).

#### When users appear in a universal user-level budget

A universal user-level budget can apply to thousands of licensed users. {% data variables.product.github %} creates each user's budget record the first time they consume {% data variables.product.prodname_ai_credits_short %} after the budget is created, or after the start of a new billing cycle. As a result, users appear in the universal budget list gradually rather than all at once, and a licensed user who does not use {% data variables.product.prodname_copilot_short %} in a given billing cycle will not appear in the list for that billing cycle.

For a complete view of all licensed users regardless of activity, use the **AI usage** or **Licensing** pages.

### Cost center budget

A cost center budget limits metered charges for a defined group of users or an organization. It applies from the first metered use, which is after pool exhaustion on plans with an included allowance. It does not limit a team's draw from an included pool.

A cost center budget **does not extend or override a user-level budget**: if a user has reached their user-level budget, they are blocked even if their cost center still has remaining budget.

Members of a cost center can be assigned directly, through an organization, or through an enterprise team. For how usage is allocated when more than one assignment applies to a user, see [AUTOTITLE](/billing/reference/cost-center-allocation).

When an enforced cost center budget is exhausted, only users in that cost center are blocked. Other users and cost centers are unaffected.

A cost center budget limits the team's **total metered charges**. A cost center user-level budget caps **each member's individual consumption**, including any included credits. You can apply both to the same cost center.

### Included usage controls for cost centers

These controls apply to {% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %}, which have an included pool.

{% data reusables.billing.included-usage-controls %}

Unlike a cost center budget, which caps metered charges only after the shared pool of {% data variables.product.prodname_ai_credits_short %} is exhausted, an included usage control limits how much of the pool a cost center can draw **before** the metered phase begins.

Cost center administrators can view the included usage cap and current consumption on the cost center home page. When the included usage pool cap is enabled, the home page shows **AI credit pool enabled** and displays the {% data variables.product.prodname_ai_credits_short %} consumed in that cost center out of the total cap.

#### How the included usage cap is calculated

The cap is the sum of the included {% data variables.product.prodname_ai_credits_short %} for every license assigned to the cost center's members, even when license types are mixed:

* Each {% data variables.copilot.copilot_business_short %} license adds {% data variables.copilot.ai_credits_per_user_business %} {% data variables.product.prodname_ai_credits_short %}.
* Each {% data variables.copilot.copilot_enterprise_short %} license adds {% data variables.copilot.ai_credits_per_user_enterprise %} {% data variables.product.prodname_ai_credits_short %}.

For example, at current included amounts, a cost center with 10 {% data variables.copilot.copilot_business_short %} licenses and 5 {% data variables.copilot.copilot_enterprise_short %} licenses has a cap of 38,500 {% data variables.product.prodname_ai_credits_short %}: 19,000 from the {% data variables.copilot.copilot_business_short %} licenses (10 × {% data variables.copilot.ai_credits_per_user_business %}) plus 19,500 from the {% data variables.copilot.copilot_enterprise_short %} licenses (5 × {% data variables.copilot.ai_credits_per_user_enterprise %}).

The cap updates automatically if {% data variables.product.github %} changes the included amount for a license type. It's also recalculated as the cost center's own licenses change: increases apply right away, so a growing team isn't blocked, while decreases take effect at the start of the next billing cycle, so {% data variables.product.prodname_ai_credits_short %} that members have already used aren't clawed back mid-cycle.

| Change | Effect on the cap | When it applies |
| --- | --- | --- |
| A licensed user is added or granted a license, or an existing license is upgraded (for example, {% data variables.copilot.copilot_business_short %} to {% data variables.copilot.copilot_enterprise_short %}) | Increases | Right away |
| A licensed user is removed or loses their license, or an existing license is downgraded | Decreases | Start of the next billing cycle |
| A licensed member moves between two cost centers that both use included usage controls | Recalculated for both cost centers | Start of the next billing cycle |
| An unlicensed user is added or removed | No change | Not applicable |

### Organization budget

An organization budget limits metered charges for users whose {% data variables.product.prodname_copilot_short %} seats are billed to that organization. Like cost center budgets, it applies from the first metered use.

Organization budgets are the only budget option available to organization owners. They can only further restrict usage below any budget set by an enterprise admin, and they cannot override a higher-level budget.

Usage billed directly to an organization from a {% data variables.product.prodname_github_app %} installation counts against the organization budget. You cannot create a budget for an individual app or installation. If **Stop usage when budget limit is reached** is not enabled, the budget only sends alerts and app spending continues after the limit is reached. For information about managing app access, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-organization/manage-app-copilot-access).

With {% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %}, if a user receives licenses from multiple organizations, {% data variables.product.github %} picks one organization at random each billing cycle to bill the seat. This means the user's spend could count against a different organization's budget from month to month, making enforcement unpredictable. To avoid this, ensure each user has a single license through one organization, or use cost center budgets with direct user assignment.

### Enterprise budget

The enterprise budget limits total metered charges across your entire enterprise. With {% data variables.product.prodname_copilot_short %} access, this is all usage that consumes credits. With an included allowance, this is usage after pool exhaustion.

> [!IMPORTANT]
> The enterprise budget does not cap license fees. For example, 400 {% data variables.copilot.copilot_business_short %} licenses cost $7,600 USD per month. An enforced $5,000 USD enterprise budget allows up to $12,600 USD in combined license and metered charges, not $5,000 USD, unless cost center exclusion allows additional spending.

### How the controls compare

| Control | What it caps | When it's active | Scope | Hard stop? |
| --- | --- | --- | --- | --- |
| Universal user-level budget | Each user's total {% data variables.product.prodname_ai_credit_singular %} consumption | All usage, including any included credits | Per user | Always |
| Cost center user-level budget | Each member's total consumption, set per cost center (overrides universal) | All usage, including any included credits | Per user, by cost center | Always |
| Individual user-level budget | A specific user's total consumption (overrides universal and cost center user-level budgets) | All usage, including any included credits | Per user | Always |
| Cost center budget | A team's metered charges | From first metered use | Per cost center | Only if "Stop usage when budget limit is reached" is enabled |
| Organization budget | An organization's metered charges | From first metered use | Per organization | Only if "Stop usage when budget limit is reached" is enabled |
| Enterprise budget | Total enterprise metered charges | From first metered use | Enterprise-wide | Only if "Stop usage when budget limit is reached" is enabled |

Set budgets before first use. Enable **Stop usage when budget limit is reached** on spending limits to enforce them. See [AUTOTITLE](/billing/how-tos/set-up-budgets).

## How billing flows through budgets

When someone in your enterprise uses {% data variables.product.prodname_copilot_short %}, the system checks budget controls in a specific order to decide whether the request is served, metered, or blocked.

Each request for an {% data variables.product.prodname_ai_credit_singular %}-consuming feature goes through these checks:

1. **User-level budget check.** The system first checks whether the user has exceeded their user-level budget. When a user has more than one type of user-level budget, the most specific one applies: an individual budget if set, otherwise the budget for the user's cost center, otherwise the universal budget. If the applicable budget is exceeded, the request is blocked immediately. ULBs are always a hard stop, and no other budget can override or supplement them. If no user-level budget is set, the request continues.
1. **Included allowance and paid usage check.** On {% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %}, the system checks whether the shared pool has credits remaining. If yes, the request is served from the pool at no extra cost. Once the pool is empty, usage is metered if the **{% data variables.product.prodname_ai_credits_short %} paid usage** policy is enabled. Otherwise, it is blocked. With {% data variables.product.prodname_copilot_short %} access, there is no pool, so this policy must be enabled from the first use of a feature that consumes credits.
1. **Cost center, organization, or enterprise check.** For metered usage, the system checks budgets in the following order:

   * **If the user is in a cost center:** The cost center's budget is checked. If budget remains, the cost center pays. If the budget is exhausted, the system checks whether "Stop usage when budget limit is reached" is enabled.
   * **If the user is not in a cost center but their license is billed to an organization with a budget:** The organization's budget is checked. If budget remains, the organization pays. If the budget is exhausted, the system checks whether "Stop usage when budget limit is reached" is enabled.
   * **If no cost center or organization budget applies:** The enterprise spending limit is checked. If the limit has not been reached, the enterprise pays. If the limit has been reached, the system checks whether "Stop usage when budget limit is reached" is enabled.

   In all cases, if "Stop usage when budget limit is reached" is on, the user is blocked. If it is off, charges continue to accrue without a cap.

> [!IMPORTANT]
> "Stop usage when budget limit is reached" applies to enterprise spending limits, cost center budgets, and organization budgets only, and is off by default. Without it, charges continue to accrue past the limit. Always enable it when creating a budget. User-level budgets always enforce a hard stop and do not have this setting.

## How user-level budgets and spending limits interact

User-level budgets and spending limits are independent controls that serve different purposes. ULBs control how much each person can consume. Spending limits control how much metered usage your organization will pay for.

If these are not aligned, users can get blocked unexpectedly. The system applies a "lowest remaining headroom wins" rule: whichever budget has the least capacity remaining blocks the user first, regardless of what other budgets still have available. For example, if a user has $5 USD remaining on their individual ULB but the enterprise budget only has $1 USD remaining, the enterprise budget blocks them, even though their personal budget isn't exhausted.

With an included allowance, if your ULBs collectively allow more consumption than the shared pool provides, the difference spills over into metered charges. Without an included allowance, all credit consumption generates metered charges. If your spending limits are too low to cover that consumption, users get blocked before they reach their individual limits.

When you raise ULBs, check that your spending limits can still cover the resulting gap.

The reverse is also true: raising a cost center or enterprise budget does not unblock a user who has hit their ULB. For example, a user who exhausts their $5 USD ULB cannot consume from a cost center budget with $10 USD remaining. The ULB caps that user's total consumption, including any included credits. To unblock them, increase the applicable user-level budget.

## Cost center exclusion

By default, cost center usage counts against the enterprise budget. Cost center exclusion is useful when a specific team needs independent spending authority that isn't constrained by the enterprise-wide cap, for example, a research team with its own budget approval. When exclusion is enabled for a cost center, that team's metered charges are not counted against the enterprise budget and will not be blocked when the enterprise budget is reached. Their spending is capped only by their own cost center budget.

## What happens when a user is blocked

When a user reaches an enforced budget limit, their access to {% data variables.product.prodname_copilot_short %} features that consume {% data variables.product.prodname_ai_credits_short %} is blocked. Unlimited inline code completions and {% data variables.copilot.next_edit_suggestions %} continue to work because they do not consume credits.

Budget restrictions do not remove a user's seat. To remove a seat provided through {% data variables.product.prodname_copilot_short %} access, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-access/grant-access#removing-member-seats).

A blocked user remains blocked until one of the following happens:

* The next billing cycle begins and monthly consumption resets.
* An administrator increases the relevant budget.
* The user requests additional budget and an administrator approves the request.

## Next steps

* To set up budget controls for your enterprise, see [AUTOTITLE](/copilot/tutorials/budgets/getting-started-with-budget-controls).
* To choose the right configuration for your organization's structure, including common scenarios and sizing advice, see [AUTOTITLE](/copilot/tutorials/budgets/optimizing-your-budget-configuration).
