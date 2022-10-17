---
ms.openlocfilehash: 66c4be7b876bad3641ec56200dd5c79e1d0433c5
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: "145123817"
---
1. Para agregar el nodo de reemplazo recién aprovisionado, en cualquier nodo, `cluster.conf` para quitar el nodo con error y agregar el de reemplazo. Por ejemplo, este archivo `cluster.conf` modificado reemplaza `ghe-data-node-3` por el nodo recién aprovisionado, `ghe-replacement-data-node-3`:

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
