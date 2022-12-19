---
title: GraphQL 简介
intro: 了解使用 GitHub GraphQL API 的有用术语和概念。
redirect_from:
  - /v4/guides/intro-to-graphql
  - /graphql/guides/intro-to-graphql
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
ms.openlocfilehash: abc74dfd4aa65035405fd956c6438a487381284b
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145066670'
---
## GraphQL 术语

GitHub GraphQL API 表示 GitHub REST API 发生的架构和概念转变。 你可能会在 GraphQL API [参考文档](/graphql)中遇到一些新术语。

## 架构

架构可定义 GraphQL API 的类型系统。 它将描述客户端可以访问的完整可能数据集（对象、字段、关系、一切）。 来自客户端的调用已针对架构进行[验证](https://graphql.github.io/learn/validation/)和[执行](https://graphql.github.io/learn/execution/)。 客户端可通过[省](#discovering-the-graphql-api)找到有关架构的信息。 架构位于 GraphQL API 服务器上。 有关详细信息，请参阅“[发现 GraphQL API](#discovering-the-graphql-api)”。

## 字段

字段是一种可从对象检索的数据单元。 正如[官方 GraphQL 文档](https://graphql.github.io/learn/schema/)所述：“GraphQL 查询语言主要关于选择对象的字段。”。

[官方规范](https://graphql.github.io/graphql-spec/June2018/#sec-Language.Fields)还提到了字段：

> 所有 GraphQL 操作都必须将其选项指定为可返回标量值的字段，以确保得到明确响应。

这意味着，如果您尝试返回的字段不是标量，架构验证将出现错误。 必须添加嵌套子字段，直到所有字段都返回标量。

## 参数

参数是指一组附加至特定字段的键值对。 某些字段需要参数。 [Mutation](/graphql/guides/forming-calls-with-graphql#about-mutations) 需要输入对象作为参数。

## 实现

GraphQL 架构可以使用术语“实现”来定义对象如何从[接口](/graphql/reference/interfaces)继承。

下面是定义接口 `X` 和对象 `Y` 的架构的设计示例：

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

这意味着，对象 `Y` 需要与接口 `X` 相同的字段/参数/返回类型，同时添加特定于对象 `Y` 的新字段。 （`!` 表示该字段为必填项。）

在参考文档中，您将发现：

* 每个[对象](/graphql/reference/objects)都在“实现”下列出了其继承的接口。

* 每个[接口](/graphql/reference/interfaces)都在“实现”下列出了从其继承的对象。

## 连接

连接可用于查询作为同一个调用的一部分的相关对象。 通过连接，可以使用单个 GraphQL 调用，其中，必须对 REST API 使用多个调用。 有关详细信息，请参阅“[从 REST 迁移到 GraphQL](/graphql/guides/migrating-from-rest-to-graphql)”。

它有助于绘制图形：用线连接点。 点是节点，线是边缘。 连接可定义节点之间的关系。

## 边缘

边缘表示节点之间的连接。 查询连接时，可以遍历边缘获取节点。 每个 `edges` 字段都有一个 `node` 字段和 `cursor` 一个字段。 游标用于[分页](https://graphql.github.io/learn/pagination/)。

## 节点

Node 是对象的通用术语。 您可以直接查找节点，或通过连接访问相关节点。 如果指定不返回[标量](/graphql/reference/scalars)的 `node`，则必须包含子字段，直到所有字段都返回标量。 有关通过 REST API 访问节点 ID 并在 GraphQL 查询中使用它们的信息，请参阅“[使用全局节点 ID](/graphql/guides/using-global-node-ids)”。

## 了解 GraphQL API

GraphQL 是[内省的](https://graphql.github.io/learn/introspection/)。 这意味着，您可以查询 GraphQL 架构，了解关于其自身的详细信息。

* 查询 `__schema` 以列出架构中定义的所有类型并获取关于每个类型的详细信息：

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

* 查询 `__type` 以获取有关任何类型的详细信息：

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

* 还可以通过 `GET` 请求运行架构的内省查询：

  ```shell
  $ curl -H "Authorization: bearer <em>token</em>" {% data variables.product.graphql_url_pre %}
  ```
  
  {% note %}

  注意：如果收到响应 `"message": "Bad credentials"` 或 `401 Unauthorized`，请检查你所使用的令牌是否有效。 有关详细信息，请参阅“[创建个人访问令牌](/github/authenticating-to-github/creating-a-personal-access-token)”。 

  {% endnote %}
  
  结果出现在 JSON 中，因此，我们建议整洁打印，以便阅读和搜索。 为此，可使用 [jq](https://stedolan.github.io/jq/) 等命令行工具或将结果通过管道传输到 `python -m json.tool`。
  
  或者，也可以传递 `idl` 媒体类型，以返回 IDL 格式的结果，这是架构的压缩版本：

  ```shell
  $ curl -H "Authorization: bearer <em>token</em>" -H "Accept: application/vnd.github.v4.idl" \
  {% data variables.product.graphql_url_pre %}
  ```

  {% note %}

  注意：自省查询可能是将在 GraphQL 中运行的唯一 `GET` 请求。 如果要传递正文，则无论是查询还是突变，GraphQL 请求方法都为 `POST`。

  {% endnote %}

  有关执行查询的详细信息，请参阅“[使用 GraphQL 形成调用](/graphql/guides/forming-calls-with-graphql)”。
