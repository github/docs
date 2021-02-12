---
title: Formar llamados con GraphQl
intro: 'Aprende cómo autenticarte en la API de GraphQL, y luego cómo crear y ejecutar consultas y mutaciones.'
redirect_from:
  - /v4/guides/forming-calls
  - /graphql/guides/forming-calls
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Autenticarse con GraphQL

Para comunicarte con el servidor de GraphQL, deberás tener un token OAuth con el alcance correcto.

Sigue los pasos en "[Crear un token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token)" para crear un token. Los alcances que requieres dependen del tipo de datos que quieras solicitar. Por ejemplo, selecciona los alcances del **Usuario** para solicitar datos de usuario. Si necesitas acceder a la información de un repositorio, selecciona los alcances de **Repositorio** adecuados.

{% if currentVersion == "free-pro-team@latest" %}

Para empatar el comportamiento del [Explorador de GraphQL](/graphql/guides/using-the-explorer), solicita los siguientes alcances:

{% else %}

Se recomiendan los siguientes alcances:

{% endif %}

```
user
public_repo
repo
repo_deployment
repo:status
read:repo_hook
read:org
read:public_key
read:gpg_key
```

La API te notifica si algún recurso requiere de un alcance específico.

### Terminal de GraphQL

La API de REST tiene varias terminales; la API de GraphQL solo tiene una terminal:

<pre>{% data variables.product.graphql_url_pre %}</pre>

La terminal permanece constante sin importar la operación que realices.

### Comunicarse con GraphQL

Ya que las operaciones de GraphQL consisten en JSON de línea múltiple, GitHub te recomienda utilizar el [Explorador](/graphql/guides/using-the-explorer) para hacer llamados de GraphQL. También puedes utilizar cURL o cualquier otra biblioteca que entienda HTTP.

En REST, [Los verbos HTTP](/rest#http-verbs) determinan la operación realizada. En GraphQL, proporcionarás un cuerpo codificado con JSON ya sea que realices una consulta o una mutación, para que el verbo HTTP sea `POST`. La excepción es una [consulta de introspección](/graphql/guides/introduction-to-graphql#discovering-the-graphql-api), lo cual es un simple `GET` en la terminal. Para obtener más información sobre GraphQL contra REST, consulta la sección "[Migrarse desde REST a GraphQL](/graphql/guides/migrating-from-rest-to-graphql)".

Para consultar GraphQL utilizando cURL, realiza una solicitud de `POST` con una carga útil de JSON. La carga útil deberá contener una cadena llamada `query`:

```shell
curl -H "Authorization: bearer <em>token</em>" -X POST -d " \
 { \
   \"query\": \"query { viewer { login }}\" \
 } \
" {% data variables.product.graphql_url_code %}
```

{% tip %}

**Nota**: El valor de cadena de `"query"` deve escaoar caracteres de nueva línea o el modelo no lo analizará correctamente. Para el cuerpo `POST`, utiliza comillas dobles externas y comillas dobles internas escapadas.

{% endtip %}

#### Acerca de las operaciones de consulta y mutación

Los dos tipos de operación permitidos en la API de GraphQL de GitHub son _consultas_ y _mutaciones_. Comparando GraphQL con REST, las consultas operan como solicitudes de tipo `GET`, mientras que las mutaciónes operan como `POST`/`PATCH`/`DELETE`. El [nombre de la mutación](/graphql/reference/mutations) determina qué modificación se llevará a cabo.

Para obtener información acerca de la limitación de tasas, consulta la sección "[Limitaciones de recursos para GraphQL](/graphql/overview/resource-limitations)".

Las consultas y mutaciones comparten formatos similares con algunas diferencias importantes.

#### Acerca de las consultas

Las consultas de GraphQL devuelven únicamente datos que especificas. Para formar una consulta, debes especificar [campos dentro de campos](/graphql/guides/introduction-to-graphql#field) (tambien conocidos como _subcampos anidados_) hasta que te devuelva únicamente [escalares](/graphql/reference/scalars).

Las consultas se estructuran de la siguiente forma:

<pre>query {
  <em>JSON objects to return</em>
}</pre>

Para ver un ejemplo de uso real, consulta "[Ejemplo de consulta](#example-query)".

#### Acerca de las mutaciones

Para formar una mutación, debes especificar tres cosas:

1. _Nombre de la mutación_. El Tipo de modificación que quieres realizar.
2. _Objeto de entrada_. Los datos que quieres enviar al servidor, compuestos de _campos de entrada_. Pásalo como un argumento al nombre de la mutación.
3. _Objeto de la carga útil_. Los datos que quieres retribuir del servidor, compuestos de _campos de devolución_. Pásalos como el cuerpo del nombre de la mutación.

Las mutaciones se estructuran de la siguiente forma:

<pre>mutation {
  <em>mutationName</em>(input: {<em>MutationNameInput!</em>}) {
    <em>MutationNamePayload</em>
  }
}</pre>

El objeto de entrada en este ejemplo es `MutationNameInput`, y la carga útil del objeto es `MutationNamePayload`.

En la referencia de [mutaciones](/graphql/reference/mutations), los _campos de entrada_ listados son los que quieres pasar como el objeto de entrada. Los _campos de devolución_ son lo que pasas como el objeto de carga útil.

Para ver un ejemplo de uso real, consulta "[Ejemplo de mutación](#example-mutation)".

### Trabajar con variables

Las [variables](https://graphql.github.io/learn/queries/#variables) pueden conformar consultas más dinámicas y poderosas, y pueden reducir la complejidad cuando pasas objetos de entrada de las mutaciones.

{% note %}

**Nota**: si estás utilizando el explorador, asegúrate de ingresar las variables en el [Panel de Variables de Consulta](/graphql/guides/using-the-explorer#using-the-variable-pane), y no incluyas la palabra `variables` antes del objeto JSON.

{% endnote %}

Aquí hay una consulta de ejemplo con una sola variable:

```graphql
query($number_of_repos:Int!) query($number_of_repos:Int!) {
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

1. Definir la variable fuera de la operación en un objeto `variables`:

  ```graphql
  variables {
     "number_of_repos": 3
  }
  ```

  El objeto debe ser un JSON válido. Este ejemplo muestra una variable de tipo `Int`, pero es posible definir tipos de variable más complejos, tales como los objetos de entrada. También puedes definir variables múltiples aquí.

2. Pasa la variable a la operación como un argumento:

  ```graphql
  query($number_of_repos:Int!){
  ```

  El argumento es un par de valor-clave, en donde la clave es el _nombre_ que comienza con `$` (por ejemplo, `$number_of_repos`), y el valor es el _tipo_ (por ejemplo, `Int`). Agrega un `!` para indicar si se requiere el tipo. Si has identificado variables múltiples, inclúyelas aquí como argumentos múltiples.

3. Utiliza la variable dentro de la operación:

  ```graphql
  repositories(last: $number_of_repos) {
  ```

  En este ejemplo, sustituimos la variable por la cantidad de repositorios a devolver. Especificamos un tipo en el paso 2, ya que GraphQL requiere de una escritura inflexible.

Este proceso hace dinámico al argumento de la consulta. Ahora podemos simplemente cambiar el valor en el objeto `variables` y mantener el resto del query tal cual.

Utilizar variables como argumentos te permite actualizar los valores en el objeto `variables` dinámicamente sin cambiar la consulta.

### Consulta de ejemplo

Analicemos una consulta más compleja y pongamos esta información en contexto.

La siguiente consulta busca el repositorio `octocat/Hello-World`, encuentra los 20 informes de problemas más recientes que se han cerrado, y devuelve el título de cada informe de problemas, la URL, y las primeras 5 etiquetas:

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

  Ya que queremos leer los dtos del servidor, y no modoficarlo, `query` es la operación raíz. (si no especificas una operación, `query` también es la operación predeterimanda).

* `repository(owner:"octocat", name:"Hello-World") {`

  Para iniciar la consulta, queremos encontrar un objeto [`repository`](/graphql/reference/objects#repository). La validación del modelo indica que este objeto requiere un argumento `owner` y `name`.

* `issues(last:20, states:CLOSED) {`

  Para explicar que se buscan todos los informes de problemas en el repositorio, llamamos al objeto `issues`. (_Podríamos_ consultar un solo `issue` en un `repository`, pero eso necesitaría que sepamos el número del informe de problemas que queremos se devuelva y proporcionarlo como argumento).

  Algunos detalles acerca del objeto `issues`:

  - Los [docs](/graphql/reference/objects#repository) nos dicen que este objeto es del tipo `IssueConnection`.
  - La validación del modelo indica que este objeto requiere de una cantidad de resultados `last` o `first` como un argumento, así que proporcionamos `20`.
  - Los [docs](/graphql/reference/objects#repository) también nos dicen que este objeto acepta un argumento `sttes`, el cual es un enumerador [`IssueState`](/graphql/reference/enums#issuestate) que acepta valores de `OPEN` o `CLOSED`. Para encontrar únicamente los informes de problemas cerrados, le damos a la clave `states` un valor de `CLOSED`.

* `edges {`

  Sabemos que `issues` es una conexión, ya que tiene el tipo `IssueConnection`. Para devolver datos acerca de los informes de problemas individuales, tenemos que acceder al nodo a través de `edges`.

* `node {`

  Aquí devolvemos el nodo al final del borde. Los [docs `IssueConnection`](/graphql/reference/objects#issueconnection) indican que el nodo al final del tipo `IssueConnection` es un objeto `Issue`.

* Ahora que sabemos que estamos recuperando un objeto `Issue`, podemos ver al [docs](/graphql/reference/objects#issue) y especificar los campos que queremos recuperar:

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

  Aquí especificamos los campos `title`, `url`, y `labels` del objeto `Issue`.

  El campo `labels` tiene el tipo [`LabelConnection`](/graphql/reference/objects#labelconnection). Así como el con el objeto `issues`, ya que `labels` es una conexión, debemos navegar por sus bordes hacia un nodo conectado: el objeto `label`. En el nodo, podemos especificar los campos del objeto `label` que intentamos recuperar, en este caso, `name`.

Notarás que ejecutar esta consulta en el repositorio público `Hello-World` de Octocat no recuperará muchas etiquetas. Intenta ejecutarlo en uno de tus propios repositorios que utilice etiquetas, y seguramente verás la diferencia.

### Mutación de ejemplo

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

Aunque puedes incluir una consulta y una mutación en la misma ventana del explorador si le das nombres ( en este ejemplo, `FindIssueID` y `AddReactionToIssue`), las operaciones se ejecutará como llamados separados a la terminal de GraphQL. No se puede realizar una consulta al mismo tiempo que una mutación, o viceversa.

{% endtip %}

Analicemos el ejemplo. La tarea parece simple: agregar una reacción de emoji a un informe de problemas.

Así que, ¿qué es lo que sabemos para comenzar con la consulta? Aún no sabemos nada.

Ya que queremos modificar los datos en el servidor (agregar un emoji a un informe de problemas), comenzamos buscando el modelo para una mutación útil. Los docs de referencia muestran la mutación [`addReaction`](/graphql/reference/mutations#addreaction) con la descripción: `Adds a reaction to a subject.`. ¡Perfecto!

Los documentos para la mutación listan tres campos de entrada:

* `clientMutationId` (`String`)
* `subjectId` (`ID!`)
* `content` (`ReactionContent!`)

Los signos `!` indican que `subjectId` y `content` son campos requeridos. Hace sentido que se requiera de un `content`: queremos agregar una reacción, así que necesitaremos especificar qué emoji se utilizará.

Pero, ¿por qué se requiere la `subjectId`? Esto es porque `subjectId` es la única manera de identificar a _cuál_ informe de problemas en _cuál_ repositorio se reaccionará.

Es por esto que comenzamos el ejemplo con una consulta: para obtener la `ID`.

Examinemos la consulta línea por línea:

* `query FindIssueID {`

  Aquí estamos realizando una consulta, y la nombramos `FindIssueID`. Nota que el nombrar una consulta es opcional; le dimos un nombre para que podamos incluirlo en la misma ventana del explorador que utiliza la mutación.

* `repository(owner:"octocat", name:"Hello-World") {`

  Especificamos el repositorio consultando el objeto `repository` y pasando los argumentos `owner` y `name`.

* `issue(number:349) {`

  Especificamos el informe de problemas al cual se reaccionará consultando el objeto `issue` y pasando un argumento `number`.

* `id`

  Aquí es donde recuperamos la `id` de `https://github.com/octocat/Hello-World/issues/349` para pasar como la `subjectId`.

Cuando ejecutamos la consulta, obtenemos la `id`: `MDU6SXNzdWUyMzEzOTE1NTE=`

{% tip %}

**Nota**: La `id` que se devuelve en la consulta es el valor que pasaremos como la `subjectID` en la mutación. Ni los docs ni la introspección de modelo indicarán esta relación; necesitarás entender los conceptos detrás de los nombres para averiguarla.

{% endtip %}

Una vez conociendo la ID, podemos proceder con la mutación:

* `mutation AddReactionToIssue {`

  Aquí realizamos una mutación, y la nombramos `AddReactionToIssue`. Como con las consultas, nombrar una mutación es opcional; le dimos un nombre para poder incluirlo en la misma ventana del explorador que la consulta.

* `addReaction(input:{subjectId:"MDU6SXNzdWUyMzEzOTE1NTE=",content:HOORAY}) {`

  Examinemos esta línea:

  - `addReaction` es el nombre de la mutación.
  - `input` es la clave de argumento requerida. Esto siempre será la `input` para una mutación.
  - `{subjectId:"MDU6SXNzdWUyMzEzOTE1NTE=",content:HOORAY}` es el valor requerido del argumento. Esto siempre será un [objeto de entrada](/graphql/reference/input-objects) (de ahí las corcheas) compuesto de campos de entrada (`subjectId` y `content` en este caso) para una mutación.

  ¿Cómo sabemos qué valor utilizar para el contenido? Los [docs `addReaction`](/graphql/reference/mutations#addreaction) nos dicen que el campo `content` es de tipo [`ReactionContent`](/graphql/reference/enums#reactioncontent), lo cual es un [enumerador](/graphql/reference/enums) ya que solo ciertas reacciones de emoji son compatibles con los informes de problemas de GitHub. Estos son los valores permitidos para las reacciones (nota que algunos valores son diferentes de sus nombres de emoji correspondientes):

  {% data reusables.repositories.reaction_list %}

* El resto del llamado se compone del objeto de carga útil. Aquí es donde especificamos los datos que queremos recuperar del servidor después de que realicemos la mutación. Estas líneas vienen de los [docs `AddReaction`](/graphql/reference/mutations#addreaction), que tienen tres campos de recuperación posibles:

    - `clientMutationId` (`String`)
    - `reaction` (`Reaction!`)
    - `subject` (`Reactable!`)

  En este ejemplo, recuperamos los dos campos requeridos (`reaction` y `subject`), ambos de los cuales tienen subcampos requeridos (respectivamente, `content` y `id`).

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

¡Listo! Revisa tu [reacción al informe de problemas](https://github.com/octocat/Hello-World/issues/349) pasando el puntero del mouse sobre :tada: para encontrar tu nombre de usuario.

Una última nota: cuando pasas varios campos en un objeto de entrada, la sintaxis puede ser difícil de manejar. Mover los campos hacia una [variable](#working-with-variables) puede ayudar. Así es como podrías reescribir la mutación original utilizando una variable:

```graphql
mutation($myVar:AddReactionInput!) mutation($myVar:AddReactionInput!) {
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

Podrás notar que el valor de campo `content` en el ejemplo pasado (en donde se usa directamente en la mutación) no tiene comillas encerrando a `HOORAY`, pero sí las tiene cuando se incluye en la variable. Esto es por una razón:
* Cuando utlilzas `content` directamente en la mutación, el modelo espera que el valor sea de tipo [`ReactionContent`](/graphql/reference/enums#reactioncontent), lo cual es un _enumerador_, no una cadena. La validación del modelo arrojará un error si agregas comillas antes y después del valor de enumerador, ya que éstas están reservadas para las cadenas.
* Cuando utilizas `content` en una variable, la sección de variables debe ser un JSON válido, así que las comillas son necesarias. La validación del modelo interpreta correctamente el tipo `ReactionContent` cuando se pasa la variable a la mutación durante la ejecución.

Para obtener más información acerca de la diferencia entre enumeradores y cadenas, consulta [official GraphQL spec](https://graphql.github.io/graphql-spec/June2018/#sec-Enums).

{% endnote %}

### Further reading

Puedes hacer mucho _más_ cuando conformes llamados de GraphQL. Aquí hay algunos lugares que te pueden interesar posteriormente:

* [Paginación](https://graphql.github.io/learn/pagination/)
* [Fragmentos](https://graphql.github.io/learn/queries/#fragments)
* [Fragmentos dentro de líneas](https://graphql.github.io/learn/queries/#inline-fragments)
* [Directivas](https://graphql.github.io/learn/queries/#directives)
