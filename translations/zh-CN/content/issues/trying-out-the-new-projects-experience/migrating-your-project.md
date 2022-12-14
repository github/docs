---
title: 将项目迁移到 Projects（beta 版本）
intro: 可以将项目从旧项目体验迁移到 Projects（beta 版本）。
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 2
versions:
  fpt: '*'
  ghec: '*'
topics:
- Projects
- Organizations
ms.openlocfilehash: 9361f3f28d3d365ecbb6053e908644cc8f34f1d0
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 07/13/2022
ms.locfileid: "147079777"
---
{% note %}

**注意：**

- Projects（beta 版本）目前为公共测试版，可能会更改。
- 如果你要迁移的项目包含超过 1200 个项，则未结的问题将优先，接着是未解决的拉取请求，然后是注释。 剩余的空间将用于已解决的问题、已合并的请求拉取和已解决的拉取请求。 由于此限制而无法迁移的项将被移动到存档。 如果达到 10,000 个项的存档限制，则不会迁移其他项。
- 注释卡被转换为草稿问题，内容被保存到草稿问题的正文中。 如果信息出现缺失，请使任何隐藏的字段可见。 有关详细信息，请参阅“[显示和隐藏字段](/issues/trying-out-the-new-projects-experience/customizing-your-project-views#showing-and-hiding-fields)”。
- 不会迁移自动化。
- 不会迁移会审、存档和活动。
- 迁移后，新迁移的项目和旧项目不会保持同步。

{% endnote %}

## <a name="about-project-migration"></a>关于项目迁移

可以将项目板迁移到所有新 Projects（beta 版本）体验，并试用表、多个视图、新的自动化选项和强大的字段类型。 有关详细信息，请参阅“[关于项目（beta 版本）](/issues/trying-out-the-new-projects-experience/about-projects)”。

## <a name="migrating-an-organization-project-board"></a>迁移组织项目板

{% data reusables.projects.enable-migration %} {% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}
1. 在左侧，单击“Projects (经典)”。
  ![显示“Projects (经典)”菜单选项的屏幕截图}](/assets/images/help/issues/projects-classic-org.png) {% data reusables.projects.migrate-project-steps %}

## <a name="migrating-a-user-project-board"></a>迁移用户项目板

{% data reusables.projects.enable-migration %} {% data reusables.profile.access_profile %}
1. 在个人资料页面顶部的主导航栏中，单击 {% octicon "project" aria-label="The project board icon" %}“项目”。
![“项目”选项卡](/assets/images/help/projects/user-projects-tab.png)
1. 在项目列表上方，单击“Projects (经典)”。
  ![显示“Projects (经典)”菜单选项的屏幕截图}](/assets/images/help/issues/projects-classic-user.png) {% data reusables.projects.migrate-project-steps %}

## <a name="migrating-a-repository-project-board"></a>迁移存储库项目板

{% note %}

注意：Projects（beta 版本）不支持存储库级别的项目。 当你迁移存储库项目板时，它将迁移到拥有存储库项目的组织或个人帐户，并且迁移的项目将被固定到原始存储库。

{% endnote %}

{% data reusables.projects.enable-migration %} {% data reusables.repositories.navigate-to-repo %}
1. 在存储库名称下，单击 {% octicon "project" aria-label="The project board icon" %}“项目”。
![“项目”选项卡](/assets/images/help/projects/repo-tabs-projects.png)
1. 单击“Projects (经典)”。
  ![显示“Projects (经典)”菜单选项的屏幕截图}](/assets/images/help/issues/projects-classic-org.png) {% data reusables.projects.migrate-project-steps %}
