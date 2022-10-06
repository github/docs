---
title: 使用 GraphQL 建立调用
intro: 了解如何向 GraphQL API 验证身份，以及如何创建并运行查询和突变。
redirect_from:
  - /v4/guides/forming-calls
  - /graphql/guides/forming-calls
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
shortTitle: Form calls with GraphQL
ms.openlocfilehash: b3778872cad120f64f2fdbc238f2319bdd758513
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147527892'
---
## 使用 GraphQL 进行身份验证

要与 GraphQL 服务器通信，需要具有正确作用域的 OAuth 令牌。

按照“[创建个人访问令牌](/github/authenticating-to-github/creating-a-personal-access-token)”中的步骤创建令牌。 您需要的作用域取决于您尝试请求的数据类型。 例如，选择“用户”范围以请求用户数据。 如果需要访问存储库信息，请选择相应的“存储库”范围。

{% ifversion fpt or ghec %}

要匹配 [GraphQL 浏览器](/graphql/guides/using-the-explorer)的行为，可请求以下范围：

{% else %}

建议使用以下作用域：

{% endif %}


```
repo
read:packages
read:org
read:public_key
read:repo_hook
user
read:discussion
read:enterprise
read:gpg_key
```

如果资源需要特定作用域，API 会通知您。

## GraphQL 端点

REST API 有多个端点；GraphQL API 只有一个端点：

<pre>{% data variables.product.graphql_url_pre %}</pre>

无论执行什么操作，端点都保持不变。

## 与 GraphQL 通信

由于 GraphQL 操作由多行 JSON 组成，因此 GitHub 建议使用[浏览器](/graphql/guides/using-the-explorer)进行 GraphQL 调用。 也可以使用 cURL 或任何其他采用 HTTP 的库。

在 REST 中，[HTTP 谓词](/rest#http-verbs)确定执行的操作。 在 GraphQL 中，无论是执行查询还是突变，都要提供 JSON 编码的正文，因此 HTTP 谓词为 `POST`。 唯一的例外是[内省查询](/graphql/guides/introduction-to-graphql#discovering-the-graphql-api)，它是一种简单的 `GET` 到终结点查询。 有关 GraphQL 与 REST 的更多信息，请参阅“[从 REST 迁移到 GraphQL](/graphql/guides/migrating-from-rest-to-graphql)”。

要使用 cURL 查询 GraphQL，请利用 JSON 有效负载发出 `POST` 请求。 有效负载必须包含一个名为 `query` 的字符串：

```shell
curl -H "Authorization: bearer <em>token</em>" -X POST -d " \
 { \
   \"query\": \"query { viewer { login }}\" \
 } \
" {% data variables.product.graphql_url_code %}
```

{% tip %}

注意：`"query"` 的字符串值必须进行换行符转义，否则架构将无法正确解析它。 对于 `POST` 正文，请使用外双引号和转义的内双引号。

{% endtip %}

### 关于查询和突变操作

GitHub 的 GraphQL API 中允许的两种操作类型为查询和突变 。 比较 GraphQL 与 REST，查询操作就像 `GET` 请求，而突变操作则像 `POST`/`PATCH`/`DELETE`。 [突变名称](/graphql/reference/mutations)确定执行的修改内容。

有关速率限制的信息，请参阅“[GraphQL 资源限制](/graphql/overview/resource-limitations)”。

查询和突变形式相似，但有一些重要差异。

### 关于查询

GraphQL 查询仅返回你指定的数据。 要建立查询，必须指定[字段内的字段](/graphql/guides/introduction-to-graphql#field)（也称为嵌套的子字段），直到仅返回[标量](/graphql/reference/scalars)。

查询的结构如下：

<pre>query {
  <em>JSON objects to return</em>
}</pre>

有关实际示例，请参阅“[示例查询](#example-query)”。

### 关于突变

要建立突变，必须指定三个参数：

1. 突变名称。 您要执行的修改类型。
2. 输入对象。 要发送到服务器的数据，由输入字段组成。 将其作为参数传递至突变名称。
3. 有效负载对象。 要从服务器返回的数据，由返回字段组成。 将其作为突变名称的正文传递。

突变的结构如下：

<pre>mutation {
  <em>mutationName</em>(input: {<em>MutationNameInput!</em>}) {
    <em>MutationNamePayload</em>
  }
}</pre>

此示例中的输入对象为 `MutationNameInput`，有效负载对象为 `MutationNamePayload`。

在[突变](/graphql/reference/mutations)引用中，列出的输入字段是作为输入对象传递的内容。 列出的返回字段是作为有效负载对象传递的内容。

有关实际示例，请参阅“[示例突变](#example-mutation)”。

## 使用变量

[变量](https://graphql.github.io/learn/queries/#variables)可使查询更具动态和更加强大，并且可以在传递突变输入对象时降低复杂性。

{% note %}

注意：如果使用的是此浏览器，请确保在单独的[“查询变量”窗格](/graphql/guides/using-the-explorer#using-the-variable-pane)中输入变量，且 JSON 对象之前不含 `variables` 一词。

{% endnote %}

下面是一个单变量查询示例：

```graphql
query($number_of_repos:Int!) {
  viewer {
    name
     repositories(last: $number_of_repos) {
       nodes {
         name
       }
     }
   }
}
variables {
   "number_of_repos": 3
}
```

使用变量包含三个步骤：

1. 在 `variables` 对象中定义操作以外的变量：

  ```graphql
  variables {
     "number_of_repos": 3
  }
  ```

  此对象必须是有效的 JSON。 本示例显示了一个简单的 `Int` 变量类型，但可以定义更复杂的变量类型，如输入对象。 也可以在此定义多个变量。

2. 将变量作为参数传递至操作：

  ```graphql
  query($number_of_repos:Int!){
  ```

  此参数是一个键值对，其中键为以 `$` 开头的名称（例如 `$number_of_repos`），值为类型（例如 `Int`） 。 添加 `!` 以指出是否需要此类型。 如果您已经定义了多个变量，请将它们作为多个参数加入此处。

3. 在操作中使用变量：

  ```graphql
  repositories(last: $number_of_repos) {
  ```

  在本示例中，我们用变量替换要检索的仓库编号。 在步骤 2 中指定类型，因为 GraphQL 会强制执行强类型化。

此流程会使查询参数具有动态性。 现在，只需更改 `variables` 对象中的值，查询的其余部分则保持不变。

将变量用作参数可支持动态更新 `variables` 对象中的值，而无需更改查询。

## 示例查询

我们来演练一个较为复杂的查询，并将此信息放在上下文中。

下面的查询用于查找 `octocat/Hello-World` 存储库，查找 20 个最近关闭的问题，并返回每个问题的标题、URL 和前 5 个标签：

```graphql
query {
  repository(owner:"octocat", name:"Hello-World") {
    issues(last:20, states:CLOSED) {
      edges {
        node {
          title
          url
          labels(first:5) {
            edges {
              node {
                name
              }
            }
          }
        }
      }
    }
  }
}
```

逐行查看此查询的组成元素：

* `query {`

  由于我们想从服务器读取数据，而不是修改数据，因此 `query` 是根操作。 （如果未指定操作，则 `query` 也是默认操作。）

* `repository(owner:"octocat", name:"Hello-World") {`

  要开始查询，需找到 [`repository`](/graphql/reference/objects#repository) 对象。 架构验证表明此对象需要 `owner` 和 `name` 参数。

* `issues(last:20, states:CLOSED) {`

  为考虑到存储库中的所有问题，我们调用 `issues` 对象。 （可查询 `repository` 中的单个 `issue`，但这需要了解我们想返回的问题编号，并将其作为参数。）

  有关 `issues` 对象的一些详细信息：

  - [文档](/graphql/reference/objects#repository)中指出，此对象的类型为 `IssueConnection`。
  - 架构验证表明此对象需要将 `last` 或 `first` 个结果作为参数，因此我们提供了 `20`。
  - [文档](/graphql/reference/objects#repository)也指出，此对象接受 `states` 参数，即一种 [`IssueState`](/graphql/reference/enums#issuestate) 枚举类型，可接受的值为 `OPEN` 或 `CLOSED`。 要仅查找已关闭的问题，可对 `states` 键赋值 `CLOSED`。

* `edges {`

  我们知道 `issues` 是一种连接，因为它的类型为 `IssueConnection`。 要检索关于各个问题的数据，必须通过 `edges` 访问节点。

* `node {`

  在本示例中，我们将检索边缘末尾的节点。 [`IssueConnection` 文档指示 `IssueConnection` 类型末尾的节点为 `Issue` 对象](/graphql/reference/objects#issueconnection)。

* 了解了要检索 `Issue` 对象后，现在可以查看[文档](/graphql/reference/objects#issue)并指定要返回的字段：

  ```graphql
  title
  url
  labels(first:5) {
    edges {
      node {
        name
      }
    }
  }
  ```

  在此指定 `Issue` 对象的 `title`、`url` 和 `labels` 字段。

  `labels` 字段的类型为 [`LabelConnection`](/graphql/reference/objects#labelconnection)。 与 `issues` 对象一样，`labels` 也是一种连接，因此必须将其边缘传送到连接的节点：`label` 对象。 在此节点上，可指定要返回的 `label` 对象字段，在本例中为 `name`。

你可能会注意到，在 Octocat 的{% ifversion not ghae %}公共{% endif %} `Hello-World` 存储库中运行此查询不会返回很多标签。 尝试在您自己的其中一个使用标签的仓库中运行，很可能会看到不同的结果。

## 突变示例

突变通常需要只有先执行查询才能找到的信息。 本示例显示两个操作：

1. 用于获取议题 ID 的查询。
2. 用于向议题添加表情符号反应的突变。

```graphql
query FindIssueID {
  repository(owner:"octocat", name:"Hello-World") {
    issue(number:349) {
      id
    }
  }
}

mutation AddReactionToIssue {
  addReaction(input:{subjectId:"MDU6SXNzdWUyMzEzOTE1NTE=",content:HOORAY}) {
    reaction {
      content
    }
    subject {
      id
    }
  }
}
```

{% tip %}

如果为查询和突变命名（在本示例中为 `FindIssueID` 和 `AddReactionToIssue`），则可以将二者放入此浏览器的同一个窗口，但操作将作为对 GraphQL 终结点的单独调用执行。 不能同时执行查询和突变，反之亦然。

{% endtip %}

我们演练一遍这个示例。 任务听起来简单：向议题添加表情符号反应即可。

那么，我们怎么知道从查询开始呢？ 还不知道。

因为我们想修改服务器上的数据（向议题添加表情符号），所以先搜索架构，查找有用的突变。 参考文档所示为 [`addReaction`](/graphql/reference/mutations#addreaction) 突变，其描述为：`Adds a reaction to a subject.` Perfect!

突变文档列出了三个输入字段：

* `clientMutationId` (`String`)
* `subjectId` (`ID!`)
* `content` (`ReactionContent!`)

`!` 指示 `subjectId` 和 `content` 是必填字段。 必填字段 `content` 是有道理的：我们想添加反应，因此需要指定要使用哪个表情符号。

但 `subjectId` 为什么是必填字段呢？ 这是因为，`subjectId` 是确定要对哪个存储库中的哪个问题做出反应的唯一方式 。

因此，本示例要从查询开始：获取 `ID`。

让我们逐行检查查询：

* `query FindIssueID {`

  我们将执行查询，并将其命名为 `FindIssueID`。 请注意，为查询命名是可选操作；我们在此为它命名，然后即可将它与突变放在同一个 Explorer 窗口中。

* `repository(owner:"octocat", name:"Hello-World") {`

  通过查询 `repository` 对象并传递 `owner` 和 `name` 参数来指定存储库。

* `issue(number:349) {`

  通过查询 `issue` 对象和传递 `number` 参数来指定要做出反应的问题。

* `id`

  我们将检索 `https://github.com/octocat/Hello-World/issues/349` 的 `id`，并作为 `subjectId` 传递。

运行查询时，将获取 `id`：`MDU6SXNzdWUyMzEzOTE1NTE=`

{% tip %}

注意：查询中返回的 `id` 是将在突变中作为 `subjectID` 传递的值。 文档和架构内省都不会显示这种关系；您需要理解这些名称背后的概念才能找出答案。

{% endtip %}

在 ID 已知的情况下，可以继续进行突变操作：

* `mutation AddReactionToIssue {`

  我们将执行突变，并将其命名为 `AddReactionToIssue`。 与查询一样，为突变命名是可选操作；我们在此为它命名，然后即可将它与查询放在同一个 Explorer 窗口中。

* `addReaction(input:{subjectId:"MDU6SXNzdWUyMzEzOTE1NTE=",content:HOORAY}) {`

  让我们来检查这一行：

  - `addReaction` 是突变的名称。
  - `input` 是必需的参数键。 突变的参数键始终是 `input`。
  - `{subjectId:"MDU6SXNzdWUyMzEzOTE1NTE=",content:HOORAY}` 是必需的参数值。 突变的参数值始终是由输入字段（在本例中为 `subjectId` 和 `content`）组成的[输入对象](/graphql/reference/input-objects)（因此带有大括号）。

  我们怎么知道内容使用哪个值呢？ [`addReaction` 文档](/graphql/reference/mutations#addreaction)指出，`content` 字段的类型为 [`ReactionContent`](/graphql/reference/enums#reactioncontent)，即一种[枚举类型](/graphql/reference/enums)，因为 GitHub 只支持使用某些表情符号进行反应。 这些是允许的反应值 （注意，某些值与其相应的表情符号名称不同）：

  {% data reusables.repositories.reaction_list %}

* 调用的其余部分由有效负载对象组成。 我们将在此指定执行突变后由服务器返回的数据。 这几行来自 [`addReaction` 文档](/graphql/reference/mutations#addreaction)，其中包含三个可能返回的字段：

    - `clientMutationId` (`String`)
    - `reaction` (`Reaction!`)
    - `subject` (`Reactable!`)

  在本示例中，返回两个必填字段（`reaction` 和 `subject`），二者均包含必填子字段（分别为 `content` 和 `id`）。

我们运行突变时，响应如下：

```json
{
  "data": {
    "addReaction": {
      "reaction": {
        "content": "HOORAY"
      },
      "subject": {
        "id": "MDU6SXNzdWUyMTc5NTQ0OTc="
      }
    }
  }
}
```

就这么简单！ 将鼠标悬停在 :tada: 上找到你的用户名，查看[问题的反应](https://github.com/octocat/Hello-World/issues/349)。

最后注意：当您在输入对象中传递多个字段时，语法可能会变笨拙。 将字段移入[变量](#working-with-variables)可避免这种情况。 下面是您利用变量重写原始突变的方式：

```graphql
mutation($myVar:AddReactionInput!) {
  addReaction(input:$myVar) {
    reaction {
      content
    }
    subject {
      id
    }
  }
}
variables {
  "myVar": {
    "subjectId":"MDU6SXNzdWUyMTc5NTQ0OTc=",
    "content":"HOORAY"
  }
}
```

{% note %}

你可能会注意到，前文示例中的 `content` 字段值（直接用于突变）在 `HOORAY` 两侧没有引号，但在变量中使用时有引号。 原因是：
* 直接在突变中使用 `content` 时，架构预计此值的类型为 [`ReactionContent`](/graphql/reference/enums#reactioncontent)，即一种枚举类型，而非字符串。 如果您在枚举值两侧添加引号，架构验证将出现错误，因为引号是为字符串保留的。
* 在变量中使用 `content` 时，变量部分必须为有效的 JSON，因此需要引号。 当变量在执行过程中传递至突变时，架构验证将正确解释 `ReactionContent` 类型。

有关枚举与字符串之间差异的更多信息，请参阅[官方 GraphQL 规格](https://graphql.github.io/graphql-spec/June2018/#sec-Enums)。

{% endnote %}

## 延伸阅读

建立 GraphQL 调用时，可执行更多操作。 下面是接下来要阅读的一些内容：

* [分页](https://graphql.org/learn/pagination/)
* [片段](https://graphql.org/learn/queries/#fragments)
* [行内分段](https://graphql.org/learn/queries/#inline-fragments)
* [指令](https://graphql.org/learn/queries/#directives)
