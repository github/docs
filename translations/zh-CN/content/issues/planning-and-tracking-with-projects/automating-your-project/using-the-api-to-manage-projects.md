---
title: 'Using the API to manage {% data variables.product.prodname_projects_v2 %}'
shortTitle: Automating with the API
intro: You can use the GraphQL API to automate your projects.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/using-the-api-to-manage-projects
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
---

本文演示如何使用 GraphQL API 来管理项目。 For more information about how to use the API in a {% data variables.product.prodname_actions %} workflow, see "[Automating {% data variables.product.prodname_projects_v2 %} using Actions](/issues/planning-and-tracking-with-projects/automating-your-project/automating-projects-using-actions)." 有关可用数据类型的完整列表，请参阅“[参考](/graphql/reference)”。

{% data reusables.projects.graphql-deprecation %}

## 身份验证

{% curl %}

在所有下面的 cURL 示例中， 将 `TOKENN` 替换为具有 `read:project` 范围（对于查询）或 `project` 范围（对于查询和突变）的令牌。 令牌可以是用户的个人访问令牌，也可以是 {% data variables.product.prodname_github_app %} 的安装访问令牌。 有关创建个人访问令牌的更多信息，请参阅“[创建个人访问令牌](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)”。 有关为 {% data variables.product.prodname_github_app %} 创建安装访问令牌的详细信息，请参阅“[使用 {% data variables.product.prodname_github_apps %} 进行身份验证](/developers/apps/building-github-apps/authenticating-with-github-apps#authenticating-as-a-github-app)”。

{% endcurl %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

在运行 {% data variables.product.prodname_cli %} 命令之前，必须通过运行 `gh auth login --scopes "project"` 进行身份验证。 如果只需要读取项目，而不需要编辑项目，则可以提供 `read:project` 范围，而不是 `project`。 有关命令行身份验证的更多信息，请参阅 "[gh auth login](https://cli.github.com/manual/gh_auth_login)"。

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

更多信息请参阅“[使用 GraphQL 创建调用](/graphql/guides/forming-calls-with-graphql#working-with-variables)”。

{% endcli %}

## 查找项目信息

使用查询获取项目数据。 更多信息请参阅“[关于查询](/graphql/guides/forming-calls-with-graphql#about-queries)。”

### 查找组织项目的节点 ID

要通过 API 更新您的项目，您需要知道项目的节点 ID。

如果您知道组织名称和项目编号，则可以找到组织项目的节点 ID。 将 `ORGANIZATION` 替换为您的组织名称。 例如 `octo-org`。 将 `NUMBER` 替换为项目编号。 要查找项目编号，请查看项目 URL。 例如，`https://github.com/orgs/octo-org/projects/5` 有一个编号为 5 的项目。

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

您也可以在组织中找到所有项目的节点 ID。 下面的示例将返回组织中前 20 个项目的节点 ID 和标题。 将 `ORGANIZATION` 替换为您的组织名称。 例如 `octo-org`。

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

### 查找用户项目的节点 ID

要通过 API 更新您的项目，您需要知道项目的节点 ID。

如果您知道项目编号，则可以找到用户项目的节点 ID。 将 `USER` 替换为您的用户名。 例如 `octocat`。 将 `NUMBER` 替换为项目编号。 要查找项目编号，请查看项目 URL。 例如，`https://github.com/users/octocat/projects/5` 有一个编号为 5 的项目。

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

您还可以找到所有项目的节点 ID。 以下示例将返回前 20 个项目的节点 ID 和标题。 将 `USER` 替换为您的用户名。 例如 `octocat`。

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

### 查找字段的节点 ID

要更新字段的值，您需要知道字段的节点 ID。 此外，您还需要知道单个选择字段的选项 ID 和迭代字段的迭代 ID。

下面的示例将返回项目中前 20 个字段的 ID、名称、设置和配置。 将 `PROJECT_ID` 替换为项目的节点 ID。

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

响应将类似于以下示例：

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

每个字段都有 ID 和名称。 单选字段作为 `ProjectV2SingleSelectField` 对象返回，并具有 `options` 字段，您可以在其中找到每个单选选项的 ID。 迭代字段作为 `ProjectV2IterationField` 对象返回，并具有`配置` 字段，其中包括一个包含 ID 和有关每次迭代信息的`迭代`字段。

如果只需要字段的名称和 ID，而不需要有关迭代或单个选择字段选项的信息，则可以使用 `ProjectV2FieldCommon` 对象。

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
}'
```
{% endcli %}

使用 `ProjectV2FieldCommon` 对象时的响应将类似于以下示例：

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

下面的示例将返回项目中的前 20 个议题、拉取请求和草稿议题。 对于议题和拉取请求，它还将返回标题和前 10 个受理人。 对于草稿议题，它将返回标题和正文。 该示例还将返回项目前 8 个字段中任何文本、日期或单选字段的字段名称和值。 将 `PROJECT_ID` 替换为项目的节点 ID。

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

项目可能包含用户无权查看的项。 在这种情况下，项目类型将作为 `REDACTED` 返回。

## 更新项目

使用突变来更新项目。 更多信息请参阅“[关于突变](/graphql/guides/forming-calls-with-graphql#about-mutations)。”

{% note %}

**注意：** 您不能在同一调用中添加和更新项。 您必须使用 `addProjectV2ItemById` 来添加项目，然后使用 `updateProjectV2ItemFieldValue` 来更新该项目。

{% endnote %}

### 添加项到项目

以下示例将向您的项目添加议题或拉取请求。 将 `PROJECT_ID` 替换为项目的节点 ID。 将 `CONT_ID` 替换为议题的节点 ID 或您想要添加的拉取请求。

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

### 向项目添加草稿议题

下面的示例将向项目添加草稿议题。 将 `PROJECT_ID` 替换为项目的节点 ID。 将 `TITLE` 和 `BODY` 替换为新草稿议题所需的内容。

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

响应将包含新建草稿议题的节点 ID。

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

### 更新项目的设置

以下示例将更新项目的设置。 将 `PROJECT_ID` 替换为项目的节点 ID。 将 `public` 设置为 `true` ，以便在 {% data variables.product.product_name %} 上公开您的项目。 修改 `readme` 以对项目的 README 进行更改。

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

### 更新自定义文本、数字或日期字段

下面的示例将更新项目的文本字段值。 将 `PROJECT_ID` 替换为项目的节点 ID。 将 `ITEM_ID` 替换为您想要更新的项的节点 ID。 将 `FIELD_ID` 替换为您想要更新的字段的 ID。

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

**注意：** 您不能使用 `updateProjectV2ItemFieldValue` 更改 `Assignees`、`Labels`、`Milestone` 或 `Repository`，因为这些字段是拉取请求和议题，而不是项目项的属性。 相反，您可以使用以下突变：

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

- `PROJECT_ID` - 用项目节点 ID 替换。
- `ITEM_ID` - 替换为您想要更新的项的节点 ID。
- `FIELD_ID` -  替换为您想要更新的单选字段的 ID。
- `OPTION_ID` - 替换为所需单选选项的 ID。

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

### 更新迭代字段

下面的示例将更新项的迭代字段值。

- `PROJECT_ID` - 用项目节点 ID 替换。
- `ITEM_ID` - 替换为您想要更新的项的节点 ID。
- `FIELD_ID` -  替换为您想要更新的迭代字段的 ID。
- `ITERATION_ID` - 替换为所需迭代的 ID。 这可以是活动的迭代，也可以是已完成的迭代。

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

### 从项目中删除项

下面的示例将从项目中删除一个项。 将 `PROJECT_ID` 替换为项目的节点 ID。 将 `ITEM_ID` 替换为您想要删除的项的节点 ID。

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

## Using webhooks

You can use webhooks to subscribe to events taking place in your project. For example, when an item is edited, {% data variables.product.product_name %} can send a HTTP POST payload to the webhook's configured URL which can trigger automation on your server. For more information about webhooks, see "[About webhooks](/developers/webhooks-and-events/webhooks/about-webhooks)." To learn more about the `projects_v2_item` webhook event, see "[Webhook events and payloads](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#projects_v2_item)."
