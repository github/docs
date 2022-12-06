---
ms.openlocfilehash: 973fe98cbaff849fa234134175d35ae042510638
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: "147880479"
---
1. Если вы заменяете основной узел MySQL или Redis, в `cluster.conf` измените значение `mysql-master` или `redis-master` на имя узла для замены.

  Например, в следующем измененном файле `cluster.conf` новый подготовленный узел кластера `ghe-replacement-data-node-1` указан в качестве основного узла MySQL и Redis:

  <pre>
  mysql-master = <em>ghe-replacement-data-node-1</em>
  redis-master = <em>ghe-replacement-data-node-1</em>
  </pre>
