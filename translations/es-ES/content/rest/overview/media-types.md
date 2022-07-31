---
title: Tipós de medios
intro: Aprende sobre los tipos de medios para especificar el formato de los datos que quieres consumir.
redirect_from:
  - /v3/media
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
---


Los tipos de medios personalizados se utilizan en la API para permitir que los consumidores elijan el formato de los datos que quieren recibir. Esto se hace al agregar uno o más de los siguientes tipos al encabezado de `Accept` cuando haces una solicitud. Los tipos de medios son específicos para los recursos, lo que les permite cambiar independientemente y aceptar los formatos que otros usarios no aceptan.

Todos los tipos de medios de {% data variables.product.product_name %} se ven así:

    application/vnd.github.param[+json]

Los tipos de medios más básicos que la API acepta son:

    application/vnd.github+json
    application/json

{% note %}

**Nota:** Anteriormente, recomendamos incluir `v3` en tu encabezado de `Accept`. Esto ya no es necesario y no tendrá impacto en tus solicitudes de la API.

{% endnote %}

Si estás especificando una propiedad (tal como "full/raw/etc" tal como se define a continuación), ponla después de `github`:

    application/vnd.github.raw+json

## Porpiedades del cuerpo del comentario

El cuerpo de un comentario puede escribirse en el [Lenguaje de Marcado Enriquecido de GitHub][gfm]. Las [propuestas](/rest/reference/issues), lso [comentarios de las propuestas](/rest/reference/issues#comments), los [comentarios de las solicitudes de cambios](/rest/reference/pulls#comments), y las API de [los comentarios de un gist](/rest/reference/gists#comments) siempre aceptan los mismos tipos de medios:

### Sin procesar

    application/vnd.github.raw+json

Devuelve el cuerpo en markdown sin procesar. La respuesta incluirá a `body`. Esto es lo predeterminado si no pasas ningún tipo de medios específico.

### Texto

    application/vnd.github.text+json

Devuelve una presentación únicamente de texto para el cuerpo de markdown. La respuesta incluirá a `body_text`.

### HTML

    application/vnd.github.html+json

Duevuelve el HTML interpretado del markdown del cuerpo. La respuesta incluirá a `body_html`.

### Completo

    application/vnd.github.full+json

Devuelve las representaciones de HTML, texto y sin procesar. La respuesta incluirá a `body`, `body_text`, y `body_html`:

## Propiedades de los blobs de Git

Los siguientes tipos de medios se permiten cuando [obtienes un blob](/rest/reference/git#get-a-blob):

### JSON

    application/vnd.github+json
    application/json

Devuelve una representación en JSON del blob con un `content` en forma de una secuencia cifrada de base64. Esto es lo predeterminado si no se pasa nada más.

### Sin procesar

    application/vnd.github.raw

Devuelve los datos del blob sin procesar.

## Confirmaciones, comparación de la confirmación, y solicitudes de extracción

La [API de confirmaciones](/rest/reference/repos#commits) y la [API de solicitudes de cambios](/rest/reference/pulls) soportan los formatos de [diff][git-diff] y de [parche][git-patch]:

### diferencia

    application/vnd.github.diff

### parche

    application/vnd.github.patch

### sha

    application/vnd.github.sha

## Contenidos del repositorio

### Sin procesar

    application/vnd.github.raw

Devuelve el contenido sin procesar de un archivo. Esto es lo predeterminado si no pasas ningún tipo de medios específico.

### HTML

    application/vnd.github.html

Para archivos de markup tales como Markdown o AsciiDoc, puedes recuperar la interpretación en HTML si utilizas el tipo de medios `.html`. Los lenguajes de Markup se interpretan en HTML utilizando nuestra [biblioteca de Markup](https://github.com/github/markup) de código abierto.

## Gists

### Sin procesar

    application/vnd.github.raw

Devuelve el contenido sin procesar de un gist. Esto es lo predeterminado si no pasas ningún tipo de medios específico.

### base64

    application/vnd.github.base64

El contenido del gist se cifra en base64 antes de que se envíe. Esto puede serte útil si tu gist contiene cualquier secuencia inválida en UTF-8.

[gfm]: http://github.github.com/github-flavored-markdown/
[git-diff]: http://git-scm.com/docs/git-diff
[git-patch]: http://git-scm.com/docs/git-format-patch
