---
title: 엔터프라이즈에 대한 패키지 에코시스템 지원 구성
intro: '{% ifversion ghes > 3.4 %}{% data variables.product.prodname_container_registry %}, {% endif %}Docker 및 npm을 포함하여 엔터프라이즈에서 개별 패키지 에코시스템을 전역적으로 사용하거나 사용하지 않도록 설정하여 엔터프라이즈에 대한 {% data variables.product.prodname_registry %}를 구성할 수 있습니다. 특정 패키지 에코시스템을 지원하기 위한 다른 구성 요구 사항에 대해 알아봅니다.'
redirect_from:
  - /enterprise/admin/packages/configuring-packages-support-for-your-enterprise
  - /admin/packages/configuring-packages-support-for-your-enterprise
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Packages
shortTitle: Configure package ecosystems
ms.openlocfilehash: 83de80e4233f671a7a923394d2fd3f6e554bba10
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147062548'
---
{% data reusables.package_registry.packages-ghes-release-stage %}

## 개별 패키지 에코시스템 사용 또는 사용 안 함

새 패키지가 업로드되지 않도록 하려면 기존 패키지를 다운로드하도록 허용하면서 이전에 사용했던 에코시스템을 **읽기 전용** 으로 설정할 수 있습니다.

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_site_admin_settings.packages-tab %}
1. "에코시스템 토글"에서 각 패키지 유형에 대해 **사용**, **읽기 전용** 또는 **사용 안 함** 을 선택합니다.
   {%- ifversion ghes > 3.4 %}{% note -%} **참고**: {% data variables.product.prodname_container_registry %} 옵션을 전환하려면 하위 도메인 격리를 사용하도록 설정해야 합니다.
   {%- endnote %}{%- endif %}{%- ifversion ghes %} ![에코시스템 토글](/assets/images/enterprise/site-admin-settings/ecosystem-toggles.png){% else %} ![에코시스템 토글](/assets/images/enterprise/3.1/site-admin-settings/ecosystem-toggles.png){% endif %} {% data reusables.enterprise_management_console.save-settings %}

{% ifversion ghes %}
## 공식 npm 레지스트리에 연결

엔터프라이즈에서 npm 패키지를 사용하도록 설정하고 공식 npm 레지스트리 및 {% data variables.product.prodname_registry %} npm 레지스트리에 대한 액세스를 허용하려면 몇 가지 추가 구성을 수행해야 합니다.

{% data variables.product.prodname_registry %}는 `registry.npmjs.com`의 공식 npm 레지스트리에 연결하는 네트워크 트래픽에 대해 투명한 프록시를 사용합니다. 프록시는 기본적으로 사용하도록 설정되어 있으며, 사용하지 않도록 설정할 수 없습니다.

npm 레지스트리에 대한 네트워크 연결을 허용하려면 {% data variables.product.prodname_ghe_server %}가 포트 443을 통해 `registry.npmjs.com`에 HTTPS 트래픽을 보낼 수 있도록 네트워크 ACL을 구성해야 합니다.

| 원본 | 대상 | 포트 | 형식 |
|---|---|---|---|
| {% data variables.product.prodname_ghe_server %} | `registry.npmjs.com` | TCP/443 | HTTPS |

`registry.npmjs.com`에 대한 연결은 Cloudflare 네트워크를 통과하며 이후 단일 고정 IP 주소에 연결되지 않습니다. 대신 여기에 나열되어 있는 CIDR 범위(https://www.cloudflare.com/ips/ ) 내의 IP 주소에 연결됩니다.

npm 업스트림 소스를 활성화하려면 `npm upstreaming`에 대해 `Enabled`를 선택합니다.

{% endif %}

## 다음 단계

다음 단계로 패키지 호스트 URL에 대한 TLS 인증서를 업데이트하거나 업로드해야 하는지 확인하는 것이 좋습니다. 자세한 내용은 “[엔터프라이즈에 대한 GitHub 패키지 시작](/admin/packages/getting-started-with-github-packages-for-your-enterprise)”을 참조하세요.
