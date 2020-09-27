---
title: Habilitar aportes unificados entre el Servidor de GitHub Enterprise y GitHub.com
intro: 'Después de habilitar {{ site.data.variables.product.prodname_github_connect }}, puedes permitir {{ site.data.variables.product.prodname_ghe_cloud }} que los miembros destaquen su trabajo en {{ site.data.variables.product.prodname_ghe_server }} al enviar los recuentos de contribuciones a sus {{ site.data.variables.product.prodname_dotcom_the_website }} perfiles.'
redirect_from:
  - /enterprise/admin/guides/developer-workflow/enabling-unified-contributions-between-github-enterprise-and-github-com/
  - /enterprise/admin/guides/developer-workflow/enabling-unified-contributions-between-github-enterprise-server-and-github-com/
  - /enterprise/admin/developer-workflow/enabling-unified-contributions-between-github-enterprise-server-and-githubcom/
  - /enterprise/admin/installation/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
  - /enterprise/admin/configuration/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
permissions: 'Los administradores de sitio para {{ site.data.variables.product.prodname_ghe_server }} que también sean dueños de la cuenta organizacional o empresarial conectada de {{ site.data.variables.product.prodname_ghe_cloud }} pueden habilitar las contribuciones unificadas entre {{ site.data.variables.product.prodname_ghe_server }} y {{ site.data.variables.product.prodname_dotcom_the_website }}.'
versions:
  enterprise-server: '*'
---

Como un administrador del sitio, puedes habilitar a los usuarios finales para que envíen sus recuentos de contribuciones de manera anónima por sus trabajos desde {{ site.data.variables.product.prodname_ghe_server }} a sus gráficos de contribuciones {{ site.data.variables.product.prodname_dotcom_the_website }}.

Después de habilitar {{ site.data.variables.product.prodname_github_connect }} y habilitar {{ site.data.variables.product.prodname_unified_contributions }} en ambos entornos, los usuarios finales a tu instancia pueden conectarse a sus {{ site.data.variables.product.prodname_dotcom_the_website }} cuentas y enviar recuentos de contribuciones desde {{ site.data.variables.product.prodname_ghe_server }} a {{ site.data.variables.product.prodname_dotcom_the_website }}. {{ site.data.reusables.github-connect.sync-frequency }} Para obtener más información, consulta "[Enviar tus contribuciones {{ site.data.variables.product.prodname_ghe_server }} a tu perfil {{ site.data.variables.product.prodname_dotcom_the_website }}](/articles/sending-your-github-enterprise-server-contributions-to-your-github-com-profile/)."

Si el administrador del sitio inhabilita la funcionalidad o la opción de los programadores de la conexión, los recuentos de contribuciones {{ site.data.variables.product.prodname_ghe_server }} se borrarán en {{ site.data.variables.product.prodname_dotcom_the_website }}. Si el programador vuelve a conectar sus perfiles luego de inhabilitarlos, se restablecerán los recuentos de contribución para los últimos 90 días.

{{ site.data.variables.product.prodname_ghe_server }} **únicamente** envía el recuento de contribución y la fuente ({{ site.data.variables.product.prodname_ghe_server }}) de los usuarios conectados. No envía ningún tipo de información sobre la contribución o cómo se realizó.

Antes de habilitar {{ site.data.variables.product.prodname_unified_contributions }} en {{ site.data.variables.product.product_location_enterprise }}, debes conectar {{ site.data.variables.product.product_location_enterprise }} a {{ site.data.variables.product.prodname_dotcom_the_website }}. Para obtener más información, consulta "[Conectarse a {{ site.data.variables.product.prodname_ghe_server }} para {{ site.data.variables.product.prodname_dotcom_the_website }}](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/connecting-github-enterprise-server-to-github-com)."

{{ site.data.reusables.github-connect.access-dotcom-and-enterprise }}
{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}{{ site.data.reusables.enterprise_site_admin_settings.business }}
{{ site.data.reusables.enterprise-accounts.settings-tab }}
{{ site.data.reusables.enterprise-accounts.github-connect-tab }}
4. En "Los usuarios pueden compartir recuentos de contribuciones en {{ site.data.variables.product.prodname_dotcom_the_website }}", haz clic en **Request access (Solicita acceso)**. ![Solicitud para acceder a la opción de contribuciones unificadas](/assets/images/enterprise/site-admin-settings/dotcom-ghe-connection-request-access.png)
5. [Inicia sesión](https://enterprise.github.com/login) en el sitio {{ site.data.variables.product.prodname_ghe_server }} para recibir más instrucciones.

Cuando solicitas acceso, te redireccionaremos al sitio {{ site.data.variables.product.prodname_ghe_server }} para comprobar tus términos de servicio actuales. Si {{ site.data.variables.product.product_location_enterprise }} utiliza los términos de servicio estándar, la solicitud automáticamente te redireccionará a las instrucciones para habilitar {{ site.data.variables.product.prodname_unified_contributions }}. Si estás utilizando los términos de servicio personalizados, registraremos tu solicitud y te contactaremos para configurar el acceso.
