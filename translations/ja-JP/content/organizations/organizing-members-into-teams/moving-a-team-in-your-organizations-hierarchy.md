---
title: Organization 階層内で Team を移動する
intro: チームメンテナと Organization のオーナーは、親チームの下に Team を入れ子にしたり、ネストした入れ子チームの親を変更または削除したりすることができます。
redirect_from:
  - /articles/changing-a-team-s-parent/
  - /articles/moving-a-team-in-your-organization-s-hierarchy
  - /articles/moving-a-team-in-your-organizations-hierarchy
  - /github/setting-up-and-managing-organizations-and-teams/moving-a-team-in-your-organizations-hierarchy
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Organizations
  - Teams
---

Organization のオーナーは、Team の親を変更できます。 チームメンテナは、子チームと親チーム両方のメンテナであれば、Team の親を変更できます。 子チームでのメンテナ権限を持たないチームメンテナは、親または子チームの追加をリクエストできます。 詳細は「[親チームの追加または変更をリクエストする](/articles/requesting-to-add-or-change-a-parent-team)」および「[子チームの追加をリクエストする](/articles/requesting-to-add-a-child-team)」を参照してください。

{% data reusables.organizations.child-team-inherits-permissions %}

{% tip %}

**参考:**
- Team の親をシークレットチームに変更することはできません。 詳しい情報については[Team について](/articles/about-teams)を参照してください。
- 親チームをその子チームの下位に入れ子にすることはできません。

{% endtip %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.teams %}
4. Team のリストで、親を変更する Team の名前をクリックします。 ![Organization の Team のリスト](/assets/images/help/teams/click-team-name.png)
{% data reusables.organizations.team_settings %}
6. ドロップダウンメニューを使って親チームを選択するか、既存の親を削除して [**Clear selected value**] を選択します。 ![Organization の Team がリストされるドロップダウンメニュー](/assets/images/help/teams/choose-parent-team.png)
7. [**Update**] をクリックします。
{% data reusables.repositories.changed-repository-access-permissions %}
9. [**Confirm new parent team**] をクリックします。 ![リポジトリアクセス権の変更に関する情報のモーダルボックス](/assets/images/help/teams/confirm-new-parent-team.png)

### 参考リンク

- [Team について](/articles/about-teams)
