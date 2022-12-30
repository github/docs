---
title: Enterprise のアイデンティティおよびアクセス管理のトラブルシューティング
shortTitle: Troubleshoot IAM
intro: エンタープライズの ID とアクセス管理に関する一般的な issue と解決方法を確認します。
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - Security
  - SSO
  - Troubleshooting
ms.openlocfilehash: 7b8c42a1012e91268f4315d99934a4f38c52a529
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107534'
---
## ユーザー名の競合

{% ifversion ghec %}エンタープライズが {% data variables.product.prodname_emus %} を使っている場合、{% endif %}{% data variables.product.prodname_dotcom %} 上に各個人のユーザー名を作成するために ID プロバイダー (IdP) から提供された識別子は、{% data variables.product.product_name %} によって正規化されます。 複数のアカウントが同じ {% data variables.product.prodname_dotcom %} のユーザー名に正規化される場合、最初のユーザー アカウントのみが作成されます。 詳細については、「[外部認証におけるユーザー名の考慮事項](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)」を参照してください。

{% ifversion ghec %}
## 認証構成を切り替えるときのエラー

SAML SSO 構成を組織からエンタープライズ アカウントに変更するときや、{% data variables.product.prodname_emus %} の SAML から OIDC に移行するときなど、異なる認証構成間で切り替えるときに問題が発生する場合は、変更に関するベスト プラクティスに従っていることを確認します。

- 「[組織からエンタープライズ アカウントへの SAML 構成の切り替え](/admin/identity-and-access-management/using-saml-for-enterprise-iam/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)」
- 「[SAML から OIDC への移行](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/migrating-from-saml-to-oidc)」
- 「[エンタープライズを新しい ID プロバイダーまたはテナントに移行する](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/migrating-your-enterprise-to-a-new-identity-provider-or-tenant)」

## SSO を使用できない場合のエンタープライズへのアクセス

構成エラーまたは ID プロバイダー (IdP) の問題によって SSO を使用できない場合は、回復コードを使用してエンタープライズにアクセスできます。 詳細については、「[ID プロバイダーが使用できない場合の Enterprise アカウントへのアクセス](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/accessing-your-enterprise-account-if-your-identity-provider-is-unavailable)」を参照してください。
{% endif %}

## SAML 認証エラー

ユーザーが SAML の認証を受けようとしたときにエラーが発生した場合は、「[SAML 認証のトラブルシューティング](/admin/identity-and-access-management/using-saml-for-enterprise-iam/troubleshooting-saml-authentication)」を参照してください。

{% ifversion ghec %}
## 参考資料

- 「[組織の ID とアクセス管理のトラブルシューティング](/organizations/managing-saml-single-sign-on-for-your-organization/troubleshooting-identity-and-access-management-for-your-organization)」{% endif %}
