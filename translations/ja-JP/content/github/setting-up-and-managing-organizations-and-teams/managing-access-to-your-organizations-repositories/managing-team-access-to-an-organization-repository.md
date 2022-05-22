---
title: Organization リポジトリへの Team のアクセスを管理する
intro: リポジトリへのチームアクセスを付与、リポジトリへのチームアクセスを削除、またはリポジトリへのチームの権限レベルを変更することができます。
redirect_from:
  - /articles/managing-team-access-to-an-organization-repository-early-access-program/
  - /articles/managing-team-access-to-an-organization-repository
  - /github/setting-up-and-managing-organizations-and-teams/managing-team-access-to-an-organization-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - organizations
  - teams
---
リポジトリに対して管理者権限がある人は、リポジトリへのチームアクセスを管理できます。 チームメンテナは、リポジトリへのチームアクセスを削除できます。

{% warning %}

**警告:**
- チームがリポジトリに直接アクセスできる場合は、チームの権限レベルを変更できます。 リポジトリへのチームのアクセスが親チームから継承される場合は、リポジトリへの親チームのアクセスを変更する必要があります。
- 親チームのリポジトリへのアクセスを追加または削除すると、その親の子チームそれぞれでも、同じリポジトリへのアクセスが追加または削除されます。 詳しい情報については[Team について](/articles/about-teams)を参照してください。

{% endwarning %}

### リポジトリへのアクセスをチームに付与する

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team-repositories-tab %}
5. リポジトリ リストの上にある [**Add repository**] をクリックします。 ![[Add repository] ボタン](/assets/images/help/organizations/add-repositories-button.png)
6. リポジトリの名前を入力して、[**Add repository to team**] をクリックします。 ![リポジトリ検索フィールド](/assets/images/help/organizations/team-repositories-add.png)
7. オプションで、リポジトリ名の右にあるドロップダウンメニューを使って、チームの権限レベルを変更することもできます ![リポジトリのアクセス レベルのドロップダウン](/assets/images/help/organizations/team-repositories-change-permission-level.png)

### リポジトリへのチームのアクセスを削除する

チームがリポジトリに直接アクセスできる場合は、リポジトリへのチームのアクセスを削除できます。 リポジトリへのチームのアクセスが親チームから継承される場合、子チームからリポジトリを削除するには親チームからリポジトリを削除する必要があります。

{% data reusables.repositories.deleted_forks_from_private_repositories_warning %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team-repositories-tab %}
5. チームから削除するリポジトリ (複数選択も可) を選択します。 ![いくつかのリポジトリがチェックボックスで選択されたチーム リポジトリのリスト](/assets/images/help/teams/select-team-repositories-bulk.png)
6. リポジトリ リストの上にあるドロップダウン メニューで、[**Remove from team**] をクリックします。 ![チームからリポジトリを削除するオプションのあるドロップダウン メニュー](/assets/images/help/teams/remove-team-repo-dropdown.png)
7. チームから削除されるリポジトリをレビューし、[**Remove repositories**] をクリックします。 ![チームがアクセスできなくなったリポジトリのリストがあるモーダル ボックス](/assets/images/help/teams/confirm-remove-team-repos.png)

### 参考リンク

- [Organization のリポジトリ権限レベル](/articles/repository-permission-levels-for-an-organization)
