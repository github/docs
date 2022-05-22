---
title: 使用 API 管理项目（测试版）
intro: 您可以使用 GraphQL API 来查找有关项目的信息并更新项目。
versions:
  fpt: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
type: how_to
topics:
  - Projects
---

本文演示如何使用 GraphQL API 来管理项目。 For more information about how to use the API in a {% data variables.product.prodname_actions %} workflow, see "[Automating projects (beta)](/issues/trying-out-the-new-projects-experience/automating-projects)." For a full list of the available data types, see "[Reference](/graphql/reference)."

{% data reusables.projects.projects-beta %}

## 身份验证

{% include tool-switcher %}

{% curl %}

在所有下面的 cURL 示例中， 将 `TOKENN` 替换为具有 `read:org` 范围（对于查询）或 `write:org` 范围（对于查询和突变）的令牌。 The token can be a personal access token for a user or an installation access token for a {% data variables.product.prodname_github_app %}. For more information about creating a personal access token, see "[Creating a personal access token](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)." For more information about creating an installation access token for a {% data variables.product.prodname_github_app %}, see "[Authenticating with {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps/authenticating-with-github-apps#authenticating-as-a-github-app)."

{% endcurl %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Before running {% data variables.product.prodname_cli %} commands, you must authenticate by running `gh auth login --scopes "write:org"`. If you only need to read, but not edit, projects, you can omit the `--scopes` argument. 有关命令行身份验证的更多信息，请参阅 "[gh auth login](https://cli.github.com/manual/gh_auth_login)"。

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
      projectNext(number: $number) {
        id
      }
    }
  }' -f organization=$my_org -F number=$my_num
```

更多信息请参阅“[使用 GraphQL 创建调用]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/guides/forming-calls-with-graphql#working-with-variables)”。

{% endcli %}

## 查找项目信息

使用查询获取项目数据。 更多信息请参阅“[关于查询]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/guides/forming-calls-with-graphql#about-queries)。”

### Finding the node ID of an organization project

要通过 API 更新您的项目，您需要知道项目的节点 ID。

You can find the node ID of an organization project if you know the organization name and project number. 将 `ORGANIZATION` 替换为您的组织名称。 例如 `octo-org`。 Replace `NUMBER` with the project number. 要查找项目编号，请查看项目 URL。 例如，`https://github.com/orgs/octo-org/projects/5` 有一个编号为 5 的项目。

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

您也可以在组织中找到所有项目的节点 ID。 下面的示例将返回组织中前 20 个项目的节点 ID 和标题。 将 `ORGANIZATION` 替换为您的组织名称。 例如 `octo-org`。

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

要通过 API 更新您的项目，您需要知道项目的节点 ID。

You can find the node ID of a user project if you know the project number. Replace `USER` with your user name. 例如 `octocat`。 将 `NUMBER` 替换为项目编号。 要查找项目编号，请查看项目 URL。 例如，`https://github.com/users/octocat/projects/5` 有一个编号为 5 的项目。

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

You can also find the node ID for all of your projects. The following example will return the node ID and title of your first 20 projects. Replace `USER` with your username. 例如 `octocat`。

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

### 查找字段的节点 ID

要更新字段的值，您需要知道字段的节点 ID。 Additionally, you will need to know the ID of the options for single select fields and the ID of the iterations for iteration fields.

下面的示例将返回项目中前 20 个字段的 ID、名称和设置。 将 `PROJECT_ID` 替换为项目的节点 ID。

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

响应将类似于以下示例：

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

每个字段都有 ID。 Additionally, single select fields and iteration fields have a `settings` value. In the single select settings, you can find the ID of each option for the single select. In the iteration settings, you can find the duration of the iteration, the start day of the iteration (from 1 for Monday to 7 for Sunday), the list of incomplete iterations, and the list of completed iterations. For each iteration in the lists of iterations, you can find the ID, title, duration, and start date of the iteration.

### 查找项目中各项的信息

您可以查询 API 来查找项目中各项的信息。

下面的示例将返回项目中前 20 个字段的名称和 ID。 对于每个项目，它还将返回项目前 8 个字段的值和名称。 如果项目是议题或拉取请求，它将返回前 10 个受理人的登录名。 将 `PROJECT_ID` 替换为项目的节点 ID。

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

项目可能包含用户无权查看的项。 在这种情况下，响应将包括已编辑的项。

```shell
{
  "node": {
  "title": "You can't see this item",
  ...
  }
}
```

## 更新项目

使用突变来更新项目。 For more information, see "[About mutations]({% ifversion ghec %}/free-pro-team@latest{% endif %}/graphql/guides/forming-calls-with-graphql#about-mutations)."

{% note %}

**注意：** 您不能在同一调用中添加和更新项。 您必须使用 `addProjectNextitem` 来添加项，然后使用 `updateProjectNextItemfield` 来更新项。

{% endnote %}

### 添加项到项目

以下示例将向您的项目添加议题或拉取请求。 将 `PROJECT_ID` 替换为项目的节点 ID。 将 `CONT_ID` 替换为议题的节点 ID 或您想要添加的拉取请求。

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

响应将包含新建项目的节点 ID。

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

如果您尝试添加已经存在的项，则返回现有项 ID。

### Updating a custom text, number, or date field

The following example will update the value of a date field for an item. 将 `PROJECT_ID` 替换为项目的节点 ID。 将 `ITEM_ID` 替换为您想要更新的项的节点 ID。 将 `FIELD_ID` 替换为您想要更新的字段的 ID。

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

**注意：** 您不能使用 `updateProjectNextItemField` 更改 `Assignees`、`Labels`、`Milestone` 或 `Repository`，因为这些字段是拉取请求和议题，而不是项目项的属性。 Instead, you must use the [addAssigneesToAssignable]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/reference/mutations#addassigneestoassignable), [removeAssigneesFromAssignable]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/reference/mutations#removeassigneesfromassignable), [addLabelsToLabelable]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/reference/mutations#addlabelstolabelable), [removeLabelsFromLabelable]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/reference/mutations#removelabelsfromlabelable), [updateIssue]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/reference/mutations#updateissue), [updatePullRequest]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/reference/mutations#updatepullrequest), or [transferIssue]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/reference/mutations#transferissue) mutations.

{% endnote %}

### Updating a single select field

The following example will update the value of a single select field for an item.

- `PROJECT_ID` - 用项目节点 ID 替换。
- `ITEM_ID` - 替换为您想要更新的项的节点 ID。
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

- `PROJECT_ID` - 用项目节点 ID 替换。
- `ITEM_ID` - 替换为您想要更新的项的节点 ID。
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

### 从项目中删除项

下面的示例将从项目中删除一个项。 将 `PROJECT_ID` 替换为项目的节点 ID。 将 `ITEM_ID` 替换为您想要删除的项的节点 ID。

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
