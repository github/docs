---
title: Utilizar el Explorador
intro: 'Puedes ejecutar consultas en datos reales de {% data variables.product.prodname_dotcom %} utilizando el explorador de GraphQL, un ambiente de desarrollo integrado en tu buscador que incluye documentos, sintaxis resaltada y errores de validación.'
redirect_from:
  - /v4/guides/using-the-explorer
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
ms.openlocfilehash: 19c534dd0cdcacdfd0d96bb93d055ff3fca8690b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '146749493'
---
## Acerca del explorador de GraphQL

{% ifversion fpt or ghec %}

El [explorador de GraphQL](/graphql/overview/explorer) es una instancia de [GraphiQL](https://github.com/graphql/graphiql), que es un "IDE de GraphQL gráfico e interactivo en el explorador".

{% else %}

[GraphiQL](https://github.com/graphql/graphiql), también mencionado en esta documentación como el explorador de GraphQL, es un "IDE de GraphQL gráfico e interactivo en el explorador".

{% endif %}

## Utilizar GrpahiQL

Para usar la aplicación GraphiQL, descárguela e instálela desde https://github.com/skevy/graphiql-app.

### Configurar GraphiQL

1. Obtenga un [token de OAuth](/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql).
1. Inicie GraphiQL.
1. En la esquina superior derecha de GraphiQL, haga clic en **Edit HTTP Headers** (Editar encabezados HTTP).
1. En el campo **Key** (Clave), escriba `Authorization`. En el campo **Value** (Valor), escriba `Bearer <token>`, donde `<token>` es el token de OAuth generado.
![Encabezados de GraphiQL](/assets/images/developer/graphiql-headers.png)
1. Haga clic en la marca de verificación a la derecha del token para guardarlo.
1. Para volver al editor, haga clic fuera del modal **Edit HTTP Headers** (Editar encabezados HTTP).
1. En el campo **GraphQL Endpoint** (Punto de conexión de GraphQL), escriba `{% data variables.product.graphql_url_pre %}`.
1. En el menú desplegable **Method** (Método), seleccione **POST**.

{% note %}

**Nota**: Para obtener más información sobre por qué `POST` es el método, vea "[Comunicarse con GraphQL](/graphql/guides/forming-calls-with-graphql#communicating-with-graphql)".

{% endnote %}

Puedes probar tu acceso si te consultas a ti mismo:

```graphql
query {
  viewer {
    login
  }
}
```

Si todo funcionó correctamente, esto mostrará tu ingreso. Estás listo para comenzar a hacer consultas.

## Acceder a los documentos de la barra lateral

Todos los tipos en el esquema de GraphQL incluyen un campo `description` compilado en la documentación. El panel contraíble **Docs** (Documentos) en el lado derecho de la página del explorador le permite buscar documentación acerca de su tipo de sistema. Los documentos se actualizan automáticamente y eliminarán los campos obsoletos.

{% note %}

La barra lateral **Docs** (Documentos) incluye el mismo contenido que se genera automáticamente del esquema en "[Reference](/graphql)" (Referencia), aunque con diferente formato en algunas partes.

{% endnote %}

## Utilizar el pánel de variable

Algunas llamadas de ejemplo incluyen [variables](/graphql/guides/forming-calls-with-graphql#working-with-variables) escritas de la siguiente manera:

```graphql
query($number_of_repos:Int!){
  viewer {
    name
     repositories(last: $number_of_repos) {
       nodes {
         name
       }
     }
   }
}
variables {
   "number_of_repos": 3
}
```

Este es el formato correcto para enviar la llamada mediante un cURL `POST` (siempre que establezca un carácter de [escape en las líneas nuevas](/graphql/guides/forming-calls-with-graphql#communicating-with-graphql)).

Si quiere ejecutar la llamada en el explorador, introduzca el segmento `query` en el panel principal y las variables en el panel **Query Variables** (Variables de Consulta) debajo de este. Omita la palabra `variables` del Explorador:

```graphql
{
   "number_of_repos": 3
}
```

## Solicitar soporte

{% data reusables.support.help_resources %}

## Solucionar errores

Dado que GraphQL es [introspectivo](/graphql/guides/introduction-to-graphql#discovering-the-graphql-api), el Explorador admite lo siguiente:

* Autocompleción inteligente consciente del modelo actual
* Vistas previas de validación de errores mientras tecleas

Si escribe una consulta que no está bien formada o no pasa la [validación del esquema](/graphql/guides/introduction-to-graphql#schema), un elemento emergente le advierte de un error. Si ejecutas la consulta, el error se devolverá en el panel de respuesta.

Una respuesta de GraphQL contiene varias claves: un código hash `data` y una matriz `errors`.

```json
{
  "data": null,
  "errors": [
    {
      "message": "Objects must have selections (field 'nodes' returns Repository but has no selections)",
      "locations": [
        {
          "line": 5,
          "column": 8
        }
      ]
    }
  ]
}
```

Es posible que te encuentres con un error inesperado que no está relacionado con el modelo. Si esto pasa, el mensaje incluirá el código de referencia que puedes utilizar cuando reportas el problema:

```json
{
  "data": null,
  "errors": [
    {
      "message": "Something went wrong while executing your query. This is most likely a GitHub bug. Please include \"7571:3FF6:552G94B:69F45B7:5913BBEQ\" when reporting this issue."
    }
  ]
}
```

{% note %}

**Nota**: {% data variables.product.prodname_dotcom %} recomienda que compruebe si hay errores antes de utilizar datos en un entorno de producción. En GraphQL, la falla no es total: algunas porciones de las consultas de GraphQL pueden tener éxito y otras pueden fallar.

{% endnote %}
