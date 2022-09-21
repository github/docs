---
ms.openlocfilehash: 4e50754bfa8075681d503e689df630855eedbbab
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145083800"
---

Ao usar o evento `push`, você pode configurar um fluxo de trabalho para ser executado em marcas ou em branches específicos.

Use o filtro `branches` quando quiser incluir padrões de nomes de branches ou quando quiser incluir e excluir padrões de nomes de branches. Use o filtro `branches-ignore` quando quiser excluir apenas padrões de nomes de branches. Não é possível usar os filtros `branches` e `branches-ignore` para o mesmo evento em um fluxo de trabalho.

Use o filtro `tags` quando quiser incluir padrões de nomes de marcas ou quando quiser incluir e excluir padrões de nomes de marcas. Use o filtro `tags-ignore` quando quiser excluir apenas padrões de nomes de marcas. Não é possível usar os filtros `tags` e `tags-ignore` para o mesmo evento em um fluxo de trabalho.

Se você definir apenas `tags`/`tags-ignore` ou apenas `branches`/`branches-ignore`, o fluxo de trabalho não será executado para eventos que afetam a referência indefinida do Git. Se você não definir `tags`/`tags-ignore` nem `branches`/`branches-ignore`, o fluxo de trabalho será executado para eventos que afetam branches ou marcas. Se você definir `branches`/`branches-ignore` e [`paths`](#onpushpull_requestpull_request_targetpathspaths-ignore), o fluxo de trabalho só será executado quando ambos os filtros forem atendidos.

As palavras-chave `branches`, `branches-ignore`, `tags` e `tags-ignore` aceitam padrões glob que usam caracteres como `*`, `**`, `+`, `?`, `!` e outros para corresponder a mais de um nome de marca ou de branch. Se um nome contiver um desses caracteres e você quiser ter uma correspondência literal, *faça escape* de cada um desses caracteres especiais com `\`. Para obter mais informações sobre padrões glob, confira a "[Folha de referências de padrões de filtro](/actions/using-workflows/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)".

#### Exemplo: Incluindo branches e tags

Os padrões definidos em `branches` e `tags` são avaliados em relação ao nome de referência do Git. Por exemplo, o seguinte fluxo de trabalho será executado sempre que houver um evento `push` para:

- Um branch chamado `main` (`refs/heads/main`)
- Um branch chamado `mona/octocat` (`refs/heads/mona/octocat`)
- Um branch cujo nome começa com `releases/`, como `releases/10` (`refs/heads/releases/10`)
- Uma marca chamada `v2` (`refs/tags/v2`)
- Uma marca cujo nome começa com `v1.`, como `v1.9.1` (`refs/tags/v1.9.1`)

```yaml
on:
  push:
    # Sequence of patterns matched against refs/heads
    branches:    
      - main
      - 'mona/octocat'
      - 'releases/**'
    # Sequence of patterns matched against refs/tags
    tags:        
      - v2
      - v1.*
```

#### Exemplo: Excluindo branches e tags

Quando um padrão corresponder ao padrão `branches-ignore` ou `tags-ignore`, o fluxo de trabalho não será executado. Os padrões definidos em `branches` e `tags` são avaliados em relação ao nome de referência do Git. Por exemplo, o seguinte fluxo de trabalho será executado sempre que houver um evento `push`, a menos que o evento `push` seja para:

- Um branch chamado `mona/octocat` (`refs/heads/mona/octocat`)
- Um branch cujo nome corresponde a `releases/**-alpha`, como `beta/3-alpha` (`refs/releases/beta/3-alpha`)
- Uma marca chamada `v2` (`refs/tags/v2`)
- Uma marca cujo nome começa com `v1.`, como `v1.9` (`refs/tags/v1.9`)

```yaml
on:
  push:
    # Sequence of patterns matched against refs/heads
    branches-ignore:    
      - 'mona/octocat'
      - 'releases/**-alpha'
    # Sequence of patterns matched against refs/tags
    tags-ignore:        
      - v2
      - v1.*
```

#### Exemplo: Incluindo e excluindo branches e tags

Não é possível usar `branches` e `branches-ignore` para filtrar o mesmo evento em um fluxo de trabalho individual. Da mesma forma, não é possível usar `tags` e `tags-ignore` para filtrar o mesmo evento em um fluxo de trabalho individual. Caso deseje incluir e excluir padrões de branch para um evento individual, use o filtro `branches` ou `tags` com o caractere `!` para indicar as marcas ou os branches que devem ser excluídos.

Se você definir um branch com o caractere `!`, também precisará definir, pelo menos, um branch sem o caractere `!`. Caso deseje apenas excluir os branches, use `branches-ignore`. Da mesma forma, se você definir uma marca com o caractere `!`, também precisará definir, pelo menos, uma marca sem o caractere `!`. Caso deseje apenas excluir as marcas, use `tags-ignore`.

A ordem na qual você define os padrões é importante.

- Um padrão de correspondência negativa (precedido por `!`) após uma correspondência positiva excluirá a referência do Git.
- Um padrão positivo correspondente após uma correspondência negativa incluirá a Git ref novamente.

O fluxo de trabalho a seguir será executado em pushes para `releases/10` ou `releases/beta/mona`, mas não em `releases/10-alpha` ou `releases/beta/3-alpha` porque o padrão `!releases/**-alpha` negativo vem após o padrão positivo.

```yaml
on:
  push:
    branches:
      - 'releases/**'
      - '!releases/**-alpha'
```
