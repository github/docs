---
title: Usage-based billing for organizations and enterprises
shortTitle: Billing
intro: 'Under usage-based billing, {% data variables.product.prodname_copilot_short %} usage in organizations and enterprises is measured in {% data variables.product.prodname_ai_credits_short %}.'
permissions: Enterprise and organization owners and billing managers
versions:
  feature: copilot
product: '{% data reusables.copilot.enterprise-billing-availability %}'
redirect_from:
  - /copilot/how-tos/manage-and-track-spending/prepare-for-usage-based-billing
  - /copilot/concepts/billing/usage-based-billing-for-organizations-and-enterprises
  - /copilot/concepts/billing/organizations-and-enterprises/usage-based-billing
contentType: concepts
category:
  - Manage Copilot for a team
---

## What are {% data variables.product.prodname_ai_credits %}?

{% data variables.product.prodname_ai_credits %} are the billing unit for metered {% data variables.product.prodname_copilot_short %} usage in organizations and enterprises.

When someone in your organization uses {% data variables.product.prodname_copilot_short %}, the interaction consumes tokens: input tokens (what's sent to the model), output tokens (what the model generates), and cached tokens (context the model reuses or stores). Each token is priced based on the model used, and the total is converted into {% data variables.product.prodname_ai_credits_short %}, where 1 {% data variables.product.prodname_ai_credit_singular %} = {% data variables.product.prodname_ai_credits_value %}.

The cost of an interaction depends on two things: the model and the number of tokens consumed. A quick chat question using a lightweight model might cost a fraction of a credit. A long coding agent session using a frontier model across multiple files will cost more, because it's doing more work.

## What is billed in {% data variables.product.prodname_ai_credits_short %}?

The following features consume {% data variables.product.prodname_ai_credits_short %}:

* {% data variables.copilot.copilot_chat_short %}
* {% data variables.copilot.copilot_cli_short %}
* {% data variables.copilot.copilot_cloud_agent %}
* {% data variables.copilot.copilot_spaces %}
* {% data variables.product.prodname_spark_short %}
* Third-party coding agents

Inline code completions and {% data variables.copilot.next_edit_suggestions %} are **not** billed in {% data variables.product.prodname_ai_credits_short %} and remain unlimited. They remain available when a user has a $0 USD budget or reaches an enforced spending limit.

## How is {% data variables.product.prodname_github_app %} usage billed?

A {% data variables.product.prodname_github_app %} installed on an organization can use an installation access token to make {% data variables.product.prodname_copilot_short %} requests without a user signing in. The organization that owns the installation pays for the usage, and the organization’s model policies and spending controls apply.

You cannot create a budget for an individual app or installation. This authentication method does not require the **Allow use of Copilot CLI billed to the organization** policy, which applies to a different authentication path.

For information about approving access, identifying app usage, and blocking an app, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-organization/manage-app-copilot-access).

## How do {% data variables.product.prodname_ai_credits_short %} work?

Some plans include a monthly allowance of {% data variables.product.prodname_ai_credits_short %}, while others do not:

* **{% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %}** include credits that are pooled across the organization or enterprise. Usage draws from this pool first, and is billed separately only after the pool is exhausted.
* **{% data variables.product.prodname_copilot_short %} access**, through {% data variables.product.prodname_ghe_cloud %} or as {% data variables.copilot.copilot_standalone_short %}, has no included allowance. Metered usage is billed from the first use.

The **{% data variables.product.prodname_ai_credits_short %} paid usage** policy is enabled by default for {% data variables.copilot.copilot_business_short %}, {% data variables.copilot.copilot_enterprise_short %}, and {% data variables.product.prodname_copilot_short %} access. With {% data variables.product.prodname_copilot_short %} access, it must remain enabled for users to use features that consume credits. If the policy is disabled, those features are blocked because there is no included allowance.

In both cases, budgets control how much users can consume and how much metered spending is allowed. Configure budgets before users begin consuming {% data variables.product.prodname_ai_credits_short %}.

## Included credits for {% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %}

Each assigned license contributes a monthly allowance to the shared pool.

### Allowances and monthly reset

| Plan | Total {% data variables.product.prodname_ai_credits_short %} per user per month |
| --- | --- |
| {% data variables.copilot.copilot_business_short %} | {% data variables.copilot.ai_credits_per_user_business %} |
| {% data variables.copilot.copilot_enterprise_short %} | {% data variables.copilot.ai_credits_per_user_enterprise %} |

A user's included {% data variables.product.prodname_ai_credits_short %} are pooled at the billing entity level. For example, an enterprise with 100 {% data variables.copilot.copilot_business_short %} users gets a shared pool of 190,000 {% data variables.product.prodname_ai_credits_short %} rather than 100 individual buckets. This means power users can draw more when they need it, while lighter users offset that consumption.

Adding licenses mid-cycle increases the pool immediately. Removing licenses mid-cycle doesn't shrink the pool: the decrease is reflected at the start of the next billing cycle.

Included {% data variables.product.prodname_ai_credits_short %} do not carry over between months. Unused credits are forfeited, and the pool resets to the full monthly amount at 00:00:00 UTC on the first day of each calendar month. This reset date is fixed and does not change based on when licenses are added, removed, or billed. See [AUTOTITLE](/billing/concepts/billing-cycles#billing-cycles-for-metered-products).

### What happens if I exceed my included {% data variables.product.prodname_ai_credits_short %}?

When your pooled {% data variables.product.prodname_ai_credits_short %} are exhausted, what happens next depends on how you have configured policies for additional usage.

* **Additional usage allowed**: Usage continues at published per-credit rates. The additional spend is charged to your organization or enterprise. Note that additional usage **may be capped**: if you hit the cap, you'll need to pay off any additional usage you've already consumed in order to continue.
* **Additional usage not allowed**: Usage is blocked until the next billing cycle when monthly amounts are refreshed.

> [!NOTE]
> On {% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %}, additional usage is **enabled by default**. If you want to prevent any spending beyond your included {% data variables.product.prodname_ai_credits_short %}, an administrator must explicitly disable the **{% data variables.product.prodname_ai_credits_short %} paid usage** policy in your enterprise's or organization's AI Controls settings.

## How can I control costs with budgets?

Budgets let you limit individual consumption and metered charges. They are set in US dollars, while usage is shown in {% data variables.product.prodname_ai_credits_short %}. At 1 {% data variables.product.prodname_ai_credit_singular %} = {% data variables.product.prodname_ai_credits_value %}, a $10 USD budget covers 1,000 {% data variables.product.prodname_ai_credits_short %}.

You can set budgets at multiple levels:

* **User-level budgets** cap an individual's total consumption per billing cycle, including any usage drawn from an included pool. They always enforce a hard stop. A $0 USD user-level budget immediately blocks features that consume {% data variables.product.prodname_ai_credits_short %}.
* **Cost-center budgets** limit metered charges for a defined group of users.
* **Enterprise spending limits** limit total metered charges across your enterprise.
* **Organization-level budgets** limit metered charges for users whose {% data variables.product.prodname_copilot_short %} seats are billed to the organization.

With {% data variables.product.prodname_copilot_short %} access, spending limits apply from the first metered use. With {% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %}, they apply after the included pool is exhausted. Enable **Stop usage when budget limit is reached** on spending limits to enforce them.

An enforced spending limit can block a user before they reach their user-level budget. Budget restrictions do not remove assigned seats.

For a full explanation of how these controls work together and when usage gets blocked, see [AUTOTITLE](/copilot/concepts/billing-and-usage/organizations-and-enterprises/budgets).

## Update your IDE, client, and extension

For the best experience with usage-based billing, update your IDE, client, and {% data variables.product.prodname_copilot_short %} extension to at least the versions listed below.

> [!NOTE]
> Older versions will continue to work, but may display incorrect model pricing, inaccurate usage information, or outdated billing terminology. Usage alert notifications may also not appear as expected.

| IDE, client, or extension | Minimum version |
| --- | --- |
| {% data variables.product.prodname_vscode_shortname %} | 1.120 |
| {% data variables.product.prodname_vs %} 2022 (17.x) | 17.14.33 |
| {% data variables.product.prodname_vs %} 2026 (18.x) | 18.6.0 |
| SQL Server Management Studio | 22.6 |
| JetBrains IDEs (plugin) | 1.9.1 |
| Eclipse (plugin) | 0.18.0 |
| Xcode (extension) | 0.50.0 |
| {% data variables.copilot.copilot_cli_short %} | 1.0.48 |

We recommend keeping your IDE, client, and {% data variables.product.prodname_copilot_short %} extensions on the latest available stable version. For information on configuring automatic updates, see [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/set-up-copilot/configure-in-ide). To update {% data variables.copilot.copilot_cli_short %}, see [AUTOTITLE](/copilot/how-tos/copilot-cli/set-up-copilot-cli/install-copilot-cli).

## Next steps

* To set up budget controls for your enterprise, see [AUTOTITLE](/copilot/tutorials/budgets/getting-started-with-budget-controls).
* To compare per-token costs across models and estimate your spend, see [AUTOTITLE](/copilot/reference/copilot-billing/models-and-pricing).
