
When using the `push` event, you can configure a workflow to run on specific branches or tags.

Use the `branches` filter when you want to include branch name patterns or when you want to both include and exclude branch names patterns. Use the `branches-ignore` filter when you only want to exclude branch name patterns. You cannot use both the `branches` and `branches-ignore` filters for the same event in a workflow.

Use the `tags` filter when you want to include tag name patterns or when you want to both include and exclude tag names patterns. Use the `tags-ignore` filter when you only want to exclude tag name patterns. You cannot use both the `tags` and `tags-ignore` filters for the same event in a workflow.

If you define only `tags`/`tag-ignore` or only `branches`/`branches-ignore`, the workflow won't run for events affecting the undefined Git ref. If you define neither  `tags`/`tag-ignore` or `branches`/`branches-ignore`, the workflow will run for events affecting either branches or tags. If you define both `branches`/`branches-ignore` and [`paths`](#onpushpull_requestpull_request_targetpathspaths-ignore), the workflow will only run when both filters are satisfied.

As palavras-chave `branches`, `branches-ignore`, `tags`, and `tags-ignore` aceitam padrões do glob que usam caracteres como `*`, `**`, `+`, `?`, `!` e outros para corresponder a mais de um nome do branch ou tag. Se um nome contiver qualquer um desses caracteres e você quiser uma correspondência literal, você deverá *escapar* de cada um desses caracteres especiais com `\`. Para obter mais informações sobre padrões de glob, consulte a "[Folha de informações para filtrar padrões](/actions/using-workflows/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)".

#### Exemplo: Incluindo branches e tags

Os padrões definidos nos `branches` e `tags` são avaliados relativamente ao nome do Git ref. For example, the following workflow would run whenever there is a `push` event to:

- A branch named `main` (`refs/heads/main`)
- A branch named `mona/octocat` (`refs/heads/mona/octocat`)
- A branch whose name starts with `releases/`, like `releases/10` (`refs/heads/releases/10`)
- A tag named `v2` (`refs/tags/v2`)
- A tag whose name starts with `v1.`, like `v1.9.1` (`refs/tags/v1.9.1`)

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

#### Example: Excluding branches and tags

When a pattern matches the `branches-ignore` or `tags-ignore` pattern, the workflow will not run. Os padrões definidos nos `branches` e `tags` são avaliados relativamente ao nome do Git ref. For example, the following workflow would run whenever there is a `push` event, unless the `push` event is to:

- A branch named `mona/octocat` (`refs/heads/mona/octocat`)
- A branch whose name matches `releases/**-alpha`, like `beta/3-alpha` (`refs/releases/beta/3-alpha`)
- A tag named `v2` (`refs/tags/v2`)
- A tag whose name starts with `v1.`, like `v1.9` (`refs/tags/v1.9`)

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

#### Example: Including and excluding branches and tags

You can't use `branches` and `branches-ignore` to filter the same event in a single workflow. Similarly, you can't use `tags` and `tags-ignore` to filter the same event in a single workflow. If you want to both include and exclude branch or tag patterns for a single event, use the `branches` or `tags` filter along with the `!` character to indicate which branches or tags should be excluded.

If you define a branch with the `!` character, you must also define at least one branch without the `!` character. If you only want to exclude branches, use `branches-ignore` instead. Similarly, if you define a tag with the `!` character, you must also define at least one tag without the `!` character. If you only want to exclude tags, use `tags-ignore` instead.

A ordem de definição dos padrões é importante.

- Um padrão negativo (precedido por `!`) depois de uma correspondência positiva excluirá o Git ref.
- Um padrão positivo correspondente após uma correspondência negativa incluirá a Git ref novamente.

O fluxo de trabalho a seguir será executado em pushes para `releases/10` ou `releases/beta/mona`, mas não em `releases/10-alpha` ou `releases/beta/3-alpha`, pois o padrão negativo `!releases/**-alpha` está na sequência do padrão positivo.

```yaml
on:
  push:
    branches:
      - 'releases/**'
      - '!releases/**-alpha'
```
