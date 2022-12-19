---
title: 권장되는 경고 임계값
intro: '{% data variables.product.prodname_ghe_server %} 어플라이언스의 성능에 영향을 미치기 전에 시스템 리소스 문제를 알리도록 경고를 구성할 수 있습니다.'
redirect_from:
  - /enterprise/admin/guides/installation/about-recommended-alert-thresholds
  - /enterprise/admin/installation/about-recommended-alert-thresholds
  - /enterprise/admin/installation/recommended-alert-thresholds
  - /enterprise/admin/enterprise-management/recommended-alert-thresholds
  - /admin/enterprise-management/recommended-alert-thresholds
versions:
  ghes: '*'
type: reference
topics:
  - Enterprise
  - Infrastructure
  - Monitoring
  - Performance
  - Storage
shortTitle: Recommended alert thresholds
ms.openlocfilehash: 5e29a43b144618f09f33b9802454e6ff8d9d552f
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148097799'
---
## 스토리지 모니터링

루트 및 사용자 스토리지 디바이스를 모두 모니터링하고 사용 가능한 디스크 공간이 부족한 경우 충분한 응답 시간을 허용하는 값으로 경고를 구성하는 것이 좋습니다.

| 심각도 | 임계값 |
| -------- | --------- |
| **경고** | 디스크 사용이 사용 가능한 총 용량의 70%를 초과합니다. |
| **심각** | 디스크 사용이 사용 가능한 총 용량의 85%를 초과합니다. |

할당된 총 스토리지 양, 이전 증가 패턴 및 예상되는 응답 시간에 따라 값을 조정할 수 있습니다. 스토리지 리소스를 초과 할당하여 증가를 허용하고 추가 스토리지를 할당하는 데 필요한 가동 중지 시간을 방지하는 것이 좋습니다.

## CPU 및 로드 평균 사용량 모니터링

리소스 사용이 많은 Git 작업은 CPU 사용량이 변동하는 것이 정상이지만, 장기간 사용량이 많으면 인스턴스가 부족하게 프로비저닝될 수 있으므로 비정상적으로 높은 CPU 사용률에 대한 경고를 구성하는 것이 좋습니다. 가상 머신에 할당된 CPU 코어 수에 근접하거나 이를 초과하는 값에 대해 15분 시스템 로드 평균을 모니터링하는 것이 좋습니다.

| 심각도 | 임계값 |
| -------- | --------- |
| **경고** | 15분 로드 평균이 1개 CPU 코어를 초과합니다. |
| **심각** | 15분 로드 평균이 2개 CPU 코어를 초과합니다. |

또한 동일한 호스트 시스템에서 실행되는 다른 가상 머신이 인스턴스의 리소스를 모두 사용하지 않도록 가상화 “스틸” 시간을 모니터링하는 것이 좋습니다.

## 메모리 사용 모니터링

{% 데이터 variables.location.product_location %}에 할당된 실제 메모리 양은 전반적인 성능 및 애플리케이션 응답성에 큰 영향을 미칠 수 있습니다. 이 시스템은 커널 디스크 캐시를 많이 사용하여 Git 작업 속도를 향상하도록 설계되었습니다. 일반적인 RSS 작업 집합은 사용량이 가장 많은 시기에 사용 가능한 총 RAM의 50% 이내로 맞추는 것이 좋습니다.

| 심각도 | 임계값 |
| -------- | --------- |
| **경고**  | 지속적인 RSS 사용량이 사용 가능한 총 메모리의 50%를 초과합니다. |
| **심각** | 지속적인 RSS 사용량이 사용 가능한 총 메모리의 70%를 초과합니다. |

메모리가 소진되면 커널 OOM 킬러는 RAM 사용량이 많은 애플리케이션 프로세스를 강제로 종료하여 메모리 리소스를 확보하려고 시도하므로 서비스 중단이 발생할 수 있습니다. 일반적인 작업 과정에서 필요한 것보다 더 많은 메모리를 가상 머신에 할당하는 것이 좋습니다.
