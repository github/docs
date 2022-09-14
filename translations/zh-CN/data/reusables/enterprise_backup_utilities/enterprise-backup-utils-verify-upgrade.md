---
ms.openlocfilehash: 8289b9aadf88b85cf8d4dc71d2fc74db42c01289
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/09/2022
ms.locfileid: "147861679"
---
1. 若要验证是否已成功升级，请运行以下命令。
  ```shell
  ./bin/ghe-backup --version
  ```

1. 若要验证配置的 {% data variables.product.prodname_ghe_server %} 之间的 SSH 连接，请运行以下命令。
  ```shell
  ./bin/ghe-host-check
  ```
  