
Ao usar o evento `workflow_run`, é possível especificar em quais branches o fluxo de trabalho de acionamento deve ser executado para acionar o seu fluxo de trabalho.

Os filtros `branches` e `branches-ignore` aceitam padrões do glob que usam caracteres como `*`, `**`, `+`, `?`, `!` e outros para combinar com mais de um nome de branch. Se um nome contiver qualquer um desses caracteres e você quiser uma correspondência literal, você deverá *escapar* de cada um desses caracteres especiais com `\`. Para obter mais informações sobre padrões de glob, consulte a "[Folha de informações para filtrar padrões](/actions/using-workflows/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)".

Por exemplo, um fluxo de trabalho com o acionamento a seguir só será executado quando o fluxo de trabalho denominado `Build` for executado em um branch cujo nome comece com `releases/`:

```yaml
on:
  workflow_run:
    workflows: ["Build"]
    types: [requested]
    branches:
      - 'releases/**'
```

Um fluxo de trabalho com o acionamento a seguir só será executado quando o fluxo de trabalho denominado `Build` for executado em um branch que não seja denominado `canary`:

```yaml
on:
  workflow_run:
    workflows: ["Build"]
    types: [requested]
    branches-ignore:
      - "canary"
```

Você não pode usar ambos os filtros `branches` e `branches-ignore` para o mesmo evento em um fluxo de trabalho. Se você deseja incluir e excluir padrões de branch para um único evento, use o filtro `branches` junto com o caractere `!` para indicar quais branches devem ser excluídos.

A ordem de definição dos padrões é importante.

- Um padrão negativo correspondente (precedido por `!`) após uma correspondência positiva excluirá o branch.
- Um padrão positivo correspondente após uma correspondência negativa incluirá o branch novamente.

Por exemplo, um fluxo de trabalho com o acionamento a seguir será executado quando o fluxo de trabalho denominado `Build` for executado em um branch denominado `releases/10` ou `releases/beta/mona` mas não será executado em `releases/10-alpha`, `releases/beta/3-alpha` ou `principal`.

```yaml
on:
  workflow_run:
    workflows: ["Build"]
    types: [requested]
    branches:
      - 'releases/**'
      - '!releases/**-alpha'
```
