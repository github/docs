
Ao usar o evento `push`, você pode configurar um fluxo de trabalho para ser executado em branches ou tags específicos.

Use o filtro `branches` quando você deseja incluir padrões de nomes de branches ou quando você deseja incluir e excluir padrões de nomes de branches. Use o filtro `branches-ignore` quando você deseja excluir apenas padrões de nome de branches. Você não pode usar ambos os filtros `branches` e `branches-ignore` para o mesmo evento em um fluxo de trabalho.

Use o filtro `tags` quando você deseja incluir padrões de nomes de tags ou quando você deseja incluir e excluir padrões de nomes de tags. Use o filtro `tags-ignore` quando você deseja excluir apenas padrões de nome de tag. Não é possível usar os filtros `tags` e `tags-ignore` para o mesmo evento em um fluxo de trabalho.

Se você definir apenas `tags`/`tags-ignore` ou apenas `branches`/`branches-ignore`, o fluxo de trabalho não será executado para eventos que afetam o ref indefinido do Git. Se você não definir `tags`/`tags-ignore` ou `branches`/`branches-ignore`, o fluxo de trabalho será executado para eventos que afetam branches ou tags. Se você definir os `branches`/`branches-ignore` e [`caminhos`](#onpushpull_requestpull_request_targetpathspaths-ignore), o fluxo de trabalho só será executado quando ambos os filtros forem satisfeitos.

As palavras-chave `branches`, `branches-ignore`, `tags`, and `tags-ignore` aceitam padrões do glob que usam caracteres como `*`, `**`, `+`, `?`, `!` e outros para corresponder a mais de um nome do branch ou tag. Se um nome contiver qualquer um desses caracteres e você quiser uma correspondência literal, você deverá *escapar* de cada um desses caracteres especiais com `\`. Para obter mais informações sobre padrões de glob, consulte a "[Folha de informações para filtrar padrões](/actions/using-workflows/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)".

#### Exemplo: Incluindo branches e tags

Os padrões definidos nos `branches` e `tags` são avaliados relativamente ao nome do Git ref. Por exemplo, o fluxo de trabalho seguinte seria executado sempre que houver um evento `push` para:

- Uma branch denominado `principal` (`refs/heads/main`)
- Uma branch denominado `mona/octocat` (`refs/heads/mona/octocat`)
- Um branch cujo nome começa com `releases/`, como `releases/10` (`refs/heads/releases/10`)
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

- Uma branch denominado `mona/octocat` (`refs/heads/mona/octocat`)
- Uma branch cujo nome corresponde a `releases/**-alpha`, como `beta/3-alpha` (`refs/releases/beta/3-alpha`)
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

Se você definir um branch com o caractere `!`, você deverá definir pelo menos um branch sem o caractere `!`. Se você deseja apenas excluir branches, use `branches-ignore`. Da mesma forma, se você definir uma tag com o caractere `!`, você também deverá definir pelo menos uma tag sem o caractere `!`. Se você deseja apenas excluir tags, use `tags-ignore`.

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
