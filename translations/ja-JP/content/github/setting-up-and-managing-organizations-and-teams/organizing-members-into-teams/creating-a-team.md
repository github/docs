---
title: Team の作成
intro: 独立 Team や入れ子 Team を作成してリポジトリの権限およびグループへのメンションを管理できます。
redirect_from:
  - /articles/creating-a-team-early-access-program/
  - /articles/creating-a-team
  - /github/setting-up-and-managing-organizations-and-teams/creating-a-team
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - organizations
  - teams
---
Organization のオーナーと親チームのメンテナだけが親の下に新しく子チームを作成できます。 オーナーは Organization 内の全チームについて作成許可を制限することもできます。 詳細は「[Organization のチーム作成権限を設定する](/articles/setting-team-creation-permissions-in-your-organization)」を参照してください。

{% data reusables.organizations.team-synchronization %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.new_team %}
{% data reusables.organizations.team_name %}
{% data reusables.organizations.team_description %}
{% data reusables.organizations.create-team-choose-parent %}
{% if currentVersion == "free-pro-team@latest" %}
1. オプションとして、Organization またはEnterprise アカウントが Team 同期を使用している場合は、Team にアイデンティティプロバイダグループを接続するために、[Identity Provider Groups] ドロップダウンメニューから アイデンティティプロバイダグループを 5 つまで選択します。 詳しい情報については「[Team をアイデンティティプロバイダグループと同期する](/github/setting-up-and-managing-organizations-and-teams/synchronizing-a-team-with-an-identity-provider-group)」を参照してください。 ![アイデンティティプロバイダグループを選択するドロップダウンメニュー](/assets/images/help/teams/choose-an-idp-group.png)
{% endif %}
{% data reusables.organizations.team_visibility %}
{% data reusables.organizations.create_team %}
9. 任意で、[Team のアクセスを Organization リポジトリに与えます](/articles/managing-team-access-to-an-organization-repository)。

### 参考リンク

- [Team について](/articles/about-teams)
- 「[Team の可視性を変更する](/articles/changing-team-visibility)」
- "[Organization の階層内での Team の移動](/articles/moving-a-team-in-your-organization-s-hierarchy)"
