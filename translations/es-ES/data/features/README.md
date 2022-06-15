## Versiionamiento basado en características

El versionamiento basado en características nos permite definir y controlar las versiones de una "característica" nombrada arbitrariamente en un lguar.

**Nota**: no borres `data/features/placeholder.yml`porque lo utilizan las pruebas.

## Cómo funciona

Agrega un archivo YAML nuevo con el nombre de característica que quieras utilizar en este directorio. Para una característica llamada `meow`, esto sería `data/features/meow.yml`.

Agrega un bloque de `versions` al archivo YML con los nombres cortos de las versiones en las cuales está disponible la característica. Por ejemplo:

```yaml
versions:
  fpt: '*'
  ghes: '>3.1'
  ghae: '*'
```

El formato y los valores permitidos son los mismos que en la [propiedad preliminar de versiones](/content#versions).

### Condicionales líquidas

¡Ahora puedes utilizar `{% ifversion meow %} ... {% endif %}` en los archivos de contenido!

### Preliminar

También puedes utilizar la característica como preliminar en los archivos de contenido:

```yaml
versions:
  fpt: '*'
  ghes: '>3.1'
  feature: 'meow'
```

Si quieres que un archivo de contenido aplique a más de una característica, puedes hacer esto:

```yaml
versions:
  fpt: '*'
  ghes: '>3.1'
  feature: ['meow', 'blorp']
```

## Imposición del modelado

El modelo para validar la característica de versionamiento vive en [`tests/helpers/schemas/feature-versions-schema.js`](/tests/helpers/schemas/feature-versions-schema.js) y la ejecuta [`tests/linting/lint-versioning.js`](/tests/linting/lint-versioning.js).

## Script para eliminar las etiquetas de característica

TBD!
