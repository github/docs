---
title: Organization の Team 同期を管理する
intro: '{% data variables.product.product_name %} 上のアイデンティティプロバイダ (IdP) と Organization の間で Team の同期の有効/無効を切り替えることができます。'
redirect_from:
  - /articles/synchronizing-teams-between-your-identity-provider-and-github
  - /github/setting-up-and-managing-organizations-and-teams/synchronizing-teams-between-your-identity-provider-and-github
  - /github/articles/synchronizing-teams-between-okta-and-github
  - /github/setting-up-and-managing-organizations-and-teams/managing-team-synchronization-for-your-organization
permissions: Organization owners can manage team synchronization for an organization.
miniTocMaxHeadingLevel: 3
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Teamの同期の管理
---

{% data reusables.enterprise-accounts.emu-scim-note %}

## Team の同期について

IdP と {% data variables.product.product_name %} の間で Team の同期を有効化すると、Organization のオーナーとチームメンテナが Organization の Team を IdP グループに接続できるようになります。

{% data reusables.identity-and-permissions.about-team-sync %}

{% data reusables.saml.ghec-only %}

{% data reusables.identity-and-permissions.supported-idps-team-sync %}

{% data reusables.identity-and-permissions.sync-team-with-idp-group %}

Enterprise アカウントが所有する Organization に対して Team の同期を有効化することもできます。 詳しい情報については「[Enterprise内のOrganizationでのTeam同期の管理](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise)」を参照してください。

{% data reusables.enterprise-accounts.team-sync-override %}

{% data reusables.identity-and-permissions.team-sync-usage-limits %}

## Team の同期を有効化する

Team の同期を有効化する手順は、使用する IdP によって異なります。 各 IdP によって、Team の同期を有効化するうえで必要な環境があります。 個々の IdP ごとに、さらに必要な環境があります。

### 必要な環境

{% data reusables.identity-and-permissions.team-sync-required-permissions %}

Organization と、サポートされている IdP について、SAMLシングルサインオンを有効にする必要があります。 詳細は「[Organization で SAML シングルサインオンを施行する](/articles/enforcing-saml-single-sign-on-for-your-organization)」を参照してください。

リンクされたSAMLアイデンティティを持っていなければなりません。 リンクされたアイデンティティを作成するには、最低一回はSAML SSOとサポートされたIdPを使ってOrganizationに認証を受けていなければなりません。 詳しい情報については「[SAMLシングルサインオンで認証する](/articles/authenticating-with-saml-single-sign-on)」を参照してください。

SAMLの設定は、**Issuer**フィールドに有効なIdP URLを含んで**いなければなりません**。

![SAML Issuerフィールド](/assets/images/help/saml/saml_issuer.png)



### Azure AD で Team の同期を有効化する

{% data reusables.identity-and-permissions.team-sync-azure-permissions %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.identity-and-permissions.team-sync-confirm-saml %}
{% data reusables.identity-and-permissions.enable-team-sync-azure %}
{% data reusables.identity-and-permissions.team-sync-confirm %}
6. Organization に接続したいアイデンティティプロバイダのテナント情報を確認してから、[**Approve**] をクリックします。 ![特定の IdP テナントに対して、Team の同期を有効化するペンディングリクエストと、リクエストを承認またはキャンセルするオプション](/assets/images/help/teams/approve-team-synchronization.png)

### Okta で Team の同期を有効化する

OktaのTeam同期には、事前にOrganizationでOktaでのSAMLとSCIMがセットアップされていることが必要です。

OktaでのTeam同期のエラーの可能性を回避するために、{% data variables.product.prodname_dotcom %}でTeam同期を有効化する前に、選択したOktaのグループのメンバーになっているすべてのOrganizationメンバーに対して、SCIMのリンクされたアイデンティティが正しくセットアップされているのを確認することをおすすめします。

OrganizationのメンバーがリンクされたSCIMアイデンティティを持たない場合、Teamの同期は期待された動作をせず、そのユーザはTeamに追加も削除もされないかもしれません。 もしもユーザの中にSCIMのリンクされたアイデンティティを持たない者がいた場合、それらのユーザはプロビジョニングし直さなければなりません。

SCIMのリンクされたアイデンティティを書いているユーザのプロビジョニングに関するヘルプについては「[アイデンティティ及びアクセス管理のトラブルシューティング](/organizations/managing-saml-single-sign-on-for-your-organization/troubleshooting-identity-and-access-management)」を参照してください。

{% data reusables.identity-and-permissions.team-sync-okta-requirements %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.identity-and-permissions.team-sync-confirm-saml %}
{% data reusables.identity-and-permissions.team-sync-confirm-scim %}
1. OrganizationでSAMLを施行し、OrganizationのメンバーがSAMLとSCIMのアイデンティティを確実にリンクするようにすることを検討してください。 詳細は「[Organization で SAML シングルサインオンを施行する](/organizations/managing-saml-single-sign-on-for-your-organization/enforcing-saml-single-sign-on-for-your-organization)」を参照してください。
{% data reusables.identity-and-permissions.enable-team-sync-okta %}
7. Organization 名の下で、有効な SSWS トークンと Okta インスタンスの URL を入力します。 ![Okta Organization で Team の同期を有効化するフォーム](/assets/images/help/teams/confirm-team-synchronization-okta-organization.png)
6. Organization に接続したいアイデンティティプロバイダのテナント情報を確認してから、[**Create**] をクリックします。 ![Team の同期を有効化する [Create] ボタン](/assets/images/help/teams/confirm-team-synchronization-okta.png)

## Team の同期を無効化する

{% data reusables.identity-and-permissions.team-sync-disable %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
5. [Team synchronization] の下にある [**Disable team synchronization**] をクリックします。 ![Team の同期を無効化する](/assets/images/help/teams/disable-team-synchronization.png)
