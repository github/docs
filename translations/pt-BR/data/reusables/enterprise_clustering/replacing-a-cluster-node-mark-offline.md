---
ms.openlocfilehash: 6f16454fbe327c50b0f9666022d3f822ec285d88
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "146332237"
---
1. Para marcar o nó com falha offline, em qualquer nó, modifique o [arquivo de configuração do cluster](/enterprise/admin/guides/clustering/initializing-the-cluster/#about-the-cluster-configuration-file) (`cluster.conf`) na seção de nó relevante para incluir o texto `offline = true`.

  Por exemplo, este `cluster.conf` modificado marcará o nó `ghe-data-node-3` como offline:

    <pre>
    [cluster "ghe-data-node-3"]
    hostname = ghe-data-node-3
    <em>offline = true</em>
    ipv4 = 192.168.0.6
    # ipv6 = fd12:3456:789a:1::6
    </pre>
