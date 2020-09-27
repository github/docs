---
title: Restringir la creación de repositorios en tu instancia
intro: 'Puedes elegir qué miembros de tu organización en tu aplicativo de {{ site.data.variables.product.prodname_ghe_server }} pueden crear repositorios y de qué tipo.'
redirect_from:
  - /enterprise/admin/user-management/restricting-repository-creation-in-your-instance
versions:
  enterprise-server: '*'
---

{{ site.data.reusables.organizations.repo-creation-constants }}

{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}
{{ site.data.reusables.enterprise_site_admin_settings.business }}
{{ site.data.reusables.enterprise-accounts.policies-tab }}
{{ site.data.reusables.enterprise-accounts.repositories-tab }}
5. En "Creación de repositorio", revisa la información sobre cómo modificar los parámetros. {{ site.data.reusables.enterprise-accounts.view-current-policy-config-orgs }}
{% if currentVersion ver_gt "enterprise-server@2.19" %}
{{ site.data.reusables.enterprise-accounts.repo-creation-policy }}
{{ site.data.reusables.enterprise-accounts.repo-creation-types }}
{% else %}
6. En "Creación de repositorios", usa el menú desplegable y elige una política. ![Menú desplegable con políticas para creación de repositorio](/assets/images/enterprise/site-admin-settings/repository-creation-drop-down.png)
{% endif %}
