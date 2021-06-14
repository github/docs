---
title: Organization のプロジェクトボードに対するチームのアクセスを管理する
intro: Organization のオーナーまたはプロジェクトボードの管理者は、Organization が所有しているプロジェクトボードへのアクセスをチームに付与できます。
redirect_from:
  - /articles/managing-team-access-to-an-organization-project-board
  - /github/setting-up-and-managing-organizations-and-teams/managing-team-access-to-an-organization-project-board
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - organizations
  - teams
---
{% warning %}

**警告:**
- チームがプロジェクトボードに直接アクセスできる場合は、チームの権限レベルを変更できます。 プロジェクトボードへのチームのアクセスが親チームから継承される場合は、プロジェクトボードへの親チームのアクセスを変更する必要があります。
- 親チームのプロジェクトボードへのアクセスを追加または削除すると、その親の子チームそれぞれでも、同じプロジェクトボードへのアクセスが追加または削除されます。 詳しい情報については[Team について](/articles/about-teams)を参照してください。

{% endwarning %}

### プロジェクトボードへのアクセスをチームに付与する

あるプロジェクトボードに対する同じ権限レベルをチーム全体に付与することができます。

{% note %}

**メモ:** {% data reusables.project-management.cascading-permissions %} たとえば、Organization のオーナーが、あるプロジェクトボードに対する読み取り権限をチームに付与しており、プロジェクトボードの管理者がチームのメンバーいずれかに、個別のコラボレーターとしてそのボードに対する管理者権限を付与している場合、そのユーザはプロジェクトボードに対する管理者権限を持つことになります。 詳細は「[Organization のプロジェクトボード権限](/articles/project-board-permissions-for-an-organization)」を参照してください。

{% endnote %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.organization-wide-project %}
{% data reusables.project-management.select-project %}
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
8. 左サイトバーで [**Teams**] をクリックします。
9. チームを追加する場合は、[**Add a team: Select team**] をクリックします。 次に、ドロップダウン メニューからチームを選択するか、追加したいチームを検索します。 ![Organization のチームのリストが表示される [Add a team] ドロップダウン メニュー](/assets/images/help/projects/add-a-team.png)
10. チーム名の隣にあるドロップダウン メニューを使って、目的の権限レベルを [**Read**]、[**Write**]、[**Admin**] から選択します。 ![[Read]、[Write]、[Admin] のオプションがあるチームの権限](/assets/images/help/projects/org-project-team-choose-permissions.png)

### プロジェクトボードへのチームのアクセスを設定する

チームのプロジェクトボードへのアクセスが親チームから継承されている場合は、その子チームへのアクセスを更新するために、親チームのプロジェクトボードへのアクセスを変更する必要があります。

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
4. チームの会話の上にある {% octicon "project" aria-label="The Projects icon" %}[**Projects**] をクリックします。 ![チームの [Repositories] タブ](/assets/images/help/organizations/team-project-board-button.png)
5. 権限レベルを変更するには、更新するプロジェクトボードの右にあるドロップダウンを使用します。 プロジェクトボードを削除するには、[**{% octicon "trashcan" aria-label="The trashcan icon" %}**] をクリックします。 ![チームからプロジェクトボードを削除する [Trash] ボタン](/assets/images/help/organizations/trash-button.png)
