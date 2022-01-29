---
title: Enabling automatic user license sync for your enterprise
intro: 'Puedes administrar el uso de licencias en todos tus despliegues de {% data variables.product.prodname_enterprise %} sincronizando automáticamente las licencias de usuario de {% data variables.product.product_location %} a {% data variables.product.prodname_ghe_cloud %}.'
redirect_from:
  - /enterprise/admin/installation/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
  - /enterprise/admin/configuration/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
  - /admin/configuration/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
  - /admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
permissions: 'Site administrators for {% data variables.product.prodname_ghe_server %} who are also owners of the connected {% data variables.product.prodname_ghe_cloud %} organization or enterprise account can enable automatic user license synchronization.'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - GitHub Connect
  - Licensing
shortTitle: Automatic user license sync
---

## Acerca de la sincronización de licencias

After you enable license synchronization, you'll be able to view license usage for your entire enterprise across {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %}. {% data variables.product.prodname_github_connect %} sincroniza la licencia entre {% data variables.product.prodname_ghe_server %} y {% data variables.product.prodname_ghe_cloud %} semanalmente. Paa obtener más información, consulta la sección "[Administrar tu licencia de {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise)".

También puedes cargar en forma manual información de licencias de usuario {% data variables.product.prodname_ghe_server %} en {% data variables.product.prodname_ghe_cloud %}. Para obtener más información, consulta la sección "[Sincronizar el uso de licencia entre {% data variables.product.prodname_ghe_server %} y {% data variables.product.prodname_ghe_cloud %}](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)".

## Habilitar la sincronización de licencias

Before enabling license synchronization on {% data variables.product.product_location %}, you must enable {% data variables.product.prodname_github_connect %}. Para obtener más información, consulta la sección "[Administrar {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/managing-github-connect)".

{% data reusables.enterprise-accounts.access-enterprise %}{% ifversion ghes < 3.1 %}{% data reusables.enterprise-accounts.settings-tab %}{% endif %}{% data reusables.enterprise-accounts.github-connect-tab %}
1. En "El servidor puede sincronizar el recuento y uso de licencias de usuario", usa el menú desplegable y selecciona **Enabled** (Habilitado). ![Menú desplegable para habilitar la sincronización automática de licencias de usuario](/assets/images/enterprise/site-admin-settings/enable-user-license-drop-down.png)
