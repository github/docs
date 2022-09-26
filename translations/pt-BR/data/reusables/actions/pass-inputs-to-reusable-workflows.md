---
ms.openlocfilehash: cbef944587557a76da3f57cb87aeb16e711b6cf9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147065078"
---
Para transmitir entradas nomeadas para um fluxo de trabalho chamado, use a palavra-chave `with` em um trabalho. Use a palavra-chave `secrets` para transmitir segredos nomeados. Para entradas, o tipo de dado do valor de entrada deve corresponder ao tipo especificado no fluxo de trabalho chamado (booleano, número ou string).

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

{% ifversion actions-inherit-secrets-reusable-workflows %} Os fluxos de trabalho que chamam fluxos de trabalho reutilizáveis na mesma organização ou empresa podem usar a palavra-chave `inherit` para passar os segredos implicitamente.

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
