---
title: Viewing transactions for your listing
intro: 'The {% data variables.product.prodname_marketplace %} transactions page allows you to download and view all transactions for your {% data variables.product.prodname_marketplace %} listing. You can view transactions for the past day (24 hours), week, month, or for the entire duration of time that your {% data variables.product.prodname_github_app %} has been listed.'
redirect_from:
  - /marketplace/github-marketplace-transactions
versions:
  free-pro-team: '*'
topics:
  - рынок
---



{% note %}

**Note:** Because it takes time to aggregate data, you'll notice a slight delay in the dates shown. When you select a time period, you can see exact dates for the metrics at the top of the page.

{% endnote %}


You can view or download the transaction data to keep track of your subscription activity. Click the **Export CSV** button to download a `.csv` file. You can also select a period of time to view and search within the transaction page.

### Transaction data fields

* **date:** The date of the transaction in `yyyy-mm-dd` format.
* **app_name:** The app name.
* **user_login:** The login of the user with the subscription.
* **user_id:** The id of the user with the subscription.
* **user_type:** The type of GitHub account, either `User` or `Organization`.
* **country:** The three letter country code.
* **amount_in_cents:** The amount of the transaction in cents. When a value is less the plan amount, the user upgraded and the new plan is prorated. A value of zero indicates the user cancelled their plan.
* **renewal_frequency:** The subscription renewal frequency, either `Monthly` or `Yearly`.
* **marketplace_listing_plan_id:** The `id` of the subscription plan.

![Marketplace insights](/assets/images/marketplace/marketplace_transactions.png)

### Accessing {% data variables.product.prodname_marketplace %} transactions

To access {% data variables.product.prodname_marketplace %} transactions:

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.marketplace_apps %}
4. Select the
{% data variables.product.prodname_github_app %} that you'd like to view transactions for.
{% data reusables.user-settings.edit_marketplace_listing %}
6. Click the **Transactions** tab.
7. Optionally, select a different time period by clicking the Period dropdown in the upper-right corner of the Transactions page. ![Marketplace time period](/assets/images/marketplace/marketplace_insights_time_period.png)
