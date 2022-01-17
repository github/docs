---
title: Habilitar las contribuciones unificadas entre tu cuenta empresarial y GitHub.com
shortTitle: Habilitar las contribuciones unificadas
intro: 'Después de habilitar {% data variables.product.prodname_github_connect %}, puedes permitir {% data variables.product.prodname_ghe_cloud %} que los miembros destaquen su trabajo en {% data variables.product.product_name %} al enviar los recuentos de contribuciones a sus {% data variables.product.prodname_dotcom_the_website %} perfiles.'
redirect_from:
  - /enterprise/admin/guides/developer-workflow/enabling-unified-contributions-between-github-enterprise-and-github-com
  - /enterprise/admin/guides/developer-workflow/enabling-unified-contributions-between-github-enterprise-server-and-github-com
  - /enterprise/admin/developer-workflow/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
  - /enterprise/admin/installation/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
  - /enterprise/admin/configuration/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
  - /admin/configuration/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
permissions: 'Enterprise owners who are also owners of the connected {% data variables.product.prodname_ghe_cloud %} organization or enterprise account can enable unified contributions between {% data variables.product.product_location %} and {% data variables.product.prodname_dotcom_the_website %}.'
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - GitHub Connect
---

{% data reusables.github-connect.beta %}

Como propietario de empresa, puedes permitir que los usuarios finales envíen cuentas de contribuciones anonimizadas para su trabajo desde {% data variables.product.product_location %} hacia su gráfica de contribuciones de {% data variables.product.prodname_dotcom_the_website %}.

Después de habilitar {% data variables.product.prodname_github_connect %} y de habilitar {% data variables.product.prodname_unified_contributions %} en ambos entornos, los usuarios finales en tu cuenta empresarial pueden conectarse con sus cuentas de {% data variables.product.prodname_dotcom_the_website %} y enviar los recuentos de contribución de {% data variables.product.product_name %} a {% data variables.product.prodname_dotcom_the_website %}. {% data reusables.github-connect.sync-frequency %} Para obtener más información, consulta la sección "[Enviar contribuciones empresariales a tu perfil de {% data variables.product.prodname_dotcom_the_website %}](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/sending-enterprise-contributions-to-your-githubcom-profile)".

Si el propietario de la empresa inhabilita la funcionalidad o los programadores salen de la conexión, los recuentos de contribución de {% data variables.product.product_name %} se eliminarán en {% data variables.product.prodname_dotcom_the_website %}. Si el programador vuelve a conectar sus perfiles luego de inhabilitarlos, se restablecerán los recuentos de contribución para los últimos 90 días.

{% data variables.product.product_name %} **solo** envía el recuento de contribución y la fuente de ({% data variables.product.product_name %}) para los usuarios conectados. No envía ningún tipo de información sobre la contribución o cómo se realizó.

Antes de habilitar {% data variables.product.prodname_unified_contributions %} en {% data variables.product.product_location %}, debes conectar {% data variables.product.product_location %} a {% data variables.product.prodname_dotcom_the_website %}. Para obtener más información, consulta la sección "[Conectar tu cuenta empresarial a {% data variables.product.prodname_dotcom_the_website %}](/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud)".

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
