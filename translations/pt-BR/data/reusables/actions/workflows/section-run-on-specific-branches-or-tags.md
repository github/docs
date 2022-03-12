
Ao usar o evento `push`, você pode configurar um fluxo de trabalho para ser executado em branches ou tags específicos.

Use the `branches` filter when you want to include branch name patterns or when you want to both include and exclude branch names patterns. Use the `branches-ignore` filter when you only want to exclude branch name patterns. Você não pode usar ambos os filtros `branches` e `branches-ignore` para o mesmo evento em um fluxo de trabalho.

Use o filtro `tags` quando você deseja incluir padrões de nomes de tags ou quando você deseja incluir e excluir padrões de nomes de tags. Use o filtro `tags-ignore` quando você deseja excluir apenas padrões de nome de tag. Não é possível usar os filtros `tags` e `tags-ignore` para o mesmo evento em um fluxo de trabalho.

If you define only `tags`/`tags-ignore` or only `branches`/`branches-ignore`, the workflow won't run for events affecting the undefined Git ref. If you define neither  `tags`/`tags-ignore` or `branches`/`branches-ignore`, the workflow will run for events affecting either branches or tags. If you define both `branches`/`branches-ignore` and [`paths`](#onpushpull_requestpull_request_targetpathspaths-ignore), the workflow will only run when both filters are satisfied.

As palavras-chave `branches`, `branches-ignore`, `tags`, and `tags-ignore` aceitam padrões do glob que usam caracteres como `*`, `**`, `+`, `?`, `!` e outros para corresponder a mais de um nome do branch ou tag. Se um nome contiver qualquer um desses caracteres e você quiser uma correspondência literal, você deverá *escapar* de cada um desses caracteres especiais com `\`. Para obter mais informações sobre padrões de glob, consulte a "[Folha de informações para filtrar padrões](/actions/using-workflows/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)".

#### Exemplo: Incluindo branches e tags

Os padrões definidos nos `branches` e `tags` são avaliados relativamente ao nome do Git ref. Por exemplo, o fluxo de trabalho seguinte seria executado sempre que houver um evento `push` para:

- A branch named `main` (`refs/heads/main`)
- A branch named `mona/octocat` (`refs/heads/mona/octocat`)
- A branch whose name starts with `releases/`, like `releases/10` (`refs/heads/releases/10`)
- Uma tag denominada `v2` (`refs/tags/v2`)
- Uma tag cujo nome começa com `v1.`, como `v1.9.1` (`refs/tags/v1.9.1`)

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

Quando um padrão corresponde ao padrão de `branches-ignore` ou `tags-ignore` o fluxo de trabalho não será executado. Os padrões definidos nos `branches` e `tags` são avaliados relativamente ao nome do Git ref. Por exemplo, o fluxo de trabalho a seguir seria executado a cada evento de `push`, a menos que o evento `push` seja para:

- A branch named `mona/octocat` (`refs/heads/mona/octocat`)
- A branch whose name matches `releases/**-alpha`, like `beta/3-alpha` (`refs/releases/beta/3-alpha`)
- Uma tag denominada `v2` (`refs/tags/v2`)
- Uma tag cujo nome começa com `v1.`, como `v1.9` (`refs/tags/v1.9`)

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

Você não pode usar `branches` e `branches-ignore` para filtrar o mesmo evento em um único fluxo de trabalho. Da mesma forma, você não pode usar `tags` e `tags-ignore` para filtrar o mesmo evento em um único fluxo de trabalho. Se você deseja incluir e excluir padrões de branches ou tags para um único evento, use o filtro `branches` ou `tags` junto com o caractere `!` para indicar quais branches ou tags devem ser excluídos.

If you define a branch with the `!` character, you must also define at least one branch without the `!` character. If you only want to exclude branches, use `branches-ignore` instead. Da mesma forma, se você definir uma tag com o caractere `!`, você também deverá definir pelo menos uma tag sem o caractere `!`. Se você deseja apenas excluir tags, use `tags-ignore`.

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
