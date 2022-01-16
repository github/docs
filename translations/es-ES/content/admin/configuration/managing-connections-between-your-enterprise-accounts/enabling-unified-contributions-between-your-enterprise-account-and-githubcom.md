---
title: Enabling unified contributions between your enterprise account and GitHub.com
shortTitle: Habilitar las contribuciones unificadas
intro: 'Después de habilitar {% data variables.product.prodname_github_connect %}, puedes permitir {% data variables.product.prodname_ghe_cloud %} que los miembros destaquen su trabajo en {% data variables.product.product_name %} al enviar los recuentos de contribuciones a sus {% data variables.product.prodname_dotcom_the_website %} perfiles.'
redirect_from:
  - /enterprise/admin/guides/developer-workflow/enabling-unified-contributions-between-github-enterprise-and-github-com/
  - /enterprise/admin/guides/developer-workflow/enabling-unified-contributions-between-github-enterprise-server-and-github-com/
  - /enterprise/admin/developer-workflow/enabling-unified-contributions-between-github-enterprise-server-and-githubcom/
  - /enterprise/admin/installation/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
  - /enterprise/admin/configuration/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
  - /admin/configuration/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
permissions: 'Enterprise owners who are also owners of the connected {% data variables.product.prodname_ghe_cloud %} organization or enterprise account can enable unified contributions between {% data variables.product.product_location %} and {% data variables.product.prodname_dotcom_the_website %}.'
versions:
  ghes: '*'
  ghae: next
type: how_to
topics:
  - Enterprise
  - GitHub Connect
---

{% data reusables.github-connect.beta %}

As an enterprise owner, you can allow end users to send anonymized contribution counts for their work from {% data variables.product.product_location %} to their {% data variables.product.prodname_dotcom_the_website %} contribution graph.

After you enable {% data variables.product.prodname_github_connect %} and enable {% data variables.product.prodname_unified_contributions %} in both environments, end users on your enterprise account can connect to their {% data variables.product.prodname_dotcom_the_website %} accounts and send contribution counts from {% data variables.product.product_name %} to {% data variables.product.prodname_dotcom_the_website %}. {% data reusables.github-connect.sync-frequency %} For more information, see "[Sending enterprise contributions to your {% data variables.product.prodname_dotcom_the_website %} profile](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/sending-enterprise-contributions-to-your-githubcom-profile)."

If the enterprise owner disables the functionality or developers opt out of the connection, the {% data variables.product.product_name %} contribution counts will be deleted on {% data variables.product.prodname_dotcom_the_website %}. Si el programador vuelve a conectar sus perfiles luego de inhabilitarlos, se restablecerán los recuentos de contribución para los últimos 90 días.

{% data variables.product.product_name %} **solo** envía el recuento de contribución y la fuente de ({% data variables.product.product_name %}) para los usuarios conectados. No envía ningún tipo de información sobre la contribución o cómo se realizó.

Antes de habilitar {% data variables.product.prodname_unified_contributions %} en {% data variables.product.product_location %}, debes conectar {% data variables.product.product_location %} a {% data variables.product.prodname_dotcom_the_website %}. For more information, see "[Connecting your enterprise account to {% data variables.product.prodname_dotcom_the_website %}](/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud)."

{% ifversion ghes %}
{% data reusables.github-connect.access-dotcom-and-enterprise %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% ifversion ghes < 3.1 %}{% data reusables.enterprise-accounts.settings-tab %}{% endif %}{% data reusables.enterprise-accounts.github-connect-tab %}{% else %}
1. Iniciar sesión en {% data variables.product.product_location %} y {% data variables.product.prodname_dotcom_the_website %}.
{% data reusables.enterprise-accounts.access-enterprise %}{% data reusables.enterprise-accounts.github-connect-tab %}{% endif %}
1. En "Los usuarios pueden compartir recuentos de contribuciones en {% data variables.product.prodname_dotcom_the_website %}", haz clic en **Request access (Solicita acceso)**. ![Request access to unified contributions option](/assets/images/enterprise/site-admin-settings/dotcom-ghe-connection-request-access.png){% ifversion ghes %}
2. [Inicia sesión](https://enterprise.github.com/login) en el sitio {% data variables.product.prodname_ghe_server %} para recibir más instrucciones.

When you request access, we may redirect you to the {% data variables.product.prodname_ghe_server %} site to check your current terms of service.
{% endif %}
