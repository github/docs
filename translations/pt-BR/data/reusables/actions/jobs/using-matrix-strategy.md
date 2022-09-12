---
ms.openlocfilehash: 02f279903abd69f50ad55aa88462c9c8e4b9a1a8
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145085278"
---
Use `jobs.<job_id>.strategy.matrix` para definir uma matriz de diferentes configurações de trabalho. Dentro de sua matriz, defina uma ou mais variáveis seguidas por uma matriz de valores. Por exemplo, a matriz a seguir tem uma variável chamada `version` com o valor `[10, 12, 14]` e uma variável chamada `os` com o valor `[ubuntu-latest, windows-latest]`:

```yaml
jobs:
  example_matrix:
    strategy:
      matrix:
        version: [10, 12, 14]
        os: [ubuntu-latest, windows-latest]
```

Um trabalho será executado para cada combinação possível das variáveis. Neste exemplo, o fluxo de trabalho executará seis trabalhos, um para cada combinação das variáveis `os` e `version`. 

Por padrão, o {% data variables.product.product_name %} maximizará o número de trabalhos executados em paralelo, dependendo da disponibilidade do executor. A ordem das variáveis na matriz determina a ordem na qual os trabalhos são criados. A primeira variável definida será o primeiro trabalho criado na execução do fluxo de trabalho. Por exemplo, a matriz acima criará os trabalhos na seguinte ordem:

- `{version: 10, os: ubuntu-latest}`
- `{version: 10, os: windows-latest}`
- `{version: 12, os: ubuntu-latest}`
- `{version: 12, os: windows-latest}`
- `{version: 14, os: ubuntu-latest}`
- `{version: 14, os: windows-latest}`

Uma matriz pode gerar 256 tarefas no máximo por execução do fluxo de trabalho. Esse limite se aplica a executores hospedados pelo {% data variables.product.product_name %}e auto-hospedados.

As variáveis que você define se tornam propriedades no contexto `matrix`, e você pode referenciar a propriedade em outras áreas do arquivo de fluxo de trabalho. Neste exemplo, você pode usar `matrix.version` e `matrix.os` para acessar o valor atual de `version` e `os` que o trabalho está usando. Para obter mais informações, confira "[Contextos](/actions/learn-github-actions/contexts)".
