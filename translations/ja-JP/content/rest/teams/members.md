---
title: Teamメンバー
allowTitleToDifferFromFilename: true
shortTitle: メンバー
intro: ''
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## Team members APIについて

{% data reusables.organizations.team-api %}

{% ifversion fpt or ghes or ghec %}
{% note %}

**ノート: ** Organizationのアイデンティティプロバイダ（Idp）でTeamに同期をセットアップしている場合、Teamのメンバーシップを変更するためのこのAPIを使おうとすると、エラーが返されます。 グループのメンバーシップを管理するためにIdpにアクセスできるなら、GitHubのTeamメンバーシップをアイデンティティプロバイダを通じて管理できます。そうすれば、Organizationで自動的にTeamメンバーの追加や削除が行われます。 詳しい情報については「[アイデンティティプロバイダとGitHub間でのTeamの同期](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)」を参照してください。

{% endnote %}

{% endif %}
