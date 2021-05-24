---
title: Migrar desde Rest hacia GraphQL
intro: 'Aprende las mejores prácticas y consideraciones para migrar desde la API de Rest de {% data variables.product.prodname_dotcom %} hacia la API de GrpahQL de {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /v4/guides/migrating-from-rest
  - /graphql/guides/migrating-from-rest
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - API
---

### Diferencias en la lógica de la API

Migrar desde Rest hacia GraphQL represente un cambio significativo en la lógica de las API. Las diferencias entre REST como un estilo y GraphQL como una especificación hacen difícil &mdash;y a menudo indeseable&mdash; reemplazar los llamados de la API de REST con las consultas de la API de GraphQL de una forma uno a uno. Hemos incluido ejemplos específicos de migración a continuación.

Para migrar tu código desde la [API de REST](/v3) hacia la API de GraphQL:

- Revisa las [especificaciones de GraphQL](https://graphql.github.io/graphql-spec/June2018/)
- Revisa el [modelo de GraphQL](/v4/reference/) de Github
- Considera la manera en la que cualquier código existente que tengas interactúa con la API de REST de GitHub
- Utiliza [Las ID de Nodo Global](/v4/guides/using-global-node-ids) para referenciar objetos entre versiones de API

Las ventajas significativas de GraphQL incluyen:

- [Obtener los datos que necesitas y únicamente eso](#example-getting-the-data-you-need-and-nothing-more)
- [Campos anidados](#example-nesting)
- [Escritura inflexible](#example-strong-typing)

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

Considera otro ejemplo: recuperar una lista de solicitudes de extracción y revisar si cada una es fusionable. Un llamado a la API de REST recupera un listado de solicitudes de extracción y sus [resúmenes de representación](/v3/#summary-representations):
```shell
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/pulls
```

El determinar si una solicitud de extracción es fusionable requiere que recuperes cada solicitud individualmente de acuerdo con su [representación detallada](/v3/#detailed-representations) (una carga útil grande) y que revises si el atributo `mergeable` es verdadero o falso:
```shell
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/pulls/:number
```

Con GraphQL, puedes recuperar únicamente los atributos `number` y `mergeable` para cada solicitud de extracción:

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

Hacer consultas con campos anidados te permite reemplazar varios llamados de REST con menos consultas de GraphQL. Por ejemplo, recuperar una solicitud de extracción junto con sus confirmaciones, comentarios no revisados, y revisiones utilizando la **API de REST** requiere de cuatro llamados por separado:
```shell
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/pulls/:number
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/pulls/:number/commits
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/issues/:number/comments
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/pulls/:number/reviews
```

Utilizando la **API de GraphQL**, puedes recuperar los datos con una sola consulta utilizando los campos anidados:

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

También puedes extender la capacidad de esta consulta si [sustituyes una variable](/v4/guides/forming-calls/#working-with-variables) para el número de la solicitud de extracción.

## Ejemplo: Escritura inflexible

Los modelos de GraphQL tienen una escritura inflexible, lo cual hace más seguro el manejo de los datos.

Considera como ejemplo agregar un comentario a un informe de problemas o solicitud de extracción utilizando una [mutación](/v4/mutation) de GraphQL, y por error, especificar un integral en vez de una cadena para el valor de [`clientMutationId`](/v4/mutation/addcomment/):

```graphql
mutation {
  addComment(input:{clientMutationId: 1234, subjectId: "MDA6SXNzdWUyMjcyMDA2MTT=", body: "Looks good to me!"}) "Looks good to me!"}) {
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

Poner comillas en `1234` transformará el valor de un integral al de una cadena, el tipo esperado:

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
