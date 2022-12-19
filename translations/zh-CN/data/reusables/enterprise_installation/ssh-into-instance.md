---
ms.openlocfilehash: 56d00170560f72e7e4fad39972422cf301b377be
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: "147876171"
---
1. SSH 连接到 {% data variables.product.product_location %}。 如果实例包含多个节点，例如，如果配置了高可用性或异地复制，则通过 SSH 连接到主节点。 如果使用群集，则可以通过 SSH 连接到任何节点。 有关 SSH 访问的详细信息，请参阅“[访问管理 shell (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh)”。

   ```shell
   $ ssh -p 122 admin@<em>HOSTNAME</em>
   ```
