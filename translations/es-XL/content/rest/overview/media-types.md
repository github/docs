---
title: Tipós de medios
intro: Aprende sobre los tipos de medios para especificar el formato de los datos que quieres consumir.
redirect_from:
  - /v3/media
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - API
---


Los tipos de medios personalizados se utilizan en la API para permitir que los consumidores elijan el formato de los datos que quieren recibir. Esto se hace al agregar uno o más de los siguientes tipos al encabezado de `Accept` cuando haces una solicitud. Los tipos de medios son específicos para los recursos, lo que les permite cambiar independientemente y aceptar los formatos que otros usarios no aceptan.

Todos los tipos de medios de {% data variables.product.product_name %} se ven así:

    application/vnd.github[.version].param[+json]

Los tipos de medios más básicos que la API acepta son:

    application/json
    application/vnd.github+json

Ninguno de estos especifica una [versión][versions], así que siempre obtendrás la representación actual y predeterminada en JSON de los recursos.

{% note %}

**Importante:** La versión predeterminada de la API podría cambiar posteriormente. Si estás creando una aplicación y te importa la estabilidad de la API, asegúrate solicitar una versión específica en el encabezado `Accept` como se muestra en los siguientes ejemplos.

{% endnote %}

Puedes especificar una versión así:

    application/vnd.github.v3+json

Si estás especificando una propiedad (tal como full/raw/etc como se define más adelante), pon la versión antes de la propiedad:

    application/vnd.github.v3.raw+json

Puedes verificar la versión actual a través de los encabezados de cada respuesta.  Busca el encabezado `X-GitHub-Media-Type`:

```shell
$ curl {% data variables.product.api_url_pre %}/users/technoweenie -I
> HTTP/1.1 200 OK
> X-GitHub-Media-Type: github.v3

$ curl {% data variables.product.api_url_pre %}/users/technoweenie -I \
$  -H "Accept: application/vnd.github.full+json"
> HTTP/1.1 200 OK
> X-GitHub-Media-Type: github.v3; param=full; format=json

$ curl {% data variables.product.api_url_pre %}/users/technoweenie -I \
$  -H "Accept: application/vnd.github.v3.full+json"
> HTTP/1.1 200 OK
> X-GitHub-Media-Type: github.v3; param=full; format=json
```

### Porpiedades del cuerpo del comentario

El cuerpo de un comentario puede escribirse en el [Lenguaje Markdown Enriquecido de GitHub][gfm]. Los [informes de problemas](/v3/issues/), [comentarios de informes de problemas](/v3/issues/comments/), [comentarios de la solicitud de extracción](/v3/pulls/comments/), y las API de [los comentarios de un gist](/v3/gists/comments/) siempre aceptan los mismos tipos de medios:

#### Sin procesar

    application/vnd.github.VERSION.raw+json

Devuelve el cuerpo en markdown sin procesar. La respuesta incluirá a `body`. Esto es lo predeterminado si no pasas ningún tipo de medios específico.

#### Texto

    application/vnd.github.VERSION.text+json

Devuelve una presentación únicamente de texto para el cuerpo de markdown. La respuesta incluirá a `body_text`.

#### HTML

    application/vnd.github.VERSION.html+json

Duevuelve el HTML interpretado del markdown del cuerpo. La respuesta incluirá a `body_html`.

#### Completo

    application/vnd.github.VERSION.full+json

Devuelve las representaciones de HTML, texto y sin procesar. La respuesta incluirá a `body`, `body_text`, y `body_html`:

### Propiedades de los blobs de Git

Se permiten los siguientes tipos de medios cuando [obtengas un blob](/v3/git/blobs/#get-a-blob):

#### JSON

    application/vnd.github.VERSION+json
    application/json

Devuelve una representación en JSON del blob con un `content` en forma de una secuencia cifrada de base64. Esto es lo predeterminado si no se pasa nada más.

#### Sin procesar

    application/vnd.github.VERSION.raw

Devuelve los datos del blob sin procesar.

### Confirmaciones, comparación de la confirmación, y solicitudes de extracción

La [API de confirmaciones](/v3/repos/commits/) y la [API de solicitudes de extracción](/v3/pulls/) son compatibles con los formatos de [diferencias][git-diff] y de [parchado][git-patch]:

#### diferencia

    application/vnd.github.VERSION.diff

#### parche

    application/vnd.github.VERSION.patch

#### sha

    application/vnd.github.VERSION.sha

### Contenidos del repositorio

#### Sin procesar

    application/vnd.github.VERSION.raw

Devuelve el contenido sin procesar de un archivo. Esto es lo predeterminado si no pasas ningún tipo de medios específico.

#### HTML

    application/vnd.github.VERSION.html

Para archivos de markup tales como Markdown o AsciiDoc, puedes recuperar la interpretación en HTML si utilizas el tipo de medios `.html`. Los lenguajes de Markup se interpretan en HTML utilizando nuestra [biblioteca de Markup](https://github.com/github/markup) de código abierto.

### Gists

#### Sin procesar

    application/vnd.github.VERSION.raw

Devuelve el contenido sin procesar de un gist. Esto es lo predeterminado si no pasas ningún tipo de medios específico.

#### base64

    application/vnd.github.VERSION.base64

El contenido del gist se cifra en base64 antes de que se envíe. Esto puede serte útil si tu gist contiene cualquier secuencia inválida en UTF-8.

[gfm]: http://github.github.com/github-flavored-markdown/
[git-diff]: http://git-scm.com/docs/git-diff
[git-patch]: http://git-scm.com/docs/git-format-patch
[versions]: /v3/versions
