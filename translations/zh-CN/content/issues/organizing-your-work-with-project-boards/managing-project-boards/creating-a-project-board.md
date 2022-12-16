---
title: '创建 {% data variables.product.prodname_project_v1 %}'
intro: '{% data variables.projects.projects_v1_boards_caps %} 可用于创建自定义工作流以满足你的需求，如对特定的功能工作、全面线路图甚至是发布检查清单进行跟踪和排列优先级。'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/creating-a-project-board
  - /articles/creating-a-project
  - /articles/creating-a-project-board
  - /github/managing-your-work-on-github/creating-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
  - Issues
  - Projects
  - Project management
type: how_to
allowTitleToDifferFromFilename: true
ms.openlocfilehash: e4f47a007c18b07142040a0a18ad7f45b73d5273
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108774'
---
{% data reusables.projects.project_boards_old %}

{% data reusables.project-management.use-automated-template %}

{% data reusables.project-management.copy-project-boards %}

{% data reusables.project-management.link-repos-to-project-board %} 有关详细信息，请参阅“[将存储库链接到 {% data variables.product.prodname_project_v1 %}](/articles/linking-a-repository-to-a-project-board)”。

创建 {% data variables.projects.projects_v1_board %} 后，可以向其添加问题、拉取请求和备注。 有关详细信息，请参阅“[将问题和拉取请求添加到 {% data variables.product.prodname_project_v1 %}](/articles/adding-issues-and-pull-requests-to-a-project-board)”和“[将备注添加到 {% data variables.product.prodname_project_v1 %}](/articles/adding-notes-to-a-project-board)”。

还可以配置工作流自动化，使 {% data variables.projects.projects_v1_board %} 与问题和拉取请求的状态保持同步。 有关详细信息，请参阅“[有关 {% data variables.product.prodname_projects_v1 %} 的自动化](/articles/about-automation-for-project-boards)”。

{% data reusables.project-management.project-board-import-with-api %}

## 创建用户拥有的 {% data variables.projects.projects_v1_board %}

{% data reusables.projects.classic-project-creation %}

{% data reusables.profile.access_profile %}
2. 在个人资料页面顶部的主导航栏中，单击 {% octicon "project" aria-label="The project board icon" %}“项目”。
![项目选项卡](/assets/images/help/projects/user-projects-tab.png) {% ifversion projects-v2 %}
1. 单击“项目(经典)”{% endif %} {% data reusables.project-management.click-new-project %} {% data reusables.project-management.create-project-name-description %} {% data reusables.project-management.choose-template %} {% data reusables.project-management.choose-visibility %} {% data reusables.project-management.linked-repositories %} {% data reusables.project-management.create-project-button %} {% data reusables.project-management.add-column-new-project %} {% data reusables.project-management.name-project-board-column %} {% data reusables.project-management.select-column-preset %} {% data reusables.project-management.select-automation-options-new-column %} {% data reusables.project-management.click-create-column %} {% data reusables.project-management.add-more-columns %}

{% data reusables.project-management.edit-project-columns %}

## 创建组织范围内的 {% data variables.projects.projects_v1_board %}

{% data reusables.projects.classic-project-creation %}

{% ifversion classic-project-visibility-permissions %} {% note %}

注意：{% data reusables.projects.owners-can-limit-visibility-permissions %}

{% endnote %} {% endif %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. 单击“项目(经典)”{% endif %} {% data reusables.project-management.click-new-project %} {% data reusables.project-management.create-project-name-description %} {% data reusables.project-management.choose-template %} {% data reusables.project-management.choose-visibility %} {% data reusables.project-management.linked-repositories %} {% data reusables.project-management.create-project-button %} {% data reusables.project-management.add-column-new-project %} {% data reusables.project-management.name-project-board-column %} {% data reusables.project-management.select-column-preset %} {% data reusables.project-management.select-automation-options-new-column %} {% data reusables.project-management.click-create-column %} {% data reusables.project-management.add-more-columns %}

{% data reusables.project-management.edit-project-columns %}

## 创建存储库 {% data variables.projects.projects_v1_board %}

{% data reusables.projects.classic-project-creation %}

{% data reusables.repositories.navigate-to-repo %}
2. 在存储库名称下，单击 {% octicon "project" aria-label="The project board icon" %}“项目”。
![项目选项卡](/assets/images/help/projects/repo-tabs-projects.png) {% ifversion projects-v2 %}
1. 单击“项目(经典)”{% endif %} {% data reusables.project-management.click-new-project %} {% data reusables.project-management.create-project-name-description %} {% data reusables.project-management.choose-template %} {% data reusables.project-management.create-project-button %} {% data reusables.project-management.add-column-new-project %} {% data reusables.project-management.name-project-board-column %} {% data reusables.project-management.select-column-preset %} {% data reusables.project-management.select-automation-options-new-column %} {% data reusables.project-management.click-create-column %} {% data reusables.project-management.add-more-columns %}

{% data reusables.project-management.edit-project-columns %}

## 延伸阅读

- [关于项目板](/articles/about-project-boards)
- [编辑项目板](/articles/editing-a-project-board){% ifversion fpt or ghec %}
- [复制项目板](/articles/copying-a-project-board){% endif %}
- [关闭项目板](/articles/closing-a-project-board)
- [关于项目板的自动化](/articles/about-automation-for-project-boards)
