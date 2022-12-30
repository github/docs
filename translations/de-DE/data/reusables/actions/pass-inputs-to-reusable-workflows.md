---
ms.openlocfilehash: cbef944587557a76da3f57cb87aeb16e711b6cf9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "147065081"
---
Verwende das Schlüsselwort `with` in einem Auftrag, um benannte Eingaben an einen aufgerufenen Workflow zu übergeben. Verwende das Schlüsselwort `secrets`, um benannte Geheimnisse zu übergeben. Bei Eingaben muss der Datentyp des Eingabewerts dem Typ entsprechen, der im aufgerufenen Workflow angegeben ist (boolescher Wert, Zahl oder Zeichenfolge).

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

{% ifversion actions-inherit-secrets-reusable-workflows %}Workflows, die wiederverwendbare Workflows in derselben Organisation oder im selben Unternehmen aufrufen, können das Schlüsselwort `inherit` verwenden, um die Geheimnisse implizit zu übergeben.

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
