---
title: Introducción a GraphQL
intro: Aprende terminología y conceptos útiles para utilizar la API de GraphQL de GitHub.
redirect_from:
  - /v4/guides/intro-to-graphql
  - /graphql/guides/intro-to-graphql
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Terminología de GraphQL

La API de GraphQL de GitHub representa un cambio conceptual y arquitectónico de la API de REST de GitHub. Seguramente encontrarás nueva terminología en los [documentos de referencia](/graphql) de la API de GraphQL.

### Modelo

Un modelo define un tipo de sistema de la API de GraphQL. Describe el conjunto de datos posibles (objetos, campos, relaciones, todo) a los que puede acceder un cliente. Los llamados desde el cliente se [validan](https://graphql.github.io/learn/validation/) y [ejecutan](https://graphql.github.io/learn/execution/) contra un modelo. Un cliente puede encontrar información acerca del modelo a través de [introspección](#discovering-the-graphql-api). UN modelo reside en el servidor de la API de GraphQL. Para obtener más información, consulta la sección "[Descubriendo la API de GraphQL](#discovering-the-graphql-api)".

### Campo

Un campo es una unidad de datos que puedes recuperar de un objeto. Como dicen los [documentos oficiales de GraphQL](https://graphql.github.io/learn/schema/): "El lenguaje de consulta GraphQL se trata básicamente de seleccionar campos en los objetos".

Las [especificaciones oficiales](https://graphql.github.io/graphql-spec/June2018/#sec-Language.Fields) dicen también acerca de los campos:

> Todas las operaciones de GraphQL deben especificar sus selecciones en campos que regresarán valores escalares para garantizar una respuesta conformada sin ambigüedad.

Esto significa que si intentas recuperar un campo que no es un valor escalar, la validación del modelo arrojará un error. Debes agregar subcampos anidados hasta que todos los campos recuperen valores escalares.

### Argumento

Un argumento es un conjuto de pares clave-valor adjuntos a un campo específico. Algunos campos requieren un argumento. Las [mutaciones](/graphql/guides/forming-calls-with-graphql#about-mutations) requieren un objeto de entrada como argumento.

### Implementación

El modelo de GraphQL podría utilizar el término _implementa_ para definir cómo un objeto hereda de una [interface](/graphql/reference/interfaces).

Aquí se muestra un ejemplo artificial de un modelo que define la interface `X` y el objeto `Y`:

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

Esto significa que el objeto `Y` requiere los mismos tipos de campos/argumentos/recuperaciones que requiere la interface `X`, mientras que agregan nuevos campos específicos para el objeto `Y`. (El signo `!` significa que el campo es requerido).

En los documentos de referencia, podrás notar que:

* Cada [objeto](/graphql/reference/objects) lista la(s) interface(s) _de la(s) cual(es) hereda_ debajo de **Implementa**.

* Cada [interface](/graphql/reference/interfaces) lista los objetos _que heredan desde ella_ bajo **Implementaciones**.

### Conexión

Las conexiones permiten consultar objetos relacionados como parte del mismo llamado. Con las conexiones, puedes utilizar un solo llamado de GraphQL y, en contraste, tendrías que utilizar múltiples llamados en una API de REST. Para obtener más información, consulta "[Migrar de REST a GraphQL](/graphql/guides/migrating-from-rest-to-graphql)".

Es útil imaginar una gráfica: puntos conectados con líneas. Los puntos son nodos, las líneas son bordes. Una conexión define una relación entre nodos.

### Borde

Los bordes representan las conexiones entre nodos. Cuando consultas una conexión, cruzas sus bordes para obtener sus nodos. Cada campo de `edges` tiene un campo de `node` y uno de `cursor`. Los cursores se utilizan para la [paginación](https://graphql.github.io/learn/pagination/).

### Nodo

_Nodo_ es un término genérico para un objeto. Puedes buscar un nodo directamente, o puedes acceder a nodos relacionados a través de una conexión. Si especificas un `node` que no regrese un valor [escalar](/graphql/reference/scalars), deberás incluir los subcampos hasta que todos los campos recuperen valores escalares. Para obtener información sobre el acceso a las ID de los nodos a través de la API de REST y utilizarlos en las consultas de GraphQL, consulta la sección "[Utilizar ID de Nodos Globales](/graphql/guides/using-global-node-ids)".

## Descubrir la API de GraphQL

GraphQL es [introspectivo](https://graphql.github.io/learn/introspection/). Esto significa que puedes consultar un modelo de GraphQL para encontrar detalles de éste mismo.

* Consulta `__schema` para listar todos los tipos definidos en el modelo y obtener detalles de cada uno:

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

* Consulta `__type` para obtener detalles de cualquier tipo:

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

* También puedes ejecutar una _consulta de introspección_ del modelo a través de la solicitud `GET`:

  ```shell
  $ curl -H "Authorization: bearer <em>token</em>" {% data variables.product.graphql_url_pre %}
  ```

  Estos resultados están en JSON, así que recomendamos imprimirlos notablemente para su lectura y búsqueda más fácil. Puedes utilizar una herramienta de línea de comandos como [jq](https://stedolan.github.io/jq/) o enlazar los resultados en `python -m json.tool` para lograrlo.

  Como alternativa, puedes pasar el tipo de medios `idl` para recuperar los resultados en formato IDL, el cual es una versión condensada del mismo modelo:

  ```shell
  $ curl -H "Authorization: bearer <em>token</em>" -H "Accept: application/vnd.github.v4.idl" \
  {% data variables.product.graphql_url_pre %}
  ```

  {% note %}

  **Nota**: La consulta de introspección probablemente es la única solicitud de tipo `GET` que ejecutarás en GraphQL. Si estás pasando un cuerpo, el método de solicitud de GraphQL es de tipo `POST`, ya sea para consultas o mutaciones.

  {% endnote %}

  Para obtener más información acerca de realizar consultas, consulta la sección "[Formar llamados con GraphQL](/graphql/guides/forming-calls-with-graphql)".
