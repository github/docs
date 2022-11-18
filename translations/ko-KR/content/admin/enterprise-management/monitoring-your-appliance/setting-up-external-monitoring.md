---
title: 외부 모니터링 설정
intro: 'SNMP 또는 수집된 통계 수집 프로토콜을 사용하여 {% data variables.product.prodname_ghe_server %} 어플라이언스의 기본 시스템 리소스를 모니터링할 수 있습니다.'
redirect_from:
  - /enterprise/admin/installation/setting-up-external-monitoring
  - /enterprise/admin/enterprise-management/setting-up-external-monitoring
  - /admin/enterprise-management/setting-up-external-monitoring
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Monitoring
  - Performance
shortTitle: Set up external monitoring
ms.openlocfilehash: 43fa6a7b0d6d4686a69460f23f38126ec5457613
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '146332474'
---
## SNMP 정보

SNMP(Simple Network Management Protocol)는 네트워크 디바이스 및 서버를 모니터링하는 널리 지원되는 메서드입니다. SNMP는 기본적으로 사용하지 않도록 설정되어 있지만 {% data variables.product.prodname_enterprise %} 모니터 대시보드를 통해 구성할 수 있습니다. UDP 포트 161은 열려 있어야 하며 네트워크 관리 스테이션에서 연결할 수 있어야 합니다. 자세한 내용은 “[SNMP를 사용하여 모니터링](/enterprise/admin/guides/installation/monitoring-using-snmp/)”을 참조하세요.

## collectd 정보

collectd는 RRD 파일에 쓰기를 기본적으로 지원하는 오픈 소스 통계 수집 및 보고 디먼입니다. CPU 사용률, 메모리 및 디스크 사용량, 네트워크 인터페이스 트래픽 및 오류, 시스템 부하에 대한 통계를 광범위한 사용 가능한 도구 및 플러그 인을 사용하여 그래프, 분석, 경고를 구성할 수 있는 외부 수집 서버로 전달할 수 있습니다. `collectd` 전달을 구성하려면 “[collectd 구성](/enterprise/admin/guides/installation/configuring-collectd/)”을 참조하세요.

또한 기본 가상화 플랫폼에 기본 제공되는 모니터링 도구를 시스템 리소스의 기본 모니터링 및 경고에 사용할 수도 있습니다. 자세한 내용은 [Amazon CloudWatch](http://aws.amazon.com/cloudwatch/) 및 [VMware vSphere 모니터링](http://pubs.vmware.com/vsphere-50/topic/com.vmware.ICbase/PDF/vsphere-esxi-vcenter-server-50-monitoring-performance-guide.pdf) 설명서를 참조하세요.
