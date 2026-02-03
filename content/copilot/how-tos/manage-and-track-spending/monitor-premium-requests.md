---
title: Monitoring your GitHub Copilot usage and entitlements
shortTitle: Monitor premium requests
intro: 'Learn how you can monitor your monthly usage of {% data variables.product.prodname_copilot_short %} and get the most value out of your {% data variables.product.prodname_copilot_short %} plan.'
permissions: 'Individual users on a paid {% data variables.product.prodname_copilot_short %} plan can view their own usage and entitlements. For {% data variables.copilot.copilot_business_short %} or {% data variables.copilot.copilot_enterprise_short %} plans, organization admins and billing managers can view usage reports for members.'
versions:
  feature: copilot
topics:
  - Copilot
redirect_from:
  - /copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/monitoring-usage-and-entitlements/monitoring-your-copilot-usage-and-entitlements
  - /copilot/managing-copilot/monitoring-usage-and-entitlements/monitoring-your-copilot-usage-and-entitlements
  - /copilot/managing-copilot/understanding-and-managing-copilot-usage/monitoring-your-copilot-usage-and-entitlements
  - /copilot/how-tos/monitoring-your-copilot-usage-and-entitlements
  - /copilot/how-tos/premium-requests/monitoring-your-copilot-usage-and-entitlements
  - /copilot/how-tos/spending/monitoring-your-copilot-usage-and-entitlements
  - /copilot/how-tos/spending/monitor-premium-requests
contentType: how-tos
category: 
  - Configure Copilot
---

You can track your monthly usage of premium requests to help you get the most value from your {% data variables.product.prodname_copilot_short %} plan.

> [!NOTE]
> Premium request counters reset on the 1st of each month at 00:00:00 UTC.

## Viewing premium request usage

There are multiple ways to view your premium request usage:

* [View current usage directly within your IDE](#viewing-usage-in-your-ide)
* [Viewing an overview in your Billing and licensing settings](#viewing-an-overview-in-your-billing-and-licensing-settings)
* [View detailed analytics of your usage](#viewing-detailed-analytics-of-your-usage)

If you reach your limit for premium requests, you will be notified with a message in each of the {% data variables.product.prodname_copilot_short %} interfaces you use. To download a usage report, see [Downloading usage reports](/billing/how-tos/products/view-productlicense-use#downloading-usage-reports).

For information about viewing premium request usage for an organization or enterprise, see [AUTOTITLE](/billing/how-tos/products/view-productlicense-use).

### Viewing usage in your IDE

If you're using {% data variables.product.prodname_copilot_short %} in an editor, you can view your usage directly in the editor. For example, in {% data variables.product.prodname_vscode %}, you can view information about features included in your plan, your progress towards any limits on your plan, and the date your allowance resets.

You can access usage information in the following IDEs.

* **In {% data variables.product.prodname_vscode %}**, click the {% data variables.product.prodname_copilot_short %} icon ({% octicon "copilot" aria-hidden="true" aria-label="copilot" %}) in the status bar.
* **In {% data variables.product.prodname_vs %}**, click the {% data variables.product.prodname_copilot_short %} icon ({% octicon "copilot" aria-hidden="true" aria-label="copilot" %}) in the top right corner, then click **{% data variables.product.prodname_copilot_short %} Consumptions**.
* **In JetBrains IDEs**, click the {% data variables.product.prodname_copilot_short %} icon ({% octicon "copilot" aria-hidden="true" aria-label="copilot" %}) in the status bar, then select **View quota usage**.
* **In Xcode**, click the {% data variables.product.prodname_copilot_short %} icon ({% octicon "copilot" aria-hidden="true" aria-label="copilot" %}) in the menu bar.
* **In Eclipse**, click the {% data variables.product.prodname_copilot_short %} icon ({% octicon "copilot" aria-hidden="true" aria-label="copilot" %}) in the status bar at the bottom of Eclipse.

### Viewing an overview in your Billing and licensing settings

You can view an overview of your premium request usage at any time in your "Billing and licensing" settings on {% data variables.product.prodname_dotcom_the_website %}.

{% data reusables.user-settings.access_billing_settings_url %} The "Overview" page shows a summary of your current {% data variables.product.github %} usage.
1. Scroll down to the "Metered usage" area and click {% octicon "copilot" aria-hidden="true" aria-label="copilot" %} **{% data variables.product.prodname_copilot_short %}** to show only your {% data variables.product.prodname_copilot_short %} use.

### Viewing detailed analytics of your usage

{% data reusables.billing.premium-request-analytics-start %}

{% data reusables.user-settings.access_billing_settings_url %}
1. In the side bar, click **Premium request analytics** to show detailed analytics.
1. Use the filter, "Group by", and "Timeframe" options to change the data displayed in the chart and table.
1. Optionally, to download the data shown in the chart, click the {% octicon "kebab-horizontal" aria-label="Chart options" aria-hidden="true" %} button and select your preferred format.

   ![Screenshot of the usage chart on the "Premium request analytics" page with "Chart options" open and outlined in dark orange.](/assets/images/help/billing/premium-request-analytics-chart-download.png)

### Downloading a usage report

For details on how to request a usage report, see [AUTOTITLE](/billing/how-tos/products/view-productlicense-use#downloading-usage-reports).

## Optimizing usage of premium requests

You can use the following strategies to maximize the value of your premium requests:

* **Choose the right model for the task**. Some models are better suited to different tasks. If you're using a premium request, you can strategically choose which model you use to get the best result from {% data variables.product.prodname_copilot_short %}. See [AUTOTITLE](/copilot/reference/ai-models/model-comparison).

* **Setting a budget**. Set a budget to track your overages and receive alerts when you reach 75%, 90%, or 100% of your budget. See [AUTOTITLE](/billing/managing-your-billing/preventing-overspending#managing-budgets-for-your-personal-account).

* **Monitor your usage regularly**. Check your usage in your {% data variables.product.github %} account settings to see how many premium requests you’ve used. This helps you plan how much you can use for the rest of the month.

* **Upgrade if needed**. If you find yourself consistently hitting your monthly allowance, consider upgrading to a plan with more premium requests included.

* **Avoid retrying large prompts unnecessarily**. Submitting the same long or complex prompt multiple times may use more premium requests. Try rephrasing or simplifying your request when needed.

* **Define whether users can use premium requests over their included allowance** (enterprises and organizations only). Set a policy to control whether users can incur extra costs for premium requests when they use up their included allowance. See [AUTOTITLE](/copilot/how-tos/manage-and-track-spending/manage-request-allowances).

{% data reusables.copilot.zero-budget-changes-link %}

## Managing premium request billing with multiple {% data variables.product.prodname_copilot_short %} licenses

If you have {% data variables.product.prodname_copilot_short %} licenses from multiple standalone organizations or enterprises, you must define which entity is charged for your use of premium requests. Until you define a billing entity, all premium requests you make will be rejected.

In the {% data variables.product.prodname_copilot_short %} feature settings for your personal account, a **Usage billed to** dropdown is displayed in the "Billing" section if you are assigned {% data variables.product.prodname_copilot_short %} licenses by two or more enterprises or standalone organizations.

![Screenshot of the {% data variables.product.prodname_copilot_short %} feature settings. The "Usage billed to" dropdown is open.](/assets/images/help/billing/copilot-billing-entity-dropdown.png)

You can change your billing entity selection at any time. All subsequent premium requests are billed to the newly selected entity.
