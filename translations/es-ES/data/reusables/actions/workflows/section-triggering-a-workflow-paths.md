
Cuando utilices los eventos `push` y `pull_request`, puedes configurar un flujo de trabajo para que se ejecute con base en qué rutas de archivo cambiaron. Los filtros de ruta no se evalúan para subidas de etiquetas.

Utiliza el filtro `paths` cuando quieras incluir los patrones de ruta de archivo o cuando quieras tanto incluirlos como excluirlos. Utiliza el filtro `paths-ignore` cuando solo quieras excluir los patrones de ruta de archivo. No puedes utilizar tanto el filtro de `paths` como el de `paths-ignore` juntos en el mismo evento en un flujo de trabajo.

Si defines tanto `branches`/`branches-ignore` como `paths`, el flujo de trabajo solo se ejecutará cuando ambos filtros se hayan satisfecho.

Las palabras clave `paths` y `paths-ignore` aceptan patrones globales que utilicen los caracteres de comodín `*` y `**` para empatar con más de un nombre de ruta. Para obtener más información, consulta "[Hoja de referencia de patrones de filtro](/actions/using-workflows/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)".

#### Ejemplo: Incluyendo rutas

Si al menos una ruta coincide con un patrón del filtro de `rutas`, se ejecuta el flujo de trabajo. Por ejemplo, el siguiente flujo de trabajo se ejecutaría siempre que subieras un archivo de JavaScript (`.js`).

```yaml
on:
  push:
    paths:
      - '**.js'
```

{% note %}

**Nota:** Si se omite un flujo de trabajo debido a [filtrado de ruta](/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore), [filtrado de rama](/actions/using-workflows/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore) o a un [mensaje de confirmación](/actions/managing-workflow-runs/skipping-workflow-runs), entonces las verificaciones asociadas con este flujo de trabajo permanecerán en un estado de "Pendiente". Las solicitudes de cambios que requieran que esas verificaciones tengan éxito quedarán bloqueadas para fusión. Para obtener más información, consulta la sección "[Manejar verificaciones omitidas pero requeridas](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/troubleshooting-required-status-checks#handling-skipped-but-required-checks)".

{% endnote %}

#### Ejemplo: Excluir las rutas

Cuando todos los nombres de ruta coincidan con los patrones en `paths-ignore`, el flujo de trabajo no se ejecutará. Si alguno de los nombres de ruta no empatan con los patrones en `paths-ignore`, incluso si algunos de ellos sí lo hacen, el flujo de trabajo se ejecutará.

Un flujo de trabajo con el siguiente filtro de ruta solo se ejecutará en los eventos de `subida` que incluyan al menos un archivo externo al directorio `docs` en la raíz del repositorio.

```yaml
on:
  push:
    paths-ignore:
      - 'docs/**'
```

#### Ejemplo: Incluir y excluir rutas

No puedes utilizar `paths` y `paths-ignore` para filtrar el mismo evento en un solo flujo de trabajo. Si quieres tanto incluir como excluir patrones de ruta para un solo evento, utiliza el filtro de `paths` en conjunto con el carácter `!` para indicar qué rutas deben excluirse.

Si defines una ruta con el carácter `!`, también debes definir por lo menos una ruta sin el carácter `!`. Si solo quieres excluir rutas, utiliza `paths-ignore` en su lugar.

El orden en que defines los patrones importa:

- Una coincidencia de patrón negativo (con prefijo `!`) luego de una coincidencia positiva excluirá la ruta.
- Un patrón de coincidencia positiva luego de una coincidencia negativa excluirá nuevamente la ruta.

Este ejemplo se ejecuta cada vez que el evento de `subida` incluye un archivo en el directorio `sub-project` o sus subdirectorios, a menos que el archivo esté en el directorio `sub-project/docs`. Por ejemplo, una subida que haya cambiado `sub-project/index.js` o `sub-project/src/index.js` desencadenará una ejecución de flujo de trabajo, pero una subida que cambie solo `sub-project/docs/readme.md` no lo hará.

```yaml
on:
  push:
    paths:
      - 'sub-project/**'
      - '!sub-project/docs/**'
```

#### Comparaciones de diferencias de Git

{% note %}

**Nota:** Si subes más de 1,000 confirmaciones o si {% data variables.product.prodname_dotcom %} no genera el diff debido a que se excedió el tiempo, el flujo de trabajo siempre se ejecutará.

{% endnote %}

El filtro determina si un flujo de trabajo se debe ejecutar al evaluar los archivos modificados y al ejecutarlos comparándolos con la lista de `paths-ignore` o `paths`. Si no hay archivos modificados, no se ejecutará el flujo de trabajo.

{% data variables.product.prodname_dotcom %} genera la lista de archivos modificados usando diferencias de dos puntos para las subidas y de tres puntos para las solicitudes de extracción:
- **Solicitudes de extracción:** las diferencias de tres puntos son una comparación entre la versión más reciente de la rama de tema y la confirmación, cuando la rama de tema se sincronizó por última vez con la rama base.
- **Subidas a ramas existentes:** una diferencia de dos puntos compara las SHA de encabezado y de base directamente entre sí.
- **Subidas a ramas nuevas:** una diferencia de dos puntos comparada con el padre del antepasado de la confirmación más profunda subida.

Los diffs se limitan a 300 archivos. Si hay archivos que cambiaron y no se empataron en los primeros 300 archivos que devuelve el filtro, el flujo de trabajo no se ejecutará. Puede que necesites crear filtros más específicos para que el flujo de trabajo se ejecute automáticamente.

Para obtener más información, consulta "[Acerca de comparar ramas en las solicitudes de extracción](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests)".
