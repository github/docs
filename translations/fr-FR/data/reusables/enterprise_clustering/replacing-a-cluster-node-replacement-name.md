---
ms.openlocfilehash: 973fe98cbaff849fa234134175d35ae042510638
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "147880475"
---
1. Si vous remplacez le nœud MySQL ou Redis principal, dans `cluster.conf`, modifiez la valeur `mysql-master` ou `redis-master` avec le nom du nœud de remplacement.

  Par exemple, ce fichier `cluster.conf` modifié spécifie un nœud de cluster nouvellement approvisionné, `ghe-replacement-data-node-1`, en tant que nœud MySQL et Redis principal :

  <pre>
  mysql-master = <em>ghe-replacement-data-node-1</em>
  redis-master = <em>ghe-replacement-data-node-1</em>
  </pre>
