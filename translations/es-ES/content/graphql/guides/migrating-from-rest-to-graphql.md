---
title: Migrar desde Rest hacia GraphQL
intro: 'Aprende las mejores prácticas y consideraciones para migrar desde la API de Rest de {% data variables.product.prodname_dotcom %} hacia la API de GrpahQL de {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /v4/guides/migrating-from-rest
  - /graphql/guides/migrating-from-rest
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
shortTitle: Migrate from REST to GraphQL
ms.openlocfilehash: dbafde83c8acac664b6a0f712927af82c646d397
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145069730'
---
## Diferencias en la lógica de la API

Migrar desde Rest hacia GraphQL represente un cambio significativo en la lógica de las API. Las diferencias entre REST como un estilo y GraphQL como una especificación hacen difícil &mdash;y a menudo desaconsejable&mdash; reemplazar las llamadas a la API REST con las consultas de la API de GraphQL de una forma uno a uno. Hemos incluido ejemplos específicos de migración a continuación.

Para migrar el código de la [API REST](/rest) a la API de GraphQL:

- Revise la [especificación de GraphQL](https://graphql.github.io/graphql-spec/June2018/).
- Revise el [esquema de GraphQL](/graphql/reference) de GitHub.
- Considera la manera en la que cualquier código existente que tengas interactúa con la API de REST de GitHub
- Use [identificadores de nodo global](/graphql/guides/using-global-node-ids) para hacer referencia a objetos entre versiones de API.

Las ventajas significativas de GraphQL incluyen:

- [Obtención de los datos que necesita y nada más](#example-getting-the-data-you-need-and-nothing-more)
- [Campos anidados](#example-nesting)
- [Tipado fuerte](#example-strong-typing)

Aquí hay algunos ejemplos de cada una.

## Ejemplo: obtener los datos que necesitas y únicamente eso

Una sola llamada de la API de REST recupera una lista de los miembros de tu organización:
```shell
curl -v {% data variables.product.api_url_pre %}/orgs/:org/members
```

La carga útil de REST contiene datos en exceso si tu meta es recuperar únicamente los nombres y enlaces a los avatares. Sin embargo, la consulta de GraphQL recupera únicamente lo que especificas:

```graphql
query {
    organization(login:"github") {
    membersWithRole(first: 100) {
      edges {
        node {
          name
          avatarUrl
        }
      }
    }
  }
}
```

Considera otro ejemplo: recuperar una lista de solicitudes de extracción y revisar si cada una es fusionable. Una llamada a la API REST recupera una lista de solicitudes de incorporación de cambios y sus [representaciones de resumen](/rest#summary-representations):
```shell
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/pulls
```

Para determinar si una solicitud de incorporación de cambios se puede fusionar es necesario recuperar cada solicitud individualmente de acuerdo con su [representación detallada](/rest#detailed-representations) (una carga útil grande) y comprobar si su atributo `mergeable` es verdadero o falso:
```shell
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/pulls/:number
```

Con GraphQL, solo se pueden recuperar los atributos `number` y `mergeable` para cada solicitud de incorporación de cambios:

```graphql
query {
    repository(owner:"octocat", name:"Hello-World") {
    pullRequests(last: 10) {
      edges {
        node {
          number
          mergeable
        }
      }
    }
  }
}
```

## Ejemplo: Anidar

Hacer consultas con campos anidados te permite reemplazar varios llamados de REST con menos consultas de GraphQL. Por ejemplo, para recuperar una solicitud de incorporación de cambios junto con sus confirmaciones, comentarios no revisados y revisiones mediante la **API REST** se necesitan cuatro llamadas independientes:
```shell
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/pulls/:number
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/pulls/:number/commits
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/issues/:number/comments
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/pulls/:number/reviews
```

Con la **API de GraphQL**, puede recuperar los datos con una sola consulta mediante campos anidados:

```graphql
{
  repository(owner: "octocat", name: "Hello-World") {
    pullRequest(number: 1) {
      commits(first: 10) {
        edges {
          node {
            commit {
              oid
              message
            }
          }
        }
      }
      comments(first: 10) {
        edges {
          node {
            body
            author {
              login
            }
          }
        }
      }
      reviews(first: 10) {
        edges {
          node {
            state
          }
        }
      }
    }
  }
}
```

También puede ampliar la eficacia de esta consulta [sustituyendo una variable](/graphql/guides/forming-calls-with-graphql#working-with-variables) por el número de solicitudes de incorporación de cambios.

## Ejemplo: Escritura inflexible

Los modelos de GraphQL tienen una escritura inflexible, lo cual hace más seguro el manejo de los datos.

Imagínese, por ejemplo, que agrega un comentario a una incidencia o solicitud de incorporación de cambios con una [mutación](/graphql/reference/mutations) de GraphQL y, por error, especifica un entero en lugar de una cadena para el valor de [`clientMutationId`](/graphql/reference/mutations#addcomment):

```graphql
mutation {
  addComment(input:{clientMutationId: 1234, subjectId: "MDA6SXNzdWUyMjcyMDA2MTT=", body: "Looks good to me!"}) {
    clientMutationId
    commentEdge {
      node {
        body
        repository {
          id
          name
          nameWithOwner
        }
        issue {
          number
        }
      }
    }
  }
}
```

Ejecutar esta consulta recuperará errores que especificarán los tipos esperados para esta operación:

```json
{
  "data": null,
  "errors": [
    {
      "message": "Argument 'input' on Field 'addComment' has an invalid value. Expected type 'AddCommentInput!'.",
      "locations": [
        {
          "line": 3,
          "column": 3
        }
      ]
    },
    {
      "message": "Argument 'clientMutationId' on InputObject 'AddCommentInput' has an invalid value. Expected type 'String'.",
      "locations": [
        {
          "line": 3,
          "column": 20
        }
      ]
    }
  ]
}
```

Al entrecomillar `1234`, se transforma el valor de un entero a una cadena, el tipo esperado:

```graphql
mutation {
  addComment(input:{clientMutationId: "1234", subjectId: "MDA6SXNzdWUyMjcyMDA2MTT=", body: "Looks good to me!"}) {
    clientMutationId
    commentEdge {
      node {
        body
        repository {
          id
          name
          nameWithOwner
        }
        issue {
          number
        }
      }
    }
  }
}
```
