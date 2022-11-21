---
ms.openlocfilehash: 6f16454fbe327c50b0f9666022d3f822ec285d88
ms.sourcegitcommit: 505b84dc7227e8a5d518a71eb5c7eaa65b38ce0e
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/09/2022
ms.locfileid: "147878674"
---
1. 모든 노드에서 실패한 노드를 오프라인으로 표시하려면 관련 노드 섹션에서 [클러스터 구성 파일](/enterprise/admin/guides/clustering/initializing-the-cluster/#about-the-cluster-configuration-file)(`cluster.conf`)을 수정하여 `offline = true` 텍스트를 포함합니다.

  예를 들어 이 수정된 `cluster.conf`는 `ghe-data-node-3` 노드를 오프라인으로 표시합니다.

    <pre>
    [cluster "ghe-data-node-3"]
    hostname = ghe-data-node-3
    <em>offline = true</em>
    ipv4 = 192.168.0.6
    # ipv6 = fd12:3456:789a:1::6
    </pre>
