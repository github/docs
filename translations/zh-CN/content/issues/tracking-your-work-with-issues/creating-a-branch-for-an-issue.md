---
title: 创建分支以处理问题
intro: 可以创建一个分支以直接从问题页面处理问题，方便快捷。
versions:
  fpt: '*'
  ghes: '>=3.5'
  ghae: issue-6234
  ghec: '*'
allowTitleToDifferFromFilename: true
topics:
  - Issues
shortTitle: Create branch for issue
ms.openlocfilehash: 062b41705836537de23d882acc5342e0713c316d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147061135'
---
{% note %}

注意：为问题创建分支的功能目前为公共 beta 版，可能会有变动。

{% endnote %}

## 关于连接到问题的分支
连接到问题的分支显示在问题边栏中的“开发”部分下。 为其中一个分支创建拉取请求时，会自动将其链接到问题。 与该分支的连接会被删除，并且拉取请求只会显示在“开发”部分。 有关详细信息，请参阅“[将拉取请求链接到问题](/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue)”。

## 为问题创建分支

对存储库具有写入权限的任何人都可为问题创建分支。 可以对一个问题链接多个分支。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issues %}
3. 在问题列表中，单击要为其创建分支的问题。
4. 在右边栏的“开发”下，单击“创建分支”。 如果该问题已有链接分支或拉取请求，请单击 {% octicon "gear" aria-label="The Gear icon" %}，然后在下拉菜单底部单击“创建分支”。
   ![显示在边栏中突出显示了“创建分支”选项的屏幕截图](/assets/images/help/issues/create-a-branch.png)
5. 默认情况下，新分支是在当前存储库中从默认分支创建的。 在“为此问题创建分支”对话框中根据需要编辑分支名称和详细信息。
   ![显示“创建分支”对话框选项的屏幕截图](/assets/images/help/issues/create-a-branch-options.png)
6. 选择是在本地使用分支，还是在 GitHub Desktop 中打开分支。
7. 准备好创建分支时，请单击“创建分支”。
