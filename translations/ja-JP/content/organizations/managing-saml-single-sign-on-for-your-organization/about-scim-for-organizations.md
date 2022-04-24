---
title: About SCIM for organizations
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

## About SCIM for organizations

If your organization uses [SAML SSO](/articles/about-identity-and-access-management-with-saml-single-sign-on), you can implement SCIM to add, manage, and remove organization members' access to {% data variables.product.product_name %}. たとえば、管理者は Organization のメンバーのデプロビジョニングに SCIM を使い、自動的にメンバーを Organization から削除できます。

{% data reusables.saml.ghec-only %}

{% data reusables.scim.enterprise-account-scim %}

SCIM を実装せずに SAML SSO を使った場合、自動のプロビジョニング解除は行われません。 Organization のメンバーのアクセスが ldP から削除された後、セッションの有効期限が切れても、そのメンバーは Organization から自動的には削除されません。 認証済みのトークンにより、セッションが期限切れになった後も Organization へのアクセスが許可されます。 If SCIM is not used, to fully remove a member's access, an organization owner must remove the member's access in the IdP and manually remove the member from the organization on {% data variables.product.prodname_dotcom %}.

{% data reusables.scim.changes-should-come-from-idp %}

## サポートされているアイデンティティプロバイダ

These identity providers (IdPs) are compatible with the {% data variables.product.product_name %} SCIM API for organizations. 詳しい情報については{% ifversion ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} APIドキュメンテーション中の[SCIM](/rest/scim)を参照してください。
- Azure AD
- Okta
- OneLogin

## About SCIM configuration for organizations

{% data reusables.scim.dedicated-configuration-account %}

Before you authorize the {% data variables.product.prodname_oauth_app %}, you must have an active SAML session. 詳しい情報については「[SAML シングルサインオンでの認証について](/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on#about-oauth-apps-github-apps-and-saml-sso)」を参照してください。

{% note %}

**注釈:** {% data reusables.scim.nameid-and-username-must-match %}

{% endnote %}

## 参考リンク

- [Organization へのメンバーの SAML アクセスの表示と管理](/github/setting-up-and-managing-organizations-and-teams//viewing-and-managing-a-members-saml-access-to-your-organization)
