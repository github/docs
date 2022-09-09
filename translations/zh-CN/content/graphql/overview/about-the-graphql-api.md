---
title: 关于 GraphQL API
intro: '{% data variables.product.prodname_dotcom %} GraphQL API 具有灵活性，而且能够准确定义您要获取的数据。'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
ms.openlocfilehash: 9b447925609425157d5d965370c09fdd12d30b56
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145066002'
---
## 概述

下面是一些帮助您启动和运行 GraphQL API 的快速链接：

* [身份验证](/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql)
* [根终结点](/graphql/guides/forming-calls-with-graphql#the-graphql-endpoint)
* [架构内省](/graphql/guides/introduction-to-graphql#discovering-the-graphql-api)
* [速率限制](/graphql/overview/resource-limitations)
* [从 REST 迁移](/graphql/guides/migrating-from-rest-to-graphql)

## 关于 GraphQL

[GraphQL](https://graphql.github.io/) 数据查询语言是：

* **[规范](https://graphql.github.io/graphql-spec/June2018/)。** 该规范确定 API 服务器上的[架构](/graphql/guides/introduction-to-graphql#schema) 的有效性。 架构可确定客户端调用的有效性。

* **[强类型化](#about-the-graphql-schema-reference)。** 架构可定义 API 的类型系统和所有对象关系。

* **[内省](/graphql/guides/introduction-to-graphql#discovering-the-graphql-api)。** 客户端可查询架构，了解关于架构的详细信息。

* **[分层](/graphql/guides/forming-calls-with-graphql)。** GraphQL 调用的形式可反映它返回的 JSON 数据的形式。 [嵌套字段](/graphql/guides/migrating-from-rest-to-graphql#example-nesting)可用于仅查询和接收单个往返向行程中指定的数据。

* **应用程序层。** GraphQL 不是存储模型或数据库查询语言。 “图”是指架构中定义的图形结构，其中，[节点](/graphql/guides/introduction-to-graphql#node)定义对象，[边缘](/graphql/guides/introduction-to-graphql#edge)定义对象之间的关系。 API 可以根据架构定义遍历和返回应用数据，与数据的存储方式无关。

## GitHub 为什么使用 GraphQL

GitHub 选择 GraphQL，因为它可以为我们的集成商提供明显更高的灵活性。 与传统 REST API 终结点相比，精确定义所需数据且仅定义所需数据的能力是一个强大的优势&mdash;&mdash;。 GraphQL 可用于将多个 REST 请求替换为单个调用，以获取指定的数据。

有关 GitHub 为什么投资 GraphQL 的详细信息，请参阅原始[公告博客文章](https://github.blog/2016-09-14-the-github-graphql-api/)。

## 关于 GraphQL 架构引用

边栏中的文档是从 {% data variables.product.prodname_dotcom %} GraphQL [架构](/graphql/guides/introduction-to-graphql#discovering-the-graphql-api)生成的。 所有调用均根据架构验证和执行。 使用这些文档查找您可以调用的数据：

* 允许的操作：[查询](/graphql/reference/queries)和[突变](/graphql/reference/mutations)。

* 架构定义的类型：[标量](/graphql/reference/scalars)、[对象](/graphql/reference/objects)、[枚举类型](/graphql/reference/enums)、[接口](/graphql/reference/interfaces)、[联合](/graphql/reference/unions)和[输入对象](/graphql/reference/input-objects)。

可以通过 [Explorer 文档边栏](/graphql/guides/using-the-explorer#accessing-the-sidebar-docs)访问同样的内容。 请注意，您可能需要依靠文档和架构验证才能成功调用 GraphQL API。

有关其他信息，如身份验证和速率限制详细信息，请查看[指南](/graphql/guides)。

## 请求支持

{% data reusables.support.help_resources %}
