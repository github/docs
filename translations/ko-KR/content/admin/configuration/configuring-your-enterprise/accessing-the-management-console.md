---
title: 관리 콘솔에 액세스
intro: '{% data reusables.enterprise_site_admin_settings.about-the-management-console %}'
redirect_from:
  - /enterprise/admin/articles/about-the-management-console
  - /enterprise/admin/articles/management-console-for-emergency-recovery
  - /enterprise/admin/articles/web-based-management-console
  - /enterprise/admin/categories/management-console
  - /enterprise/admin/articles/accessing-the-management-console
  - /enterprise/admin/guides/installation/web-based-management-console
  - /enterprise/admin/installation/accessing-the-management-console
  - /enterprise/admin/configuration/accessing-the-management-console
  - /admin/configuration/accessing-the-management-console
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
shortTitle: Access the management console
ms.openlocfilehash: 60cd45e9e33dfbd037c831b96bed806dddcf6a21
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107127'
---
## {% data variables.enterprise.management_console %} 정보

기본 관리 작업에 {% data variables.enterprise.management_console %}을 사용합니다.
- **초기 설정**: 브라우저에서 {% data variables.location.product_location %}의 IP 주소를 방문하여 {% data variables.location.product_location %}을(를) 처음 시작할 때 초기 설정 프로세스를 안내합니다.
- **{% data variables.enterprise.management_console %}에 대한 인증 정책 구성**: 로그인 시도에 대한 속도 제한 및 누군가가 속도 제한을 초과하는 경우 잠금 기간을 설정합니다. 
- **인스턴스에 대한 기본 설정 구성**: 설정 페이지에서 DNS, 호스트 이름, SSL, 사용자 인증, 메일, 모니터링 서비스 및 로그 전달을 구성합니다.
- **유지 관리 기간 예약**: {% data variables.enterprise.management_console %} 또는 관리 셸을 사용하여 유지 관리를 수행하는 동안 {% data variables.location.product_location %}을(를) 오프라인으로 전환합니다.
- **문제 해결**: 지원 번들을 생성하거나 개략적인 수준의 진단 정보를 봅니다.
- **라이선스 관리**: {% data variables.product.prodname_enterprise %} 라이선스를 보거나 업데이트합니다.

인스턴스가 유지 관리 모드에 있거나 중요한 애플리케이션 오류 또는 호스트 이름 또는 SSL 잘못된 구성이 있는 경우에도 {% data variables.location.product_location %}의 IP 주소를 사용하여 항상 {% data variables.enterprise.management_console %}에 도달할 수 있습니다.

{% data variables.enterprise.management_console %}에 액세스하려면 {% data variables.location.product_location %}을(를) 처음 설정하는 동안 설정된 관리자 암호를 사용해야 합니다. 또한 포트 8443에서 가상 머신 호스트에 연결할 수 있어야 합니다. {% data variables.enterprise.management_console %}에 도달하는 데 문제가 있는 경우 중간 방화벽 및 보안 그룹 구성을 확인하세요. 

{% data variables.enterprise.management_console %} 암호 해시가 `/data/user/common/secrets.conf`에 저장되고 해당 파일이 주 어플라이언스에서 모든 고가용성 복제본으로 자동으로 동기화됩니다. 기본 암호를 변경하면 고가용성 복제본에 자동으로 복제됩니다. 고가용성 방법에 대한 자세한 내용은 “[고가용성 구성 정보](/admin/enterprise-management/configuring-high-availability/about-high-availability-configuration)”를 참조하세요.

## 사이트 관리자 권한으로 {% data variables.enterprise.management_console %}에 액세스

사이트 관리자 권한으로 {% data variables.enterprise.management_console %}에 처음 액세스할 때는 {% data variables.product.prodname_enterprise %} 라이선스 파일을 업로드하여 앱에 인증해야 합니다. 자세한 내용은 “[{% data variables.product.prodname_enterprise %}에 대한 라이선스 관리](/billing/managing-your-license-for-github-enterprise)”를 참조하세요.

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.type-management-console-password %}

## 인증되지 않은 사용자로 {% data variables.enterprise.management_console %}에 액세스

1. 브라우저에서 이 URL을 방문하여 `hostname`을 실제 {% data variables.product.prodname_ghe_server %} 호스트 이름 또는 IP 주소로 바꿉니다.
  ```shell
  http(s)://HOSTNAME/setup
  ```
{% data reusables.enterprise_management_console.type-management-console-password %}

## 실패한 로그인 시도 후 {% data variables.enterprise.management_console %}의 잠금 해제

{% data variables.enterprise.management_console %}은(는) 인증 정책에 의해 구성된 실패한 로그인 시도 횟수 {% ifversion enterprise-authentication-rate-limits %}후에 잠급니다. 자세한 내용은 "[인증 정책 속도 제한 구성"을 참조하세요](/admin/configuration/configuring-your-enterprise/configuring-rate-limits#configuring-authentication-policy-rate-limits). {% else %}10분 동안 10번의 로그인 시도가 실패했습니다. 다시 로그인을 시도하기 전에 로그인 화면이 자동으로 잠금 해제되기를 기다려야 합니다. 이전 10분 동안 실패한 로그인 시도가 10회 미만이면 즉시 로그인 화면이 자동으로 잠금 해제됩니다. 성공적으로 로그인한 후 카운터가 다시 설정됩니다. {% endif %}

{% data reusables.enterprise_management_console.unlocking-management-console-with-shell %}

## {% data variables.enterprise.management_console %}에 대한 연결 실패 문제 해결

{% data variables.location.product_location %}에서 {% data variables.enterprise.management_console %}에 연결할 수 없는 경우 다음 정보를 검토하여 문제를 해결할 수 있습니다.

### 오류: 부하 분산 장치를 통한 연결에 대해 “세션이 만료됨”

부하 분산 장치를 통해 {% data variables.location.product_location %}에 액세스하고 세션이 만료되었다는 메시지와 함께 {% data variables.enterprise.management_console %}에 대한 연결이 실패하는 경우 부하 분산 장치를 다시 구성해야 할 수 있습니다. 자세한 내용은 “[부하 분산 장치에서 {% data variables.product.product_name %} 사용](/admin/configuration/configuring-network-settings/using-github-enterprise-server-with-a-load-balancer#error-your-session-has-expired-for-connections-to-the-management-console)”을 참조하세요.
