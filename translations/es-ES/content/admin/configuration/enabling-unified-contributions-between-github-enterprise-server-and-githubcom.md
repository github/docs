---
title: Habilitar aportes unificados entre el Servidor de GitHub Enterprise y GitHub.com
intro: 'Después de habilitar {% data variables.product.prodname_github_connect %}, puedes permitir {% data variables.product.prodname_ghe_cloud %} que los miembros destaquen su trabajo en {% data variables.product.prodname_ghe_server %} al enviar los recuentos de contribuciones a sus {% data variables.product.prodname_dotcom_the_website %} perfiles.'
redirect_from:
  - /enterprise/admin/guides/developer-workflow/enabling-unified-contributions-between-github-enterprise-and-github-com/
  - /enterprise/admin/guides/developer-workflow/enabling-unified-contributions-between-github-enterprise-server-and-github-com/
  - /enterprise/admin/developer-workflow/enabling-unified-contributions-between-github-enterprise-server-and-githubcom/
  - /enterprise/admin/installation/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
  - /enterprise/admin/configuration/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
permissions: 'Los administradores de sitio para {% data variables.product.prodname_ghe_server %} que también sean dueños de la cuenta organizacional o empresarial conectada de {% data variables.product.prodname_ghe_cloud %} pueden habilitar las contribuciones unificadas entre {% data variables.product.prodname_ghe_server %} y {% data variables.product.prodname_dotcom_the_website %}.'
versions:
  enterprise-server: '*'
---

Como un administrador del sitio, puedes habilitar a los usuarios finales para que envíen sus recuentos de contribuciones de manera anónima por sus trabajos desde {% data variables.product.prodname_ghe_server %} a sus gráficos de contribuciones {% data variables.product.prodname_dotcom_the_website %}.

Después de habilitar {% data variables.product.prodname_github_connect %} y habilitar {% data variables.product.prodname_unified_contributions %} en ambos entornos, los usuarios finales a tu instancia pueden conectarse a sus {% data variables.product.prodname_dotcom_the_website %} cuentas y enviar recuentos de contribuciones desde {% data variables.product.prodname_ghe_server %} a {% data variables.product.prodname_dotcom_the_website %}. {% data reusables.github-connect.sync-frequency %} Para obtener más información, consulta "[Enviar tus contribuciones {% data variables.product.prodname_ghe_server %} a tu perfil {% data variables.product.prodname_dotcom_the_website %}](/articles/sending-your-github-enterprise-server-contributions-to-your-github-com-profile/)."

Si el administrador del sitio inhabilita la funcionalidad o la opción de los programadores de la conexión, los recuentos de contribuciones {% data variables.product.prodname_ghe_server %} se borrarán en {% data variables.product.prodname_dotcom_the_website %}. Si el programador vuelve a conectar sus perfiles luego de inhabilitarlos, se restablecerán los recuentos de contribución para los últimos 90 días.

{% data variables.product.prodname_ghe_server %} **únicamente** envía el recuento de contribución y la fuente ({% data variables.product.prodname_ghe_server %}) de los usuarios conectados. No envía ningún tipo de información sobre la contribución o cómo se realizó.

Antes de habilitar {% data variables.product.prodname_unified_contributions %} en {% data variables.product.product_location_enterprise %}, debes conectar {% data variables.product.product_location_enterprise %} a {% data variables.product.prodname_dotcom_the_website %}. Para obtener más información, consulta "[Conectarse a {% data variables.product.prodname_ghe_server %} para {% data variables.product.prodname_dotcom_the_website %}](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/connecting-github-enterprise-server-to-github-com)."

{% data reusables.github-connect.access-dotcom-and-enterprise %}
{% data reusables.enterprise_site_admin_settings.access-settings %}{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.github-connect-tab %}
4. En "Los usuarios pueden compartir recuentos de contribuciones en {% data variables.product.prodname_dotcom_the_website %}", haz clic en **Request access (Solicita acceso)**. ![Solicitud para acceder a la opción de contribuciones unificadas](/assets/images/enterprise/site-admin-settings/dotcom-ghe-connection-request-access.png)
5. [Inicia sesión](https://enterprise.github.com/login) en el sitio {% data variables.product.prodname_ghe_server %} para recibir más instrucciones.

Cuando solicitas acceso, te redireccionaremos al sitio {% data variables.product.prodname_ghe_server %} para comprobar tus términos de servicio actuales. Si {% data variables.product.product_location_enterprise %} utiliza los términos de servicio estándar, la solicitud automáticamente te redireccionará a las instrucciones para habilitar {% data variables.product.prodname_unified_contributions %}. Si estás utilizando los términos de servicio personalizados, registraremos tu solicitud y te contactaremos para configurar el acceso.
