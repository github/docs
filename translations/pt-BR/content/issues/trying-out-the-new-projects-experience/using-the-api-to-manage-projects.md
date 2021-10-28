---
title: Usando a API para gerenciar projetos (beta)
intro: Você pode usar a API do GraphQL para encontrar informações sobre projetos e atualizar projetos.
versions:
  fpt: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
type: how_to
topics:
  - Projects
---

Este artigo demonstra como usar a API do GraphQL para gerenciar um projeto. For more information about how to use the API in a {% data variables.product.prodname_actions %} workflow, see "[Automating projects (beta)](/issues/trying-out-the-new-projects-experience/automating-projects)." For a full list of the available data types, see "[Reference](/graphql/reference)."

{% data reusables.projects.projects-beta %}

## Autenticação

{% include tool-switcher %}

{% curl %}

Em todos os exemplos cURL a seguir, substitua `TOKEN` por um token que tem o escopo `read:org` (para consultas) ou `write:org` (para consultas e mutações). The token can be a personal access token for a user or an installation access token for a {% data variables.product.prodname_github_app %}. For more information about creating a personal access token, see "[Creating a personal access token](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)." For more information about creating an installation access token for a {% data variables.product.prodname_github_app %}, see "[Authenticating with {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps/authenticating-with-github-apps#authenticating-as-a-github-app)."

{% endcurl %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Before running {% data variables.product.prodname_cli %} commands, you must authenticate by running `gh auth login --scopes "write:org"`. If you only need to read, but not edit, projects, you can omit the `--scopes` argument. Para obter mais informações sobre a autenticação de linha de comando, consulte "[gh auth login](https://cli.github.com/manual/gh_auth_login)".

{% endcli %}

{% cli %}

## Usando variáveis

Em todos os exemplos a seguir, você pode usar variáveis para simplificar seus scripts. Use `-F` para passar uma variável que é um número, booleano ou nulo. Use `-f` para outras variáveis. Por exemplo,

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

Para obter mais informações, consulte "[Formando chamadas com o GraphQL]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/guides/forming-calls-with-graphql#working-with-variables)".

{% endcli %}

## Encontrando informações sobre os projetos

Use consultas para obter dados sobre projetos. Para obter mais informações, consulte "[Sobre consultas]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/guides/forming-calls-with-graphql#about-queries)".

### Finding the node ID of an organization project

Para atualizar seu projeto por meio da API, você precisará conhecer o nó de ID do projeto.

You can find the node ID of an organization project if you know the organization name and project number. Substitua `ORGANIZATION` pelo nome da sua organização. Por exemplo, `octo-org`. Replace `NUMBER` with the project number. Para encontrar o número do projeto, consulte a URL do projeto. Por exemplo, `https://github.com/orgs/octo-org/projects/5` tem um número de projeto de 5.

{% include tool-switcher %}

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

Você também pode encontrar o ID do nó de todos os projetos na sua organização. O exemplo a seguir retornará o ID do nó e o título dos primeiros 20 projetos em uma organização. Substitua `ORGANIZATION` pelo nome da sua organização. Por exemplo, `octo-org`.

{% include tool-switcher %}

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

### Finding the node ID of a user project

Para atualizar seu projeto por meio da API, você precisará conhecer o nó de ID do projeto.

You can find the node ID of a user project if you know the project number. Replace `USER` with your user name. Por exemplo, `octocat`. Substitua `NUMBER` pelo número do seu projeto. Para encontrar o número do projeto, consulte a URL do projeto. Por exemplo, `https://github.com/users/octocat/projects/5` tem um número de projeto de 5.

{% include tool-switcher %}

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

You can also find the node ID for all of your projects. The following example will return the node ID and title of your first 20 projects. Replace `USER` with your username. Por exemplo, `octocat`.

{% include tool-switcher %}

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

### Encontrando o ID do nó de um campo

Para atualizar o valor de um campo, você precisará saber o ID do nó do campo. Additionally, you will need to know the ID of the options for single select fields and the ID of the iterations for iteration fields.

O exemplo a seguir retornará o ID, o nome e as configurações para os primeiros 20 campos de um projeto. Substitua `PROJECT_ID` pelo ID do nó do seu projeto.

{% include tool-switcher %}

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

A resposta ficará semelhante ao seguinte exemplo:

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

Cada campo tem um ID. Additionally, single select fields and iteration fields have a `settings` value. In the single select settings, you can find the ID of each option for the single select. In the iteration settings, you can find the duration of the iteration, the start day of the iteration (from 1 for Monday to 7 for Sunday), the list of incomplete iterations, and the list of completed iterations. For each iteration in the lists of iterations, you can find the ID, title, duration, and start date of the iteration.

### Encontrando informações sobre os itens de um projeto

Você pode consultar a API para encontrar informações sobre itens no seu projeto.

O exemplo a seguir retornará o título e ID dos primeiros 20 itens em um projeto. Para cada item, ela também retornará o valor e nome para os primeiros 8 campos do projeto. Se o item for um problema ou um pull request, ele retornará o login dos primeiros 10 responsáveis. Substitua `PROJECT_ID` pelo ID do nó do seu projeto.

{% include tool-switcher %}

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

Um projeto pode conter itens que um usuário não tem permissão para visualizar. Neste caso, a resposta incluirá o item redatado.

```shell
{
  "node": {
  "title": "You can't see this item",
  ...
  }
}
```

## Atualizando projetos

Use mutações para atualizar projetos. For more information, see "[About mutations]({% ifversion ghec %}/free-pro-team@latest{% endif %}/graphql/guides/forming-calls-with-graphql#about-mutations)."

{% note %}

**Observação:** Você não pode adicionar e atualizar um item na mesma chamada. Você deve usar `addProjectNextItem` para adicionar o item e, em seguida, usar `updateProjectNextItemField` para atualizar o item.

{% endnote %}

### Adicionando um item a um projeto

O exemplo a seguir adicionará um problema ou pull request ao seu projeto. Substitua `PROJECT_ID` pelo ID do nó do seu projeto. Substitua `CONTENT_ID` pelo ID do n[o do problema ou pull request que você deseja adicionar.

{% include tool-switcher %}

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

A resposta conterá o ID do nó do item recém-criado.

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

Se você tentar adicionar um item que já existe, o ID do item existente será retornado.

### Updating a custom text, number, or date field

The following example will update the value of a date field for an item. Substitua `PROJECT_ID` pelo ID do nó do seu projeto. Substitua `ITEM_ID` pelo ID do nó do item que você deseja atualizar. Substitua `FIELD_ID` pelo ID do campo que você deseja atualizar.

{% include tool-switcher %}

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

**Observação:** Você não pode usar `updateProjectNextItemField` para alterar `Assignees`, `Labels`, `Milestone` ou `Repository` porque esses campos são propriedades de pull requests e problemas, não de itens do projeto. Instead, you must use the [addAssigneesToAssignable]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/reference/mutations#addassigneestoassignable), [removeAssigneesFromAssignable]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/reference/mutations#removeassigneesfromassignable), [addLabelsToLabelable]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/reference/mutations#addlabelstolabelable), [removeLabelsFromLabelable]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/reference/mutations#removelabelsfromlabelable), [updateIssue]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/reference/mutations#updateissue), [updatePullRequest]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/reference/mutations#updatepullrequest), or [transferIssue]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/reference/mutations#transferissue) mutations.

{% endnote %}

### Updating a single select field

The following example will update the value of a single select field for an item.

- `PROJET_ID` - Substituir isso pelo ID do nó do seu projeto.
- `ITEM_ID` - Substituir isso pelo ID do nó do item que você deseja atualizar.
- `FIELD_ID` -  Replace this with the ID of the single select field that you want to update.
- `OPTION_ID` - Replace this with the ID of the desired single select option.

{% include tool-switcher %}

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

### Updating an iteration field

The following example will update the value of an iteration field for an item.

- `PROJET_ID` - Substituir isso pelo ID do nó do seu projeto.
- `ITEM_ID` - Substituir isso pelo ID do nó do item que você deseja atualizar.
- `FIELD_ID` -  Replace this with the ID of the iteration field that you want to update.
- `ITERATION_ID` - Replace this with the ID of the desired iteration. This can be either an active iteration (from the `iterations` array) or a completed iteration (from the `completed_iterations` array).

{% include tool-switcher %}

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

### Excluir um item de um projeto

O exemplo a seguir excluirá um item de um projeto. Substitua `PROJECT_ID` pelo ID do nó do seu projeto. Substitua `ITEM_ID` pelo Id do nó do item que você deseja excluir.

{% include tool-switcher %}

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
