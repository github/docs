---
title: Requesting Server Statistics using the REST API
shortTitle: Server Statistics and REST API
intro: 'You can use your own tools to analyze your {% data variables.product.prodname_ghe_server %} usage over time by requesting the {% data variables.product.prodname_server_statistics %} metrics collected using the REST API.'
versions:
  feature: 'server-statistics'
redirect_from:
  - /early-access/github/analyze-how-your-team-works-with-server-statistics/requesting-server-statistics-using-the-rest-api
---

{% data reusables.server-statistics.release-phase %}

You can request up to 365 days of metrics in a single {% data variables.product.prodname_server_statistics %} REST API request. This data, which includes aggregate metrics on repositories, issues, and pull requests, can help you anticipate the needs of your organization, understand how your team works, and show the value you get from {% data variables.product.prodname_ghe_server %}. For a list of the metrics collected, see "[{% data variables.product.prodname_server_statistics %} data collected](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/about-server-statistics#server-statistics-data-collected)."

Before you can use the {% data variables.product.prodname_server_statistics %} REST API, you must enable {% data variables.product.prodname_server_statistics %}. For more information, see "[Enabling {% data variables.product.prodname_server_statistics %} for your enterprise](/admin/configuration/configuring-github-connect/enabling-server-statistics-for-your-enterprise)." 

For more information about using the REST API to request server statistics, see "[Get {% data variables.product.prodname_ghe_server %} statistics](/enterprise-cloud@latest/rest/enterprise-admin/admin-stats#get-github-enterprise-server-statistics)" in the {% data variables.product.prodname_ghe_cloud %} REST API documentation.
