---
title: Viewing metrics for your listing
intro: 'The {% data variables.product.prodname_marketplace %} Insights page displays metrics for your {% data variables.product.prodname_github_app %}. You can use the metrics to track your {% data variables.product.prodname_github_app %}''s performance and make more informed decisions about pricing, plans, free trials, and how to visualize the effects of marketing campaigns.'
redirect_from:
  - /apps/marketplace/managing-github-marketplace-listings/viewing-performance-metrics-for-a-github-marketplace-listing/
  - /apps/marketplace/viewing-performance-metrics-for-a-github-marketplace-listing/
  - /apps/marketplace/github-marketplace-insights/
  - /marketplace/github-marketplace-insights
versions:
  free-pro-team: '*'
topics:
  - рынок
---



You can view metrics for the past day (24 hours), week, month, or for the entire duration of time that your {% data variables.product.prodname_github_app %} has been listed.

{% note %}

**Note:** Because it takes time to aggregate data, you'll notice a slight delay in the dates shown. When you select a time period, you can see exact dates for the metrics at the top of the page.

{% endnote %}

### Performance metrics

The Insights page displays these performance metrics, for the selected time period:

* **Subscription value:** Total possible revenue (in US dollars) for subscriptions. This value represents the possible revenue if no plans or free trials are cancelled and all credit transactions are successful. The subscription value includes the full value for plans that begin with a free trial in the selected time period, even when there are no financial transactions in that time period. The subscription value also includes the full value of upgraded plans in the selected time period but does not include the prorated amount. To see and download individual transactions, see "[GitHub Marketplace transactions](/marketplace/github-marketplace-transactions/)."
* **Visitors:** Number of people that have viewed a page in your GitHub Apps listing. This number includes both logged in and logged out visitors.
* **Pageviews:** Number of views the pages in your GitHub App's listing received. A single visitor can generate more than one pageview.

{% note %}

**Note:**  Your estimated subscription value could be much higher than the transactions processed for this period.

{% endnote %}

#### Conversion performance

* **Unique visitors to landing page:** Number of people who viewed your GitHub App's landing page.
* **Unique visitors to checkout page:** Number of people who viewed one of your GitHub App's checkout pages.
* **Checkout page to new subscriptions:** Total number of paid subscriptions, free trials, and free subscriptions. See the "Breakdown of total subscriptions" for the specific number of each type of subscription.

![Marketplace insights](/assets/images/marketplace/marketplace_insights.png)

To access {% data variables.product.prodname_marketplace %} Insights:

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.marketplace_apps %}
4. Select the
{% data variables.product.prodname_github_app %} that you'd like to view Insights for.
{% data reusables.user-settings.edit_marketplace_listing %}
6. Click the **Insights** tab.
7. Optionally, select a different time period by clicking the Period dropdown in the upper-right corner of the Insights page. ![Marketplace time period](/assets/images/marketplace/marketplace_insights_time_period.png)
