---
title: 阻止用户删除组织仓库
intro: '您可以阻止成员在您的 {% data variables.product.prodname_ghe_server %} 设备上删除或转让组织中的仓库。'
redirect_from:
  - /enterprise/admin/user-management/preventing-users-from-deleting-organization-repositories
versions:
  enterprise-server: '*'
---

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.repositories-tab %}
5. 在“Repository deletion and transfer”下，检查有关更改设置的信息。 {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}

{% data reusables.enterprise-accounts.repository-deletion-policy %}
