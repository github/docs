---
title: 允许人们删除组织中的议题
intro: 组织所有者可以允许特定人员从组织拥有的仓库中删除议题。
redirect_from:
  - /articles/allowing-people-to-delete-issues-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/allowing-people-to-delete-issues-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Allow issue deletion
ms.openlocfilehash: 6396b54d7a6e7113344935e4229843f580c246b6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145097331'
---
默认情况下，无法从组织的仓库中删除议题。 组织所有者必须先对所有组织的仓库启用此功能。

在启用后，组织所有者以及在组织拥有的仓库中具有管理员权限的人员便可删除议题。 在仓库中具有管理员访问权限的人员包括被授予管理员访问权限的组织成员和外部协作者。 有关详细信息，请参阅“[组织的存储库角色](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)”和“[删除问题](/articles/deleting-an-issue)”。

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.member-privileges %}
5. 在“问题删除”下，选择“允许成员删除此组织的问题”。
![用于允许人们删除问题的复选框](/assets/images/help/settings/issue-deletion.png)
6. 单击“保存” 。
