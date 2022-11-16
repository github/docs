---
ms.openlocfilehash: 56ed7762c2325d0328bd52ca89fe7879b5ce4601
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/12/2022
ms.locfileid: "145089581"
---
Доступные области и значения доступа:

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

Если указать доступ для любой из этих областей, для всех не указанных параметров будет задано значение `none`.

Для определения доступа на чтение или запись для всех доступных областей можно использовать следующий синтаксис:

```yaml
permissions: read-all|write-all
```

Для отключения разрешений для всех доступных областей можно использовать следующий синтаксис:

```yaml
permissions: {}
```
