---
title: Team への Organization メンバーの追加
intro: 'オーナーあるいはチームメンテナ権限を持っている人は、Organization のメンバーを Team に加えることができます。 オーナー権限を持っている人は、{% ifversion fpt %}メンバーではない人を Team および Organization に参加するよう招待{% else %}メンバーではない人を Team および Organization に追加{% endif %}することもできます。'
redirect_from:
  - /articles/adding-organization-members-to-a-team-early-access-program/
  - /articles/adding-organization-members-to-a-team
  - /github/setting-up-and-managing-organizations-and-teams/adding-organization-members-to-a-team
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Organizations
  - Teams
shortTitle: Teamへのメンバーの追加
---

{% data reusables.organizations.team-synchronization %}

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_members_tab %}
6. Team メンバーのリストの上部で、[**Add a member**] をクリックします。 ![[Add member] ボタン](/assets/images/help/teams/add-member-button.png)
{% data reusables.organizations.invite_to_team %}
{% data reusables.organizations.review-team-repository-access %}

{% ifversion fpt %}{% data reusables.organizations.cancel_org_invite %}{% endif %}

## 参考リンク

- [Team について](/articles/about-teams)
- [OrganizationのリポジトリへのTeamのアクセスの管理](/articles/managing-team-access-to-an-organization-repository)
