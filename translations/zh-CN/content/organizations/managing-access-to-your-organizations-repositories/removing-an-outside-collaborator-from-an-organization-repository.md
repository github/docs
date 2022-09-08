---
title: 从组织仓库中删除外部协作者
intro: 所有者和仓库管理员可以删除外部协作者对仓库的访问权限。
redirect_from:
  - /articles/removing-an-outside-collaborator-from-an-organization-repository
  - /github/setting-up-and-managing-organizations-and-teams/removing-an-outside-collaborator-from-an-organization-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Remove collaborator
ms.openlocfilehash: 71c8017b79425570e4ee7c2d2c7d3ac695c5c531
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145127466'
---
{% ifversion fpt or ghec %}

{% warning %}

**警告：**
- 从私有仓库删除外部协作者后，付费许可数不会自动降级。 要在从组织中删除用户后减少付费的许可证数，请按照“[降级组织的付费席位](/articles/downgrading-your-organization-s-paid-seats)”中的步骤操作。

- 您负责确保无法访问仓库的人员删除任何机密信息或知识产权。

{% endwarning %}

{% endif %}

尽管删除协作者时将删除私有仓库的复刻，但此人员将仍保留您仓库的任何本地克隆。

## 从组织中的所有仓库删除外部协作者

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.organizations.people_tab_outside_collaborators %}
5. 选择您想要从组织中删除的一个或多个外部协作者。
![外部协作者列表，其中已选择两个外部协作者](/assets/images/help/teams/list-of-outside-collaborators-selected-bulk.png)
6. 在外部协作者列表上方，使用下拉菜单，然后单击“从所有存储库中删除”。
![包含删除外部协作者选项的下拉菜单](/assets/images/help/teams/user-bulk-management-options-for-outside-collaborators.png)
7. 查看将从组织中删除的一个或多个外部协作者，然后单击“删除外部协作者”。
  ![将删除的外部协作者的列表和“删除外部协作者”按钮](/assets/images/help/teams/confirm-remove-outside-collaborators-bulk.png)

## 从组织的特定仓库中删除外部协作者

如果只是想要从组织的特定仓库中删除外部协作者，则可以一次删除此人员对一个特定仓库的访问权限。

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.organizations.people_tab_outside_collaborators %}
5. 在想要删除的人员用户名右侧，使用 {% octicon "gear" aria-label="The Settings gear" %} 下拉菜单，并单击“管理”。
  ![“管理访问权限”按钮](/assets/images/help/organizations/member-manage-access.png)
6. 在想要从中删除外部协作者的存储库的右侧，单击“管理访问权限”。
![选择外部协作者具有访问权限的存储库旁边的“管理访问权限”按钮](/assets/images/help/organizations/second-manage-access-selection-for-collaborator.png)
7. 若要完全删除外部协作者对存储库的访问权限，请在右上角单击“删除对此存储库的访问权限”。
![“删除对此存储库的访问权限”按钮](/assets/images/help/organizations/remove-access-to-this-repository.png)
8. 若要确认，请单击“删除访问权限”。
![确认将从存储库中删除的外部协作者](/assets/images/help/teams/confirm-remove-outside-collaborator-from-a-repository.png)

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %} 还可以在存储库设置的访问概述中从存储库中删除外部协作者。 有关详细信息，请参阅“[管理有权访问存储库的团队和人员](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository#removing-access-for-a-team-or-person)”。
{% endif %}
## 延伸阅读

- [将外部协作者添加到组织中的存储库](/articles/adding-outside-collaborators-to-repositories-in-your-organization)
- [将组织成员转换为外部协作者](/articles/converting-an-organization-member-to-an-outside-collaborator)
