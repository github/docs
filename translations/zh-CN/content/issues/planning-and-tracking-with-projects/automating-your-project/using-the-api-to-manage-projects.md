---
title: '使用 API 管理 {% data variables.product.prodname_projects_v2 %}'
shortTitle: Automating with the API
intro: 可使用 GraphQL API 自动执行项目。
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
ms.contentlocale: zh-CN
ms.lasthandoff: 10/27/2022
ms.locfileid: '148111599'
---
本文演示如何使用 GraphQL API 来管理项目。 有关如何在 {% data variables.product.prodname_actions %} 工作流中使用 API 的详细信息，请参阅“[使用 Actions 自动执行 {% data variables.product.prodname_projects_v2 %}](/issues/planning-and-tracking-with-projects/automating-your-project/automating-projects-using-actions)”。 有关可用数据类型的完整列表，请参阅“[参考](/graphql/reference)”。

{% data reusables.projects.graphql-deprecation %}

## 身份验证

{% curl %}

在所有下面的 cURL 示例中，将 `TOKEN` 替换为具有 `read:project` 范围（对于查询）或 `project` 范围（对于查询和突变）的令牌。 令牌可以是用户的 {% data variables.product.pat_v1 %}，也可以是 {% data variables.product.prodname_github_app %} 的安装访问令牌。 有关创建 {% data variables.product.pat_generic %} 的详细信息，请参阅“[创建 {% data variables.product.pat_generic %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)”。 有关为 {% data variables.product.prodname_github_app %} 创建安装访问令牌的详细信息，请参阅“[使用 {% data variables.product.prodname_github_apps %} 进行身份验证](/developers/apps/building-github-apps/authenticating-with-github-apps#authenticating-as-a-github-app)”。

{% endcurl %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

在运行 {% data variables.product.prodname_cli %} 命令之前，必须通过运行 `gh auth login --scopes "project"` 进行身份验证。 如果只需要阅读而不是编辑项目，则可以提供 `read:project` 范围而不是 `project`。 有关命令行身份验证的详细信息，请参阅“[gh auth login](https://cli.github.com/manual/gh_auth_login)”。

{% endcli %}

{% cli %}

## 使用变量

在以下所有示例中，您可以使用变量来简化脚本。 使用 `-F` 传递是数字、布尔值或空值的变量。 对其他变量使用 `-f`。 例如，

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

有关详细信息，请参阅“[使用 GraphQL 形成调用](/graphql/guides/forming-calls-with-graphql#working-with-variables)”。

{% endcli %}

## 查找项目信息

使用查询获取项目数据。 有关详细信息，请参阅“[关于查询](/graphql/guides/forming-calls-with-graphql#about-queries)”。

### 查找组织项目的节点 ID

要通过 API 更新您的项目，您需要知道项目的节点 ID。

如果您知道组织名称和项目编号，则可以找到组织项目的节点 ID。 将 `ORGANIZATION` 替换为组织的名称。 例如，`octo-org`。 将 `NUMBER` 替换为项目编号。 要查找项目编号，请查看项目 URL。 例如，`https://github.com/orgs/octo-org/projects/5` 的项目编号为 5。

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

您也可以在组织中找到所有项目的节点 ID。 下面的示例将返回组织中前 20 个项目的节点 ID 和标题。 将 `ORGANIZATION` 替换为组织的名称。 例如，`octo-org`。

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

### 查找用户项目的节点 ID 

要通过 API 更新您的项目，您需要知道项目的节点 ID。

如果您知道项目编号，则可以找到用户项目的节点 ID。 请将 `USER` 替换为你的用户名。 例如，`octocat`。 将 `NUMBER` 替换为项目编号。 要查找项目编号，请查看项目 URL。 例如，`https://github.com/users/octocat/projects/5` 的项目编号为 5。

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

您还可以找到所有项目的节点 ID。 以下示例将返回前 20 个项目的节点 ID 和标题。 将 `USER` 替换为你的用户名。 例如，`octocat`。

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

### 查找字段的节点 ID

要更新字段的值，您需要知道字段的节点 ID。 此外，您还需要知道单个选择字段的选项 ID 和迭代字段的迭代 ID。

以下示例将返回项目中前 20 个字段的 ID、名称、设置和配置。 将 `PROJECT_ID` 替换为项目的节点 ID。

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

响应将如以下示例中所示：

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

每个字段都有一个 ID 和名称。 单选字段作为 `ProjectV2SingleSelectField` 对象返回，并有一个 `options` 字段，可以在其中找到单选每个选项的 ID。 迭代字段作为 `ProjectV2IterationField` 对象返回，并具有一个 `configuration` 字段，其中包括一个 `iterations` 字段，该字段包含有关每次迭代的 ID 和信息。 

如果只需要字段的名称和 ID，而不需要有关迭代或单个选择字段选项的信息，则可以使用 `ProjectV2FieldCommon` 对象。 

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

使用 `ProjectV2FieldCommon` 对象时的响应类似于以下示例：

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

### 查找项目中各项的信息 

您可以查询 API 来查找项目中各项的信息。

以下示例将返回项目中的前 20 个问题、拉取请求和草稿问题。 对于问题和拉取请求，它还将返回标题和前 10 个被分派人。 对于草稿问题，它将返回标题和正文。 该示例还将返回项目前 8 个字段中任何文本、日期或单个选择字段的字段名称和值。 将 `PROJECT_ID` 替换为项目的节点 ID。

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

项目可能包含用户无权查看的项。 在这种情况下，项目类型将返回为 `REDACTED`。

## 更新项目 

使用突变来更新项目。 有关详细信息，请参阅“[关于变更](/graphql/guides/forming-calls-with-graphql#about-mutations)”。

{% note %}

注意：你不能在同一调用中添加和更新项。 你必须使用 `addProjectV2ItemById` 来添加项，然后使用 `updateProjectV2ItemFieldValue` 来更新项。

{% endnote %}

### 添加项到项目

以下示例将向您的项目添加议题或拉取请求。 将 `PROJECT_ID` 替换为项目的节点 ID。 将 `CONTENT_ID` 替换为议题的节点 ID 或你想要添加的拉取请求。

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

响应将包含新建项目的节点 ID。

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

如果您尝试添加已经存在的项，则返回现有项 ID。

### 向项目添加草稿问题

以下示例将向项目添加草稿问题。 将 `PROJECT_ID` 替换为项目的节点 ID。 将 `TITLE` 和 `BODY` 替换为新草稿问题所需的内容。

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

响应将包含新建的草稿问题的节点 ID。

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

### 更新项目的设置 

以下示例将更新项目的设置。 将 `PROJECT_ID` 替换为项目的节点 ID。 将 `public` 设置为 `true`，以便在 {% data variables.product.product_name %} 上公开你的项目。 修改 `readme` 以对项目的 README 进行更改。

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

### 更新自定义文本、数字或日期字段 

以下示例将更新项目的文本字段的值。 将 `PROJECT_ID` 替换为项目的节点 ID。 将 `ITEM_ID` 替换为你想要更新的项的节点 ID。 将 `FIELD_ID` 替换为你想要更新的字段的 ID。

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

注意：你不能使用 `updateProjectV2ItemFieldValue` 更改 `Assignees`、`Labels`、`Milestone` 或 `Repository`，因为这些字段是拉取请求和议题，而不是项目项的属性。 相反，可以使用以下突变：

- [addAssigneesToAssignable](/graphql/reference/mutations#addassigneestoassignable)
- [removeAssigneesFromAssignable](/graphql/reference/mutations#removeassigneesfromassignable)
- [addLabelsToLabelable](/graphql/reference/mutations#addlabelstolabelable)
- [removeLabelsFromLabelable](/graphql/reference/mutations#removelabelsfromlabelable)
- [updateIssue](/graphql/reference/mutations#updateissue)
- [updatePullRequest](/graphql/reference/mutations#updatepullrequest)
- [transferIssue](/graphql/reference/mutations#transferissue)

{% endnote %}

### 更新单选字段

下面的示例将更新项的单选字段值。

- `PROJECT_ID` - 将此值替换为项目的节点 ID。
- `ITEM_ID` - 将此值替换为你想要更新的项的节点 ID。
- `FIELD_ID` - 将此值替换为你想要更新的单选字段的 ID。
- `OPTION_ID` - 将此值替换为所需单选选项的 ID。

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

### 更新迭代字段

下面的示例将更新项的迭代字段值。

- `PROJECT_ID` - 将此值替换为项目的节点 ID。
- `ITEM_ID` - 将此值替换为你想要更新的项的节点 ID。
- `FIELD_ID` - 将此值替换为你想要更新的迭代字段的 ID。
- `ITERATION_ID` - 将此值替换为所需迭代的 ID。 这可以是活动的或已完成的迭代。

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

### 从项目中删除项

下面的示例将从项目中删除一个项。 将 `PROJECT_ID` 替换为项目的节点 ID。 将 `ITEM_ID` 替换为你想要删除的项的节点 ID。

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

## 管理项目 

### 创建项目

可以使用突变来创建新项目。 有关详细信息，请参阅“[关于变更](/graphql/guides/forming-calls-with-graphql#about-mutations)”。

若要使用 API 创建新项目，需要提供项目的名称以及将成为项目所有者的 {% data variables.product.product_name %} 用户或组织的节点 ID。

如果知道用户名，则可以找到 {% data variables.product.product_name %} 用户或组织的节点 ID。 将 <code>GITHUB_OWNER</code> 替换为新项目所有者的 {% data variables.product.product_name %} 用户名。

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

若要创建项目，请将 `OWNER_ID` 替换为新项目所有者的节点 ID，并将 `PROJECT_NAME` 替换为项目的名称。

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


## 使用 Webhook

可使用 Webhook 来订阅项目中发生的事件。 例如，编辑某项时，{% data variables.product.product_name %} 可以将 HTTP POST 有效负载发送到 Webhook 的配置 URL，从而在服务器上触发自动化。 有关 Webhook 的详细信息，请参阅“[关于 Webhook](/developers/webhooks-and-events/webhooks/about-webhooks)”。 要详细了解 [ Webhook 事件，请参阅“`projects_v2_item`Webhook 事件和有效负载](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#projects_v2_item)”。
