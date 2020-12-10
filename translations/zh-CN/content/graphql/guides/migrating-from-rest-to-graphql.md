---
title: 从 REST 迁移到 GraphQL
intro: '了解从 {% data variables.product.prodname_dotcom %} 的 REST API 迁移到 {% data variables.product.prodname_dotcom %} 的 GraphQL API 的最佳实践和注意事项。'
redirect_from:
  - /v4/guides/migrating-from-rest
  - /graphql/guides/migrating-from-rest
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### API 逻辑差异

从 REST 迁移到 GraphQL 代表了 API 逻辑的一次重大转变。 作为样式的 REST 与作为规范的 GraphQL 之间的差异使得很难&mdash;且通常不可取&mdash;以一对一方式将 REST API 调用替换为 GraphQL API 查询。 我们在下面提供了具体的迁移示例。

To migrate your code from the [REST API](/rest) to the GraphQL API:

- 查看 [GraphQL 规范](https://graphql.github.io/graphql-spec/June2018/)
- Review GitHub's [GraphQL schema](/graphql/reference)
- 考虑您当前的现有代码如何与 GitHub REST API 交互
- Use [Global Node IDs](/graphql/guides/using-global-node-ids) to reference objects between API versions

GraphQL 的重要优势包括：

- [仅获取您所需的数据](#example-getting-the-data-you-need-and-nothing-more)
- [嵌套字段](#example-nesting)
- [强类型化](#example-strong-typing)

下面是每种优势的示例。

## 示例：仅获取您所需的数据

单个 REST API 可检索组织成员列表：
```shell
curl -v {% data variables.product.api_url_pre %}/orgs/:org/members
```

如果您的目标是仅检索成员名称和头像链接，REST 有效负载中将包含多余数据。 但是，GraphQL 查询仅返回您指定的数据：

```graphql
query {
    organization(login:"github") {
    membersWithRole(first: 100) {
      edges {
        node {
          name
          avatarUrl
        }
      }
    }
  }
}
```

考虑另一个示例：检索拉取请求列表并检查每个请求是否可合并。 A call to the REST API retrieves a list of pull requests and their [summary representations](/rest#summary-representations):
```shell
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/pulls
```

Determining if a pull request is mergeable requires retrieving each pull request individually for its [detailed representation](/rest#detailed-representations) (a large payload) and checking whether its `mergeable` attribute is true or false:
```shell
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/pulls/:number
```

使用 GraphQL，可以仅检索每个拉取请求的 `number` 和 `mergeable` 属性：

```graphql
query {
    repository(owner:"octocat", name:"Hello-World") {
    pullRequests(last: 10) {
      edges {
        node {
          number
          mergeable
        }
      }
    }
  }
}
```

## 示例：嵌套

通过嵌套字段查询，可将多个 REST 调用替换为更少的 GraphQL 查询。 例如，利用 **REST API** 检索拉取请求及其提交、非评论注释和评论需要四个单独的调用：
```shell
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/pulls/:number
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/pulls/:number/commits
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/issues/:number/comments
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/pulls/:number/reviews
```

使用 **GraphQL API**，可以利用嵌套字段通过单个查询检索数据：

```graphql
{
  repository(owner: "octocat", name: "Hello-World") {
    pullRequest(number: 1) {
      commits(first: 10) {
        edges {
          node {
            commit {
              oid
              message
            }
          }
        }
      }
      comments(first: 10) {
        edges {
          node {
            body
            author {
              login
            }
          }
        }
      }
      reviews(first: 10) {
        edges {
          node {
            state
          }
        }
      }
    }
  }
}
```

You can also extend the power of this query by [substituting a variable](/graphql/guides/forming-calls-with-graphql#working-with-variables) for the pull request number.

## 示例：强类型化

GraphQL 架构属于强类型化架构，可使数据处理更加安全。

Consider an example of adding a comment to an issue or pull request using a GraphQL [mutation](/graphql/reference/mutations), and mistakenly specifying an integer rather than a string for the value of [`clientMutationId`](/graphql/reference/mutations#addcomment):

```graphql
mutation {
  addComment(input:{clientMutationId: 1234, subjectId: "MDA6SXNzdWUyMjcyMDA2MTT=", body: "Looks good to me!"}) mutation {
  addComment(input:{clientMutationId: "1234", subjectId: "MDA6SXNzdWUyMjcyMDA2MTT=", body: "Looks good to me!"}) {
    clientMutationId
    commentEdge {
      node {
        body
        repository {
          id
          name
          nameWithOwner
        }
        issue {
          number
        }
      }
    }
  }
}
```

执行此查询将返回错误，并指定此操作的预期类型：

```json
{
  "data": null,
  "errors": [
    {
      "message": "Argument 'input' on Field 'addComment' has an invalid value. Expected type 'AddCommentInput!'.",
      "locations": [
        {
          "line": 3,
          "column": 3
        }
      ]
    },
    {
      "message": "Argument 'clientMutationId' on InputObject 'AddCommentInput' has an invalid value. Expected type 'String'.",
      "locations": [
        {
          "line": 3,
          "column": 20
        }
      ]
    }
  ]
}
```

用引号括住 `1234` 可将此值从整数转换为字符串，预期类型为：

```graphql
mutation {
  addComment(input:{clientMutationId: 1234, subjectId: "MDA6SXNzdWUyMjcyMDA2MTT=", body: "Looks good to me!"}) {
    clientMutationId
    commentEdge {
      node {
        body
        repository {
          id
          name
          nameWithOwner
        }
        issue {
          number
        }
      }
    }
  }
} mutation {
  addComment(input:{clientMutationId: "1234", subjectId: "MDA6SXNzdWUyMjcyMDA2MTT=", body: "Looks good to me!"}) {
    clientMutationId
    commentEdge {
      node {
        body
        repository {
          id
          name
          nameWithOwner
        }
        issue {
          number
        }
      }
    }
  }
}
```
