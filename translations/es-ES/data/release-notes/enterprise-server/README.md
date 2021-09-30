# Notas de lanzamiento para GitHub Enterprise Server

Interpretado aquí: https://docs.github.com/en/enterprise-server@latest/admin/release-notes

## Cómo funciona

### Archivo de contenido de marcador de posición

Un archivo de contexto existe en `content/admin/release-notes.md`. Tiene una propiedad preliminar especial `layout: release-notes` y no tiene contenido de lenguaje de marcado. La fuente de las notas de lanzamiento viene de los datos de YAML.

### Fuente de YAML

Los datos fuente de las notas de lanzamiento viven en este directorio (`data/release-notes/enterprise-server`).

Los directorios se nombran con un número de lanzamiento de GHES (con un guion en vez de un punto).

Los archivos de YAML en cada directorio se nombran de acuerdo al número de parche. Algunos nombres de archivo de parche pueden terminar con `-rc<num>.yml`, lo que significa que es un candidato a lanzamiento. Un archivo de candidato a lanzamiento también requiere `release_candidate: true` en los datos de YAML.

Las notas de las versiones obsoletizadas de GHES (consulta `lib/enterprise-server-releases.js`) **no** se eliminaron del sitio y siempre se mostrarán en conjunto con las versiones compatibles actuales.

Nota que los archivos de parche pueden obsoletizarse individualmente (es decir, ocultos en el sitio de documentos) mediante una propiedad opcional de `deprecated: true`.

### Procesamiento de recursos intermedios

Los datos de YAML se procesan y clasifican por `middleware/contextualizers/release-notes.js` y se agregan al objeto `context`.

### Diseños

The `context` object data is rendered by `components/release-notes`.

The release notes page has a custom design with CSS in `stylesheets/release-notes.scss`.

### Modelo

El modelo que valida los datos de YAML vive en `tests/helpers/schemas/ghes-release-notes-schema.js`. Consulta el archivo de modelado para encontrar las propiedades requeridas y opcionales.

El modelo que se ejerce en una prueba en `tests/linting/lint-files.js`. La prueba fallará si los datos no pasan la validación.
