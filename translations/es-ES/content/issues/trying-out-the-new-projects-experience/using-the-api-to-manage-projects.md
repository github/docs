---
title: Utilizar la API para administrar proyectos (beta)
intro: Puedes utilizar la API de GraphQL para encontrar información acerca de los proyectos y para actualizarlos.
versions:
  fpt: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
type: how_to
topics:
  - Projects
---

{% data reusables.projects.graphql-deprecation %}

El artículo muestra cómo utilizar la API de GraphQL para administrar un proyecto. Para obtener más información sobre cómo utilizar la API en un flujo de trabajo de {% data variables.product.prodname_actions %}, consulta la sección "[Automatizar proyectos (beta)](/issues/trying-out-the-new-projects-experience/automating-projects)". Para encontrar una lista completa de los tipos de datos disponibles, consulta la "[Referencia](/graphql/reference)".

{% data reusables.projects.projects-beta %}

## Autenticación

{% curl %}

En todos los siguientes ejemplos de cURL, reemplaza `TOKEN` con un token que tenga el alcance `read:project` (para las consultas) o `project` (para las consultas y las mutaciones). El token puede ser un token personal de acceso para un usuario o un token de acceso a la instalación para una {% data variables.product.prodname_github_app %}. Para obtener más información acerca de cómo crear un token de acceso personal, consulta la sección "[Crear un token de acceso personal](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)". Para obtener más información sobre cómo crear un token de acceso a la instalación para una {% data variables.product.prodname_github_app %}, consulta la sección "[Autenticarse con {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps/authenticating-with-github-apps#authenticating-as-a-github-app)".

{% endcurl %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Antes de ejecutar los comandos del {% data variables.product.prodname_cli %}, debes autenticarte ejecutando `gh auth login --scopes "project"`. Si solo necesitas leer, mas no editar, los proyectos, puedes proporcionar el alcance `read:project` en vez del de `project`. Para obtener más información sobre la autenticación por la línea de comandos, consulta la sección "[gh auth login](https://cli.github.com/manual/gh_auth_login)".

{% endcli %}

{% cli %}

## Utilizar variables

Puedes utilizar variables para simplificar tus scripts en todos los ejemplos siguientes. Utiliza `-F` para pasar una variable que sea un número, un booleano o nula. Utiliza `-f` para otras variables. Por ejemplo,

```shell
my_org="octo-org"
my_num=5
gh api graphql -f query='
  query($organization: String! $number: Int!){
    organization(login: $organization){
      projectV2(number: $number) {
        id
      }
    }
  }' -f organization=$my_org -F number=$my_num
```

Para obtener más información, consulta la sección "[Formatear llamados con GraphQL](/graphql/guides/forming-calls-with-graphql#working-with-variables)".

{% endcli %}

## Encontrar información sobre los proyectos

Utiliza consultas para obtener datos sobre los proyectos. Paraobtener más información, consulta la sección "[Acerca de las consultas](/graphql/guides/forming-calls-with-graphql#about-queries)".

### Encontrar la ID de nodo de un proyecto organizacional

Para actualizar tu proyecto a través de la API, necesitarás conocer la ID de nodo del proyecto.

Puedes encontrar la ID de nodo de un proyecto organizacional si conoces el nombre de la organización y el número de proyecto. Reemplaza `ORGANIZATION` con el nombre de tu organización. Por ejemplo, `octo-org`. Reemplaza `NUMBER` con el número de proyecto. Para encontrar un número de proyecto, revisa su URL. Por ejemplo, la dirección `https://github.com/orgs/octo-org/projects/5` tiene "5" como número de proyecto.

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --data '{"query":"query{organization(login: \"<em>ORGANIZATION</em>\") {projectV2(number: <em>NUMBER</em>){id}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  query{
    organization(login: "<em>ORGANIZATION</em>"){
      projectV2(number: <em>NUMBER</em>) {
        id
      }
    }
  }'
```
{% endcli %}

También puedes encontrar la ID de nodo de todos los proyectos en tu organización. El siguiente ejemplo devolverá la ID de nodo y el título de los primeros 20 proyectos en una organización. Reemplaza `ORGANIZATION` con el nombre de tu organización. Por ejemplo, `octo-org`.

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --data '{"query":"{organization(login: \"<em>ORGANIZATION</em>\") {projectsV2(first: 20) {nodes {id title}}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  query{
    organization(login: "<em>ORGANIZATION</em>") {
      projectsV2(first: 20) {
        nodes {
          id
          title
        }
      }
    }
  }'
```
{% endcli %}

### Encontrar la ID de nodo de un proyecto de usuario

Para actualizar tu proyecto a través de la API, necesitarás conocer la ID de nodo del proyecto.

Puedes encontrar la ID de nodo de un proyecto de usuario si conoces el número del mismo. Reemplaza `USER` con tu nombre de usuario. Por ejemplo, `octocat`. Reemplaza `NUMBER` con tu número de proyecto. Para encontrar un número de proyecto, revisa su URL. Por ejemplo, la dirección `https://github.com/users/octocat/projects/5` tiene "5" tiene "5" como número de proyecto.

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --data '{"query":"query{user(login: \"<em>USER</em>\") {projectV2(number: <em>NUMBER</em>){id}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  query{
    user(login: "<em>USER</em>"){
      projectV2(number: <em>NUMBER</em>) {
        id
      }
    }
  }'
```
{% endcli %}

También puedes encontrar la ID de nodo de todos tus proyectos. El siguiente ejemplo devolverá la ID de nodo y el título de tus primeros 20 proyectos. Reemplaza a `USER` con tu nombre de usuario. Por ejemplo, `octocat`.

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --data '{"query":"{user(login: \"<em>USER</em>\") {projectsV2(first: 20) {nodes {id title}}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  query{
    user(login: "<em>USER</em>") {
      projectsV2(first: 20) {
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

Para actualizar el valor de un campo, necesitarás conocer la ID de nodo del mismo. Adicionalmente, necesitarás saber la ID de las opciones para los campos de selección única y la ID de las iteraciones de los campos de iteración.

El siguiente ejemplo devolverá la ID, nombre, ajustes y configuración para los primeros 20 campos en un proyecto. Reemplaza a `PROJECT_ID` con la ID de nodo de tu proyecto.

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --data '{"query":"query{ node(id: \"<em>PROJECT_ID</em>\") { ... on ProjectV2 { fields(first: 20) { nodes { ... on ProjectV2Field { id name } ... on ProjectV2IterationField { id name configuration { iterations { startDate id }}} ... on ProjectV2SingleSelectField { id name options { id name }}}}}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  query{
  node(id: "<em>PROJECT_ID</em>") {
    ... on ProjectV2 {
      fields(first: 20) {
        nodes {
          ... on ProjectV2Field {
            id
            name
          }
          ... on ProjectV2IterationField {
            id
            name
            configuration {
              iterations {
                startDate
                id
              }
            }
          }
          ... on ProjectV2SingleSelectField {
            id
            name
            options {
              id
              name
            }
          }
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
            "id": "PVTF_lADOANN5s84ACbL0zgBZrZY",
            "name": "Title"
          },
          {
            "id": "PVTF_lADOANN5s84ACbL0zgBZrZc",
            "name": "Assignees"
          },
          {
            "id": "PVTSSF_lADOANN5s84ACbL0zgBZrZg",
            "name": "Status",
            "options": [
              {
                "id": "f75ad846",
                "name": "Todo"
              },
              {
                "id": "47fc9ee4",
                "name": "In Progress"
              },
              {
                "id": "98236657",
                "name": "Done"
              }
            ]
          },
          {
            "id": "PVTIF_lADOANN5s84ACbL0zgBah28",
            "name": "Iteration",
            "configuration": {
              "iterations": [
                {
                  "startDate": "2022-05-29",
                  "id": "cfc16e4d"
                }
              ]
            }
          }
        ]
      }
    }
  }
}
```

Cada campo tendrá un nombre e ID. Los campos de selección simples se devuelven como un objeto `ProjectV2SingleSelectField` y tienen un campo de `options` en donde puedes encontrar la ID de cada opción para la selección simple. Los campos de iteración se devuelven como un objeto `ProjectV2IterationField` y tienen un campo de `configuration` que incluye un campo de `iterations` que contiene la ID e información sobre cada iteración.

Si solo necesitas el nombre e ID de un campo y no necesitas información sobre las iteraciones o las opciones de campo de selección simple, puedes utilizar el objeto `ProjectV2FieldCommon`.

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --data '{"query":"query{ node(id: \"<em>PROJECT_ID</em>\") { ... on ProjectV2 { fields(first: 20) { nodes { ... on ProjectV2FieldCommon { id name }}}}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  query{
  node(id: "<em>PROJECT_ID</em>") {
    ... on ProjectV2 {
      fields(first: 20) {
        nodes {
          ... on ProjectV2FieldCommon {
            id
            name
          }
        }
      }
    }
  }
}
```
{% endcli %}

La respuesta al utilizar el objeto `ProjectV2FieldCommon` se verá similar al siguiente ejemplo:

```json
{
  "data": {
    "node": {
      "fields": {
        "nodes": [
          {
            "__typename": "ProjectV2Field",
            "id": "PVTF_lADOANN5s84ACbL0zgBZrZY",
            "name": "Title"
          },
          {
            "__typename": "ProjectV2Field",
            "id": "PVTF_lADOANN5s84ACbL0zgBZrZc",
            "name": "Assignees"
          },
          {
            "__typename": "ProjectV2SingleSelectField",
            "id": "PVTSSF_lADOANN5s84ACbL0zgBZrZg",
            "name": "Status"
          },
          {
            "__typename": "ProjectV2IterationField",
            "id": "PVTIF_lADOANN5s84ACbL0zgBah28",
            "name": "Iteration"
          }
        ]
      }
    }
  }
}
```

### Encontrar información sobre los elementos en un proyecto

Puedes consultar mediante la API para encontrar información sobre los elementos de tu proyecto.

El siguiente ejemplo devolverá las primeras 20 propuestas, solicitudes de cambio y borradores de propuestas de un proyecto. Para las propuestas y solicitudes de cambio, también devolverá el título y los primeros 10 asignados. Para los borradores de propuesta, devolverá el título y el cuerpo. El ejemplo también devolverá el nombre y valor del campo para cualquier texto, fecha o campo de selección simple en los primeros 8 campos del proyecto. Reemplaza a `PROJECT_ID` con la ID de nodo de tu proyecto.

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --data '{"query":"query{ node(id: \"<em>PROJECT_ID</em>\") { ... on ProjectV2 { items(first: 20) { nodes{ id fieldValues(first: 8) { nodes{ ... on ProjectV2ItemFieldTextValue { text field { ... on ProjectV2FieldCommon {  name }}} ... on ProjectV2ItemFieldDateValue { date field { ... on ProjectV2FieldCommon { name } } } ... on ProjectV2ItemFieldSingleSelectValue { name field { ... on ProjectV2FieldCommon { name }}}}} content{ ... on DraftIssue { title body } ...on Issue { title assignees(first: 10) { nodes{ login }}} ...on PullRequest { title assignees(first: 10) { nodes{ login }}}}}}}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  query{
    node(id: "<em>PROJECT_ID</em>") {
        ... on ProjectV2 {
          items(first: 20) {
            nodes{
              id
              fieldValues(first: 8) {
                nodes{                
                  ... on ProjectV2ItemFieldTextValue {
                    text
                    field {
                      ... on ProjectV2FieldCommon {
                        name
                      }
                    }
                  }
                  ... on ProjectV2ItemFieldDateValue {
                    date
                    field {
                      ... on ProjectV2FieldCommon {
                        name
                      }
                    }
                  }
                  ... on ProjectV2ItemFieldSingleSelectValue {
                    name
                    field {
                      ... on ProjectV2FieldCommon {
                        name
                      }
                    }
                  }
                }              
              }
              content{              
                ... on DraftIssue {
                  title
                  body
                }
                ...on Issue {
                  title
                  assignees(first: 10) {
                    nodes{
                      login
                    }
                  }
                }
                ...on PullRequest {
                  title
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

Un proyecto podría contener elementos que los usuarios no tengan permiso para ver. En este caso, el tipo de elemento se devolverá como `REDACTED`.

## Actualizar los proyectos

Utiliza las mutaciones para actualizar los proyectos. Para obtener más información, consulta la sección "[Acerca de las mutaciones](/graphql/guides/forming-calls-with-graphql#about-mutations)".

{% note %}

**Nota:** No puedes agregar y actualizar un elemento en el mismo llamado. Debes utilizar `addProjectV2ItemById` para agregar el elemento y luego utilizar `updateProjectV2ItemFieldValue` para actualizarlo.

{% endnote %}

### Agregar un elemento a un proyecto

El siguiente ejemplo agregará una propuesta o solicitud de cambios a tu proyecto. Reemplaza a `PROJECT_ID` con la ID de nodo de tu proyecto. Reemplaza a `CONTENT_ID` con la ID de nodo de la propuesta o solicitud de cambios que quieras agregar.

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --data '{"query":"mutation {addProjectV2ItemById(input: {projectId: \"<em>PROJECT_ID</em>\" contentId: \"<em>CONTENT_ID</em>\"}) {item {id}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  mutation {
    addProjectV2ItemById(input: {projectId: "<em>PROJECT_ID</em>" contentId: "<em>CONTENT_ID</em>"}) {
      item {
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
    "addProjectV2ItemById": {
      "item": {
        "id": "PVTI_lADOANN5s84ACbL0zgBVd94"
      }
    }
  }
}
```

Si intentas agregar un elemento que ya existe, se devolverá la ID de este.

### Agregar un borrador de propuesta a un proyecto

El siguiente ejemplo agregará un borrador de propuesta a tu proyecto. Reemplaza a `PROJECT_ID` con la ID de nodo de tu proyecto. Reemplaza `TITLE` y `BODY` con el contenido que quieras para el nuevo borrador de propuesta.

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --data '{"query":"mutation {addProjectV2DraftIssue(input: {projectId: "<em>PROJECT_ID</em>" title: "<em>TITLE</em>" body: "<em>BODY</em>"}) {item {id}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  mutation {
    addProjectV2DraftIssue(input: {projectId: "<em>PROJECT_ID</em>" title: "<em>TITLE</em>" body: "<em>BODY</em>"}) {
      item {
        id
      }
    }
  }'
```
{% endcli %}

La respuesta contendrá la ID de nodo del borrador de propuesta recién creado.

```json
{
  "data": {
    "addProjectV2ItemById": {
      "item": {
        "id": "PVTI_lADOANN5s84ACbL0zgBbxFc"
      }
    }
  }
}
```

### Actualizar los ajustes de un proyecto

El siguiente ejemplo actualizará los ajustes de tu proyecto. Reemplaza a `PROJECT_ID` con la ID de nodo de tu proyecto. Configura `public` en `true` para que tu proyecto sea público en {% data variables.product.product_name %}. Modifica `readme` para hacer cambios al README de tu proyecto.

{% curl %}
```shell
curl --request POST \
--url https://api.github.com/graphql \
--header 'Authorization: token <em>TOKEN</em>' \
--data '{"query":"mutation { updateProjectV2(input: { projectId: \"<em>PROJECT_ID</em>\", title: \"Project title\", public: false, readme: \"# Project README\n\nA long description\", shortDescription: \"A short description\"}) { projectV2 { id, title, readme, shortDescription }}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  mutation {
    updateProjectV2(
      input: {
        projectId: "<em>PROJECT_ID</em>", 
        title: "Project title",
        public: false,
        readme: "# Project README\n\nA long description",
        shortDescription: "A short description"
      }
    ) {
      projectV2 {
        id
        title
        readme
        shortDescription
      }
    }
  }'
```
{% endcli %}

### Actualizar un campo personalizado de texto, número o fecha

El siguiente ejemplo actualizará el valor de un campo de texto para un elemento. Reemplaza a `PROJECT_ID` con la ID de nodo de tu proyecto. Reemplaza a `ITEM_ID` con la ID de nodo del elemento que quieras actualizar. Reemplaza a `FIELD_ID` con la ID del campo que quieras actualizar.

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --data '{"query":"mutation {updateProjectV2ItemFieldValue( input: { projectId: "<em>PROJECT_ID</em>" itemId: "<em>ITEM_ID</em>" fieldId: "<em>FIELD_ID</em>" value: { text: "Updated text" }}) { projectV2Item { id }}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  mutation {
    updateProjectV2ItemFieldValue(
      input: {
        projectId: "<em>PROJECT_ID</em>"
        itemId: "<em>ITEM_ID</em>"
        fieldId: "<em>FIELD_ID</em>"
        value: { 
          text: "Updated text"        
        }
      }
    ) {
      projectV2Item {
        id
      }
    }
  }'
```
{% endcli %}

{% note %}

**Nota:** No puedes utilizar `updateProjectV2ItemFieldValue` para cambiar los `Assignees`, `Labels`, `Milestone` o `Repository`, porque estos cambios son propiedades de las propuestas y solicitudes de cambio y no son elementos de proyecto. Instead, you may use the following mutations:

- [addAssigneesToAssignable](/graphql/reference/mutations#addassigneestoassignable)
- [removeAssigneesFromAssignable](/graphql/reference/mutations#removeassigneesfromassignable)
- [addLabelsToLabelable](/graphql/reference/mutations#addlabelstolabelable)
- [removeLabelsFromLabelable](/graphql/reference/mutations#removelabelsfromlabelable)
- [updateIssue](/graphql/reference/mutations#updateissue)
- [updatePullRequest](/graphql/reference/mutations#updatepullrequest)
- [transferIssue](/graphql/reference/mutations#transferissue)

{% endnote %}

### Actualizar un campo de selección simple

El siguiente ejemplo actualizará el valor de un campo de selección simple para un elemento.

- `PROJECT_ID` - Reemplázalo con la ID de nodo de tu proyecto.
- `ITEM_ID` - Reemplázalo con la ID de nodo del elemento que quieras actualizar.
- `FIELD_ID` -  Reemplaza esto con la ID de un campo de selección simple que quieras actualizar.
- `OPTION_ID` - Reemplaza esto con la ID de la opción de selección simple deseada.

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --data '{"query":"mutation {updateProjectV2ItemFieldValue( input: { projectId: "<em>PROJECT_ID</em>" itemId: "<em>ITEM_ID</em>" fieldId: "<em>FIELD_ID</em>" value: { singleSelectOptionId: "<em>OPTION_ID</em>" }}) { projectV2Item { id }}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  mutation {
    updateProjectV2ItemFieldValue(
      input: {
        projectId: "<em>PROJECT_ID</em>"
        itemId: "<em>ITEM_ID</em>"
        fieldId: "<em>FIELD_ID</em>"
        value: { 
          singleSelectOptionId: "<em>OPTION_ID</em>"        
        }
      }
    ) {
      projectV2Item {
        id
      }
    }
  }'
```
{% endcli %}

### Actualizar un campo de iteración

El siguiente ejemplo actualizará el valor de un campo de iteración para un elemento.

- `PROJECT_ID` - Reemplázalo con la ID de nodo de tu proyecto.
- `ITEM_ID` - Reemplázalo con la ID de nodo del elemento que quieras actualizar.
- `FIELD_ID` -  Reemplaza esto con la ID del campo de iteración que quieras actualizar.
- `ITERATION_ID` - Reemplaza esto con la ID de la iteración deseada. Esto puede ser una iteración activa o completa.

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --data '{"query":"mutation {updateProjectV2ItemFieldValue( input: { projectId: "<em>PROJECT_ID</em>" itemId: "<em>ITEM_ID</em>" fieldId: "<em>FIELD_ID</em>" value: { singleSelectOptionId: "<em>OPTION_ID</em>" }}) { projectV2Item { id }}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  mutation {
    updateProjectV2ItemFieldValue(
      input: {
        projectId: "<em>PROJECT_ID</em>"
        itemId: "<em>ITEM_ID</em>"
        fieldId: "<em>FIELD_ID</em>"
        value: { 
          iterationId: "<em>ITERATION_ID</em>"        
        }
      }
    ) {
      projectV2Item {
        id
      }
    }
  }'
```
{% endcli %}

### Borrar un elemento de un proyecto

El siguiente ejemplo borrará un elemento de un proyecto. Reemplaza a `PROJECT_ID` con la ID de nodo de tu proyecto. Reemplaza `ITEM_ID` con la ID de nodo del elemento que quieras borrar.

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --data '{"query":"mutation {deleteProjectV2Item(input: {projectId: \"<em>PROJECT_ID</em>\" itemId: \"<em>ITEM_ID</em>\"}) {deletedItemId}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  mutation {
    deleteProjectV2Item(
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
