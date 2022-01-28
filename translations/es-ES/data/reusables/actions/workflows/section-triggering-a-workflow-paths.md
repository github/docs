
Cuando utilices los eventos `push` y `pull_request`, puedes configurar un flujo de trabajo para que se ejecute con base en qué rutas de archivo cambiaron. Los filtros de ruta no se evalúan para subidas de etiquetas.

Utiliza el filtro `paths` cuando quieras incluir los patrones de ruta de archivo o cuando quieras tanto incluirlos como excluirlos. Use the `paths-ignore` filter when you only want to exclude file path patterns. You cannot use both the `paths` and `paths-ignore` filters for the same event in a workflow.

If you define both `branches`/`branches-ignore` and `paths`, the workflow will only run when both filters are satisfied.

The `paths` and `paths-ignore` keywords accept glob patterns that use the `*` and `**` wildcard characters to match more than one path name. Para obtener más información, consulta "[Hoja de referencia de patrones de filtro](/actions/using-workflows/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)".

#### Ejemplo: Incluyendo rutas

Si al menos una ruta coincide con un patrón del filtro de `rutas`, se ejecuta el flujo de trabajo. For example, the following workflow would run anytime you push a JavaScript file (`.js`).

```yaml
on:
  push:
    paths:
      - '**.js'
```

#### Example: Excluding paths

Cuando todos los nombres de ruta coincidan con los patrones en `paths-ignore`, el flujo de trabajo no se ejecutará. If any path names do not match patterns in `paths-ignore`, even if some path names match the patterns, the workflow will run.

Un flujo de trabajo con el siguiente filtro de ruta solo se ejecutará en los eventos de `subida` que incluyan al menos un archivo externo al directorio `docs` en la raíz del repositorio.

```yaml
on:
  push:
    paths-ignore:
      - 'docs/**'
```

#### Example: Including and excluding paths

You can not use `paths` and `paths-ignore` to filter the same event in a single workflow. If you want to both include and exclude path patterns for a single event, use the `paths` filter along with the `!` character to indicate which paths should be excluded.

If you define a path with the `!` character, you must also define at least one path without the `!` character. If you only want to exclude paths, use `paths-ignore` instead.

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
