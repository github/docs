
When using the `push` and `pull_request` events, you can configure a workflow to run based on what file paths are changed. Path filters are not evaluated for pushes of tags.

Use the `paths` filter when you want to include file path patterns or when you want to both include and exclude file path patterns. Use the `paths-ignore` filter when you only want to exclude file path patterns. You cannot use both the `paths` and `paths-ignore` filters for the same event in a workflow.

If you define both `branches`/`branches-ignore` and `paths`, the workflow will only run when both filters are satisfied.

The `paths` and `paths-ignore` keywords accept glob patterns that use the `*` and `**` wildcard characters to match more than one path name. Para obter mais informações, consulte a "[Folha de consulta de filtro padrão](/actions/using-workflows/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)".

#### Exemplo: Incluindo caminhos

Se pelo menos um caminho corresponder a um padrão no filtro `paths`, o fluxo de trabalho será executado. For example, the following workflow would run anytime you push a JavaScript file (`.js`).

```yaml
on:
  push:
    paths:
      - '**.js'
```

#### Example: Excluding paths

Quando todos os caminhos de nome correspondem a padrões em `paths-ignore`, o fluxo de trabalho não será executado. If any path names do not match patterns in `paths-ignore`, even if some path names match the patterns, the workflow will run.

Um fluxo de trabalho com o seguinte filtro de caminho só será executado em eventos `push` que tiverem pelo menos um arquivo fora do diretório `docs` na raiz do repositório.

```yaml
on:
  push:
    paths-ignore:
      - 'docs/**'
```

#### Example: Including and excluding paths

You can not use `paths` and `paths-ignore` to filter the same event in a single workflow. If you want to both include and exclude path patterns for a single event, use the `paths` filter along with the `!` character to indicate which paths should be excluded.

If you define a path with the `!` character, you must also define at least one path without the `!` character. If you only want to exclude paths, use `paths-ignore` instead.

A ordem de definição dos padrões é importante:

- Um padrão negativo (precedido por `!`) depois de uma correspondência positiva excluirá o caminho.
- Um padrão positivo correspondente após uma correspondência negativa incluirá o caminho novamente.

Este exemplo é executado sempre que o evento `push` inclui um arquivo no diretório `sub-project` ou seus subdiretórios, a menos que o arquivo esteja no diretório `sub-project/docs`. Por exemplo, um push que alterou `sub-project/index.js` ou `sub-project/src/index.js` acionará uma execução de fluxo de trabalho, mas um push que altere somente`sub-project/docs/readme.md` não acionará.

```yaml
on:
  push:
    paths:
      - 'sub-project/**'
      - '!sub-project/docs/**'
```

### Comparações Git diff

{% note %}

**Observação:** Se você fizer push de mais de 1.000 commits, ou se {% data variables.product.prodname_dotcom %} não gerar o diff devido a um tempo limite, o fluxo de trabalho sempre será executado.

{% endnote %}

O filtro determina se um fluxo de trabalho deve ser executado avaliando os arquivos alterados e comparando-os à lista de `paths-ignore` ou `paths`. Se não houver arquivos alterados, o fluxo de trabalho não será executado.

O {% data variables.product.prodname_dotcom %} gera a lista de arquivos alterados usando diffs de dois pontos para pushes e diffs de três pontos para pull requests:
- **Pull requests:** diffs de três pontos são uma comparação entre a versão mais recente do branch de tópico e o commit onde o branch de tópico foi sincronizado pela última vez com o branch de base.
- **Pushes para branches existentes:** um diff de dois pontos compara os SHAs head e base, um com o outro.
- **Pushes para novos branches:** um diff de dois pontos compara o principal do ancestral do commit mais extenso que foi feito push.

Os diffs limitam-se a 300 arquivos. Se houver arquivos alterados que não correspondam aos primeiros 300 arquivos retornados pelo filtro, o fluxo de trabalho não será executado. Talvez seja necessário criar filtros mais específicos para que o fluxo de trabalho seja executado automaticamente.

Para obter mais informações, consulte "[Sobre comparação de branches em pull requests](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests)".
