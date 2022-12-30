---
title: Organization の SCIM について
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
ms.openlocfilehash: 8071909478d52770f2e8107df31e61b7111f73c6
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145068291'
---
## Organization の SCIM について

Organization で [SAML SSO](/articles/about-identity-and-access-management-with-saml-single-sign-on) を使う場合は、SCIM を実装して、Organization メンバーの {% data variables.product.product_name %} へのアクセス権を追加、管理、削除できます。 たとえば、管理者は Organization のメンバーのデプロビジョニングに SCIM を使い、自動的にメンバーを Organization から削除できます。

{% data reusables.saml.ghec-only %}

{% data reusables.scim.enterprise-account-scim %}

SCIM を実装せずに SAML SSO を使用すると、自動プロビジョニング解除は行われません。 Organization メンバーのアクセス権が IdP から削除された後にセッションの有効期限が切れた場合、Organization から自動的に削除されることはありません。 認可済みのトークンにより、セッションが期限切れになった後でも Organization へのアクセス権が付与されます。 SCIM が使わていない場合、メンバーのアクセス権を完全に削除するには、Organization のオーナーが IdP 内のメンバーのアクセス権を削除し、{% data variables.product.prodname_dotcom %} で Organization からメンバーを手動で削除する必要があります。

{% data reusables.scim.changes-should-come-from-idp %}

## サポートされているアイデンティティプロバイダ

次の ID プロバイダー (IdP) は、Organization の {% data variables.product.product_name %} の SCIM API と互換性があります。 詳しい情報については、{% ifversion ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API ドキュメントの「[SCIM](/rest/scim)」を参照してください。
- Azure AD
- Okta
- OneLogin

## Organization の SCIM 構成について

{% data reusables.scim.dedicated-configuration-account %}

{% data variables.product.prodname_oauth_app %} を認証する前に、アクティブな SAML セッションが必要です。 詳細については、「[SAML のシングル サインオンでの認証について](/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on#about-oauth-apps-github-apps-and-saml-sso)」を参照してください。

{% note %}

**注:** {% data reusables.scim.nameid-and-username-must-match %}

{% endnote %} 

## 参考資料

- 「[Organization へのメンバーの SAML アクセスの表示と管理](/github/setting-up-and-managing-organizations-and-teams//viewing-and-managing-a-members-saml-access-to-your-organization)」
