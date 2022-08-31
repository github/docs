---
title: Enabling Server Statistics for your enterprise
intro: 'You can analyze your own aggregate data from {% data variables.product.prodname_ghe_server %} and help us improve {% data variables.product.company_short %} products by enabling {% data variables.product.prodname_server_statistics %}.'
versions:
  feature: server-statistics
redirect_from:
  - /early-access/github/analyze-how-your-team-works-with-server-statistics/about-server-statistics/enabling-server-statistics
topics:
  - Enterprise
shortTitle: Estadísticas del servidor
---

## Acerca de las {% data variables.product.prodname_server_statistics %}

{% data variables.product.prodname_server_statistics %} recopila los datos de uso agregado de {% data variables.product.product_location %}, lo que te permite anticipar las necesidades de tu organización de una forma mejor, entender cómo trabaja tu equipo y mostrar el valor que obtienes de {% data variables.product.prodname_ghe_server %}.

{% data variables.product.prodname_server_statistics %} solo recopila ciertas métricas agregadas en los repositorios, propuestas, solicitudes de cambio y otras características. No se recopila el contenido de {% data variables.product.prodname_dotcom %} tal como el código, las propuestas, los comentarios o el contenido de las solicitudes de cambio. Para obtener más información, consulta la sección "[Acerca de {% data variables.product.prodname_server_statistics %}](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/about-server-statistics)".

By enabling {% data variables.product.prodname_server_statistics %}, you are also helping to improve {% data variables.product.company_short %}. The aggregated data you will provide helps us understand how our customers are using {% data variables.product.prodname_dotcom %}, and make better and more informed product decisions, ultimately benefiting you.

## Habilitar {% data variables.product.prodname_server_statistics %}

Before you can enable {% data variables.product.prodname_server_statistics %}, you must first connect your {% data variables.product.prodname_ghe_server %} instance to {% data variables.product.prodname_dotcom_the_website %} through {% data variables.product.prodname_github_connect %}. Para obtener más información, consulta "[Conectar {% data variables.product.prodname_ghe_server %} a {% data variables.product.prodname_ghe_cloud %}](/enterprise-server@3.1/admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/connecting-github-enterprise-server-to-github-enterprise-cloud)."

You can disable {% data variables.product.prodname_server_statistics %} from {% data variables.product.prodname_ghe_server %} at any time.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.github-connect-tab %}
4. Under "Share server statistics with GitHub.com", select the dropdown menu and click **Enabled** or **Disabled**. ![Screenshot of {% data variables.product.prodname_server_statistics %} drop-down menu with disabled or enabled options](/assets/images/help/server-statistics/server-statistics-enable-disable-options.png)
