---
title: 조직에 허용되는 IP 주소 관리
intro: 연결이 허용된 IP 주소 목록을 구성하여 조직의 개인 자산에 대한 액세스를 제한할 수 있습니다.
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-allowed-ip-addresses-for-your-organization
  - /organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization
versions:
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage allowed IP addresses
permissions: Organization owners can manage allowed IP addresses for an organization.
ms.openlocfilehash: f0484aae26b5acb8bac07c7b002af2d623d7dfef
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/28/2022
ms.locfileid: '148184030'
---
## 허용된 IP 주소 정보

특정 IP 주소에 대한 허용 목록을 구성하여 비공개 조직 자산에 대한 액세스를 제한할 수 있습니다. {% data reusables.identity-and-permissions.ip-allow-lists-example-and-restrictions %}

{% ifversion ghec %} {% note %}

**참고:** {% data variables.product.prodname_ghe_cloud %}를 사용하는 조직만 IP 허용 목록을 사용할 수 있습니다. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %} {% endif %}

{% data reusables.identity-and-permissions.ip-allow-lists-cidr-notation %}

{% data reusables.identity-and-permissions.ip-allow-lists-enable %}

허용 목록을 설정하는 경우 조직에 설치한 {% data variables.product.prodname_github_apps %}에 대해 구성된 모든 IP 주소를 허용 목록에 자동으로 추가하도록 선택할 수도 있습니다. {% data variables.product.prodname_github_app %}의 작성자는 애플리케이션이 실행되는 IP 주소를 지정하는 애플리케이션의 허용 목록을 구성할 수 있습니다. 본인의 허용 목록을 사용자의 허용 목록으로 상속하면 애플리케이션의 연결 요청 거부를 방지할 수 있습니다. 자세한 내용은 "[{% data variables.product.prodname_github_apps %}의 액세스 허용](#allowing-access-by-github-apps)"을 참조하세요.

엔터프라이즈 계정 수준에서 허용된 IP 주소를 구성할 수도 있으며 엔터프라이즈 계정의 허용 목록에 있는 항목은 엔터프라이즈가 소유한 모든 조직에서 상속됩니다. {% data reusables.identity-and-permissions.org-enterprise-allow-list-interaction %} 자세한 내용은 "[엔터프라이즈에서 보안 설정에 대한 정책 적용"을 참조하세요](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-allowed-ip-addresses-for-organizations-in-your-enterprise).

## 허용된 IP 주소 추가

{% data reusables.identity-and-permissions.about-adding-ip-allow-list-entries %}

{% data reusables.identity-and-permissions.ipv6-allow-lists %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.identity-and-permissions.ip-allow-lists-add-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-add-description %} {% data reusables.identity-and-permissions.ip-allow-lists-add-entry %} {% data reusables.identity-and-permissions.check-ip-address %}

## 허용된 IP 주소 사용

{% data reusables.identity-and-permissions.about-enabling-allowed-ip-addresses %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %}
1. “IP 허용 목록”에서 **IP 허용 목록 사용** 을 선택합니다.
  ![IP 주소를 허용하는 확인란](/assets/images/help/security/enable-ip-allowlist-organization-checkbox.png)
1. **저장** 을 클릭합니다.

## {% data variables.product.prodname_github_apps %}으로 액세스 허용

허용 목록을 사용하는 경우 조직에 설치한 {% data variables.product.prodname_github_apps %}에 대해 구성된 모든 IP 주소를 허용 목록에 자동으로 추가하도록 선택할 수도 있습니다. 

{% data reusables.identity-and-permissions.ip-allow-lists-address-inheritance %}

{% data reusables.apps.ip-allow-list-only-apps %}

만든 {% data variables.product.prodname_github_app %}에 대한 허용 목록을 만드는 방법에 대한 자세한 내용은 "[GitHub 앱에 허용되는 IP 주소 관리](/developers/apps/building-github-apps/managing-allowed-ip-addresses-for-a-github-app)"를 참조하세요.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %}
1. "IP 허용 목록"에서 **설치된 GitHub 앱에 대해 IP 허용 목록 구성 사용** 을 선택합니다.
  ![GitHub 앱 IP 주소를 허용하는 확인란](/assets/images/help/security/enable-ip-allowlist-githubapps-checkbox.png)
1. **저장** 을 클릭합니다.

## 허용된 IP 주소 편집

{% data reusables.identity-and-permissions.about-editing-ip-allow-list-entries %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-entry %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-description %}
1. **업데이트** 를 클릭합니다.
{% data reusables.identity-and-permissions.check-ip-address %}

## IP 주소가 허용되는지 확인

{% data reusables.identity-and-permissions.about-checking-ip-address %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.identity-and-permissions.check-ip-address-step %}

## 허용되는 IP 주소 삭제

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.identity-and-permissions.ip-allow-lists-delete-entry %} {% data reusables.identity-and-permissions.ip-allow-lists-confirm-deletion %}

## IP 허용 목록으로 {% data variables.product.prodname_actions %} 사용

{% data reusables.actions.ip-allow-list-self-hosted-runners %}
