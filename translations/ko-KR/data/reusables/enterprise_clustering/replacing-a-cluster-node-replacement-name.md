---
ms.openlocfilehash: 973fe98cbaff849fa234134175d35ae042510638
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: "147880478"
---
1. 기본 MySQL 또는 Redis 노드를 교체하는 경우 `cluster.conf`에서 `mysql-master` 또는 `redis-master` 값을 교체 노드 이름으로 수정합니다.

  예를 들어 이 수정된 `cluster.conf` 파일은 새로 프로비저닝된 클러스터 노드 `ghe-replacement-data-node-1`을 기본 MySQL 및 Redis 노드로 지정합니다.

  <pre>
  mysql-master = <em>ghe-replacement-data-node-1</em>
  redis-master = <em>ghe-replacement-data-node-1</em>
  </pre>
