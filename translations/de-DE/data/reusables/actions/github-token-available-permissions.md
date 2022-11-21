---
ms.openlocfilehash: 56ed7762c2325d0328bd52ca89fe7879b5ce4601
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: "145089580"
---
Verfügbare Bereiche und Zugriffswerte:

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

Wenn du den Zugriff für einen dieser Bereiche angibst, werden alle, die nicht angegeben sind, auf `none` festgelegt.

Du kannst die folgende Syntax verwenden, um Lese- oder Schreibzugriff für alle verfügbaren Bereiche zu definieren:

```yaml
permissions: read-all|write-all
```

Du kannst die folgende Syntax verwenden, um Berechtigungen für alle verfügbaren Bereiche zu deaktivieren:

```yaml
permissions: {}
```
