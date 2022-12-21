---
ms.openlocfilehash: bf7a1cdb9c8b1300ef8ba8ab2dd427a9b5d28128
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/09/2022
ms.locfileid: "148193465"
---
# Notas de lanzamiento para GitHub Enterprise Server

Representado aquí: https://docs.github.com/en/enterprise-server@latest/admin/release-notes

## Adición de notas de la versión a una versión del servidor de GitHub Enterprise en desuso

Cuando una versión del servidor de GitHub Enterprise se está poniendo en desuso según [esta plantilla de incidencias](/.github/actions-scripts/enterprise-server-issue-templates/deprecation-issue.md), el equipo de Docs Engineering quita de `github/docs-internal` los archivos YAML que contienen las notas de la versión de esa versión.

Si una parte interesada solicita una actualización de una notas de la versión en desuso, puedes actualizar esas notas realizando los pasos siguientes.

1. Consulta la rama de larga duración <code>enterprise-<em>VERSION</em>-release</code> y crea una solicitud de incorporación de cambios para actualizar las notas de la versión en desuso en esa rama.
2. Ponte en contacto con #docs-engineering para solicitar una nueva extracción y una actualización del contenido almacenado en Azure. Consulta la sección sobre cómo volver a extraer contenido de la [lista de comprobación de puesta en desuso](/.github/actions-scripts/enterprise-server-issue-templates/deprecation-issue.md).

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

Los datos de YAML se procesan y ordenan por `middleware/contextualizers/ghes-release-notes.js` y se agregan al objeto `context`.

### Diseños

Los datos del objeto `context` se representan mediante `components/release-notes`.

La página de notas de la versión tiene un diseño personalizado con CSS en `stylesheets/release-notes.scss`.

### Schema

Esquema que valida los datos de YAML que residen en `tests/helpers/schemas/release-notes-schema.js`. Consulta el archivo de modelado para encontrar las propiedades requeridas y opcionales.

El esquema se ejecuta mediante una prueba en `tests/linting/lint-files.js`. La prueba fallará si los datos no pasan la validación.
