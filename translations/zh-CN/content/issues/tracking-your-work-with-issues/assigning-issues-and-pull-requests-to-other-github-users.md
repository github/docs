---
title: 分配议题和拉取请求到其他 GitHub 用户
intro: 受理人明确谁在处理特定议题和拉取请求。
permissions: 'Anyone with write access to a repository can assign issues and pull requests. {% data reusables.enterprise-accounts.emu-permission-repo %}'
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/assigning-issues-and-pull-requests-to-other-github-users
  - /articles/assigning-issues-and-pull-requests-to-other-github-users
  - /github/managing-your-work-on-github/assigning-issues-and-pull-requests-to-other-github-users
  - /issues/tracking-your-work-with-issues/managing-issues/assigning-issues-and-pull-requests-to-other-github-users
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Assign issues & PRs
ms.openlocfilehash: 0e1f4029ddcd180e892e43257ae3a75d0046ce1d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145128748'
---
## 关于议题和拉取请求受理人

可向每个问题或拉取请求分配多名用户，包括你自己、任何评论了问题或拉取请求的用户、任何对存储库有写入权限的用户以及对存储库有读取权限的组织成员。 有关详细信息，请参阅“[对 {% data variables.product.prodname_dotcom %} 的访问权限](/articles/access-permissions-on-github)”。

公共存储库以及付费帐户的专用存储库中的问题和拉取请求最多可分配有 10 名用户。 使用免费计划的专用存储库限制为每个问题或拉取请求分配给一位用户。

## 分配单个议题或拉取请求

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %}
3. 打开要分配给某人的议题或拉取请求。
4. 如果未向问题或拉取请求分配任何人，请单击“分配自己”以分配你自己。
  ![为你自己分配项目](/assets/images/help/issues/assign_yourself.png)
5. 在右侧菜单中，单击“分配”。
   ![“代理人”菜单项](/assets/images/help/issues/assignee_menu.png)
6. 要分配议题或拉取请求给某用户，先输入其用户名，然后单击显示的名称。 您可以选择并添加最多十个受理人到议题或拉取请求。
  ![“问题分配”下拉菜单](/assets/images/help/issues/issues_assigning_dropdown.png)

## 分配多个议题或拉取请求

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %}
3. 选中要分配给某人的项目旁边的复选框。
  ![“问题元数据”复选框](/assets/images/help/issues/issues_assign_checkbox.png)
4. 在右上角单击“分配”
5. 要分配项目给某用户，先输入其用户名，然后单击显示的名称。 您可以选择并添加最多十个受理人到议题或拉取请求。
  ![“问题分配”下拉菜单](/assets/images/help/issues/issues_assigning_dropdown.png)

## 延伸阅读

* [按代理人筛选问题和拉取请求](/articles/filtering-issues-and-pull-requests-by-assignees)
