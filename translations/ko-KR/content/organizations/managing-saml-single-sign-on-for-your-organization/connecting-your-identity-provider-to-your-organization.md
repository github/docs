---
title: ID 공급자를 조직에 연결
intro: 'SAML Single Sign-On 및 SCIM을 사용하려면 {% data variables.product.product_name %}에서 IdP(ID 공급자)를 조직에 연결해야 합니다.'
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
ms.openlocfilehash: 61ae7b13afa01938c316e9ee785f7393d520a0c4
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098028'
---
## 조직에 대한 IdP 연결 정보

{% data variables.product.product_name %} 조직에 대해 SAML SSO를 활성화할 때 IdP(ID 공급자)를 조직에 연결합니다. 자세한 내용은 “[조직에서 SAML Single Sign-On을 사용하도록 설정하고 테스트](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization)”를 참조하세요.

{% data reusables.saml.ghec-only %}

IdP의 설명서에서 IdP에 대한 SAML 및 SCIM 구현 세부 정보를 찾을 수 있습니다.
- AD FS(Active Directory Federation Services) [SAML](https://docs.microsoft.com/windows-server/identity/active-directory-federation-services)
- Azure AD(Azure Active Directory) [SAML](https://docs.microsoft.com/azure/active-directory/active-directory-saas-github-tutorial) 및 [SCIM](https://docs.microsoft.com/azure/active-directory/active-directory-saas-github-provisioning-tutorial)
- OKTA [SAML](http://saml-doc.okta.com/SAML_Docs/How-to-Configure-SAML-2.0-for-Github-com.html) 및 [SCIM](http://developer.okta.com/standards/SCIM/)
- OneLogin [SAML](https://onelogin.service-now.com/support?id=kb_article&sys_id=2929ddcfdbdc5700d5505eea4b9619c6) 및 [SCIM](https://onelogin.service-now.com/support?id=kb_article&sys_id=5aa91d03db109700d5505eea4b96197e)
- PingOne [SAML](https://support.pingidentity.com/s/marketplace-integration/a7i1W0000004ID3QAM/github-connector)
- Shibboleth [SAML](https://shibboleth.atlassian.net/wiki/spaces/IDP4/overview)

{% note %}

**참고:** SCIM에 대해 지원되는 {% data variables.product.product_name %} ID 공급자는 Azure AD, OKTA 및 OneLogin입니다. SCIM에 대한 자세한 내용은 "[조직에 대한 SCIM 정보](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)"를 참조하세요.

{% data reusables.scim.enterprise-account-scim %} 

{% endnote %}

## SAML 메타데이터

조직의 SAML 메타데이터에 대한 자세한 내용은 "[SAML 구성 참조](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference)"를 참조하세요.
