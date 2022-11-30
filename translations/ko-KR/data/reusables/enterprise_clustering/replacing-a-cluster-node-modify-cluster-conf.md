---
ms.openlocfilehash: 66c4be7b876bad3641ec56200dd5c79e1d0433c5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145123815"
---
1. 모든 노드에서 새로 프로비저닝된 대체 노드를 추가하려면 `cluster.conf` 파일을 수정하여 실패한 노드를 제거하고 대체 노드를 추가합니다. 예를 들어 이 수정된 `cluster.conf` 파일은 `ghe-data-node-3`을 새로 프로비저닝된 노드인 `ghe-replacement-data-node-3`으로 바꿉니다.

  <pre>
  [cluster "<em>ghe-replacement-data-node-3</em>"]
    hostname = <em>ghe-replacement-data-node-3</em>
    ipv4 = <em>192.168.0.7</em>
    # ipv6 = fd12:3456:789a:1::7
    git-server = true
    pages-server = true
    mysql-server = true
    elasticsearch-server = true
    redis-server = true
    memcache-server = true
    metrics-server = true
    storage-server = true
  </pre>
