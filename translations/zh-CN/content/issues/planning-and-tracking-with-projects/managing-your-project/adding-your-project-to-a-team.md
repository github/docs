---
title: '将 {% data variables.projects.project_v2 %} 添加到团队'
shortTitle: 'Adding a {% data variables.projects.project_v2 %} to a team'
intro: 可将项目添加到团队来管理权限并提高项目可发现性。
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2-add-to-team
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
permissions: Organization owners or people with the team maintainer role and admin permissions on a project can add a project to a team.
ms.openlocfilehash: 21e0944c95949aedf9a0039ef7b576b8840635b1
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108022'
---
## 关于将项目添加到团队

可将项目添加到团队，让整个团队协作者能够访问他们的项目。 将项目添加到团队时，该项目将列在团队的项目页上，这使成员更容易识别特定团队使用哪些项目。

团队将获得他们添加到其中的所有项目的读取权限。 此权限将添加到该项目和各个团队成员的现有权限中，以确保保留任何更高级别的权限。 有关设置团队和各个参与者的权限的详细信息，请参阅“[管理对项目的访问权限](/issues/planning-and-tracking-with-projects/managing-your-project/managing-access-to-your-projects)”。

## 将项目添加到团队

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %}
1. 单击 {% octicon "project" aria-label="The Projects icon" %}“项目”。
   
   ![显示团队项目选项卡的屏幕截图。](/assets/images/help/organizations/team-project-board-button.png)
   
1. 单击“添加项目”。
   
   ![显示“添加项目”按钮的屏幕截图。](/assets/images/help/organizations/team-project-add-project.png)
   
1. 开始键入要添加的项目的名称，然后在匹配项列表中选择该项目。  
   
   {% note %}
   
   注意：如果此更改将增加团队成员的项目权限，{% data variables.product.product_name %} 将提示你确认你的选择。
   
   {% endnote %}
   
   ![显示“添加项目”窗体的屏幕截图。](/assets/images/help/organizations/team-project-search.png)
   

## 从团队中删除项目

{% data reusables.projects.project-settings %}
1. 单击“管理访问”。
   
   ![显示“管理访问”项的屏幕截图](/assets/images/help/projects-v2/manage-access.png)
   
1. 在要从项目中删除的团队旁边，单击“删除”。
   
   ![显示移除协作者的屏幕截图](/assets/images/help/projects-v2/access-remove-member.png)
   

{% ifversion projects-v1 %}

## 延伸阅读

- [管理团队对组织 {% data variables.product.prodname_project_v1 %} 的访问权限](/organizations/managing-access-to-your-organizations-project-boards/managing-team-access-to-an-organization-project-board)

{% endif %}
