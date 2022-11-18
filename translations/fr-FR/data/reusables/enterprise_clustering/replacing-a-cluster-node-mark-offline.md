---
ms.openlocfilehash: 6f16454fbe327c50b0f9666022d3f822ec285d88
ms.sourcegitcommit: 505b84dc7227e8a5d518a71eb5c7eaa65b38ce0e
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/09/2022
ms.locfileid: "147876935"
---
1. Pour marquer le nœud défaillant hors connexion, sur n’importe quel nœud, modifiez le [fichier de configuration du cluster](/enterprise/admin/guides/clustering/initializing-the-cluster/#about-the-cluster-configuration-file) (`cluster.conf`) dans la section de nœud appropriée pour inclure le texte `offline = true`.

  Par exemple, ce fichier `cluster.conf` modifié marque le nœud `ghe-data-node-3` comme étant hors connexion :

    <pre>
    [cluster "ghe-data-node-3"]
    hostname = ghe-data-node-3
    <em>offline = true</em>
    ipv4 = 192.168.0.6
    # ipv6 = fd12:3456:789a:1::6
    </pre>
