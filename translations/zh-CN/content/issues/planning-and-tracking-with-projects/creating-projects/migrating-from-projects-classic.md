---
title: '从 {% data variables.product.prodname_projects_v1 %} 中迁移'
intro: '可以将 {% data variables.projects.projects_v1_board %} 迁移到新的 {% data variables.product.prodname_projects_v2 %} 体验。'
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/migrating-your-project
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
ms.openlocfilehash: e6db4fd8c6587f413ee0e6832dbae93bbf281573
ms.sourcegitcommit: 9bf175b190674416ad4e11b5c567409f74c00ad2
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/23/2022
ms.locfileid: '148181219'
---
{% note %}

**注意：**

- 如果你要迁移的项目包含超过 {% data variables.projects.item_limit %} 个项，则将优先处理未结的问题，接着是未解决的拉取请求，然后是注释。 剩余的空间将用于已解决的问题、已合并的请求拉取和已解决的拉取请求。 由于此限制而无法迁移的项将被移动到存档。 如果达到 {% data variables.projects.archived_item_limit %} 个项的存档限制，则不会迁移其他项。
- 注释卡被转换为草稿问题，内容被保存到草稿问题的正文中。 如果信息出现缺失，请使任何隐藏的字段可见。 有关详细信息，请参阅“[显示和隐藏字段](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view#showing-and-hiding-fields)”。
- 不会迁移自动化。
- 不会迁移会审、存档和活动。
- 迁移后，新迁移的项目和旧项目不会保持同步。

{% endnote %}

## 关于项目迁移

可以将项目板迁移到新的 {% data variables.product.prodname_projects_v2 %} 体验，并试用表格、多个视图、新的自动化选项和强大的字段类型。 有关详细信息，请参阅“[关于项目](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)”。

## 迁移组织项目板

{% data reusables.projects.enable-migration %} {% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}
1. 在左侧，单击“Projects (经典)”。
  ![显示“Projects (经典)”菜单选项的屏幕截图}](/assets/images/help/issues/projects-classic-org.png) {% data reusables.projects.migrate-project-steps %}

## 迁移用户项目板

{% data reusables.projects.enable-migration %} {% data reusables.profile.access_profile %}
1. 在个人资料页面顶部的主导航栏中，单击 {% octicon "table" aria-label="The project board icon" %}“项目”。
  ![显示“项目”选项卡的屏幕截图](/assets/images/help/projects-v2/tab-projects.png)
1. 在项目列表上方，单击“Projects (经典)”。
  ![显示“Projects (经典)”菜单选项的屏幕截图}](/assets/images/help/issues/projects-classic-user.png) {% data reusables.projects.migrate-project-steps %}

## 迁移存储库项目板

{% note %}

注意：{% data variables.projects.projects_v2_caps %} 不支持存储库级别的项目。 当你迁移存储库项目板时，它将迁移到拥有存储库项目的组织或个人帐户，并且迁移的项目将被固定到原始存储库。

{% endnote %}

{% data reusables.projects.enable-migration %} {% data reusables.repositories.navigate-to-repo %}
1. 在存储库名称下，单击 {% octicon "table" aria-label="The project board icon" %}“项目”。
![“项目”选项卡](/assets/images/help/projects-v2/repo-tabs-projects.png)
1. 单击“Projects (经典)”。
  ![显示“Projects (经典)”菜单选项的屏幕截图}](/assets/images/help/issues/projects-classic-org.png) {% data reusables.projects.migrate-project-steps %}
