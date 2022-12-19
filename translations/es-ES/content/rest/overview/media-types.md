---
title: Tipos de medios
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
ms.openlocfilehash: d93ba31647967f2f3a38dd47c5cc6d8a623c6c6e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '146681129'
---
La API usa tipos de medios personalizados para permitir que los consumidores elijan el formato de los datos que desean recibir. Esto se hace al agregar uno o más de los siguientes tipos al encabezado `Accept` cuando realiza una solicitud. Los tipos de medios son específicos de los recursos, lo que les permite cambiar de forma independiente y admitir formatos que otros recursos no admiten.

Todos los tipos de medios de {% data variables.product.product_name %} se ven así:

    application/vnd.github.param[+json]

Los tipos de medios más básicos que la API acepta son:

    application/vnd.github+json
    application/json

{% note %}

**Nota:** En el pasado, se recomendaba incluir `v3` en el encabezado `Accept`. Esto ya no es necesario y no tendrá ningún impacto en las solicitudes de API.

{% endnote %}

Si va a especificar una propiedad (como full/raw/etc, como se define más adelante), colóquela después de `github`:

    application/vnd.github.raw+json

## Porpiedades del cuerpo del comentario

El cuerpo de un comentario se puede escribir en [GitHub Flavored Markdown][gfm], [incidencias](/rest/reference/issues), [comentarios de incidencias](/rest/reference/issues#comments), [comentarios de solicitudes de incorporación de cambios](/rest/reference/pulls#comments) y [comentarios de gists](/rest/reference/gists#comments). Todas las API aceptan este tipo de medios:

### Raw

    application/vnd.github.raw+json

Devuelve el cuerpo en markdown sin procesar. La respuesta incluirá `body`. Esto es lo predeterminado si no pasas ningún tipo de medios específico.

### Texto

    application/vnd.github.text+json

Devuelve una presentación únicamente de texto para el cuerpo de markdown. La respuesta incluirá `body_text`.

### HTML

    application/vnd.github.html+json

Duevuelve el HTML interpretado del markdown del cuerpo. La respuesta incluirá `body_html`.

### Completo

    application/vnd.github.full+json

Devuelve las representaciones de HTML, texto y sin procesar. La respuesta incluirá `body`, `body_text` y `body_html`:

## Propiedades de los blobs de Git

Se permiten los siguientes tipos de medios al [obtener un blob](/rest/reference/git#get-a-blob):

### JSON

    application/vnd.github+json
    application/json

Devuelve la representación JSON del blob con `content` como una cadena codificada en Base64. Esto es lo predeterminado si no se pasa nada más.

### Raw

    application/vnd.github.raw

Devuelve los datos del blob sin procesar.

## Confirmaciones, comparación de la confirmación, y solicitudes de extracción

La [API de confirmaciones](/rest/reference/repos#commits) y la [API de solicitudes de incorporación de cambios](/rest/reference/pulls) admiten formatos [diff][git-diff] y [patch][git-patch]:

### diff

    application/vnd.github.diff

### patch

    application/vnd.github.patch

### sha

    application/vnd.github.sha

## Contenidos del repositorio

### Raw

    application/vnd.github.raw

Devuelve el contenido sin procesar de un archivo. Esto es lo predeterminado si no pasas ningún tipo de medios específico.

### HTML

    application/vnd.github.html

Para archivos de marcado como Markdown o AsciiDoc, puede recuperar el código HTML representado si usa el tipo de medios `.html`. Los lenguajes de marcado se representan en HTML mediante nuestra [biblioteca de marcado](https://github.com/github/markup) de código abierto.

## Gists

### Raw

    application/vnd.github.raw

Devuelve el contenido sin procesar de un gist. Esto es lo predeterminado si no pasas ningún tipo de medios específico.

### base64

    application/vnd.github.base64

El contenido del gist se codifica en Base64 antes de enviarse. Esto puede ser útil si el gist contiene secuencias UTF-8 no válidas.

[gfm]:http://github.github.com/github-flavored-markdown/
[git-diff]: http://git-scm.com/docs/git-diff
[git-patch]: http://git-scm.com/docs/git-format-patch
[hypermedia]: /rest#hypermedia
[versions]: /developers/overview/about-githubs-apis
