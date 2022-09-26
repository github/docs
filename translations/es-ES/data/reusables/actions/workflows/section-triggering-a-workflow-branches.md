---
ms.openlocfilehash: 476305b7c40430f20edb235a1c1ce73482464c90
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "146064239"
---
Al usar los eventos `pull_request` y `pull_request_target`, puede configurar un flujo de trabajo a fin de que solo se ejecute para las solicitudes de incorporación de cambios destinadas a ramas específicas.

Use el filtro `branches` cuando quiera incluir patrones de nombre de rama, o bien cuando quiera incluirlos y excluirlos. Use el filtro `branches-ignore` cuando solo quiera excluir patrones de nombre de rama. No puede usar los filtros `branches` y `branches-ignore` para el mismo evento de un flujo de trabajo.

Si define `branches`/`branches-ignore` y [`paths`](#onpushpull_requestpull_request_targetpathspaths-ignore), el flujo de trabajo solo se ejecutará cuando se cumplan los dos filtros.

Las palabras clave `branches` y `branches-ignore` aceptan patrones globales que usan caracteres como `*`, `**`, `+`, `?` y `!`, entre otros, para que coincidan con más de un nombre de rama. Si un nombre contiene cualquiera de estos caracteres y quiere una coincidencia literal, necesita escapar a cada uno de estos caracteres especiales con `\`. Para obtener más información sobre los patrones globales, consulte la "[Hoja de referencia rápida de patrones de filtro](/actions/using-workflows/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)".

#### Ejemplo: Incluir ramas

Los patrones definidos en `branches` se evalúan con el nombre de referencia de Git. Por ejemplo, el siguiente flujo de trabajo se ejecutará siempre que exista un evento `pull_request` para una solicitud de incorporación de cambios destinada a:

- Una rama denominada `main` (`refs/heads/main`)
- Una rama denominada `mona/octocat` (`refs/heads/mona/octocat`)
- Una rama cuyo nombre comienza por `releases/`, como `releases/10` (`refs/heads/releases/10`)

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

Cuando un patrón coincide con el patrón `branches-ignore`, el flujo de trabajo no se ejecutará. Los patrones definidos en `branches` se evalúan con el nombre de referencia de Git. Por ejemplo, el siguiente flujo de trabajo se ejecutará siempre que haya un evento de `pull_request` a menos de que la solicitud de incorporación de cambios esté destinada a:

- Una rama denominada `mona/octocat` (`refs/heads/mona/octocat`)
- Una rama cuyo nombre coincide con `releases/**-alpha`, como `releases/beta/3-alpha` (`refs/heads/releases/beta/3-alpha`)

```yaml
on:
  pull_request:
    # Sequence of patterns matched against refs/heads
    branches-ignore:    
      - 'mona/octocat'
      - 'releases/**-alpha'
```

#### Ejemplo: Incluir y excluir ramas

No puede usar `branches` y `branches-ignore` para filtrar el mismo evento en un único flujo de trabajo. Si quiere tanto incluir como excluir patrones de rama para un solo evento, utilice el filtro `branches` junto con el carácter `!` para indicar qué ramas deberían excluirse.

Si define una rama con el carácter `!`, también tendrá que definir al menos otra sin el carácter `!`. Si solo quiere excluir ramas, use `branches-ignore` en su lugar.

El orden en que defines los patrones importa.

- Un patrón negativo coincidente (con el prefijo `!`) después de una coincidencia positiva hará que se excluya la referencia de Git.
- Un patrón positivo de coincidencia luego de una coincidencia negativa volverá a incluir la ref de Git.

El flujo de trabajo siguiente se ejecutará en eventos `pull_request` para las solicitudes de incorporación de cambios que tienen como destino `releases/10` o `releases/beta/mona`, pero no para las que tienen como destino `releases/10-alpha` o `releases/beta/3-alpha` porque el patrón negativo `!releases/**-alpha` sigue el patrón positivo.

```yaml
on:
  pull_request:
    branches:    
      - 'releases/**'
      - '!releases/**-alpha'
```
