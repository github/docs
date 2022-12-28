---
title: 管理项目（beta 版本）
intro: 可关闭再重新打开项目，也可永久删除项目。
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 2
versions:
  fpt: '*'
  ghec: '*'
topics:
- Projects
- Organizations
ms.openlocfilehash: 04910fd85d28fd525f3bbfbfa931fd13b9e8874f
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 07/13/2022
ms.locfileid: "146139360"
---
## <a name="deleting-a-project"></a>删除项目

可删除项目以永久移除它。

{% data reusables.projects.project-settings %}
1. 在页面底部，单击“删除此项目”。 
   ![显示项目删除按钮的屏幕截图](/assets/images/help/issues/delete-project-button.png)
1. 阅读警告，然后在文本框中键入项目的名称。
   ![显示项目删除确认消息的屏幕截图](/assets/images/help/issues/project-delete-confirm.png)
1. 单击“我了解后果，删除此项目”。

## <a name="closing-a-project"></a>关闭项目

可关闭项目，这会将其从项目列表中删除，但保留内容，而且你以后能重新打开该项目。 

{% data reusables.projects.project-settings %}
1. 在页面底部，单击“关闭此项目”。 
   ![显示项目关闭按钮的屏幕截图](/assets/images/help/issues/close-project-button.png)

## <a name="re-opening-an-organization-project"></a>重新打开组织项目

可重新打开以前关闭的项目。

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.projects.reopen-a-project %}

## <a name="re-opening-a-user-project"></a>重新打开用户项目

可重新打开以前关闭的项目。

{% data reusables.profile.access_profile %} {% data reusables.projects.reopen-a-project %}
