---
title: Utilizar la API para administrar proyectos (beta)
intro: Puedes utilizar la API de GraphQL para encontrar información acerca de los proyectos y para actualizarlos.
versions:
  fpt: '*'
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
type: how_to
topics:
  - Projects
---

El artículo muestra cómo utilizar la API de GraphQL para administrar un proyecto.

{% data reusables.projects.projects-beta %}

{% data reusables.projects.api-beta %}

## Autenticación

{% include tool-switcher %}

{% curl %}

En el resto de los ejemplos de cURL, reemplaza a `TOKEN` con un token que tenga el alcance `read:org` (para las consultas) o `write:org` (para las consultas y mutaciones). Para obtener más información acerca de cómo crear un token, consulta la sección "[Crear un token de acceso personal](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)".

{% endcurl %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Antes de ejecutar los comandos del {% data variables.product.prodname_cli %}, debes autenticarte ejecutando un `gh auth login` y proporcionando un token de autenticación que tenga el alcance `read:org` (para las consultas) o `write:org` (para las consultas y mutaciones). Durante el beta, no podrás autenticarte utilizando un buscador web. Para obtener más información sobre la autenticación por la línea de comandos, consulta la sección "[gh auth login](https://cli.github.com/manual/gh_auth_login)". Para obtener más información acerca de cómo crear un token, consulta la sección "[Crear un token de acceso personal](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)".

{% endcli %}

{% cli %}

## Utilizar variables

Puedes utilizar variables para simplificar tus scripts en todos los ejemplos siguientes. Utiliza `-F` para pasar una variable que sea un número, un booleano o nula. Utiliza `-f` para otras variables. Por ejemplo,

```shell
my_org="octo-org"
my_num=5
gh api graphql --header 'GraphQL-Features: projects_next_graphql' -f query='
  query($organization: String! $number: Int!){
    organization(login: $organization){
      projectNext(number: $number) {
        id
      }
    }
  }' -f organization=$my_org -F number=$my_num
```

Para obtener más información, consulta la sección "[Formatear llamados con GraphQL](/graphql/guides/forming-calls-with-graphql#working-with-variables)".

{% endcli %}

## Encontrar información sobre los proyectos

Utiliza consultas para obtener datos sobre los proyectos. Paraobtener más información, consulta la sección "[Acerca de las consultas](/graphql/guides/forming-calls-with-graphql#about-queries)".

### Encontrar la ID de nodo de un proyecto

Para actualizar tu proyecto a través de la API, necesitarás conocer la ID de nodo del proyecto.

Puedes encontrar la ID de nodo de un proyecto si conoces el nombre de organización y número de proyecto. Reemplaza `ORGANIZATION` con el nombre de tu organización. Por ejemplo, `octo-org`. Reemplaza `NUMBER` con tu número de proyecto. Para encontrar un número de proyecto, revisa su URL. Por ejemplo, la dirección `https://github.com/orgs/octo-org/projects/5` tiene "5" como número de proyecto.

{% include tool-switcher %}

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --header 'GraphQL-Features: projects_next_graphql' \
  --data '{"query":"query{organization(login: \"<em>ORGANIZATION</em>\") {projectNext(number: <em>NUMBER</em>){id}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql --header 'GraphQL-Features: projects_next_graphql' -f query='
  query{
    organization(login: "<em>ORGANIZATION</em>"){
      projectNext(number: <em>NUMBER</em>) {
        id
      }
    }
  }'
```
{% endcli %}

También puedes encontrar la ID de nodo de todos los proyectos en tu organización. El siguiente ejemplo devolverá la ID de nodo y el título de los primeros 20 proyectos en una organización. Reemplaza `ORGANIZATION` con el nombre de tu organización. Por ejemplo, `octo-org`.

{% include tool-switcher %}

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --header 'GraphQL-Features: projects_next_graphql' \
  --data '{"query":"{organization(login: \"<em>ORGANIZATION</em>\") {projectsNext(first: 20) {nodes {id title}}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql --header 'GraphQL-Features: projects_next_graphql' -f query='
  query{
    organization(login: "<em>ORGANIZATION</em>") {
      projectsNext(first: 20) {
        nodes {
          id
          title
        }
      }
    }
  }'
```
{% endcli %}

### Encontrar la ID de nodo de un campo

Para actualizar el valor de un campo, necesitarás conocer la ID de nodo del mismo. Adicionalmente, para los campos de selección simple, necesitarás conocer la ID de las opciones.

El siguiente ejemplo devolverá la ID, nombre y configuración de los primeros 20 campos de un proyecto. Reemplaza a `PROJECT_ID` con la ID de nodo de tu proyecto.

{% include tool-switcher %}

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --header 'GraphQL-Features: projects_next_graphql' \
  --data '{"query":"query{node(id: \"<em>PROJECT_ID</em>\") {... on ProjectNext {fields(first: 20) {nodes {id name settings}}}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql --header 'GraphQL-Features: projects_next_graphql' -f query='
  query{
    node(id: "<em>PROJECT_ID</em>") {
      ... on ProjectNext {
        fields(first: 20) {
          nodes {
            id
            name
            settings
          }
        }
      }
    }
  }'
```
{% endcli %}

La respuesta se verá de forma similar al siguiente ejemplo:

```json
{
  "data": {
    "node": {
      "fields": {
        "nodes": [
          {
            "id": "MDE2OlByb2plY3ROZXh0RmllbGQxMzE1OQ==",
            "name": "Title",
            "settings": "null"
          },
          {
            "id": "MDE2OlByb2plY3ROZXh0RmllbGQxMzE2MA==",
            "name": "Assignees",
            "settings": "null"
          },
          {
            "id": "MDE2OlByb2plY3ROZXh0RmllbGQxMzE2MQ==",
            "name": "Status",
            "settings": "{\"options\":[{\"id\":\"f75ad846\",\"name\":\"Todo\",\"name_html\":\"Todo\"},{\"id\":\"47fc9ee4\",\"name\":\"In Progress\",\"name_html\":\"In Progress\"},{\"id\":\"98236657\",\"name\":\"Done\",\"name_html\":\"Done\"}]}"
          }
        ]
      }
    }
  }
}
```

Cada campo tiene una ID. Adicionalmente, cada opción en un campo de selección simple tiene una ID.

### Encontrar información sobre los elementos en un proyecto

Puedes consultar mediante la API para encontrar información sobre los elementos de tu proyecto.

El siguiente ejemplo devolverá el título y la ID de los primeros 20 elementos en un proyecto. Para cada elemento, también devolverá el valor y nombre de los primeros 8 campos en el proyecto. Si el elemento es una propuesta o solicitud de cambios, este devolverá al inicio de sesión de los primeros 10 asignados. Reemplaza a `PROJECT_ID` con la ID de nodo de tu proyecto.

{% include tool-switcher %}

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --header 'GraphQL-Features: projects_next_graphql' \
  --data '{"query":"query{node(id: \"<em>PROJECT_ID</em>\") {... on ProjectNext {items(first: 20) {nodes{title id fieldValues(first: 8) {nodes{value projectField{name}}} content{...on Issue {assignees(first: 10) {nodes{login}}} ...on PullRequest {assignees(first: 10) {nodes{login}}}}}}}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql --header 'GraphQL-Features: projects_next_graphql' -f query='
  query{
    node(id: "<em>PROJECT_ID</em>") {
      ... on ProjectNext {
        items(first: 20) {
          nodes{
            title
            id
            fieldValues(first: 8) {
              nodes{
                value
                projectField{
                  name
                }
              }
            }
            content{
              ...on Issue {
                assignees(first: 10) {
                  nodes{
                    login
                  }
                }
              }
              ...on PullRequest {
                assignees(first: 10) {
                  nodes{
                    login
                  }
                }
              }
            }
          }
        }
      }
    }
  }'
```
{% endcli %}

Un proyecto podría contener elementos que los usuarios no tengan permiso para ver. En este caso, la respuesta incluirá el elemento redactado.

```shell
{
  "node": {
  "title": "You can't see this item",
  ...
  }
}
```

## Actualizar los proyectos

Utiliza las mutaciones para actualizar los proyectos. Para obtener más información, consulta la sección "[Acerca de las mutaciones](/graphql/guides/forming-calls-with-graphql#about-mutations)".

{% note %}

**Nota:** No puedes agregar y actualizar un elemento en el mismo llamado. Debes utilizar `addProjectNextItem` para agregar el elemento y luego `updateProjectNextItemField` para actualizarlo.

{% endnote %}

### Agregar un elemento a un proyecto

El siguiente ejemplo agregará una propuesta o solicitud de cambios a tu proyecto. Reemplaza a `PROJECT_ID` con la ID de nodo de tu proyecto. Reemplaza a `CONTENT_ID` con la ID de nodo de la propuesta o solicitud de cambios que quieras agregar.

{% include tool-switcher %}

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --header 'GraphQL-Features: projects_next_graphql' \
  --data '{"query":"mutation {addProjectNextItem(input: {projectId: \"<em>PROJECT_ID</em>\" contentId: \"<em>CONTENT_ID</em>\"}) {projectNextItem {id}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql --header 'GraphQL-Features: projects_next_graphql' -f query='
  mutation {
    addProjectNextItem(input: {projectId: "<em>PROJECT_ID</em>" contentId: "<em>CONTENT_ID</em>"}) {
      projectNextItem {
        id
      }
    }
  }'
```
{% endcli %}

La respuesta contendrá la ID de nodo del elemento recién creado.

```json
{
  "data": {
    "addProjectNextItem": {
      "projectNextItem": {
        "id": "MDE1OlByb2plY3ROZXh0SXRlbTM0MjEz"
      }
    }
  }
}
```

Si intentas agregar un elemento que ya existe, se devolverá la ID de este.

### Actualizar un campo de selección no sencillo, personalizado

El siguiente ejemplo actualizará un campo de fecha. Reemplaza a `PROJECT_ID` con la ID de nodo de tu proyecto. Reemplaza a `ITEM_ID` con la ID de nodo del elemento que quieras actualizar. Reemplaza a `FIELD_ID` con la ID del campo que quieras actualizar.

{% include tool-switcher %}

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --header 'GraphQL-Features: projects_next_graphql' \
  --data '{"query":"mutation {updateProjectNextItemField(input: {projectId: \"<em>PROJECT_ID</em>\" itemId: \"<em>ITEM_ID</em>\" fieldId: \"<em>FIELD_ID</em>\" value: \"2021-5-11\"}) {projectNextItem {id}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql --header 'GraphQL-Features: projects_next_graphql' -f query='
  mutation {
    updateProjectNextItemField(
      input: {
        projectId: "<em>PROJECT_ID</em>"
        itemId: "<em>ITEM_ID</em>"
        fieldId: "<em>FIELD_ID</em>"
        value: "2021-5-11"
      }
    ) {
      projectNextItem {
        id
      }
    }
  }'
```
{% endcli %}

{% note %}

**Nota:** No puedes utilizar `updateProjectNextItemField` para cambiar `Assignees`, `Labels`, `Milestone`, o `Repository` ya que estos campos son propiedades de las solicitudes de cambio y propuestas y no de los elementos del proyecto. En vez de esto, debes utilizar las mutaciones [addAssigneesToAssignable](/graphql/reference/mutations#addassigneestoassignable), [removeAssigneesFromAssignable](/graphql/reference/mutations#removeassigneesfromassignable), [addLabelsToLabelable](/graphql/reference/mutations#addlabelstolabelable), [removeLabelsFromLabelable](/graphql/reference/mutations#removelabelsfromlabelable), [updateIssue](/graphql/reference/mutations#updateissue), [updatePullRequest](/graphql/reference/mutations#updatepullrequest), or [transferIssue](/graphql/reference/mutations#transferissue).

{% endnote %}

### Actualizar un campo de selección simple

El siguiente ejemplo actualizará un campo de fecha.
- `PROJECT_ID` - Reemplázalo con la ID de nodo de tu proyecto.
- `ITEM_ID` - Reemplázalo con la ID de nodo del elemento que quieras actualizar.
- `FIELD_ID` -  Reemplázalo con la ID del campo que quieras actualizar.
- `OPTION_ID` - Reemplázalo con la ID del valor deseado.

{% include tool-switcher %}

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --header 'GraphQL-Features: projects_next_graphql' \
  --data '{"query":"mutation {updateProjectNextItemField(input: {projectId: \"<em>PROJECT_ID</em>\" itemId: \"<em>ITEM_ID</em>\" fieldId: \"<em>FIELD_ID</em>\" value: \"<em>OPTION_ID</em>\"}) {projectNextItem {id}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql --header 'GraphQL-Features: projects_next_graphql' -f query='
  mutation {
    updateProjectNextItemField(
      input: {
        projectId: "<em>PROJECT_ID</em>"
        itemId: "<em>ITEM_ID</em>"
        fieldId: "<em>FIELD_ID</em>"
        value: "<em>OPTION_ID</em>"
      }
    ) {
      projectNextItem {
        id
      }
    }
  }'
```
{% endcli %}

### Borrar un elemento de un proyecto

El siguiente ejemplo borrará un elemento de un proyecto. Reemplaza a `PROJECT_ID` con la ID de nodo de tu proyecto. Reemplaza `ITEM_ID` con la ID de nodo del elemento que quieras borrar.

{% include tool-switcher %}

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --header 'GraphQL-Features: projects_next_graphql' \
  --data '{"query":"mutation {deleteProjectNextItem(input: {projectId: \"<em>PROJECT_ID</em>\" itemId: \"<em>ITEM_ID</em>\"}) {deletedItemId}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql --header 'GraphQL-Features: projects_next_graphql' -f query='
  mutation {
    deleteProjectNextItem(
      input: {
        projectId: "<em>PROJECT_ID</em>"
        itemId: "<em>ITEM_ID</em>"
      }
    ) {
      deletedItemId
    }
  }'
```
{% endcli %}

## Referencia

### Objetos

#### ProjectNext

- [Cerrable](/graphql/reference/interfaces#closable)
- [Nodo](/graphql/reference/interfaces#node)
- [Actualizable](/graphql/reference/interfaces#updatable)

**Campos**

| Nombre                           | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `closed` (`Boolean!`)            | `true` si el proyecto está cerrado.                                                                                                                                                                                                                                                                                                                                                                                                             |
| `closedAt` (`DateTime!`)         | Identifica la fecha y la hora en la que se cerró el objeto.                                                                                                                                                                                                                                                                                                                                                                                     |
| `createdAt` (`DateTime!`)        | Identifica la fecha y hora de cuando se creó el proyecto.                                                                                                                                                                                                                                                                                                                                                                                       |
| `creator` (`Actor`)              | El actor que creó el proyecto originalmente.                                                                                                                                                                                                                                                                                                                                                                                                    |
| `databaseId` (`Int`)             | Identifica la llave primaria de la base de datos.                                                                                                                                                                                                                                                                                                                                                                                               |
| `description` (`String`)         | La descripción del proyecto.                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `fields` (`[ProjectNextField]!`) | Lista de campos en el proyecto.<br><br>**Argumentos**<br>`after` (`String`): Devuelve los elementos en la lista que vengan después del cursor especificado.<br>`before` (`String`): Devuelve los elementos en la lista que vengan antes del cursor especificado.<br>`first` (`Int`): Devuelve los primeros *n* elementos de la lista.<br>`last` (`Int`): Devuelve los últimos *n* elementos de la lista.    |
| `items` (`[ProjectNextItem]`)    | Lista de elementos en el proyecto.<br><br>**Argumentos**<br>`after` (`String`): Devuelve los elementos en la lista que vengan después del cursor especificado.<br>`before` (`String`): Devuelve los elementos en la lista que vengan antes del cursor especificado.<br>`first` (`Int`): Devuelve los primeros *n* elementos de la lista.<br>`last` (`Int`): Devuelve los últimos *n* elementos de la lista. |
| `number` (`Int!`)                | El número de proyecto.                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `owner` (`ProjectNextOwner!`)    | El propietario del proyecto. Actualmente limitado para las organizaciones.                                                                                                                                                                                                                                                                                                                                                                      |
| `title` (`String!`)              | El nombre del proyecto.                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `updatedAt` (`DateTime!`)        | Identifica la fecha y hora de cuando se actualizó el objeto por última vez.                                                                                                                                                                                                                                                                                                                                                                     |
| `viewerCanUpdate` (`Boolean!`)   | Verifica si el lector actual puede actualizar este objeto.                                                                                                                                                                                                                                                                                                                                                                                      |

#### ProjectNextConnection

El tipo de conexión para ProjectNext.

| Nombre                      | Descripción                                               |
| --------------------------- | --------------------------------------------------------- |
| `edges` ([ProjectNextEdge]) | Una lista de bordes.                                      |
| `nodes` ([ProjectNext])     | Una lista de nodos.                                       |
| `pageInfo` (PageInfo!)      | Información para ayudar a la paginación.                  |
| `totalCount` (Int!)         | Identifica la cantidad total de elementos en la conexión. |

#### ProjectNextEdge

| Nombre               | Descripción                               |
| -------------------- | ----------------------------------------- |
| `cursor` (String!)   | Un cursor para utilizar en la paginación. |
| `node` (ProjectCard) | El elemento al final del borde.           |

#### ProjectNextField

Un campo dentro de un proyecto.

| Nombre                     | Descripción                                                                 |
| -------------------------- | --------------------------------------------------------------------------- |
| `createdAt` (`DateTime!`)  | Identifica la fecha y hora de cuando se creó el proyecto.                   |
| `name` (`String!`)         | El nombre del campo del proyecto.                                           |
| `project` (`ProjectNext!`) | El proyecto que contiene este campo.                                        |
| `settings` (`String`)      | Representación de secuencia de los ajustes de un campo de proyecto.         |
| `updatedAt` (`DateTime!`)  | Identifica la fecha y hora de cuando se actualizó el objeto por última vez. |

#### ProjectNextFieldConnection

El tipo de conexión para ProjectNextField.

| Nombre                           | Descripción                                               |
| -------------------------------- | --------------------------------------------------------- |
| `edges` ([ProjectNextFieldEdge]) | Una lista de bordes.                                      |
| `nodes` ([ProjectNextField])     | Una lista de nodos.                                       |
| `pageInfo` (PageInfo!)           | Información para ayudar a la paginación.                  |
| `totalCount` (Int!)              | Identifica la cantidad total de elementos en la conexión. |

#### ProjectNextFieldEdge

| Nombre               | Descripción                               |
| -------------------- | ----------------------------------------- |
| `cursor` (String!)   | Un cursor para utilizar en la paginación. |
| `node` (ProjectCard) | El elemento al final del borde.           |

#### ProjectNextItem

- [Nodo](/graphql/reference/interfaces#node)

Un elemento en un `ProjectNext`.

| Nombre                                         | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `content` (`ProjectNextItemContent`)           | El contenido de la propuesta o solicitud de cambios referenciada.                                                                                                                                                                                                                                                                                                                                                                                    |
| `createdAt` (DateTime!)                        | Identifica la fecha y hora de cuando se creó el proyecto.                                                                                                                                                                                                                                                                                                                                                                                            |
| `creator` (`Actor`)                            | El actor que creó este elemento.                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `databaseId` (`Int`)                           | Identifica la llave primaria de la base de datos.                                                                                                                                                                                                                                                                                                                                                                                                    |
| `fieldValues` (`[ProjectNextItemFieldValue]!`) | Lista de valores de campo del proyecto.<br><br>**Argumentos**<br>`after` (`String`): Devuelve los elementos en la lista que vengan después del cursor especificado.<br>`before` (`String`): Devuelve los elementos en la lista que vengan antes del cursor especificado.<br>`first` (`Int`): Devuelve los primeros *n* elementos de la lista.<br>`last` (`Int`): Devuelve los últimos *n* elementos de la lista. |
| `project` (`ProjectNext!`)                     | El proyecto que contiene este elemento.                                                                                                                                                                                                                                                                                                                                                                                                              |
| `title` (`String!`)                            | Título del elemento.                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `updatedAt` (DateTime!)                        | Identifica la fecha y hora de cuando se actualizó el objeto por última vez.                                                                                                                                                                                                                                                                                                                                                                          |

#### ProjectNextItemContent

Contenido asociado con un `ProjectNextItem`.

**Tipos:**

- `issue` - Referencia a una propuesta
- `pull request` - Referencia a una solicitud de cambios.

#### ProjectNextItemConnection

El tipo de conexión para ProjectNextItem.

| Nombre                            | Descripción                                               |
| --------------------------------- | --------------------------------------------------------- |
| `edges` ([`ProjectNextItemEdge`]) | Una lista de bordes.                                      |
| `nodes` ([`ProjectNextItem`])     | Una lista de nodos.                                       |
| `pageInfo` (`PageInfo!`)          | Información para ayudar a la paginación.                  |
| `totalCount` (`Int!`)             | Identifica la cantidad total de elementos en la conexión. |

#### ProjectNextItemEdge

| Nombre                 | Descripción                               |
| ---------------------- | ----------------------------------------- |
| `cursor` (`String!`)   | Un cursor para utilizar en la paginación. |
| `node` (`ProjectCard`) | El elemento al final del borde.           |

#### ProjectNextItemFieldValue

- [Nodo](/graphql/reference/interfaces#node)

Un valor de un campo en un elemento de un `ProjectNext`.

| Nombre                               | Descripción                                                                 |
| ------------------------------------ | --------------------------------------------------------------------------- |
| `createdAt` (`DateTime!`)            | Identifica la fecha y hora de cuando se creó el proyecto.                   |
| `creator` (`Actor`)                  | El actor que creó este elemento.                                            |
| `databaseId` (`Int`)                 | Identifica la llave primaria de la base de datos.                           |
| `projectField` (`ProjectNextField!`) | El campo de proyecto que contiene este valor.                               |
| `projectItem` (`ProjectNextItem!`)   | El elemento de proyecto que contiene este valor.                            |
| `updatedAt` (`DateTime!`)            | Identifica la fecha y hora de cuando se actualizó el objeto por última vez. |
| `value`                              | El valor del campo.                                                         |

#### ProjectNextItemFieldValueConnection

El tipo de conexión para ProjectNextItemFieldValue.

| Nombre                                      | Descripción                                               |
| ------------------------------------------- | --------------------------------------------------------- |
| `edges` ([`ProjectNextItemFieldValueEdge`]) | Una lista de bordes.                                      |
| `nodes` ([`ProjectNextItemFieldValue`])     | Una lista de nodos.                                       |
| `pageInfo` (`PageInfo!`)                    | Información para ayudar a la paginación.                  |
| `totalCount` (`Int!`)                       | Identifica la cantidad total de elementos en la conexión. |

#### ProjectNextItemEdge

Un borde en una conexión.

| Nombre                 | Descripción                               |
| ---------------------- | ----------------------------------------- |
| `cursor` (`String!`)   | Un cursor para utilizar en la paginación. |
| `node` (`ProjectCard`) | El elemento al final del borde.           |

### Interfaces

#### ProjectNextOwner

Representa a un propietario de un proyecto.

**Implementado por**

- `Organización`

**Campos**

| Nombre                                    | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `projectNext` (`ProjectNext`)             | Encuentra al proyecto por número.<br><br>**Argumentos**<br>`number` (`Int!`): El número de proyecto a encontrar.                                                                                                                                                                                                                                                                                                                                              |
| `projectsNext` (`ProjectNextConnection!`) | Lista de elementos de siguientes del proyecto bajo el propietario.<br><br>**Argumentos**<br>`after` (`String`): Devuelve los elementos en la lista que vengan después del cursor especificado.<br>`before` (`String`): Devuelve los elementos en la lista que vengan antes del cursor especificado.<br>`first` (`Int`): Devuelve los primeros *n* elementos de la lista.<br>`last` (`Int`): Devuelve los últimos *n* elementos de la lista. |

### Mutaciones

#### addProjectNextItem

Agrega un elemento existente (propuesta o solicitud de cambios) a un proyecto.

**Campos de entrada**

- `input`(`AddProjectNextItemInput!`)

**Campos de retorno**

| Nombre                                | Descripción                                                     |
| ------------------------------------- | --------------------------------------------------------------- |
| `clientMutationId` (`String`)         | Un identificador único para el cliente que realiza la mutación. |
| `projectNextItem` (`ProjectNextItem`) | El elemento que se agregó al proyecto.                          |

#### updateProjectNextItemField

Actualiza un cambio de un elemento desde un proyecto.

**Campos de entrada**

- `input`(`UpdateProjectNextItemFieldInput!`)

**Campos de retorno**

| Nombre                                | Descripción                                                     |
| ------------------------------------- | --------------------------------------------------------------- |
| `clientMutationId` (`String`)         | Un identificador único para el cliente que realiza la mutación. |
| `projectNextItem` (`ProjectNextItem`) | El elemento que se agregó al proyecto.                          |

#### deleteProjectNextItem

Borra un elemento de un proyecto.

**Campos de entrada**

- `input`(`DeleteProjectNextItemInput!`)

**Campos de retorno**

| Nombre                        | Descripción                                                     |
| ----------------------------- | --------------------------------------------------------------- |
| `clientMutationId` (`String`) | Un identificador único para el cliente que realiza la mutación. |
| `deletedItemId` (`ID`)        | La ID del elemento borrado.                                     |

### Objetos de entrada

#### DeleteProjectNextItemInput

Tipo de entrada autogenerado de AddProjectNextItem.

**Campos de entrada**

| Nombre                        | Descripción                                                      |
| ----------------------------- | ---------------------------------------------------------------- |
| `clientMutationId` (`String`) | Un identificador único para el cliente que realiza la mutación.  |
| `contentId` (`ID!`)           | La ID del elemento (propuesta o solicitud de cambios) a agregar. |
| `projectId` (`ID!`)           | La ID del proyecto al cual se agregará el elemento.              |

#### UpdateProjectNextItemFieldInput

Tipo de entrada autogenerado de UpdateProjectNextItemField.

**Campos de entrada**

| Nombre                        | Descripción                                                                                  |
| ----------------------------- | -------------------------------------------------------------------------------------------- |
| `clientMutationId` (`String`) | Un identificador único para el cliente que realiza la mutación.                              |
| `fieldId` (`ID!`)             | La ID del campo a actualizar. Actualmente es compatible con campos y estados personalizados. |
| `itemId` (`ID!`)              | La ID del elemento a actualizar.                                                             |
| `projectId` (`ID!`)           | La ID del proyecto.                                                                          |
| `value` (`String!`)           | El valor que se configurará en el campo.                                                     |

#### DeleteProjectNextItemInput

Tipo de entrada autogenerada de DeleteProjectNextItem.

**Campos de entrada**

| Nombre                        | Descripción                                                     |
| ----------------------------- | --------------------------------------------------------------- |
| `clientMutationId` (`String`) | Un identificador único para el cliente que realiza la mutación. |
| `itemId` (`ID!`)              | La ID del elemento a eliminar.                                  |
| `projectId` (`ID!`)           | La ID del proyecto en el cual se debe elminar al elemento.      |
