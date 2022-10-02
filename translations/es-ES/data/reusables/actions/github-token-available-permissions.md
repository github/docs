---
ms.openlocfilehash: 56ed7762c2325d0328bd52ca89fe7879b5ce4601
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: "145092109"
---
Alcances y valores de acceso disponibles:

```yaml
permissions:
  actions: read|write|none
  checks: read|write|none
  contents: read|write|none
  deployments: read|write|none{% ifversion fpt or ghec %}
  id-token: read|write|none{% endif %}
  issues: read|write|none
  discussions: read|write|none
  packages: read|write|none
  pages: read|write|none
  pull-requests: read|write|none
  repository-projects: read|write|none
  security-events: read|write|none
  statuses: read|write|none
```

Si especifica el acceso para cualquiera de estos ámbitos, todos los que no se especifiquen se establecen en `none`.

Puedes utilizar la siguiente sintaxis para definir el acceso de lectura o escritura para todos los alcances disponibles:

```yaml
permissions: read-all|write-all
```

Puedes utilizar la siguiente sintaxis para inhabilitar los permisos para todos los alcances disponibles:

```yaml
permissions: {}
```
