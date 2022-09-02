---
title: OrganizationのSCIMについて
intro: System for Cross-domain Identity Management (SCIM) を使うと、管理者はユーザの識別情報のシステム間での交換を自動化できます。
redirect_from:
  - /articles/about-scim
  - /github/setting-up-and-managing-organizations-and-teams/about-scim
  - /organizations/managing-saml-single-sign-on-for-your-organization/about-scim
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
---

## OrganizationのSCIMについて

Organizationが[SAML SSO](/articles/about-identity-and-access-management-with-saml-single-sign-on)を使っているなら、Organizationのメンバーの{% data variables.product.product_name %}へのアクセスの追加、管理、削除のためのSCIMを実装できます。 たとえば、管理者は Organization のメンバーのデプロビジョニングに SCIM を使い、自動的にメンバーを Organization から削除できます。

{% data reusables.saml.ghec-only %}

{% data reusables.scim.enterprise-account-scim %}

SCIM を実装せずに SAML SSO を使った場合、自動のプロビジョニング解除は行われません。 Organization のメンバーのアクセスが ldP から削除された後、セッションの有効期限が切れても、そのメンバーは Organization から自動的には削除されません。 認証済みのトークンにより、セッションが期限切れになった後も Organization へのアクセスが許可されます。 SCIMが使用されていないなら、メンバーのアクセスを完全に削除するためには、OrganizationのオーナーはメンバーのアクセスをIdPで削除し、手動で{% data variables.product.prodname_dotcom %}上のOrganizationからそのメンバーを削除しなければなりません。

{% data reusables.scim.changes-should-come-from-idp %}

## サポートされているアイデンティティプロバイダ

以下のアイデンティティプロバイダ（IdP）は、Organizationのための{% data variables.product.product_name %} SCIM APIと互換性があります。 詳しい情報については{% ifversion ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} APIドキュメンテーション中の[SCIM](/rest/scim)を参照してください。
- Azure AD
- Okta
- OneLogin

## OrganizationのためのSCIMの設定について

{% data reusables.scim.dedicated-configuration-account %}

{% data variables.product.prodname_oauth_app %}を認可する前に、アクティブなSAMLセッションを持っていなければなりません。 詳しい情報については「[SAML シングルサインオンでの認証について](/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on#about-oauth-apps-github-apps-and-saml-sso)」を参照してください。

{% note %}

**注釈:** {% data reusables.scim.nameid-and-username-must-match %}

{% endnote %}

## 参考リンク

- [Organization へのメンバーの SAML アクセスの表示と管理](/github/setting-up-and-managing-organizations-and-teams//viewing-and-managing-a-members-saml-access-to-your-organization)
