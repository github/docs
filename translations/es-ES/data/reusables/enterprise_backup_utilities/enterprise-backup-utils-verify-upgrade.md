---
ms.openlocfilehash: 8289b9aadf88b85cf8d4dc71d2fc74db42c01289
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: "147861705"
---
1. Ejecuta el siguiente comando para comprobar que se ha aplicado la actualización correctamente.
  ```shell
  ./bin/ghe-backup --version
  ```

1. Ejecuta el siguiente comando para comprobar la conectividad SSH entre los {% data variables.product.prodname_ghe_server %} configurados.
  ```shell
  ./bin/ghe-host-check
  ```
  