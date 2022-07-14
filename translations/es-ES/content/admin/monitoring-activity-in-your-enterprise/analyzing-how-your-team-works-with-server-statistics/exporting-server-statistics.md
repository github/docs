---
title: Exporting Server Statistics
shortTitle: Export Server Statistics
intro: 'You can use your own tools to analyze your {% data variables.product.prodname_ghe_server %} usage over time by downloading your {% data variables.product.prodname_server_statistics %} metrics in a CSV or JSON file.'
versions:
  feature: server-statistics
redirect_from:
  - /early-access/github/analyze-how-your-team-works-with-server-statistics/exploring-server-statistics
---

{% data reusables.server-statistics.release-phase %}

You can download up to the last 365 days of {% data variables.product.prodname_server_statistics %} data in a CSV or JSON file. Estos datos, los cuales incluyen métricas agregadas en los repositorios, propuestas y solicitudes de cambio pueden ayudarte a anticipar las necesidades de tu organización, entender cómo funciona tu equipo y mostrarte el valor que obtienes de {% data variables.product.prodname_ghe_server %}.

Before you can download this data, you must enable {% data variables.product.prodname_server_statistics %}. Para obtener más información, consulta la sección "[Habilitar la {% data variables.product.prodname_server_statistics %} en tu empresa](/admin/configuration/configuring-github-connect/enabling-server-statistics-for-your-enterprise)".

To preview the metrics available to download, see "[About {% data variables.product.prodname_server_statistics %}](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/about-server-statistics)."

To download these metrics, you must be an enterprise owner or organization owner on {% data variables.product.prodname_ghe_cloud %}.
  - If {% data variables.product.product_location %} is connected to an enterprise account on {% data variables.product.prodname_ghe_cloud %}, see "[Downloading metrics from your enterprise account](#downloading-metrics-from-your-enterprise-account)."
  - If {% data variables.product.product_location %} is connected to an organization on {% data variables.product.prodname_ghe_cloud %}, see "[Downloading metrics from your organization](#downloading-metrics-from-your-organization)."

Para aprender más sobre el {% data variables.product.prodname_github_connect %}, consulta la sección "[Acerca del {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect)".

## Downloading metrics from your enterprise account

1. En la esquina superior derecha de {% data variables.product.prodname_ghe_cloud %}, da clic en tu foto de perfil y luego en **Tus empresas**. ![Drop down menu with "Your enterprises" option](/assets/images/help/enterprises/enterprise-admin-account-settings.png)

2. Next to your desired enterprise account, click **Settings**. ![Settings button next to Enterprise admin account](/assets/images/help/enterprises/enterprise-admin-account-settings-button.png)

3. A la izquierda, haz clic en **GitHub Connect**. ![GitHub Connect option under enterprise admin account](/assets/images//help/enterprises/enterprise-admin-github-connect.png)

{% data reusables.server-statistics.csv-download %}

## Downloading metrics from your organization

1. In the top-right corner of {% data variables.product.prodname_ghe_cloud %}, click your profile photo, then click **Your organizations**. ![Drop down menu with "Your organizations" option](/assets/images/help/enterprises/github-enterprise-cloud-organizations.png)

2. In the list of organizations, next to the organization that's connected to {% data variables.product.product_location %}, click **Settings**. ![Settings button next to {% data variables.product.prodname_ghe_cloud %} organization](/assets/images/help/enterprises/settings-for-ghec-org.png)

3. A la izquierda, haz clic en **GitHub Connect**. ![GitHub Connect option in an organization account settings left sidebar](/assets/images/help/enterprises/github-connect-option-for-ghec-org.png)

{% data reusables.server-statistics.csv-download %}
