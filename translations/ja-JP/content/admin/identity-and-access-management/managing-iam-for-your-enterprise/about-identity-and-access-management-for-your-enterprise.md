---
title: Enterprise のアイデンティティおよびアクセス管理について
shortTitle: About identity and access management
intro: You can use SAML single sign-on (SSO) and System for Cross-domain Identity Management (SCIM) to centrally manage access {% ifversion ghec %}to organizations owned by your enterprise on {% data variables.product.prodname_dotcom_the_website %}{% endif %}{% ifversion ghae %}to {% data variables.product.product_location %}{% endif %}.
versions:
  ghec: '*'
  ghae: '*'
type: overview
topics:
- Accounts
- Access management
- Authentication
- Enterprise
- Identity
redirect_from:
- /admin/authentication/about-identity-and-access-management-for-your-enterprise
- /github/setting-up-and-managing-your-enterprise/about-identity-and-access-management-for-your-enterprise-account
- /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/about-identity-and-access-management-for-your-enterprise-account
- /github/setting-up-and-managing-your-enterprise/about-user-provisioning-for-organizations-in-your-enterprise-account
- /github/setting-up-and-managing-your-enterprise/configuring-saml-single-sign-on-and-scim-for-your-enterprise-account-using-okta
- /admin/authentication/managing-identity-and-access-for-your-enterprise/about-identity-and-access-management-for-your-enterprise
ms.openlocfilehash: c8d5a143d64d8fc9f759f7c574d1a5b8339de2d5
ms.sourcegitcommit: ea9a577cff7ec16ded25ed57417c83ec04816428
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 04/07/2022
ms.locfileid: "141519581"
---
## <a name="about-identity-and-access-management-for-your-enterprise"></a>Enterprise のアイデンティティおよびアクセス管理について

{% ifversion ghec %}

{% data reusables.saml.dotcom-saml-explanation %} {% data reusables.saml.about-saml-enterprise-accounts %} 詳細については、「[エンタープライズ向けの SAML シングル サインオンの構成](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)」を参照してください。

{% data reusables.enterprise-accounts.about-recovery-codes %} 詳細については、「[企業の復旧コードの管理](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise)」を参照してください。

SAML SSO を有効にした後、使用する IdP によっては、追加のアイデンティおよびアクセス管理機能を有効にできる場合があります。 {% data reusables.scim.enterprise-account-scim %}

IdP として Azure AD を使用している場合は、Team 同期を使用して、各 Organization 内の Team メンバーシップを管理できます。 {% data reusables.identity-and-permissions.about-team-sync %} 詳細については、[エンタープライズ アカウントでの組織のチーム同期の管理](/admin/authentication/managing-identity-and-access-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise)に関するページを参照してください。

{% data reusables.saml.switching-from-org-to-enterprise %} 詳細については、「[組織からエンタープライズ アカウントへの SAML 構成の切り替え](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)」を参照してください。

## <a name="about--data-variablesproductprodname_emus-"></a>{% data variables.product.prodname_emus %} について

{% data reusables.enterprise-accounts.emu-short-summary %}

SAML シングル サインオンのための {% data variables.product.prodname_emus %} の構成とユーザー プロビジョニングには、{% data variables.product.prodname_managed_users %} を使用していない企業の場合とは異なるプロセスがあります。 企業で {% data variables.product.prodname_emus %} を使用している場合は、「[エンタープライズ マネージド ユーザーの SAML シングル サインオンの構成](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-saml-single-sign-on-for-enterprise-managed-users)」を参照してください。

## <a name="supported-idps"></a>サポートされている IdP

以下の IdP はテスト済みで公式にサポートされています。 SAML SSO の場合、SAML 2.0 標準を実装するすべてのアイデンティティプロバイダに対して限定的なサポートが提供されています。 詳細については、OASIS の Web サイトの [SAML Wiki](https://wiki.oasis-open.org/security) を参照してください。

IdP | SAML | Team の同期 | 
--- | :--: | :-------: |
Active Directory フェデレーション サービス (AD FS) | {% octicon "check-circle-fill" aria-label= "The check icon" %}  | |
Azure Active Directory (Azure AD) | {% octicon "check-circle-fill" aria-label="The check icon" %}  | {% octicon "check-circle-fill" aria-label="The check icon" %} |
Okta | {% octicon "check-circle-fill" aria-label="The check icon" %}  | |
OneLogin | {% octicon "check-circle-fill" aria-label="The check icon" %}  | |
PingOne | {% octicon "check-circle-fill" aria-label="The check icon" %}  | |
Shibboleth | {% octicon "check-circle-fill" aria-label="The check icon" %}  | |

{% elsif ghae %}

{% data reusables.saml.ae-uses-saml-sso %} {% data reusables.saml.ae-enable-saml-sso-during-bootstrapping %}

ID プロバイダー (IdP) で {% data variables.product.product_name %} 用にアプリケーションを構成した後は、IdP でユーザとグループにアプリケーションを割り当てることによって、{% data variables.product.product_location %} へのアクセスをプロビジョニングできます。 {% data variables.product.product_name %} の SAML SSO の詳細については、「[エンタープライズ向けの SAML シングル サインオンの構成](/admin/authentication/configuring-saml-single-sign-on-for-your-enterprise)」を参照してください。

{% data reusables.scim.after-you-configure-saml %} 詳細については、「[エンタープライズ向けのユーザー プロビジョニングの構成](/admin/authentication/configuring-user-provisioning-for-your-enterprise)」を参照してください。

特定の IdP で {% data variables.product.product_location %} 用に認証とユーザー プロビジョニングの両方を構成する方法については、「[ID プロバイダーでの認証とプロビジョニングの構成](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider)」を参照してください。

## <a name="supported-idps"></a>サポートされている IdP

次の IdP は、{% data variables.product.prodname_ghe_managed %} との統合が正式にサポートされています。

{% data reusables.saml.okta-ae-sso-beta %}

{% data reusables.github-ae.saml-idp-table %}

## <a name="mapping--data-variablesproductprodname_ghe_managed--teams-to-okta-groups"></a>{% data variables.product.prodname_ghe_managed %} チームの Okta グループへのマッピング

IdP として Okta を使用する場合は、Okta グループを {% data variables.product.prodname_ghe_managed %} のチームにマップできます。 詳細については、[Okta グループのチームへのマッピング](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)に関する記事を参照してください。

{% endif %}

## <a name="further-reading"></a>参考資料

- OASIS の Web サイトの [SAML Wiki](https://wiki.oasis-open.org/security)
- IETF の Web サイトの[クロスドメイン ID 管理のためのシステム: プロトコル (RFC 7644)](https://tools.ietf.org/html/rfc7644) に関する説明{% ifversion ghae %}
- [企業へのネットワーク トラフィックの制限](/admin/configuration/restricting-network-traffic-to-your-enterprise){% endif %}
