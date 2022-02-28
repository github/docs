---
title: Migrar las ID de nodo global de GraphQL
intro: Aprende sobre los dos formatos de ID de nodo global y cómo migrarte del formato tradicional al nuevo.
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
shortTitle: Migrar las ID de nodo globales
---

## Fondo

La API de GraphQL de {% data variables.product.product_name %} actualmente es compatible con dos tipos de formatos de ID de nodo global. El formato tradicional será obsoleto y se reemplazará con un formato nuevo.  Esta guía te muestra cómo migrarte al formato nuevo, en caso de que sea necesario.

Cuando te migras al formato nuevo, garantizas que los tiempos de respuesta de tus solicitudes sigan siendo consistentes y pequeños. También garantizas que tu aplicación siga funcionando una vez que las ID tradicionales se obsoleticen.

Para aprender más sobre por qué la ID de nodo global tradicional será obsoleta, consulta la sección "[Formato de ID global nuevo por venir en GraphQL](https://github.blog/2021-02-10-new-global-id-format-coming-to-graphql)".

## Determinar si necesitas realizar alguna acción

Solo necesitas seguir los pasos de migración si almacenas referencias a las ID de nodo global de GraphQL.  Estas ID corresponden al campo de `id` para cualquier objeto en el modelo.  Si no almacenas ID de nodo global, entonces puedes seguir interactuando con la API sin cambios.

Adicionalmente, si actualmente descodificas las ID tradicionales para extraer información de tipo (por ejemplo, si utilizas los dos primeros caracteres de `PR_kwDOAHz1OX4uYAah` para determinar si el objeto es una solicitud de cambios), tu servicio se interrumpirá, ya que el formato de las ID cambió.  Deberías migrar tu servicio para tratar estas ID como secuencias opacas.  Estas ID serán únicas, por lo tanto, puedes confiar en ellas directamente como referencias.


## Migrarse a las ID globales nuevas

Para facilitar la migración a la ID de formato nueva, puedes utilizar el encabezado `X-Github-Next-Global-ID` en tus solicitudes de la API de GraphQL. El valor del encabezado `X-Github-Next-Global-ID` puede ser `1` o `0`.  Si configuras el valor en `1` se forzará la carga útil de respuesta para que siempre utilice el formato de ID nuevo para cualquier objeto para el cual hayas solicitado el campo de `id`.  Si configuras el valor en `0` se revertirá todo al valor predeterminado, lo cual significa mostrar la ID tradicional o la nueva dependiendo de la fecha de creación del objeto.

Aquí tienes una solicitud de ejemplo que utiliza cURL:

```
$ curl \
  -H "Authorization: token $GITHUB_TOKEN" \
  -H "X-Github-Next-Global-ID: 1" \
  https://api.github.com/graphql \
  -d '{ "query": "{ node(id: \"MDQ6VXNlcjM0MDczMDM=\") { id } }" }'
```

Aunque se haya utilizado la ID tradicional `MDQ6VXNlcjM0MDczMDM=` en esta consulta, la respuesta contendrá el formato de ID nuevo:
```
{"data":{"node":{"id":"U_kgDOADP9xw"}}}
```
Con el encabezado `X-Github-Next-Global-ID`, puedes encontrar el formato de ID nuevo para las ID tradicionales que referencias en tu aplicación. Entonces podrás actualizar esas referencias con la ID que recibiste en la respuesta. Deberías actualizar todas las referencias alas ID tradicionales y utilizar el formato de ID nuevo para cualquier solicitud subsecuente a la API. Para realizar operaciones por lote, puedes utilizar alias o emitir consultas de nodo múltiples en una llamada a la API. Para obtener más información, consulta "[Los documentos de GraphQL](https://graphql.org/learn/queries/#aliases)".

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

Toma en cuenta que, el configurar `X-Github-Next-Global-ID` en `1` afectará el valor de retorno de cada campo de `id` en tu solicitud.  Esto significa que, incluso cuando emites una consulta diferente a la de `node`, se te devolverá la ID de formato nuevo si solicitaste el campo `id`.

## Compartir retroalimentación

Si te preocupa que la implementación de este cambio impacte tu app, por favor, [contacta a {% data variables.product.product_name %}](https://support.github.com/contact) e incluye la información del nombre de tu app para que te podamos apoyarte mejor.
