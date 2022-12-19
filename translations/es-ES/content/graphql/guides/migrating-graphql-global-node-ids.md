---
title: Migrar las ID de nodo global de GraphQL
intro: Aprende sobre los dos formatos de ID de nodo global y cómo migrarte del formato tradicional al nuevo.
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
shortTitle: Migrating global node IDs
ms.openlocfilehash: 7d62d81e52b848e4fb8b5f6b2bae9997e0ac1209
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147717857'
---
## Información previa

La API de GraphQL de {% data variables.product.product_name %} actualmente es compatible con dos tipos de formatos de ID de nodo global. El formato tradicional será obsoleto y se reemplazará con un formato nuevo.  Esta guía te muestra cómo migrarte al formato nuevo, en caso de que sea necesario. 

Cuando te migras al formato nuevo, garantizas que los tiempos de respuesta de tus solicitudes sigan siendo consistentes y pequeños. También garantizas que tu aplicación siga funcionando una vez que las ID tradicionales se obsoleticen.

Para obtener más información sobre por qué el formato del identificador global de nodo heredado quedará en desuso, consulte "[Nuevo formato de identificador global próximamente en GraphQL](https://github.blog/2021-02-10-new-global-id-format-coming-to-graphql)".

## Determinar si necesitas realizar alguna acción

Solo necesitas seguir los pasos de migración si almacenas referencias a las ID de nodo global de GraphQL.  Estos identificadores corresponden al campo `id` de cualquier objeto del esquema.  Si no almacenas ID de nodo global, entonces puedes seguir interactuando con la API sin cambios.

Además, si actualmente descodifica los identificadores tradicionales para extraer información del tipo (por ejemplo, si utiliza los dos primeros caracteres de `PR_kwDOAHz1OX4uYAah` para determinar si el objeto es una solicitud de incorporación de cambios), el servicio se interrumpirá, porque el formato de los identificadores ha cambiado.  Deberías migrar tu servicio para tratar estas ID como secuencias opacas.  Estas ID serán únicas, por lo tanto, puedes confiar en ellas directamente como referencias.


## Migrarse a las ID globales nuevas

Para facilitar la migración al nuevo formato de identificador, puede usar el encabezado `X-Github-Next-Global-ID` en las solicitudes de GraphQL API. El valor del encabezado `X-Github-Next-Global-ID` puede ser `1` o `0`.  Al establecer el valor en `1`, se obligará a la carga de respuesta a usar siempre el nuevo formato de identificador para cualquier objeto para el que haya solicitado el campo `id`.  Si configura el valor en `0`, se revertirán todos los ajustes al valor predeterminado, es decir, se mostrará el identificador tradicional o el nuevo dependiendo de la fecha de creación del objeto. 

Aquí tienes una solicitud de ejemplo que utiliza cURL:

```
$ curl \
  -H "Authorization: Bearer $GITHUB_TOKEN" \
  -H "X-Github-Next-Global-ID: 1" \
  https://api.github.com/graphql \
  -d '{ "query": "{ node(id: \"MDQ6VXNlcjM0MDczMDM=\") { id } }" }'
```

Aunque el identificador heredado `MDQ6VXNlcjM0MDczMDM=` se usó en la consulta, la respuesta contendrá el nuevo formato de identificador:
```
{"data":{"node":{"id":"U_kgDOADP9xw"}}}
```
Con el encabezado `X-Github-Next-Global-ID`, puede encontrar el nuevo formato de identificador para los identificadores heredados a los que hace referencia en la aplicación. Entonces podrás actualizar esas referencias con la ID que recibiste en la respuesta. Deberías actualizar todas las referencias alas ID tradicionales y utilizar el formato de ID nuevo para cualquier solicitud subsecuente a la API. Para realizar operaciones por lote, puedes utilizar alias o emitir consultas de nodo múltiples en una llamada a la API. Para obtener más información, consulte "[los documentos de GraphQL](https://graphql.org/learn/queries/#aliases)".

También puedes obtener la ID nueva para una colección de elementos. Por ejemplo, si quieres obtener la ID nueva para los últimos 10 repositorios de tu organización, podrías utilizar una consulta como esta:
```
{
  organization(login: "github") {
    repositories(last: 10) {
      edges {
        cursor
        node {
          name
          id
        }
      }
    }
  }
}
```

Tenga en cuenta que establecer `X-Github-Next-Global-ID` en `1` afectará al valor devuelto de cada campo `id` de la consulta.  Esto significa que, incluso cuando envíe una consulta que no sea de `node`, obtendrá el nuevo identificador de formato si solicitó el campo `id`.

## Compartir la retroalimentación

Si le preocupa que la implementación de este cambio tenga un impacto en la aplicación, [póngase en contacto con {% data variables.product.product_name %}](https://support.github.com/contact) e incluya la información del nombre de su aplicación para que podamos ayudarle mejor.
