---
title: Enterprise Managed Users용 OIDC 구성
shortTitle: OIDC for managed users
intro: 'OIDC(OpenID Connect) SSO(Single Sign-On)를 구성하여 {% data variables.product.prodname_dotcom %}에서 엔터프라이즈 계정에 대한 액세스를 자동으로 관리하고 IdP의 CAP(조건부 액세스 정책)에 대한 지원을 활성화할 수 있습니다.'
product: '{% data reusables.gated-features.emus %}'
versions:
  feature: oidc-for-emu
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
ms.openlocfilehash: caa557cb976fb60a59572e1623db6be87efeee54
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/22/2022
ms.locfileid: '148179991'
---
{% data reusables.enterprise-accounts.azure-emu-support-oidc %}

## Enterprise Managed Users용 OIDC 정보

{% data variables.product.prodname_emus %}를 사용하면 엔터프라이즈가 IdP(ID 공급자)를 사용하여 모든 구성원을 인증합니다. OIDC(OpenID Connect)를 사용하여 {% data variables.enterprise.prodname_emu_enterprise %}에 대한 인증을 관리할 수 있습니다. OIDC SSO를 사용하도록 설정하는 것은 {% data variables.product.prodname_dotcom %} 및 IdP에서 관리하는 인증서를 사용하는 원클릭 설정 프로세스입니다.

{% data reusables.enterprise-accounts.emu-cap-validates %} 자세한 내용은 "[IdP의 조건부 액세스 정책에 대한 지원 정보](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-support-for-your-idps-conditional-access-policy)"를 참조하세요.

IdP에서 {% data variables.enterprise.prodname_managed_user %}에 대해 발급된 ID 토큰의 수명 정책 속성을 변경하여 세션의 수명과 {% data variables.product.prodname_dotcom variables.enterprise.prodname_managed_user %}이(가) IdP를 다시 인증해야 하는 빈도를 조정할 수 있습니다. 기본 수명은 1시간입니다. 자세한 내용은 Azure AD 설명서의 "[Microsoft ID 플랫폼의 구성 가능한 토큰 수명](https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-configurable-token-lifetimes)"을 참조하세요.

{% data reusables.enterprise_user_management. SAML-OIDC-migration-for-EMU %}

{% data reusables.enterprise-accounts.oidc-gei-warning %}

## ID 공급자 지원

Azure Active Directory(Azure AD)를 사용하는 고객은 OIDC에 대한 지원을 사용할 수 있습니다. 

각 Azure AD 테넌트는 하나의 OIDC와 {% data variables.product.prodname_emus %} 간 통합만 지원할 수 있습니다. {% data variables.product.prodname_dotcom %}에서 둘 이상의 엔터프라이즈에 Azure AD를 연결하려면 SAML을 대신 사용합니다. 자세한 내용은 “[{% data variables.product.prodname_emus %}에 대한 SAML Single Sign-On 구성](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-saml-single-sign-on-for-enterprise-managed-users)”을 참조하세요.

## Enterprise Managed Users용 OIDC 구성

1. 사용자 이름 **@<em>SHORT-CODE</em>_admin** 을 사용하여 새 엔터프라이즈의 설치 사용자로 {% data variables.product.prodname_dotcom_the_website %}에 로그인합니다.
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. **OIDC Single Sign-On 필요** 를 선택합니다.  
   !["OIDC Single Sign-On 필요" 확인란을 보여 주는 스크린샷](/assets/images/help/enterprises/require-oidc.png)
1. 설정을 계속하고 Azure AD 리디렉션하려면 **저장** 을 클릭합니다.
{% data reusables.enterprise-accounts.emu-azure-admin-consent %} {% data reusables.enterprise-accounts.download-recovery-codes %}

## 프로비전을 사용하도록 설정

OIDC SSO를 사용하도록 설정한 후 프로비저닝을 사용하도록 설정합니다. 자세한 내용은 “[Enterprise Managed Users에 대한 SCIM 프로비저닝 구성](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users)”을 참조하세요.
