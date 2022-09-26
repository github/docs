---
ms.openlocfilehash: 6f16454fbe327c50b0f9666022d3f822ec285d88
ms.sourcegitcommit: 505b84dc7227e8a5d518a71eb5c7eaa65b38ce0e
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: "147879291"
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
