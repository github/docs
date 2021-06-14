---
title: 組織へのメンバーの SAML アクセスの表示と管理
intro: Organization のメンバーのリンクされたアイデンティティ、アクティブなセッション、認可されたクレデンシャルの表示と取り消しが可能です。
permissions: Organization owners can view and manage a member's SAML access to an organization.
product: '{% data reusables.gated-features.saml-sso %}'
redirect_from:
  - /articles/viewing-and-revoking-organization-members-authorized-access-tokens
  - /github/setting-up-and-managing-organizations-and-teams/viewing-and-revoking-organization-members-authorized-access-tokens
  - /github/setting-up-and-managing-organizations-and-teams/viewing-and-managing-a-members-saml-access-to-your-organization
versions:
  free-pro-team: '*'
topics:
  - Organizations
  - Teams
---

### Organization への SAML アクセスについて

Organization に対する SAML シングルサインオンを有効にすると、各 Organization メンバーは ID プロバイダ (IdP) での外部アイデンティティを、既存の {% data variables.product.product_name %} アカウントにリンクできます。 {% data variables.product.product_name %}上の Organizationのリソースにアクセスするには、メンバーはアクティブなSAMLセッションをブラウザーに持っていなければなりません。 OrganizationのリソースにAPIまたはGitを使ってアクセスするには、メンバーは、メンバーがOrganizationでの利用のために認可した個人アクセストークンもしくはSSHキーを使わなければなりません。

各メンバーのリンクされたアイデンティティ、アクティブなセッション、同じページで認可されたクレデンシャルの表示と取り消しが可能です。

### リンクされているアイデンティティの表示と取り消し

{% data reusables.saml.about-linked-identities %}

{% data reusables.identity-and-permissions.revoking-identity-team-sync %}

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.people %}
{% data reusables.saml.click-person-revoke-identity %}
{% data reusables.saml.saml-identity-linked %}
{% data reusables.saml.view-sso-identity %}
{% data reusables.saml.revoke-sso-identity %}
{% data reusables.saml.confirm-revoke-identity %}

### アクティブな SAML セッションの表示と取り消し

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.people %}
{% data reusables.saml.click-person-revoke-session %}
{% data reusables.saml.saml-identity-linked %}
{% data reusables.saml.view-saml-sessions %}
{% data reusables.saml.revoke-saml-session %}

### 認可されたクレデンシャルの表示と取り消し

{% data reusables.saml.about-authorized-credentials %}

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.people %}
{% data reusables.saml.click-person-revoke-credentials %}
{% data reusables.saml.saml-identity-linked %}
{% data reusables.saml.view-authorized-credentials %}
{% data reusables.saml.revoke-authorized-credentials %}
{% data reusables.saml.confirm-revoke-credentials %}

### 参考リンク

- [SAML シングルサインオンを使うアイデンティティおよびアクセス管理について](/articles/about-identity-and-access-management-with-saml-single-sign-on)
- [Enterprise アカウントへのユーザの SAML アクセスの表示および管理](/github/setting-up-and-managing-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise-account)
