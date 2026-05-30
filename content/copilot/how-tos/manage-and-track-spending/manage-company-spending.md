---
title: Managing your company's spending on GitHub Copilot
shortTitle: Manage company spending
intro: 'Learn how to track spending, view usage, and optimize license distribution.'
versions:
  feature: copilot
permissions: Enterprise owners and billing managers
product: '{% data variables.copilot.copilot_for_business %} or {% data variables.copilot.copilot_enterprise %}'
redirect_from:
  - /copilot/rolling-out-github-copilot-at-scale/managing-your-companys-spending-on-github-copilot
  - /copilot/rolling-out-github-copilot-at-scale/assigning-licenses/managing-your-companys-spending-on-github-copilot
  - /copilot/tutorials/rolling-out-github-copilot-at-scale/assigning-licenses/managing-your-companys-spending-on-github-copilot
  - /copilot/how-tos/spending/managing-your-companys-spending-on-github-copilot
  - /copilot/how-tos/spending/manage-company-spending
contentType: how-tos
category:
  - Manage Copilot for a team
---

When you're adopting {% data variables.product.prodname_copilot %} in an enterprise, you will want to set budgets and track spending to ensure your rollout is sustainable. {% data variables.product.github %} offers billing tools to help you visualize your spending patterns, control {% data variables.product.prodname_ai_credits_short %} consumption with budget controls, receive alerts when you reach budget thresholds, and optimize your license usage.

## Understanding who can grant licenses

To control spending, it's important to understand who can affect your bill by granting licenses to users. These are people with the **organization owner** role in organizations where you enable {% data variables.product.prodname_copilot %}. Organization owners can receive requests for access from members through the {% data variables.product.github %} UI.

We recommend that you identify the people with this role and communicate with them about your company's strategy for distributing licenses. For example, you may have a budget or limited pilot program, or you may distribute licenses through an internal website.

For more information, see [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#viewing-members).

## Managing {% data variables.product.prodname_ai_credits_short %} usage

Each {% data variables.product.prodname_copilot_short %} license includes {% data variables.product.prodname_ai_credits_short %} that are pooled across your enterprise. When the pool is exhausted, additional usage is charged at {% data variables.product.prodname_ai_credits_value %} per {% data variables.product.prodname_ai_credit_singular %}, subject to your budget controls.

### Tracking usage

To track {% data variables.product.prodname_ai_credits_short %} consumption, navigate to **Billing & licensing** > **AI usage** in your enterprise settings. You can filter usage by user, model, organization, or cost center, and export the data for further analysis.

### Controlling usage with budgets

You can set budgets at the user, cost center, and enterprise level to control how {% data variables.product.prodname_ai_credits_short %} are consumed. For an overview of how budget controls work, see [AUTOTITLE](/copilot/concepts/billing/budgets-for-usage-based-billing). For guidance on choosing the right configuration, see [AUTOTITLE](/copilot/tutorials/budgets/optimizing-your-budget-configuration).

## Mapping spending to groups of users

You can create cost centers to map spending to individual business units or groups of users. Cost centers allow you to track costs tied to different initiatives and charge the costs to specific areas of your business.

For example, if you were running a pilot program for {% data variables.copilot.copilot_enterprise %} for a group of employees, you might want to create a cost center to track their spending and set a budget independently of the rest of the company.

For more information, see [AUTOTITLE](/billing/tutorials/control-costs-at-scale).

## Preventing overspending

You can set budgets to control {% data variables.product.prodname_copilot_short %} spending at multiple levels.

* **User-level budgets** cap how many {% data variables.product.prodname_ai_credits_short %} any single user can consume per billing cycle, from both the shared pool and additional usage.
* **Cost center budgets** and **enterprise spending limits** cap metered charges after the shared pool is exhausted.

Enable "Stop usage when budget limit is reached" on every spending limit you create. Without it, reaching a limit sends a notification but does not block usage and charges continue to accrue.

For step-by-step instructions, see [AUTOTITLE](/billing/how-tos/set-up-budgets).

## Visualizing spending trends

You can understand your spending trends by viewing graphs of {% data variables.product.prodname_copilot_short %} usage over a certain timeframe. Usage includes costs for {% data variables.product.prodname_copilot_short %} licenses and any additional {% data variables.product.prodname_ai_credits_short %} beyond the included pool.

For more detailed insights, you can group usage by the type of {% data variables.product.prodname_copilot_short %} plan, and enterprises can filter the results by cost center.

1. Go to your enterprise or organization account settings and click **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing & Licensing**.
{% data reusables.billing.display-usage-view %}
1. In the "Metered usage" section, in the search field, enter `product:copilot`. To filter by cost center, add a query like `cost_center:ce-pilot-group`.
1. To understand spending differences between {% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %} plans, select the **Group: None** dropdown menu and click **Group by: SKU**.

   ![Screenshot of the "Usage" page. A line chart tracks Copilot spending over the current month, grouped by SKU.](/assets/images/help/copilot/track-spending.png)

1. To visualize {% data variables.product.prodname_ai_credits_short %} consumption in detail, in the left sidebar under "Metered usage" click **AI usage**.
1. By default, the chart and table show usage grouped by model. Use the filter, "Group by", and "Timeframe" controls to show the data you want.

   ![Screenshot of the "AI usage" page. A line chart tracks AI usage over the current month, grouped by model.](/assets/images/help/copilot/track-spending-prs.png)

## Next steps

As well as managing spending on licenses, it is important to ensure licenses are being used effectively. When you begin rolling out {% data variables.product.prodname_copilot_short %} in a company, you may see low rates of adoption at first. An effective enablement process is essential to drive adoption of {% data variables.product.prodname_copilot_short %} in your company. Tailor this process to your company's needs and goals, and design it to help your teams understand how to use {% data variables.product.prodname_copilot_short %} effectively.

To ensure your licenses are being used effectively, you can use the API to identify inactive users. We recommend sending these users a message with advice and resources for getting started. If a user remains inactive, you can revoke their license and assign it to another user.

If you're not sure how best to distribute licenses, {% data variables.product.company_short %} has found that many successful rollouts offer a fully self-service model where developers can claim a license without approval. This allows people to get started quickly and ensures you're giving licenses to people who plan to use them.

For detailed guidance, see:

* [AUTOTITLE](/copilot/rolling-out-github-copilot-at-scale/driving-copilot-adoption-in-your-company)
* [AUTOTITLE](/copilot/rolling-out-github-copilot-at-scale/setting-up-a-self-serve-process-for-github-copilot-licenses)
* [AUTOTITLE](/copilot/rolling-out-github-copilot-at-scale/reminding-inactive-users)
