---
title: 在企业中为项目实施策略
intro: '可以为企业组织内的 {% data variables.projects.projects_v2_and_v1 %} 实施策略，或者允许在每个组织中设置策略。'
permissions: Enterprise owners can enforce policies for projects in an enterprise.
redirect_from:
  - /articles/enforcing-project-board-settings-for-organizations-in-your-business-account
  - /articles/enforcing-project-board-policies-for-organizations-in-your-enterprise-account
  - /articles/enforcing-project-board-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-project-board-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/enforcing-project-board-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-project-board-policies-in-your-enterprise-account
  - /admin/policies/enforcing-policies-for-your-enterprise/enforcing-project-board-policies-in-your-enterprise
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
ms.openlocfilehash: 2bb72b21094fadea8f584eb4749ed0cea69619ee
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108021'
---
## 关于用于企业中的项目的策略

可以实施策略来控制企业成员管理 {% data variables.projects.projects_v2_and_v1 %} 的方式，也可以允许组织所有者在组织级别管理 {% data variables.projects.projects_v2_and_v1 %} 的策略。{% ifversion project-visibility-policy %}

某些策略同时应用于 {% data variables.product.prodname_projects_v2 %}（新项目体验）和 {% data variables.product.prodname_projects_v1 %}（以前的体验），而某些策略仅应用于 {% data variables.product.prodname_projects_v1 %}。 有关每种体验的详细信息，请参阅“[关于 {% data variables.product.prodname_projects_v2 %}](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)”和“[关于 {% data variables.product.prodname_projects_v1 %}](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)”。
{% else %}有关详细信息，请参阅“[关于项目板](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)”。{% endif %}

## 为组织范围项目实施策略

在企业拥有的所有组织中，可以启用或禁用组织范围的项目板，或允许所有者在组织级别管理设置。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.projects-tab %}
4. 在“Organization projects”（组织项目）下，审查有关更改设置的信息。 {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. 在“Organization projects”（组织项目）下，使用下拉菜单并选择策略。
  ![带有组织项目板策略选项的下拉菜单](/assets/images/help/business-accounts/organization-projects-policy-drop-down.png)

{% ifversion project-visibility-policy %}
## 为项目的可见性更改实施策略

在企业拥有的所有组织中，你可以启用或禁用具有项目管理权限的人员更改项目可见性的能力，也可以允许所有者在组织级别管理设置。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.projects-tab %}
1. 在“项目可见性更改权限”下，检查有关更改设置的信息。 {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
1. 选择下拉菜单，然后单击策略。

   ![用于配置“项目可见性更改权限”策略的下拉菜单的屏幕截图](/assets/images/help/business-accounts/project-visibility-change-drop-down.png){% endif %}

{% ifversion projects-v1 %}
## 为 {% data variables.product.prodname_projects_v1 %} 实施策略

某些策略仅应用于 {% data variables.product.prodname_projects_v1 %}。

### 为存储库项目实施策略

在企业拥有的所有组织中，可以启用或禁用存储库级别项目，或允许所有者在组织级别管理设置。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.projects-tab %}
4. 在“Repository projects”（仓库项目）下，审查有关更改设置的信息。 {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. 在“Repository projects”（仓库项目）下，使用下拉菜单并选择策略。

   ![带有存储库项目板策略选项的下拉菜单](/assets/images/help/business-accounts/repository-projects-policy-drop-down.png){% endif %}
