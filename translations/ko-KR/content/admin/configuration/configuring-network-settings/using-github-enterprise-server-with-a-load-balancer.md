---
title: 부하 분산 장치로 GitHub Enterprise Server 사용
intro: '단일 {% data variables.product.prodname_ghe_server %} 인스턴스 또는 고가용성 구성의 인스턴스 쌍 앞에 부하 분산 장치를 사용합니다.'
redirect_from:
  - /enterprise/admin/guides/installation/using-github-enterprise-with-a-load-balancer
  - /enterprise/admin/installation/using-github-enterprise-server-with-a-load-balancer
  - /enterprise/admin/configuration/using-github-enterprise-server-with-a-load-balancer
  - /admin/configuration/using-github-enterprise-server-with-a-load-balancer
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - High availability
  - Infrastructure
  - Networking
shortTitle: Use a load balancer
ms.openlocfilehash: d703b7c0161a4b53fd2870aa5beafe930f56ee41
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098064'
---
## 부하 분산 장치 정보

{% data reusables.enterprise_clustering.load_balancer_intro %}

{% data reusables.enterprise_clustering.load_balancer_dns %}

## 클라이언트 연결 정보 처리

{% data variables.product.prodname_ghe_server %}에 대한 클라이언트 연결은 부하 분산 장치에서 가져오기 때문에 클라이언트 IP 주소가 손실될 수 있습니다.

{% data reusables.enterprise_clustering.proxy_preference %}

{% data reusables.enterprise_clustering.proxy_xff_firewall_warning %}

{% data reusables.enterprise_installation.terminating-tls %}

### {% 데이터 variables.location.product_location %}에서 PROXY 프로토콜 지원 사용

인스턴스와 부하 분산 장치 모두에 대해 PROXY 프로토콜 지원을 사용하도록 설정하는 것이 좋습니다. 공급업체에서 제공하는 지침을 사용하여 부하 분산 장치에서 PROXY 프로토콜을 사용하도록 설정합니다. 자세한 내용은 [PROXY 프로토콜 설명서](http://www.haproxy.org/download/1.8/doc/proxy-protocol.txt)를 참조하세요.

{% data reusables.enterprise_installation.proxy-incompatible-with-aws-nlbs %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.privacy %}
3. **외부 부하 분산 장치** 에서 **PROXY 프로토콜에 대한 지원 사용** 을 선택합니다.
![PROXY 프로토콜에 대한 지원을 사용하도록 설정하는 확인란](/assets/images/enterprise/management-console/enable-proxy.png) {% data reusables.enterprise_management_console.save-settings %}

{% data reusables.enterprise_clustering.proxy_protocol_ports %}

### {% 데이터 variables.location.product_location %}에서 X-Forwarded-For 지원 사용

{% data reusables.enterprise_clustering.x-forwarded-for %}

{% warning %}

**경고**: {% 데이터 variables.location.product_location %} 및 부하 분산 장치에 대한 지원을 구성하는 `X-Forwarded-For` 경우 {% 데이터 variables.enterprise.management_console %}에 연결하지 못할 수 있습니다. 자세한 내용은 [오류: {% data variables.enterprise.management_console %}로의 연결에 대한 “세션이 만료되었습니다](/admin/configuration/configuring-network-settings/using-github-enterprise-server-with-a-load-balancer#error-your-session-has-expired-for-connections-to-the-management-console)”를 참조하세요.

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.privacy %}
3. **외부 부하 분산 장치** 에서 **HTTP X-Forwarded-For 헤더 허용** 을 선택합니다.
![HTTP X-Forwarded-For 헤더를 허용하는 확인란](/assets/images/enterprise/management-console/allow-xff.png) {% data reusables.enterprise_management_console.save-settings %}

{% data reusables.enterprise_clustering.without_proxy_protocol_ports %}

## 상태 검사 구성

상태 검사를 사용하면 노드에서 미리 구성된 검사가 실패할 경우 부하 분산 장치가 응답하지 않는 노드로의 트래픽 전송을 중지할 수 있습니다. 유지 관리 또는 예기치 않은 오류로 인해 인스턴스가 오프라인 상태인 경우 부하 분산 장치에서 상태 페이지를 표시할 수 있습니다. HA(고가용성) 구성에서 부하 분산 장치를 장애 조치(failover) 전략의 일부로 사용할 수 있습니다. 그러나 HA 쌍의 자동 장애 조치(failover)는 지원되지 않습니다. 요청 제공을 시작하기 전에 복제본 인스턴스를 수동으로 승격해야 합니다. 자세한 내용은 “[고가용성을 위한 {% data variables.product.prodname_ghe_server %} 구성](/enterprise/admin/guides/installation/configuring-github-enterprise-server-for-high-availability/)”을 참조하세요.

{% data reusables.enterprise_clustering.health_checks %} {% data reusables.enterprise_site_admin_settings.maintenance-mode-status %}

## 부하 분산 장치를 통한 연결 문제 해결

부하 분산 장치를 통해 {% 데이터 variables.location.product_location %}의 서비스에 연결할 수 없는 경우 다음 정보를 검토하여 문제를 해결할 수 있습니다.

{% note %}

**참고**: 스테이징 환경에서 네트워크 인프라 및 인스턴스 구성에 대한 변경 내용을 항상 테스트합니다. 자세한 내용은 “[스테이징 인스턴스 설정](/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance)”을 참조하세요.

{% endnote %}

### 오류: {% data variables.enterprise.management_console %}로의 연결에 대한 “세션이 만료되었습니다”

인스턴스 및 부하 분산 장치에서 `X-Forwarded-For` 헤더 지원을 사용하도록 설정하면 인스턴스의 {% data variables.enterprise.management_console %}에 액세스하지 못할 수 있습니다. {% data variables.enterprise.management_console %} 및 연결에 필요한 포트에 대한 자세한 내용은 “[관리 콘솔 액세스](/admin/configuration/configuring-your-enterprise/accessing-the-management-console)” 및 “[네트워크 포트](/admin/configuration/configuring-network-settings/network-ports)”를 참조하세요.

{% 데이터 variables.location.product_location %}이(가) 부하 분산 장치를 통해 {% 데이터 variables.enterprise.management_console %}에 연결할 때 세션이 만료되었음을 나타내는 경우 부하 분산 장치에서 다음 구성 중 하나를 시도합니다.

- 포트 8080 및 8443의 인스턴스에 연결하기 위해 `X-Forwarded-For` 헤더를 사용하지 않도록 설정합니다.
- 계층 4에서 작동하도록 부하 분산 장치를 구성하고 클라이언트 IP 주소 통과를 위해 `X-Forwarded-For` 대신 PROXY 프로토콜을 사용합니다. 자세한 내용은 "[{% 데이터 variables.location.product_location %}에서 PROXY 프로토콜 지원 사용"을 참조하세요](#enabling-proxy-protocol-support-on-your-github-enterprise-server-instance).

자세한 내용은 부하 분산 장치에 대한 설명서를 참조하세요.

### 문제에 대한 라이브 업데이트 및 실행의 정상 작동 여부 확인

부하 분산 장치 또는 역방향 프록시를 통해 {% 데이터 variables.location.product_location %}에 액세스하는 경우 페이지가 새로 고쳐질 때까지 문제 및 알림 배지의 변경 내용에 대한 새 설명이나 실행 출력 확인과 같은 예상 라이브 업데이트가 표시되지 않을 수 있습니다. 이는 역방향 프록시 또는 부하 분산 장치가 계층 7 모드에서 실행 중이거나 필요한 [websocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) 프로토콜을 지원하지 않는 경우에 가장 일반적으로 발생합니다. 

라이브 업데이트를 사용하려면 부하 분산 장치 또는 프록시를 다시 구성해야 할 수 있습니다. 자세한 내용은 부하 분산 장치에 대한 설명서를 참조하세요.
