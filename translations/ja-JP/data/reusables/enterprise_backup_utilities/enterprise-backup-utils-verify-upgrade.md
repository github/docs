---
ms.openlocfilehash: 8289b9aadf88b85cf8d4dc71d2fc74db42c01289
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: "147861688"
---
1. 正常にアップグレードされたことを確認するには、次のコマンドを実行します。
  ```shell
  ./bin/ghe-backup --version
  ```

1. 構成済みの {% data variables.product.prodname_ghe_server %} 間の SSH 接続を確認するには、次のコマンドを実行します。
  ```shell
  ./bin/ghe-host-check
  ```
  