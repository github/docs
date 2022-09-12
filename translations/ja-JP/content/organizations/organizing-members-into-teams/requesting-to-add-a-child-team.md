---
title: 子チームの追加をリクエストする
intro: あなたがある Team でメンテナーの権限を有している場合は、Organization の階層内で既存の Team を自分の Team の下にネストするようリクエストできます。
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
ms.sourcegitcommit: 505b84dc7227e8a5d518a71eb5c7eaa65b38ce0e
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '147878960'
---
ある Team を子として追加するようにリクエストすると、その子チームのメンテナーにリクエストが送信されます。 子チームのメンテナーがリクエストを受諾すると、その子チームは Organization の階層内で親チームの下にネストされます。

あなたが Organization のオーナーである場合、または子チームと親チームの両方でチームメンテナー権限を所有している場合は、リクエストなしで子チームを追加したり、子チームの設定ページから子チームの親を変更したりできます。 詳細については、「[組織階層内でチームを移動する](/articles/moving-a-team-in-your-organization-s-hierarchy)」を参照してください。

{% data reusables.organizations.child-team-inherits-permissions %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.teams %}
4. Team のリストで、子チームを追加する先の Team の名前をクリックします。
  ![Organization の Team のリスト](/assets/images/help/teams/click-team-name.png)
5. チーム ページの上部にある {% octicon "people" aria-label="The people icon" %} **[チーム]** をクリックします。
  ![チーム ページの [チーム] タブ](/assets/images/help/teams/team-teams-tab.png)
6. **[チームの追加]** をクリックします。
  ![チーム ページの [チームの追加] ボタン](/assets/images/help/teams/add-a-team.png)
7. 子チームとして追加する Team の名前を入力し、ドロップダウン リストからそれを選択します。
  ![子チームの名前を入力するためのテキスト ボックスと、選択するためのドロップダウン メニュー](/assets/images/help/teams/type-child-team-name.png) {% data reusables.repositories.changed-repository-access-permissions %}
9. **[変更の確認]** をクリックして、子チームを追加する要求を送信します。
  ![リポジトリ アクセス許可の変更に関する情報のモーダル ボックス](/assets/images/help/teams/confirm-new-parent-team.png)

## 参考資料

- 「[Team について](/articles/about-teams)」
- 「[組織階層内でチームを移動する](/articles/moving-a-team-in-your-organization-s-hierarchy)」
- 「[親チームの追加または変更を要求する](/articles/requesting-to-add-or-change-a-parent-team)」
