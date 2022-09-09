---
ms.openlocfilehash: 66c4be7b876bad3641ec56200dd5c79e1d0433c5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145123814"
---
1. 任意のノードに対して、新たにプロビジョニングされた置換ノードを追加するには、`cluster.conf` ファイルを修正し、障害が起きたノードを取り除き、置換ノードを追加します。 たとえば、このように変更した `cluster.conf` ファイルでは、`ghe-data-node-3` を新しくプロビジョニングされた `ghe-replacement-data-node-3` ノードで置換します。

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
