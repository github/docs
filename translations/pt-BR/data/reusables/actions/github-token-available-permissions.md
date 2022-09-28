---
ms.openlocfilehash: 56ed7762c2325d0328bd52ca89fe7879b5ce4601
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145083919"
---
Valores de acesso e escopos disponíveis:

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

Se você especificar o acesso para um desses escopos, todos aqueles que não são especificados serão definidos como `none`.

Você pode usar a sintaxe a seguir para definir o acesso de leitura ou gravação para todos os escopos disponíveis:

```yaml
permissions: read-all|write-all
```

Você pode usar a seguinte sintaxe para desabilitar as permissões para todos os escopos disponíveis:

```yaml
permissions: {}
```
