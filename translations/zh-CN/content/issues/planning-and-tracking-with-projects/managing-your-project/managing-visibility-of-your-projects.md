---
title: '管理 {% data variables.projects.projects_v2 %} 的可见性'
shortTitle: 'Managing {% data variables.projects.project_v2 %} visibility'
intro: '了解如何将 {% data variables.projects.project_v2 %} 设置为专用或公共可见性。'
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/managing-the-visibility-of-your-projects
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
permissions: Organization owners can manage the visibility of project boards in their organization. Organization owners can also allow collaborators with admin permissions to manage project visibility. Visibility of user projects can be managed by the owner of the project and collaborators with admin permissions.
ms.openlocfilehash: fbe4f0943010129b14ace21f6071b99e1160053b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108770'
---
## 关于项目可见性

项目可以是公共的，也可以是专用的。 对于公共项目，互联网上的每个人都可以查看。 对于私有项目，只有被授予至少读取访问权限的用户才能查看。

只有项目可见性会受影响；要查看项目上的项，必须有人具有该项所属存储库所需的权限。 如果项目包含私有存储库中的项目，则不是存储库协作者的用户将无法查看该存储库中的项。

![包含隐藏项的项目](/assets/images/help/projects/hidden-items.png)

项目管理员和组织所有者可以控制项目可见性。 组织所有者{% ifversion project-visibility-policy %}和企业所有者{% endif %}可以将更改项目可见性的能力仅限于组织所有者。

在公共和专用项目中，见解仅对具有项目写入权限的用户可见。

在组织拥有的私有项目中，当前对项目进行更新的用户的头像将显示在项目 UI 中。

项目管理员还可以管理对其项目的写入和管理员访问权限，并控制单个用户的读取访问权限。 有关详细信息，请参阅“[管理对项目的访问](/issues/planning-and-tracking-with-projects/managing-your-project/managing-access-to-your-projects)”。

## 更改项目可见性

{% data reusables.projects.project-settings %}
1. 在“危险区域”的“可见性”旁边，选择“专用”或“公共”  。
   ![显示可见性控件的屏幕截图](/assets/images/help/projects-v2/visibility.png)

## 延伸阅读

- [允许在组织中更改项目可见性](/organizations/managing-organization-settings/allowing-project-visibility-changes-in-your-organization)
