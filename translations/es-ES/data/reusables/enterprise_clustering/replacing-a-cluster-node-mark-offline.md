---
ms.openlocfilehash: 6f16454fbe327c50b0f9666022d3f822ec285d88
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "146332244"
---
1. Para marcar el nodo con errores sin conexión, en cualquier nodo, modifique el [archivo de configuración del clúster](/enterprise/admin/guides/clustering/initializing-the-cluster/#about-the-cluster-configuration-file) (`cluster.conf`) en la sección del nodo correspondiente para incluir el texto `offline = true`.

  Por ejemplo, este valor `cluster.conf` modificado marcará el nodo `ghe-data-node-3` como sin conexión:

    <pre>
    [cluster "ghe-data-node-3"]
    hostname = ghe-data-node-3
    <em>offline = true</em>
    ipv4 = 192.168.0.6
    # ipv6 = fd12:3456:789a:1::6
    </pre>
