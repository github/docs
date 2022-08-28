---
title: 使用 API 管理项目（测试版）
intro: 您可以使用 GraphQL API 来查找有关项目的信息并更新项目。
versions:
  fpt: '*'
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
type: how_to
topics:
  - Projects
---

本文演示如何使用 GraphQL API 来管理项目。

{% data reusables.projects.projects-beta %}

{% data reusables.projects.api-beta %}

## 身份验证

{% include tool-switcher %}

{% curl %}

在所有下面的 cURL 示例中， 将 `TOKENN` 替换为具有 `read:org` 范围（对于查询）或 `write:org` 范围（对于查询和突变）的令牌。 有关创建令牌的更多信息，请参阅“[创建个人访问令牌](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)”。

{% endcurl %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

在运行 {% data variables.product.prodname_cli %} 命令之前， 您必须运行 `gh auth login` 并提供具有 `read:org` scope（用于查询）或 `write:org`（用于查询和突变）范围的验证令牌。 在测试期间，您将无法使用 Web 浏览器进行身份验证。 有关命令行身份验证的更多信息，请参阅 "[gh auth login](https://cli.github.com/manual/gh_auth_login)"。 有关创建令牌的更多信息，请参阅“[创建个人访问令牌](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)”。

{% endcli %}

{% cli %}

## 使用变量

在以下所有示例中，您可以使用变量来简化脚本。 使用 `-F` 传递是数字、布尔值或空值的变量。 对其他变量使用 `-f`。 例如，

```shell
my_org="octo-org"
my_num=5
gh api graphql --header 'GraphQL-Features: projects_next_graphql' -f query='
  query($organization: String! $number: Int!){
    organization(login: $organization){
      projectNext(number: $number) {
        id
      }
    }
  }' -f organization=$my_org -F number=$my_num
```

更多信息请参阅“[使用 GraphQL 创建调用](/graphql/guides/forming-calls-with-graphql#working-with-variables)”。

{% endcli %}

## 查找项目信息

使用查询获取项目数据。 更多信息请参阅“[关于查询](/graphql/guides/forming-calls-with-graphql#about-queries)。”

### 查找项目的节点 ID

要通过 API 更新您的项目，您需要知道项目的节点 ID。

如果知道组织的名称和项目编号，则可以找到项目的节点 ID。 将 `ORGANIZATION` 替换为您的组织名称。 例如 `octo-org`。 将 `NUMBER` 替换为项目编号。 要查找项目编号，请查看项目 URL。 例如，`https://github.com/orgs/octo-org/projects/5` 有一个编号为 5 的项目。

{% include tool-switcher %}

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --header 'GraphQL-Features: projects_next_graphql' \
  --data '{"query":"query{organization(login: \"<em>ORGANIZATION</em>\") {projectNext(number: <em>NUMBER</em>){id}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql --header 'GraphQL-Features: projects_next_graphql' -f query='
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
  --header 'GraphQL-Features: projects_next_graphql' \
  --data '{"query":"{organization(login: \"<em>ORGANIZATION</em>\") {projectsNext(first: 20) {nodes {id title}}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql --header 'GraphQL-Features: projects_next_graphql' -f query='
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

### 查找字段的节点 ID

要更新字段的值，您需要知道字段的节点 ID。 此外，对于单选字段，您需要知道选项的 ID。

下面的示例将返回项目中前 20 个字段的 ID、名称和设置。 将 `PROJECT_ID` 替换为项目的节点 ID。

{% include tool-switcher %}

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --header 'GraphQL-Features: projects_next_graphql' \
  --data '{"query":"query{node(id: \"<em>PROJECT_ID</em>\") {... on ProjectNext {fields(first: 20) {nodes {id name settings}}}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql --header 'GraphQL-Features: projects_next_graphql' -f query='
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
          }
        ]
      }
    }
  }
}
```

每个字段都有 ID。 此外，单选字段中的每个选项都有一个 ID。

### 查找项目中各项的信息

您可以查询 API 来查找项目中各项的信息。

下面的示例将返回项目中前 20 个字段的名称和 ID。 对于每个项目，它还将返回项目前 8 个字段的值和名称。 如果项目是议题或拉取请求，它将返回前 10 个受理人的登录名。 将 `PROJECT_ID` 替换为项目的节点 ID。

{% include tool-switcher %}

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --header 'GraphQL-Features: projects_next_graphql' \
  --data '{"query":"query{node(id: \"<em>PROJECT_ID</em>\") {... on ProjectNext {items(first: 20) {nodes{title id fieldValues(first: 8) {nodes{value projectField{name}}} content{...on Issue {assignees(first: 10) {nodes{login}}} ...on PullRequest {assignees(first: 10) {nodes{login}}}}}}}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql --header 'GraphQL-Features: projects_next_graphql' -f query='
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

使用突变来更新项目。 更多信息请参阅“[关于突变](/graphql/guides/forming-calls-with-graphql#about-mutations)。”

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
  --header 'GraphQL-Features: projects_next_graphql' \
  --data '{"query":"mutation {addProjectNextItem(input: {projectId: \"<em>PROJECT_ID</em>\" contentId: \"<em>CONTENT_ID</em>\"}) {projectNextItem {id}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql --header 'GraphQL-Features: projects_next_graphql' -f query='
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

### 更新自定义、非单选字段

下面的示例将更新日期字段。 将 `PROJECT_ID` 替换为项目的节点 ID。 将 `ITEM_ID` 替换为您想要更新的项的节点 ID。 将 `FIELD_ID` 替换为您想要更新的字段的 ID。

{% include tool-switcher %}

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --header 'GraphQL-Features: projects_next_graphql' \
  --data '{"query":"mutation {updateProjectNextItemField(input: {projectId: \"<em>PROJECT_ID</em>\" itemId: \"<em>ITEM_ID</em>\" fieldId: \"<em>FIELD_ID</em>\" value: \"2021-5-11\"}) {projectNextItem {id}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql --header 'GraphQL-Features: projects_next_graphql' -f query='
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

**注意：** 您不能使用 `updateProjectNextItemField` 更改 `Assignees`、`Labels`、`Milestone` 或 `Repository`，因为这些字段是拉取请求和议题，而不是项目项的属性。 而是必须使用 [addAssigneesToAssignable](/graphql/reference/mutations#addassigneestoassignable)、[removeAssigneesFromAssignable](/graphql/reference/mutations#removeassigneesfromassignable)、[addLabelsToLabelable](/graphql/reference/mutations#addlabelstolabelable)、[removeLabelsFromLabelable](/graphql/reference/mutations#removelabelsfromlabelable)、[updateIssue](/graphql/reference/mutations#updateissue)、[updatePullRequest](/graphql/reference/mutations#updatepullrequest) 或 [transferIssue](/graphql/reference/mutations#transferissue) 突变。

{% endnote %}

### 更新单选字段

下面的示例将更新日期字段。
- `PROJECT_ID` - 用项目节点 ID 替换。
- `ITEM_ID` - 替换为您想要更新的项的节点 ID。
- `FIELD_ID` -  替换为您想要更新的字段的 ID。
- `OPTION_ID` - 替换为所需值的 ID。

{% include tool-switcher %}

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --header 'GraphQL-Features: projects_next_graphql' \
  --data '{"query":"mutation {updateProjectNextItemField(input: {projectId: \"<em>PROJECT_ID</em>\" itemId: \"<em>ITEM_ID</em>\" fieldId: \"<em>FIELD_ID</em>\" value: \"<em>OPTION_ID</em>\"}) {projectNextItem {id}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql --header 'GraphQL-Features: projects_next_graphql' -f query='
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

### 从项目中删除项

下面的示例将从项目中删除一个项。 将 `PROJECT_ID` 替换为项目的节点 ID。 将 `ITEM_ID` 替换为您想要删除的项的节点 ID。

{% include tool-switcher %}

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --header 'GraphQL-Features: projects_next_graphql' \
  --data '{"query":"mutation {deleteProjectNextItem(input: {projectId: \"<em>PROJECT_ID</em>\" itemId: \"<em>ITEM_ID</em>\"}) {deletedItemId}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql --header 'GraphQL-Features: projects_next_graphql' -f query='
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

## 参考

### 对象

#### ProjectNext

- [可关闭](/graphql/reference/interfaces#closable)
- [Node](/graphql/reference/interfaces#node)
- [可更新](/graphql/reference/interfaces#updatable)

**字段**

| 名称                               | 描述                                                                                                                                                                                                             |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `closed` (`Boolean!`)            | `true`（如果项目已关闭）。                                                                                                                                                                                               |
| `closedAt` (`DateTime!`)         | 标识对象关闭的日期和时间。                                                                                                                                                                                                  |
| `createdAt` (`DateTime!`)        | 标识对象创建的日期和时间。                                                                                                                                                                                                  |
| `creator` (`Actor`)              | 最初创建项目的操作者。                                                                                                                                                                                                    |
| `databaseId` (`Int`)             | 识别数据库中的主键。                                                                                                                                                                                                     |
| `description` (`String`)         | 项目的描述。                                                                                                                                                                                                         |
| `fields` (`[ProjectNextField]!`) | 项目中的字段列表。<br><br>**参数**<br>`after` (`String`)：返回列表中指定光标后的元素。<br>`before` (`String`)：返回列表中指定光标前的元素。<br>`first` (`Int`)：返回列表中的前 *n* 个元素。<br>`last` (`Int`)：返回列表中的最后 *n* 个元素。 |
| `items` (`[ProjectNextItem]`)    | 项目中的项列表。<br><br>**参数**<br>`after` (`String`)：返回列表中指定光标后的元素。<br>`before` (`String`)：返回列表中指定光标前的元素。<br>`first` (`Int`)：返回列表中的前 *n* 个元素。<br>`last` (`Int`)：返回列表中的最后 *n* 个元素。  |
| `number` (`Int!`)                | 项目的编号。                                                                                                                                                                                                         |
| `owner` (`ProjectNextOwner!`)    | 项目的所有者。 目前仅限于组织。                                                                                                                                                                                               |
| `title` (`String!`)              | 项目名称。                                                                                                                                                                                                          |
| `updatedAt` (`DateTime!`)        | 标识上次更新对象的日期和时间。                                                                                                                                                                                                |
| `viewerCanUpdate` (`Boolean!`)   | 检查当前查看器是否可以更新此对象。                                                                                                                                                                                              |

#### ProjectNextConnection

ProjectNext 的连接类型。

| 名称                          | 描述          |
| --------------------------- | ----------- |
| `edges` ([ProjectNextEdge]) | 边缘列表。       |
| `nodes` ([ProjectNext])     | 节点列表。       |
| `pageInfo` (PageInfo!)      | 帮助分页的信息。    |
| `totalCount` (Int!)         | 标识连接中的项目总数。 |

#### ProjectNextEdge

| 名称                   | 描述       |
| -------------------- | -------- |
| `cursor` (String!)   | 用于分页的光标。 |
| `node` (ProjectCard) | 边缘末尾的项目。 |

#### ProjectNextField

项目内的字段。

| 名称                         | 描述              |
| -------------------------- | --------------- |
| `createdAt` (`DateTime!`)  | 标识对象创建的日期和时间。   |
| `name` (`String!`)         | 项目字段的名称。        |
| `project` (`ProjectNext!`) | 包含此字段的项目。       |
| `settings` (`String`)      | 项目字段设置的字符串表示.   |
| `updatedAt` (`DateTime!`)  | 标识上次更新对象的日期和时间。 |

#### ProjectNextFieldConnection

ProjectNextField 的连接类型。

| 名称                               | 描述          |
| -------------------------------- | ----------- |
| `edges` ([ProjectNextFieldEdge]) | 边缘列表。       |
| `nodes` ([ProjectNextField])     | 节点列表。       |
| `pageInfo` (PageInfo!)           | 帮助分页的信息。    |
| `totalCount` (Int!)              | 标识连接中的项目总数。 |

#### ProjectNextFieldEdge

| 名称                   | 描述       |
| -------------------- | -------- |
| `cursor` (String!)   | 用于分页的光标。 |
| `node` (ProjectCard) | 边缘末尾的项目。 |

#### ProjectNextItem

- [Node](/graphql/reference/interfaces#node)

`ProjectNext` 中的项目。

| 名称                                             | 描述                                                                                                                                                                                                            |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `content` (`ProjectNextItemContent`)           | 所引用的议题或拉取请求的内容。                                                                                                                                                                                               |
| `createdAt` (DateTime!)                        | 标识对象创建的日期和时间。                                                                                                                                                                                                 |
| `creator` (`Actor`)                            | 创建此项目的人员。                                                                                                                                                                                                     |
| `databaseId` (`Int`)                           | 识别数据库中的主键。                                                                                                                                                                                                    |
| `fieldValues` (`[ProjectNextItemFieldValue]!`) | 项的字段值列表。<br><br>**参数**<br>`after` (`String`)：返回列表中指定光标后的元素。<br>`before` (`String`)：返回列表中指定光标前的元素。<br>`first` (`Int`)：返回列表中的前 *n* 个元素。<br>`last` (`Int`)：返回列表中的最后 *n* 个元素。 |
| `project` (`ProjectNext!`)                     | 包含此项的项目。                                                                                                                                                                                                      |
| `title` (`String!`)                            | 项的名称。                                                                                                                                                                                                         |
| `updatedAt` (DateTime!)                        | 标识上次更新对象的日期和时间。                                                                                                                                                                                               |

#### ProjectNextItemContent

与 `ProjectNextItem` 关联的内容。

**类型：**

- `issue` - 表示议题
- `pull request` - 表示拉取请求。

#### ProjectNextItemConnection

ProjectNextItem 的连接类型。

| 名称                                | 描述          |
| --------------------------------- | ----------- |
| `edges` ([`ProjectNextItemEdge`]) | 边缘列表。       |
| `nodes` ([`ProjectNextItem`])     | 节点列表。       |
| `pageInfo` (`PageInfo!`)          | 帮助分页的信息。    |
| `totalCount` (`Int!`)             | 标识连接中的项目总数。 |

#### ProjectNextItemEdge

| 名称                     | 描述       |
| ---------------------- | -------- |
| `cursor` (`String!`)   | 用于分页的光标。 |
| `node` (`ProjectCard`) | 边缘末尾的项目。 |

#### ProjectNextItemFieldValue

- [Node](/graphql/reference/interfaces#node)

`ProjectNext` 中一个项的字段值。

| 名称                                   | 描述              |
| ------------------------------------ | --------------- |
| `createdAt` (`DateTime!`)            | 标识对象创建的日期和时间。   |
| `creator` (`Actor`)                  | 创建此项目的人员。       |
| `databaseId` (`Int`)                 | 识别数据库中的主键。      |
| `projectField` (`ProjectNextField!`) | 包含此值的项目字段。      |
| `projectItem` (`ProjectNextItem!`)   | 包含此值的项目项。       |
| `updatedAt` (`DateTime!`)            | 标识上次更新对象的日期和时间。 |
| `value`                              | 字段的值。           |

#### ProjectNextItemFieldValueConnection

ProjectNextItemFieldValue 的连接类型。

| 名称                                          | 描述          |
| ------------------------------------------- | ----------- |
| `edges` ([`ProjectNextItemFieldValueEdge`]) | 边缘列表。       |
| `nodes` ([`ProjectNextItemFieldValue`])     | 节点列表。       |
| `pageInfo` (`PageInfo!`)                    | 帮助分页的信息。    |
| `totalCount` (`Int!`)                       | 标识连接中的项目总数。 |

#### ProjectNextItemEdge

连接中的边缘。

| 名称                     | 描述       |
| ---------------------- | -------- |
| `cursor` (`String!`)   | 用于分页的光标。 |
| `node` (`ProjectCard`) | 边缘末尾的项目。 |

### 接口

#### ProjectNextOwner

表示项目的所有者。

**实施者**

- `组织`

**字段**

| 名称                                        | 描述                                                                                                                                                                                                               |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `projectNext` (`ProjectNext`)             | 按编号查找项目。<br><br>**参数**<br>`number` (`Int!`)：要查找的项目编号。                                                                                                                                          |
| `projectsNext` (`ProjectNextConnection!`) | 项目所有者下项的列表。<br><br>**参数**<br>`after` (`String`)：返回列表中指定光标后的元素。<br>`before` (`String`)：返回列表中指定光标前的元素。<br>`first` (`Int`)：返回列表中的前 *n* 个元素。<br>`last` (`Int`)：返回列表中的最后 *n* 个元素。 |

### 突变

#### addProjectNextItem

将现有项（Issue 或 PullRequest）添加到项目。

**输入字段**

- `input`(`AddProjectNextItemInput!`)

**返回字段**

| 名称                                    | 描述             |
| ------------------------------------- | -------------- |
| `clientMutationId` (`String`)         | 进行突变的客户端唯一标识符。 |
| `projectNextItem` (`ProjectNextItem`) | 添加到项目的项。       |

#### updateProjectNextItemField

更新项目中项的字段。

**输入字段**

- `input`(`UpdateProjectNextItemFieldInput!`)

**返回字段**

| 名称                                    | 描述             |
| ------------------------------------- | -------------- |
| `clientMutationId` (`String`)         | 进行突变的客户端唯一标识符。 |
| `projectNextItem` (`ProjectNextItem`) | 添加到项目的项。       |

#### deleteProjectNextItem

从项目中删除项。

**输入字段**

- `input`(`DeleteProjectNextItemInput!`)

**返回字段**

| 名称                            | 描述             |
| ----------------------------- | -------------- |
| `clientMutationId` (`String`) | 进行突变的客户端唯一标识符。 |
| `deletedItemId` (`ID`)        | 已删除项目的 ID。     |

### 输入对象

#### DeleteProjectNextItemInput

自动生成的 AddProjectNextItem 的输入类型。

**输入字段**

| 名称                            | 描述                              |
| ----------------------------- | ------------------------------- |
| `clientMutationId` (`String`) | 进行突变的客户端唯一标识符。                  |
| `contentId` (`ID!`)           | 要添加的项（Issue 或 PullRequest）的 ID。 |
| `projectId` (`ID!`)           | 要向其添加项的项目 ID。                   |

#### UpdateProjectNextItemFieldInput

自动生成的 UpdateProjectNextItemField 的输入类型。

**输入字段**

| 名称                            | 描述                        |
| ----------------------------- | ------------------------- |
| `clientMutationId` (`String`) | 进行突变的客户端唯一标识符。            |
| `fieldId` (`ID!`)             | 要更新的字段的 ID。 当前支持自定义字段和状态。 |
| `itemId` (`ID!`)              | 要更新的项的 ID。                |
| `projectId` (`ID!`)           | 项目的 ID。                   |
| `value` (`String!`)           | 将在字段中设置的值。                |

#### DeleteProjectNextItemInput

自动生成的 DeleteProjectNextItem 的输入类型。

**输入字段**

| 名称                            | 描述             |
| ----------------------------- | -------------- |
| `clientMutationId` (`String`) | 进行突变的客户端唯一标识符。 |
| `itemId` (`ID!`)              | 要删除的项的 ID。     |
| `projectId` (`ID!`)           | 应从中删除项的项目 ID。  |
