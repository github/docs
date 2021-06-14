---
title: Resolver um conflito de merge usando a linha de comando
intro: Você pode resolver conflitos de merge usando a linha de comando e um editor de texto.
redirect_from:
  - /articles/resolving-a-merge-conflict-from-the-command-line/
  - /articles/resolving-a-merge-conflict-using-the-command-line
  - /github/collaborating-with-issues-and-pull-requests/resolving-a-merge-conflict-using-the-command-line
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---
Os conflitos de merge ocorrem quando alterações concorrentes são feitas na mesma linha de um arquivo ou quando uma pessoa edita um arquivo e outra pessoa exclui o mesmo arquivo. Para obter mais informações, consulte "[Sobre conflitos de merge](/articles/about-merge-conflicts/)".

{% tip %}

**Dica:** você pode usar o editor de conflitos no {% data variables.product.product_name %} para resolver conflitos de merge de alterações diferentes na linha entre branches que fazem parte de uma pull request. Para obter mais informações, consulte "[Revolver um conflito de merge no GitHub](/articles/resolving-a-merge-conflict-on-github)".

{% endtip %}

### Conflitos de merge de alterações diferentes na linha

Para resolver um conflito de merge causado por alterações diferentes na linha, você deve escolher quais alterações dos diferentes branches incorporar em um novo commit.

Por exemplo, se você e outra pessoa editarem as mesmas linhas do arquivo _styleguide.md_ em branches diferentes do mesmo repositório Git, você receberá um erro de conflito de merge quando tentar fazer merge desses branches. Você deve resolver esse conflito de merge com um novo commit antes de fazer merge desses branches.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Navegue até o repositório Git local que tem o conflito de merge.
  ```shell
  cd <em>REPOSITORY-NAME</em>
  ```
3. Gere uma lista dos arquivos afetados pelo conflito de merge. Neste exemplo, o arquivo *styleguide.md* tem um conflito de merge.
  ```shell
  $ git status
  > # No branch branch-b
  > # Você desfez o merge de paths.
  > #   (resolver conflitos e executar "git commit")
  > #
  > # Desfazer merge de paths:
  > #   (use "git add <file>..." para marcar resoluções)
  > #
  > # ambos modificados:      styleguide.md
  > #
  > nenhuma alteração adicionada ao commit (use "git add" e/ou "git commit -a")
  ```
4. Abra o editor de texto de sua preferência, como o [Atom](https://atom.io/), e navegue até o arquivo que tem conflitos de merge.
5. Para ver o começo do conflito de merge no arquivo, pesquise o marcador de conflito `<<<<<<<` no arquivo. Quando abrir o arquivo no editor de texto, você verá as alterações do branch HEAD ou base após a linha `<<<<<<< HEAD`. Em seguida, você verá `=======`, que divide suas alterações das alterações no outro branch, seguido por `>>>>>>> BRANCH-NAME`. Neste exemplo, uma pessoa escreveu "open an issue" (abrir um problema) no branch base ou HEAD e outra pessoa escreveu "ask your question in IRC" (faça sua pergunta no IRC) no branch de comparação ou `branch-a`.

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

Agora você pode fazer merge dos branches na linha de comando ou [fazer push das alterações para o repositório remoto](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/) no {% data variables.product.product_name %} e [fazer merge das alterações](/articles/merging-a-pull-request/) em uma pull request.

### Conflitos de merge de arquivo removido

Para resolver um conflito de merge causado por alterações concorrentes em um arquivo, quando uma pessoa exclui um arquivo em um branch e outra pessoa edita o mesmo arquivo, você deve escolher se deseja excluir ou manter o arquivo removido em um novo commit.

Por exemplo, se você editou um arquivo, como o *README.md*, e outra pessoa removeu o mesmo arquivo em outro branch no mesmo repositório Git, você receberá um erro de conflito de merge quando tentar fazer merge desses branches. Você deve resolver esse conflito de merge com um novo commit antes de fazer merge desses branches.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Navegue até o repositório Git local que tem o conflito de merge.
  ```shell
  cd <em>REPOSITORY-NAME</em>
  ```
2. Gere uma lista dos arquivos afetados pelo conflito de merge. Neste exemplo, o arquivo *README.md* tem um conflito de merge.
  ```shell
  $ git status
  > # No branch master
  > # Seu branch e o 'origin/master'divergiram,
  > # e possuem 1 e 2 diferentes commits cada, respectivamente.
  > #  (use "git pull" para fazer merge do branch remoto no seu)
  > # Você desfez o merge de paths.
  > #  (resolver conflitos e executar "git commit")
  > #
  > # Desfazer merge de paths:
  > #  (use "git add/rm <file>..." conforme apropriado para marcar a resolução)
  > #
  > #   excluído por nós:   README.md
  > #
  > # nenhuma alteração adicionada ao commit (use "git add" e/ou "git commit -a")
  ```
3. Abra o editor de texto de sua preferência, como o [Atom](https://atom.io/), e navegue até o arquivo que tem conflitos de merge.
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

Agora você pode fazer merge dos branches na linha de comando ou [fazer push das alterações para o repositório remoto](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/) no {% data variables.product.product_name %} e [fazer merge das alterações](/articles/merging-a-pull-request/) em uma pull request.

### Leia mais

- "[Sobre conflitos de merge](/articles/about-merge-conflicts)"
- "[Fazer checkout de pull requests no local](/articles/checking-out-pull-requests-locally/)"
