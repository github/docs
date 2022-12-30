---
title: GitHub 연결 관리
shortTitle: Manage GitHub Connect
intro: '{% data variables.product.prodname_github_connect %}을(를) 사용하도록 설정하여 {% data variables.location.product_location %}에 대한 추가 기능 및 워크플로에 액세스할 수 있습니다.'
redirect_from:
  - /enterprise/admin/guides/developer-workflow/connecting-github-enterprise-to-github-com
  - /enterprise/admin/guides/developer-workflow/connecting-github-enterprise-server-to-github-com
  - /enterprise/admin/developer-workflow/connecting-github-enterprise-server-to-githubcom
  - /enterprise/admin/installation/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /enterprise/admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - GitHub Connect
  - Infrastructure
  - Networking
ms.openlocfilehash: 30a170543b63c390aa8975b1ca57c265bc7fa8fa
ms.sourcegitcommit: d82f268a6f0236d1f4d2bf3d049974ada0170402
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160651'
---
{% data reusables.github-connect.beta %}

## {% data variables.product.prodname_github_connect %} 정보

{% data variables.product.prodname_github_connect %}을(를) 사용하도록 설정하여 {% data variables.location.product_location %}에서 추가 기능 및 워크플로에 액세스할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_github_connect %} 정보](/admin/configuration/configuring-github-connect/about-github-connect)”를 참조하세요.

{% data variables.product.prodname_github_connect %}을(를) 사용하도록 설정하면 {% data variables.location.product_location %}과 {% data variables.product.prodname_ghe_cloud %}의 조직 또는 엔터프라이즈 계정 간에 연결을 구성합니다. {% data reusables.github-connect.connection-port-protocol %}

{% data variables.product.prodname_github_connect %}을 사용하도록 설정하면 {% data variables.product.prodname_ghe_cloud %}의 조직 또는 엔터프라이즈 계정이 소유한 {% data variables.product.prodname_github_app %}이 생성됩니다. {% data variables.product.product_name %}는 {% data variables.product.prodname_github_app %}의 자격 증명을 사용하여 {% data variables.product.prodname_ghe_cloud %}에 대한 요청을 실행합니다.

{% ifversion ghes %} {% data variables.product.prodname_ghe_server %}는 {% data variables.product.prodname_github_app %}의 자격 증명을 저장합니다. 다음 자격 증명은 고가용성 또는 클러스터 환경의 모든 노드에 복제되고 {% data variables.product.prodname_enterprise_backup_utilities %}에서 만든 스냅샷을 포함하여 모든 백업에 저장됩니다.
- 1시간 동안 유효한 인증 토큰
- 새 인증 토큰을 생성하는 데 사용되는 프라이빗 키 {% endif %}

## 필수 조건

{% data variables.product.prodname_github_connect %}을 사용하려면 {% data variables.product.prodname_ghe_cloud %}를 사용하는 {% data variables.product.prodname_dotcom_the_website %}의 조직 또는 엔터프라이즈 계정이 있어야 합니다. {% data variables.product.prodname_ghe_cloud %}가 플랜에 이미 포함되어 있을 수 있습니다. {% data reusables.enterprise.link-to-ghec-trial %}

{% ifversion ghes %} {% data variables.product.prodname_dotcom_the_website %}의 조직 또는 엔터프라이즈 계정이 IP 허용 목록을 사용하는 경우 {% data variables.location.product_location %}의 IP 주소 또는 네트워크를 {% data variables.product.prodname_dotcom_the_website %}의 IP 허용 목록에 추가해야 합니다. 자세한 내용은 {% data variables.product.prodname_ghe_cloud %} 설명서의 “[조직에 허용되는 IP 주소 관리](/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization)” 및 “[엔터프라이즈에서 보안 설정에 대한 정책 적용](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-allowed-ip-addresses-for-organizations-in-your-enterprise)”을 참조하세요.

연결을 구성하려면 프록시 구성이 `github.com`, `api.github.com` 및 `uploads.github.com`에 대한 연결을 허용해야 합니다. 자세한 내용은 “[아웃바운드 웹 프록시 서버 구성](/enterprise/admin/guides/installation/configuring-an-outbound-web-proxy-server)”을 참조하세요.
{% endif %}

## {% data variables.product.prodname_github_connect %} 사용

{% data variables.product.prodname_ghe_cloud %}를 사용하는 조직 또는 엔터프라이즈 계정의 소유자인 엔터프라이즈 소유자는 {% data variables.product.prodname_github_connect %}을 사용하도록 설정할 수 있습니다.

엔터프라이즈 계정이 소유하지 않은 {% data variables.product.prodname_ghe_cloud %}의 조직에 {% data variables.location.product_location %}를 연결하는 경우 조직 소유자로 {% data variables.product.prodname_dotcom_the_website %}에 로그인해야 합니다.

{% data variables.location.product_location %}을(를) 엔터프라이즈 계정 또는 엔터프라이즈 계정 자체에 소유한 {% data variables.product.prodname_ghe_cloud %}의 조직에 연결하는 경우 엔터프라이즈 소유자로 {% data variables.product.prodname_dotcom_the_website %}에 로그인해야 합니다.

{% ifversion ghes %}
1. {% data variables.location.product_location %} 및 {% data variables.product.prodname_dotcom_the_website %}에 로그인합니다.
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.github-connect-tab %}{% else %}
1. {% data variables.location.product_location %} 및 {% data variables.product.prodname_dotcom_the_website %}에 로그인합니다.
{% data reusables.enterprise-accounts.access-enterprise %}{% data reusables.enterprise-accounts.github-connect-tab %}{% endif %}
1. “{% data variables.product.prodname_github_connect %}이 아직 사용하도록 설정되지 않음”에서 **{% data variables.product.prodname_github_connect %} 사용** 을 클릭합니다. **{% data variables.product.prodname_github_connect %} 사용** 을 클릭하면 “<a href="/github/site-policy/github-terms-for-additional-products-and-features#connect" class="dotcom-only">{% data variables.product.prodname_dotcom %} 추가 제품 및 기능 약관</a>”에 동의하는 것입니다.
{% ifversion ghes %} ![GitHub 연결 사용 단추](/assets/images/enterprise/business-accounts/enable-github-connect-button.png){% else %} ![GitHub 연결 사용 단추](/assets/images/enterprise/github-ae/enable-github-connect-button.png) {% endif %}
1. 연결하려는 엔터프라이즈 계정 또는 조직 옆에 있는 **연결** 을 클릭합니다.
  ![엔터프라이즈 계정 또는 비즈니스 옆에 있는 연결 단추](/assets/images/enterprise/business-accounts/choose-enterprise-or-org-connect.png)

## {% data variables.product.prodname_github_connect %} 사용 안 함

엔터프라이즈 소유자는 {% data variables.product.prodname_github_connect %}을 사용하지 않도록 설정할 수 있습니다.

{% data variables.product.prodname_ghe_cloud %}에서 연결을 끊으면 {% data variables.product.prodname_github_connect %} {% data variables.product.prodname_github_app %}이(가) 엔터프라이즈 계정 또는 조직에서 삭제되고 {% data variables.location.product_location %}에 저장된 자격 증명이 삭제됩니다.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.github-connect-tab %}
1. 연결을 끊으려는 엔터프라이즈 계정 또는 조직 옆에 있는 **{% data variables.product.prodname_github_connect %} 사용 안 함** 을 클릭합니다.
{% ifversion ghes %} ![엔터프라이즈 계정 또는 조직 이름 옆에 있는 GitHub 연결 사용 안 함 단추](/assets/images/enterprise/business-accounts/disable-github-connect-button.png)
1. 연결 끊기에 관한 내용을 읽고 **{% data variables.product.prodname_github_connect %} 사용 안 함** 을 클릭합니다.
  ![연결 끊기 및 확인 단추에 관한 경고 정보가 포함된 모달](/assets/images/enterprise/business-accounts/confirm-disable-github-connect.png)  
{% else %} ![엔터프라이즈 계정 또는 조직 이름 옆에 있는 GitHub 연결 사용 안 함 단추](/assets/images/enterprise/github-ae/disable-github-connect-button.png)
1. 연결 끊기에 관한 내용을 읽고 **{% data variables.product.prodname_github_connect %} 사용 안 함** 을 클릭합니다.
  ![연결 끊기 및 확인 단추에 관한 경고 정보가 포함된 모달](/assets/images/enterprise/github-ae/confirm-disable-github-connect.png) {% endif %} 
