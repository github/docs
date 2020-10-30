---
title: Configurar contribuciones unificadas entre GitHub Enterprise y GitHub.com
intro: 'Como administrador del sitio, si tienes habilitado {% data variables.product.prodname_github_connect %}, puedes permitir que los usuarios finales vean los recuentos de contribuciones anónimas para su trabajo desde {% data variables.product.prodname_enterprise %} en su gráfico de contribución de {% data variables.product.prodname_dotcom_the_website %}.'
hidden: true
redirect_from:
  - /enterprise/admin/articles/configuring-unified-contributions-between-github-enterprise-and-github-com
  - /enterprise/admin/articles/configuring-unified-contributions-between-github-enterprise-and-githubcom
versions:
  enterprise-server: '*'
---


Después de habilitar {% data variables.product.prodname_github_connect %} y de habilitar {% data variables.product.prodname_unified_contributions %} en ambos entornos, los usuarios finales en tu instancia pueden conectarse con sus cuentas de {% data variables.product.prodname_dotcom_the_website %} y enviar los recuentos de contribución de {% data variables.product.prodname_enterprise %} a {% data variables.product.prodname_dotcom_the_website %}. Para obtener más información, consulta "[Habilitar {% data variables.product.prodname_unified_contributions %} entre {% data variables.product.prodname_enterprise %} y {% data variables.product.prodname_dotcom_the_website %}](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/enabling-unified-contributions-between-github-enterprise-server-and-github-com)" y "[Enviar tus contribuciones de {% data variables.product.prodname_ghe_server %} a tu perfil {% data variables.product.prodname_dotcom_the_website %}](/articles/sending-your-github-enterprise-server-contributions-to-your-github-com-profile/)."

Si el administrador del sitio inhabilita la funcionalidad o los programadores salen de la conexión, los recuentos de contribución de {% data variables.product.prodname_enterprise %} se eliminarán en {% data variables.product.prodname_dotcom_the_website %}. Si el programador vuelve a conectar sus perfiles luego de inhabilitarlos, se restablecerán los recuentos de contribución para los últimos 90 días.

1.  En el shell administrativo, habilita la configuración de {% data variables.product.prodname_unified_contributions %} en {% data variables.product.product_location_enterprise %}:
  ```shell
  $ ghe-config 'app.github.dotcom-contributions-configurable' 'true'
  $ ghe-config-apply
  ```
2. Vuelve a {% data variables.product.prodname_enterprise %}.
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.business-settings %}
{% data reusables.enterprise-accounts.github-connect-tab %}
7. En "Los usuarios pueden compartir recuentos de contribuciones {% data variables.product.prodname_dotcom_the_website %}", utiliza el menú desplegable y haz clic en **Enabled** (Habilitado).
8. Posteriormente, serás redirigido a {% data variables.product.prodname_dotcom_the_website %}, para escribir recuentos de contribuciones para las cuentas de usuarios conectados, debes actualizar {% data variables.product.prodname_enterprise %}. Un administrador de la organización para la organización {% data variables.product.prodname_dotcom_the_website %} conectada debe aprobar la actualización de {% data variables.product.prodname_github_app %} con permisos de `external_contributions`.

