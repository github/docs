---
title: 親チームの追加または変更をリクエストする
intro: ある Team でメンテナーの権限を所有している場合は、Organization の階層内で自分の Team を親チームの下にネストするようにリクエストできます。
redirect_from:
  - /articles/requesting-to-add-or-change-a-parent-team
  - /github/setting-up-and-managing-organizations-and-teams/requesting-to-add-or-change-a-parent-team
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Add or change parent team
ms.openlocfilehash: d277f8177e6a09e308792b1f7c01832851aec878
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880469'
---
自分の Team の親を追加または変更するようにリクエストすると、その親チームのメンテナーにリクエストが送信されます。 新しい親チームのメンテナーがリクエストを承認すると、自分の Team は Organization の階層内で親チームの下に子チームとしてネストされます。

Organization のオーナーである場合、または子チームと親チームでチームメンテナー権限を所有している場合は、承認をリクエストせずに親チームを追加したり、Team の設定ページから Team の親を変更したりできます。 詳細については、「[組織の階層内でチームを移動する](/articles/moving-a-team-in-your-organization-s-hierarchy)」を参照してください。

{% data reusables.organizations.child-team-inherits-permissions %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.teams %}
4. Team のリストで、親の下にネストする Team の名前をクリックします。
  ![組織のチームの一覧](/assets/images/help/teams/click-team-name.png) {% data reusables.organizations.team_settings %}
6. [Parent team] で、[Select parent team] ドロップダウン メニューを使用して新しい親チームの名前をクリックします。
  ![組織のチームが一覧表示されたドロップダウン メニュー](/assets/images/help/teams/choose-parent-team.png)
7. **[変更を保存]** をクリックします。
{% data reusables.repositories.changed-repository-access-permissions %}
9. **[変更の確定]** をクリックして、チームの親を追加または変更するための要求を送信します。
  ![リポジトリ アクセス許可の変更に関する情報のモーダル ボックス](/assets/images/help/teams/confirm-new-parent-team.png)

## 参考資料

- 「[Team について](/articles/about-teams)」
- 「[組織の階層内でチームを移動する](/articles/moving-a-team-in-your-organization-s-hierarchy)」
- 「[子チームの追加をリクエストする](/articles/requesting-to-add-a-child-team)」
