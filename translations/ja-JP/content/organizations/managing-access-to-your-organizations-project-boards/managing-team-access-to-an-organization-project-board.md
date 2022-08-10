---
title: 'Organizationの{% data variables.product.prodname_project_v1 %}へのTeamアクセスの管理'
intro: 'Organization のオーナーまたは{% data variables.projects.projects_v1_board %}の管理者は、Organizationが所有する{% data variables.projects.projects_v1_board %}へのアクセスをTeamに付与できます。'
redirect_from:
  - /articles/managing-team-access-to-an-organization-project-board
  - /github/setting-up-and-managing-organizations-and-teams/managing-team-access-to-an-organization-project-board
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Teamのアクセスの管理
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

{% warning %}

**警告:**
- Teamが{% data variables.projects.projects_v1_board %}への直接のアクセスを持っているなら、Teamの権限レベルを変更できます。 {% data variables.projects.projects_v1_board %}へのTeamのアクセスが親チームから継承されたものなら、{% data variables.projects.projects_v1_board %}への親チームのアクセスを変更しなければなりません。
- 親チームへの{% data variables.projects.projects_v1_board %}へのアクセスを追加もしくは削除した場合、親チームのそれぞれの子チームも{% data variables.projects.projects_v1_board %}へのアクセスを受け取ったり失ったりします。 詳しい情報については[Team について](/articles/about-teams)を参照してください。

{% endwarning %}

## {% data variables.projects.projects_v1_board %}へのTeamのアクセスの付与

Team全体に{% data variables.projects.projects_v1_board %}に対する同じ権限レベルを付与できます。

{% note %}

**ノート:** {% data reusables.project-management.cascading-permissions %} たとえば、Organization のオーナーが、ある{% data variables.projects.projects_v1_board %}に対する読み取り権限をチームに付与しており、{% data variables.projects.projects_v1_board %}の管理者がチームのメンバーいずれかに、個別のコラボレーターとしてそのボードに対する管理者権限を付与している場合、そのユーザは{% data variables.projects.projects_v1_board %}に対する管理者権限を持つことになります。 詳しい情報については「[Organizationの{% data variables.product.prodname_project_v1_caps %}の権限](/articles/project-board-permissions-for-an-organization)」を参照してください。

{% endnote %}

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Click **Projects (classic)**{% endif %}
{% data reusables.project-management.select-project %}
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
8. 左サイトバーで [**Teams**] をクリックします。
9. チームを追加する場合は、[**Add a team: Select team**] をクリックします。 次に、ドロップダウン メニューからチームを選択するか、追加したいチームを検索します。 ![Organization のチームのリストが表示される [Add a team] ドロップダウン メニュー](/assets/images/help/projects/add-a-team.png)
10. チーム名の隣にあるドロップダウン メニューを使って、目的の権限レベルを [**Read**]、[**Write**]、[**Admin**] から選択します。 ![[Read]、[Write]、[Admin] のオプションがあるチームの権限](/assets/images/help/projects/org-project-team-choose-permissions.png)

## {% data variables.projects.projects_v1_board %}へのTeamのアクセスの設定

{% data variables.projects.projects_v1_board %}へのTeamのアクセスが親チームから継承されたものなら、子チームのアクセスを更新するには{% data variables.projects.projects_v1_board %}への親チームのアクセスを変更しなければなりません。

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.specific_team %}
4. チームの会話の上にある {% octicon "project" aria-label="The Projects icon" %}[**Projects**] をクリックします。 ![チームの [Repositories] タブ](/assets/images/help/organizations/team-project-board-button.png)
5. 権限レベルを変更するには、更新したい{% data variables.projects.projects_v1_board %}の右でドロップダウンを使ってください。 {% data variables.projects.projects_v1_board %}を削除するには**{% octicon "trash" aria-label="The trash icon" %}**をクリックしてください。 ![チームからプロジェクトボードを削除する [Trash] ボタン](/assets/images/help/organizations/trash-button.png)
