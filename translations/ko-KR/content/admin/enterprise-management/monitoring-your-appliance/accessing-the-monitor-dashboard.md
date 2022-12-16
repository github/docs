---
title: 모니터 대시보드 액세스
intro: '{% data variables.product.prodname_ghe_server %}에는 CPU 및 스토리지 사용량, 애플리케이션 및 인증 응답 시간, 일반 시스템 상태와 같은 {% data variables.product.prodname_ghe_server %} 어플라이언스에 대한 기록 데이터를 표시하는 웹 기반 모니터링 대시보드가 포함되어 있습니다.'
redirect_from:
  - /enterprise/admin/installation/accessing-the-monitor-dashboard
  - /enterprise/admin/enterprise-management/accessing-the-monitor-dashboard
  - /admin/enterprise-management/accessing-the-monitor-dashboard
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Monitoring
  - Performance
shortTitle: Access the monitor dashboard
ms.openlocfilehash: d5be8b2c6c4570069328e4f0bfafd6d2895603ca
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148097860'
---
## 모니터 대시보드 액세스

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
2. 페이지 맨 위에 있는 **모니터** 를 클릭합니다.
![모니터 대시보드 링크](/assets/images/enterprise/management-console/monitor-dash-link.png)

## 어플라이언스의 일반적인 리소스 할당 문제 해결

{% note %}

**참고**: CI(연속 통합) 또는 빌드 서버를 사용하여 {% 데이터 variables.location.product_location %}을(를) 정기적으로 폴링하면 서비스 거부 공격이 효과적으로 발생할 수 있으므로 웹후크를 사용하여 업데이트를 푸시하는 것이 좋습니다. 자세한 내용은 “[웹후크 정보](/enterprise/user/articles/about-webhooks/)”를 참조하세요.

{% endnote %}

모니터 대시보드를 사용하여 어플라이언스의 리소스 상태에 대한 최신 정보를 확인하고 높은 사용량 이슈를 해결하는 방법을 결정합니다.  

| 문제 | 가능한 원인 | 권장 사항 |
| -------- | ----------------- | --------------- |
| 높은 CPU 사용량 | 동일한 호스트에서 실행되는 다른 서비스 또는 프로그램의 VM 경합 | 가능하면 CPU 리소스를 더 적게 사용하도록 다른 서비스 또는 프로그램을 다시 구성합니다. VM에 대한 총 CPU 리소스를 늘리려면 “[CPU 또는 메모리 리소스 증가](/enterprise/admin/guides/installation/increasing-cpu-or-memory-resources/)”를 참조하세요. |
| 높은 메모리 사용량 | 동일한 호스트에서 실행되는 다른 서비스 또는 프로그램의 VM 경합 | 가능하면 메모리를 더 적게 사용하도록 다른 서비스 또는 프로그램을 다시 구성합니다. VM에서 사용할 수 있는 총 메모리를 늘리려면 “[CPU 또는 메모리 리소스 증가](/enterprise/admin/guides/installation/increasing-cpu-or-memory-resources/)”를 참조하세요. |
| 낮은 디스크 공간 가용성 | 디스크 공간을 사용하는 큰 이진 파일 또는 로그 파일 | 가능하면 별도의 서버에서 큰 이진 파일을 호스트하고 로그 파일을 압축하거나 보관합니다. 필요한 경우 “[스토리지 용량 증가](/enterprise/admin/guides/installation/increasing-storage-capacity/)”에서 사용 중인 플랫폼에 대한 단계를 수행하여 VM의 디스크 공간을 늘립니다. |
| 평소보다 높은 응답 시간 | 위 이슈 중 하나로 인해 발생하는 경우가 많습니다. | 기본 이슈를 식별하고 해결합니다. 응답 시간이 계속 높으면 {% data variables.contact.contact_ent_support %}에 문의하세요. |
| 상승된 오류율 | 소프트웨어 이슈  | 지원 번들을 포함하여 {% data variables.contact.contact_ent_support %}에 문의하세요. 자세한 내용은 “[{% data variables.product.prodname_enterprise %} 지원에 데이터 제공](/enterprise/{{ currentVersion}}/admin/guides/enterprise-support/providing-data-to-github-support#creating-and-sharing-support-bundles)”을 참조하세요. |
