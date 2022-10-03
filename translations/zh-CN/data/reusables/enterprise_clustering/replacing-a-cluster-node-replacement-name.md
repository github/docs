---
ms.openlocfilehash: 973fe98cbaff849fa234134175d35ae042510638
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: "147880474"
---
1. 如果要替换主 MySQL 或 Redis 节点，请在 `cluster.conf` 中，使用替换节点名称修改 `mysql-master` 或 `redis-master` 值。

  例如，此修改的 `cluster.conf` 文件将新预配的群集节点 `ghe-replacement-data-node-1` 指定为主 MySQL 和 Redis 节点：

  <pre>
  mysql-master = <em>ghe-replacement-data-node-1</em>
  redis-master = <em>ghe-replacement-data-node-1</em>
  </pre>
