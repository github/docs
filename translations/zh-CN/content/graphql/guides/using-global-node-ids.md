---
title: 使用全局节点 ID
intro: 您可以通过 REST API 获取对象的全局节点 ID 并将它们用于 GraphQL 操作。
redirect_from:
  - /v4/guides/using-global-node-ids
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
ms.openlocfilehash: c4e6dba85ea94fe3337828f795bb7325162b6452
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '146381470'
---
您可以使用 REST API 或 GraphQL API 访问 GitHub 中的大多数对象（用户、议题、拉取请求等）。 可以在 REST API 中找到许多对象的全局节点 ID，并将这些 ID 用于 GraphQL 操作。 有关详细信息，请参阅“[预览 REST API 资源中的 GraphQL API 节点 ID](https://developer.github.com/changes/2017-12-19-graphql-node-id/)”。

{% note %}

注意：在 REST 中，全局节点 ID 字段被命名为 `node_id`。 在 GraphQL 中，此字段为 `node` 接口上的 `id` 字段。 若要重温“节点”在 GraphQL 中的含义，请参阅“[GraphQL 简介](/graphql/guides/introduction-to-graphql#node)”。

{% endnote %}

## 使用全局节点 ID

您可以按照下面这三个步骤有效使用全局节点 ID：

1. 调用可返回对象 `node_id` 的 REST 端点。
2. 在 GraphQL 中查找对象的类型。
3. 使用 ID 和类型在 GraphQL 中执行直接节点查找。

让我们演练一遍示例。

## 1. 调用可返回对象节点 ID 的 REST 端点

如果[请求经过身份验证的用户](/rest/reference/users#get-the-authenticated-user)：

```shell
$ curl -i -u <em>username:token</em> {% data variables.product.api_url_pre %}/user
```

你将得到响应，其中包含经过验证的用户的 `node_id`：

```json
{
  "login": "octocat",
  "id": 1,
  "avatar_url": "https://github.com/images/error/octocat_happy.gif",
  "gravatar_id": "",
  "url": "https://api.github.com/users/octocat",
  "html_url": "https://github.com/octocat",
  "followers_url": "https://api.github.com/users/octocat/followers",
  "following_url": "https://api.github.com/users/octocat/following{/other_user}",
  "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
  "organizations_url": "https://api.github.com/users/octocat/orgs",
  "repos_url": "https://api.github.com/users/octocat/repos",
  "events_url": "https://api.github.com/users/octocat/events{/privacy}",
  "received_events_url": "https://api.github.com/users/octocat/received_events",
  "type": "User",
  "site_admin": false,
  "name": "monalisa octocat",
  "company": "GitHub",
  "blog": "https://github.com/blog",
  "location": "San Francisco",
  "email": "octocat@github.com",
  "hireable": false,
  "bio": "There once was...",
  "public_repos": 2,
  "public_gists": 1,
  "followers": 20,
  "following": 0,
  "created_at": "2008-01-14T04:33:35Z",
  "updated_at": "2008-01-14T04:33:35Z",
  "private_gists": 81,
  "total_private_repos": 100,
  "owned_private_repos": 100,
  "disk_usage": 10000,
  "collaborators": 8,
  "two_factor_authentication": true,
  "plan": {
    "name": "Medium",
    "space": 400,
    "private_repos": 20,
    "collaborators": 0
  },
  "node_id": "MDQ6VXNlcjU4MzIzMQ=="
}
```

## 2. 在 GraphQL 中查找对象类型

在此示例中，`node_id` 值为 `MDQ6VXNlcjU4MzIzMQ==`。 您可以使用此值在 GraphQL 中查询同一个对象。

不过，首先需要知道对象的类型。 您可以通过简单的 GraphQL 查询检查类型：

```graphql
query {
  node(id:"MDQ6VXNlcjU4MzIzMQ==") {
     __typename
  }
}
```

此查询类型&mdash;即按 ID 查找节点&mdash;被称为“直接节点查找”。

运行此查询时，将看到 `__typename` 为 [`User`](/graphql/reference/objects#user)。

## 3. 在 GraphQL 中执行直接节点查找

一旦确认类型，即可使用[行内分段](https://graphql.github.io/learn/queries/#inline-fragments)按 ID 访问对象并返回附加数据。 在本示例中，我们可以定义想要查询的 `User` 上的字段：

```graphql
query {
  node(id:"MDQ6VXNlcjU4MzIzMQ==") {
   ... on User {
      name
      login
    }
  }
}
```

此查询类型是按全局节点 ID 查找对象的标准方法。

## 在迁移中使用全局节点 ID

构建使用 REST API 或 GraphQL API 的集成时，最佳做法是保留全局节点 ID，以便轻松引用不同 API 版本的对象。 有关处理 REST 与 GraphQL 之间的转换的更多信息，请参阅“[从 REST 迁移到 GraphQL](/graphql/guides/migrating-from-rest-to-graphql)”。
