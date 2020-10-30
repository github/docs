---
title: Inhabilitar el editor de conflicto de fusión para las solicitudes de extracción entre repositorios
intro: 'Puedes solicitar que las personas resuelvan los conflictos de fusión en forma local inhabilitando el editor de conflicto de fusión en {% data variables.product.prodname_ghe_server %} para las solicitudes de extracción en las que la rama base y la rama de encabezado estén en repositorios diferentes.'
redirect_from:
  - /enterprise/admin/installation/disabling-the-merge-conflict-editor-for-pull-requests-between-repositories
versions:
  enterprise-server: '*'
---

Solicitarles a los usuarios que resuelvan los conflictos de fusión en forma local desde sus computadoras puede evitar que las personas escriban inadvertidamente un repositorio ascendente desde una bifurcación.

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.options-tab %}
1. En "Editor de conflicto para las solicitudes de extracción entre repositorios", usa el menú desplegable y haz clic en **Disabled** (Inhabilitado). ![Menú desplegable con opción para inhabilitar el editor de conflicto de fusión](/assets/images/enterprise/settings/conflict-editor-settings.png)
