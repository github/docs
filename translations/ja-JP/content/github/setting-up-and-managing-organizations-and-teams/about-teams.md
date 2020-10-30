---
title: Team について
intro: Team は、Organization のメンバーによって構成されるグループであり、カスケードになったアクセス権限とメンションを伴う会社やグループの構造を反映します。
redirect_from:
  - /articles/about-teams
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

![Organization 内の Team のリスト](/assets/images/help/teams/org-list-of-teams.png)

Organization のオーナーとチームメンテナは、Team に対して、Organization のリポジトリへの管理、読み取り、書き込みアクセスを与えることができます。 Organization のメンバーは、Team 名をメンションすることで、Team 全体に通知を送ることができます。 Organization のメンバーは、Team からのレビューをリクエストすることによっても、Team 全体に通知を送ることができます。 Organization のメンバーは、プルリクエストがオープンされたリポジトリへの読み取りアクセスを持つ特定の Team からのレビューをリクエストできます。 コードの特定の種類や領域に対して Team をオーナーとして CODEOWNERS ファイルで指定できます。

詳しい情報については、以下を参照してください。
- [OrganizationのリポジトリへのTeamのアクセスの管理](/articles/managing-team-access-to-an-organization-repository)
- 「[人や Team のメンション](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)」
- 「[コードオーナー'について](/articles/about-code-owners/)」

![Team のメンションの画像](/assets/images/help/teams/team-mention.png)

{% if currentVersion != "free-pro-team@latest" %}

また、LDAP Sync を使って {% data variables.product.product_location_enterprise %}の Team メンバーと Team ロールを、既成の LDAP グループと同期させることができます。 そうすることで、{% data variables.product.product_location_enterprise %}内で手動で行う代わりに、LDAP サーバーのユーザのロールベースアクセス制御を確立できます。 詳しい情報については[LDAP Syncの有効化](/enterprise/{{ currentVersion }}/admin/guides/user-management/using-ldap#enabling-ldap-sync)を参照してください。

{% endif %}

{% data reusables.organizations.team-synchronization %}

### Team の可視性

{% data reusables.organizations.types-of-team-visibility %}

### Team のページ

各 Team は、Organization 内に独自のページを持ちます。 Team のページでは、Team メンバー、子チーム、Team のリポジトリを見ることができます。 Organization のオーナーとチームメンテナは、Team のページから Team の設定にアクセスし、Team の説明とプロフィール画像を更新できます。

Organization のメンバーは、Team 内のディスカッションを作成し、参加できます。 詳しい情報については[Team ディスカッションについて](/articles/about-team-discussions)を参照してください。

![メンバーとディスカッションのリストがある Team ページ](/assets/images/help/organizations/team-page-discussions-tab.png)

### 入れ子チーム

{% data variables.product.product_name %}の Organization では、複数レベルの入れ子チームでグループや会社の階層を反映させることができます。 親チームは複数の子チームを持つことができます。それぞれの子チームが持つことができる親チームは 1 つだけです。 シークレットチームを入れ子にすることはできません。

子チームは親のアクセス権限を引き継ぐので、大きなグループでの権限管理がシンプルになります。 子チームのメンバーは、親チームが@メンションされた場合にも通知を受けるので、複数グループの人々のコミュニケーションがシンプルになります。

たとえば Team の構造が「従業員 > エンジニアリング > アプリケーションエンジニアリング > アイデンティティ」となっているなら、エンジニアリングにリポジトリへの書き込みアクセスを許可すれば、アプリケーションエンジニアとアイデンティティもそのアクセス権を得ることになります。 アイデンティティ Team あるいは Organization の階層の最下位にある Team に @メンションした場合、それらのチームだけが通知を受けることになります。

![親チームと子チームがある Team のページ](/assets/images/help/teams/nested-teams-eng-example.png)

親チームの権限とメンションを誰が共有するのかを簡単に知るには、親チームのページの [Members] タブで親チームの子チームのすべてのメンバーを見ることができます。 子チームのメンバーは、親チームの直接のメンバーではありません。

![子チームの全メンバーがある親チームのページ](/assets/images/help/teams/team-and-subteam-members.png)

Team を作るときには親を選択できます。あるいは、作成済みの Team を Organization の階層の中で移動させることもできます。 詳しい情報については[Organization 階層内での Team の移動](/articles/moving-a-team-in-your-organization-s-hierarchy)を参照してください。

{% if currentVersion != "free-pro-team@latest" %}

{% data reusables.enterprise_user_management.ldap-sync-nested-teams %}

{% endif %}

### Organization 内で Team を入れ子にする準備

Organization がすでに既存の Team を持っている場合、その Team の上あるいは下に Team を入れ子にする前に、各 Team のリポジトリのアクセス権限を監査しておくべきです。 また、Organization に実装したい新しい構造についても考慮しておくべきです。

Team 階層の最上位では、親チームとその子チームのすべてのメンバーにとって安全なアクセス権限を、親チームのリポジトリに与えるべきです。 階層を下っていくにつれて、より注意が必要なリポジトリへの、より細かいアクセスを、子チームに許可していくことができます。

1. 既存の Team からすべてのメンバーを削除する
2. 各 Team のリポジトリのアクセス権限を監査して調整し、各 Team に親を与える
3. 必要な新しい Team を作成し、それぞれの新 Team の親を選択し、それらにリポジトリのアクセス権を与える
4. Team に直接人を追加する

### 参考リンク

- [Team の作成](/articles/creating-a-team)
- [Team へのOrganization メンバーの追加](/articles/adding-organization-members-to-a-team)
