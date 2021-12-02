---
title: Team
intro: 'Team APIを使うと、{% data variables.product.product_name %} Organization内のTeamの作成や管理ができます。'
redirect_from:
  - /v3/teams
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

この API は、Team の [Organization](/rest/reference/orgs) の、認証済みメンバーのみが利用できます。 OAuth のアクセストークンは、 `read:org` [スコープ](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/)を必要とします。 {% data variables.product.prodname_dotcom %} は、Team の `name` からTeam の `slug` を生成します。

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## ディスカッション

Team ディスカッション API を使用すると、Team のページに投稿されたディスカッションを取得、作成、編集、削除できます。 Team のディスカッションは、リポジトリやプロジェクトに原生されない会話をするために利用できます。 Team の [Organization](/rest/reference/orgs) に属する全メンバーが、公開のディスカッション投稿を作成や表示できます。 詳細については「[Teamディスカッションについて](//organizations/collaborating-with-your-team/about-team-discussions/)」を参照してください。 ディスカッションの投稿に対するコメントの詳細については、「[Team ディスカッションのコメント API](/rest/reference/teams#discussion-comments)」を参照してください。 この API は、Team の Organization の、認証済みメンバーのみが利用できます。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'discussions' %}{% include rest_operation %}{% endif %}
{% endfor %}

## ディスカッションコメント

Team ディスカッションコメント API を使用すると、[Team ディスカッション](/rest/reference/teams#discussions)投稿のコメントを取得、作成、編集、削除できます。 Team の [Organization](/rest/reference/orgs) に属する全メンバーが、公開のディスカッションについたコメントを作成や表示できます。 詳細については「[Teamディスカッションについて](/organizations/collaborating-with-your-team/about-team-discussions/)」を参照してください。 この API は、Team の Organization の、認証済みメンバーのみが利用できます。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'discussion-comments' %}{% include rest_operation %}{% endif %}
{% endfor %}

## メンバー

この API は、Team の Organization の、認証済みメンバーのみが利用できます。 OAuth のアクセストークンは、 `read:org` [スコープ](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/)を必要とします。

{% ifversion fpt or ghes or ghec %}
{% note %}

**ノート: ** Organizationのアイデンティティプロバイダ（Idp）でTeamに同期をセットアップしている場合、Teamのメンバーシップを変更するためのこのAPIを使おうとすると、エラーが返されます。 グループのメンバーシップを管理するためにIdpにアクセスできるなら、GitHubのTeamメンバーシップをアイデンティティプロバイダを通じて管理できます。そうすれば、Organizationで自動的にTeamメンバーの追加や削除が行われます。 詳しい情報については「<a href="/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization" class="dotcom-only">アイデンティティプロバイダとGitHub間でのTeamの同期</a>」を参照してください。

{% endnote %}

{% endif %}

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'members' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% ifversion ghec %}
## External groups

The external groups API allows you to view the external identity provider groups that are available to your organization and manage the connection between external groups and teams in your organization.

この API を使用するには、認証されたユーザーがチームメンテナまたは Team に関連づけられた Organization のコードオーナーである必要があります。

{% note %}

**ノート:**

- The external groups API is only available for organizations that are part of a enterprise using {% data variables.product.prodname_emus %}. For more information, see "[About Enterprise Managed Users](/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)."
- If your organization uses team synchronization, you can use the Team Synchronization API. For more information, see "[Team synchronization API](#team-synchronization)."

{% endnote %}

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'external-groups' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% ifversion fpt or ghes or ghec %}
## Team の同期

Team Synchronization API では、{% data variables.product.product_name %} Team と外部アイデンティティプロバイダ (IdP) グループとの間の接続を管理できます。 この API を使用するには、認証されたユーザーがチームメンテナまたは Team に関連づけられた Organization のコードオーナーである必要があります。 また、認証に使用するトークンも、お使いの IdP (SSO) プロバイダーで使用するための認可を受けている必要があります。 詳しい情報については<a href="/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on" class="dotcom-only">SAML シングルサインオンの Organization で使うために個人アクセストークンを認可する</a>を参照してください。

Team 同期を使用して、IdPを通じて GitHubTeamメンバーを管理できます。 Team Synchronization API を使用するには、チーム同期が有効である必要があります。 詳しい情報については「<a href="/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization" class="dotcom-only">アイデンティティプロバイダとGitHub間でのTeamの同期</a>」を参照してください。

{% note %}

**Note:** The Team Synchronization API cannot be used with {% data variables.product.prodname_emus %}. To learn more about managing an {% data variables.product.prodname_emu_org %}, see "[External groups API](/enterprise-cloud@latest/rest/reference/teams#external-groups)".

{% endnote %}

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'team-sync' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}
