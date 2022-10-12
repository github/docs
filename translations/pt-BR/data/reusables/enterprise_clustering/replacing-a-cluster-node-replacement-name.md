---
ms.openlocfilehash: 973fe98cbaff849fa234134175d35ae042510638
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: "147880473"
---
1. Se você estiver substituindo o nó MySQL ou Redis principal no `cluster.conf`, modifique o valor `mysql-master` ou `redis-master` pelo nome do nó de substituição.

  Por exemplo, esse arquivo `cluster.conf` modificado especifica um nó de cluster recém-provisionado, `ghe-replacement-data-node-1` como o nó do MySQL e e Redis principal:

  <pre>
  mysql-master = <em>ghe-replacement-data-node-1</em>
  redis-master = <em>ghe-replacement-data-node-1</em>
  </pre>
