---
ms.openlocfilehash: 56ed7762c2325d0328bd52ca89fe7879b5ce4601
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145086339"
---
Valeurs d’accès et étendues disponibles :

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

Si vous spécifiez l’accès pour l’une de ces étendues, toutes celles qui ne sont pas spécifiées sont définies sur `none`.

Vous pouvez utiliser la syntaxe suivante afin de définir l’accès en lecture ou en écriture pour toutes les étendues disponibles :

```yaml
permissions: read-all|write-all
```

Vous pouvez utiliser la syntaxe suivante afin de désactiver les autorisations pour toutes les étendues disponibles :

```yaml
permissions: {}
```
