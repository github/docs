---
ms.openlocfilehash: a35ad50ac71e34c7aecdc8f58720f962375acabd
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145065303"
---

Ao usar o evento `workflow_run`, você pode especificar os branches nos quais o fluxo de trabalho de gatilho precisa ser executado para disparar o fluxo de trabalho.

Os filtros `branches` e `branches-ignore` aceitam padrões glob que usam caracteres como `*`, `**`, `+`, `?`, `!` e outros para corresponder a mais de um nome de branch. Se um nome contiver um desses caracteres e você quiser ter uma correspondência literal, *faça escape* de cada um desses caracteres especiais com `\`. Para obter mais informações sobre padrões glob, confira a "[Folha de referências de padrões de filtro](/actions/using-workflows/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)".

Por exemplo, um fluxo de trabalho com o seguinte gatilho só será executado quando o fluxo de trabalho chamado `Build` for executado em um branch cujo nome começa com `releases/`:

```yaml
on:
  workflow_run:
    workflows: ["Build"]
    types: [requested]
    branches:
      - 'releases/**'
```

Um fluxo de trabalho com o seguinte gatilho só será executado quando o fluxo de trabalho chamado `Build` for executado em um branch que não seja chamado `canary`:

```yaml
on:
  workflow_run:
    workflows: ["Build"]
    types: [requested]
    branches-ignore:
      - "canary"
```

Não é possível usar os filtros `branches` e `branches-ignore` para o mesmo evento em um fluxo de trabalho. Caso deseje incluir e excluir padrões de branch para um só evento, use o filtro `branches` com o caractere `!` para indicar os branches que devem ser excluídos.

A ordem na qual você define os padrões é importante.

- Um padrão de correspondência negativa (precedido por `!`) após uma correspondência positiva excluirá o branch.
- Um padrão positivo correspondente após uma correspondência negativa incluirá o branch novamente.

Por exemplo, um fluxo de trabalho com o gatilho a seguir será executado quando o fluxo de trabalho chamado `Build` for executado em um branch chamado `releases/10` ou `releases/beta/mona` que não será `releases/10-alpha`, `releases/beta/3-alpha` ou `main`.

```yaml
on:
  workflow_run:
    workflows: ["Build"]
    types: [requested]
    branches:
      - 'releases/**'
      - '!releases/**-alpha'
```
