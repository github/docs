---
title: 子チームの追加をリクエストする
intro: あなたがある Team でメンテナーの権限を有している場合は、Organization の階層内で既存の Team を自分の Team の下にネストするようリクエストできます。
redirect_from:
  - /articles/requesting-to-add-a-child-team
  - /github/setting-up-and-managing-organizations-and-teams/requesting-to-add-a-child-team
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Organizations
  - Teams
---

ある Team を子として追加するようにリクエストすると、その子チームのメンテナーにリクエストが送信されます。 子チームのメンテナーがリクエストを受諾すると、その子チームは Organization の階層内で親チームの下にネストされます。

あなたが Organization のオーナーである場合、または子チームと親チームの両方でチームメンテナー権限を所有している場合は、リクエストなしで子チームを追加したり、子チームの設定ページから子チームの親を変更したりできます。 詳細については、「[Organization の階層内で Team を移動する](/articles/moving-a-team-in-your-organization-s-hierarchy)」を参照してください。

{% data reusables.organizations.child-team-inherits-permissions %}

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.teams %}
4. Team のリストで、子チームを追加する先の Team の名前をクリックします。 ![Organization の Team のリスト](/assets/images/help/teams/click-team-name.png)
5. Team ページの上部で、{% octicon "people" aria-label="The people icon" %} [**Teams**] をクリックします。 ![Team ページでの [Teams] タブ](/assets/images/help/teams/team-teams-tab.png)
6. [**Add a team**] をクリックします。 ![Team ページでの [Add a team] ボタン](/assets/images/help/teams/add-a-team.png)
7. 子チームとして追加する Team の名前を入力し、ドロップダウン リストからそれを選択します。 ![入力するテキストボックスと、子チームの名前を選択するドロップダウンメニュー](/assets/images/help/teams/type-child-team-name.png)
{% data reusables.repositories.changed-repository-access-permissions %}
9. [**Confirm changes**] をクリックして、子チームを追加するリクエストを送信します。 ![リポジトリアクセス権の変更に関する情報のモーダルボックス](/assets/images/help/teams/confirm-new-parent-team.png)

### 参考リンク

- [Team について](/articles/about-teams)
- 「[Organization の階層内で Team を移動する](/articles/moving-a-team-in-your-organization-s-hierarchy)」
- 「[親チームの追加または変更をリクエストする](/articles/requesting-to-add-or-change-a-parent-team)」
