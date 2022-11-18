---
title: Azure AD를 사용하여 엔터프라이즈에 대한 인증 및 프로비저닝 구성
shortTitle: Configure with Azure AD
intro: 'Azure Active Directory(Azure AD)의 테넌트를 IdP(ID 공급자)로 사용하여 {% data variables.location.product_location %}에 대한 인증 및 사용자 프로비저닝을 중앙에서 관리할 수 있습니다.'
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
ms.openlocfilehash: bfd93814b11066d6da2d87a2e1f0a8bd5461e93f
ms.sourcegitcommit: ced661bdffebd0f96f6f76db109fbe31983448ba
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/16/2022
ms.locfileid: '148167062'
---
## Azure AD를 사용한 인증 및 사용자 프로비저닝 정보

Azure AD(Azure Active Directory)는 사용자 계정을 중앙에서 관리하고 웹 애플리케이션에 액세스할 수 있는 Microsoft의 서비스입니다. 자세한 내용은 Microsoft Docs의 [Azure Active Directory란?](https://docs.microsoft.com/azure/active-directory/fundamentals/active-directory-whatis)을 참조하세요.

{% data variables.product.product_name %}에 대한 ID 및 액세스를 관리하려면 Azure AD 테넌트를 인증을 위한 SAML IdP로 사용할 수 있습니다. 계정을 자동으로 프로비전하고 SCIM을 사용하여 멤버 자격에 액세스하도록 Azure AD 구성할 수도 있습니다. 이를 통해 {% data variables.product.product_name %} 사용자를 만들고 Azure AD 테넌트에서 팀 및 조직 멤버 자격을 관리할 수 있습니다.

{% data reusables.scim.ghes-beta-note %}

Azure AD 사용하여 {% data variables.product.product_name %}에 SAML SSO 및 SCIM을 사용하도록 설정한 후 Azure AD 테넌트에서 다음을 수행할 수 있습니다.

* 사용자 계정에 Azure AD {% data variables.product.product_name %} 애플리케이션을 할당하여 {% data variables.product.product_name %}에서 해당 사용자 계정에 대한 액세스 권한을 자동으로 만들고 부여합니다.
* {% data variables.product.product_name %} 애플리케이션을 Azure AD 사용자 계정에 할당을 취소하여 {% data variables.product.product_name %}에서 해당 사용자 계정을 비활성화합니다.
* Azure AD IdP 그룹에 {% data variables.product.product_name %} 애플리케이션을 할당하여 IdP 그룹의 모든 멤버에 대해 {% data variables.product.product_name %}의 사용자 계정에 대한 액세스 권한을 자동으로 만들고 부여합니다. 또한 IdP 그룹은 {% data variables.product.product_name %}에서 팀과 부모 조직에 연결할 수 있습니다.
* IdP 그룹에서 {% data variables.product.product_name %} 애플리케이션의 할당을 취소하여 해당 IdP 그룹을 통해서만 액세스한 모든 IdP 사용자의 {% data variables.product.product_name %} 사용자 계정을 비활성화하고 부모 조직에서 사용자를 제거합니다. {% data variables.product.product_name %}의 모든 팀에서 IdP 그룹의 연결이 해제됩니다.

{% data variables.location.product_location %}에서 엔터프라이즈의 ID 및 액세스 관리에 대한 자세한 내용은 "[엔터프라이즈의 ID 및 액세스 관리](/admin/authentication/managing-identity-and-access-for-your-enterprise)"를 참조하세요. IdP 그룹과 팀을 동기화하는 방법에 대한 자세한 내용은 “[ID 공급자 그룹과 팀 동기화](/organizations/organizing-members-into-teams/synchronizing-a-team-with-an-identity-provider-group)”를 참조하세요.

## 필수 조건

- Azure AD를 사용하여 {% data variables.product.product_name %}에 대한 인증 및 사용자 프로비저닝을 구성하려면 Azure AD 계정 및 테넌트가 있어야 합니다. 자세한 내용은 [Azure AD 웹 사이트](https://azure.microsoft.com/free/active-directory) 및 Microsoft Docs의 [빠른 시작: Azure Active Directory 테넌트 만들기](https://docs.microsoft.com/azure/active-directory/develop/quickstart-create-new-tenant)를 참조하세요.

{%- ifversion scim-for-ghes %}
- {% data reusables.saml.ghes-you-must-configure-saml-sso %} {%- endif %}

- {% data reusables.saml.create-a-machine-user %}

## Azure AD를 사용한 인증 및 사용자 프로비저닝 구성

Azure AD 테넌트에서 {% data variables.product.product_name %}에 대한 애플리케이션을 추가한 다음 프로비저닝을 구성합니다.

{% ifversion ghae %}

1. Azure AD 테넌트에서 {% data variables.enterprise.ae_azure_ad_app_link %}를 추가하고 Single Sign-On을 구성합니다. 자세한 내용은 [자습서: Microsoft Docs {% data variables.product.product_name %}와 Azure Active Directory SSO(Single Sign-On) 통합](https://docs.microsoft.com/azure/active-directory/saas-apps/github-ae-tutorial)을 참조하세요.

1. {% data variables.product.product_name %}에서 Azure AD 테넌트 세부 정보를 입력합니다.

    - {% data reusables.saml.ae-enable-saml-sso-during-bootstrapping %}

    - 다른 IdP를 사용하여 {% data variables.location.product_location %}에 대한 SAML SSO를 이미 구성했으며 대신 Azure AD 사용하려는 경우 구성을 편집할 수 있습니다. 자세한 내용은 “[엔터프라이즈에 대한 SAML Single Sign-On 구성](/admin/authentication/configuring-saml-single-sign-on-for-your-enterprise#editing-the-saml-sso-configuration)”을 참조하세요.

1. {% data variables.product.product_name %}에서 사용자 프로비저닝을 사용하도록 설정하고 Azure AD에서 사용자 프로비저닝을 구성합니다. 자세한 내용은 “[엔터프라이즈에 대한 사용자 프로비저닝 구성](/admin/authentication/configuring-user-provisioning-for-your-enterprise#enabling-user-provisioning-for-your-enterprise)”을 참조하세요.

{% elsif scim-for-ghes %}

1. Azure AD 테넌트 왼쪽 사이드바에서 **프로비전을** 클릭합니다.

1. "테넌트 URL"에서 {% data variables.location.product_location %}에서 SCIM에 대한 전체 엔드포인트 URL을 입력합니다. 자세한 내용은 REST API 설명서의 "[SCIM](/rest/enterprise-admin/scim#scim-endpoint-urls)"을 참조하세요.

1. "비밀 토큰"에서 "[엔터프라이즈용 SCIM을 사용하여 사용자 프로비저닝 구성](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-user-provisioning-with-scim-for-your-enterprise#enabling-user-provisioning-for-your-enterprise)"의 4단계에서 만든 {% data variables.product.pat_v1 %}를 입력합니다.

1. Azure AD {% data variables.location.product_location %}에 성공적으로 연결하려면 **연결 테스트를** 클릭합니다.

1. 연결이 성공하면 페이지 맨 위에서 **저장** 을 클릭합니다.

{% endif %}

1. Azure AD {% data variables.product.product_name %}에 대한 엔터프라이즈 소유자를 할당합니다. 수행해야 하는 프로세스는 프로비저닝을 구성했는지 여부에 따라 달라집니다. 엔터프라이즈 소유자에 대한 자세한 내용은 “[엔터프라이즈 내 역할](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-owners)”을 참조하세요.
   - 프로비저닝을 구성한 경우 {% data variables.product.product_name %}에서 사용자 엔터프라이즈 소유권을 부여하려면 Azure AD 사용자에게 엔터프라이즈 소유자 역할을 할당합니다.
   - 프로비저닝을 구성하지 않은 경우 {% data variables.product.product_name %}에서 사용자 엔터프라이즈 소유권을 부여하려면 IdP의 사용자 계정에 대한 SAML 어설션에 특성을 값`true`과 함께 포함합니다`administrator`. Azure AD SAML 클레임에 특성을 포함하는 `administrator` 방법에 대한 자세한 내용은 [방법: Microsoft Docs 엔터프라이즈 애플리케이션에 대한 SAML 토큰에서 발급된 클레임 사용자 지정](https://docs.microsoft.com/azure/active-directory/develop/active-directory-saml-claims-customization)을 참조하세요.
