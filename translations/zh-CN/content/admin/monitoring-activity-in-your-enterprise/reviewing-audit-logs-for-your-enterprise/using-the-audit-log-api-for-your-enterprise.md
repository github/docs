---
title: 在企业中使用审核日志 API
intro: 可以使用 REST 或 GraphQL API 以编程方式检索企业事件。
shortTitle: Audit log API
permissions: 'Enterprise owners {% ifversion ghes %}and site administrators {% endif %}can use the audit log API.'
miniTocMaxHeadingLevel: 3
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: tutorial
topics:
  - Auditing
  - Enterprise
  - Logging
  - API
ms.openlocfilehash: f5dd0a3dcca1e7fd60361f0cb7c8ecf84296e036
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192655'
---
## 使用审核日志 API

可以使用 GraphQL API 或 REST API 与审核日志进行交互。{% ifversion read-audit-scope %} 可以使用 `read:audit_log` 范围通过 API 访问审核日志。{% endif %}

API 响应中的时间戳和日期字段以 [UTC epoch 毫秒](http://en.wikipedia.org/wiki/Unix_time)为度量单位。

## 查询审核日志 GraphQL API

为确保知识产权得到保护并让企业保持合规，可使用审核日志 GraphQL API 保留审核日志数据的副本并监视：{% data reusables.audit_log.audit-log-api-info %}

请注意，无法使用{% ifversion not ghec %}审核日志 API{% else %}GraphQL API 检索 Git 事件。 要检索 Git 事件，请改为使用 REST API。 有关详细信息，请参阅“[企业的审核日志操作](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#git-category-actions)”中的 `git` 类操作，以及“REST API 文档中的“[企业管理](/rest/reference/enterprise-admin#audit-log)”和[组织](/rest/reference/orgs#get-the-audit-log-for-an-organization)审核日志终结点”。{% endif %}

GraphQL 响应可包含长达 90 至 120 天的数据。

### 示例 1：从企业中的组织添加或移除的成员

下面的查询提取 `avocado-corp` 企业的审核日志，并返回企业中的前 10 个组织，其中执行的唯一操作是从组织添加或移除成员。 返回每个组织的前 20 个审核日志条目。 

此查询使用 Organization 对象以及 [OrgAddMemberAuditEntry](/graphql/reference/objects#orgaddmemberauditentry) 和 [OrgRemoveMemberAuditEntry](/graphql/reference/objects#orgremovememberauditentry) 对象的 [auditlog](/graphql/reference/objects) 字段。 用于查询企业审核日志的 {% data variables.product.prodname_dotcom %} 帐户必须是企业中每个组织的组织所有者。

```shell
{
  enterprise(slug: "avocado-corp") {
    organizations(first: 10, orderBy: {field: LOGIN, direction: DESC}) {
      nodes {
        name
        auditLog(first: 20) {
          edges {
            node {
              ... on OrgAddMemberAuditEntry {
                action
                actorLogin
                createdAt
              }
              ... on OrgRemoveMemberAuditEntry {
                action
                actorLogin
                createdAt
              }
            }
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
}
```

GraphQL API 将为每个查询最多返回 100 个节点。 若要检索其他结果，需要实现分页。 有关详细信息，请参阅 GraphQL API 文档中的“[资源限制](/graphql/overview/resource-limitations#node-limit)”和 GraphQL 官方文档中的[分页](https://graphql.org/learn/pagination/)。
### 示例 2：组织中在特定日期参与者参与的事件

你可以指定多个搜索短语（如 `created` 和 `actor`），具体方法是在查询字符串中用空格分隔它们。

以下查询提取 `avocado-corp` 企业中与 `octo-org` 组织相关的所有审核日志，其中操作由 `octocat` 用户在 2022 年 1 月 1 日或之后执行。 返回前 20 个审核日志条目，其中最新的日志条目排在最前面。 

此查询使用 [AuditEntry](/graphql/reference/interfaces#auditentry) 接口。 用于查询企业审核日志的 {% data variables.product.prodname_dotcom %} 帐户必须是 `octo-org` 组织的所有者。

```shell
{
  enterprise(slug: "avocado-corp") {
    organizations(first: 1, query: "octo-org") {
      nodes {
        name
        auditLog(first: 20, query: "actor:octocat created:>=2022-01-01T00:00:00.000Z", orderBy: {field: CREATED_AT, direction: DESC}) {
          edges {
            node {
              ... on AuditEntry {
                action
                actorLogin
                createdAt
                user {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
}
```

有关更多查询示例，请参阅[平台示例存储库](https://github.com/github/platform-samples/blob/master/graphql/queries)。

## 查询审核日志 REST API

为确保知识产权得到保护并让企业保持合规，可使用审核日志 REST API 保留审核日志数据的副本并监视：{% data reusables.audit_log.audited-data-list %}

{% data reusables.audit_log.retention-periods %}

有关审核日志 REST API 的详细信息，请参阅“[企业管理](/rest/reference/enterprise-admin#audit-log)”和“[组织](/rest/reference/orgs#get-the-audit-log-for-an-organization)”。

### 示例 1：企业中在特定日期的所有事件（使用分页显示）

可以使用基于页面的分页或基于游标的分页。 有关分页的详细信息，请参阅“[在 REST API 中使用分页](/rest/guides/using-pagination-in-the-rest-api)”。

#### 基于页面的分页的示例

以下查询搜索 `avocado-corp` 企业中于 2022 年 1 月 1 日创建的审核日志事件，并使用分页返回第一页，每页最多包含 100 个项。 有关分页的详细信息，请参阅“[在 REST API 中使用分页](/rest/guides/using-pagination-in-the-rest-api)”。

```shell
curl -H "Authorization: Bearer TOKEN" \
--request GET \
"https://api.github.com/enterprises/avocado-corp/audit-log?phrase=created:2022-01-01&page=1&per_page=100"
```

#### 基于游标的分页的示例

以下查询搜索 `avocado-corp` 企业中于 2022 年 1 月 1 日创建的审核日志事件，并使用分页返回第一页，每页最多包含 100 个项。 有关分页的详细信息，请参阅“[在 REST API 中使用分页](/rest/guides/using-pagination-in-the-rest-api)”。 `--include` 标志会导致返回的响应中包含标头。

```
curl --include -H "Authorization: Bearer TOKEN" \
--request GET \
"https://api.github.com/enterprises/avocado-corp/audit-log?phrase=created:2022-01-01&per_page=100"
```

如果结果超过 100 个，则 `link` 标头将包含用于提取下一页、第一页和上一页结果的 URL。

```
link: <https://api.github.com/enterprises/13827/audit-log?%3A2022-11-01=&per_page=100&after=MS42NjQzODMzNTk5MjdlKzEyfDloQzBxdURzaFdVbVlLWjkxRU9mNXc%3D&before=>; rel="next", 
<https://api.github.com/enterprises/13827/audit-log?%3A2022-11-01=&per_page=100&after=&before=>; rel="first", 
<https://api.github.com/enterprises/13827/audit-log?%3A2022-11-01=&per_page=100&after=&before=MS42Njc4NDA2MjM4MzNlKzEyfExqeG5sUElvNEZMbG1XZHA5akdKTVE%3D>; rel="prev"
```

将相应的分页链接复制到下一个请求中。 例如：

```shell
curl -I -H "Authorization: Bearer TOKEN" \
--request GET \
"https://api.github.com/enterprises/13827/audit-log?%3A2022-11-01=&per_page=100&after=MS42Njc4NDA2MjM5NDFlKzEyfHRYa3AwSkxUd2xyRjA5bWxfOS1RbFE%3D&before="
```

### 示例 2：组织中在特定日期参与者参与的拉取请求事件

你可以指定多个搜索短语（例如 `created` 和 `actor`），具体方法是在 URL 格式中用 `+` 符号或 ASCII 字符代码 `%20` 分隔它们。

以下查询搜索 `avocado-corp` 企业中拉取请求的审核日志事件，其中事件发生在 2022 年 1 月 1 日或之后，操作由 `octocat` 用户执行：

```shell
curl -H "Authorization: Bearer TOKEN" \
--request GET \
"https://api.github.com/enterprises/avocado-corp/audit-log?phrase=action:pull_request+created:>=2022-01-01+actor:octocat"
```






