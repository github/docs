---
title: Team同期
intro: 'Team Synchronization API では、{% data variables.product.product_name %} Team と外部アイデンティティプロバイダ (IdP) グループとの間の接続を管理できます。'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
---

この API を使用するには、認証されたユーザーがチームメンテナまたは Team に関連づけられた Organization のコードオーナーである必要があります。 また、認証に使用するトークンも、お使いの IdP (SSO) プロバイダーで使用するための認可を受けている必要があります。 詳しい情報については<a href="/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on" class="dotcom-only">SAML シングルサインオンの Organization で使うために個人アクセストークンを認可する</a>を参照してください。

Team 同期を使用して、IdPを通じて GitHubTeamメンバーを管理できます。 Team Synchronization API を使用するには、チーム同期が有効である必要があります。 詳しい情報については「<a href="/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization" class="dotcom-only">アイデンティティプロバイダとGitHub間でのTeamの同期</a>」を参照してください。

{% note %}

**ノート:** Team Synchronization APIは{% data variables.product.prodname_emus %}とともに利用することはできません。 {% data variables.product.prodname_emu_org %}の管理についてさらに学ぶには、「[外部グループAPI](/enterprise-cloud@latest/rest/reference/teams#external-groups)」を参照してください。

{% endnote %}
