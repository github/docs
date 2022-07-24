---
title: Requesting Server Statistics using the REST API
shortTitle: Server Statistics and REST API
intro: 'You can use your own tools to analyze your {% data variables.product.prodname_ghe_server %} usage over time by requesting the {% data variables.product.prodname_server_statistics %} metrics collected using the REST API.'
versions:
  feature: server-statistics
redirect_from:
  - /early-access/github/analyze-how-your-team-works-with-server-statistics/requesting-server-statistics-using-the-rest-api
---

{% data reusables.server-statistics.release-phase %}

You can request up to 365 days of metrics in a single {% data variables.product.prodname_server_statistics %} REST API request. Estos datos, los cuales incluyen métricas agregadas en los repositorios, propuestas y solicitudes de cambio pueden ayudarte a anticipar las necesidades de tu organización, entender cómo funciona tu equipo y mostrarte el valor que obtienes de {% data variables.product.prodname_ghe_server %}. For a list of the metrics collected, see "[{% data variables.product.prodname_server_statistics %} data collected](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/about-server-statistics#server-statistics-data-collected)."

Before you can use the {% data variables.product.prodname_server_statistics %} REST API, you must enable {% data variables.product.prodname_server_statistics %}. Para obtener más información, consulta la sección "[Habilitar la {% data variables.product.prodname_server_statistics %} en tu empresa](/admin/configuration/configuring-github-connect/enabling-server-statistics-for-your-enterprise)".

For more information about using the REST API to request server statistics, see "[Get {% data variables.product.prodname_ghe_server %} statistics](/enterprise-cloud@latest/rest/enterprise-admin/admin-stats#get-github-enterprise-server-statistics)" in the {% data variables.product.prodname_ghe_cloud %} REST API documentation.
