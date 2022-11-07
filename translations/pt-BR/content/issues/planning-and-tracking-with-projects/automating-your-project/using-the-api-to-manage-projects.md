---
title: 'Usando a API para gerenciar {% data variables.product.prodname_projects_v2 %}'
shortTitle: Automating with the API
intro: Você pode usar a API do GraphQL para automatizar seus projetos.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/using-the-api-to-manage-projects
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 6b4deff4ee518bfdafcd3886577a1c9b12ea7b2e
ms.sourcegitcommit: bf11c3e08cbb5eab6320e0de35b32ade6d863c03
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/27/2022
ms.locfileid: '148111598'
---
Este artigo demonstra como usar a API do GraphQL para gerenciar um projeto. Para obter mais informações sobre como usar a API em um fluxo de trabalho do {% data variables.product.prodname_actions %}, confira "[Automatizar {% data variables.product.prodname_projects_v2 %} usando o Actions](/issues/planning-and-tracking-with-projects/automating-your-project/automating-projects-using-actions)". Para ver uma lista completa dos tipos de dados disponíveis, confira "[Referência](/graphql/reference)".

{% data reusables.projects.graphql-deprecation %}

## Autenticação

{% curl %}

Em todos os exemplos do cURL a seguir, substitua `TOKEN` por um token que tenha o escopo `read:project` (para consultas) ou o escopo `project` (para consultas e mutações). O token pode ser um {% data variables.product.pat_v1 %} para um usuário ou um token de acesso de instalação para um {% data variables.product.prodname_github_app %}. Para obter mais informações de como criar um {% data variables.product.pat_generic %}, confira "[Como criar um {% data variables.product.pat_generic %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)". Para obter mais informações sobre como criar um token de acesso de instalação para um {% data variables.product.prodname_github_app %}, confira "[Autenticação com os {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps/authenticating-with-github-apps#authenticating-as-a-github-app)".

{% endcurl %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Antes de executar os comandos da {% data variables.product.prodname_cli %}, você precisa se autenticar executando `gh auth login --scopes "project"`. Se você só precisar ler projetos, mas não editá-los, forneça o escopo `read:project` em vez do `project`. Para obter mais informações sobre a autenticação de linha de comando, confira "[gh auth login](https://cli.github.com/manual/gh_auth_login)".

{% endcli %}

{% cli %}

## Usando variáveis

Em todos os exemplos a seguir, você pode usar variáveis para simplificar seus scripts. Use `-F` para transmitir uma variável que é um número, um booliano ou nula. Use `-f` para outras variáveis. Por exemplo,

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

Para obter mais informações, confira "[Como formar chamadas com o GraphQL](/graphql/guides/forming-calls-with-graphql#working-with-variables)".

{% endcli %}

## Encontrando informações sobre os projetos

Use consultas para obter dados sobre projetos. Para obter mais informações, confira "[Sobre as consultas](/graphql/guides/forming-calls-with-graphql#about-queries)".

### Encontrando o ID do nó de um projeto da organização

Para atualizar seu projeto por meio da API, você precisará conhecer o nó de ID do projeto.

Você pode encontrar o nó do projeto de uma organização se você souber o nome da organização e o número do projeto. Substitua `ORGANIZATION` pelo nome da sua organização. Por exemplo, `octo-org`. Substitua `NUMBER` pelo número do projeto. Para encontrar o número do projeto, consulte a URL do projeto. Por exemplo, `https://github.com/orgs/octo-org/projects/5` tem o número de projeto 5.

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: Bearer TOKEN' \
  --data '{"query":"query{organization(login: \"ORGANIZATION\") {projectV2(number: NUMBER){id}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  query{
    organization(login: "ORGANIZATION"){
      projectV2(number: NUMBER) {
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
  --header 'Authorization: Bearer TOKEN' \
  --data '{"query":"{organization(login: \"ORGANIZATION\") {projectsV2(first: 20) {nodes {id title}}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  query{
    organization(login: "ORGANIZATION") {
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

Você pode encontrar o ID do nó do projeto se você souber o número do projeto. Substitua `USER` por seu nome de usuário. Por exemplo, `octocat`. Substitua `NUMBER` pelo número do projeto. Para encontrar o número do projeto, consulte a URL do projeto. Por exemplo, `https://github.com/users/octocat/projects/5` tem o número de projeto 5.

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: Bearer TOKEN' \
  --data '{"query":"query{user(login: \"USER\") {projectV2(number: NUMBER){id}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  query{
    user(login: "USER"){
      projectV2(number: NUMBER) {
        id
      }
    }
  }'
```
{% endcli %}

Também é possível encontrar o ID do nó para todos os seus projetos. O exemplo a seguir retornará o ID do nó e o título de seus primeiros 20 projetos. Substitua `USER` pelo seu nome de usuário. Por exemplo, `octocat`.

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: Bearer TOKEN' \
  --data '{"query":"{user(login: \"USER\") {projectsV2(first: 20) {nodes {id title}}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  query{
    user(login: "USER") {
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

O exemplo a seguir retornará a ID, o nome, as definições e as configurações dos primeiros 20 campos de um projeto. Substitua `PROJECT_ID` pela ID de nó do projeto.

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: Bearer TOKEN' \
  --data '{"query":"query{ node(id: \"PROJECT_ID\") { ... on ProjectV2 { fields(first: 20) { nodes { ... on ProjectV2Field { id name } ... on ProjectV2IterationField { id name configuration { iterations { startDate id }}} ... on ProjectV2SingleSelectField { id name options { id name }}}}}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  query{
  node(id: "PROJECT_ID") {
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

A resposta será semelhante ao seguinte exemplo:

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

Cada campo tem uma ID e um nome. Os campos de seleção única são retornados como um objeto `ProjectV2SingleSelectField` e têm um campo `options` contendo a ID de cada opção da seleção única. Os campos de iteração são retornados como um objeto `ProjectV2IterationField` e têm um campo `configuration` que inclui um campo `iterations` contendo a ID e informações de cada iteração. 

Se você precisar apenas do nome e da ID de um campo e não precisar de informações sobre iterações ou opções de um campo de seleção única, use o objeto `ProjectV2FieldCommon`. 

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: Bearer TOKEN' \
  --data '{"query":"query{ node(id: \"PROJECT_ID\") { ... on ProjectV2 { fields(first: 20) { nodes { ... on ProjectV2FieldCommon { id name }}}}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  query{
  node(id: "PROJECT_ID") {
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
}'
```
{% endcli %}

A resposta ao usar o objeto `ProjectV2FieldCommon` será semelhante ao seguinte exemplo:

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

O exemplo a seguir retornará os primeiros 20 problemas, solicitações de pull e problemas de rascunho em um projeto. Para os problemas e as solicitações de pull, ele também retornará o título e os dez primeiros destinatários. Para os problemas de rascunho, ele retornará o título e o corpo. O exemplo também retornará o nome e o valor de campos de texto, data ou seleção única nos primeiros oito campos do projeto. Substitua `PROJECT_ID` pela ID de nó do projeto.

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: Bearer TOKEN' \
  --data '{"query":"query{ node(id: \"PROJECT_ID\") { ... on ProjectV2 { items(first: 20) { nodes{ id fieldValues(first: 8) { nodes{ ... on ProjectV2ItemFieldTextValue { text field { ... on ProjectV2FieldCommon {  name }}} ... on ProjectV2ItemFieldDateValue { date field { ... on ProjectV2FieldCommon { name } } } ... on ProjectV2ItemFieldSingleSelectValue { name field { ... on ProjectV2FieldCommon { name }}}}} content{ ... on DraftIssue { title body } ...on Issue { title assignees(first: 10) { nodes{ login }}} ...on PullRequest { title assignees(first: 10) { nodes{ login }}}}}}}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  query{
    node(id: "PROJECT_ID") {
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

Um projeto pode conter itens que um usuário não tem permissão para visualizar. Nesse caso, o tipo de item será retornado como `REDACTED`.

## Atualizando projetos 

Use mutações para atualizar projetos. Para obter mais informações, confira "[Sobre as mutações](/graphql/guides/forming-calls-with-graphql#about-mutations)".

{% note %}

**Observação:** não é possível adicionar nem atualizar um item na mesma chamada. Você precisa usar `addProjectV2ItemById` para adicionar o item e usar `updateProjectV2ItemFieldValue` para atualizar o item.

{% endnote %}

### Adicionando um item a um projeto

O exemplo a seguir adicionará um problema ou pull request ao seu projeto. Substitua `PROJECT_ID` pela ID de nó do projeto. Substitua `CONTENT_ID` pela ID de nó do problema ou da solicitação de pull que deseja adicionar.

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: Bearer TOKEN' \
  --data '{"query":"mutation {addProjectV2ItemById(input: {projectId: \"PROJECT_ID\" contentId: \"CONTENT_ID\"}) {item {id}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  mutation {
    addProjectV2ItemById(input: {projectId: "PROJECT_ID" contentId: "CONTENT_ID"}) {
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

### Como adicionar um problema de rascunho a um projeto

O exemplo a seguir adicionará um problema de rascunho ao projeto. Substitua `PROJECT_ID` pela ID de nó do projeto. Substitua `TITLE` e `BODY` pelo conteúdo desejado para o novo problema de rascunho.

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: Bearer TOKEN' \
  --data '{"query":"mutation {addProjectV2DraftIssue(input: {projectId: \"PROJECT_ID\" title: \"TITLE\" body: \"BODY\"}) {projectItem {id}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  mutation {
    addProjectV2DraftIssue(input: {projectId: "PROJECT_ID" title: "TITLE" body: "BODY"}) {
      projectItem {
        id
      }
    }
  }'
```
{% endcli %}

A resposta conterá a ID do nó do item do problema de rascunho recém-criado.

```json
{
  "data": {
    "addProjectV2DraftIssue": {
      "projectItem": {
        "id": "PVTI_lADOANN5s84ACbL0zgBbxFc"
      }
    }
  }
}
```

### Atualizando configurações de um projeto 

O exemplo a seguir irá atualizar as configurações do seu projeto. Substitua `PROJECT_ID` pela ID de nó do projeto. Defina `public` como `true` para tornar seu projeto público no {% data variables.product.product_name %}. Modifique `readme` para fazer alterações no README do projeto.

{% curl %}
```shell
curl --request POST \
--url https://api.github.com/graphql \
--header 'Authorization: Bearer TOKEN' \
--data '{"query":"mutation { updateProjectV2(input: { projectId: \"PROJECT_ID\", title: \"Project title\", public: false, readme: \"# Project README\n\nA long description\", shortDescription: \"A short description\"}) { projectV2 { id, title, readme, shortDescription }}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  mutation {
    updateProjectV2(
      input: {
        projectId: "PROJECT_ID", 
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

O exemplo a seguir atualizará o valor de um campo de texto de um item. Substitua `PROJECT_ID` pela ID de nó do projeto. Substitua `ITEM_ID` pela ID de nó do item que deseja atualizar. Substitua `FIELD_ID` pela ID do campo que deseja atualizar.

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: Bearer TOKEN' \
  --data '{"query":"mutation {updateProjectV2ItemFieldValue( input: { projectId: \"PROJECT_ID\" itemId: \"ITEM_ID\" fieldId: \"FIELD_ID\" value: { text: \"Updated text\" }}) { projectV2Item { id }}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  mutation {
    updateProjectV2ItemFieldValue(
      input: {
        projectId: "PROJECT_ID"
        itemId: "ITEM_ID"
        fieldId: "FIELD_ID"
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

**Observação:** não é possível usar `updateProjectV2ItemFieldValue` para alterar`Assignees`, `Labels`, `Milestone` ou `Repository`, porque esses campos são propriedades de solicitações de pull e problemas, não de itens de projeto. Nesse caso, você pode usar as seguintes mutações:

- [addAssigneesToAssignable](/graphql/reference/mutations#addassigneestoassignable)
- [removeAssigneesFromAssignable](/graphql/reference/mutations#removeassigneesfromassignable)
- [addLabelsToLabelable](/graphql/reference/mutations#addlabelstolabelable)
- [removeLabelsFromLabelable](/graphql/reference/mutations#removelabelsfromlabelable)
- [updateIssue](/graphql/reference/mutations#updateissue)
- [updatePullRequest](/graphql/reference/mutations#updatepullrequest)
- [transferIssue](/graphql/reference/mutations#transferissue)

{% endnote %}

### Atualizando um único campo de seleção

O exemplo a seguir atualizará o valor de um campo de seleção única para um item.

- `PROJECT_ID` – Substitua-a pela ID de nó do projeto.
- `ITEM_ID` – Substitua-a pela ID de nó do item que deseja atualizar.
- `FIELD_ID` – Substitua-a pela ID do campo de seleção única que deseja atualizar.
- `OPTION_ID` – Substitua-a pela ID da opção de seleção única desejada.

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: Bearer TOKEN' \
  --data '{"query":"mutation {updateProjectV2ItemFieldValue( input: { projectId: \"PROJECT_ID\" itemId: \"ITEM_ID\" fieldId: \"FIELD_ID\" value: { singleSelectOptionId: \"OPTION_ID\" }}) { projectV2Item { id }}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  mutation {
    updateProjectV2ItemFieldValue(
      input: {
        projectId: "PROJECT_ID"
        itemId: "ITEM_ID"
        fieldId: "FIELD_ID"
        value: { 
          singleSelectOptionId: "OPTION_ID"        
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

- `PROJECT_ID` – Substitua-a pela ID de nó do projeto.
- `ITEM_ID` – Substitua-a pela ID de nó do item que deseja atualizar.
- `FIELD_ID` – Substitua-a pela ID do campo de iteração que deseja atualizar.
- `ITERATION_ID` – Substitua-a pela ID da iteração desejada. Essa iteração pode ser ativa ou concluída.

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: Bearer TOKEN' \
  --data '{"query":"mutation {updateProjectV2ItemFieldValue( input: { projectId: \"PROJECT_ID\" itemId: \"ITEM_ID\" fieldId: \"FIELD_ID\" value: { singleSelectOptionId: \"OPTION_ID\" }}) { projectV2Item { id }}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  mutation {
    updateProjectV2ItemFieldValue(
      input: {
        projectId: "PROJECT_ID"
        itemId: "ITEM_ID"
        fieldId: "FIELD_ID"
        value: { 
          iterationId: "ITERATION_ID"        
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

O exemplo a seguir excluirá um item de um projeto. Substitua `PROJECT_ID` pela ID de nó do projeto. Substitua `ITEM_ID` pela ID de nó do item que deseja excluir.

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: Bearer TOKEN' \
  --data '{"query":"mutation {deleteProjectV2Item(input: {projectId: \"PROJECT_ID\" itemId: \"ITEM_ID\"}) {deletedItemId}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  mutation {
    deleteProjectV2Item(
      input: {
        projectId: "PROJECT_ID"
        itemId: "ITEM_ID"
      }
    ) {
      deletedItemId
    }
  }'
```
{% endcli %}

## Como gerenciar projetos 

### Criando projetos

Você pode usar uma mutação para criar um projeto. Para obter mais informações, confira "[Sobre as mutações](/graphql/guides/forming-calls-with-graphql#about-mutations)".

Para criar um projeto usando a API, você precisará fornecer um nome para o projeto e a ID do nó de um usuário ou de uma organização do {% data variables.product.product_name %} que se tornará o proprietário do projeto.

Você conseguirá encontrar a ID do nó de um usuário ou de uma organização do {% data variables.product.product_name %} se souber o nome de usuário. Substitua <code>GITHUB_OWNER</code> pelo nome de usuário do {% data variables.product.product_name %} do novo proprietário do projeto.

{% curl %}
```shell
curl --request GET \
  --url https://api.github.com/users/<em>GITHUB_OWNER</em> \
  --header 'Authorization: token <em>TOKEN</em>' \
  --header 'Accept: application/vnd.github+json'
```
{% endcurl %}

{% cli %}
```shell
gh api -H "Accept: application/vnd.github+json" /users/<em>GITHUB_OWNER</em>
```
{% endcli %}

Para criar o projeto, substitua `OWNER_ID` pela ID do nó do novo proprietário do projeto e substitua `PROJECT_NAME` por um nome do projeto.

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --data '{"query":"mutation {createProjectV2(input: {ownerId: \"<em>OWNER_ID</em>\" title: \"<em>PROJECT_NAME</em>\"}) {projectV2 {id}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  mutation{
    createProjectV2(
      input: {
        ownerId: "<em>OWNER_ID</em>",
        title: "<em>PROJECT_NAME</em>"
      }
    ){
      projectV2 {
        id
      }
     }
  }'
```
{% endcli %}


## Usando webhooks

Você pode usar webhooks para assinar eventos que ocorrem em seu projeto. Por exemplo, quando um item é editado, o {% data variables.product.product_name %} pode enviar um conteúdo HTTP POST para a URL configurada do webhook que pode disparar a automação em seu servidor. Para obter mais informações sobre webhooks, confira "[Sobre webhooks](/developers/webhooks-and-events/webhooks/about-webhooks)". Para obter mais informações sobre o evento de webhook `projects_v2_item`, confira "[Eventos e conteúdos de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#projects_v2_item)".
