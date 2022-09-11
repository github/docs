---
title: Introducción a GraphQL
intro: Aprende terminología y conceptos útiles para utilizar la API de GraphQL de GitHub.
redirect_from:
  - /v4/guides/intro-to-graphql
  - /graphql/guides/intro-to-graphql
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
ms.openlocfilehash: abc74dfd4aa65035405fd956c6438a487381284b
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145069743'
---
## Terminología de GraphQL

La API de GraphQL de GitHub representa un cambio conceptual y arquitectónico de la API de REST de GitHub. Seguramente encontrará nueva terminología la [documentación de referencia](/graphql) de GraphQL API.

## Schema

Un modelo define un tipo de sistema de la API de GraphQL. Describe el conjunto de datos posibles (objetos, campos, relaciones, todo) a los que puede acceder un cliente. Todas las llamadas desde el cliente se [validan](https://graphql.github.io/learn/validation/) y [ejecutan](https://graphql.github.io/learn/execution/) en función del esquema. Un cliente puede encontrar información sobre el esquema mediante la [introspección](#discovering-the-graphql-api). UN modelo reside en el servidor de la API de GraphQL. Para más información, vea "[Descubriendo GraphQL API](#discovering-the-graphql-api)".

## Campo

Un campo es una unidad de datos que puedes recuperar de un objeto. Como se afirma en la [documentación oficial de GraphQL](https://graphql.github.io/learn/schema/): "El lenguaje de consulta GraphQL consiste básicamente en seleccionar campos en objetos".

Sobre los campos, en la [especificación oficial](https://graphql.github.io/graphql-spec/June2018/#sec-Language.Fields) también se afirma que:

> Todas las operaciones de GraphQL deben especificar sus selecciones en campos que regresarán valores escalares para garantizar una respuesta conformada sin ambigüedad.

Esto significa que si intentas recuperar un campo que no es un valor escalar, la validación del modelo arrojará un error. Debes agregar subcampos anidados hasta que todos los campos recuperen valores escalares.

## Argumento

Un argumento es un conjuto de pares clave-valor adjuntos a un campo específico. Algunos campos requieren un argumento. Las [mutaciones](/graphql/guides/forming-calls-with-graphql#about-mutations) necesitan un objeto de entrada como argumento.

## Implementación

Un esquema de GraphQL puede usar el término _implementa_ para definir cómo se hereda un objeto de una [interfaz](/graphql/reference/interfaces).

Aquí se muestra un ejemplo complejo de un modelo que define la interfaz `X` y el objeto `Y`:

```
interface X {
  some_field: String!
  other_field: String!
}

type Y implements X {
  some_field: String!
  other_field: String!
  new_field: String!
}
```

Esto significa que el objeto `Y` necesita los mismos tipos de campos/argumentos/valores devueltos que la interfaz `X`, además de agregar nuevos campos específicos para el objeto `Y`. (`!` significa que el campo es obligatorio).

En los documentos de referencia, podrás notar que:

* Cada [objeto](/graphql/reference/objects) enumera las interfaces _de las que se hereda_ en **Implementaciones**.

* Cada [interfaz](/graphql/reference/interfaces) enumera los objetos _que se heredan de ella_ en **Implementaciones**.

## Conexión

Las conexiones permiten consultar objetos relacionados como parte del mismo llamado. Con las conexiones, puedes utilizar un solo llamado de GraphQL y, en contraste, tendrías que utilizar múltiples llamados en una API de REST. Para más información, vea "[Migración de REST a GraphQL](/graphql/guides/migrating-from-rest-to-graphql)".

Es útil imaginar una gráfica: puntos conectados con líneas. Los puntos son nodos, las líneas son bordes. Una conexión define una relación entre nodos.

## Edge

Los bordes representan las conexiones entre nodos. Cuando consultas una conexión, cruzas sus bordes para obtener sus nodos. Cada campo `edges` tiene un campo `node` y un campo `cursor`. Los cursores se usan para la [paginación](https://graphql.github.io/learn/pagination/).

## Nodo

_Nodo_ es término genérico para un objeto. Puedes buscar un nodo directamente, o puedes acceder a nodos relacionados a través de una conexión. Si especifica un valor `node` que no devuelve un valor [escalar](/graphql/reference/scalars), tendrá que incluir subcampos hasta que todos los campos devuelvan valores escalares. Para obtener información sobre el acceso a id. de nodo mediante la API REST y cómo usarlos en las consultas de GraphQL, vea "[Uso de id. de nodo globales](/graphql/guides/using-global-node-ids)".

## Descubrir la API de GraphQL

GraphQL es [introspectivo](https://graphql.github.io/learn/introspection/). Esto significa que puedes consultar un modelo de GraphQL para encontrar detalles de éste mismo.

* Consulte `__schema` para enumerar todos los tipos definidos en el modelo y obtener detalles de cada uno:

  ```graphql
  query {
    __schema {
      types {
        name
        kind
        description
        fields {
          name
        }
      }
    }
  }
  ```

* Consulte `__type` para obtener detalles sobre cualquier tipo:

  ```graphql
  query {
    __type(name: "Repository") {
      name
      kind
      description
      fields {
        name
      }
    }
  }
  ```

* También puede ejecutar una _consulta de introspección_ del esquema mediante una solicitud `GET`:

  ```shell
  $ curl -H "Authorization: bearer <em>token</em>" {% data variables.product.graphql_url_pre %}
  ```
  
  {% note %}

  **Nota**: Si obtiene la respuesta `"message": "Bad credentials"` o `401 Unauthorized`, compruebe que usa un token válido. Para más información, vea "[Creación de un token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token)". 

  {% endnote %}
  
  Estos resultados están en JSON, así que recomendamos imprimirlos notablemente para su lectura y búsqueda más fácil. Puede usar una herramienta de línea de comandos como [jq](https://stedolan.github.io/jq/), o bien canalizar los resultados en `python -m json.tool` para este fin.
  
  Como alternativa, puede pasar el tipo de soporte físico `idl` para devolver los resultados en formato IDL, que es una versión condensada del esquema:

  ```shell
  $ curl -H "Authorization: bearer <em>token</em>" -H "Accept: application/vnd.github.v4.idl" \
  {% data variables.product.graphql_url_pre %}
  ```

  {% note %}

  **Nota**: La consulta de introspección probablemente es la única solicitud `GET` que ejecutará en GraphQL. Si va a pasar un cuerpo, el método de solicitud de GraphQL es `POST`, con independencia de que se trate de una consulta o una mutación.

  {% endnote %}

  Para más información sobre la ejecución de consultas, vea "[Creación de llamadas con GraphQL](/graphql/guides/forming-calls-with-graphql)".
