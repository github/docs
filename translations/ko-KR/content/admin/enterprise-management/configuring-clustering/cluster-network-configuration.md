---
title: 클러스터 네트워크 구성
intro: '{% data variables.product.prodname_ghe_server %} 클러스터링은 제대로 작동하기 위해 DNS 이름 확인, 부하 분산 및 노드 간 통신에 의존합니다.'
redirect_from:
  - /enterprise/admin/clustering/cluster-network-configuration
  - /enterprise/admin/enterprise-management/cluster-network-configuration
  - /admin/enterprise-management/cluster-network-configuration
versions:
  ghes: '*'
type: reference
topics:
  - Clustering
  - Enterprise
  - Infrastructure
  - Networking
shortTitle: Configure a cluster network
ms.openlocfilehash: 73b011bcaea2655fef728a142b20d1067a4df0b6
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098413'
---
## 네트워크 고려 사항

클러스터링을 위한 가장 간단한 네트워크 디자인은 단일 LAN에 노드를 배치하는 것입니다. 클러스터가 여러 서브 네트워크에 걸쳐 있어야 하는 경우 네트워크 간 방화벽 규칙을 구성하지 않는 것이 좋습니다. 노드 간 대기 시간은 1밀리초 미만이어야 합니다.

{% data reusables.enterprise_clustering.network-latency %}

### 최종 사용자를 위한 애플리케이션 포트

애플리케이션 포트는 최종 사용자를 위한 웹 애플리케이션 및 Git 액세스를 제공합니다.

| 포트     | Description     | 암호화됨  |
| :------------- | :------------- | :------------- |
| 22/TCP    | SSH를 통한 Git | Yes |
| 25/TCP    | SMTP | STARTTLS 필요 |
| 80/TCP    | HTTP | No<br>(SSL을 사용할 수 있는 경우 이 포트는 HTTPS로 리디렉션됨) |
| 443/TCP   | HTTPS | Yes |
| 9418/TCP  | 간단한 Git 프로토콜 포트<br>(프라이빗 모드에서는 사용할 수 없음) | No |

### 관리 포트

최종 사용자가 사용하는 기본 애플리케이션에는 관리 포트가 필요하지 않습니다.

| 포트     | Description     | 암호화됨  |
| :------------- | :------------- | :------------- |
| ICMP      | ICMP Ping | No |
| 122/TCP   | 관리 SSH | Yes |
| 161/UDP    | SNMP | No |
| 8080/TCP  | 관리 콘솔 HTTP | No<br>(SSL을 사용할 수 있는 경우 이 포트는 HTTPS로 리디렉션됨) |
| 8443/TCP  | 관리 콘솔 HTTPS | Yes |

### 클러스터 통신 포트

노드 사이에 네트워크 수준 방화벽이 있는 경우 이 포트에 액세스할 수 있어야 합니다. 노드 간 통신은 암호화되지 않습니다. 외부에서는 이 포트에 액세스할 수 없어야 합니다.

| 포트     | Description     |
| :------------- | :------------- |
| 1336/TCP  | 내부 API |
| 3033/TCP  | 내부 SVN 액세스 |
| 3037/TCP  | 내부 SVN 액세스 |
| 3306/TCP  | MySQL |
| 4486/TCP  | 관리자 액세스 |
| 5115/TCP  | 스토리지 백 엔드 |
| 5208/TCP  | 내부 SVN 액세스 |
| 6379/TCP  | Redis |
| 8001/TCP  | Grafana |
| 8090/TCP  | 내부 GPG 액세스 |
| 8149/TCP  | GitRPC 파일 서버 액세스 |
| 8300/TCP | Consul |
| 8301/TCP | Consul |
| 8302/TCP | Consul |
| 9000/TCP  | Git 디먼 |
| 9102/TCP  | Pages 파일 서버 |
| 9105/TCP  | LFS 서버 |
| 9200/TCP  | Elasticsearch |
| 9203/TCP | 의미 체계 코드 서비스 |
| 9300/TCP  | Elasticsearch |
| 11211/TCP | Memcache |
| 161/UDP   | SNMP |
| 8125/UDP  | Statsd |
| 8301/UDP | Consul |
| 8302/UDP | Consul |
| 25827/UDP | Collectd |

## 부하 분산 장치 구성

 노드에 트래픽을 분산하기 위한 프록시 프로토콜을 지원하는 외부 TCP 기반 부하 분산 장치를 사용하는 것이 좋습니다. 다음 부하 분산 장치 구성을 고려합니다.

 - TCP 포트(아래 참조)는 `web-server` 서비스를 실행하는 노드로 전달되어야 합니다. 외부 클라이언트 요청을 처리하는 유일한 노드입니다.
 - 고정 세션을 사용할 수 없어야 합니다.

{% data reusables.enterprise_installation.terminating-tls %}

## 클라이언트 연결 정보 처리

클러스터에 대한 클라이언트 연결은 부하 분산 장치에서 들어오므로 클라이언트 IP 주소가 손실될 수 있습니다. 클라이언트 연결 정보를 제대로 캡처하려면 추가 고려 사항이 필요합니다.

{% data reusables.enterprise_clustering.proxy_preference %}

{% data reusables.enterprise_clustering.proxy_xff_firewall_warning %}

### {% data variables.product.prodname_ghe_server %}에서 프록시 지원 사용

인스턴스와 부하 분산 장치에서 모두 프록시 지원을 사용하도록 설정하는 것이 좋습니다.

{% data reusables.enterprise_installation.proxy-incompatible-with-aws-nlbs %}

 - 인스턴스의 경우 다음 명령을 사용합니다.
  ```shell
  $ ghe-config 'loadbalancer.proxy-protocol' 'true' && ghe-cluster-config-apply
  ```
  - 부하 분산 장치의 경우 공급업체에서 제공하는 지침을 사용합니다.

  {% data reusables.enterprise_clustering.proxy_protocol_ports %}

### {% data variables.product.prodname_ghe_server %}에서 X-Forwarded-For 지원 사용

{% data reusables.enterprise_clustering.x-forwarded-for %}

`X-Forwarded-For` 헤더를 사용하도록 설정하려면 다음 명령을 사용합니다.

```shell
$ ghe-config 'loadbalancer.http-forward' 'true' && ghe-cluster-config-apply
```

{% data reusables.enterprise_clustering.without_proxy_protocol_ports %}

### 상태 검사 구성
상태 검사를 사용하면 미리 구성된 검사가 노드에서 실패할 경우 응답하지 않는 노드에 대한 트래픽 전송을 부하 분산 장치에서 중지할 수 있습니다. 클러스터 노드에서 오류가 발생할 경우 중복 노드와 페어링된 상태 검사가 고가용성을 제공합니다.

{% data reusables.enterprise_clustering.health_checks %} {% data reusables.enterprise_site_admin_settings.maintenance-mode-status %}

## DNS 요구 사항

{% data reusables.enterprise_clustering.load_balancer_dns %}
