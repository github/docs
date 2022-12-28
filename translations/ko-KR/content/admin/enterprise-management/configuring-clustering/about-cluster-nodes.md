---
title: 클러스터 노드 정보
intro: '노드는 클러스터에서 작동하는 {% data variables.product.prodname_ghe_server %} 인스턴스입니다. 각 노드는 클러스터에게, 궁극적으로 사용자에게 제공되는 서비스 집합을 실행합니다.'
redirect_from:
  - /enterprise/admin/clustering/about-cluster-nodes
  - /enterprise/admin/enterprise-management/about-cluster-nodes
  - /admin/enterprise-management/about-cluster-nodes
versions:
  ghes: '*'
type: overview
topics:
  - Clustering
  - Enterprise
ms.openlocfilehash: 6c009e5d5aa1c2f0b2d3effb3beab2d51f48b070
ms.sourcegitcommit: ced661bdffebd0f96f6f76db109fbe31983448ba
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/16/2022
ms.locfileid: '148167080'
---
{% data reusables.enterprise_clustering.clustering-requires-https %}

## 최소 하드웨어 권장 사항
각 노드에는 루트 볼륨과 별도의 데이터 볼륨이 있어야 합니다. 최소 권장 사항입니다. 사용자 활동 및 선택한 통합과 같은 사용량에 따라 더 많은 리소스가 필요할 수 있습니다.

| 서비스 | 필요한 최소 메모리    | 필요한 최소 데이터 볼륨 사용 가능한 공간 |
| :-: | :-: | :-: |
| `job-server`,<br/>`memcache-server`,<br/>`web-server` | 14 GB | 1GB |
| `consul-server`,<br/>`mysql-server`,<br/>`redis-server` | 14 GB | 10 GB |
| `git-server`,<br/>`metrics-server`,<br/>`pages-server`,<br/>`storage-server` | 14 GB | 10 GB |
| `elasticsearch-server` | 14 GB | 10 GB |

## 클러스터링에 필요한 서비스
적절한 중복성을 위해 각 서비스를 작동하는 이 최소 노드를 사용하세요.

{% tip %}

**참고:** 조직의 스케일링 성능에 대한 요구 사항은 리포지토리의 크기 및 수, 사용자 수 및 전반적인 사용률을 비롯한 여러 요인에 따라 달라집니다.

{% endtip %}

| 서비스 | 필요한 최소 노드 |
| :-: | :-: |
| `job-server`,<br/>`memcache-server`,<br/>`metrics-server`,<br/>`web-server` | 2 |
| `mysql-server`,<br/>`redis-server` | 2 |
| `consul-server` | 3 |
| `git-server`,<br/>`pages-server`,<br/>`storage-server` | 3 |
| `elasticsearch-server` | 3 |

## 클러스터 디자인 권장 사항

클러스터링을 통해 {% data variables.product.prodname_ghe_server %}를 구성하는 서비스를 서로 독립적으로 스케일 아웃할 수 있습니다. 유연성을 통해 다양한 스케일링 성능 요구 사항이 있는 조직에 맞는 클러스터를 디자인하고 구현할 수 있습니다. 예를 들어 일부 조직에서는 대규모 또는 빈번한 페치에 더 많은 스토리지 처리량이 필요할 수 있지만 웹 서버 사용량이 상대적으로 낮을 수 있습니다. 다른 조직에서는 스토리지 리소스가 적어 성능이 좋을 수 있지만 `pages-server` 또는 `elasticsearch-server`를 실행하는 많은 노드가 필요할 수 있습니다. 여러 가지 다양한 조합이 가능합니다. 계정 담당자와 협력하여 특정 요구 사항에 가장 적합한 클러스터 구성을 결정하세요.

- 독립 하드웨어에 중복 노드를 분산합니다. CPU, 메모리 또는 스토리지 디바이스를 공유하는 경우 성능을 줄이고 단일 실패 지점을 도입합니다. 공유 네트워킹 구성 요소는 처리량을 줄이고 가동 중단 시 연결이 끊어질 위험이 늘어날 수도 있습니다.
- 빠른 스토리지를 사용합니다. SAN(저장 영역 네트워크)은 절대 처리량이 아닌 최대 공간 사용률, 가용성 및 내결함성을 위해 최적화됩니다. {% data variables.product.prodname_ghe_server %} 클러스터링은 중복성과 가용성을 제공하며, 사용 가능한 가장 빠른 스토리지에서 최상의 성능을 발휘합니다. 로컬 SSD 스토리지를 사용하는 것이 좋습니다.
- 조직에 적합한 노드 계층을 설정합니다. 예제 구성:
  - 두 개의 노드와 다음 서비스가 있는 프런트 엔드 계층:
    - `web-server`
    - `job-server`
    - `memcache-server`
  - 두 개의 노드와 다음 서비스가 있는 데이터베이스 계층:
    - `consul-server`
    - `mysql-server`
    - `redis-server`
  - 세 개의 노드와 다음 서비스가 있는 검색 계층:
    - `elasticsearch-server`
  - 세 개의 노드와 다음 서비스가 있는 스토리지 계층:
    - `git-server`
    - `pages-server`
    - `storage-server`
    - `metrics-server`

### 예제 클러스터 다이어그램
{% note %}

**참고: 이것은 예에 불과합니다.** 조직의 최적의 클러스터 디자인은 고유한 요구 사항에 따라 달라집니다. 최상의 클러스터 구성을 결정할 수 있도록 전담 담당자 또는 {% data variables.contact.contact_enterprise_sales %}에게 문의하세요.

{% endnote %}

<img src="/assets/images/enterprise/cluster/cluster-diagram.png" alt="Example Cluster" style="width: 800px;border:0"/>
