---
ms.openlocfilehash: 66c4be7b876bad3641ec56200dd5c79e1d0433c5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "145108503"
---
1. Um den neu verteilten Ersatzknoten hinzuzufügen, entferne auf einem beliebigen Knoten in der Datei `cluster.conf` den ausgefallenen Knoten, und füge den neuen Ersatzknoten hinzu. Diese geänderte `cluster.conf`-Datei ersetzt z. B. `ghe-data-node-3` durch den neu bereitgestellten Knoten `ghe-replacement-data-node-3`.

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
