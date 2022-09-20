---
ms.openlocfilehash: 621271104f28983cd2cc1319a302fc1654e54acb
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145065301"
---

Ao usar os eventos `push` e `pull_request`, você pode configurar um fluxo de trabalho para ser executado com base nos caminhos de arquivo alterados. Os filtros de caminho não são avaliados em pushes de tags.

Use o filtro `paths` quando quiser incluir padrões de caminho de arquivo ou quando quiser incluir e excluir padrões de caminho de arquivo. Use o filtro `paths-ignore` quando quiser apenas excluir padrões de caminho de arquivo. Não é possível usar os filtros `paths` e `paths-ignore` para o mesmo evento em um fluxo de trabalho.

Se você definir `branches`/`branches-ignore` e `paths`, o fluxo de trabalho só será executado quando ambos os filtros forem atendidos.

As palavras-chave `paths` e `paths-ignore` aceitam padrões glob que usam os caracteres curinga `*` e `**` para fazer a correspondência com mais de um nome de caminho. Para obter mais informações, confira a "[Folha de referências de padrões de filtro](/actions/using-workflows/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)".

#### Exemplo: Incluindo caminhos

Se, pelo menos, um caminho corresponder a um padrão no filtro `paths`, o fluxo de trabalho será executado. Por exemplo, o fluxo de trabalho a seguir será executado sempre que você efetuar push de um arquivo JavaScript (`.js`).

```yaml
on:
  push:
    paths:
      - '**.js'
```

{% note %}

**Observação:** se um fluxo de trabalho for ignorado devido à [filtragem de caminho](/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore), [à filtragem de branch](/actions/using-workflows/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore) ou a uma [mensagem de commit](/actions/managing-workflow-runs/skipping-workflow-runs), as verificações associadas a esse fluxo de trabalho permanecerão em um estado "Pendente". Uma solicitação de pull que exige que essas verificações sejam bem-sucedidas não poderá ser mesclada. Para obter mais informações, confira "[Como lidar com verificações ignoradas mas obrigatórias](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/troubleshooting-required-status-checks#handling-skipped-but-required-checks)".

{% endnote %}

#### Exemplo: Excluindo caminhos

Quando todos os nomes de caminho corresponderem aos padrões de `paths-ignore`, o fluxo de trabalho não será executado. Se qualquer nome de caminho não corresponder aos padrões de `paths-ignore`, mesmo que alguns nomes de caminho correspondam aos padrões, o fluxo de trabalho será executado.

Um fluxo de trabalho com o filtro de caminho a seguir só será executado em eventos `push` que incluem, pelo menos, um arquivo fora do diretório `docs` na raiz do repositório.

```yaml
on:
  push:
    paths-ignore:
      - 'docs/**'
```

#### Exemplo: Incluindo e excluindo caminhos

Não é possível usar `paths` e `paths-ignore` para filtrar o mesmo evento em um fluxo de trabalho individual. Caso deseje incluir e excluir padrões de caminho para um evento individual, use o filtro `paths` com o caractere `!` para indicar os caminhos que devem ser excluídos.

Se você definir um caminho com o caractere `!`, também precisará definir, pelo menos, um caminho sem o caractere `!`. Caso você deseje apenas excluir os caminhos, use `paths-ignore`.

A ordem de definição dos padrões é importante:

- Um padrão de correspondência negativa (precedido por `!`) após uma correspondência positiva excluirá o caminho do Git.
- Um padrão positivo correspondente após uma correspondência negativa incluirá o caminho novamente.

Este exemplo é executado sempre que o evento `push` inclui um arquivo no diretório `sub-project` ou nos respectivos subdiretórios, a menos que o arquivo esteja no diretório `sub-project/docs`. Por exemplo, um push que alterar `sub-project/index.js` ou `sub-project/src/index.js` vai disparar uma execução de fluxo de trabalho, mas um push que só altera `sub-project/docs/readme.md` não.

```yaml
on:
  push:
    paths:
      - 'sub-project/**'
      - '!sub-project/docs/**'
```

#### Comparações Git diff

{% note %}

**Observação:** se você efetuar push de mais de mil commits ou se o {% data variables.product.prodname_dotcom %} não gerar a comparação devido a um tempo limite, o fluxo de trabalho sempre será executado.

{% endnote %}

O filtro determina se um fluxo de trabalho deve ser executado avaliando os arquivos alterados e executando-os na lista `paths-ignore` ou `paths`. Se não houver arquivos alterados, o fluxo de trabalho não será executado.

O {% data variables.product.prodname_dotcom %} gera a lista de arquivos alterados usando diffs de dois pontos para pushes e diffs de três pontos para pull requests:
- **Solicitações de pull:** as comparações de três pontos são uma comparação entre a versão mais recente do branch do tópico e o commit em que o branch do tópico foi sincronizado pela última vez com o branch base.
- **Pushes para branches existentes:** uma comparação de dois pontos compara os SHAs principal e base diretamente um com o outro.
- **Pushes para novos branches:** uma comparação de dois pontos com o pai do ancestral do commit mais profundo enviado por push.

Os diffs limitam-se a 300 arquivos. Se houver arquivos alterados que não correspondam aos primeiros 300 arquivos retornados pelo filtro, o fluxo de trabalho não será executado. Talvez seja necessário criar filtros mais específicos para que o fluxo de trabalho seja executado automaticamente.

Para obter mais informações, confira "[Sobre a comparação de branches em solicitações de pull](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests)".
