---
title: 阻止用户创建组织
redirect_from:
  - /enterprise/admin/articles/preventing-users-from-creating-organizations/
  - /enterprise/admin/hidden/preventing-users-from-creating-organizations/
  - /enterprise/admin/user-management/preventing-users-from-creating-organizations
intro: '您可以阻止用户在您的 {% data variables.product.prodname_ghe_server %} 设备上创建组织。'
versions:
  enterprise-server: '*'
---

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% if currentVersion ver_gt "enterprise-server@2.21" %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
4. 在“Users can create organizations”下，使用下拉菜单，然后单击 **Enabled** 或 **Disabled**。 ![Users can create organizations 下拉菜单](/assets/images/enterprise/site-admin-settings/users-create-orgs-dropdown.png)
