---
title: Managing your company's spending on GitHub Copilot
shortTitle: Manage spending
intro: 'Learn how to track spending, view usage, and optimize license distribution.'
versions:
  feature: copilot
topics:
  - Copilot
permissions: Enterprise owners and billing managers
product: '{% data variables.copilot.copilot_for_business %} or {% data variables.copilot.copilot_enterprise %}'
redirect_from:
  - /copilot/rolling-out-github-copilot-at-scale/managing-your-companys-spending-on-github-copilot
---

When you're adopting {% data variables.product.prodname_copilot %} in an enterprise, you will want to set budgets and track spending to ensure your rollout is sustainable. {% data variables.product.github %} offers billing tools to help you visualize your spending patterns, receive alerts when you reach budget thresholds, and optimize your license usage.

>[!NOTE] Some of the tools recommended in this article are part of {% data variables.product.github %}'s new billing platform, which isn't available to all customers. If your enterprise has access, you will see a **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing & Licensing** option in your enterprise account's settings.

## Understand who can grant licenses

To control spending, it's important to understand who can affect your bill by granting licenses to users. These are people with the **organization owner** role in organizations where you enable {% data variables.product.prodname_copilot %}. Organization owners can receive requests for access from members through the {% data variables.product.github %} UI.

We recommend that you identify the people with this role and communicate with them about your company's strategy for distributing licenses. For example, you may have a budget or limited pilot program, or you may distribute licenses through an internal website.

## Managing charges for premium requests

{% data reusables.copilot.premium-requests-for-enterprises %}

Premium requests over the allowance are rejected unless you have set a budget. Depending on the type of development tasks your developers use {% data variables.product.prodname_copilot_short %} for, you may find developers need to make more premium requests than the allowance included in your plan.

Premium requests over the allowance are charged at a rate of {% data variables.copilot.additional_premium_requests %} per request, with an additional multiplier applied to certain models. You can also increase your monthly allowance by upgrading to {% data variables.copilot.copilot_enterprise_short %}.

For pricing details and a list of available models, see [AUTOTITLE](/copilot/about-github-copilot/subscription-plans-for-github-copilot#comparing-copilot-plans).

### Managing budgets

By default, a $0 budget for the {% data variables.product.prodname_copilot %} Premium Request SKU is created for your enterprise. You can edit this budget from the "Budgets and alerts" page. See [AUTOTITLE](/billing/managing-your-billing/using-budgets-control-spending).

> [!WARNING] Deleting this budget without setting a new one will enable **unlimited {% data variables.product.prodname_copilot %} usage**.

The default budget that is created applies to your whole enterprise. To set a new budget for a specific part of your enterprise, such as a cost center, you can create a new budget:

{% ifversion fpt %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.billing.org-billing-menu %}

{% elsif ghec %}

1. Go to your enterprise or organization account settings and click **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing & Licensing**.

{% endif %}
1. Click **Budgets and alerts**.
1. Click **New budget**.
1. Under "Budget Type" select **SKU-level budget**.
1. Select the "Product" dropdown and click **Copilot**.
1. Select the "SKU" dropdown and click **Copilot Premium Request**
1. Under "Budget scope", set the scope of spending for this budget.
1. Under "Budget", set a budget amount. Optionally, choose to stop usage when the budget limit is reached.
1. Click **Create budget**.

### Tracking premium requests

You can view a CSV report that shows the cumulative number of premium requests per user over a time period. You can use this report to:

* Understand if developers are frequently hitting the limit and would benefit from you enabling additional premium requests or upgrading your plan.
* Identify users who are making a large number of premium requests over the limit, and follow up to the users to understand their use cases and requirements.
* After enabling additional premium requests, track usage to determine if it would be more cost effective to upgrade to {% data variables.copilot.copilot_enterprise_short %}.

You can download the report for an enterprise account, or for an organization that is not part of an enterprise.

1. Go to your enterprise or organization account settings and click **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing & Licensing**.
1. In the left sidebar, click **Usage**.
1. To download the usage report, select **Get usage report** in the upper-right corner of the page, and click **{% data variables.product.prodname_copilot_short %} premium requests usage report**.

## Map spending to groups of users

With {% data variables.product.github %}'s new billing platform, you can create cost centers to map spending to individual business units or groups of users. Cost centers allow you to track costs tied to different initiatives and charge the costs to specific areas of your business.

For example, if you were running a pilot program for {% data variables.copilot.copilot_enterprise %} for a group of employees, you might want to create a cost center to track their spending and set a budget independently of the rest of the company.

### Create a cost center

1. Go to your enterprise or organization account settings and click **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing & Licensing**.
1. In the left sidebar, click **Cost centers**, then click **New cost center**.
1. Create the cost center. You don't need to add any repositories or organizations, because you will add users to the cost center directly in the next step.

   >[!NOTE] As a priority, a cost center is charged for a {% data variables.product.prodname_copilot_short %} license if the assigned **user** has been added to the cost center directly. As a fallback, a cost center is charged for the license if the **organization where the user receives access** has been added to the cost center.

1. After creating the cost center, use the REST API to add the users whose usage you want to track. See [AUTOTITLE](/enterprise-cloud@latest/rest/enterprise-admin/billing#add-users-to-a-cost-center).

## Receive alerts for overspending

With {% data variables.product.github %}'s new billing platform, you can set a monthly budget on {% data variables.product.prodname_copilot %} spending. Setting a budget for license-based products, such as {% data variables.product.prodname_copilot_short %}, is for monitoring purposes only and will not prevent usage beyond the budgeted amount. However, you will receive notifications by email when spending exceeds certain percentages of the budget you've set. To prevent usage over the limit for the Copilot Premium Request SKU, update the default $0 SKU-level budget and select "Stop usage when budget limit is reached".

{% ifversion ghec %}You can create the budget for the whole enterprise or for a cost center.{% endif %}

1. Go to your enterprise or organization account settings and click **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing & Licensing**.
1. In the left sidebar, click **Budgets and alerts**.
1. Click **New budget**.
1. Select **{% data variables.product.prodname_copilot_short %}** for the product, or **{% data variables.product.prodname_copilot_short %} Premium Request** for the SKU, then configure the settings as required. You can choose who receives alerts when budget thresholds are reached.
1. Click **Create budget**.

## Visualize spending trends

With {% data variables.product.github %}'s new billing platform, you can understand your spending trends by viewing a graph for {% data variables.product.prodname_copilot_short %} usage over a certain timeframe. For more detailed insights, you can filter the results by cost center and group usage by the type of {% data variables.product.prodname_copilot_short %} plan.

1. Go to your enterprise or organization account settings and click **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing & Licensing**.
1. In the left sidebar, click **Usage**.
1. In the "Metered usage" section, in the search field, enter `product:copilot`. To filter by cost center, add a query like `cost_center:ce-pilot-group`.
1. To understand spending differences between {% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %} plans, select the **Group: None** dropdown menu and click **Group: SKU**.

![Screenshot of the "Usage" page. A line chart tracks Copilot spending over the current month, grouped by SKU.](/assets/images/help/copilot/track-spending.png)

## Optimize license usage

When you begin rolling out {% data variables.product.prodname_copilot_short %} in a company, you may see low rates of adoption at first. An effective enablement process is essential to drive adoption of {% data variables.product.prodname_copilot_short %} in your company. Tailor this process to your company's needs and goals, and design it to help your teams understand how to use {% data variables.product.prodname_copilot_short %} effectively.

To ensure your licenses are being used effectively, you can use the API to identify inactive users. We recommend sending these users a message with advice and resources for getting started. If a user remains inactive, you can revoke their license and assign it to another user.

If you're not sure how best to distribute licenses, {% data variables.product.company_short %} has found that many successful rollouts offer a fully self-service model where developers can claim a license without approval. This allows people to get started quickly and ensures you're giving licenses to people who plan to use them.

For detailed guidance, see:

* [AUTOTITLE](/copilot/rolling-out-github-copilot-at-scale/driving-copilot-adoption-in-your-company)
* [AUTOTITLE](/copilot/rolling-out-github-copilot-at-scale/setting-up-a-self-serve-process-for-github-copilot-licenses)
* [AUTOTITLE](/copilot/rolling-out-github-copilot-at-scale/reminding-inactive-users)
