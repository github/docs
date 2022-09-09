---
title: 申请添加子团队
intro: 如果您在团队中具有维护员权限，可以申请在组织的层次结构中将现有团队嵌套在您的团队下面。
redirect_from:
  - /articles/requesting-to-add-a-child-team
  - /github/setting-up-and-managing-organizations-and-teams/requesting-to-add-a-child-team
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Add a child team
ms.openlocfilehash: e8012645bb4cdedc2a3aa8f7196adc18253a2600
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145099753'
---
申请将某个团队添加为子团队时，申请会发送到子团队的维护员。 在子团队的维护员批准申请后，该子团队将嵌套在组织的层次结构中的父团队下面。

如果您是组织所有者或者在子团队及父团队中具有团队维护员权限，无需申请批准便可添加子团队，或者从子团队的设置页面更改其父团队。 有关详细信息，请参阅“[在组织的层次结构中移动团队](/articles/moving-a-team-in-your-organization-s-hierarchy)”。

{% data reusables.organizations.child-team-inherits-permissions %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.teams %}
4. 在团队列表中，单击您要在其中添加子团队的父团队名称。
  ![组织的团队列表](/assets/images/help/teams/click-team-name.png)
5. 在团队页面的顶部，单击“{% octicon "people" aria-label="The people icon" %} 团队”。
  ![团队页面上的“团队”选项卡](/assets/images/help/teams/team-teams-tab.png)
6. 单击“添加团队”。
  ![团队页面上的“添加团队”按钮](/assets/images/help/teams/add-a-team.png)
7. 键入要添加为子团队的团队名称，然后从下拉列表中选择它。
  ![用于键入的文本框和用于选择子团队名称的下拉菜单](/assets/images/help/teams/type-child-team-name.png) {% data reusables.repositories.changed-repository-access-permissions %}
9. 单击“确认更改”以发送添加子团队的请求。
  ![包含存储库访问权限更改相关信息的模态框](/assets/images/help/teams/confirm-new-parent-team.png)

## 延伸阅读

- [关于团队](/articles/about-teams)
- “[在组织的层次结构中移动团队](/articles/moving-a-team-in-your-organization-s-hierarchy)”
- “[请求添加或更改父团队](/articles/requesting-to-add-or-change-a-parent-team)”
