---
title: Enforcing project board policies in your enterprise
intro: 'You can enforce policies for projects within your enterprise''s organizations, or allow policies to be set in each organization.'
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
shortTitle: Project board policies
---

## About policies for project boards in your enterprise

You can enforce policies to control how members of your enterprise on {% data variables.product.product_name %} manage project boards. You can also allow organization owners to manage policies for project boards. 更多信息请参阅“[关于项目板](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)”。

## 实施组织范围项目板的策略

Across all organizations owned by your enterprise, you can enable or disable organization-wide project boards, or allow owners to administer the setting on the organization level.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.projects-tab %}
4. 在“Organization projects”（组织项目）下，审查有关更改设置的信息。 {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. 在“Organization projects”（组织项目）下，使用下拉菜单并选择策略。 ![带有组织项目板策略选项的下拉菜单](/assets/images/help/business-accounts/organization-projects-policy-drop-down.png)

## 实施仓库项目板的策略

Across all organizations owned by your enterprise, you can enable or disable repository-level project boards, or allow owners to administer the setting on the organization level.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.projects-tab %}
4. 在“Repository projects”（仓库项目）下，审查有关更改设置的信息。 {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. 在“Repository projects”（仓库项目）下，使用下拉菜单并选择策略。 ![带有仓库项目板策略选项的下拉菜单](/assets/images/help/business-accounts/repository-projects-policy-drop-down.png)
