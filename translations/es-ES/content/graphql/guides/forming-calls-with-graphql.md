---
title: Formar llamados con GraphQl
intro: 'Aprende cómo autenticarte en la API de GraphQL, y luego cómo crear y ejecutar consultas y mutaciones.'
redirect_from:
  - /v4/guides/forming-calls
  - /graphql/guides/forming-calls
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
shortTitle: Form calls with GraphQL
ms.openlocfilehash: b3778872cad120f64f2fdbc238f2319bdd758513
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147527898'
---
## Autenticarse con GraphQL

Para comunicarte con el servidor de GraphQL, deberás tener un token OAuth con el alcance correcto.

Siga los pasos descritos en "[Creación de un token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token)" para crear un token. Los alcances que requieres dependen del tipo de datos que quieras solicitar. Por ejemplo, seleccione los ámbitos **Usuario** para solicitar datos de usuario. Si necesita acceso a la información del repositorio, seleccione los ámbitos **Repositorio** adecuados.

{% ifversion fpt or ghec %}

Para que coincida con el comportamiento del [Explorador de GraphQL](/graphql/guides/using-the-explorer), solicite los ámbitos siguientes:

{% else %}

Se recomiendan los siguientes alcances:

{% endif %}


```
repo
read:packages
read:org
read:public_key
read:repo_hook
user
read:discussion
read:enterprise
read:gpg_key
```

La API te notifica si algún recurso requiere de un alcance específico.

## Terminal de GraphQL

La API de REST tiene varias terminales; la API de GraphQL solo tiene una terminal:

<pre>{% data variables.product.graphql_url_pre %}</pre>

La terminal permanece constante sin importar la operación que realices.

## Comunicarse con GraphQL

Como las operaciones de GraphQL constan de código JSON de varias líneas, GitHub recomienda usar el [Explorador](/graphql/guides/using-the-explorer) para realizar llamadas a GraphQL. También puedes utilizar cURL o cualquier otra biblioteca que entienda HTTP.

En REST, los [verbos HTTP](/rest#http-verbs) determinan la operación realizada. En GraphQL, tendrá que proporcionar un cuerpo codificado con JSON cuando realice una consulta o una mutación, por lo que el verbo HTTP es `POST`. La excepción es una [consulta de introspección](/graphql/guides/introduction-to-graphql#discovering-the-graphql-api), que es una `GET` sencilla al punto de conexión. Para más información sobre las diferencias entre GraphQL y REST, vea "[Migración de REST a GraphQL](/graphql/guides/migrating-from-rest-to-graphql)".

Para consultar GraphQL mediante cURL, realice una solicitud `POST` con una carga JSON. La carga debe contener una cadena denominada `query`:

```shell
curl -H "Authorization: bearer <em>token</em>" -X POST -d " \
 { \
   \"query\": \"query { viewer { login }}\" \
 } \
" {% data variables.product.graphql_url_code %}
```

{% tip %}

**Nota**: El valor de cadena de `"query"` debe aplicar escape a los caracteres de nueva línea o el esquema no lo analizará correctamente. Para el cuerpo `POST`, use comillas dobles externas y comillas dobles interiores con escape.

{% endtip %}

### Acerca de las operaciones de consulta y mutación

Los dos tipos de operaciones permitidas en GraphQL API de GitHub son las _consultas_ y las _mutaciones_. Si se compara GraphQL con REST, las consultas funcionan como solicitudes `GET`, mientras que las mutaciones funcionan como`POST`/`PATCH`/`DELETE`. El [nombre de la mutación](/graphql/reference/mutations) determina qué modificación se ejecuta.

Para obtener información sobre la limitación de frecuencia, vea "[Limitaciones de recursos de GraphQL](/graphql/overview/resource-limitations)".

Las consultas y mutaciones comparten formatos similares con algunas diferencias importantes.

### Acerca de las consultas

Las consultas de GraphQL devuelven solo los datos que especifique. Para crear una consulta, debe especificar [campos dentro de campos](/graphql/guides/introduction-to-graphql#field) (también denominados _subcampos anidados_) hasta que solo se devuelvan [valores escalares](/graphql/reference/scalars).

Las consultas se estructuran de esta manera:

<pre>query {
  <em>JSON objects to return</em>
}</pre>

Para obtener un ejemplo real, vea "[Consulta de ejemplo](#example-query)".

### Acerca de las mutaciones

Para formar una mutación, debes especificar tres cosas:

1. _Nombre de la mutación_. El Tipo de modificación que quieres realizar.
2. _Objeto de entrada_. Los datos que quiere enviar al servidor, formados por _campos de entrada_. Pásalo como un argumento al nombre de la mutación.
3. _Objeto de carga_. Los datos que quiere devolver desde el servidor, formados por _campos devueltos_. Pásalos como el cuerpo del nombre de la mutación.

Las mutaciones se estructuran de la siguiente forma:

<pre>mutation {
  <em>mutationName</em>(input: {<em>MutationNameInput!</em>}) {
    <em>MutationNamePayload</em>
  }
}</pre>

El objeto de entrada de este ejemplo es `MutationNameInput`y el objeto de carga es `MutationNamePayload`.

En la referencia de [mutaciones](/graphql/reference/mutations), los _campos de entrada_ enumerados son lo que se pasa como objeto de entrada. Los _campos devueltos_ enumerados son lo que se pasa como objeto de carga.

Para obtener un ejemplo real, vea "[Mutación de ejemplo](#example-mutation)".

## Trabajo con variables

Las[variables](https://graphql.github.io/learn/queries/#variables) pueden hacer que las consultas sean más dinámicas y eficaces, y pueden reducir la complejidad al pasar objetos de entrada de mutación.

{% note %}

**Nota**: Si usa el Explorador, asegúrese de escribir variables en el [panel Variables de consulta](/graphql/guides/using-the-explorer#using-the-variable-pane) independiente y no incluya la palabra `variables` antes del objeto JSON.

{% endnote %}

Aquí hay una consulta de ejemplo con una sola variable:

```graphql
query($number_of_repos:Int!) {
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

Hay tres pasos para utilizar las variables:

1. Defina la variable fuera de la operación en un objeto `variables`:

  ```graphql
  variables {
     "number_of_repos": 3
  }
  ```

  El objeto debe ser un JSON válido. En este ejemplo se muestra un tipo de variable `Int` sencillo, pero se pueden definir tipos de variable más complejos, como los objetos de entrada. También puedes definir variables múltiples aquí.

2. Pasa la variable a la operación como un argumento:

  ```graphql
  query($number_of_repos:Int!){
  ```

  El argumento es un par clave-valor, donde la clave es el _nombre_ que empieza por `$` (por ejemplo, `$number_of_repos`) y el valor es el _tipo_ (por ejemplo, `Int`). Agregue `!` para indicar si el tipo es obligatorio. Si has identificado variables múltiples, inclúyelas aquí como argumentos múltiples.

3. Utiliza la variable dentro de la operación:

  ```graphql
  repositories(last: $number_of_repos) {
  ```

  En este ejemplo, sustituimos la variable por la cantidad de repositorios a devolver. Especificamos un tipo en el paso 2, ya que GraphQL requiere de una escritura inflexible.

Este proceso hace dinámico al argumento de la consulta. Ahora se puede cambiar el valor en el objeto `variables` y mantener el resto de la consulta igual.

El uso de variables como argumentos permite actualizar los valores del objeto `variables` de forma dinámica sin cambiar la consulta.

## Ejemplo de consulta

Analicemos una consulta más compleja y pongamos esta información en contexto.

La consulta siguiente examina el repositorio `octocat/Hello-World`, busca las 20 incidencias cerradas más recientes y devuelve el título, la dirección URL y las 5 primeras etiquetas de cada incidencia:

```graphql
query {
  repository(owner:"octocat", name:"Hello-World") {
    issues(last:20, states:CLOSED) {
      edges {
        node {
          title
          url
          labels(first:5) {
            edges {
              node {
                name
              }
            }
          }
        }
      }
    }
  }
}
```

Analizando la composición línea por línea:

* `query {`

  Como el objetivo es leer datos del servidor, no modificarlos, la operación raíz es `query`. (Si no especifica una operación, `query` también es el valor predeterminado).

* `repository(owner:"octocat", name:"Hello-World") {`

  Para comenzar la consulta, se busca un objeto [`repository`](/graphql/reference/objects#repository). La validación del esquema indica que este objeto necesita un `owner` y un argumento `name`.

* `issues(last:20, states:CLOSED) {`

  Para tener en cuenta todas las incidencias del repositorio, se llama al objeto `issues`. (Se _podría_ consultar un único `issue` en `repository`, pero para eso sería necesario conocer el número de la incidencia que se quiere devolver y proporcionarlo como argumento).

  Algunos detalles sobre el objeto `issues`:

  - En la [documentación](/graphql/reference/objects#repository) se indica que este objeto tiene el tipo `IssueConnection`.
  - La validación del esquema indica que este objeto necesita un número de resultados `last` o `first` como argumento, por lo que se proporciona `20`.
  - En la [documentación](/graphql/reference/objects#repository) también se indica que este objeto acepta un argumento `states`, que es una enumeración [`IssueState`](/graphql/reference/enums#issuestate) que acepta valores `OPEN` o `CLOSED`. Para busca solo incidencias cerradas, se asigna un valor de `CLOSED` a la clave `states`.

* `edges {`

  Se sabe que `issues` es una conexión porque tiene el tipo `IssueConnection`. Para recuperar datos sobre incidencias individuales, es necesario al nodo por medio de `edges`.

* `node {`

  Aquí devolvemos el nodo al final del borde. En la [documentación de `IssueConnection`](/graphql/reference/objects#issueconnection) se indica que el nodo al final del tipo `IssueConnection` es un objeto `Issue`.

* Ahora que se sabe que se va a recuperar un objeto `Issue`, se puede examinar la [documentación](/graphql/reference/objects#issue) y especificar los campos que se quieren devolver:

  ```graphql
  title
  url
  labels(first:5) {
    edges {
      node {
        name
      }
    }
  }
  ```

  Aquí se especifican los campos `title`, `url` y `labels` del objeto `Issue`.

  El campo `labels` tiene el tipo [`LabelConnection`](/graphql/reference/objects#labelconnection). Como sucede con el objeto `issues`, como `labels` es una conexión, es necesario desplazar sus bordes a un nodo conectado: el objeto `label`. En el nodo, se pueden especificar los campos del objeto `label` que se quieren devolver, en este caso, `name`.

Es posible que observe que la ejecución de esta consulta en el repositorio `Hello-World` {% ifversion not ghae %}público{% endif %} de Octocat no devuelve muchas etiquetas. Intenta ejecutarlo en uno de tus propios repositorios que utilice etiquetas, y seguramente verás la diferencia.

## Mutación de ejemplo

Las mutaciones a menudo requieren información que solo puedes encontrar si realizas una consulta primero. Este ejemplo muestra dos operaciones:

1. Una consulta para obtener la ID de un informe de problemas.
2. Una mutación para agregar una reacción de emoji a dicho informe.

```graphql
query FindIssueID {
  repository(owner:"octocat", name:"Hello-World") {
    issue(number:349) {
      id
    }
  }
}

mutation AddReactionToIssue {
  addReaction(input:{subjectId:"MDU6SXNzdWUyMzEzOTE1NTE=",content:HOORAY}) {
    reaction {
      content
    }
    subject {
      id
    }
  }
}
```

{% tip %}

Aunque puede incluir una consulta y una mutación en la misma ventana del Explorador si les asigna nombres (`FindIssueID` y `AddReactionToIssue` en este ejemplo), las operaciones se ejecutarán como llamadas independientes al punto de conexión de GraphQL. No se puede realizar una consulta al mismo tiempo que una mutación, o viceversa.

{% endtip %}

Analicemos el ejemplo. La tarea parece simple: agregar una reacción de emoji a un informe de problemas.

Así que, ¿qué es lo que sabemos para comenzar con la consulta? Aún no sabemos nada.

Ya que queremos modificar los datos en el servidor (agregar un emoji a un informe de problemas), comenzamos buscando el modelo para una mutación útil. En la documentación de referencia se muestra la mutación [`addReaction`](/graphql/reference/mutations#addreaction), con esta descripción: `Adds a reaction to a subject.` Perfecto.

Los documentos para la mutación listan tres campos de entrada:

* `clientMutationId` (`String`)
* `subjectId` (`ID!`)
* `content` (`ReactionContent!`)

Los valores `!` indican que `subjectId` y `content` son campos obligatorios. Un campo `content` obligatorio tiene sentido: el objetivo es agregar una reacción, por lo que será necesario especificar el emoji que se va a usar.

¿Pero por qué `subjectId` es obligatorio? Se debe a que `subjectId` es la única manera de identificar a _qué_ incidencia de _qué_ repositorio se debe reaccionar.

Este es el motivo de comenzar el ejemplo con una consulta: para obtener `ID`.

Examinemos la consulta línea por línea:

* `query FindIssueID {`

  Aquí se realiza una consulta y se le asigna el nombre `FindIssueID`. Nota que el nombrar una consulta es opcional; le dimos un nombre para que podamos incluirlo en la misma ventana del explorador que utiliza la mutación.

* `repository(owner:"octocat", name:"Hello-World") {`

  Para especificar el repositorio se consulta el objeto `repository` y se pasan los argumentos `owner` y `name`.

* `issue(number:349) {`

  Para especificar la incidencia a la que reaccionar se consulta el objeto `issue` y se pasa un argumento `number`.

* `id`

  Aquí es donde se recupera el valor `id` de `https://github.com/octocat/Hello-World/issues/349` para pasarlo como `subjectId`.

Cuando se ejecuta la consulta, se obtiene `id`: `MDU6SXNzdWUyMzEzOTE1NTE=`.

{% tip %}

**Nota**: El valor `id` devuelto en la consulta es el que se pasará como `subjectID` en la mutación. Ni los docs ni la introspección de modelo indicarán esta relación; necesitarás entender los conceptos detrás de los nombres para averiguarla.

{% endtip %}

Una vez conociendo la ID, podemos proceder con la mutación:

* `mutation AddReactionToIssue {`

  Aquí se ejecuta una mutación y se le asigna el nombre `AddReactionToIssue`. Como con las consultas, nombrar una mutación es opcional; le dimos un nombre para poder incluirlo en la misma ventana del explorador que la consulta.

* `addReaction(input:{subjectId:"MDU6SXNzdWUyMzEzOTE1NTE=",content:HOORAY}) {`

  Examinemos esta línea:

  - `addReaction` es el nombre de la mutación.
  - `input` es la clave de argumento obligatoria. Para una mutación siempre será `input`.
  - `{subjectId:"MDU6SXNzdWUyMzEzOTE1NTE=",content:HOORAY}` es la valor de argumento obligatorio. Siempre será un [objeto de entrada](/graphql/reference/input-objects) (de ahí las llaves) formado por campos de entrada (`subjectId` y `content` en este caso) para una mutación.

  ¿Cómo sabemos qué valor utilizar para el contenido? En la [documentación de `addReaction`](/graphql/reference/mutations#addreaction) se indica que el campo `content` tiene el tipo [`ReactionContent`](/graphql/reference/enums#reactioncontent), que es una [enumeración](/graphql/reference/enums) porque en las incidencias de GitHub solo se admiten ciertas de reacciones emoji. Estos son los valores permitidos para las reacciones (nota que algunos valores son diferentes de sus nombres de emoji correspondientes):

  {% data reusables.repositories.reaction_list %}

* El resto del llamado se compone del objeto de carga útil. Aquí es donde especificamos los datos que queremos recuperar del servidor después de que realicemos la mutación. Estas líneas proceden de la [documentación de `addReaction`](/graphql/reference/mutations#addreaction), con tres campos devueltos posibles:

    - `clientMutationId` (`String`)
    - `reaction` (`Reaction!`)
    - `subject` (`Reactable!`)

  En este ejemplo, se devuelven los dos campos obligatorios (`reaction` y `subject`), que tienen subcampos obligatorios (`content` y `id`, respectivamente).

Cuando ejecutamos la mutación, esta es la respuesta:

```json
{
  "data": {
    "addReaction": {
      "reaction": {
        "content": "HOORAY"
      },
      "subject": {
        "id": "MDU6SXNzdWUyMTc5NTQ0OTc="
      }
    }
  }
}
```

Eso es todo. Para consultar la [reacción a la incidencia](https://github.com/octocat/Hello-World/issues/349) mantenga el mouse sobre :tada: para encontrar el nombre de usuario.

Una última nota: cuando pasas varios campos en un objeto de entrada, la sintaxis puede ser difícil de manejar. Puede resultar útil mover los campos a una [variable](#working-with-variables). Así es como podrías reescribir la mutación original utilizando una variable:

```graphql
mutation($myVar:AddReactionInput!) {
  addReaction(input:$myVar) {
    reaction {
      content
    }
    subject {
      id
    }
  }
}
variables {
  "myVar": {
    "subjectId":"MDU6SXNzdWUyMTc5NTQ0OTc=",
    "content":"HOORAY"
  }
}
```

{% note %}

Es posible que observe que el valor del campo `content` en el ejemplo anterior (donde se usa directamente en la mutación) no tiene comillas alrededor de `HOORAY`, pero sí cuando se usa en la variable. Esto es por una razón:
* Cuando se usa `content` directamente en la mutación, el esquema espera que el valor sea de tipo [`ReactionContent`](/graphql/reference/enums#reactioncontent), que es una _enumeración_, no una cadena. La validación del modelo arrojará un error si agregas comillas antes y después del valor de enumerador, ya que éstas están reservadas para las cadenas.
* Cuando se usa `content` en una variable, la sección de variables debe ser código JSON válido, por lo que las comillas son obligatorias. La validación del esquema interpreta correctamente el tipo `ReactionContent` cuando la variable se pasa a la mutación durante la ejecución.

Para más información sobre la diferencia entre enumeraciones y cadenas, vea la [especificación oficial de GraphQL](https://graphql.github.io/graphql-spec/June2018/#sec-Enums).

{% endnote %}

## Información adicional

Hay _mucho_ más que puede hacer al realizar llamadas a GraphQL. Aquí hay algunos lugares que te pueden interesar posteriormente:

* [Paginación](https://graphql.org/learn/pagination/)
* [Fragmentos](https://graphql.org/learn/queries/#fragments)
* [Fragmentos alineados](https://graphql.org/learn/queries/#inline-fragments)
* [Directivas](https://graphql.org/learn/queries/#directives)
