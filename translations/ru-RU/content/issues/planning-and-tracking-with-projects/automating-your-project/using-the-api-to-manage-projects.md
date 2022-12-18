---
title: 'Использование API для управления {% data variables.product.prodname_projects_v2 %}'
shortTitle: Automating with the API
intro: API GraphQL можно использовать для автоматизации проектов.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/using-the-api-to-manage-projects
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
ms.openlocfilehash: ab041e8473e310913eb1b794302415e9b6323e76
ms.sourcegitcommit: e4069b5613c10d74954185995d0fb73224079463
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/17/2022
ms.locfileid: '148169235'
---
В этой статье показано, как использовать API GraphQL для управления проектами. Дополнительные сведения об использовании API в рабочем процессе {% data variables.product.prodname_actions %} см. в разделе [Автоматизация {% data variables.product.prodname_projects_v2 %} с помощью Actions](/issues/planning-and-tracking-with-projects/automating-your-project/automating-projects-using-actions). Полный список доступных типов данных см. в [Справочнике](/graphql/reference).

{% data reusables.projects.graphql-deprecation %}

## Аутентификация

{% curl %}

Во всех приведенных ниже примерах cURL замените `TOKEN` на маркер, имеющий область `read:project` (для запросов) или область `project` (для запросов и изменений). Маркер может быть {% data variables.product.pat_v1 %} для пользователя или маркером доступа к установке для {% data variables.product.prodname_github_app %}. Дополнительные сведения о создании {% data variables.product.pat_generic %} см. в разделе [Создание {% data variables.product.pat_generic %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token). Дополнительные сведения о создании маркера доступа установки для {% data variables.product.prodname_github_app %} см. в разделе [Проверка подлинности с помощью {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps/authenticating-with-github-apps#authenticating-as-a-github-app).

{% endcurl %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Перед выполнением команд {% data variables.product.prodname_cli %} необходимо выполнить проверку подлинности с помощью команды `gh auth login --scopes "project"`. Если требуется только чтение, без редактирования проектов, можно указать область `read:project` вместо `project`. Дополнительные сведения о проверке подлинности в командной строке см. в описании команды [gh auth login](https://cli.github.com/manual/gh_auth_login).

{% endcli %}

{% cli %}

## Использование переменных

Во всех следующих примерах переменные можно использовать для упрощения сценариев. Используйте ключ `-F` для передачи переменной, которая является числом, логическим значением или NULL. Используйте ключ `-f` для других переменных. Например,

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

Дополнительные сведения см. в разделе [Формирование вызовов с помощью GraphQL](/graphql/guides/forming-calls-with-graphql#working-with-variables).

{% endcli %}

## Поиск сведений о проектах

Используйте запросы для получения данных о проектах. Дополнительные сведения см. в разделе [Сведения о запросах](/graphql/guides/forming-calls-with-graphql#about-queries).

### Поиск идентификатора узла для проекта организации

Чтобы обновить проект с помощью API, необходимо знать идентификатор узла проекта.

Идентификатор узла проекта организации можно найти, если вы знаете название организации и номер проекта. Замените `ORGANIZATION` названием организации. Например, `octo-org`. Замените `NUMBER` номером проекта. Чтобы найти номер проекта, просмотрите URL-адрес проекта. Например, у `https://github.com/orgs/octo-org/projects/5` номер 5.

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

Можно также найти идентификаторы узлов для всех проектов в организации. В следующем примере возвращается идентификаторы узлов и заголовки первых 20 проектов в организации. Замените `ORGANIZATION` названием организации. Например, `octo-org`.

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

### Поиск идентификатора узла для проекта пользователя 

Чтобы обновить проект с помощью API, необходимо знать идентификатор узла проекта.

Идентификатор узла проекта пользователя можно найти, если вы знаете номер проекта. Замените `USER` именем пользователя. Например, `octocat`. Замените `NUMBER` номером проекта. Чтобы найти номер проекта, просмотрите URL-адрес проекта. Например, у `https://github.com/users/octocat/projects/5` номер 5.

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

Также можно найти идентификатор узла для всех своих проектов. В следующем примере возвращается идентификаторы узлов и заголовки первых 20 ваших проектов. Замените `USER` своим именем пользователя. Например, `octocat`.

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

### Поиск идентификатора узла для поля

Чтобы обновить значение поля, необходимо знать идентификатор узла поля. Кроме того, необходимо знать идентификатор параметров для полей одиночного выбора и идентификатор итерации для полей итерации.

В следующем примере возвращаются идентификатор, имя, параметры и конфигурация для первых 20 полей в проекте. Замените `PROJECT_ID` идентификатором узла для проекта.

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

Вы получите ответ следующего вида:

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

У каждого поля есть идентификатор и имя. Отдельные поля выбора возвращаются в формате объекта `ProjectV2SingleSelectField` и имеют поле `options`, в котором содержится идентификатор каждого варианта для одиночного выбора. Поля итерации возвращаются в формате объекта `ProjectV2IterationField` и содержат поле `configuration`, в котором есть поле `iterations` с идентификатором каждой итерации и сведениями о ней. 

Если вам нужны только имя и идентификатор поля, но не нужны сведения об итерациях и вариантах для поля с одиночным выбором, можно использовать объект `ProjectV2FieldCommon`. 

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

При использовании объекта `ProjectV2FieldCommon` вы получите ответ следующего вида:

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

### Поиск сведений о элементах в проекте 

Вы можете создать запрос к API, чтобы найти сведения о элементах проекта.

В следующем примере будут возвращены первые 20 проблем, запросов на вытягивание и черновиков проблем в проекте. Для проблем и запросов на вытягивание он также вернет заголовок и первые 10 уполномоченных. Для черновика проблемы он вернет заголовок и текст. Также в этом примере возвращаются имя и значение для любого поля с текстом, датой или единичным выбором из первых 8 полей проекта. Замените `PROJECT_ID` идентификатором узла для проекта.

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

Проект может содержать элементы, для которых у пользователя нет разрешения на просмотр. В этом случае возвращается тип элемента `REDACTED`.

## Обновление проектов 

Используйте изменения для обновления проектов. Дополнительные сведения см. в разделе [Сведения об изменениях](/graphql/guides/forming-calls-with-graphql#about-mutations).

{% note %}

**Примечание.** Нельзя добавить и обновить элемент в одном вызове. Необходимо использовать `addProjectV2ItemById` для добавления элемента, а затем использовать `updateProjectV2ItemFieldValue` для обновления элемента.

{% endnote %}

### Добавление элемента в проект

В следующем примере в проект будет добавлена проблема или запрос на вытягивание. Замените `PROJECT_ID` идентификатором узла для проекта. Замените `CONTENT_ID` идентификатором узла проблемы или запроса на вытягивание, который вы хотите добавить.

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

Ответ будет содержать идентификатор узла только что созданного элемента.

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

При попытке добавить существующий элемент будет возвращен идентификатор уже существующего элемента.

### Добавление черновика проблемы в проект

В следующем примере в проект будет добавлен черновик проблемы. Замените `PROJECT_ID` идентификатором узла для проекта. Замените `TITLE` и `BODY` нужным содержимым для нового черновика проблемы.

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

Ответ будет содержать идентификатор узла только что созданного черновика проблемы.

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

### Обновление параметров проекта 

В следующем примере будут обновлены параметры проекта. Замените `PROJECT_ID` идентификатором узла для проекта. Установите для `public`значение `true`, чтобы сделать проект общедоступным в {% data variables.product.product_name %}. Измените параметр `readme`, чтобы внести изменения в файл README проекта.

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

### Обновление настраиваемого поля текста, числа или даты 

В следующем примере будет обновлено значение текстового поля для элемента. Замените `PROJECT_ID` идентификатором узла для проекта. Замените `ITEM_ID` идентификатором узла элемента, который нужно обновить. Замените `FIELD_ID` идентификатором поля, которое нужно обновить.

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

**Примечание.** `updateProjectV2ItemFieldValue` нельзя использовать для изменения `Assignees`, `Labels`, `Milestone` или `Repository`, поскольку эти поля являются свойствами запросов на вытягивание и проблем, а не элементов проекта. Вместо этого можно использовать следующие изменения:

- [addAssigneesToAssignable](/graphql/reference/mutations#addassigneestoassignable)
- [removeAssigneesFromAssignable](/graphql/reference/mutations#removeassigneesfromassignable)
- [addLabelsToLabelable](/graphql/reference/mutations#addlabelstolabelable)
- [removeLabelsFromLabelable](/graphql/reference/mutations#removelabelsfromlabelable)
- [updateIssue](/graphql/reference/mutations#updateissue)
- [updatePullRequest](/graphql/reference/mutations#updatepullrequest)
- [transferIssue](/graphql/reference/mutations#transferissue)

{% endnote %}

### Обновление поля одиночного выбора

В следующем примере будет обновлено значение поля одиночного выбора для элемента.

- `PROJECT_ID` — замените идентификатором узла для проекта.
- `ITEM_ID` — замените идентификатором узла элемента, который нужно обновить.
- `FIELD_ID` — замените идентификатором поля одиночного выбора, которое нужно обновить.
- `OPTION_ID` — замените идентификатором нужного параметра одиночного выбора.

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

### Обновление поля итерации

В следующем примере будет обновлено значение поля итерации для элемента.

- `PROJECT_ID` — замените идентификатором узла для проекта.
- `ITEM_ID` — замените идентификатором узла элемента, который нужно обновить.
- `FIELD_ID` — замените идентификатором поля итерации, которое нужно обновить.
- `ITERATION_ID` — замените идентификатором требуемой итерации. Это может быть активная или завершенная итерация.

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: Bearer TOKEN' \
  --data '{"query":"mutation {updateProjectV2ItemFieldValue( input: { projectId: \"PROJECT_ID\" itemId: \"ITEM_ID\" fieldId: \"FIELD_ID\" value: { iterationId: \"ITERATION_ID\" }}) { projectV2Item { id }}}"}'
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

### Удаление элемента из проекта

В следующем примере элемент удаляется из проекта. Замените `PROJECT_ID` идентификатором узла для проекта. Замените `ITEM_ID` идентификатором узла элемента, который нужно удалить.

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

## Управление проектами 

### Создание проектов

Вы можете использовать изменение для создания нового проекта. Дополнительные сведения см. в разделе [Сведения об изменениях](/graphql/guides/forming-calls-with-graphql#about-mutations).

Чтобы создать проект с помощью API, необходимо указать имя проекта и идентификатор узла пользователя или организации {% data variables.product.product_name %}, которые станут владельцем проекта.

Вы можете найти идентификатор узла пользователя или организации {% data variables.product.product_name %}, если вы знаете имя пользователя. Замените <code>GITHUB_OWNER</code> именем пользователя {% data variables.product.product_name %} нового владельца проекта.

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

Чтобы создать проект, замените `OWNER_ID` идентификатором узла нового владельца проекта, а замените `PROJECT_NAME` именем проекта.

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


## Использование веб-перехватчиков

Вы можете использовать веб-перехватчики для подписки на события, происходящие в проекте. Например, при изменении элемента {% data variables.product.product_name %} может отправлять полезные данные HTTP POST в настроенный URL-адрес веб-перехватчика, который может активировать автоматизацию на сервере. Дополнительные сведения о веб-перехватчиках см. в статье [Сведения о веб-перехватчиках](/developers/webhooks-and-events/webhooks/about-webhooks). Дополнительные сведения о событии веб-перехватчика `projects_v2_item` см. в разделе [События и полезные данные веб-перехватчика](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#projects_v2_item).
