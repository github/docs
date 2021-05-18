---
title: Impedir que los usuarios creen organizaciones
redirect_from:
  - /enterprise/admin/articles/preventing-users-from-creating-organizations/
  - /enterprise/admin/hidden/preventing-users-from-creating-organizations/
  - /enterprise/admin/user-management/preventing-users-from-creating-organizations
intro: 'Puedes hacer que los miembros no puedan crear organizaciones en tu aparato {% data variables.product.prodname_ghe_server %}.'
versions:
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Enterprise
  - Organizations
  - Policies
---

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% if currentVersion ver_gt "enterprise-server@2.21" %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
4. En "Los usuarios pueden crear organizaciones", usa el menú desplegable y haz clic en **Activado** o **Desactivado**. ![Desplegable Los usuarios pueden crear organizaciones](/assets/images/enterprise/site-admin-settings/users-create-orgs-dropdown.png)
