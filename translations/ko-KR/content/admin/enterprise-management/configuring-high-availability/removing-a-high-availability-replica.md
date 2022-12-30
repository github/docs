---
title: 고가용성 복제본 제거
intro: '{% data variables.product.prodname_ghe_server %} 복제본에 대한 복제를 일시적으로 중지하거나 복제를 영구적으로 제거할 수 있습니다.'
redirect_from:
  - /enterprise/admin/installation/removing-a-high-availability-replica
  - /enterprise/admin/enterprise-management/removing-a-high-availability-replica
  - /admin/enterprise-management/removing-a-high-availability-replica
versions:
  ghes: '*'
type: how_to
topics:
  - Clustering
  - High availability
  - Enterprise
  - Infrastructure
shortTitle: Remove a HA replica
ms.openlocfilehash: 12fe196d38f93cb29bf49413ef9912028d662130
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145116775'
---
## 일시적으로 복제 중지

1. 필요한 경우 복제본에 대한 지역 DNS 항목을 제거하여 지역 복제 복제본이 사용자 트래픽을 처리하지 못하도록 중지합니다.
2. 복제를 일시적으로 중지하려는 복제본에서 ghe-repl-stop을 실행합니다.
  ```shell
  $ ghe-repl-stop
  ```
3. 복제를 다시 시작하려면 `ghe-repl-start`를 실행합니다.
  ```shell
  $ ghe-repl-start
  ```

## 영구적으로 복제 제거

1. 필요한 경우 복제본에 대한 지역 DNS 항목을 제거하여 지역 복제 복제본이 사용자 트래픽을 처리하지 못하도록 중지합니다.
2. 복제를 제거하려는 복제본에서 `ghe-repl-stop`을 실행합니다.
  ```shell
  $ ghe-repl-stop
  ```
3. 복제본에서 복제 상태를 분해하려면 `ghe-repl-teardown`을 실행합니다.
  ```shell
  $ ghe-repl-teardown
  ```

  {% ifversion ghes %} {% note %}
  
  **참고:** {% data variables.product.prodname_actions %}를 사용하도록 설정한 경우 이전 복제본 서버를 해제하거나 다른 외부 스토리지를 사용하도록 {% data variables.product.prodname_actions %} 구성을 업데이트해야 합니다. 자세한 내용은 “[{% data variables.product.prodname_actions %}의 고가용성](/admin/github-actions/high-availability-for-github-actions#high-availability-replicas)”을 참조하세요.
  
  {% endnote %} {% endif %}
