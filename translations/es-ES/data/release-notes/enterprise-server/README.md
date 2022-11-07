---
ms.openlocfilehash: a43b7fac5396fcbdb1b7d9ec241af9879de7b2b8
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: "145115018"
---
# Notas de lanzamiento para GitHub Enterprise Server

Representado aquí: https://docs.github.com/en/enterprise-server@latest/admin/release-notes

## Cómo funciona

### Archivo de contenido de marcador de posición

Existe un archivo de contenido en `content/admin/release-notes.md`. Tiene una propiedad `layout: release-notes` de texto preliminar especial y ningún contenido de Markdown. La fuente de las notas de lanzamiento viene de los datos de YAML.

### Fuente de YAML

Los datos de origen de las notas de la versión están en este directorio (`data/release-notes/enterprise-server`).

Los directorios se nombran con un número de lanzamiento de GHES (con un guion en vez de un punto).

Los archivos de YAML en cada directorio se nombran de acuerdo al número de parche. Algunos nombres de archivo de revisión pueden terminar con `-rc<num>.yml`, lo que significa que es una versión candidata para lanzamiento. Un archivo de versión candidata para lanzamiento también necesita `release_candidate: true` en los datos de YAML.

Las notas de la versión de las versiones de GHES en desuso (vea `lib/enterprise-server-releases.js`) **no** se quitan del sitio y siempre se mostrarán junto con las versiones compatibles actualmente.

Tenga en cuenta que los archivos de revisión pueden quedar en desuso individualmente (es decir, ocultos en el sitio de documentación) mediante una propiedad `deprecated: true` opcional.

### Procesamiento de recursos intermedios

Los datos de YAML se procesan y ordenan por `middleware/contextualizers/release-notes.js` y se agregan al objeto `context`.

### Diseños

Los datos del objeto `context` se representan mediante `components/release-notes`.

La página de notas de la versión tiene un diseño personalizado con CSS en `stylesheets/release-notes.scss`.

### Schema

Esquema que valida los datos de YAML que residen en `tests/helpers/schemas/ghes-release-notes-schema.js`. Consulta el archivo de modelado para encontrar las propiedades requeridas y opcionales.

El esquema se ejecuta mediante una prueba en `tests/linting/lint-files.js`. La prueba fallará si los datos no pasan la validación.
