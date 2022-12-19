---
title: Resolver um conflito de merge usando a linha de comando
intro: Você pode resolver conflitos de merge usando a linha de comando e um editor de texto.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line
  - /articles/resolving-a-merge-conflict-from-the-command-line
  - /articles/resolving-a-merge-conflict-using-the-command-line
  - /github/collaborating-with-issues-and-pull-requests/resolving-a-merge-conflict-using-the-command-line
  - /github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Resolve merge conflicts in Git
ms.openlocfilehash: 1d4ff97c2a93d3e5a7aebaa8752810e284203bc1
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883454'
---
Os conflitos de merge ocorrem quando alterações concorrentes são feitas na mesma linha de um arquivo ou quando uma pessoa edita um arquivo e outra pessoa exclui o mesmo arquivo. Para obter mais informações, confira "[Sobre os conflitos de mesclagem](/articles/about-merge-conflicts/)".

{% tip %}

**Dica:** use o editor de conflitos do {% data variables.product.product_name %} para resolver conflitos de mesclagem de alterações de linha concorrentes entre branches que fazem parte de uma solicitação de pull. Para obter mais informações, confira "[Como resolver um conflito de mesclagem no GitHub](/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github)".

{% endtip %}

## Conflitos de merge de alterações diferentes na linha

Para resolver um conflito de merge causado por alterações diferentes na linha, você deve escolher quais alterações dos diferentes branches incorporar em um novo commit.

Por exemplo, se você e outra pessoa editarem o arquivo _styleguide.md_ nas mesmas linhas em branches diferentes do mesmo repositório Git, você receberá um erro de conflito de mesclagem ao tentar mesclar esses branches. Você deve resolver esse conflito de merge com um novo commit antes de fazer merge desses branches.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Navegue até o repositório Git local que tem o conflito de merge.
  ```shell
  cd <em>REPOSITORY-NAME</em>
  ```
3. Gere uma lista dos arquivos afetados pelo conflito de merge. Neste exemplo, o arquivo *styleguide.md* tem um conflito de mesclagem.
  ```shell
  $ git status
  > # On branch branch-b
  > # You have unmerged paths.
  > #   (fix conflicts and run "git commit")
  > #
  > # Unmerged paths:
  > #   (use "git add <file>..." to mark resolution)
  > #
  > # both modified:      styleguide.md
  > #
  > no changes added to commit (use "git add" and/or "git commit -a")
  ```
4. Abra seu editor de texto favorito, como o [Atom](https://atom.io/), e procure o arquivo que contém conflitos de mesclagem.
5. Para ver o início do conflito de mesclagem no arquivo, pesquise o marcador de conflito `<<<<<<<` no arquivo. Ao abrir o arquivo no editor de texto, você verá as alterações do branch HEAD ou base após a linha `<<<<<<< HEAD`. Em seguida, você verá `=======`, o que divide as alterações das alterações no outro branch, seguido de `>>>>>>> BRANCH-NAME`. Neste exemplo, uma pessoa escreveu "abra um problema" no branch HEAD ou base e outra pessoa escreveu "faça sua pergunta no IRC" no branch de comparação ou `branch-a`.

    ```
    If you have questions, please
    <<<<<<< HEAD
    open an issue
    =======
    ask your question in IRC.
    >>>>>>> branch-a
    ```
{% data reusables.pull_requests.decide-how-to-resolve-competing-line-change-merge-conflict %} Neste exemplo, as duas alterações são incorporadas ao merge final:

  ```shell
  If you have questions, please open an issue or ask in our IRC channel if it's more urgent.
  ```
7. Adicione ou faça stage das alterações.
  ```shell
  $ git add .
  ```
8. Faça o commit das suas alterações com um comentário.
  ```shell
  $ git commit -m "Resolved merge conflict by incorporating both suggestions."
  ```

Agora você pode mesclar os branches na linha de comando ou [efetuar push das alterações para o repositório remoto](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/) no {% data variables.product.product_name %} e [mesclar as alterações](/articles/merging-a-pull-request/) em uma solicitação de pull.

## Conflitos de merge de arquivo removido

Para resolver um conflito de merge causado por alterações concorrentes em um arquivo, quando uma pessoa exclui um arquivo em um branch e outra pessoa edita o mesmo arquivo, você deve escolher se deseja excluir ou manter o arquivo removido em um novo commit.

Por exemplo, se você editar um arquivo, como *LEIAME.md*, e outra pessoa remover o mesmo arquivo em outro branch no mesmo repositório Git, você receberá um erro de conflito de mesclagem ao tentar mesclar esses branches. Você deve resolver esse conflito de merge com um novo commit antes de fazer merge desses branches.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Navegue até o repositório Git local que tem o conflito de merge.
  ```shell
  cd <em>REPOSITORY-NAME</em>
  ```
2. Gere uma lista dos arquivos afetados pelo conflito de merge. Neste exemplo, o arquivo *LEIAME.md* tem um conflito de mesclagem.
  ```shell
  $ git status
  > # On branch main
  > # Your branch and 'origin/main' have diverged,
  > # and have 1 and 2 different commits each, respectively.
  > #  (use "git pull" to merge the remote branch into yours)
  > # You have unmerged paths.
  > #  (fix conflicts and run "git commit")
  > #
  > # Unmerged paths:
  > #  (use "git add/rm <file>..." as appropriate to mark resolution)
  > #
  > #   deleted by us:   README.md
  > #
  > # no changes added to commit (use "git add" and/or "git commit -a")
  ```
3. Abra seu editor de texto favorito, como o [Atom](https://atom.io/), e procure o arquivo que contém conflitos de mesclagem.
6. Decida se você deseja manter o arquivo removido. Você pode ver as alterações mais recentes feitas no arquivo removido no editor de texto.

 Para adicionar o arquivo removido de volta ao repositório:
  ```shell
  $ git add README.md
  ```
 Para remover o arquivo do seu repositório:
  ```shell
  $ git rm README.md
  > README.md: needs merge
  > rm 'README.md'
  ```
7. Faça o commit das suas alterações com um comentário.
  ```shell
  $ git commit -m "Resolved merge conflict by keeping README.md file."
  > [branch-d 6f89e49] Merge branch 'branch-c' into branch-d
  ```

Agora você pode mesclar os branches na linha de comando ou [efetuar push das alterações para o repositório remoto](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/) no {% data variables.product.product_name %} e [mesclar as alterações](/articles/merging-a-pull-request/) em uma solicitação de pull.

## Leitura adicional

- "[Sobre os conflitos de mesclagem](/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts)"
- "[Como fazer check-out local de solicitações de pull](/articles/checking-out-pull-requests-locally/)"
