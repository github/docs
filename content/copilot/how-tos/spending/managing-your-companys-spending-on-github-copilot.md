---
title: Managing your company's spending on GitHub Copilot
shortTitle: Manage company spending
intro: 'Learn how to track spending, view usage, and optimize license distribution.'
versions:
  feature: copilot
topics:
  - Copilot
permissions: Enterprise owners and billing managers
product: '{% data variables.copilot.copilot_for_business %} or {% data variables.copilot.copilot_enterprise %}'
redirect_from:
  - /copilot/rolling-out-github-copilot-at-scale/managing-your-companys-spending-on-github-copilot
  - /copilot/rolling-out-github-copilot-at-scale/assigning-licenses/managing-your-companys-spending-on-github-copilot
  - /copilot/tutorials/rolling-out-github-copilot-at-scale/assigning-licenses/managing-your-companys-spending-on-github-copilot
---

When you're adopting {% data variables.product.prodname_copilot %} in an enterprise, you will want to set budgets and track spending to ensure your rollout is sustainable. {% data variables.product.github %} offers billing tools to help you visualize your spending patterns, receive alerts when you reach budget thresholds, and optimize your license usage.

## Understanding who can grant licenses

To control spending, it's important to understand who can affect your bill by granting licenses to users. These are people with the **organization owner** role in organizations where you enable {% data variables.product.prodname_copilot %}. Organization owners can receive requests for access from members through the {% data variables.product.github %} UI.

We recommend that you identify the people with this role and communicate with them about your company's strategy for distributing licenses. For example, you may have a budget or limited pilot program, or you may distribute licenses through an internal website.

For more information, see [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#viewing-members).

## Managing premium requests

Each {% data variables.product.prodname_copilot_short %} plan includes a per-user allowance for premium requests. To learn more about premium requests, see [AUTOTITLE](/copilot/concepts/copilot-billing/requests-in-github-copilot). For allowances per plan, see [AUTOTITLE](/copilot/get-started/plans-for-github-copilot#comparing-copilot-plans).

### Tracking premium request usage

To track premium request usage, download the premium request usage report for your organization or enterprise. See [AUTOTITLE](/copilot/how-tos/premium-requests/monitoring-your-copilot-usage-and-entitlements#downloading-a-monthly-usage-report).

This report includes all premium request usage by user, both within and beyond the allowance, so you can use the report to understand general patterns and identify users who would benefit from more premium requests.

By contrast, other metered billing usage reports only reflect costs for premium requests beyond the allowance.

### Granting more premium requests to members

By default, enterprises have a $0 budget for the Premium Request SKU. This means that when users exhaust their allowance, they cannot make any more premium requests for the rest of the month. Deleting this budget allows for **unlimited spending**.

To change the default budget or increase members' base allowance, see [AUTOTITLE](/copilot/how-tos/premium-requests/manage-for-enterprise).

## Mapping spending to groups of users

You can create cost centers to map spending to individual business units or groups of users. Cost centers allow you to track costs tied to different initiatives and charge the costs to specific areas of your business.

For example, if you were running a pilot program for {% data variables.copilot.copilot_enterprise %} for a group of employees, you might want to create a cost center to track their spending and set a budget independently of the rest of the company.

### Create a cost center

1. Go to your enterprise or organization account settings and click **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing & Licensing**.
1. In the left sidebar, click **Cost centers**, then click **New cost center**.
1. Create the cost center. You don't need to add any repositories or organizations, because you will add users to the cost center directly in the next step.

   >[!NOTE] As a priority, a cost center is charged for a {% data variables.product.prodname_copilot_short %} license if the assigned **user** has been added to the cost center directly. As a fallback, a cost center is charged for the license if the **organization where the user receives access** has been added to the cost center.

1. After creating the cost center, use the REST API to add the users whose usage you want to track. See [AUTOTITLE](/enterprise-cloud@latest/rest/enterprise-admin/billing#add-users-to-a-cost-center).

## Preventing overspending

You can set a monthly budget on {% data variables.product.prodname_copilot %} spending.

* For {% data variables.product.prodname_copilot_short %} **licenses**, a budget is for monitoring purposes only and will not prevent usage beyond the budgeted amount. However, you will receive notifications by email when spending exceeds certain percentages of the budget you've set.
* For {% data variables.product.prodname_copilot_short %} **premium requests**, you can choose to stop usage once the budget amount is reached. The default $0 budget for enterprises already does this.

To create a budget, see [AUTOTITLE](/billing/managing-your-billing/using-budgets-control-spending#editing-or-deleting-a-budget).

## Visualizing spending trends

You can understand your spending trends by viewing a graph for {% data variables.product.prodname_copilot_short %} usage over a certain timeframe. Usage includes costs for {% data variables.product.prodname_copilot_short %} licenses and additional premium requests beyond the allowance.

For more detailed insights, you can filter the results by cost center and group usage by the type of {% data variables.product.prodname_copilot_short %} plan.

1. Go to your enterprise or organization account settings and click **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing & Licensing**.
1. In the left sidebar, click **Usage**.
1. In the "Metered usage" section, in the search field, enter `product:copilot`. To filter by cost center, add a query like `cost_center:ce-pilot-group`.
1. To understand spending differences between {% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %} plans, select the **Group: None** dropdown menu and click **Group: SKU**.

![Screenshot of the "Usage" page. A line chart tracks Copilot spending over the current month, grouped by SKU.](/assets/images/help/copilot/track-spending.png)

## Next steps

As well as managing spending on licenses, it is important to ensure licenses are being used effectively. When you begin rolling out {% data variables.product.prodname_copilot_short %} in a company, you may see low rates of adoption at first. An effective enablement process is essential to drive adoption of {% data variables.product.prodname_copilot_short %} in your company. Tailor this process to your company's needs and goals, and design it to help your teams understand how to use {% data variables.product.prodname_copilot_short %} effectively.

To ensure your licenses are being used effectively, you can use the API to identify inactive users. We recommend sending these users a message with advice and resources for getting started. If a user remains inactive, you can revoke their license and assign it to another user.

If you're not sure how best to distribute licenses, {% data variables.product.company_short %} has found that many successful rollouts offer a fully self-service model where developers can claim a license without approval. This allows people to get started quickly and ensures you're giving licenses to people who plan to use them.

For detailed guidance, see:

* [AUTOTITLE](/copilot/rolling-out-github-copilot-at-scale/driving-copilot-adoption-in-your-company)
* [AUTOTITLE](/copilot/rolling-out-github-copilot-at-scale/setting-up-a-self-serve-process-for-github-copilot-licenses)
* [AUTOTITLE](/copilot/rolling-out-github-copilot-at-scale/reminding-inactive-users)
