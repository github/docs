---
ms.openlocfilehash: 56d00170560f72e7e4fad39972422cf301b377be
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "147410665"
---
1. SSH 连接到 {% data variables.product.product_location %}。 如果实例包含多个节点，例如，如果配置了高可用性或异地复制，则通过 SSH 连接到主节点。 如果使用群集，则可以通过 SSH 连接到任何节点。 有关 SSH 访问的详细信息，请参阅“[访问管理 shell (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh)”。

   ```shell
   $ ssh -p 122 admin@<em>HOSTNAME</em>
   ```
