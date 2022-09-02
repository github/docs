---
title: 使用 Explorer
intro: 'GraphQL Explorer 是浏览器中的集成开发环境，包含文档、语法重点和验证错误，可用于查询实际的 {% data variables.product.prodname_dotcom %} 数据。'
redirect_from:
  - /v4/guides/using-the-explorer
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
---

## 关于 GraphQL Explorer

{% ifversion fpt or ghec %}

[GraphQL Explorer](/graphql/overview/explorer) 是 [GraphiQL](https://github.com/graphql/graphiql) -“浏览器内的图形交互式 GraphQL IDE”- 的实例。

{% else %}

[GraphiQL](https://github.com/graphql/graphiql) 在本文档中也称为 GraphQL Explorer，是“浏览器内的图形交互式 GraphQL IDE”。

{% endif %}

## 使用 GraphiQL

要使用 GraphiQL 应用程序，请从 https://github.com/skevy/graphiql-app 下载并安装。

### 配置 GraphiQL

1. 获取 [OAuth 令牌](/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql)。
1. 启动 GraphiQL。
1. 在 GraphiQL 的右上角，单击 **Edit HTTP Headers（编辑 HTTP 标头）**。
1. 在 **Key（密钥）**字段中，输入 `Authorization`。 在 **Value（值）**字段中，输入 `Bearer <token>`，其中 `<token>` 是您生成的 OAuth 令牌。 ![graphiql 标头](/assets/images/developer/graphiql-headers.png)
1. 单击令牌右侧的复选标记将其保存。
1. 要返回到编辑器，请单击 **Edit HTTP Headers（编辑 HTTP 标头）**模态框外部。
1. 在 **GraphQL Endpoint（GraphQL 端点）**字段中，输入 `{% data variables.product.graphql_url_pre %}`。
1. 在 **Method（方法）**下拉菜单中，选择 **POST**。

{% note %}

**注**：有关为何选择 `POST` 作为方法的更多信息，请参阅“[与 GraphQL 通信](/graphql/guides/forming-calls-with-graphql#communicating-with-graphql)”。

{% endnote %}

您可以通过自我查询来测试您的访问：

```graphql
query {
  viewer {
    login
  }
}
```

如果一切运行正常，将会显示您的登录信息。 您已设置完成，可以开始查询。

## 访问边栏文档

GraphQL 架构中的所有类型都包含一个编译到文档中的 `description` 字段。 Explorer 页面右侧可折叠的 **Docs（文档）**窗格可用于浏览有关类型系统的文档。 文档将自动更新，并删除已弃用的字段。

{% note %}

**Docs（文档）**边栏包含的内容，与“[引用](/graphql)”下的架构自动生成的内容相同，但有些地方的格式不同。

{% endnote %}

## 使用变量窗格

包含[变量](/graphql/guides/forming-calls-with-graphql#working-with-variables)的一些示例调用可能写作：

```graphql
query($number_of_repos:Int!){
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

这是通过 cURL `POST` 提交调用的正确格式（但要[避免使用换行符](/graphql/guides/forming-calls-with-graphql#communicating-with-graphql)）。

如果要在 Explorer 中运行调用，请在主窗格中输入 `query` 字段，并在其下方的 **Query Variables（查询变量）**窗格中输入变量。 在 Explorer 中省略 `variables` 一词：

```graphql
{
   "number_of_repos": 3
}
```

## 请求支持

{% data reusables.support.help_resources %}

## 排查错误

由于 GraphQL 可以[自省](/graphql/guides/introduction-to-graphql#discovering-the-graphql-api)，因此 Explorer 支持：

* 基于当前架构的智能输入提示
* 键入时预提示验证错误

如果您输入的查询格式不正确或未通过[架构验证](/graphql/guides/introduction-to-graphql#schema)，则会弹出错误警示窗口。 如果您运行查询，错误将返回响应窗格中。

GraphQL 响应中包含多个密钥：`data` 哈希和 `errors` 数组。

```json
{
  "data": null,
  "errors": [
    {
      "message": "Objects must have selections (field 'nodes' returns Repository but has no selections)",
      "locations": [
        {
          "line": 5,
          "column": 8
        }
      ]
    }
  ]
}
```

您可能会遇到与架构无关的意外错误。 如果发生这种情况，该消息将包含一个参考代码，供您在报告问题时使用：

```json
{
  "data": null,
  "errors": [
    {
      "message": "Something went wrong while executing your query. This is most likely a GitHub bug. Please include \"7571:3FF6:552G94B:69F45B7:5913BBEQ\" when reporting this issue."
    }
  ]
}
```

{% note %}

**注：** {% data variables.product.prodname_dotcom %} 建议，在数据用于生产环境之前，先检查其是否有错误。 在 GraphQL 中，失败并不意味着全部错误：在一些 GraphQL 查询失败的同时，另一些查询可能成功。

{% endnote %}
