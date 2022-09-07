---
title: Habilitar la sincronización de licencias de usuario automática para tu empresa
intro: 'Puedes administrar el uso de licencias en todos tus ambientes de {% data variables.product.prodname_enterprise %} sincronizando automáticamente las licencias de usuario de {% data variables.product.product_location %} a {% data variables.product.prodname_ghe_cloud %}.'
redirect_from:
  - /enterprise/admin/installation/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
  - /enterprise/admin/configuration/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
  - /admin/configuration/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
  - /admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
permissions: Enterprise owners can enable automatic user license synchronization.
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - GitHub Connect
  - Licensing
shortTitle: Sincronización automática de licencias de usuario
---

## Acerca de la sincronización automática de licencias

{% data reusables.enterprise-licensing.unique-user-licensing-model %}

{% data reusables.enterprise-licensing.about-license-sync %} Para obtener más información, consulta la sección "[Acerca de {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect#data-transmission-for-github-connect)".

Si habilitas la sincronización automática de licencias de usuario para tu empresa, {% data variables.product.prodname_github_connect %} sincronizará automáticamente el uso de licencias entre {% data variables.product.prodname_ghe_server %} y {% data variables.product.prodname_ghe_cloud %} semanalmente.{% ifversion ghes > 3.4 %} También puedes sincronizar tus datos de licencia en cualquier momento fuera de la sincronización semanal automática si activas un job de sincronización de licencias manualmente. Para obtener más información, consulta la sección "[Activar un job de sincronización de licencia](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud#triggering-a-license-sync-job)".{% endif %}

Si utilizas instancias múltiples de {% data variables.product.prodname_ghe_server %}, puedes habilitar la sincronización automática de licencias entre cada una de tus instancias y la misma cuenta de empresa u organización en {% data variables.product.prodname_ghe_cloud %}.

{% data reusables.enterprise-licensing.view-consumed-licenses %}

También puedes cargar en forma manual información de licencias de usuario {% data variables.product.prodname_ghe_server %} en {% data variables.product.prodname_ghe_cloud %}. Para obtener más información, consulta la sección "[Sincronizar el uso de licencia entre {% data variables.product.prodname_ghe_server %} y {% data variables.product.prodname_ghe_cloud %}](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)".

{% data reusables.enterprise-licensing.verified-domains-license-sync %}

## Habilitar la sincronización de licencias

Antes de habilitar la sincronización de licencias en {% data variables.product.product_location %}, debes habilitar {% data variables.product.prodname_github_connect %}. Para obtener más información, consulta la sección "[Administrar {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/managing-github-connect)".

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.github-connect-tab %}
1. En "El servidor puede sincronizar el recuento y uso de licencias de usuario", usa el menú desplegable y selecciona **Enabled** (Habilitado). ![Menú desplegable para habilitar la sincronización automática de licencias de usuario](/assets/images/enterprise/site-admin-settings/enable-user-license-drop-down.png)
