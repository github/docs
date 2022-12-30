---
title: 管理对你个人帐户的项目板的访问
intro: 作为项目板所有者，您可以添加或删除协作者，以及自定义他们对项目板的权限。
redirect_from:
  - /articles/managing-project-boards-in-your-repository-or-organization
  - /articles/managing-access-to-your-user-account-s-project-boards
  - /articles/managing-access-to-your-user-accounts-project-boards
  - /github/setting-up-and-managing-your-github-user-account/managing-access-to-your-user-accounts-project-boards
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-access-to-your-user-accounts-project-boards
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-access-to-your-user-accounts-project-boards
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Manage access project boards
ms.openlocfilehash: 4cbf968cee79ac8e4aafbc5eea8220949cf80a30
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145164746'
---
协作者是对您拥有的项目板具有访问权限的个人。 协作者的权限默认为读取权限。 有关详细信息，请参阅“[用户拥有的项目板的权限级别](/articles/permission-levels-for-user-owned-project-boards)”。

## 邀请协作者参加用户拥有的项目板

1. 导航到您要在其中添加协作者的项目板。
{% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.collaborator-option %}
5. 在 "Search by username, full name or email address"（按用户名、全名或电子邮件地址搜索）下，输入协作者的姓名、用户名或 {% data variables.product.prodname_dotcom %} 电子邮件地址。
   ![“协作者”部分，其中搜索字段中输入了 Octocat 的用户名](/assets/images/help/projects/org-project-collaborators-find-name.png) {% data reusables.project-management.add-collaborator %}
7. 新协作者默认具有读取权限。 在新协作者名称旁边，可以选择使用下拉菜单选择不同的权限级别。
  ![选择了“权限”下拉菜单的“协作者”部分](/assets/images/help/projects/user-project-collaborators-edit-permissions.png)

## 从用户拥有的项目板删除协作者

{% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.collaborator-option %} {% data reusables.project-management.remove-collaborator %}
