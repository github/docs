---
ms.openlocfilehash: 4e8c79051e378c800568f0fcf36c783a1bdd8811
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109906"
---
Puedes utilizar el script de configuración para agregar automáticamente un nuevo ejecutor a un grupo. Por ejemplo, este comando registra un nuevo ejecutor y usa el `--runnergroup` parámetro para agregarlo a un grupo denominado `rg-runnergroup`.

```sh
./config.sh --url $org_or_enterprise_url --token $token --runnergroup rg-runnergroup
```

El comando fallará si el grupo de ejecutores no existe:

```
Could not find any self-hosted runner group named "rg-runnergroup".
```
