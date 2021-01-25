---
title: Impedir que los usuarios creen organizaciones
redirect_from:
  - /enterprise/admin/articles/preventing-users-from-creating-organizations/
  - /enterprise/admin/hidden/preventing-users-from-creating-organizations/
  - /enterprise/admin/user-management/preventing-users-from-creating-organizations
intro: 'Puedes prevenir que los usuarios creen organizaciones en tu empresa.'
versions:
  enterprise-server: '*'
  github-ae: '*'
---

{% data reusables.enterprise-accounts.access-enterprise %}
{% if currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
4. En "Los usuarios pueden crear organizaciones", usa el menú desplegable y haz clic en **Activado** o **Desactivado**. ![Desplegable Los usuarios pueden crear organizaciones](/assets/images/enterprise/site-admin-settings/users-create-orgs-dropdown.png)
