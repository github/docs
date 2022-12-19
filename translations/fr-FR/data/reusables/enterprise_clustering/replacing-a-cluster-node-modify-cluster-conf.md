---
ms.openlocfilehash: 66c4be7b876bad3641ec56200dd5c79e1d0433c5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145108502"
---
1. Pour ajouter le nœud de remplacement nouvellement provisionné, sur n’importe quel nœud, modifiez le fichier `cluster.conf` pour supprimer le nœud ayant échoué et ajouter le nœud de remplacement. Par exemple, ce fichier `cluster.conf` modifié remplace `ghe-data-node-3` par le nœud nouvellement provisionné, `ghe-replacement-data-node-3` :

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
