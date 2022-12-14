---
title: 엔터프라이즈에서 보안 설정에 대한 정책 적용
intro: 엔터프라이즈 조직 내에서 보안 설정을 관리하는 정책을 적용하거나 각 조직에서 정책을 설정하도록 허용할 수 있습니다.
permissions: Enterprise owners can enforce policies for security settings in an enterprise.
miniTocMaxHeadingLevel: 3
redirect_from:
  - /articles/enforcing-security-settings-for-organizations-in-your-business-account
  - /articles/enforcing-security-settings-for-organizations-in-your-enterprise-account
  - /articles/enforcing-security-settings-in-your-enterprise-account
  - /github/articles/managing-allowed-ip-addresses-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-security-settings-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/enforcing-security-settings-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-security-settings-in-your-enterprise-account
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Security
shortTitle: Policies for security settings
ms.openlocfilehash: 7a383ed586d084a7e2562a5927dd198caca65037
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/28/2022
ms.locfileid: '148183966'
---
## 엔터프라이즈의 보안 설정에 대한 정책 정보

{% data variables.product.product_name %}에서 엔터프라이즈가 소유한 조직의 보안 설정을 제어하는 정책을 적용할 수 있습니다. 기본적으로 조직 소유자는 보안 설정을 관리할 수 있습니다. 

{% ifversion ghec or ghes %}

## 엔터프라이즈의 조직에 대한 2단계 인증 요구

Enterprise 소유자는 엔터프라이즈가 소유한 모든 조직의 조직 멤버, 청구 관리자 및 외부 협력자가 2단계 인증을 사용하여 사용자 계정을 보호하도록 요구할 수 있습니다.

엔터프라이즈가 소유한 모든 조직에 대해 2FA를 요구하기 전 먼저 자신의 계정에 대한 2단계 인증을 사용하도록 설정해야 합니다. 2FA에 대한 자세한 내용은 “[2FA(2단계 인증)로 계정 보호](/articles/securing-your-account-with-two-factor-authentication-2fa/)”를 참조하세요.

{% warning %}

**경고:**

- 엔터프라이즈에 대해 2단계 인증이 필요한 경우 2FA를 사용하지 않는 엔터프라이즈 소유의 모든 조직에서 구성원, 외부 협력자 및 청구 관리자(봇 계정 포함)가 조직에서 제거되고 해당 리포지토리에 대한 액세스 권한이 손실됩니다. 또한 조직의 프라이빗 리포지토리 포크에 액세스할 수 없게 됩니다. 조직에서 제거된 후 3개월 이내에 계정에 대한 2단계 인증을 사용하도록 설정하는 경우, 액세스 권한 및 설정을 복구할 수 있습니다. 자세한 내용은 “[조직의 이전 멤버 복원](/articles/reinstating-a-former-member-of-your-organization)”을 참조하세요.
- 필요한 2단계 인증을 사용하도록 설정한 후에는 계정에 대한 2FA를 사용하지 않도록 설정하는 엔터프라이즈 소유 조직의 조직 소유자, 멤버, 청구 관리자 또는 외부 협력자는 조직에서 자동으로 제거됩니다.
- 2단계 인증이 필요한 엔터프라이즈의 단독 소유자인 경우, 엔터프라이즈에 필요한 2단계 인증을 사용하지 않고 계정에 대한 2FA를 사용하지 않도록 설정할 수 없습니다.

{% endwarning %}

2단계 인증을 사용하기 전에 조직 구성원, 외부 협력자 및 청구 관리자에게 알리고 계정에 대한 2FA를 설정하도록 요청하는 것이 좋습니다. 조직 소유자는 구성원 및 외부 협력자가 각 조직의 피플 페이지에서 이미 2FA를 사용하고 있는지 확인할 수 있습니다. 자세한 내용은 “[조직의 사용자가 2FA를 사용할 수 있는지 확인](/articles/viewing-whether-users-in-your-organization-have-2fa-enabled)”을 참조하세요.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
4. “2단계 인증”에서 설정 변경에 대한 정보를 검토합니다. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. “2단계 인증”에서 **비즈니스의 모든 조직에 대해 2단계 인증 필요** 를 선택한 다음 **저장** 을 클릭합니다.
  ![2단계 인증을 요구하는 확인란](/assets/images/help/business-accounts/require-2fa-checkbox.png)
6. 메시지가 표시되면 엔터프라이즈가 소유한 조직에서 제거될 구성원 및 외부 협력자 정보를 읽습니다. 변경을 확인하려면 엔터프라이즈 이름을 입력한 다음 **구성원 제거 및 2단계 인증 필요** 를 클릭합니다.
  ![2단계 적용 확인 상자](/assets/images/help/business-accounts/confirm-require-2fa.png)
7. 필요에 따라 엔터프라이즈가 소유한 조직에서 구성원 또는 외부 협력자가 제거된 경우 이전 권한 및 조직에 대한 액세스 권한을 복구하도록 초대를 보내는 것이 좋습니다. 각 사용자는 초대를 수락하기 전에 2단계 인증을 사용하도록 설정해야 합니다.

{% endif %}

## 엔터프라이즈에 대한 SSH 인증 기관 관리

SSH CA(인증 기관)를 사용하여 엔터프라이즈가 소유한 조직의 구성원이 사용자가 제공하는 SSH 인증서를 통해 해당 조직의 리포지토리에 액세스할 수 있도록 허용할 수 있습니다. {% data reusables.organizations.can-require-ssh-cert %} 자세한 내용은 “[SSH 인증 기관 정보](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities)”를 참조하세요.

{% data reusables.organizations.add-extension-to-cert %}

### SSH 인증 기관 추가

엔터프라이즈에 SSH 인증서가 필요한 경우 엔터프라이즈 구성원은 SSH를 통해 Git 작업에 특별한 URL을 사용해야 합니다. 자세한 내용은 “[SSH 인증 기관 정보](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities#about-ssh-urls-with-ssh-certificates)”를 참조하세요.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.organizations.new-ssh-ca %} {% data reusables.organizations.require-ssh-cert %}

### SSH 인증 기관 삭제

CA 삭제는 실행을 취소할 수 없습니다. 나중에 동일한 CA를 사용하려면 CA를 다시 업로드해야 합니다.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.organizations.delete-ssh-ca %}

{% ifversion sso-redirect %}
## 인증되지 않은 사용자에 대한 SSO 관리

{% data reusables.enterprise-managed.sso-redirect-release-phase %}

엔터프라이즈에서 {% data variables.product.prodname_emus %}을(를) 사용하는 경우 인증되지 않은 사용자가 엔터프라이즈 리소스에 액세스하려고 할 때 표시되는 항목을 선택할 수 있습니다. {% data variables.product.prodname_emus %}에 대한 자세한 내용은 “[{% data variables.product.prodname_emus %} 정보](/enterprise-cloud@latest/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users)”를 참조하세요.

기본적으로 인증되지 않은 사용자가 엔터프라이즈에 액세스하려고 할 때 프라이빗 리소스의 존재를 숨기려면 {% data variables.product.company_short %}에 404 오류가 표시됩니다.

개발자의 혼동을 방지하기 위해 IdP(ID 공급자)를 통해 사용자가 SSO(Single Sign-On)로 자동으로 리디렉션되도록 이 동작을 변경할 수 있습니다. 자동 리디렉션을 사용하도록 설정하면 엔터프라이즈 리소스의 URL을 방문하는 모든 사용자가 리소스가 존재하는지 확인할 수 있습니다. 그러나 IdP를 사용하여 인증한 후에 적절한 액세스 권한이 있는 경우에만 리소스를 볼 수 있습니다.

{% note %}

**참고:** 사용자가 엔터프라이즈 리소스에 액세스하려고 할 때 개인 계정에 로그인하면 자동으로 로그아웃되고 SSO로 리디렉션되어 {% data variables.enterprise.prodname_managed_user %}에 로그인됩니다. 자세한 내용은 “[여러 계정 관리](/enterprise-cloud@latest/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-personal-account/managing-multiple-accounts)”를 참조하세요.

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. "Single Sign-On 설정"에서 **로그인할 사용자 자동 리디렉션을** 선택하거나 선택 취소합니다.

   ![{% endif %} 로그인](/assets/images/enterprise/security/Enterprise-Redirect-Users-To-Sign-In-Checkbox.png) 하도록 사용자를 자동으로 리디렉션하는 확인란

## 추가 정보

- "[엔터프라이즈의 ID 및 액세스 관리](/admin/authentication/managing-identity-and-access-for-your-enterprise/about-identity-and-access-management-for-your-enterprise) 정보" {%- ifversion ghec %}
- "[엔터프라이즈에 대한 규정 준수 보고서 액세스](/admin/overview/accessing-compliance-reports-for-your-enterprise)" {%- endif %} {%- ifversion ghec or ghae %}
- "[IP 허용 목록을 사용하여 IP 허용 목록으로 네트워크 트래픽 제한](/admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list)" {%- endif %}
