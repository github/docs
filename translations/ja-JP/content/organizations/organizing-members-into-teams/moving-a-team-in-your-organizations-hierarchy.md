---
title: Organization 階層内で Team を移動する
intro: チームメンテナと Organization のオーナーは、親チームの下に Team を入れ子にしたり、ネストした入れ子チームの親を変更または削除したりすることができます。
redirect_from:
  - /articles/changing-a-team-s-parent
  - /articles/moving-a-team-in-your-organization-s-hierarchy
  - /articles/moving-a-team-in-your-organizations-hierarchy
  - /github/setting-up-and-managing-organizations-and-teams/moving-a-team-in-your-organizations-hierarchy
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Move a team
ms.openlocfilehash: 205ab40d04d613c54b498b9712e5f199e1433558
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145125502'
---
Organization のオーナーは、Team の親を変更できます。 チームメンテナは、子チームと親チーム両方のメンテナであれば、Team の親を変更できます。 子チームでのメンテナ権限を持たないチームメンテナは、親または子チームの追加をリクエストできます。 詳しくは、「[親チームの追加または変更を要求する](/articles/requesting-to-add-or-change-a-parent-team)」および「[子チームの追加を要求する](/articles/requesting-to-add-a-child-team)」をご覧ください。

{% data reusables.organizations.child-team-inherits-permissions %}

{% tip %}

**ヒント:**
- Team の親をシークレットチームに変更することはできません。 詳細については、「[Team について](/articles/about-teams)」を参照してください。
- 親チームをその子チームの下位に入れ子にすることはできません。

{% endtip %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.teams %}
4. Team のリストで、親を変更する Team の名前をクリックします。
  ![Organization のチームの一覧](/assets/images/help/teams/click-team-name.png) {% data reusables.organizations.team_settings %}
6. ドロップダウン メニューを使って親チームを選ぶか、既存の親を削除するには、 **[Clear selected value]\(選択した値をクリア\)** を選びます。
  ![Organization のチームが一覧表示されるドロップダウン メニュー](/assets/images/help/teams/choose-parent-team.png)
7. **[Update]** をクリックします。
{% data reusables.repositories.changed-repository-access-permissions %}
9. **[Confirm new parent team]\(新しい親チームの確認\)** をクリックします。
  ![リポジトリ アクセス許可の変更に関する情報のモーダル ボックス](/assets/images/help/teams/confirm-new-parent-team.png)

## 参考資料

- 「[Team について](/articles/about-teams)」
