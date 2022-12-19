---
title: アイデンティティプロバイダを Organization に接続する
intro: 'SAML シングル サインオンおよび SCIM を使うには、ご利用の ID プロバイダー (IdP) を、{% data variables.product.product_name %} の Organization に接続する必要があります。'
redirect_from:
  - /articles/connecting-your-identity-provider-to-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/connecting-your-identity-provider-to-your-organization
versions:
  ghec: '*'
topics:
  - Authentication
  - Organizations
  - Teams
shortTitle: Connect an IdP
ms.openlocfilehash: fe20822b6f3381b6cdc6dbf844c84a93d8d4ea0f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145125670'
---
## Organization への IdP の接続について

{% data variables.product.product_name %} OrganizationでSAML SSOを有効化すると、アイデンティティプロバイダ（IdP）をOrganizationに接続することになります。 詳細については、「[Organization 向けの SAML シングル サインオンを有効化してテストする](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization)」を参照してください。

{% data reusables.saml.ghec-only %}

IdPのSAML及びSCIMの実装の詳細は、IdPのドキュメンテーションにあります。
- Active Directory フェデレーション サービス (AD FS) [SAML](https://docs.microsoft.com/windows-server/identity/active-directory-federation-services)
- Azure Active Directory (Azure AD) [SAML](https://docs.microsoft.com/azure/active-directory/active-directory-saas-github-tutorial) と [SCIM](https://docs.microsoft.com/azure/active-directory/active-directory-saas-github-provisioning-tutorial)
- Okta [SAML](http://saml-doc.okta.com/SAML_Docs/How-to-Configure-SAML-2.0-for-Github-com.html) と [SCIM](http://developer.okta.com/standards/SCIM/)
- OneLogin [SAML](https://onelogin.service-now.com/support?id=kb_article&sys_id=2929ddcfdbdc5700d5505eea4b9619c6) と [SCIM](https://onelogin.service-now.com/support?id=kb_article&sys_id=5aa91d03db109700d5505eea4b96197e)
- PingOne [SAML](https://support.pingidentity.com/s/marketplace-integration/a7i1W0000004ID3QAM/github-connector)
- Shibboleth [SAML](https://wiki.shibboleth.net/confluence/display/IDP30/Home)

{% note %}

**注:** {% data variables.product.product_name %} でサポートされる SCIM 用の ID プロバイダーは、Azure AD、Okta、OneLogin です。 SCIM について詳しくは、「[Organization の SCIM について](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)」をご覧ください。

{% data reusables.scim.enterprise-account-scim %} 

{% endnote %}

## SAMLのメタデータ

Organization の SAML メタデータについて詳しくは、「[SAML 構成リファレンス](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference)」をご覧ください。
