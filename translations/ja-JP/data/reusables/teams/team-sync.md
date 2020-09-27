{% if currentVersion == "free-pro-team@latest" %}
{% note %}

  **ノート: ** Organizationのアイデンティティプロバイダ（Idp）でTeamに同期をセットアップしている場合、Teamのメンバーシップを変更するためのこのAPIを使おうとすると、エラーが返されます。 グループのメンバーシップを管理するためにIdpにアクセスできるなら、GitHubのTeamメンバーシップをアイデンティティプロバイダを通じて管理できます。そうすれば、Organizationで自動的にTeamメンバーの追加や削除が行われます。 詳しい情報については「[アイデンティティプロバイダとGitHub間でのTeamの同期](/articles/synchronizing-teams-between-your-identity-provider-and-github/)」を参照してください。

{% endnote %}
{% endif %}
