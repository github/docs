---
title: 엔터프라이즈를 새 ID 공급자 또는 테넌트로 마이그레이션
shortTitle: Migrate to new IdP or tenant
intro: 엔터프라이즈를 다른 IdP(ID 공급자) 또는 Azure AD 테넌트에 마이그레이션할 수 있습니다.
product: '{% data reusables.gated-features.emus %}'
versions:
  feature: idp-tenant-migration
topics:
  - Access management
  - Accounts
  - Administrator
  - Authentication
  - Enterprise
  - SSO
ms.openlocfilehash: 78c33ccdb62bddf36b8435cc83fd7545be21d13b
ms.sourcegitcommit: 37dad7113bae5f057310ab9db39bb56326cce3df
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/22/2022
ms.locfileid: '148104721'
---
## IdP와 테넌트 간의 마이그레이션 정보

{% 데이터 variables.product.prodname_emus %}을(를) 사용하는 동안 엔터프라이즈를 새 IdP 또는 Azure AD 테넌트로 마이그레이션해야 할 수 있습니다. 예를 들어 테스트 환경에서 프로덕션 환경으로 마이그레이션할 준비가 되었을 수 있습니다.

{% 데이터 variables.enterprise.prodname_emu_enterprise %}을(를) 새 IdP 또는 테넌트에 마이그레이션하기 전에 정규화된 SCIM `userName` 특성의 값이 새 환경의 {% 데이터 variables.enterprise.prodname_managed_users %}에 대해 동일하게 유지되는지 여부를 결정합니다. 사용자 이름 정규화에 대한 자세한 내용은 "[외부 인증에 대한 사용자 이름 고려 사항](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)"을 참조하세요.

마이그레이션 후 정규화된 SCIM `userName` 값이 동일하게 유지되는 경우 직접 마이그레이션을 완료할 수 있습니다. 지침은 "[정규화된 SCIM `userName` 값이 동일하게 유지되는 경우 마이그레이션"을](#migrating-when-the-normalized-scim-username-values-will-remain-the-same) 참조하세요.

마이그레이션 후에 정규화된 SCIM `userName` 값이 변경되면 {% 데이터 variables.product.company_short %}이(가) 마이그레이션에 도움이 됩니다. 자세한 내용은 "[정규화된 SCIM `userName` 값이 변경될 때 마이그레이션"을 참조하세요](#migrating-when-the-normalized-scim-username-values-will-change).

## 정규화된 SCIM `userName` 값이 동일하게 유지되는 경우 마이그레이션

새 IdP 또는 테넌트로 마이그레이션하려면 기존 SAML 구성을 편집할 수 없습니다. 대신 엔터프라이즈 계정에 대해 SAML을 완전히 비활성화한 다음 새 IdP 또는 테넌트에 대한 새 SAML 및 SCIM 구성을 만들어야 합니다.

{% warning %}

**경고:** 마이그레이션이 완료될 때까지 원래 IdP 또는 테넌트에서 {% 데이터 variables.product.prodname_emus %}에 대한 애플리케이션에서 사용자 또는 그룹을 제거하지 마세요.

{% endwarning %}

1. 엔터프라이즈에 대한 Single Sign-On 복구 코드가 아직 없는 경우 지금 코드를 다운로드합니다. 자세한 내용은 "[엔터프라이즈 계정의 Single Sign-On 복구 코드 다운로드](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/downloading-your-enterprise-accounts-single-sign-on-recovery-codes)"를 참조하세요.
1. 현재 IdP에서 {% 데이터 variables.product.prodname_emus %}에 대한 애플리케이션의 프로비저닝을 비활성화합니다.
    -  Azure AD 사용하는 경우 애플리케이션의 "프로비전" 탭으로 이동한 다음 **프로비전 중지를** 클릭합니다.
    - Okta를 사용하는 경우 애플리케이션의 "프로비전" 탭으로 이동하여 **통합** 탭을 클릭한 다음 **편집** 을 클릭합니다. **API 통합 사용** 선택을 취소합니다.
1. 복구 코드를 사용하여 설치 사용자로 {% 데이터 variables.product.prodname_dotcom_the_website %}에 로그인합니다. 사용자 이름은 엔터프라이즈의 짧은 코드 접미사입니다 `_admin`. 설치 사용자에 대한 자세한 내용은 "[{% 데이터 정보 variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users#getting-started-with-enterprise-managed-users)"를 참조하세요.

1. {% 데이터 variables.enterprise.prodname_emu_enterprise %}에 대한 SAML을 비활성화합니다.
   -  프로필에서 **엔터프라이즈를** 클릭한 다음 적절한 엔터프라이즈를 클릭합니다.
   - {% octicon "gear" aria-label="The Settings gear" %} **Settings** 를 클릭한 다음 **인증 보안을** 클릭합니다. 
   - "SAML Single Sign-On"에서 **SAML 인증 필요** 를 선택 취소하고 **저장** 을 클릭합니다. 
   
1. 엔터프라이즈의 모든 사용자가 일시 중단된 것으로 표시될 때까지 기다립니다.

1. 아직 설치 사용자로 로그인되어 있는 동안 새 {% 데이터 variables.product.prodname_emus %} 애플리케이션을 사용하여 새 IdP 또는 테넌트에 대해 SAML 및 SCIM을 구성합니다.
   
   새 애플리케이션에 대한 프로비저닝을 구성하면 {% 데이터 variables.enterprise.prodname_managed_users %}이(가) 사용되지 않으며 개발자가 기존 계정에 다시 로그인할 수 있습니다.
   
   기본적으로 이 프로세스는 Azure AD 최대 40분이 걸릴 수 있습니다. 개별 사용자에 대한 프로세스를 신속하게 처리하려면 {% 데이터 variables.product.prodname_emus %}에 대한 애플리케이션의 "프로비전" 탭에서 **요청 시** 프로비전 단추를 클릭합니다.

## 정규화된 SCIM `userName` 값이 변경될 때 마이그레이션

정규화된 SCIM `userName` 값이 변경되면 {% 데이터 variables.product.company_short %}은(는) 마이그레이션을 위해 새 엔터프라이즈 계정을 프로비전해야 합니다. 영업 [팀에 문의](https://github.com/enterprise/contact)하여 도움을 받으세요.
