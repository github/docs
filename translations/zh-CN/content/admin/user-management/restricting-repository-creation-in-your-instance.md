---
title: 限制在实例中创建仓库
intro: '您可以选择 {% data variables.product.prodname_ghe_server %} 设备上的组织成员是否可以创建仓库，以及这些成员可以创建哪种仓库。'
redirect_from:
  - /enterprise/admin/user-management/restricting-repository-creation-in-your-instance
versions:
  enterprise-server: '*'
---

{% data reusables.organizations.repo-creation-constants %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.repositories-tab %}
5. 在“Repository creation”下，检查有关更改设置的信息。 {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
{% if currentVersion ver_gt "enterprise-server@2.19" %}
{% data reusables.enterprise-accounts.repo-creation-policy %}
{% data reusables.enterprise-accounts.repo-creation-types %}
{% else %}
6. 在“Repository creation（仓库创建）”下，使用下拉菜单并选择策略。 ![包含仓库创建策略的下拉菜单](/assets/images/enterprise/site-admin-settings/repository-creation-drop-down.png)
{% endif %}
