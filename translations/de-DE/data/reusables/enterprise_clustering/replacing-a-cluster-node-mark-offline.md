---
ms.openlocfilehash: 6f16454fbe327c50b0f9666022d3f822ec285d88
ms.sourcegitcommit: 505b84dc7227e8a5d518a71eb5c7eaa65b38ce0e
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: "147876934"
---
1. Um den fehlgeschlagenen Knoten offline auf einem beliebigen Knoten zu markieren, ändere die [Clusterkonfigurationsdatei](/enterprise/admin/guides/clustering/initializing-the-cluster/#about-the-cluster-configuration-file) (`cluster.conf`) im relevanten Knotenabschnitt, sodass der Text `offline = true` enthalten ist.

  Diese geänderte Datei `cluster.conf` markiert beispielsweise den `ghe-data-node-3`-Knoten als offline:

    <pre>
    [cluster "ghe-data-node-3"]
    hostname = ghe-data-node-3
    <em>offline = true</em>
    ipv4 = 192.168.0.6
    # ipv6 = fd12:3456:789a:1::6
    </pre>
