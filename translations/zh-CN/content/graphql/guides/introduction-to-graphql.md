---
title: GraphQL 简介
intro: 了解使用 GitHub GraphQL API 的有用术语和概念。
redirect_from:
  - /v4/guides/intro-to-graphql
  - /graphql/guides/intro-to-graphql
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### GraphQL 术语

GitHub GraphQL API 表示 GitHub REST API 发生的架构和概念转变。 您可能会在 GraphQL API [参考文档](/graphql)中遇到一些新术语。

### 架构

架构可定义 GraphQL API 的类型系统。 它将描述客户端可以访问的完整可能数据集（对象、字段、关系、一切）。 客户端发出的调用将根据架构[验证](https://graphql.github.io/learn/validation/)和[执行](https://graphql.github.io/learn/execution/)。 客户端可以通过[内省](#discovering-the-graphql-api)查找关于架构的信息。 架构位于 GraphQL API 服务器上。 更多信息请参阅“[了解 GraphQL API](#discovering-the-graphql-api)。”

### 字段

字段是一种可从对象检索的数据单元。 正如[官方 GraphQL 文档](https://graphql.github.io/learn/schema/)所示：“GraphQL 查询语言基本用于选择对象上的字段。”

关于字段，[官方规范](https://graphql.github.io/graphql-spec/June2018/#sec-Language.Fields)还显示：

> 所有 GraphQL 操作都必须将其选项指定为可返回标量值的字段，以确保得到明确响应。

这意味着，如果您尝试返回的字段不是标量，架构验证将出现错误。 必须添加嵌套子字段，直到所有字段都返回标量。

### 参数

参数是指一组附加至特定字段的键值对。 某些字段需要参数。 [突变](/graphql/guides/forming-calls-with-graphql#about-mutations)需要将输入对象作为参数。

### 实现

GraphQL 架构可以使用术语_实现_定义对象如何继承[接口](/graphql/reference/interfaces)。

下面是定义接口 `X` 和对象 `Y` 的设定架构示例：

```
interface X {
  some_field: String!
  other_field: String!
}

type Y implements X {
  some_field: String!
  other_field: String!
  new_field: String!
}
```

这意味着，对象 `Y` 需要与接口 `X` 相同的字段/参数/返回类型，同时添加特定于对象 `Y` 的新字段。 （`!` 表示必填字段。）

在参考文档中，您将发现：

* 每个[对象](/graphql/reference/objects)都会在 **Implements（实现）**下列出它_继承的_ 接口。

* 每个[接口](/graphql/reference/interfaces)都会在 **Implementations（实现）**下列出它_继承的_对象。

### 连接

连接可用于查询作为同一个调用的一部分的相关对象。 通过连接，可以使用单个 GraphQL 调用，其中，必须对 REST API 使用多个调用。 更多信息请参阅“[从 REST 迁移到 GraphQL](/graphql/guides/migrating-from-rest-to-graphql)。”

它有助于绘制图形：用线连接点。 点是节点，线是边缘。 连接可定义节点之间的关系。

### 边缘

边缘表示节点之间的连接。 查询连接时，可以遍历边缘获取节点。 每个 `edges` 字段都含有一个 `node` 字段和一个 `cursor` 字段。 光标用于[分页](https://graphql.github.io/learn/pagination/)。

### Node

_节点_是对象的通用术语。 您可以直接查找节点，或通过连接访问相关节点。 如果您指定的 `node` 不能返回[标量](/graphql/reference/scalars)，则必须包含子字段，直到所有字段都返回标量。 有关通过 REST API 访问节点 ID 和将它们用于 GraphQL 查询的信息，请参阅“[使用全局节点 ID](/graphql/guides/using-global-node-ids)。”

## 了解 GraphQL API

GraphQL 是一种[内省](https://graphql.github.io/learn/introspection/)语言。 这意味着，您可以查询 GraphQL 架构，了解关于其自身的详细信息。

* 查询 `__schema`，列出架构中定义的所有类型并获取关于每个类型的详细信息：

  ```graphql
query {
  __schema {
    types {
      name
      kind
      description
      fields {
        name
      }
    }
  }
}
  ```

* 查询 `__type`，获取关于任何类型的详细信息：

  ```graphql
query {
  __type(name: "Repository") {
    name
    kind
    description
    fields {
      name
    }
  }
}
  ```

* 您也可以通过 `GET` 请求对架构运行_内省查询_ ：

  ```shell
  $ curl -H "Authorization: bearer <em>token</em>" {% data variables.product.graphql_url_pre %}
  ```

  结果出现在 JSON 中，因此，我们建议整洁打印，以便阅读和搜索。 为此，您可以使用命令行工具，例如 [jq](https://stedolan.github.io/jq/)，或将结果输入 `python -m json.tool`。

  或者，也可以传递 `idl` 媒体类型，按 IDL 格式（即架构的压缩版本）返回结果。

  ```shell
  $ curl -H "Authorization: bearer <em>token</em>" -H "Accept: application/vnd.github.v4.idl" \
  {% data variables.product.graphql_url_pre %}
  ```

  {% note %}

  **注**：内省查询可能是您能在 GraphQL 中运行的唯一 `GET` 请求。 如果要传递正文，GraphQL 请求方法应为 `POST`，无论是执行查询还是突变。

  {% endnote %}

  有关执行查询的更多信息，请参阅“[使用 GraphQL 建立调用](/graphql/guides/forming-calls-with-graphql)。”
