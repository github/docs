---
title: 将拉取请求链接到议题
intro: '可以将拉取请求{% ifversion link-existing-branches-to-issue %}或分支{% endif %}链接到问题，以显示修复正在进行，并在拉取请求{% ifversion link-existing-branches-to-issue %}或分支{% endif %}合并时自动关闭问题。'
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/linking-a-pull-request-to-an-issue
  - /articles/closing-issues-via-commit-message
  - /articles/closing-issues-via-commit-messages
  - /articles/closing-issues-using-keywords
  - /github/managing-your-work-on-github/closing-issues-using-keywords
  - /github/managing-your-work-on-github/linking-a-pull-request-to-an-issue
  - /issues/tracking-your-work-with-issues/creating-issues/linking-a-pull-request-to-an-issue
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Link PR to issue
ms.openlocfilehash: 8c3ec2b778029c91d0e97783ced873e6b9b28a9b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108193'
---
{% note %}

**注意：** 当拉取请求指向存储库的“默认”分支时，将解析拉取请求说明中的特殊关键字。 但是，如果拉取请求的基础是“任何其他分支”，则系统将忽略这些关键字，并且不会创建任何链接，合并拉取请求对议题没有影响。 如果要使用关键字将拉取请求链接到议题，则该拉取请求必须位于默认分支上。

{% endnote %}

## 关于链接的议题和拉取请求

你可以采用手动方式或在拉取请求说明中使用支持的关键字将问题链接到拉取请求。

当您将拉取请求链接到拉取请求指向的议题，如果有人正在操作该议题，协作者可以看到。

将链接的拉取请求合并到仓库的默认分支时，其链接的议题将自动关闭。 有关默认分支的详细信息，请参阅“[更改默认分支](/github/administering-a-repository/changing-the-default-branch)”。

## 使用关键词将拉取请求链接到议题

你可以通过在拉取请求说明或提交消息中使用支持的关键字将拉取请求链接到问题。 拉取请求必须位于默认分支上。

* 关闭
* closes
* 已关闭
* 修复
* fixes
* fixed
* resolve
* resolves
* resolved

如果使用关键字在另一个拉取请求中引用拉取请求注释，则将链接拉取请求。 合并引用拉取请求也会关闭引用的拉取请求。

关闭关键词的语法取决于议题是否与拉取请求在同一仓库中。

链接的议题 | 语法 | 示例
--------------- | ------ | ------
同一仓库中的议题 | *KEYWORD* #*ISSUE-NUMBER* | `Closes #10`
不同仓库中的议题 | *KEYWORD* *OWNER*/*REPOSITORY*#*ISSUE-NUMBER* | `Fixes octo-org/octo-repo#100`
多个议题 | 对每个议题使用完整语法 | `Resolves #10, resolves #123, resolves octo-org/octo-repo#100`

只有手动链接的拉取请求才能以手动方式取消链接。 要取消链接你使用关键字链接的问题，必须编辑拉取请求说明以删除该关键字。

您也可以在提交消息中使用关闭关键词。 议题将在提交合并到默认分支时关闭，但包含提交的拉取请求不会列为链接的拉取请求。

## 使用拉取请求边栏手动将拉取请求链接到问题

对存储库有写入权限的任何人都可以从拉取请求边栏手动将拉取请求链接到议题。

您可以手动链接最多 10 个议题到每个拉取请求。 议题和拉取请求必须位于同一仓库中。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %}
3. 在拉取请求列表中，单击要链接到议题的拉取请求。
{% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}
4. 在右侧边栏的“Development（开发）”部分，单击 {% octicon "gear" aria-label="The Gear icon" %}。
{% else %}
4. 在右侧栏中，单击“链接的议题”。
  ![右侧边栏中链接的议题](/assets/images/help/pull_requests/linked-issues.png) {% endif %}
5. 单击要链接到拉取请求的议题。
  ![下拉以链接问题](/assets/images/help/pull_requests/link-issue-drop-down.png)

{% ifversion link-existing-branches-to-issue %}

## 使用问题边栏手动将拉取请求或分支链接到问题

对存储库有写入权限的任何人都可以从问题边栏手动将拉取请求或分支链接到议题。

您可以手动链接最多 10 个议题到每个拉取请求。 问题可以处于与链接拉取请求或分支不同的存储库中。 将记住最后一个所选存储库 

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issues %}
3. 在问题列表中，单击要将拉取请求或分支链接到的问题。
4. 在右侧边栏中，单击“开发”。
  ![右侧边栏中的开发菜单](/assets/images/help/issues/development-menu.png)
5. 单击包含要链接到问题的拉取请求或分支的存储库。
  ![用于选择存储库的下拉菜单](/assets/images/help/issues/development-menu-select-repository.png)
6. 单击要链接到问题的拉取请求或分支。
  ![用于链接拉取请求或分支的下拉菜单](/assets/images/help/issues/development-menu-select-pr-or-branch.png)
7. 单击“应用”。
  ![应用](/assets/images/help/issues/development-menu-apply.png)

{% endif %}

## 延伸阅读

* “[自动链接的引用和 URL](/articles/autolinked-references-and-urls/#issues-and-pull-requests)”
