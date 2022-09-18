---
title: '关闭和删除 {% data variables.projects.projects_v2 %}'
shortTitle: 'Closing and deleting {% data variables.projects.projects_v2 %}'
intro: '了解如何关闭、重新打开和永久删除 {% data variables.projects.project_v2 %}。'
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/managing-projects
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
ms.openlocfilehash: a37980d4d19ca0392fab51dc7e99987e469d2c9a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147423820'
---
## 删除项目

可删除项目以永久移除它。

{% data reusables.projects.project-settings %}
1. 在页面底部，单击“删除此项目”。 
   ![显示项目删除按钮的屏幕截图](/assets/images/help/issues/delete-project-button.png)
1. 阅读警告，然后在文本框中键入项目的名称。
   ![显示项目删除确认消息的屏幕截图](/assets/images/help/issues/project-delete-confirm.png)
1. 单击“我了解后果，删除此项目”。

## 关闭项目

可关闭项目，这会将其从项目列表中删除，但保留内容，而且你以后能重新打开该项目。 

{% data reusables.projects.project-settings %}
1. 在页面底部，单击“关闭此项目”。 
   ![显示项目关闭按钮的屏幕截图](/assets/images/help/issues/close-project-button.png)

## 重新打开组织项目

可重新打开以前关闭的项目。

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.projects.reopen-a-project %}

## 重新打开用户项目

可重新打开以前关闭的项目。

{% data reusables.profile.access_profile %} {% data reusables.projects.reopen-a-project %}
