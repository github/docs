---
ms.openlocfilehash: 78f03188cb76fd34ffd5670585758bb8c9c2a47d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145115002"
---
# Notas de lanzamiento para GitHub AE

Representado aquí: https://docs.github.com/en/github-ae@latest/admin/release-notes

## Cómo funciona

### Archivo de contenido de marcador de posición

Existe un archivo de contenido en `content/admin/release-notes.md`. Tiene una propiedad `layout: release-notes` de texto preliminar especial y ningún contenido de Markdown. La fuente de las notas de lanzamiento viene de los datos de YAML.

### Fuente de YAML

Los datos de origen de las notas de la versión están en este directorio (`data/release-notes/github-ae`).

Los directorios se nombran por mes. Los archivos YAML se nombran de acuerdo con los datos del lanzamiento semanal.

Se debe establecer una propiedad booleana denominada `currentWeek` en cada archivo YAML. No más de un archivo a la vez puede tener esta propiedad configurada en "true".

Ten en cuenta que los archivos de revisión pueden quedar en desuso individualmente (es decir, ocultos en el sitio de documentación) mediante una propiedad `deprecated: true` opcional.

### Procesamiento de recursos intermedios

Los datos de YAML se procesan y ordenan por `middleware/contextualizers/release-notes.js` y se agregan al objeto `context`.

### Diseños

Los datos del objeto `context` se representan mediante `components/release-notes`.

La página de notas de la versión tiene un diseño personalizado con CSS en `stylesheets/release-notes.scss`.

### Schema

Esquema que valida los datos de YAML que residen en `tests/helpers/schemas/ghae-release-notes-schema.js`. Consulta el archivo de modelado para encontrar las propiedades requeridas y opcionales.

El esquema se ejecuta mediante una prueba en `tests/linting/lint-files.js`. La prueba fallará si los datos no pasan la validación.
