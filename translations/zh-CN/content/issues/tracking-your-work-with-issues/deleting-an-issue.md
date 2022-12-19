---
title: 删除议题
intro: 拥有仓库管理员权限的人员可从仓库永久性删除议题。
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/deleting-an-issue
  - /articles/deleting-an-issue
  - /github/managing-your-work-on-github/deleting-an-issue
  - /issues/tracking-your-work-with-issues/creating-issues/deleting-an-issue
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 140bd1fdb272dd3203b993cf5f5f7038963fafe2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '146774570'
---
能否删除议题取决于存储库是属于个人帐户还是组织：
- 唯一可以删除个人帐户所拥有存储库中的议题的帐户便是该帐户本身。
- 只有具有管理员或所有者权限的帐户才能删除组织拥有的存储库中的议题。

  若要删除组织拥有的存储库中的议题，组织所有者必须允许删除组织存储库的议题。 有关详细信息，请参阅“[允许人员删除组织中的议题](/articles/allowing-people-to-delete-issues-in-your-organization)”和“[组织的存储库角色](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)”。

删除议题时，协作者不会收到通知。 在访问已删除议题的 URL 时，协作者将看到一条消息，指出无法找到该网页（但他们可以使用 API 来确定它已被删除）。 拥有仓库管理员或所有者权限的人员还将看到删除议题的人员的用户名和删除时间。

1. 导航到要删除的议题。
2. 在右侧边栏的“通知”下，单击“删除议题”。
![议题页面右侧栏底部突出显示的“删除议题”文本](/assets/images/help/issues/delete-issue.png)
4. 若要确认删除，请单击“删除此议题”。

## 延伸阅读

- “[将拉取请求链接到议题](/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue)”
