
Cuando utilices el evento `workflow_run`, puedes especificar qué ramas debe ejecutar el flujo de trabajo activador para que se active tu flujo.

Los filtros de `branches` y `branches-ignore` aceptan patrones globales que utilizan caracteres como `*`, `**`, `+`, `?`, `!` y otros para empatar con más de un nombre de rama. Si un nombre contiene cualquiera de estos caracteres y quieres tener una coincidencia literal, necesitas *escapar* cada uno de estos caracteres especiales con una `\`. Para obtener más información sobre los patrones globales, consulta "[Hoja de información para filtrar patrones](/actions/using-workflows/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)".

Por ejemplo, un flujo de trabajo con el siguiente activador solo se ejecutará cuando el flujo de trabajo `Build` se ejecute en una rama cuyo nombre inicie con `releases/`:

```yaml
on:
  workflow_run:
    workflows: ["Build"]
    types: [requested]
    branches:
      - 'releases/**'
```

Un flujo de trabajo con el siguiente activador solo se ejecutará cuando el flujo de trabajo llamado `Build` se ejecute en una rama que no se llame `canary`:

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

- El tener una coincidencia de patrón negativo (con prefijo `!`) después de una coincidencia positiva hará que se excluya la rama.
- El tener un patrón de coincidencia positivo después de una coincidencia negativa hará que se incluya la rama nuevamente.

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
