---
title: SCIM について
intro: System for Cross-domain Identity Management (SCIM) を使うと、管理者はユーザの識別情報のシステム間での交換を自動化できます。
redirect_from:
  - /articles/about-scim
  - /github/setting-up-and-managing-organizations-and-teams/about-scim
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
---

{% data reusables.enterprise-accounts.emu-scim-note %}

[SAML SSO](/articles/about-identity-and-access-management-with-saml-single-sign-on) を Organization 内で使うと、Organization のメンバーの {% data variables.product.product_name %}へのアクセスの追加、管理、削除のための SCIM を実装できます。 たとえば、管理者は Organization のメンバーのデプロビジョニングに SCIM を使い、自動的にメンバーを Organization から削除できます。

SCIM を実装せずに SAML SSO を使った場合、自動のプロビジョニング解除は行われません。 Organization のメンバーのアクセスが ldP から削除された後、セッションの有効期限が切れても、そのメンバーは Organization から自動的には削除されません。 認証済みのトークンにより、セッションが期限切れになった後も Organization へのアクセスが許可されます。 アクセスを削除するには、Organization の管理者は手動で認証済みのトークンを Organization から削除するか、その削除を SCIM で自動化します。

Organization の {% data variables.product.product_name %} の SCIM API と連携できるアイデンティティプロバイダとして、以下のものがあります。 詳しい情報については{% ifversion ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} APIドキュメンテーション中の[SCIM](/rest/reference/scim)を参照してください。
- Azure AD
- Okta
- OneLogin

{% note %}

**注釈:** {% data reusables.scim.nameid-and-username-must-match %}

{% endnote %}

{% data reusables.scim.changes-should-come-from-idp %}

{% data reusables.scim.enterprise-account-scim %}

## 参考リンク

- [Organization へのメンバーの SAML アクセスの表示と管理](/github/setting-up-and-managing-organizations-and-teams//viewing-and-managing-a-members-saml-access-to-your-organization)
