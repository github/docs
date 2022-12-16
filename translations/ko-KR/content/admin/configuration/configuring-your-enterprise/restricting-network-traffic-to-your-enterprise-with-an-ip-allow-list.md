---
title: IP 허용 목록을 사용하여 엔터프라이즈로 네트워크 트래픽 제한
shortTitle: Restricting network traffic
intro: 엔터프라이즈에 대한 액세스를 제한하고 IP 허용 목록을 사용하여 지정된 IP 주소의 리소스에 대한 액세스만 허용할 수 있습니다.
permissions: Enterprise owners can configure IP allow lists.
miniTocMaxHeadingLevel: 3
versions:
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Access management
  - Enterprise
  - Fundamentals
  - Networking
  - Security
redirect_from:
  - /admin/configuration/restricting-network-traffic-to-your-enterprise
  - /admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise
ms.openlocfilehash: 8511499e723fdeb4a2d24c2fce627bce56ad9777
ms.sourcegitcommit: 9af8891fea10039b3374c76818634e05410e349d
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/06/2022
ms.locfileid: '148191896'
---
## 네트워크 트래픽 제한 정보

기본적으로 권한 있는 사용자는 모든 IP 주소에서 엔터프라이즈에 액세스할 수 있습니다. 특정 IP 주소에 대한 허용 목록을 구성하여 엔터프라이즈 계정 {% endif %}의 조직이 소유한 리소스 {% ifversion ghec %}에 대한 액세스를 제한할 수 있습니다. {% data reusables.identity-and-permissions.ip-allow-lists-example-and-restrictions %}

{% ifversion ghec %}

엔터프라이즈에서 Azure AD 및 OIDC와 함께 {% data variables.product.prodname_emus %}를 사용하는 경우 {% data variables.product.company_short %}의 IP 허용 목록 기능을 사용할지 아니면 IDP(ID 공급자)에 대한 허용 목록 제한을 사용할지 선택할 수 있습니다. 엔터프라이즈에서 Azure 및 OIDC에서 {% data variables.product.prodname_emus %}을(를) 사용하지 않는 경우 {% data variables.product.company_short %}의 허용 목록 기능을 사용할 수 있습니다. 

{% elsif ghae %}

기본적으로 Azure NSG(네트워크 보안 그룹) 규칙은 포트 22, 80, 443, 25에서 모든 인바운드 트래픽을 열어 둡니다. {% data variables.contact.github_support %}에 문의하여 {% data variables.product.product_name %}에 대한 액세스 제한을 구성할 수 있습니다.

Azure NSG를 사용하는 제한 사항은 {% data variables.contact.github_support %}에 액세스하도록 허용해야 하는 IP 주소로 {% data variables.product.product_name %}에 문의하세요. 표준 CIDR(Classless Interdomain Routing) 형식을 사용하여 주소 범위를 지정합니다. {% data variables.contact.github_support %}는 HTTP, SSH, HTTPS 및 SMTP를 통한 네트워크 액세스를 제한하도록 적절한 방화벽 규칙을 구성합니다. 자세한 내용은 “[{% data variables.contact.github_support %}에서 도움받기](/admin/enterprise-support/receiving-help-from-github-support)”를 참조하세요.

{% endif %}

{% ifversion ghec %}

## {% data variables.product.company_short %}의 IP 허용 목록 정보

{% data variables.product.company_short %}의 IP 허용 목록을 사용하여 엔터프라이즈의 조직이 소유한 엔터프라이즈 및 자산에 대한 액세스를 제어할 수 있습니다. 

{% data reusables.identity-and-permissions.ip-allow-lists-cidr-notation %} 

{% data reusables.identity-and-permissions.ip-allow-lists-enable %} {% data reusables.identity-and-permissions.ip-allow-lists-enterprise %} 

## IdP의 허용 목록 정보

Azure AD 및 OIDC에서 {% data variables.product.prodname_emus %}를 사용하는 경우 IdP의 허용 목록을 사용할 수 있습니다.

IdP의 허용 목록을 사용하면 엔터프라이즈의 모든 조직에 대한 {% data variables.product.company_short %} IP 허용 목록 구성이 비활성화되고 IP 허용 목록을 사용하도록 설정하고 관리하기 위해 GraphQL API가 비활성화됩니다. 

기본적으로 IdP는 선택한 IP 허용 목록 구성에 대해 {% data variables.product.company_short %}에 대한 초기 대화형 SAML 또는 OIDC 로그인에서 CAP를 실행합니다.

OIDC CAP는 {% data variables.product.prodname_oauth_app %}에 대한 토큰 또는 사용자를 대신하여 작동하는 {% data variables.product.prodname_github_app %}와 같은 사용자-서버 토큰을 사용하여 API에 대한 요청에만 적용됩니다. {% data variables.product.prodname_github_app %}이(가) 서버-서버 토큰을 사용하는 경우 OIDC CAP는 적용되지 않습니다. 자세한 내용은 "[{% data variables.product.prodname_github_apps %}로 인증](/developers/apps/building-github-apps/authenticating-with-github-apps#authenticating-as-an-installation)" 및 "[IdP 조건부 액세스 정책에 대한 지원 정보](/enterprise-cloud@latest/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-support-for-your-idps-conditional-access-policy#github-apps-and-oauth-apps)"를 참조하세요.

사용자-서버 토큰에 정책을 적용하는 동안 OIDC CAP를 원활하게 사용하려면 엔터프라이즈에서 IdP 정책에 사용하는 각 {% data variables.product.prodname_github_app %}의 모든 IP 범위를 복사해야 합니다. 

## {% data variables.product.company_short %}의 IP 허용 목록 사용

### {% data variables.product.company_short %}의 IP 허용 목록 사용
{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %}
1. "IP 허용 목록"에서 IP 허용 목록을 사용하도록 설정합니다. 
   - OIDC에서 {% data variables.product.prodname_emus %}을(를) 사용하는 경우 드롭다운 메뉴를 선택하고 **GitHub** 를 클릭합니다.
      ![세 가지 IP 허용 목록 구성 옵션을 보여 주는 드롭다운 메뉴의 스크린샷: 사용 안 함, ID 공급자 및 GitHub](/assets/images/help/security/enable-github-ip-allow-list.png)
   
      **IP 허용 목록 사용을** 선택합니다.
      ![IP 주소를 허용하는 확인란의 스크린샷](/assets/images/help/security/enable-ip-allow-list-ghec.png)

   - OIDC에서 {% data variables.product.prodname_emus %}을(를) 사용하지 않는 경우 **IP 허용 목록 사용을** 선택합니다.
     ![IP 주소를 허용하는 확인란의 스크린샷](/assets/images/help/security/enable-ip-allowlist-enterprise-checkbox.png)
1. **저장** 을 클릭합니다.

### 허용된 IP 주소 추가

{% data reusables.identity-and-permissions.about-adding-ip-allow-list-entries %}

{% data reusables.identity-and-permissions.ipv6-allow-lists %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-add-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-add-description %} {% data reusables.identity-and-permissions.ip-allow-lists-add-entry %} {% data reusables.identity-and-permissions.check-ip-address %}

### {% data variables.product.prodname_github_apps %}으로 액세스 허용

{% data reusables.identity-and-permissions.ip-allow-lists-githubapps-enterprise %}

### 허용된 IP 주소 편집

{% data reusables.identity-and-permissions.about-editing-ip-allow-list-entries %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-entry %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-description %}
8. **업데이트** 를 클릭합니다.
{% data reusables.identity-and-permissions.check-ip-address %}

### IP 주소가 허용되는지 확인

{% data reusables.identity-and-permissions.about-checking-ip-address %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.check-ip-address-step %}

### 허용되는 IP 주소 삭제

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-delete-entry %} {% data reusables.identity-and-permissions.ip-allow-lists-confirm-deletion %}

## ID 공급자의 허용 목록 사용

{% note %}

**참고:** IdP의 허용 목록 사용은 Azure AD 및 OIDC를 사용하는 {% data variables.product.prodname_emus %}에 대해서만 지원됩니다. 

{% endnote %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %}
1. "IP 허용 목록"에서 드롭다운을 선택하고 **ID 공급자** 를 클릭합니다.

   ![세 가지 IP 허용 목록 구성 옵션을 보여 주는 드롭다운 메뉴의 스크린샷: 사용 안 함, ID 공급자 및 GitHub](/assets/images/help/security/enable-identity-provider-ip-allow-list.png)
1. 필요에 따라 설치된 {% data variables.product.company_short %} 및 {% data variables.product.prodname_oauth_apps %}이(가) IP 주소에서 엔터프라이즈에 액세스하도록 허용하려면 **애플리케이션에 대한 IdP 검사 건너뛰기를** 선택합니다.

   ![IP 주소를 허용하는 확인란](/assets/images/help/security/ip-allow-list-skip-idp-check.png)
1. **저장** 을 클릭합니다.

{% endif %}

{% ifversion ghae %}

## 허용된 IP 주소 사용

{% data reusables.identity-and-permissions.about-enabling-allowed-ip-addresses %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. “IP 허용 목록”에서 **IP 허용 목록 사용** 을 선택합니다.
  ![IP 주소를 허용하는 확인란](/assets/images/help/security/enable-ip-allowlist-enterprise-checkbox.png)
4. **저장** 을 클릭합니다.

## 허용된 IP 주소 추가

{% data reusables.identity-and-permissions.about-adding-ip-allow-list-entries %} {% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-add-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-add-description %} {% data reusables.identity-and-permissions.ip-allow-lists-add-entry %} {% data reusables.identity-and-permissions.check-ip-address %}

## {% data variables.product.prodname_github_apps %}으로 액세스 허용

{% data reusables.identity-and-permissions.ip-allow-lists-githubapps-enterprise %}

## 허용된 IP 주소 편집

{% data reusables.identity-and-permissions.about-editing-ip-allow-list-entries %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-entry %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-description %}
8. **업데이트** 를 클릭합니다.
{% data reusables.identity-and-permissions.check-ip-address %}

## IP 주소가 허용되는지 확인

{% data reusables.identity-and-permissions.about-checking-ip-address %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.check-ip-address-step %}

## 허용되는 IP 주소 삭제

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-delete-entry %} {% data reusables.identity-and-permissions.ip-allow-lists-confirm-deletion %}

{% endif %}

## IP 허용 목록으로 {% data variables.product.prodname_actions %} 사용

{% data reusables.actions.ip-allow-list-self-hosted-runners %}
