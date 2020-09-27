---
title: Habilitar la sincronización automática de licencias de usuario entre el servidor de GitHub Enterprise y GitHub Enterprise Cloud
intro: 'Puedes conectar {{ site.data.variables.product.product_location_enterprise }} a {{ site.data.variables.product.prodname_ghe_cloud }} y permitir que {{ site.data.variables.product.prodname_ghe_server }} cargue información de licencias de usuario en tu cuenta de empresa en {{ site.data.variables.product.prodname_dotcom_the_website }}.'
redirect_from:
  - /enterprise/admin/installation/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
  - /enterprise/admin/configuration/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
permissions: 'Los administradores de sitio para {{ site.data.variables.product.prodname_ghe_server }} que también sean dueños de la cuenta organizacional o empresarial conectada de {{ site.data.variables.product.prodname_ghe_cloud }} pueden habilitar la sincronización automática de la licencia del usuario.'
versions:
  enterprise-server: '*'
---

### Acerca de la sincronización de licencias

Después de que habilitas la sincronización de licencias, podrás ver el uso de licencias para toda tu cuenta empresarial, a través de {{ site.data.variables.product.prodname_ghe_server }} y de {{ site.data.variables.product.prodname_ghe_cloud }}. {{ site.data.variables.product.prodname_github_connect }} sincroniza la licencia entre {{ site.data.variables.product.prodname_ghe_server }} y {{ site.data.variables.product.prodname_ghe_cloud }} semanalmente. Para obtener más información, consulta la sección "[Administrar tu licencia de {{ site.data.variables.product.prodname_enterprise }}](/enterprise/{{currentVersion}}/admin/installation/managing-your-github-enterprise-license)".

También puedes cargar en forma manual información de licencias de usuario {{ site.data.variables.product.prodname_ghe_server }} en {{ site.data.variables.product.prodname_ghe_cloud }}. Para obtener más información, consulta "[Conectar {{ site.data.variables.product.prodname_ghe_server }} a {{ site.data.variables.product.prodname_ghe_cloud }}](/enterprise/{{ currentVersion }}/admin/guides/installation/connecting-github-enterprise-server-to-github-enterprise-cloud)."

### Habilitar la sincronización de licencias

Antes de habilitar la sincronización de licencias en {{ site.data.variables.product.product_location_enterprise }}, debes conectar {{ site.data.variables.product.product_location_enterprise }} a {{ site.data.variables.product.prodname_dotcom_the_website }}. Para obtener más información, consulta "[Conectar {{ site.data.variables.product.prodname_ghe_server }} a {{ site.data.variables.product.prodname_ghe_cloud }}](/enterprise/{{ currentVersion }}/admin/guides/installation/connecting-github-enterprise-server-to-github-enterprise-cloud)."

{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}
{{ site.data.reusables.enterprise_site_admin_settings.business }}
{{ site.data.reusables.enterprise-accounts.settings-tab }}
{{ site.data.reusables.enterprise-accounts.github-connect-tab }}
5. En "El servidor puede sincronizar el recuento y uso de licencias de usuario", usa el menú desplegable y selecciona **Enabled** (Habilitado). ![Menú desplegable para habilitar la sincronización automática de licencias de usuario](/assets/images/enterprise/site-admin-settings/enable-user-license-drop-down.png)
