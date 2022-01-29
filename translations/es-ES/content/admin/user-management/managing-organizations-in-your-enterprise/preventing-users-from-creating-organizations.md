---
title: Impedir que los usuarios creen organizaciones
redirect_from:
  - /enterprise/admin/articles/preventing-users-from-creating-organizations
  - /enterprise/admin/hidden/preventing-users-from-creating-organizations
  - /enterprise/admin/user-management/preventing-users-from-creating-organizations
  - /admin/user-management/preventing-users-from-creating-organizations
intro: Puedes prevenir que los usuarios creen organizaciones en tu empresa.
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Organizations
  - Policies
shortTitle: Prevenir la creación de organizaciones
---

{% data reusables.enterprise-accounts.access-enterprise %}
{% ifversion ghes or ghae %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
4. En "Los usuarios pueden crear organizaciones", usa el menú desplegable y haz clic en **Activado** o **Desactivado**. ![Desplegable Los usuarios pueden crear organizaciones](/assets/images/enterprise/site-admin-settings/users-create-orgs-dropdown.png)
