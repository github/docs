---
ms.openlocfilehash: 621271104f28983cd2cc1319a302fc1654e54acb
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: "145069395"
---

Al usar los eventos `push` y `pull_request`, puedes configurar un flujo de trabajo para su ejecución en función de las rutas de acceso de archivo que se cambien. Los filtros de ruta no se evalúan para subidas de etiquetas.

Usa el filtro `paths` cuando quieras incluir patrones de ruta de acceso de archivos o cuando quieras tanto incluirlos como excluirlos. Usa el filtro `paths-ignore` cuando solo quieras excluir patrones de ruta de acceso de archivos. No puede usar los filtros `paths` y `paths-ignore` para el mismo evento de un flujo de trabajo.

Si defines `branches`/`branches-ignore` y `paths`, el flujo de trabajo solo se ejecutará cuando se cumplan ambos filtros.

Las palabras clave `paths` y `paths-ignore` aceptan patrones globales que usan los caracteres comodín `*` y `**` para coincidir con más de un nombre de ruta de acceso. Para obtener más información, consulta la "[Hoja de referencia de patrones de filtro](/actions/using-workflows/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)".

#### Ejemplo: Incluyendo rutas

Si al menos una ruta de acceso coincide con un patrón en el filtro `paths`, se ejecuta el flujo de trabajo. Por ejemplo, el flujo de trabajo siguiente se ejecutaría cada vez que envíes cambios de un archivo JavaScript (`.js`).

```yaml
on:
  push:
    paths:
      - '**.js'
```

{% note %}

**Nota:** Si se omite un flujo de trabajo debido a un [filtrado de ruta](/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore), [filtrado de rama](/actions/using-workflows/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore) o [mensaje de confirmación](/actions/managing-workflow-runs/skipping-workflow-runs), las comprobaciones asociadas a ese flujo de trabajo permanecerán en estado "Pendiente". Se bloqueará la fusión mediante combinación de una solicitud de incorporación de cambios que requiera esas comprobaciones para realizarse correctamente. Para obtener más información, consulta "[Control de comprobaciones omitidas pero necesarias](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/troubleshooting-required-status-checks#handling-skipped-but-required-checks)".

{% endnote %}

#### Ejemplo: Exclusión de rutas de acceso

Cuando todos los nombres de ruta de acceso coincidan con los patrones de `paths-ignore`, el flujo de trabajo no se ejecutará. Si alguno de los nombres de ruta de acceso no coincide con los patrones de `paths-ignore`, aunque algunos nombres de ruta coincidan con estos, el flujo de trabajo se ejecutará.

Un flujo de trabajo con el siguiente filtro de ruta de acceso solo se ejecutará en los eventos `push` que incluyan al menos un archivo externo al directorio `docs` en la raíz del repositorio.

```yaml
on:
  push:
    paths-ignore:
      - 'docs/**'
```

#### Ejemplo: Inclusión y exclusión de rutas de acceso

No puedes usar `paths` y `paths-ignore` para filtrar el mismo evento en un único flujo de trabajo. Si quieres tanto incluir como excluir patrones de ruta de acceso para un solo evento, usa el filtro `paths` junto con el carácter `!` para indicar qué rutas de acceso se deben excluir.

Si defines una ruta de acceso con el carácter `!`, también debes definir al menos una ruta de acceso sin el carácter `!`. Si solo quieres excluir rutas de acceso, usa `paths-ignore` en su lugar.

El orden en que defines los patrones importa:

- El tener una coincidencia de patrón negativo (con el prefijo `!`) después de una coincidencia positiva hará que se excluya la ruta de acceso.
- Un patrón de coincidencia positiva luego de una coincidencia negativa excluirá nuevamente la ruta.

Este ejemplo se ejecuta cada vez que el evento `push` incluye un archivo en el directorio `sub-project` o sus subdirectorios, a menos que el archivo esté en el directorio `sub-project/docs`. Por ejemplo, una inserción que haya cambiado `sub-project/index.js` o `sub-project/src/index.js` desencadenará una ejecución de flujo de trabajo, pero una inserción que solo cambie `sub-project/docs/readme.md` no lo hará.

```yaml
on:
  push:
    paths:
      - 'sub-project/**'
      - '!sub-project/docs/**'
```

#### Comparaciones de diferencias de Git

{% note %}

**Nota:** Si insertas más de 1000 confirmaciones o si {% data variables.product.prodname_dotcom %} no genera las diferencias debido a que se agota el tiempo de espera, el flujo de trabajo siempre se ejecutará.

{% endnote %}

El filtro determina si un flujo de trabajo debe ejecutarse al evaluar los archivos modificados y ejecutarlos en comparación con la lista de `paths-ignore` o `paths`. Si no hay archivos modificados, no se ejecutará el flujo de trabajo.

{% data variables.product.prodname_dotcom %} genera la lista de archivos modificados usando diferencias de dos puntos para las subidas y de tres puntos para las solicitudes de extracción:
- **Solicitudes de incorporación de cambios:** las diferencias de tres puntos son una comparación entre la versión más reciente de la rama de tema y la confirmación en la que la rama de tema se sincronizó por última vez con la rama base.
- **Inserción en ramas existentes:** una diferencia de dos puntos compara los SHA base y principal directamente entre sí.
- **Inserción en ramas nuevas:** una diferencia de dos puntos comparada con el elemento primario del antecesor de la confirmación insertada más profunda.

Los diffs se limitan a 300 archivos. Si hay archivos que cambiaron y no se empataron en los primeros 300 archivos que devuelve el filtro, el flujo de trabajo no se ejecutará. Puede que necesites crear filtros más específicos para que el flujo de trabajo se ejecute automáticamente.

Para obtener más información, consulta "[Acerca de la comparación de ramas en las solicitudes de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests)".
