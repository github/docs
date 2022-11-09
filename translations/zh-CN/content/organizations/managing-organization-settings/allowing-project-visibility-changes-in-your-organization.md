---
title: 允许在组织中更改项目可见性
intro: '组织所有者可以允许具有管理员权限的成员调整其组织中 {% data variables.projects.projects_v2_and_v1 %} 的可见性。'
versions:
  feature: classic-project-visibility-permissions-or-projects-v2
topics:
  - Organizations
  - Projects
shortTitle: Project visibility permissions
allowTitleToDifferFromFilename: true
permissions: 'Organization owners can allow {% data variables.projects.project_v2_and_v1 %} visibility changes for an organization.'
ms.openlocfilehash: 5f8963e8c03e2c0a62586964b6331ec7b3d945b5
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108626'
---
## 关于项目的可见性更改

可以限制谁能够更改组织中 {% data variables.projects.projects_v2_and_v1 %} 的可见性，例如限制成员将 {% data variables.projects.projects_v2_and_v1 %} 从专用更改为公共。 

可以将更改 {% data variables.projects.project_v2_and_v1 %} 可见性的权限限制为仅限组织所有者，或者可以允许获得管理员权限的任何人来更改可见性。

{% ifversion project-visibility-policy %}如果企业所有者在企业级别限制 {% data variables.projects.projects_v2_and_v1 %} 的可见性更改，则此选项可能不可用。 有关详细信息，请参阅“[在企业中为项目实施策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-projects-in-your-enterprise)”。
{% endif %}

## 允许成员更改项目可见性

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. 在侧边栏的“代码、计划和自动化”部分，单击 {% octicon "table" aria-label="The table icon" %}“项目”。
1. 若要允许成员调整项目可见性，请选择“允许成员更改此组织的项目可见性”。
  ![显示用于设置可见性更改的复选框的屏幕截图](/assets/images/help/projects-v2/visibility-change-checkbox.png)
1. 单击“ **保存**”。

## 延伸阅读

{% ifversion projects-v2 %}
- "[管理 {% data variables.projects.projects_v2 %} 的可见性](/issues/planning-and-tracking-with-projects/managing-your-project/managing-visibility-of-your-projects)" {%- endif %}{%- ifversion projects-v1 %}
- "[更改 {% data variables.product.prodname_project_v1 %} 的可见性](/issues/organizing-your-work-with-project-boards/managing-project-boards/changing-project-board-visibility)" {% endif %}
