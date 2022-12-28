---
title: Azure AD を使用して Enterprise の認証とプロビジョニングを設定する
shortTitle: Configure with Azure AD
intro: 'Azure Active Directory (Azure AD) のテナントを ID プロバイダー (IdP) として使って、{% data variables.location.product_location %} の認証とユーザー プロビジョニングを一元管理できます。'
permissions: 'Enterprise owners can configure authentication and provisioning for an enterprise on {% data variables.product.product_name %}.'
versions:
  ghae: '*'
  feature: scim-for-ghes
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
redirect_from:
  - /admin/authentication/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad
  - /admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad
  - /admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad
ms.openlocfilehash: c0291aab00df0139b0b54eda8ec34b6e20deb19f
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192682'
---
## Azure AD を使用した認証とユーザプロビジョニングについて

Azure Active Directory (Azure AD) は、ユーザアカウントと Web アプリケーションへのアクセスを一元管理できる Microsoft のサービスです。 詳細については、Microsoft Docs の「[Azure Active Directory とは](https://docs.microsoft.com/azure/active-directory/fundamentals/active-directory-whatis)」を参照してください。

{% data reusables.saml.idp-saml-and-scim-explanation %}

{% data reusables.scim.ghes-beta-note %}

Azure AD を使って {% data variables.product.product_name %} に対して SAML SSO と SCIM を有効にした後、Azure AD テナントから以下を実行できます。

* Azure AD の {% data variables.product.product_name %} アプリケーションをユーザー アカウントに割り当て、{% data variables.product.product_name %} 上に対応するユーザー アカウントを自動的に作成して、アクセスを許可します。
* Azure AD 上のユーザー アカウントへの {% data variables.product.product_name %} アプリケーションの割り当てを解除し、{% data variables.product.product_name %} の対応するユーザー アカウントを非アクティブ化します。
* {% data variables.product.product_name %} アプリケーションを Azure AD の IdP グループに割り当てて、IdP グループのすべてのメンバーに対する {% data variables.product.product_name %} 上のユーザー アカウントを自動的に作成して、アクセスを許可します。 さらに、Team とその親 Organization に接続するために、{% data variables.product.product_name %} で IdP グループを利用できます。
* IdP グループから {% data variables.product.product_name %} アプリケーションの割り当てを解除すると、その IdP グループを介してのみアクセスしていたすべての IdP ユーザーの {% data variables.product.product_name %} ユーザー アカウントが非アクティブ化され、親 Organization からユーザーが削除されます。 IdP グループは {% data variables.product.product_name %} のどの Team からも切断されます

{% data variables.location.product_location %} での Enterprise の ID とアクセスの管理について詳しくは、「[Enterprise の ID とアクセスを管理する](/admin/authentication/managing-identity-and-access-for-your-enterprise)」をご覧ください。

## 前提条件

- Azure AD を使用して {% data variables.product.product_name %} の認証とユーザプロビジョニングを設定するには、Azure AD アカウントとテナントが必要です。 詳細については、[Azure AD Web サイト](https://azure.microsoft.com/free/active-directory)および Microsoft Docs の「[クイックスタート: Azure Active Directory テナントを作成する](https://docs.microsoft.com/azure/active-directory/develop/quickstart-create-new-tenant)」を参照してください。

{%- ifversion scim-for-ghes %}
- {% data reusables.saml.ghes-you-must-configure-saml-sso %}{%- endif %}

- {% data reusables.saml.create-a-machine-user %}

## Azure AD を使用して認証とユーザプロビジョニングを設定する

{% ifversion ghae %}

Azure AD テナントで、{% data variables.product.product_name %} 用のアプリケーションを追加してから、プロビジョニングを構成します。

1. Azure AD で、{% data variables.enterprise.ae_azure_ad_app_link %} をテナントに追加し、シングル サインオンを構成します。 詳しくは、Microsoft Docs の[チュートリアル: Azure Active Directory シングル サインオン (SSO) と {% data variables.product.product_name %} の統合](https://docs.microsoft.com/azure/active-directory/saas-apps/github-ae-tutorial)に関する記事をご覧ください。

1. {% data variables.product.product_name %} で、Azure AD テナントの詳細を入力します。

    - {% data reusables.saml.ae-enable-saml-sso-during-bootstrapping %}

    - 別の IdP を使って {% data variables.location.product_location %} の SAML SSO を既に設定しており、その代わりに Azure AD を使う場合は、構成を編集できます。 詳細については、「[エンタープライズ向けの SAML シングル サインオンの構成](/admin/authentication/configuring-saml-single-sign-on-for-your-enterprise#editing-the-saml-sso-configuration)」を参照してください。

1. {% data variables.product.product_name %} でユーザプロビジョニングを有効化し、Azure AD でユーザプロビジョニングを設定します。 詳細については、「[エンタープライズ向けのユーザー プロビジョニングの構成](/admin/authentication/configuring-user-provisioning-for-your-enterprise#enabling-user-provisioning-for-your-enterprise)」を参照してください。

{% elsif scim-for-ghes %}

1. {% data variables.location.product_location %} 用に SAML SSO を構成します。 詳細については、「[エンタープライズ向けの SAML シングル サインオンの構成](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise#configuring-saml-sso)」を参照してください。
1. インスタンス用の SCIM を使用したユーザーのプロビジョニングを構成する 詳しくは、「[Enterprise 用の SCIM を使用したユーザーのプロビジョニングを構成する](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-user-provisioning-with-scim-for-your-enterprise)」を参照してください。

{% endif %}

## エンタープライズ所有者の管理 

エンタープライズ所有者にユーザーを指定する手順は、SAML だけを使用するか、SCIM も使用するかによって変わります。 Enterprise 所有者の詳細については、「[Enterprise におけるロール](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)」を参照してください。

プロビジョニングを構成した場合、{% data variables.product.product_name %} でユーザーにエンタープライズ所有権を付与するには、Azure AD のユーザーにエンタープライズ所有者ロールを割り当てます。

プロビジョニングを構成しなかった場合は、{% data variables.product.product_name %} でユーザーにエンタープライズ所有権を付与するには、IdP のユーザー アカウントに対して、SAML アサーションの `administrator` 属性を、`true` の値を指定して含めます。 Azure AD からの SAML 要求に `administrator` 属性を含める方法の詳細については、Microsoft Docs の「[エンタープライズ アプリケーションの SAML トークンで発行された要求のカスタマイズ](https://docs.microsoft.com/azure/active-directory/develop/active-directory-saml-claims-customization)」を参照してください。
