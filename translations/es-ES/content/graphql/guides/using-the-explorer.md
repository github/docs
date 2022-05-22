---
title: Utilizar el Explorador
intro: 'Puedes ejecutar consultas en datos reales de {% data variables.product.prodname_dotcom %} utilizando el explorador de GraphQL, un ambiente de desarrollo integrado en tu buscador que incluye documentos, sintaxis resaltada y errores de validación.'
redirect_from:
  - /v4/guides/using-the-explorer
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - API
---

## Acerca del explorador de GraphQL

{% if currentVersion == "free-pro-team@latest" %}

El [Explorador de GraphQL](/graphql/overview/explorer) es una instancia de [GraphQL](https://github.com/graphql/graphiql), la cual es una "IDE de GraphQL gráfica e interactiva en el mismo buscador".

{% note %}

**Nota**: {% data variables.product.prodname_dotcom %} ha inhabilitado las [mutaciones](/graphql/reference/mutations) en el explorador, pero puedes utilizarlas en tu propia instancia de GraphiQL.

{% endnote %}

{% else %}

[GraphiQL](https://github.com/graphql/graphiql), también mencionado en esta documentación como el explorador de GraphQL, es una "IDE de GraphQL gráfica e interactiva en el mismo buscador".

{% endif %}

### Utilizar GrpahiQL

Para utilizar la app de GraphiQL, descárgala e instálala desde https://github.com/skevy/graphiql-app.

#### Configurar GraphiQL

1. Obtén un [token de OAuth](/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql).
1. Lanzar GraphiQL.
1. En la esquina superior derecha de GraphiQL, da clic en **Editar Encabezados de HTTP**.
1. En el campo **Clave**, ingresa `Authorization`. En el campo **Valor**, ingresa `Bearer <token>`, en donde `<token>` es tu token de OAuth generado. ![encabezados de graphiql](/assets/images/developer/graphiql-headers.png)
1. Da clic en la casilla a la derecha del token para guardarlo.
1. Para gregresar al editor, da clic fuera de el modo **Editar Encabezados de HTTP**.
1. En el campo **Terminal GraphQL** ingresa `{% data variables.product.graphql_url_pre %}`.
1. En el menú desplegable **Método**, selecciona **POST**.

{% note %}

**Nota**: Para obtener más información acerca del porqué `POST` es el método, consulta la sección "[Comunicarse con GraphQL](/graphql/guides/forming-calls-with-graphql#communicating-with-graphql)".

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

### Acceder a los documentos de la barra lateral

Todos los tipos en el modelo de GraphQL incluyen un campo de `description` compilado en la documentación. El pánel retráctil **Docs** en el costado derecho de la página del explorador te permite buscar documentación acerca de tu tipo de sistema. Los documentos se actualizan automáticamente y eliminarán los campos obsoletos.

{% note %}

La barra lateral de **Docs** tiene el mismo contenido que se genera automáticamente del modelo bajo "[Referencia](/graphql)", aunque con diferente formato en algunas partes.

{% endnote %}

### Utilizar el pánel de variable

Algunos llamados de ejemplo incluyen [variables](/graphql/guides/forming-calls-with-graphql#working-with-variables) escritas como éstas:

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

Este es el formato correcto para emitir la llamada a través de `POST` en cURL (mientras que [escapes las líneas nuevas](/graphql/guides/forming-calls-with-graphql#communicating-with-graphql)).

Si quieres ejecutar la llamada en el explorador, ingresa el segmento `query` en el panel principal y las variables en el panel de **Variables de Consulta** debajo de éste. Omite la palabra `variables` en el explorador:

```graphql
{
   "number_of_repos": 3
}
```

### Solicitar soporte

{% data reusables.support.help_resources %}

### Solución de errores

Ya que GraphQL es [introspectivo](/graphql/guides/introduction-to-graphql#discovering-the-graphql-api), el explorador soporta:

* Autocompleción inteligente consciente del modelo actual
* Vistas previas de validación de errores mientras tecleas

Si ingresas una consulta que no esté bien estructurada o no pase el [modelo de validación](/graphql/guides/introduction-to-graphql#schema), un mensaje emergente te avisará de un error. Si ejecutas la consulta, el error se devolverá en el panel de respuesta.

Una respuesta de GraphQL contiene varias claves: un hash de `data` y un arreglo de `errors`.

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

**Nota:** {% data variables.product.prodname_dotcom %} recomienda que revises si hay errores antes de utilizar datos en un ambiente productivo. En GraphQL, la falla no es total: algunas porciones de las consultas de GraphQL pueden tener éxito y otras pueden fallar.

{% endnote %}
