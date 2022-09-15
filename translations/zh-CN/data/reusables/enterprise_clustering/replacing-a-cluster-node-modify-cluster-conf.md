---
ms.openlocfilehash: 66c4be7b876bad3641ec56200dd5c79e1d0433c5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "145100846"
---
1. 若要添加新预配的替换节点，可在任何节点上修改 `cluster.conf` 文件以删除失败的节点并添加替换节点。 例如，修改后的 `cluster.conf` 文件会将 `ghe-data-node-3` 替换为新预配的节点 `ghe-replacement-data-node-3`：

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
