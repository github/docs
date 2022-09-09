---
ms.openlocfilehash: 973fe98cbaff849fa234134175d35ae042510638
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145093744"
---
1. Se você estiver substituindo o nó MySQL ou Redis principal no `cluster.conf`, modifique o valor `mysql-master` ou `redis-master` pelo nome do nó de substituição.

  Por exemplo, esse arquivo `cluster.conf` modificado especifica um nó de cluster recém-provisionado, `ghe-replacement-data-node-1` como o nó do MySQL e e Redis principal:

  <pre>
  mysql-master = <em>ghe-replacement-data-node-1</em>
  redis-master = <em>ghe-replacement-data-node-1</em>
  </pre>
