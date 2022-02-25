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

El artículo muestra cómo utilizar la API de GraphQL para administrar un proyecto. Para obtener más información sobre cómo utilizar la API en un flujo de trabajo de {% data variables.product.prodname_actions %}, consulta la sección "[Automatizar proyectos (beta)](/issues/trying-out-the-new-projects-experience/automating-projects)". Para encontrar una lista completa de los tipos de datos disponibles, consulta la "[Referencia](/graphql/reference)".

{% data reusables.projects.projects-beta %}

## Autenticación

{% curl %}

En el resto de los ejemplos de cURL, reemplaza a `TOKEN` con un token que tenga el alcance `read:org` (para las consultas) o `write:org` (para las consultas y mutaciones). El token puede ser un token personal de acceso para un usuario o un token de acceso a la instalación para una {% data variables.product.prodname_github_app %}. Para obtener más información acerca de cómo crear un token de acceso personal, consulta la sección "[Crear un token de acceso personal](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)". Para obtener más información sobre cómo crear un token de acceso a la instalación para una {% data variables.product.prodname_github_app %}, consulta la sección "[Autenticarse con {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps/authenticating-with-github-apps#authenticating-as-a-github-app)".

{% endcurl %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Antes de ejecutar comandos del {% data variables.product.prodname_cli %}, debes autenticarte ejecutando `gh auth login --scopes "write:org"`. Si solo necesitas leer, mas no editar, los proyectos, puedes omitir el argumento `--scopes`. Para obtener más información sobre la autenticación por la línea de comandos, consulta la sección "[gh auth login](https://cli.github.com/manual/gh_auth_login)".

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
      projectNext(number: $number) {
        id
      }
    }
  }' -f organization=$my_org -F number=$my_num
```

Para obtener más información, consulta la sección "[Formar llamados con GraphQL]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/guides/forming-calls-with-graphql#working-with-variables)".

{% endcli %}

## Encontrar información sobre los proyectos

Utiliza consultas para obtener datos sobre los proyectos. Paraobtener más información, consulta la sección "[Acerca de las consultas]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/guides/forming-calls-with-graphql#about-queries)".

### Encontrar la ID de nodo de un proyecto organizacional

Para actualizar tu proyecto a través de la API, necesitarás conocer la ID de nodo del proyecto.

Puedes encontrar la ID de nodo de un proyecto organizacional si conoces el nombre de la organización y el número de proyecto. Reemplaza `ORGANIZATION` con el nombre de tu organización. Por ejemplo, `octo-org`. Reemplaza `NUMBER` con el número de proyecto. Para encontrar un número de proyecto, revisa su URL. Por ejemplo, la dirección `https://github.com/orgs/octo-org/projects/5` tiene "5" como número de proyecto.

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --data '{"query":"query{organization(login: \"<em>ORGANIZATION</em>\") {projectNext(number: <em>NUMBER</em>){id}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
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

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --data '{"query":"{organization(login: \"<em>ORGANIZATION</em>\") {projectsNext(first: 20) {nodes {id title}}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
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

### Encontrar la ID de nodo de un proyecto de usuario

Para actualizar tu proyecto a través de la API, necesitarás conocer la ID de nodo del proyecto.

Puedes encontrar la ID de nodo de un proyecto de usuario si conoces el número del mismo. Reemplaza `USER` con tu nombre de usuario. Por ejemplo, `octocat`. Reemplaza `NUMBER` con tu número de proyecto. Para encontrar un número de proyecto, revisa su URL. Por ejemplo, la dirección `https://github.com/users/octocat/projects/5` tiene "5" tiene "5" como número de proyecto.

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --data '{"query":"query{user(login: \"<em>USER</em>\") {projectNext(number: <em>NUMBER</em>){id}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  query{
    user(login: "<em>USER</em>"){
      projectNext(number: <em>NUMBER</em>) {
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
  --data '{"query":"{user(login: \"<em>USER</em>\") {projectsNext(first: 20) {nodes {id title}}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  query{
    user(login: "<em>USER</em>") {
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

Para actualizar el valor de un campo, necesitarás conocer la ID de nodo del mismo. Adicionalmente, necesitarás saber la ID de las opciones para los campos de selección única y la ID de las iteraciones de los campos de iteración.

El siguiente ejemplo devolverá la ID, nombre y configuración de los primeros 20 campos de un proyecto. Reemplaza a `PROJECT_ID` con la ID de nodo de tu proyecto.

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --data '{"query":"query{node(id: \"<em>PROJECT_ID</em>\") {... on ProjectNext {fields(first: 20) {nodes {id name settings}}}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
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
          },
          {
            "id": "MDE2OlByb2plY3ROZXh0RmllbGQ3NTEwNw==",
            "name": "Iteration",
            "settings": "{\"configuration\":{\"duration\":7,\"start_day\":5,\"iterations\":[{\"id\":\"c4d8e84d\",\"title\":\"Iteration 2\",\"duration\":7,\"start_date\":\"2021-10-08\",\"title_html\":\"Iteration 2\"},{\"id\":\"fafa9c9f\",\"title\":\"Iteration 3\",\"duration\":7,\"start_date\":\"2021-10-15\",\"title_html\":\"Iteration 3\"}],\"completed_iterations\":[{\"id\":\"fa62c118\",\"title\":\"Iteration 1\",\"duration\":7,\"start_date\":\"2021-10-01\",\"title_html\":\"Iteration 1\"}]}}"
          }
        ]
      }
    }
  }
}
```

Cada campo tiene una ID. Adicionalmente, los campos de selección única y de iteración tienen un valor de `settings`. En los ajustes de selección única, puedes encontrar la ID de cada opción de la selección única. En los ajustes de iteración, puedes encontrar la duración de estas, el día de inicio de la iteración (desde 1 para los lunes hasta 7 para los domingos), la lista de iteraciones incompletas y la lista de iteraciones completas. Para cada iteración en las listas de iteraciones, puedes encontrar la ID, título, duración y fecha de inicio de ella.

### Encontrar información sobre los elementos en un proyecto

Puedes consultar mediante la API para encontrar información sobre los elementos de tu proyecto.

{% note %}

**Nota**: La API no devolverá información sobre los borradores de propuestas.

{% endnote %}

El siguiente ejemplo devolverá el título y la ID de los primeros 20 elementos en un proyecto. Para cada elemento, también devolverá el valor y nombre de los primeros 8 campos en el proyecto. Si el elemento es una propuesta o solicitud de cambios, este devolverá al inicio de sesión de los primeros 10 asignados. Reemplaza a `PROJECT_ID` con la ID de nodo de tu proyecto.

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --data '{"query":"query{node(id: \"<em>PROJECT_ID</em>\") {... on ProjectNext {items(first: 20) {nodes{title id fieldValues(first: 8) {nodes{value projectField{name}}} content{...on Issue {assignees(first: 10) {nodes{login}}} ...on PullRequest {assignees(first: 10) {nodes{login}}}}}}}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
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

Utiliza las mutaciones para actualizar los proyectos. Para obtener más información, consulta la sección "[Acerca de las mutaciones]({% ifversion ghec %}/free-pro-team@latest{% endif %}/graphql/guides/forming-calls-with-graphql#about-mutations)".

{% note %}

**Nota:** No puedes agregar y actualizar un elemento en el mismo llamado. Debes utilizar `addProjectNextItem` para agregar el elemento y luego `updateProjectNextItemField` para actualizarlo.

{% endnote %}

### Agregar un elemento a un proyecto

El siguiente ejemplo agregará una propuesta o solicitud de cambios a tu proyecto. Reemplaza a `PROJECT_ID` con la ID de nodo de tu proyecto. Reemplaza a `CONTENT_ID` con la ID de nodo de la propuesta o solicitud de cambios que quieras agregar.

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --data '{"query":"mutation {addProjectNextItem(input: {projectId: \"<em>PROJECT_ID</em>\" contentId: \"<em>CONTENT_ID</em>\"}) {projectNextItem {id}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
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

### Actualizar los ajustes de un proyecto

El siguiente ejemplo actualizará los ajustes de tu proyecto. Reemplaza a `PROJECT_ID` con la ID de nodo de tu proyecto. Configura `public` en `true` para que tu proyecto sea público en {% data variables.product.product_name %}. Modifica `description` para hacer cambios al README de tu proyecto.

{% curl %}
```shell
curl --request POST \
--url https://api.github.com/graphql \
--header 'Authorization: token <em>TOKEN</em>' \
--data '{"query":"mutation { updateProjectNext(input: { projectId: \"<em>PROJECT_ID</em>\", title: \"Project title\", public: false, description: \"# Project README\n\nA long description\", shortDescription: \"A short description\"}) { projectNext { id, title, description, shortDescription }}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  mutation {
    updateProjectNext(
      input: {
        projectId: "<em>PROJECT_ID</em>", 
        title: "Project title",
        public: false,
        description: "# Project README\n\nA long description",
        shortDescription: "A short description"
      }
    ) {
      projectNext {
        id
        title
        description
        shortDescription
      }
    }
  }'
```
{% endcli %}

### Actualizar un campo personalizado de texto, número o fecha

El siguiente ejemplo actualizará el valor de un campo de fecha para un elemento. Reemplaza a `PROJECT_ID` con la ID de nodo de tu proyecto. Reemplaza a `ITEM_ID` con la ID de nodo del elemento que quieras actualizar. Reemplaza a `FIELD_ID` con la ID del campo que quieras actualizar.

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --data '{"query":"mutation {updateProjectNextItemField(input: {projectId: \"<em>PROJECT_ID</em>\" itemId: \"<em>ITEM_ID</em>\" fieldId: \"<em>FIELD_ID</em>\" value: \"2021-5-11\"}) {projectNextItem {id}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
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

**Nota:** No puedes utilizar `updateProjectNextItemField` para cambiar `Assignees`, `Labels`, `Milestone`, o `Repository` ya que estos campos son propiedades de las solicitudes de cambio y propuestas y no de los elementos del proyecto. En vez de esto, debes utilizar las mutaciones [addAssigneesToAssignable]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/reference/mutations#addassigneestoassignable), [removeAssigneesFromAssignable]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/reference/mutations#removeassigneesfromassignable), [addLabelsToLabelable]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/reference/mutations#addlabelstolabelable), [removeLabelsFromLabelable]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/reference/mutations#removelabelsfromlabelable), [updateIssue]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/reference/mutations#updateissue), [updatePullRequest]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/reference/mutations#updatepullrequest) o [transferIssue]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/reference/mutations#transferissue).

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
  --data '{"query":"mutation {updateProjectNextItemField(input: {projectId: \"<em>PROJECT_ID</em>\" itemId: \"<em>ITEM_ID</em>\" fieldId: \"<em>FIELD_ID</em>\" value: \"<em>OPTION_ID</em>\"}) {projectNextItem {id}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
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

### Actualizar un campo de iteración

El siguiente ejemplo actualizará el valor de un campo de iteración para un elemento.

- `PROJECT_ID` - Reemplázalo con la ID de nodo de tu proyecto.
- `ITEM_ID` - Reemplázalo con la ID de nodo del elemento que quieras actualizar.
- `FIELD_ID` -  Reemplaza esto con la ID del campo de iteración que quieras actualizar.
- `ITERATION_ID` - Reemplaza esto con la ID de la iteración deseada. Esto puede ser ya sea la iteración activa (desde el arreglo `iterations`) o una iteración completa (desde el arreglo `completed_iterations`).

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --data '{"query":"mutation {updateProjectNextItemField(input: {projectId: \"<em>PROJECT_ID</em>\" itemId: \"<em>ITEM_ID</em>\" fieldId: \"<em>FIELD_ID</em>\" value: \"<em>ITERATION_ID</em>\"}) {projectNextItem {id}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  mutation {
    updateProjectNextItemField(
      input: {
        projectId: "<em>PROJECT_ID</em>"
        itemId: "<em>ITEM_ID</em>"
        fieldId: "<em>FIELD_ID</em>"
        value: "<em>ITERATION_ID</em>"
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

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --data '{"query":"mutation {deleteProjectNextItem(input: {projectId: \"<em>PROJECT_ID</em>\" itemId: \"<em>ITEM_ID</em>\"}) {deletedItemId}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
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
