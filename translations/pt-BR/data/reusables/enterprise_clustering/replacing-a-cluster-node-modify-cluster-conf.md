---
ms.openlocfilehash: 66c4be7b876bad3641ec56200dd5c79e1d0433c5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145096752"
---
1. Para adicionar o nó de substituição recém-provisionado, em qualquer nó, modifique o arquivo `cluster.conf` para remover o nó com falha e adicione o nó de substituição. Por exemplo, este arquivo `cluster.conf` modificado substitui `ghe-data-node-3` pelo nó recém-provisionado, `ghe-replacement-data-node-3`:

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
