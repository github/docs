---
title: 阻止用户更改仓库可见性
intro: '您可以阻止成员在 {% data variables.product.prodname_ghe_server %} 设备上更改组织拥有的仓库的可见性。'
redirect_from:
  - /enterprise/admin/guides/user-management/preventing-users-from-changing-a-repository-s-visibility
  - /enterprise/admin/user-management/preventing-users-from-changing-a-repositorys-visibility
versions:
  enterprise-server: '*'
---

当您阻止成员更改仓库可见性时，只有站点管理员可以将公共仓库设置为私有或者将私有仓库设置为公共。

如果站点管理员仅允许组织所有者创建仓库，成员将无法更改仓库可见性。 如果站点管理员只允许成员创建私有仓库，则成员只能将仓库从公共更改为私有。 更多信息请参阅“[限制在实例中创建仓库](/enterprise/{{ currentVersion }}/admin/guides/user-management/restricting-repository-creation-in-your-instance)”。

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.repositories-tab %}
5. 在“Repository visibility change”下，检查有关更改设置的信息。 {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}

{% data reusables.enterprise-accounts.repository-visibility-policy %}
