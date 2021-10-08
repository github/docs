# Notas de lanzamiento para GitHub AE

Interpretado aquí: https://docs.github.com/en/github-ae@latest/admin/release-notes

## Cómo funciona

### Archivo de contenido de marcador de posición

Un archivo de contexto existe en `content/admin/release-notes.md`. Tiene una propiedad preliminar especial `layout: release-notes` y no tiene contenido de lenguaje de marcado. La fuente de las notas de lanzamiento viene de los datos de YAML.

### Fuente de YAML

Los datos fuente para las notas de lanzamiento viven en este directorio (`data/release-notes/github-ae`).

Los directorios se nombran por mes. Los archivos YAML se nombran de acuerdo con los datos del lanzamiento semanal.

Una propiedad booleana llamada `currentWeek` debe configurarse en cada archivo YAML. No más de un archivo a la vez puede tener esta propiedad configurada en "true".

Nota que los archivos de parche pueden obsoletizarse individualmente (es decir, ocultos en el sitio de documentos) mediante una propiedad opcional de `deprecated: true`.

### Procesamiento de recursos intermedios

Los datos de YAML se procesan y clasifican por `middleware/contextualizers/release-notes.js` y se agregan al objeto `context`.

### Diseños

The `context` object data is rendered by `components/release-notes`.

The release notes page has a custom design with CSS in `stylesheets/release-notes.scss`.

### Modelo

El modelo que valida los datos de YAML vive en `tests/helpers/schemas/ghae-release-notes-schema.js`. Consulta el archivo de modelado para encontrar las propiedades requeridas y opcionales.

El modelo que se ejerce en una prueba en `tests/linting/lint-files.js`. La prueba fallará si los datos no pasan la validación.
