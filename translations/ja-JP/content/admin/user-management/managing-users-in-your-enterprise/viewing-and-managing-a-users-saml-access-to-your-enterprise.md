---
title: Enterprise へのユーザの SAML アクセスの表示および管理
intro: Enterprise メンバーのリンクされたアイデンティティ、アクティブなセッション、認可されたクレデンシャルの表示と取り消しが可能です。
permissions: Enterprise owners can view and manage a member's SAML access to an organization.
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/viewing-and-managing-a-users-saml-access-to-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise
versions:
  ghec: '*'
topics:
  - Enterprise
shortTitle: View & manage SAML access
ms.openlocfilehash: 25c706f5aff79f65adf4968546a9a8123794f583
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145116213'
---
## Enterprise アカウントへの SAML アクセスについて

Enterprise アカウントに対して SAML シングル サインオンを有効にすると、各 Enterprise メンバーは ID プロバイダー (IdP) の外部 ID を、{% data variables.product.product_location %} の既存のアカウントにリンクできます。 {% data reusables.saml.about-saml-access-enterprise-account %}

Enterprise で {% data variables.product.prodname_emus %} を使用している場合、メンバーは IdP を介してプロビジョニングされたアカウントを使用します。 {% data variables.product.prodname_managed_users_caps %} は、{% data variables.product.product_name %} の既存のユーザー アカウントを使用しません。 詳細については、「[{% data variables.product.prodname_emus %} について](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)」を参照してください。

## リンクされているアイデンティティの表示と取り消し

{% data reusables.saml.about-linked-identities %}

Enterprise で {% data variables.product.prodname_emus %} を使用している場合、{% data variables.product.product_name %} の Enterprise からユーザー アカウントをプロビジョニング解除したり削除したりすることはできなくなります。 Enterprise の {% data variables.product.prodname_managed_users %} に対して行う必要がある変更は、IdP を通じて行う必要があります。

{% data reusables.identity-and-permissions.revoking-identity-team-sync %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %} {% data reusables.saml.click-person-revoke-identity %} {% data reusables.saml.saml-identity-linked %} {% data reusables.saml.view-sso-identity %} {% data reusables.saml.revoke-sso-identity %} {% data reusables.saml.confirm-revoke-identity %}

## アクティブな SAML セッションの表示と取り消し

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %} {% data reusables.saml.click-person-revoke-session %} {% data reusables.saml.saml-identity-linked %} {% data reusables.saml.view-saml-sessions %} {% data reusables.saml.revoke-saml-session %}

## 認可されたクレデンシャルの表示と取り消し

{% data reusables.saml.about-authorized-credentials %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %} {% data reusables.saml.click-person-revoke-credentials %} {% data reusables.saml.saml-identity-linked %} {% data reusables.saml.view-authorized-credentials %} {% data reusables.saml.revoke-authorized-credentials %} {% data reusables.saml.confirm-revoke-credentials %}

## 参考資料

- 「[Organization へのメンバーの SAML アクセスの表示と管理](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization)」
