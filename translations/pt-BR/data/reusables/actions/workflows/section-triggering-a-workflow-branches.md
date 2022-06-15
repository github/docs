Ao usar os eventos de `pull_request` e `pull_request_target`, é possível configurar um fluxo de trabalho para que seja executado somente para pull requests que apontem para branches específicos.

Use o filtro `branches` quando você deseja incluir padrões de nomes de branches ou quando você deseja incluir e excluir padrões de nomes de branches. Use o filtro `branches-ignore` quando você deseja excluir apenas padrões de nome de branches. Você não pode usar ambos os filtros `branches` e `branches-ignore` para o mesmo evento em um fluxo de trabalho.

Se você definir os `branches`/`branches-ignore` e [`caminhos`](#onpushpull_requestpull_request_targetpathspaths-ignore), o fluxo de trabalho só será executado quando ambos os filtros forem satisfeitos.

As palavras-chave `branches` e `branches-ignore` aceitam padrões do glob que usam caracteres como `*`, `**`, `+`, `?`, `!` e outros para combinar com mais de um nome de branch. Se um nome contiver qualquer um desses caracteres e você quiser uma correspondência literal, você deverá escapar de cada um desses caracteres especiais com `\`. Para obter mais informações sobre padrões de glob, consulte a "[Folha de informações para filtrar padrões](/actions/using-workflows/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)".

#### Exemplo: Incluindo branches

Os padrões definidos em `branches` são avaliados com base no nome do ref do Git. Por exemplo, o fluxo de trabalho a seguir seria executado sempre que houvesse um evento `pull_request` para um direcionamento de pull request:

- Uma branch denominado `principal` (`refs/heads/main`)
- Uma branch denominado `mona/octocat` (`refs/heads/mona/octocat`)
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

Quando um padrão corresponde ao padrão `branches-ignore`, o fluxo de trabalho não será executado. Os padrões definidos em `branches` são avaliados com base no nome do ref do Git. Por exemplo, o fluxo de trabalho a seguir seria executado sempre que houver um evento `pull_request`, a menos que o pull request esteja apontando para:

- Uma branch denominado `mona/octocat` (`refs/heads/mona/octocat`)
- Uma branch cujo nome corresponda a `releases/**-alpha`, como `releases/beta/3-alpha` (`refs/heads/releases/beta/3-alpha`)

```yaml
on:
  pull_request:
    # Sequence of patterns matched against refs/heads
    branches-ignore:    
      - 'mona/octocat'
      - 'releases/**-alpha'
```

#### Exemplo: Incluindo e excluindo branches

Você não pode usar `branches` e `branches-ignore` para filtrar o mesmo evento em um único fluxo de trabalho. Se você deseja incluir e excluir padrões de branch para um único evento, use o filtro `branches` junto com o caractere `!` para indicar quais branches devem ser excluídos.

Se você definir um branch com o caractere `!`, você deverá definir pelo menos um branch sem o caractere `!`. Se você deseja apenas excluir branches, use `branches-ignore`.

A ordem de definição dos padrões é importante.

- Um padrão negativo (precedido por `!`) depois de uma correspondência positiva excluirá o Git ref.
- Um padrão positivo correspondente após uma correspondência negativa incluirá a Git ref novamente.

O fluxo de trabalho a seguir será executado em eventos `pull_request` para pull requests que apontem para `releases/10` ou `releases/beta/mona`, mas não para pull requests que apontam para `releases/10-alpha` ou `releases/beta/3-alpha` porque o padrão negativo `!releases/**-alpha` segue o padrão positivo.

```yaml
on:
  pull_request:
    branches:    
      - 'releases/**'
      - '!releases/**-alpha'
```
