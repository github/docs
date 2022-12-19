---
ms.openlocfilehash: 973fe98cbaff849fa234134175d35ae042510638
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: "147880480"
---
1. Si va a reemplazar el nodo principal de MySQL o Redis, en `cluster.conf`, modifique el valor `mysql-master` o `redis-master` por el nombre del nodo de reemplazo.

  Por ejemplo, en este archivo `cluster.conf` modificado se especifica un nodo de clúster recién aprovisionado, `ghe-replacement-data-node-1` como nodo principal de MySQL y Redis:

  <pre>
  mysql-master = <em>ghe-replacement-data-node-1</em>
  redis-master = <em>ghe-replacement-data-node-1</em>
  </pre>
