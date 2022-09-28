---
ms.openlocfilehash: 39b0767cfd400a12b2fb2d6709e2588dce9be503
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: "147764138"
---
Puedes utilizar el script de configuración para agregar automáticamente un nuevo ejecutor a un grupo. Por ejemplo, este comando registra un nuevo ejecutor y usa el `--runnergroup` parámetro para agregarlo a un grupo denominado `rg-runnergroup`.

```sh
./config.sh --url $org_or_enterprise_url --token $token --runnergroup rg-runnergroup
```

El comando fallará si el grupo de ejecutores no existe:

```
Could not find any self-hosted runner group named "rg-runnergroup".
```