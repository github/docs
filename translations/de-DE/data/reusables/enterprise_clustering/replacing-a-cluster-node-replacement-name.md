---
ms.openlocfilehash: 973fe98cbaff849fa234134175d35ae042510638
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "147880476"
---
1. Wenn du den primären MySQL- oder Redis-Knoten ersetzt, ändere in `cluster.conf` den `mysql-master`- oder `redis-master`-Wert in den Namen des Ersatzknotens.

  In dieser geänderten `cluster.conf`-Datei wird beispielsweise ein neu bereitgestellter Clusterknoten `ghe-replacement-data-node-1` als primärer MySQL- und Redis-Knoten angegeben:

  <pre>
  mysql-master = <em>ghe-replacement-data-node-1</em>
  redis-master = <em>ghe-replacement-data-node-1</em>
  </pre>
