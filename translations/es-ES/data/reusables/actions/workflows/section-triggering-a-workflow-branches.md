Al usar los eventos `pull_request` y `pull_request_target`, puedes configurar un flujo de trabajo para que se ejecute únicamente para las solicitudes de cambio que apuntan a ramas específicas.

Utiliza el filtro `branches` cuando quieras incluir patrones de nombre de rama o cuando quieras tanto incluirlos como excluirlos. Utiliza el filtro `branches-ignore` cuando solo quieras excluir los patrones de nombre de rama. No puedes utilizar tanto el filtro `branches` como `branches-ignore` para el mismo evento en un flujo de trabajo.

Si defines `branches`/`branches-ignore` y [`paths`](#onpushpull_requestpull_request_targetpathspaths-ignore), el flujo de trabajo solo se ejecutará cuando ambos filtros se hayan satisfecho.

Las palabras clave `branches` y `branches-ignore` aceptan patrones globales que utilizan caracteres como `*`, `**`, `+`, `?`, `!` y otros para empatar con más de un nombre de rama. Si un nombre contiene cualquiera de estos caracteres y quieres una coincidencia literal, necesitas escapar a cada uno de estos caracteres especiales con `\`. Para obtener más información sobre los patrones globales, consulta "[Hoja de información para filtrar patrones](/actions/using-workflows/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)".

#### Ejemplo: Incluir ramas

Los patrones que se definen en `branches` se evalúan contra el nombre de ref de Git. Por ejemplo, el siguiente flujo de trabajo se ejecutaría siempre que exista un evento `pull_request` para una solicitud de cambios que apunte a:

- Una rama de nombre `main` (`refs/heads/main`)
- Una rama de nombre `mona/octocat` (`refs/heads/mona/octocat`)
- Una rama cuyo nombre inicie con `releases/`, tal como `releases/10` (`refs/heads/releases/10`)

```yaml
on:
  pull_request:
    # Sequence of patterns matched against refs/heads
    branches:    
      - main
      - 'mona/octocat'
      - 'releases/**'
```

#### Ejemplo: Excluir ramas

Cuando un patrón empata con el de `branches-ignore`, el flujo de trabajo no se ejecutará. Los patrones que se definen en `branches` se evalúan contra el nombre de ref de Git. Por ejemplo, el siguiente flujo de trabajo se ejecutaría siempre que haya un evento de `pull_request` a menos de que la solicitud de cambios apunte a:

- Una rama de nombre `mona/octocat` (`refs/heads/mona/octocat`)
- Una rama cuyo nombre empata con `releases/**-alpha`, como `releases/beta/3-alpha` (`refs/heads/releases/beta/3-alpha`)

```yaml
on:
  pull_request:
    # Sequence of patterns matched against refs/heads
    branches-ignore:    
      - 'mona/octocat'
      - 'releases/**-alpha'
```

#### Ejemplo: Incluir y excluir ramas

No puedes utilizar `branches` y `branches-ignore` para filtrar el mismo evento en un mismo flujo de trabajo. Si quieres tanto incluir como excluir patrones de rama para un solo evento, utiliza el filtro `branches` junto con el carácter `!` para indicar qué ramas deberían excluirse.

Si defines una rama con el carácter `!`, también debes definir por lo mismo una rama sin el carácter `!`. Si solo quieres excluir ramas, utiliza `branches-ignore` en su lugar.

El orden en que defines los patrones importa.

- Un patrón negativo de coincidencia (con prefijo `!`) luego de una coincidencia positiva excluirá la ref de Git.
- Un patrón positivo de coincidencia luego de una coincidencia negativa volverá a incluir la ref de Git.

El siguiente flujo de trabajo se ejecutará en los eventos de `pull_request` para aquellas solicitudes de cambios que apunten a `releases/10` o a `releases/beta/mona`, pero no para aquellas que apunten a `releases/10-alpha` o `releases/beta/3-alpha`, ya que el patrón negativo `!releases/**-alpha` sigue el patrón positivo.

```yaml
on:
  pull_request:
    branches:    
      - 'releases/**'
      - '!releases/**-alpha'
```
