---
title: 在企业中实施项目板策略
intro: 您可以在企业组织内执行项目策略，或允许在每个组织中设置策略。
permissions: Enterprise owners can enforce policies for project boards in an enterprise.
redirect_from:
  - /articles/enforcing-project-board-settings-for-organizations-in-your-business-account
  - /articles/enforcing-project-board-policies-for-organizations-in-your-enterprise-account
  - /articles/enforcing-project-board-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-project-board-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/enforcing-project-board-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-project-board-policies-in-your-enterprise-account
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Projects
shortTitle: 项目板策略
---

## 关于企业中项目板的策略

您可以执行策略来控制企业在 {% data variables.product.product_name %} 上的企业成员如何管理项目板。 您也可以允许组织所有者管理项目板策略。 更多信息请参阅“[关于项目板](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)”。

## 实施组织范围项目板的策略

在企业拥有的所有组织中，可以启用或禁用组织范围的项目板，或允许所有者在组织级别管理设置。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.projects-tab %}
4. 在“Organization projects”（组织项目）下，审查有关更改设置的信息。 {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. 在“Organization projects”（组织项目）下，使用下拉菜单并选择策略。 ![带有组织项目板策略选项的下拉菜单](/assets/images/help/business-accounts/organization-projects-policy-drop-down.png)

## 实施仓库项目板的策略

在企业拥有的所有组织中，可以启用或禁用仓库级项目板，或允许所有者在组织级别管理设置。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.projects-tab %}
4. 在“Repository projects”（仓库项目）下，审查有关更改设置的信息。 {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. 在“Repository projects”（仓库项目）下，使用下拉菜单并选择策略。 ![带有仓库项目板策略选项的下拉菜单](/assets/images/help/business-accounts/repository-projects-policy-drop-down.png)
