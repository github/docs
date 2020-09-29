---
title: Team
redirect_from:
  - /v3/teams
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

この API は、Team の [Organization](/v3/orgs) の、認証済みメンバーのみが利用できます。 OAuth のアクセストークンは、 `read:org` [スコープ](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/)を必要とします。 {% data variables.product.prodname_dotcom %} は、Team の `name` からTeam の `slug` を生成します。

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## ディスカッション

Team ディスカッション API を使用すると、Team のページに投稿されたディスカッションを取得、作成、編集、削除できます。 Team のディスカッションは、リポジトリやプロジェクトに原生されない会話をするために利用できます。 Team の [Organization](/v3/orgs) に属する全メンバーが、公開のディスカッション投稿を作成や表示できます。 The team discussions API allows you to get, create, edit, and delete discussion posts on a team's page. You can use team discussions to have conversations that are not specific to a repository or project. この API は、Team の Organization の、認証済みメンバーのみが利用できます。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'discussions' %}{% include rest_operation %}{% endif %}
{% endfor %}

## ディスカッションコメント

Team ディスカッションコメント API を使用すると、[Team ディスカッション](/v3/teams/discussions)投稿のコメントを取得、作成、編集、削除できます。 Team の [Organization](/v3/orgs) に属する全メンバーが、公開のディスカッションについたコメントを作成や表示できます。 The team discussions API allows you to get, create, edit, and delete discussion posts on a team's page. この API は、Team の Organization の、認証済みメンバーのみが利用できます。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'discussion-comments' %}{% include rest_operation %}{% endif %}
{% endfor %}

## メンバー

この API は、Team の Organization の、認証済みメンバーのみが利用できます。 OAuth のアクセストークンは、 `read:org` [スコープ](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/)を必要とします。

{% note %}

**ノート: ** Organizationのアイデンティティプロバイダ（Idp）でTeamに同期をセットアップしている場合、Teamのメンバーシップを変更するためのこのAPIを使おうとすると、エラーが返されます。 グループのメンバーシップを管理するためにIdpにアクセスできるなら、GitHubのTeamメンバーシップをアイデンティティプロバイダを通じて管理できます。そうすれば、Organizationで自動的にTeamメンバーの追加や削除が行われます。 詳しい情報については「<a href="/github/setting-up-and-managing-organizations-and-teams/managing-team-synchronization-for-your-organization" class="dotcom-only">アイデンティティプロバイダとGitHub間でのTeamの同期</a>」を参照してください。

{% endnote %}

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'members' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Team の同期

Team Synchronization API では、{% data variables.product.product_name %} Team と外部アイデンティティプロバイダ (IdP) グループとの間の接続を管理できます。 この API を使用するには、認証されたユーザーがチームメンテナまたは Team に関連づけられた Organization のコードオーナーである必要があります。 また、認証に使用するトークンも、お使いの IdP (SSO) プロバイダーで使用するための認可を受けている必要があります。 詳しい情報については<a href="/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on" class="dotcom-only">SAML シングルサインオンの Organization で使うために個人アクセストークンを認可する</a>を参照してください。

Team 同期を使用して、IdPを通じて GitHubTeamメンバーを管理できます。 Team Synchronization API を使用するには、チーム同期が有効である必要があります。 詳しい情報については「<a href="/github/setting-up-and-managing-organizations-and-teams/managing-team-synchronization-for-your-organization" class="dotcom-only">アイデンティティプロバイダとGitHub間でのTeamの同期</a>」を参照してください。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'team-sync' %}{% include rest_operation %}{% endif %}
{% endfor %}
