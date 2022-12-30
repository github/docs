---
ms.openlocfilehash: 4e50754bfa8075681d503e689df630855eedbbab
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: "145091990"
---

Al usar el evento `push`, puede configurar un flujo de trabajo para que se ejecute en ramas o etiquetas específicas.

Use el filtro `branches` cuando quiera incluir patrones de nombre de rama, o bien cuando quiera incluirlos y excluirlos. Use el filtro `branches-ignore` cuando solo quiera excluir patrones de nombre de rama. No puede usar los filtros `branches` y `branches-ignore` para el mismo evento de un flujo de trabajo.

Use el filtro `tags` cuando quiera incluir los patrones de nombre de etiqueta, o bien cuando quiera incluirlos y excluirlos. Use el filtro `tags-ignore` cuando solo quiera excluir patrones de nombre de etiqueta. No puede usar los filtros `tags` y `tags-ignore` para el mismo evento de un flujo de trabajo.

Si solo define `tags`/`tags-ignore` o `branches`/`branches-ignore`, el flujo de trabajo no se ejecutará para eventos que afecten a la referencia de Git no definida. Si no define `tags`/`tags-ignore` ni `branches`/`branches-ignore`, el flujo de trabajo se ejecutará para eventos que afecten a ramas o etiquetas. Si define `branches`/`branches-ignore` y [`paths`](#onpushpull_requestpull_request_targetpathspaths-ignore), el flujo de trabajo solo se ejecutará cuando se cumplan los dos filtros.

Las palabras clave `branches`, `branches-ignore`, `tags` y `tags-ignore` aceptan patrones globales que usan caracteres como `*`, `**`, `+`, `?`, `!` y otros para que coincidan con más de un nombre de rama o etiqueta. Si un nombre contiene cualquiera de estos caracteres y quiere una coincidencia literal, necesita *escapar* a cada uno de estos caracteres especiales con `\`. Para obtener más información sobre los patrones globales, consulte la "[Hoja de referencia rápida de patrones de filtro](/actions/using-workflows/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)".

#### Ejemplo: Incluyendo ramas y etiquetas

Los patrones definidos en `branches` y `tags` se evalúan con el nombre de referencia de Git. Por ejemplo, el siguiente flujo de trabajo se ejecutaría siempre que hubiera un evento `push` para:

- Una rama denominada `main` (`refs/heads/main`)
- Una rama denominada `mona/octocat` (`refs/heads/mona/octocat`)
- Una rama cuyo nombre comienza por `releases/`, como `releases/10` (`refs/heads/releases/10`)
- Una etiqueta denominada `v2` (`refs/tags/v2`)
- Una etiqueta cuyo nombre comienza por `v1.`, como `v1.9.1` (`refs/tags/v1.9.1`)

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

Cuando un patrón coincide con el patrón `branches-ignore` o `tags-ignore`, el flujo de trabajo no se ejecutará. Los patrones definidos en `branches` y `tags` se evalúan con el nombre de referencia de Git. Por ejemplo, el siguiente flujo de trabajo se ejecutará siempre que haya un evento `push`, a menos que el evento `push` sea para:

- Una rama denominada `mona/octocat` (`refs/heads/mona/octocat`)
- Una rama cuyo nombre coincide con `releases/**-alpha`, como `beta/3-alpha` (`refs/releases/beta/3-alpha`)
- Una etiqueta denominada `v2` (`refs/tags/v2`)
- Una etiqueta cuyo nombre comienza por `v1.`, como `v1.9` (`refs/tags/v1.9`)

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

No puede usar `branches` y `branches-ignore` para filtrar el mismo evento en un único flujo de trabajo. Del mismo modo, no puede usar `tags` y `tags-ignore` para filtrar el mismo evento en un único flujo de trabajo. Si quiere tanto incluir como excluir patrones de rama o etiqueta para un solo evento, use el filtro `branches` o `tags` junto con el carácter `!` para indicar qué ramas o etiquetas se deberían excluir.

Si define una rama con el carácter `!`, también tendrá que definir al menos otra sin el carácter `!`. Si solo quiere excluir ramas, use `branches-ignore` en su lugar. Del mismo modo, si define una etiqueta con el carácter `!`, también tendrá que definir al menos otra sin el carácter `!`. Si solo quiere excluir etiquetas, use `tags-ignore` en su lugar.

El orden en que defines los patrones importa.

- Un patrón negativo coincidente (con el prefijo `!`) después de una coincidencia positiva hará que se excluya la referencia de Git.
- Un patrón positivo de coincidencia luego de una coincidencia negativa volverá a incluir la ref de Git.

El siguiente flujo de trabajo se ejecutará en inserciones en `releases/10` o `releases/beta/mona`, pero no en `releases/10-alpha` o `releases/beta/3-alpha`, porque el patrón `!releases/**-alpha` negativo sigue el patrón positivo.

```yaml
on:
  push:
    branches:
      - 'releases/**'
      - '!releases/**-alpha'
```
