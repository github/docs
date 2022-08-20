---
title: 阻止用户创建组织
redirect_from:
  - /enterprise/admin/articles/preventing-users-from-creating-organizations
  - /enterprise/admin/hidden/preventing-users-from-creating-organizations
  - /enterprise/admin/user-management/preventing-users-from-creating-organizations
  - /admin/user-management/preventing-users-from-creating-organizations
intro: 您可以防止用户在您的企业中创建组织。
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Organizations
  - Policies
shortTitle: 阻止创建组织
---

{% data reusables.enterprise-accounts.access-enterprise %}
{% ifversion ghes or ghae %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
4. 在“Users can create organizations”下，使用下拉菜单，然后单击 **Enabled** 或 **Disabled**。 ![Users can create organizations 下拉菜单](/assets/images/enterprise/site-admin-settings/users-create-orgs-dropdown.png)
