
Cuando utilices el evento `push`, podrás configurar un flujo de trabajo para que se ejecute en ramas o etiquetas específicas.

Utiliza el filtro `branches` cuando quieras incluir patrones de nombre de rama o cuando quieras tanto incluirlos como excluirlos. Utiliza el filtro `branches-ignore` cuando solo quieras excluir los patrones de nombre de rama. No puedes utilizar tanto el filtro `branches` como `branches-ignore` para el mismo evento en un flujo de trabajo.

Utiliza el filtro de `tags` cuando quieras incluir los patrones de nombre de etiqueta o cuando quieras tanto incluirlos como excluirlos. Utiliza el filtro `tags-ignore` cuando solo quieras excluir los patrones de nombre de etiqueta. No puedes utilizar ambos filtros, `tags` y `tags-ignore`, para el mismo evento en un flujo de trabajo.

If you define only `tags`/`tags-ignore` or only `branches`/`branches-ignore`, the workflow won't run for events affecting the undefined Git ref. If you define neither  `tags`/`tags-ignore` or `branches`/`branches-ignore`, the workflow will run for events affecting either branches or tags. Si defines `branches`/`branches-ignore` y [`paths`](#onpushpull_requestpull_request_targetpathspaths-ignore), el flujo de trabajo solo se ejecutará cuando ambos filtros se hayan satisfecho.

Las palabras clave `branches`, `branches-ignore`, `tags`, y `tags-ignore` aceptan patrones globales que utilizan caracteres como `*`, `**`, `+`, `?`, `!` y otros para empatar con más de una rama o nombre de etiqueta. Si un nombre contiene cualquiera de estos caracteres y quieres tener una coincidencia literal, necesitas *escapar* cada uno de estos caracteres especiales con una `\`. Para obtener más información sobre los patrones globales, consulta "[Hoja de información para filtrar patrones](/actions/using-workflows/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)".

#### Ejemplo: Incluyendo ramas y etiquetas

Los patrones definidos en `branches` y `tags` se evalúan con el nombre de ref de Git. Por ejemplo, el siguiente flujo de trabajo se ejecutaría siempre que hubiera un evento de `push` para:

- Una rama de nombre `main` (`refs/heads/main`)
- Una rama de nombre `mona/octocat` (`refs/heads/mona/octocat`)
- Una rama cuyo nombre inicie con `releases/`, tal como `releases/10` (`refs/heads/releases/10`)
- Una etiqueta de nombre `v2` (`refs/tags/v2`)
- Una etiqueta cuyo nombre inicie con `v1.`, tal como `v1.9.1` (`refs/tags/v1.9.1`)

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

#### Ejemplo: Excluir ramas y etiquetas

Cuando un patrón empata con el de `branches-ignore` o `tags-ignore`, no se ejecutará el flujo de trabajo. Los patrones definidos en `branches` y `tags` se evalúan con el nombre de ref de Git. Por ejemplo, el siguiente flujo de trabajo se ejecutaría siempre que haya un evento `push`, a menos de que el evento `push` sea para:

- Una rama de nombre `mona/octocat` (`refs/heads/mona/octocat`)
- Una rama cuyo nombre empate con `releases/**-alpha`, tal como `beta/3-alpha` (`refs/releases/beta/3-alpha`)
- Una etiqueta de nombre `v2` (`refs/tags/v2`)
- Una etiqueta cuyo nombre inicie con `v1.`, tal como `v1.9` (`refs/tags/v1.9`)

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

#### Ejemplo: incluir y excluir ramas y etiquetas

No puedes utilizar `branches` y `branches-ignore` para filtrar el mismo evento en un solo flujo de trabajo. De forma similar, no puedes utilizar `tags` y `tags-ignore` para filtrar el mismo evento en un solo flujo de trabajo. Si quieres incluir y excluir patrones de etiquetas o ramas para un solo evento, utiliza el filtro `branches` o `tags` junto con el carácter `!` para indicar qué ramas o etiquetas deberían excluirse.

Si defines una rama con el carácter `!`, también debes definir por lo mismo una rama sin el carácter `!`. Si solo quieres excluir ramas, utiliza `branches-ignore` en su lugar. Del mismo modo, si defines una etiqueta con el carácter `!`, también debes definir por lo menos una etiqueta sin el carácter `!`. Si solo quieres excluir las etiquetas, utiliza `tags-ignore` en su lugar.

El orden en que defines los patrones importa.

- Un patrón negativo de coincidencia (con prefijo `!`) luego de una coincidencia positiva excluirá la ref de Git.
- Un patrón positivo de coincidencia luego de una coincidencia negativa volverá a incluir la ref de Git.

El siguiente flujo de trabajo se ejecutará en las subidas a `releases/10` o `releases/beta/mona`, pero no en `releases/10-alpha` o `releases/beta/3-alpha` porque el patrón negativo `!releases/**-alpha` le sigue al patrón positivo.

```yaml
on:
  push:
    branches:
      - 'releases/**'
      - '!releases/**-alpha'
```
