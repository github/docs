---
ms.openlocfilehash: cbef944587557a76da3f57cb87aeb16e711b6cf9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "147065086"
---
Para pasar entradas con nombre a un flujo de trabajo con nombre, use la palabra clave `with` en un trabajo. Use la palabra clave `secrets` para pasar secretos con nombre. Para las entradas, el tipo de datos del valor de entrada debe empatar con el tipo especificado en el flujo de trabajo llamado (ya sea booleano, número o secuencia).

{% raw %}
```yaml
jobs:
  call-workflow-passing-data:
    uses: octo-org/example-repo/.github/workflows/reusable-workflow.yml@main
    with:
      username: mona
    secrets:
      envPAT: ${{ secrets.envPAT }}
```
{% endraw %}

{% ifversion actions-inherit-secrets-reusable-workflows %} Los flujos de trabajo que llaman a flujos de trabajo reutilizables de la misma organización o empresa pueden usar la palabra clave `inherit` para pasar implícitamente los secretos.

{% raw %}
```yaml
jobs:
  call-workflow-passing-data:
    uses: octo-org/example-repo/.github/workflows/reusable-workflow.yml@main
    with:
      username: mona
    secrets: inherit
```
{% endraw %}

{%endif%}
