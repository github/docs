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
ms.openlocfilehash: 0c15bc1b813fc6dbcfa2ea0dc3f60afe6f035793
ms.sourcegitcommit: d243bbae4ce3c849695b5bc9221e705ee5a4a64f
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 07/12/2022
ms.locfileid: "147081092"
---
{% data reusables.projects.graphql-deprecation %}

El artículo muestra cómo utilizar la API de GraphQL para administrar un proyecto. Para obtener más información sobre cómo usar la API en un flujo de trabajo de {% data variables.product.prodname_actions %}, consulta "[Automatización de proyectos (beta)](/issues/trying-out-the-new-projects-experience/automating-projects)". Para ver una lista completa de los tipos de datos disponibles, consulta "[Referencia](/graphql/reference)".

{% data reusables.projects.projects-beta %}

## <a name="authentication"></a>Authentication

{% curl %}

En todos los ejemplos de cURL siguientes, reemplaza `TOKEN` por un token que tenga el ámbito `read:project` (para consultas) o el ámbito `project` (para consultas y mutaciones). El token puede ser un token personal de acceso para un usuario o un token de acceso a la instalación para una {% data variables.product.prodname_github_app %}. Para obtener más información sobre cómo crear un token de acceso personal, consulta "[Creación de un token de acceso personal](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)". Para obtener más información sobre cómo crear un token de acceso de instalación para {% data variables.product.prodname_github_app %}, consulta "[Autenticación con {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps/authenticating-with-github-apps#authenticating-as-a-github-app)".

{% endcurl %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Antes de ejecutar los comandos de {% data variables.product.prodname_cli %}, debes autenticarte mediante la ejecución de `gh auth login --scopes "project"`. Si solo necesitas leer los proyectos, pero no editarlos, puedes proporcionar el ámbito `read:project` en lugar de `project`. Para obtener más información sobre la autenticación de la línea de comandos, consulta "[gh auth login](https://cli.github.com/manual/gh_auth_login)".

{% endcli %}

{% cli %}

## <a name="using-variables"></a>Utilizar variables

Puedes utilizar variables para simplificar tus scripts en todos los ejemplos siguientes. Usa `-F` para pasar una variable que sea un número, un operador booleano o un valor NULL. Usa `-f` para las demás variables. Por ejemplo,

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

Para obtener más información, consulta "[Formación de llamadas con GraphQL](/graphql/guides/forming-calls-with-graphql#working-with-variables)".

{% endcli %}

## <a name="finding-information-about-projects"></a>Encontrar información sobre los proyectos

Utiliza consultas para obtener datos sobre los proyectos. Para obtener más información, consulta "[Acerca de las consultas](/graphql/guides/forming-calls-with-graphql#about-queries)".

### <a name="finding-the-node-id-of-an-organization-project"></a>Encontrar la ID de nodo de un proyecto organizacional

Para actualizar tu proyecto a través de la API, necesitarás conocer la ID de nodo del proyecto.

Puedes encontrar la ID de nodo de un proyecto organizacional si conoces el nombre de la organización y el número de proyecto. Reemplaza `ORGANIZATION` por el nombre de la organización. Por ejemplo, `octo-org`. Reemplaza `NUMBER` por el número del proyecto. Para encontrar un número de proyecto, revisa su URL. Por ejemplo, `https://github.com/orgs/octo-org/projects/5` tiene "5" como número de proyecto.

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

También puedes encontrar la ID de nodo de todos los proyectos en tu organización. El siguiente ejemplo devolverá la ID de nodo y el título de los primeros 20 proyectos en una organización. Reemplaza `ORGANIZATION` por el nombre de la organización. Por ejemplo, `octo-org`.

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

### <a name="finding-the-node-id-of-a-user-project"></a>Encontrar la ID de nodo de un proyecto de usuario 

Para actualizar tu proyecto a través de la API, necesitarás conocer la ID de nodo del proyecto.

Puedes encontrar la ID de nodo de un proyecto de usuario si conoces el número del mismo. Reemplace `USER` por el nombre de usuario. Por ejemplo, `octocat`. Reemplace `NUMBER` por el número del proyecto. Para encontrar un número de proyecto, revisa su URL. Por ejemplo, `https://github.com/users/octocat/projects/5` tiene "5" como número de proyecto.

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

También puedes encontrar la ID de nodo de todos tus proyectos. El siguiente ejemplo devolverá la ID de nodo y el título de tus primeros 20 proyectos. Reemplaza `USER` por el nombre de usuario. Por ejemplo, `octocat`.

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

### <a name="finding-the-node-id-of-a-field"></a>Encontrar la ID de nodo de un campo

Para actualizar el valor de un campo, necesitarás conocer la ID de nodo del mismo. Adicionalmente, necesitarás saber la ID de las opciones para los campos de selección única y la ID de las iteraciones de los campos de iteración.

En el ejemplo siguiente se devolverá el id., nombre, valores y configuración de los primeros 20 campos de un proyecto. Reemplaza `PROJECT_ID` por el identificador de nodo del proyecto.

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

La respuesta será similar al ejemplo siguiente:

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

Cada campo tiene un id. y un nombre. Los campos de selección única se devuelven como un objeto `ProjectV2SingleSelectField` y tienen un campo `options` donde puedes encontrar el id. de cada opción para la selección única. Los campos de iteración se devuelven como un objeto `ProjectV2IterationField` y tienen un campo `configuration` que incluye un campo `iterations` que contiene el id. y la información sobre cada iteración. 

Si solo necesitas el nombre y el id. de un campo y no necesitas información sobre las iteraciones o las opciones de un campo de selección única, puedes usar el objeto `ProjectV2FieldCommon`. 

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

La respuesta al usar el objeto `ProjectV2FieldCommon` será similar al ejemplo siguiente:

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

### <a name="finding-information-about-items-in-a-project"></a>Encontrar información sobre los elementos en un proyecto 

Puedes consultar mediante la API para encontrar información sobre los elementos de tu proyecto.

En el ejemplo siguiente se devolverán los 20 primeros problemas, solicitudes de incorporación de cambios y problemas de borrador de un proyecto. En el caso de los problemas y las solicitudes de incorporación de cambios, también devolverá el título y los primeros 10 usuarios asignados. En el caso del problema de borrador, devolverá el título y el cuerpo. En el ejemplo también se devolverá el nombre del campo y el valor de los campos de texto, fecha o selección única en los primeros 8 campos del proyecto. Reemplaza `PROJECT_ID` por el identificador de nodo del proyecto.

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

## <a name="updating-projects"></a>Actualizar los proyectos 

Utiliza las mutaciones para actualizar los proyectos. Para obtener más información, consulta "[Acerca de las mutaciones](/graphql/guides/forming-calls-with-graphql#about-mutations)".

{% note %}

**Nota:** No se puede agregar y actualizar un elemento en la misma llamada. Debes usar `addProjectV2ItemById` para agregar el elemento y, a continuación, usar `updateProjectV2ItemFieldValue` para actualizarlo.

{% endnote %}

### <a name="adding-an-item-to-a-project"></a>Agregar un elemento a un proyecto

El siguiente ejemplo agregará una propuesta o solicitud de cambios a tu proyecto. Reemplaza `PROJECT_ID` por el identificador de nodo del proyecto. Reemplaza `CONTENT_ID` por el identificador de nodo de la propuesta o solicitud de incorporación de cambios que quieras agregar.

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

### <a name="adding-a-draft-issue-to-a-project"></a>Incorporación de un problema de borrador a un proyecto

En el ejemplo siguiente se agregará un problema de borrador al proyecto. Reemplaza `PROJECT_ID` por el identificador de nodo del proyecto. Reemplaza `TITLE` y `BODY` por el contenido que quieras para el nuevo problema de borrador.

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

La respuesta contendrá el id. de nodo del problema de borrador recién creado.

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

### <a name="updating-a-projects-settings"></a>Actualizar los ajustes de un proyecto 

El siguiente ejemplo actualizará los ajustes de tu proyecto. Reemplaza `PROJECT_ID` por el identificador de nodo del proyecto. Establece `public` en `true` para que el proyecto sea público en {% data variables.product.product_name %}. Modifica `readme` para realizar cambios en el archivo README del proyecto.

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

### <a name="updating-a-custom-text-number-or-date-field"></a>Actualizar un campo personalizado de texto, número o fecha 

En el ejemplo siguiente se actualizará el valor de un campo de texto para un elemento. Reemplaza `PROJECT_ID` por el identificador de nodo del proyecto. Reemplaza `ITEM_ID` por el identificador de nodo del elemento que quieras actualizar. Reemplaza `FIELD_ID` por el identificador del campo que quieras actualizar.

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

**Nota:** No se puede usar `updateProjectV2ItemFieldValue` para cambiar `Assignees`, `Labels`, `Milestone` o `Repository` porque estos campos son propiedades de solicitudes de incorporación de cambios y propuestas, no de elementos del proyecto. En su lugar, puedes usar las mutaciones siguientes:

- [addAssigneesToAssignable](/graphql/reference/mutations#addassigneestoassignable)
- [removeAssigneesFromAssignable](/graphql/reference/mutations#removeassigneesfromassignable)
- [addLabelsToLabelable](/graphql/reference/mutations#addlabelstolabelable)
- [removeLabelsFromLabelable](/graphql/reference/mutations#removelabelsfromlabelable)
- [updateIssue](/graphql/reference/mutations#updateissue)
- [updatePullRequest](/graphql/reference/mutations#updatepullrequest)
- [transferIssue](/graphql/reference/mutations#transferissue)

{% endnote %}

### <a name="updating-a-single-select-field"></a>Actualizar un campo de selección simple

El siguiente ejemplo actualizará el valor de un campo de selección simple para un elemento.

- `PROJECT_ID`: reemplázalo por el identificador de nodo del proyecto.
- `ITEM_ID`: reemplázalo por el identificador de nodo del elemento que quieras actualizar.
- `FIELD_ID` : reemplázalo por el identificador del campo de selección única que quieras actualizar.
- `OPTION_ID` : reemplázalo por el identificador de la opción de selección única deseada.

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

### <a name="updating-an-iteration-field"></a>Actualizar un campo de iteración

El siguiente ejemplo actualizará el valor de un campo de iteración para un elemento.

- `PROJECT_ID`: reemplázalo por el identificador de nodo del proyecto.
- `ITEM_ID`: reemplázalo por el identificador de nodo del elemento que quieras actualizar.
- `FIELD_ID` : reemplázalo por el identificador del campo de iteración que quieras actualizar.
- `ITERATION_ID` : reemplázalo por el identificador de la iteración deseada. Esto puede ser una iteración activa o completada.

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

### <a name="deleting-an-item-from-a-project"></a>Borrar un elemento de un proyecto

El siguiente ejemplo borrará un elemento de un proyecto. Reemplaza `PROJECT_ID` por el identificador de nodo del proyecto. Reemplaza `ITEM_ID` por el identificador de nodo del elemento que quieras eliminar.

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
