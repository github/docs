---
title: 엔터프라이즈에 대한 네트워크 트래픽 제한
shortTitle: Restricting network traffic
intro: IP 허용 목록을 사용하여 엔터프라이즈에 대한 액세스를 지정된 IP 주소에서의 연결로 제한할 수 있습니다.
versions:
  ghae: '*'
type: how_to
topics:
- Access management
- Enterprise
- Fundamentals
- Networking
- Security
redirect_from:
- /admin/configuration/restricting-network-traffic-to-your-enterprise
ms.openlocfilehash: 67c7067362ac94e5cbc64be4704ba0ec3f6606e0
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/09/2022
ms.locfileid: "147682854"
---
## IP 허용 목록 정보

기본적으로 권한 있는 사용자는 모든 IP 주소에서 엔터프라이즈에 액세스할 수 있습니다. 엔터프라이즈 소유자는 특정 IP 주소의 허용 목록을 구성하여 엔터프라이즈 계정의 조직이 소유한 자산에 대한 액세스를 제한할 수 있습니다. {% data reusables.identity-and-permissions.ip-allow-lists-example-and-restrictions %}

{% data reusables.identity-and-permissions.ip-allow-lists-cidr-notation %}

{% data reusables.identity-and-permissions.ip-allow-lists-enable %} {% data reusables.identity-and-permissions.ip-allow-lists-enterprise %} 

개별 조직에 대해 허용된 IP 주소를 구성할 수도 있습니다. 자세한 내용은 “[조직의 허용된 IP 주소 관리](/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization)”를 참조하세요.

기본적으로 Azure NSG(네트워크 보안 그룹) 규칙은 포트 22, 80, 443, 25에서 모든 인바운드 트래픽을 열어 둡니다. 엔터프라이즈 소유자는 {% data variables.contact.github_support %}에 문의하여 인스턴스에 대한 액세스 제한을 구성할 수 있습니다.

Azure NSG를 사용하는 인스턴스 수준 제한의 경우 엔터프라이즈 인스턴스에 액세스할 수 있도록 허용해야 하는 IP 주소를 포함하여 {% data variables.contact.github_support %}에 문의하세요. 표준 CIDR(Classless Interdomain Routing) 형식을 사용하여 주소 범위를 지정합니다. {% data variables.contact.github_support %}에서 엔터프라이즈에 적합한 방화벽 규칙을 구성하여 HTTP, SSH, HTTPS, SMTP를 통한 네트워크 액세스를 제한합니다. 자세한 내용은 “[{% data variables.contact.github_support %}에서 도움 받기](/admin/enterprise-support/receiving-help-from-github-support)”를 참조하세요.

## 허용된 IP 주소 추가

{% data reusables.identity-and-permissions.about-adding-ip-allow-list-entries %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-add-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-add-description %} {% data reusables.identity-and-permissions.ip-allow-lists-add-entry %} {% data reusables.identity-and-permissions.check-ip-address %}

## {% data variables.product.prodname_github_apps %}으로 액세스 허용

{% data reusables.identity-and-permissions.ip-allow-lists-githubapps-enterprise %}

## 허용된 IP 주소 사용

{% data reusables.identity-and-permissions.about-enabling-allowed-ip-addresses %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. “IP 허용 목록”에서 **IP 허용 목록 사용** 을 선택합니다.
  ![IP 주소를 허용하는 확인란](/assets/images/help/security/enable-ip-allowlist-enterprise-checkbox.png)
4. **저장** 을 클릭합니다.

## 허용된 IP 주소 편집

{% data reusables.identity-and-permissions.about-editing-ip-allow-list-entries %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-entry %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-description %}
8. **업데이트** 를 클릭합니다.
{% data reusables.identity-and-permissions.check-ip-address %}

{% ifversion ip-allow-list-address-check %}
## IP 주소가 허용되는지 확인

{% data reusables.identity-and-permissions.about-checking-ip-address %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.check-ip-address-step %} {% endif %}

## 허용되는 IP 주소 삭제

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-delete-entry %} {% data reusables.identity-and-permissions.ip-allow-lists-confirm-deletion %}

## IP 허용 목록으로 {% data variables.product.prodname_actions %} 사용

{% data reusables.actions.ip-allow-list-self-hosted-runners %}
