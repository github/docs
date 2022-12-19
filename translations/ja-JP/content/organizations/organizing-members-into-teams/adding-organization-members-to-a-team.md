---
title: Team への Organization メンバーの追加
intro: 'オーナーあるいはチームメンテナ権限を持っている人は、Organization のメンバーを Team に加えることができます。 オーナー権限を持っている人は、Team および Organization に{% ifversion fpt or ghec %}メンバーではない人を参加するよう招待{% else %}メンバーではない人を追加{% endif %}することもできます。'
redirect_from:
  - /articles/adding-organization-members-to-a-team-early-access-program
  - /articles/adding-organization-members-to-a-team
  - /github/setting-up-and-managing-organizations-and-teams/adding-organization-members-to-a-team
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Add members to a team
ms.openlocfilehash: 0a0dcd6b925c2209ae583197963db84ba881c7ff
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145125541'
---
{% data reusables.organizations.team-synchronization %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team_members_tab %}
6. Team メンバーのリストの上にある **[メンバーの追加]** をクリックします。
![[メンバーの追加] ボタン](/assets/images/help/teams/add-member-button.png) {% data reusables.organizations.invite_to_team %} {% data reusables.organizations.review-team-repository-access %}

{% ifversion fpt or ghec %}{% data reusables.organizations.cancel_org_invite %}{% endif %}

## 参考資料

- 「[Team について](/articles/about-teams)」
- [Organization のリポジトリに対するチームのアクセスを管理する](/articles/managing-team-access-to-an-organization-repository)
