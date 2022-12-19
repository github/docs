---
title: エンタープライズ IAM の SAML について
shortTitle: About SAML for IAM
intro: 'SAML シングル サインオン (SSO) {% ifversion ghae %}とクロスドメイン ID 管理システム (SCIM) {% endif %}を使用して、{% ifversion ghec %}{% data variables.product.prodname_dotcom_the_website %} でエンタープライズによって所有される組織への{% elsif ghae %}{% data variables.location.product_location %} への{% elsif ghes %}{% data variables.location.product_location %} への{% endif %}アクセスを一元的に管理できます。'
versions:
  ghec: '*'
  ghes: '*'
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
  - /admin/identity-and-access-management/managing-iam-for-your-enterprise/about-identity-and-access-management-for-your-enterprise
  - /admin/identity-and-access-management/using-saml-for-enterprise-iam/about-identity-and-access-management-for-your-enterprise
ms.openlocfilehash: ea9db1269f389bdc126c8693ffeeb4b11dc42f99
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192690'
---
## {% ifversion ghec or ghes %}{% data variables.location.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %}{% ifversion ghec or ghae %} 上のエンタープライズ{% endif %}の SAML SSO について

{% ifversion ghec %}

Enterprise メンバーが {% data variables.location.product_location %} 上で自分のユーザー アカウントを管理する場合、エンタープライズまたは Organization の追加のアクセス制限として SAML 認証を構成することができます。 {% data reusables.saml.dotcom-saml-explanation %} 

{% data reusables.saml.saml-accounts %}

{% data reusables.saml.about-saml-enterprise-accounts %} 詳しくは、「[エンタープライズ向けの SAML シングル サインオンの構成](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)」をご覧ください。

または、{% data variables.product.prodname_emus %} を使用して Enterprise メンバーのアカウントをプロビジョニングおよび管理することができます。 SAML SSO または {% data variables.product.prodname_emus %} がエンタープライズにとって適切かどうかを判断するには、「[エンタープライズの認証について](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#identifying-the-best-authentication-method-for-your-enterprise)」を参照してください。

{% data reusables.enterprise-accounts.about-recovery-codes %} 詳細については、「[企業の復旧コードの管理](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise)」を参照してください。

SAML SSO を有効にした後、使用する IdP によっては、追加のアイデンティおよびアクセス管理機能を有効にできる場合があります。 

IdP として Azure AD を使用している場合は、Team 同期を使用して、各 Organization 内の Team メンバーシップを管理できます。 {% data reusables.identity-and-permissions.about-team-sync %}

{% note %}

**注:** {% data variables.product.prodname_emus %} を使用する目的でアカウントが作成されたのでなければ、エンタープライズ アカウントに SCIM を構成できません。 詳細については、「[{% data variables.product.prodname_emus %} について](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users)」を参照してください。

{% endnote %}

{% data reusables.saml.switching-from-org-to-enterprise %} 詳細については、「[組織からエンタープライズ アカウントへの SAML 構成の切り替え](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)」を参照してください。

{% elsif ghes %}

SAML SSO を使用すると、ユーザーは ID 管理のために外部システムを介して {% data variables.location.product_location %} に認証およびアクセスすることができます。

SAML は、認証と認可のための XML ベースの標準です。 {% data variables.location.product_location %} の SAML を構成する場合、認証用の外部システムは ID プロバイダー (IdP) と呼ばれます。 インスタンスは SAML サービス プロバイダー (SP) として機能します。 SAML 標準の詳細については、Wikipedia の「[Security Assertion Markup Language](https://en.wikipedia.org/wiki/Security_Assertion_Markup_Language)」を参照してください。

{% elsif ghae %}

{% data reusables.saml.ae-uses-saml-sso %} {% data reusables.saml.ae-enable-saml-sso-during-bootstrapping %}

ID プロバイダー (IdP) で {% data variables.product.product_name %} 用にアプリケーションを構成した後は、IdP でユーザーとグループをアプリケーションに割り当てることによって、{% data variables.location.product_location %} へのアクセスをプロビジョニングできます。 {% data variables.product.product_name %} の SAML SSO の詳細については、「[エンタープライズ向けの SAML シングル サインオンの構成](/admin/authentication/configuring-saml-single-sign-on-for-your-enterprise)」を参照してください。

{% endif %}

{% ifversion ghes < 3.6 %}

アプリケーションを割り当てあるいは割り当て解除したときに、IdP は{% data variables.product.product_name %} と自動的に通信はしません。 誰かが初めて {% data variables.product.product_name %} に移動し、あなたの IdP を使って認証してサインインしたときに、{% data variables.product.product_name %} により、SAML Just-in-Time (JIT) プロビジョニングを使ってユーザー アカウントが作成されます。 {% data variables.product.product_name %} へのアクセスを付与するとき、場合によっては、手動でユーザーに通知する必要があります。

{% endif %}

{% ifversion ghes %}

{% data reusables.enterprise_user_management.external_auth_disables_2fa %}

{% data reusables.enterprise_user_management.built-in-authentication %}

{% endif %}

{% data variables.product.product_name %} で SAML SSO を構成する方法に関する詳細については、「[Enterprise 向けの SAML シングルサインオンを設定する](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise)」を参照してください。 {% ifversion ghec or ghae or scim-for-ghes %} 認証と {% data variables.location.product_location %} の {% ifversion ghae or ghes %}ユーザー{% endif %} プロビジョニングの両方を特定の IdP で構成する方法については、「[Enterprise IAM での SAML の使用](/admin/identity-and-access-management/using-saml-for-enterprise-iam)」の個人 IdP に関する記事を参照してください。 "{% endif %}

{% ifversion ghae or scim-for-ghes %}

## ユーザー アカウントの作成について

{% data reusables.scim.after-you-configure-saml %} 詳細については、「[エンタープライズ向けのユーザー プロビジョニングの構成](/admin/authentication/configuring-user-provisioning-for-your-enterprise)」を参照してください。

{% data reusables.saml.saml-ghes-account-revocation %}

{% endif %}

## サポートされている IdP

{% ifversion ghec %}

以下の IdP はテスト済みで公式にサポートされています。 SAML SSO の場合、SAML 2.0 標準を実装するすべてのアイデンティティプロバイダに対して限定的なサポートが提供されています。 詳細については、OASIS の Web サイトの [SAML Wiki](https://wiki.oasis-open.org/security) を参照してください。

IdP | SAML | Team の同期 | 
--- | :--: | :-------: |
Active Directory フェデレーション サービス (AD FS) | {% octicon "check-circle-fill" aria-label= "The check icon" %} | |
Azure Active Directory (Azure AD) | {% octicon "check-circle-fill" aria-label="The check icon" %} | {% octicon "check-circle-fill" aria-label="The check icon" %} |
Okta | {% octicon "check-circle-fill" aria-label="The check icon" %} | |
OneLogin | {% octicon "check-circle-fill" aria-label="The check icon" %} | |
PingOne | {% octicon "check-circle-fill" aria-label="The check icon" %} | |
Shibboleth | {% octicon "check-circle-fill" aria-label="The check icon" %} | |

{% elsif ghes %}

{% data reusables.saml.saml-supported-idps %}

{% ifversion ghes > 3.3 %}

IdP で暗号化されたアサーションがサポートされている場合は、認証プロセス中にセキュリティを強化するために、{% data variables.product.product_name %} で暗号化されたアサーションを構成できます。

{% endif %}

{% data reusables.saml.saml-single-logout-not-supported %}

{% elsif ghae %}

次の IdP は、{% data variables.product.prodname_ghe_managed %} との統合が正式にサポートされています。

{% data reusables.saml.okta-ae-sso-beta %}

{% data reusables.github-ae.saml-idp-table %}

{% endif %}

{% ifversion ghae %}

## {% data variables.product.prodname_ghe_managed %} チームの Okta グループへのマッピング

IdP として Okta を使う場合は、Okta グループを {% data variables.product.product_name %} 上のチームにマップできます。 詳細については、[Okta グループのチームへのマッピング](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)に関する記事を参照してください。

{% endif %}

## 参考資料

- OASIS Web サイトの [SAML Wiki](https://wiki.oasis-open.org/security) {%- ifversion ghae or scim-for-ghes %}
- IETF の Web サイトの[クロスドメイン ID 管理のためのシステム: プロトコル (RFC 7644)](https://tools.ietf.org/html/rfc7644) に関する説明 {%- endif %} {%- ifversion ghae %}
- [IP 許可リストを使用してエンタープライズへのネットワーク トラフィックを制限する](/admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list){%- endif %}
