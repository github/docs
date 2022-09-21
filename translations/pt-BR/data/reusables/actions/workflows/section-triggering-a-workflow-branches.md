---
ms.openlocfilehash: 476305b7c40430f20edb235a1c1ce73482464c90
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "146064232"
---
Ao usar os eventos `pull_request` e `pull_request_target`, você pode configurar um fluxo de trabalho para ser executado somente para solicitações de pull direcionadas a branches específicos.

Use o filtro `branches` quando quiser incluir padrões de nomes de branches ou quando quiser incluir e excluir padrões de nomes de branches. Use o filtro `branches-ignore` quando quiser excluir apenas padrões de nomes de branches. Não é possível usar os filtros `branches` e `branches-ignore` para o mesmo evento em um fluxo de trabalho.

Se você definir `branches`/`branches-ignore` e [`paths`](#onpushpull_requestpull_request_targetpathspaths-ignore), o fluxo de trabalho só será executado quando ambos os filtros forem atendidos.

As palavras-chave `branches` e `branches-ignore` aceitam padrões glob que usam caracteres como `*`, `**`, `+`, `?`, `!` e outros para corresponder a mais de um nome de branch. Se um nome contiver um desses caracteres e você quiser ter uma correspondência literal, faça escape de cada um desses caracteres especiais com `\`. Para obter mais informações sobre padrões glob, confira a "[Folha de referências de padrões de filtro](/actions/using-workflows/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)".

#### Exemplo: Incluindo branches

Os padrões definidos em `branches` são avaliados em relação ao nome da referência do Git. Por exemplo, o seguinte fluxo de trabalho será executado sempre que houver um evento `pull_request` para uma solicitação de pull direcionada a:

- Um branch chamado `main` (`refs/heads/main`)
- Um branch chamado `mona/octocat` (`refs/heads/mona/octocat`)
- Um branch cujo nome começa com `releases/`, como `releases/10` (`refs/heads/releases/10`)

```yaml
on:
  pull_request:
    # Sequence of patterns matched against refs/heads
    branches:    
      - main
      - 'mona/octocat'
      - 'releases/**'
```

#### Exemplo: Excluir branches

Quando um padrão corresponder ao padrão `branches-ignore`, o fluxo de trabalho não será executado. Os padrões definidos em `branches` são avaliados em relação ao nome da referência do Git. Por exemplo, o seguinte fluxo de trabalho será executado sempre que houver um evento `pull_request`, a menos que a solicitação de pull seja direcionada a:

- Um branch chamado `mona/octocat` (`refs/heads/mona/octocat`)
- Um branch cujo nome corresponde a `releases/**-alpha`, como `releases/beta/3-alpha` (`refs/heads/releases/beta/3-alpha`)

```yaml
on:
  pull_request:
    # Sequence of patterns matched against refs/heads
    branches-ignore:    
      - 'mona/octocat'
      - 'releases/**-alpha'
```

#### Exemplo: Incluindo e excluindo branches

Não é possível usar `branches` e `branches-ignore` para filtrar o mesmo evento em um só fluxo de trabalho. Caso deseje incluir e excluir padrões de branch para um só evento, use o filtro `branches` com o caractere `!` para indicar os branches que devem ser excluídos.

Se você definir um branch com o caractere `!`, também precisará definir, pelo menos, um branch sem o caractere `!`. Caso deseje apenas excluir os branches, use `branches-ignore`.

A ordem na qual você define os padrões é importante.

- Um padrão de correspondência negativa (precedido por `!`) após uma correspondência positiva excluirá a referência do Git.
- Um padrão positivo correspondente após uma correspondência negativa incluirá a Git ref novamente.

O fluxo de trabalho a seguir será executado em eventos `pull_request` para solicitações de pull direcionadas a `releases/10` ou `releases/beta/mona`, mas não para solicitações de pull direcionadas a `releases/10-alpha` ou `releases/beta/3-alpha`, porque o padrão `!releases/**-alpha` negativo segue o padrão positivo.

```yaml
on:
  pull_request:
    branches:    
      - 'releases/**'
      - '!releases/**-alpha'
```
