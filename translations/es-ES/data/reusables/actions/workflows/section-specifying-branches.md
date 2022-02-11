
When using the `workflow_run` event, you can specify what branches the triggering workflow must run on in order to trigger your workflow.

Los filtros de `branches` y `branches-ignore` aceptan patrones globales que utilizan caracteres como `*`, `**`, `+`, `?`, `!` y otros para empatar con más de un nombre de rama. Si un nombre contiene cualquiera de estos caracteres y quieres tener una coincidencia literal, necesitas *escapar* cada uno de estos caracteres especiales con una `\`. Para obtener más información sobre los patrones globales, consulta "[Hoja de información para filtrar patrones](/actions/using-workflows/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)".

For example, a workflow with the following trigger will only run when the workflow named `Build` runs on a branch whose name starts with `releases/`:

```yaml
on:
  workflow_run:
    workflows: ["Build"]
    types: [requested]
    branches:
      - 'releases/**'
```

A workflow with the following trigger will only run when the workflow named `Build` runs on a branch that is not named `canary`:

```yaml
on:
  workflow_run:
    workflows: ["Build"]
    types: [requested]
    branches-ignore:
      - "canary"
```

No puedes utilizar tanto el filtro `branches` como `branches-ignore` para el mismo evento en un flujo de trabajo. Si quieres tanto incluir como excluir patrones de rama para un solo evento, utiliza el filtro `branches` junto con el carácter `!` para indicar qué ramas deberían excluirse.

El orden en que defines los patrones importa.

- A matching negative pattern (prefixed with `!`) after a positive match will exclude the branch.
- A matching positive pattern after a negative match will include the branch again.

Por ejemplo, un flujo de trabajo con el siguiente activador se ejecutará cuando el flujo de trabajo llamado `Build` se ejecute en una rama que se llame `releases/10` o `releases/beta/mona` pero no en las de nombre `releases/10-alpha`, `releases/beta/3-alpha` o `main`.

```yaml
on:
  workflow_run:
    workflows: ["Build"]
    types: [requested]
    branches:
      - 'releases/**'
      - '!releases/**-alpha'
```
