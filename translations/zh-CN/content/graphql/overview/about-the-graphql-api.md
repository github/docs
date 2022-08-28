---
title: 关于 GraphQL API
intro: '{% data variables.product.prodname_dotcom %} GraphQL API 具有灵活性，而且能够准确定义您要获取的数据。'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - API
---

### 概览

下面是一些帮助您启动和运行 GraphQL API v4 的快速链接：

* [身份验证](/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql)
* [根端点](/graphql/guides/forming-calls-with-graphql#the-graphql-endpoint)
* [架构内省](/graphql/guides/introduction-to-graphql#discovering-the-graphql-api)
* [速率限制](/graphql/overview/resource-limitations)
* [从 REST 迁移](/graphql/guides/migrating-from-rest-to-graphql)

### 关于 GraphQL

[GraphQL](https://graphql.github.io/) 数据查询语言为：

* **[规范](https://graphql.github.io/graphql-spec/June2018/)。**此规范可确定 API 服务器上[架构](/graphql/guides/introduction-to-graphql#schema)的有效性。 架构可确定客户端调用的有效性。

* **[强类型化](#about-the-graphql-schema-reference)。**架构可定义 API 的类型系统和所有对象关系。

* **[内省](/graphql/guides/introduction-to-graphql#discovering-the-graphql-api)。**客户端可查询架构，了解关于架构的详细信息。

* **[层次](/graphql/guides/forming-calls-with-graphql)。**GraphQL 调用的形式可反映它返回的 JSON 数据的形式。 [嵌套字段](/graphql/guides/migrating-from-rest-to-graphql#example-nesting)可用于仅查询和接收您在单个往返向行程中指定的数据。

* **应用层。**GraphQL 不是存储模型或数据库查询语言。 _graph_ 是指架构中定义的图形结构，其中，[节点](/graphql/guides/introduction-to-graphql#node)定义对象，[边缘](/graphql/guides/introduction-to-graphql#edge)定义对象之间的关系。 API 可以根据架构定义遍历和返回应用数据，与数据的存储方式无关。

### GitHub 为什么使用 GraphQL

GitHub 选择将 GraphQL 用于 API v4，因为它可以为我们的集成商提供明显更高的灵活性。 准确定义所需数据&mdash;_仅仅_是您所需的数据&mdash;的能力是它超越 REST API v3 端点的强大优势。 GraphQL 可用于将多个 REST 请求替换为_单个调用_，以获取您指定的数据。

有关 GitHub 为什么移动到 GraphQL 的详细信息，请参阅原始[公告博客文章](https://githubengineering.com/the-github-graphql-api/)。

### 关于 GraphQL 架构引用

边栏中的文档是从 {% data variables.product.prodname_dotcom %} GraphQL [架构](/graphql/guides/introduction-to-graphql#discovering-the-graphql-api) 生成的。 所有调用均根据架构验证和执行。 使用这些文档查找您可以调用的数据：

* 允许的操作：[查询](/graphql/reference/queries)和[突变](/graphql/reference/mutations)。

* 架构定义的类型：[标量](/graphql/reference/scalars)、[对象](/graphql/reference/objects)、[枚举类型](/graphql/reference/enums)、[接口](/graphql/reference/interfaces)、[并集](/graphql/reference/unions)和[输入对象](/graphql/reference/input-objects)。

您可以通过 [Explorer 文档边栏](/graphql/guides/using-the-explorer#accessing-the-sidebar-docs)访问同样的内容。 请注意，您可能需要依靠文档和架构验证才能成功调用 GraphQL API。

有关其他信息，如身份验证和速率限制详细信息，请查看[指南](/graphql/guides)。

### 请求支持

{% data reusables.support.help_resources %}
