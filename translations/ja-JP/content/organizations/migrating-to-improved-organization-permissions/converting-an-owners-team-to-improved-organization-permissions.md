---
title: オーナー Team を改善された Organization の権限に移行する
intro: 2015 年 9 月以降に作成された Organization の場合、Organization の権限モデルはデフォルトで改善されています。 2015 年 9 月より前に作成された Organization は、古いオーナーおよび管理者 Team から、改善された権限モデルに移行する必要があるかもしれません。 「オーナー」は、Organization の各メンバーに与えられる管理者ロールとなりました。 レガシーのオーナー Team のメンバーには、オーナー権限が自動的に与えられます。
redirect_from:
  - /articles/converting-your-previous-owners-team-to-the-improved-organization-permissions-early-access-program/
  - /articles/converting-your-previous-owners-team-to-the-improved-organization-permissions/
  - /articles/converting-an-owners-team-to-improved-organization-permissions
  - /github/setting-up-and-managing-organizations-and-teams/converting-an-owners-team-to-improved-organization-permissions
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - Organizations
  - Teams
---

レガシーのオーナー Team を変換する方法はいくつかあります:

- Team に、メンバーが Organization 内で特別なステータスを持っていることを示す名前を付ける。
- すべてのメンバーが、Organization のリポジトリにアクセスできる必要な権限を持つ Team に追加されていることを確認してから、元の Team を削除する。

### オーナー Team に新しい名前を付ける

{% tip %}

   **メモ:** Organization のメンバーにとって "admin" は、Organization の特定の[リポジトリに対する特定のアクセス](/articles/repository-permission-levels-for-an-organization) を示します。ですから、これを Team 名として使うことは避けるようおすすめします。

{% endtip %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.owners-team %}
{% data reusables.organizations.convert-owners-team-confirm %}
5. Team 名のフィールドで、オーナー Team の新しい名前を選びます。 例:
    - Organization において、オーナー Team のメンバーがとても少ない場合には、"Core" といったチーム名がいいかもしれません。
    - Organization のすべてのメンバーがオーナー Team のメンバーでもあり、[Team に @mention](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams) できる場合は、"Employees" といったチーム名がいいかもしれません。 ![オーナー Team の名前を "Core" にした、Team 名フィールド](/assets/images/help/teams/owners-team-new-name.png)
6. Team の説明の下にある、[**Save and continue**] をクリックします。 ![[Save and continue] ボタン](/assets/images/help/teams/owners-team-save-and-continue.png)
7. また、代わりに [Team を*パブリック*にする](/articles/changing-team-visibility)こともできます。

### レガシーのオーナー Team の削除

{% warning %}

**警告:** オーナー Team のメンバーが、他の Team のメンバーではない場合、そのメンバーは Team を削除すると Organization から削除されます。 Team を削除する前に、メンバーを Organization の直接メンバーにするか、必要なリポジトリに対するコラボレーターアクセスを持たせてください。

{% endwarning %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.owners-team %}
{% data reusables.organizations.convert-owners-team-confirm %}
5. ページの下部にある警告を確認し、[**Delete the Owners team**] をクリックします。 ![オーナー Team を削除するリンク](/assets/images/help/teams/owners-team-delete.png)
