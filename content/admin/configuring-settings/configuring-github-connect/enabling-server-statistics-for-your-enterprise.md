---
title: Enabling Server Statistics for your enterprise
intro: 'You can analyze your own aggregate data from {% data variables.product.prodname_ghe_server %} and help us improve {% data variables.product.company_short %} products by enabling {% data variables.product.prodname_server_statistics %}.'
versions:
  feature: server-statistics
redirect_from:
  - /early-access/github/analyze-how-your-team-works-with-server-statistics/about-server-statistics/enabling-server-statistics
  - /admin/configuration/configuring-github-connect/enabling-server-statistics-for-your-enterprise
topics:
  - Enterprise
shortTitle: Server Statistics
---

## About {% data variables.product.prodname_server_statistics %}

{% data variables.product.prodname_server_statistics %} collects aggregate usage data from {% data variables.location.product_location %}, which you can use to better anticipate the needs of your organization, understand how your team works, and show the value you get from {% data variables.product.prodname_ghe_server %}.

{% data variables.product.prodname_server_statistics %} only collects certain aggregate metrics on repositories, issues, pull requests, and other features. {% data variables.product.prodname_dotcom %} content, such as code, issues, comments, or pull request content, is not collected. For more information, see "[AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/about-server-statistics)."

By enabling {% data variables.product.prodname_server_statistics %}, you are also helping to improve {% data variables.product.company_short %}. The aggregated data you will provide helps us understand how our customers are using {% data variables.product.prodname_dotcom %}, and make better and more informed product decisions, ultimately benefiting you.

## Enabling {% data variables.product.prodname_server_statistics %}

Before you can enable {% data variables.product.prodname_server_statistics %}, you must first connect your {% data variables.product.prodname_ghe_server %} instance to {% data variables.product.prodname_dotcom_the_website %} using {% data variables.product.prodname_github_connect %}. For more information, see "[AUTOTITLE](/admin/configuration/configuring-github-connect/managing-github-connect)."

You can disable {% data variables.product.prodname_server_statistics %} from {% data variables.product.prodname_ghe_server %} at any time.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.github-connect-tab %}
1. Under "Share server statistics with GitHub.com", select the dropdown menu and click **Enabled** or **Disabled**.
