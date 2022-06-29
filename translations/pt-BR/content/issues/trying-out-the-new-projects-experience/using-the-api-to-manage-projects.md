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

{% data reusables.projects.graphql-deprecation %}

Este artigo demonstra como usar a API do GraphQL para gerenciar um projeto. Para obter mais informações sobre como utilizar a API em um fluxo de trabalho {% data variables.product.prodname_actions %}, consulte "[Automatizando projetos (beta)](/issues/trying-out-the-new-projects-experience/automating-projects)". Para uma lista completa dos tipos de dados disponíveis, consulte "[Referência](/graphql/reference)".

{% data reusables.projects.projects-beta %}

## Autenticação

{% curl %}

In all of the following cURL examples, replace `TOKEN` with a token that has the `read:project` scope (for queries) or `project` scope (for queries and mutations). O token pode ser um token de acesso pessoal para um usuário ou um token de acesso de instalação para um {% data variables.product.prodname_github_app %}. Para obter mais informações sobre a criação de um token de acesso pessoal, consulte[Criando um token de acesso pessoal](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)." Para obter mais informações sobre a criação de um token de acesso de instalação para um {% data variables.product.prodname_github_app %}, consulte "[Efetuando a autenticação com {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps/authenticating-with-github-apps#authenticating-as-a-github-app)".

{% endcurl %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Before running {% data variables.product.prodname_cli %} commands, you must authenticate by running `gh auth login --scopes "project"`. If you only need to read, but not edit, projects, you can provide the `read:project` scope instead of `project`. Para obter mais informações sobre a autenticação de linha de comando, consulte "[gh auth login](https://cli.github.com/manual/gh_auth_login)".

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
      projectV2(number: $number) {
        id
      }
    }
  }' -f organization=$my_org -F number=$my_num
```

Para obter mais informações, consulte "[Formando chamadas com o GraphQL]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/guides/forming-calls-with-graphql#working-with-variables)".

{% endcli %}

## Encontrando informações sobre os projetos

Use consultas para obter dados sobre projetos. Para obter mais informações, consulte "[Sobre consultas]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/guides/forming-calls-with-graphql#about-queries)".

### Encontrando o ID do nó de um projeto da organização

Para atualizar seu projeto por meio da API, você precisará conhecer o nó de ID do projeto.

Você pode encontrar o nó do projeto de uma organização se você souber o nome da organização e o número do projeto. Substitua `ORGANIZATION` pelo nome da sua organização. Por exemplo, `octo-org`. Substituir `NÚMERO` pelo número do projeto. Para encontrar o número do projeto, consulte a URL do projeto. Por exemplo, `https://github.com/orgs/octo-org/projects/5` tem um número de projeto de 5.

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

Você também pode encontrar o ID do nó de todos os projetos na sua organização. O exemplo a seguir retornará o ID do nó e o título dos primeiros 20 projetos em uma organização. Substitua `ORGANIZATION` pelo nome da sua organização. Por exemplo, `octo-org`.

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

### Encontrar o ID do nó do projeto de um usuário

Para atualizar seu projeto por meio da API, você precisará conhecer o nó de ID do projeto.

Você pode encontrar o ID do nó do projeto se você souber o número do projeto. Substitua `USUÁRIO` pelo seu nome de usuário. Por exemplo, `octocat`. Substitua `NUMBER` pelo número do seu projeto. Para encontrar o número do projeto, consulte a URL do projeto. Por exemplo, `https://github.com/users/octocat/projects/5` tem um número de projeto de 5.

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

Também é possível encontrar o ID do nó para todos os seus projetos. O exemplo a seguir retornará o ID do nó e o título de seus primeiros 20 projetos. Substitua `USUÁRIO` pelo seu nome de usuário. Por exemplo, `octocat`.

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

### Encontrando o ID do nó de um campo

Para atualizar o valor de um campo, você precisará saber o ID do nó do campo. Além disso, você precisará saber o ID das opções para um único campo selecionado e o ID das iterações para os campos de iteração.

The following example will return the ID, name, settings, and configuration for the first 20 fields in a project. Substitua `PROJECT_ID` pelo ID do nó do seu projeto.

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

A resposta ficará semelhante ao seguinte exemplo:

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

Each field has an ID and name. Single select fields are returned as a `ProjectV2SingleSelectField` object and have an `options` field where you can find the ID of each option for the single select. Iteration fields are returned as a `ProjectV2IterationField` object and have a `configuration` field which includes an `iterations` field containing the ID and information about each iteration.

If you just need the name and ID of a field, and do not need information about iterations or a single select field's options, you can make use of the `ProjectV2FieldCommon` object.

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

The response when using the `ProjectV2FieldCommon` object will look similar to the following example:

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

### Encontrando informações sobre os itens de um projeto

Você pode consultar a API para encontrar informações sobre itens no seu projeto.

The following example will return the first 20 issues, pull requests, and draft issues in a project. For issues and pull requests, it will also return title and the first 10 assignees. For draft issue, it will return the title and body. The example will also return the field name and value for any text, date, or single select fields in the first 8 fields of the project. Substitua `PROJECT_ID` pelo ID do nó do seu projeto.

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

Um projeto pode conter itens que um usuário não tem permissão para visualizar. In this case, the item type will be returned as `REDACTED`.

## Atualizando projetos

Use mutações para atualizar projetos. Para obter mais informações, consulte "[Sobre mutações]({% ifversion ghec %}/free-pro-team@latest{% endif %}/graphql/guides/forming-calls-with-graphql#about-mutations)".

{% note %}

**Observação:** Você não pode adicionar e atualizar um item na mesma chamada. You must use `addProjectV2ItemById` to add the item and then use `updateProjectV2ItemFieldValue` to update the item.

{% endnote %}

### Adicionando um item a um projeto

O exemplo a seguir adicionará um problema ou pull request ao seu projeto. Substitua `PROJECT_ID` pelo ID do nó do seu projeto. Substitua `CONTENT_ID` pelo ID do n[o do problema ou pull request que você deseja adicionar.

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

A resposta conterá o ID do nó do item recém-criado.

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

Se você tentar adicionar um item que já existe, o ID do item existente será retornado.

### Adding a draft issue to a project

The following example will add a draft issue to your project. Substitua `PROJECT_ID` pelo ID do nó do seu projeto. Replace `TITLE` and `BODY` with the content you want for the new draft issue.

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

The response will contain the node ID of the newly created draft issue.

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

### Atualizando configurações de um projeto

O exemplo a seguir irá atualizar as configurações do seu projeto. Substitua `PROJECT_ID` pelo ID do nó do seu projeto. Defina `público` como `verdadeiro` para tornar o seu projeto público em {% data variables.product.product_name %}. Modify `readme` to make changes to your project's README.

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

### Atualizando um campo de texto, número ou data personalizado

The following example will update the value of a text field for an item. Substitua `PROJECT_ID` pelo ID do nó do seu projeto. Substitua `ITEM_ID` pelo ID do nó do item que você deseja atualizar. Substitua `FIELD_ID` pelo ID do campo que você deseja atualizar.

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

**Note:** You cannot use `updateProjectV2ItemFieldValue` to change `Assignees`, `Labels`, `Milestone`, or `Repository` because these fields are properties of pull requests and issues, not of project items. Em vez disso, você deverá usar a mutação [addAssigneesToAssignable]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/reference/mutations#addassigneestoassignable), [removeAssigneesFromAssignable]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/reference/mutations#removeassigneesfromassignable), [addLabelsToLabelable]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/reference/mutations#addlabelstolabelable), [removeLabelsFromLabelable]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/reference/mutations#removelabelsfromlabelable), [updateIssue]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/reference/mutations#updateissue), [updatePullRequest]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/reference/mutations#updatepullrequest) ou [transferIssue]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/reference/mutations#transferissue).

{% endnote %}

### Atualizando um único campo de seleção

O exemplo a seguir atualizará o valor de um campo de seleção única para um item.

- `PROJET_ID` - Substituir isso pelo ID do nó do seu projeto.
- `ITEM_ID` - Substituir isso pelo ID do nó do item que você deseja atualizar.
- `FIELD_ID` - Substitua-o pelo ID do campo de seleção única que você deseja atualizar.
- `OPTION_ID` - Substitui esse ID da opção de seleção única desejada.

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

### Atualizando um campo de iteração

O exemplo a seguir atualizará o valor de um campo de iteração para um item.

- `PROJET_ID` - Substituir isso pelo ID do nó do seu projeto.
- `ITEM_ID` - Substituir isso pelo ID do nó do item que você deseja atualizar.
- `FIELD_ID` - Substitua este ID do campo de iteração que você deseja atualizar.
- `ITERATION_ID` - Substitua o ID da iteração desejada. This can be either an active or completed iteration.

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

### Excluir um item de um projeto

O exemplo a seguir excluirá um item de um projeto. Substitua `PROJECT_ID` pelo ID do nó do seu projeto. Substitua `ITEM_ID` pelo Id do nó do item que você deseja excluir.

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
