---
title: 계정 보안의 모범 사례
shortTitle: Securing accounts
allowTitleToDifferFromFilename: true
intro: 소프트웨어 공급망에 액세스하여 계정을 보호하는 방법에 대한 지침입니다.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Organizations
  - Teams
  - SSH
  - Security
  - Accounts
ms.openlocfilehash: 1a6cfc1d45268ad0cab7bd1109a141224b45c078
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098142'
---
## 이 가이드의 내용

이 가이드에서는 계정 보안을 강화하기 위해 수행할 수 있는 가장 큰 변경 사항에 대해 설명합니다. 각 섹션에서는 보안을 개선하기 위해 프로세스를 변경할 수 있는 변경 내용을 간략하게 설명합니다. 가장 큰 변경 내용이 먼저 나열됩니다.

## 어떤 위험이 있나요?

계정 보안은 공급망 보안의 기본 사항입니다. 공격자가 {% data variables.product.product_name %}에서 계정을 인수할 수 있는 경우 코드 또는 빌드 프로세스를 악의적으로 변경할 수 있습니다. 따라서 첫 번째 목표는 조직{% elsif ghec 또는 ghae %}조직 또는 enterprise{% elsif ghes %}{% 데이터 variables.location.product_location %}{% endif %}의 다른 {% ifversion ghes %}사용자{% else %}멤버{% endif %}의 계정 및 다른 {% ifversion ghes %}의 계정을 인수하기 어렵게 만드는 것입니다.

{% ifversion ghec or ghes %}
## 인증 중앙 집중화
{% endif %}

{% ifversion ghec %} 엔터프라이즈 또는 조직 소유자인 경우 SAML을 사용하여 중앙 집중식 인증을 구성할 수 있습니다. 멤버를 수동으로 추가하거나 제거할 수 있지만 {% data variables.product.product_name %}와 SAML IdP(ID 공급자) 간에 SSO(Single Sign-On) 및 SCIM을 설정하는 것이 더 간단하고 안전합니다. 이렇게 하면 엔터프라이즈의 모든 멤버에 대한 인증 프로세스도 간소화됩니다.

엔터프라이즈 또는 조직 계정에 대한 SAML 인증을 구성할 수 있습니다. SAML을 사용하면 IdP를 통해 {% 데이터 variables.location.product_location %}에서 엔터프라이즈 또는 조직의 구성원의 개인 계정에 대한 액세스 권한을 부여하거나 {% 데이터 variables.product.prodname_emus %}을(를) 사용하여 엔터프라이즈에 속한 계정을 만들고 제어할 수 있습니다. 자세한 내용은 “[엔터프라이즈 인증 정보](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)”를 참조하세요.

SAML 인증을 구성한 후 멤버가 리소스에 대한 액세스를 요청할 때 IdP에서 계속 인식되도록 SSO 흐름으로 전달됩니다. 인식할 수 없는 경우 요청이 거부됩니다.

일부 IdP는 IdP를 변경할 때 {% data variables.product.product_name %}에서 액세스를 자동으로 프로비저닝하거나 프로비전을 해제할 수 있는 SCIM이라는 프로토콜을 지원합니다. SCIM을 사용하면 팀이 성장함에 따라 관리를 간소화할 수 있으며 계정에 대한 액세스를 신속하게 철회할 수 있습니다. SCIM은 {% data variables.product.product_name %}의 개별 조직이나 {% data variables.product.prodname_emus %}를 사용하는 기업에서 사용할 수 있습니다. 자세한 내용은 “[조직에 대한 SCIM 정보](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)”를 참조하세요.
{% endif %}

{% ifversion ghes %} {% 데이터 variables.location.product_location %}의 사이트 관리자인 경우 CAS, SAML 또는 LDAP와 같은 기존 IdP(ID 공급자)와 연결하는 인증 방법을 선택하여 사용자의 로그인 환경을 간소화할 수 있습니다. 즉, {% data variables.product.prodname_dotcom %}에 대한 추가 암호를 더 이상 기억할 필요가 없습니다.

또한 일부 인증 방법은 {% data variables.product.product_name %}에 대한 추가 정보 전달(예: 사용자가 구성원인 그룹 또는 사용자의 암호화 키 동기화)을 지원합니다. 이는 조직이 성장함에 따라 관리를 간소화하는 좋은 방법입니다.

{% data variables.product.product_name %}에 사용할 수 있는 인증 방법에 대한 자세한 내용은 “[엔터프라이즈 인증 정보](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)”를 참조하세요.
{% endif %}

## 2단계 인증 구성

{% ifversion fpt %}개인 계정{% elsif ghes %}개인 계정 또는 {% 데이터 variables.location.product_location %}{% elsif ghec %}계정{% elsif gha의 보안을 개선하는 가장 좋은 방법 {% 데이터 variables.product.product_name %}{% endif %}의 엔터프라이즈는 SAML ID 공급자(IdP){% endif %}에서 2단계 인증(2FA){% ifversion ghae %}을(를) 구성하는 것입니다. 암호 자체는 추측할 수 있거나, 손상된 다른 사이트에서 재사용되거나, 피싱과 같은 소셜 엔지니어링에 의해 손상될 수 있습니다. 2FA를 사용하면 공격자가 암호를 가지고 있더라도 계정이 손상되는 것을 훨씬 더 어렵게 만듭니다.

{% ifversion not ghae %}

{% ifversion ghec %} 엔터프라이즈 소유자인 경우 엔터프라이즈가 소유한 모든 조직에 대해 2FA를 요구하는 정책을 구성할 수 있습니다.
{% endif %}

{% ifversion ghes %} {% 데이터 variables.location.product_location %}의 사이트 관리자인 경우 인스턴스의 모든 사용자에 대해 2FA를 구성할 수 있습니다. {% data variables.product.product_name %}에서 2FA의 가용성은 사용하는 인증 방법에 따라 달라집니다. 자세한 내용은 “[사용자 인증 중앙 집중화](#centralize-user-authentication)”를 참조하세요.
{% endif %}

조직 소유자인 경우 조직의 모든 구성원이 2FA를 사용하도록 {% ifversion fpt %}요구할 수{% else %}요구할 수도{% endif %} 있습니다.

{% ifversion ghec or ghes %}

### 엔터프라이즈 계정 구성

엔터프라이즈 소유자는 {% ifversion ghes %}인스턴스{% elsif ghec %}엔터프라이즈{% endif %}{% ifversion ghes %}의 모든 사용자{% elsif ghec %}의 모든 구성원{% endif %}에 대해 2FA를 요구할 수 있습니다. {% data variables.product.product_name %}에서 2FA 정책을 사용할 수 있는지 여부는 {% ifversion ghes %}사용자{% else %}구성원{% endif %} 인증을 통해 {% ifversion ghes %}인스턴스{% elsif ghec %}기업의 리소스{% endif %}에 액세스하는 방법에 따라 달라집니다.

{% ifversion ghes %}
- CAS 또는 SAML SSO를 사용하여 외부 IdP를 통해 {% 데이터 variables.location.product_location %}에 로그인하는 경우 엔터프라이즈에서 {% 데이터 variables.product.prodname_emus %}을(를) 사용하거나 엔터프라이즈에 SAML 인증이 적용되는 경우 {%- endif %}에서 {% 데이터 variables.product.product_name %}에서 2FA를 구성할 수 없습니다. IdP에 대한 관리 액세스 권한이 있는 사용자가 IdP에 대해 2FA를 구성해야 합니다.

{% ifversion ghes %}

- 외부 LDAP 디렉터리를 통해 {% 데이터 variables.location.product_location %}에 로그인하는 경우 {% 데이터 variables.product.product_name %}에서 엔터프라이즈에 2FA를 요구할 수 있습니다. 디렉터리 외부 사용자에 대한 기본 제공 인증을 허용하는 경우 개별 사용자는 2FA를 사용하도록 설정할 수 있지만 엔터프라이즈에 2FA를 요구할 수는 없습니다.

{% endif %}

자세한 내용은 {% ifversion ghec %}“[엔터프라이즈의 ID 및 액세스 관리 정보](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-identity-and-access-management-for-your-enterprise)” 및 {% endif %}“[엔터프라이즈의 보안 설정에 대한 정책 적용](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#requiring-two-factor-authentication-for-organizations-in-your-enterprise)”을 참조하세요.

{% endif %}

### 개인 계정 구성

{% ifversion ghec or ghes %} {% note %}

**참고**: {% ifversion ghec %}엔터프라이즈 소유자{% elsif ghes %}사이트 관리자{% endif %}이(가) {% endif %}{% data variables.location.product_location %}에서 {% ifversion ghec %}에 대해 구성한 인증 방법에 따라 개인 계정에 대해 2FA를 사용하도록 설정하지 못할 수 있습니다.

{% endnote %} {% endif %}

{% data variables.product.product_name %}는 2FA에 대한 몇 가지 옵션을 지원하며, 그 중 어느 것도 없는 것보다는 낫지만 가장 안전한 옵션은 WebAuthn입니다. WebAuthn에는 하드웨어 보안 키 또는 Windows Hello나 Mac TouchID 등을 통해 지원하는 디바이스가 필요합니다. 2FA의 다른 형식을 피싱하는 것은 어렵지만 가능합니다(예: 누군가가 6자리 일회용 암호를 읽도록 요청하는 경우). 그러나 도메인 범위 지정이 프로토콜에 기본 제공되므로 웹 사이트의 자격 증명이 {% data variables.product.product_name %}에서 로그인 페이지를 가장하는 데 사용되지 않기 때문에 WebAuthn은 피싱할 수 없습니다.

2FA를 설정할 때는 항상 복구 코드를 다운로드하고 둘 이상의 요소를 설정해야 합니다. 이렇게 하면 계정에 대한 액세스가 단일 디바이스에 의존하지 않습니다. 자세한 내용은 GitHub 스토어에서 “[2단계 인증 구성](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication)”, “[2단계 인증 복구 방법 구성](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods)” 및 [GitHub 브랜드 하드웨어 보안 키](https://thegithubshop.com/products/github-branded-yubikey)를 참조하세요.

### 조직 계정 구성

{% ifversion ghec or ghes %} {% note %}

**참고**: {% ifversion ghec %}엔터프라이즈 소유자{% elsif ghes %}사이트 관리자{% endif %}이(가) {% endif %}{% 데이터 variables.location.product_location %}에서 {% ifversion ghec %}에 대해 구성한 인증 방법에 따라 조직에 2FA가 필요하지 않을 수 있습니다.

{% endnote %} {% endif %}

조직 소유자인 경우 2FA를 사용하도록 설정하지 않은 사용자를 확인하여 설정에 도움을 준 다음 조직에 2FA를 요구할 수 있습니다. 해당 프로세스를 안내하려면 다음을 참조하세요.

1. “[조직의 사용자가 2FA를 사용하도록 설정하였는지 여부 보기](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/viewing-whether-users-in-your-organization-have-2fa-enabled)”
2. “[조직의 2단계 인증 요구 대비](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/preparing-to-require-two-factor-authentication-in-your-organization)”
3. “[조직에서 2단계 인증 요구](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization)”

{% endif %}

## SSH 키를 사용하여 {% data variables.product.product_name %}에 연결

{% ifversion ghae %}IdP를 통해{% endif %} 웹 사이트에 로그인하는 것 외에 {% data variables.product.product_name %}와 상호 작용하는 다른 방법이 있습니다. 많은 사람들이 SSH 프라이빗 키를 사용하여 {% data variables.product.prodname_dotcom %}에 푸시하는 코드에 권한을 부여합니다. 자세한 내용은 “[ SSH 정보](/authentication/connecting-to-github-with-ssh/about-ssh)”를 참조하세요.

{% ifversion ghae %}IdP 계정용 암호{% else %}계정 암호{% endif %}와 마찬가지로 공격자가 SSH 프라이빗 키를 가져올 수 있는 경우 사용자를 가장하고 쓰기 액세스 권한이 있는 모든 리포지토리에 악성 코드를 푸시할 수 있습니다. 디스크 드라이브에 SSH 프라이빗 키를 저장하는 경우 암호를 사용하여 보호하는 것이 좋습니다. 자세한 내용은 “[SSH 키 암호 사용](/authentication/connecting-to-github-with-ssh/working-with-ssh-key-passphrases)”을 참조하세요.

또 다른 옵션은 하드웨어 보안 키에 SSH 키를 생성하는 것입니다. 2FA에 사용 중인 것과 동일한 키를 사용할 수 있습니다. 프라이빗 SSH 키는 하드웨어에 유지되며 소프트웨어에서 직접 액세스할 수 없기 때문에 하드웨어 보안 키는 원격으로 손상하기 매우 어렵습니다. 자세한 내용은 “[하드웨어 보안 키에 대한 새 SSH 키 생성](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key-for-a-hardware-security-key)”을 참조하세요.

{% ifversion ghec or ghes or ghae %} 하드웨어 지원 SSH 키는 매우 안전하지만 일부 조직에서는 하드웨어 요구 사항이 작동하지 않을 수 있습니다. 다른 방법은 짧은 기간 동안만 유효한 SSH 키를 사용하는 것이므로 프라이빗 키가 손상된 경우에도 오랫동안 악용되지 않습니다. 이는 사용자 고유의 SSH 인증 기관을 실행하는 개념입니다. 이 방법을 통해 사용자가 인증하는 방법을 높은 수준으로 제어할 수 있지만 SSH 인증 기관을 직접 유지 관리하는 책임도 함께 따릅니다. 자세한 내용은 “[SSH 인증 기관 정보](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities)”를 참조하세요.
{% endif %}

## 다음 단계

- “[엔드투엔드 공급망 보안](/code-security/supply-chain-security/end-to-end-supply-chain/end-to-end-supply-chain-overview)”

- “[공급망 코드 보안의 모범 사례](/code-security/supply-chain-security/end-to-end-supply-chain/securing-code)”

- “[빌드 시스템 보안의 모범 사례](/code-security/supply-chain-security/end-to-end-supply-chain/securing-builds)”
