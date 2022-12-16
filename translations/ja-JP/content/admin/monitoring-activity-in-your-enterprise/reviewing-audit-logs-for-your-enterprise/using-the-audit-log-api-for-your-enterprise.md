---
title: エンタープライズの監査ログ API を使う
intro: REST または GraphQL API を使って、エンタープライズ イベントをプログラムで取得できます。
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
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192658'
---
## Audit log API を使用する

監査ログは、GraphQL API または REST API を使用して操作できます。{% ifversion read-audit-scope %}これらの API を介して `read:audit_log` スコープを使用して、監査ログにアクセスできます。{% endif %}

API 応答のタイムスタンプと日付フィールドは [UTC エポック ミリ秒](http://en.wikipedia.org/wiki/Unix_time)単位で計測されます。

## 監査ログ GraphQL API のクエリを実行する

知的財産が確実にセキュアに保たれるようにし、エンタープライズのコンプライアンスを維持するために、監査ログ GraphQL API を使って監査ログのデータのコピーを保持し、モニタリングできます: {% data reusables.audit_log.audit-log-api-info %}

{% ifversion not ghec %}監査ログ API を使って Git イベントを取得することができないことに注意してください。{% else %}GraphQL API を使って Git イベントを取得することができないことに注意してください。 Git イベントを取得するには、代わりに REST API を使用してください。 詳細については、「[エンタープライズの監査ログ アクション](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#git-category-actions)」の `git` カテゴリ アクション、REST API ドキュメントの「[Enterprise 管理](/rest/reference/enterprise-admin#audit-log)」と「[組織](/rest/reference/orgs#get-the-audit-log-for-an-organization)の監査ログ エンドポイント」を参照してください。{% endif %}

GraphQL のレスポンスには、90 日から 120 日までのデータを含めることができます。

### 例 1: エンタープライズ内の組織に追加された、または組織から削除されたメンバー

次のクエリは、`avocado-corp` エンタープライズの監査ログをフェッチし、実行された唯一のアクションが組織のメンバーの追加または削除であったエンタープライズ内の最初の 10 の組織を返します。 各組織の最初の 20 個の監査ログ エントリが返されます。 

このクエリでは、組織オブジェクトの [auditlog](/graphql/reference/objects) フィールドと、[OrgAddMemberAuditEntry](/graphql/reference/objects#orgaddmemberauditentry) と [OrgRemoveMemberAuditEntry](/graphql/reference/objects#orgremovememberauditentry) オブジェクトを使います。 エンタープライズの監査ログのクエリを実行する {% data variables.product.prodname_dotcom %} アカウントは、エンタープライズ内の各組織の組織所有者である必要があります。

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

GraphQL API は、クエリごとに最大 100 個のノードを返します。 追加の結果を取得するには、ページ分割処理を実装する必要があります。 詳細については、GraphQL API ドキュメントの「[リソース制限](/graphql/overview/resource-limitations#node-limit)」と、GraphQL の公式ドキュメントの「[改ページ位置の自動修正](https://graphql.org/learn/pagination/)」を参照してください。
### 例 2: 特定の日付とアクターを対象とした組織内のイベント

クエリ文字列の中でスペースで区切ることで、`created` と `actor` のように複数の検索語句を指定できます。

次のクエリは、2022 年 1 月 1 日以降に `octocat` ユーザーによって実行されたアクションがある `octo-org` 組織に関連する `avocado-corp` エンタープライズのすべての監査ログをフェッチします。 最初の 20 個の監査ログ エントリが返され、最も新しいログ エントリが最初に表示されます。 

このクエリは、[AuditEntry](/graphql/reference/interfaces#auditentry) インターフェイスを使います。 エンタープライズ監査ログのクエリを実行する {% data variables.product.prodname_dotcom %} アカウントは、`octo-org` 組織所有者である必要があります。

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

その他のクエリ例については、[platform-samples リポジトリ](https://github.com/github/platform-samples/blob/master/graphql/queries)を参照してください。

## 監査ログ REST API のクエリを実行する

知的財産が確実にセキュアに保たれるようにし、エンタープライズのコンプライアンスを維持するために、監査ログ REST API を使って監査ログのデータのコピーを保持し、モニタリングできます: {% data reusables.audit_log.audited-data-list %}

{% data reusables.audit_log.retention-periods %}

監査ログ REST API の詳細については、[Enterprise 管理](/rest/reference/enterprise-admin#audit-log)に関するページと「[組織](/rest/reference/orgs#get-the-audit-log-for-an-organization)」を参照してください。

### 例 1: 特定の日付を対象としたエンタープライズ内のすべてのイベント (ページ分割あり)

ページベースまたはカーソル ベースのページネーションを使用できます。 ページネーションの詳細については、「[REST API でページネーションを使用する](/rest/guides/using-pagination-in-the-rest-api)」を参照してください。

#### ページベースのページネーションの例

次のクエリは、`avocado-corp` エンタープライズで 2022 年 1 月 1 日に作成された監査ログ イベントを検索し、ページネーションを使用して 1 ページあたり最大 100 件の項目で最初のページを返します。 ページネーションの詳細については、「[REST API でページネーションを使用する](/rest/guides/using-pagination-in-the-rest-api)」を参照してください。

```shell
curl -H "Authorization: Bearer TOKEN" \
--request GET \
"https://api.github.com/enterprises/avocado-corp/audit-log?phrase=created:2022-01-01&page=1&per_page=100"
```

#### カーソルベースのページネーションの例

次のクエリは、`avocado-corp` エンタープライズで 2022 年 1 月 1 日に作成された監査ログ イベントを検索し、ページネーションを使用して 1 ページあたり最大 100 件の項目で最初のページを返します。 ページネーションの詳細については、「[REST API でページネーションを使用する](/rest/guides/using-pagination-in-the-rest-api)」を参照してください。 `--include` フラグを指定すると、応答と共にヘッダーが返されます。

```
curl --include -H "Authorization: Bearer TOKEN" \
--request GET \
"https://api.github.com/enterprises/avocado-corp/audit-log?phrase=created:2022-01-01&per_page=100"
```

結果が 100 を超える場合、`link` ヘッダーには、次のページ、1 ページ目、前のページの結果をフェッチするための URL が含まれます。

```
link: <https://api.github.com/enterprises/13827/audit-log?%3A2022-11-01=&per_page=100&after=MS42NjQzODMzNTk5MjdlKzEyfDloQzBxdURzaFdVbVlLWjkxRU9mNXc%3D&before=>; rel="next", 
<https://api.github.com/enterprises/13827/audit-log?%3A2022-11-01=&per_page=100&after=&before=>; rel="first", 
<https://api.github.com/enterprises/13827/audit-log?%3A2022-11-01=&per_page=100&after=&before=MS42Njc4NDA2MjM4MzNlKzEyfExqeG5sUElvNEZMbG1XZHA5akdKTVE%3D>; rel="prev"
```

対応するページネーション リンクを次の要求にコピーします。 次に例を示します。

```shell
curl -I -H "Authorization: Bearer TOKEN" \
--request GET \
"https://api.github.com/enterprises/13827/audit-log?%3A2022-11-01=&per_page=100&after=MS42Njc4NDA2MjM5NDFlKzEyfHRYa3AwSkxUd2xyRjA5bWxfOS1RbFE%3D&before="
```

### 例 2: 特定の日付とアクターを対象としたエンタープライズにおける pull request のイベント

`created` と `actor` のように複数の検索語句を指定するには、整形された URL の中で `+` 記号または ASCII 文字コード `%20` で区切ります。

次のクエリは、イベントが `avocado-corp` エンタープライズで 2022 年 1 月 1 日以降に発生し、アクションが `octocat` ユーザーによって実行された pull request の監査ログ イベントを検索します。

```shell
curl -H "Authorization: Bearer TOKEN" \
--request GET \
"https://api.github.com/enterprises/avocado-corp/audit-log?phrase=action:pull_request+created:>=2022-01-01+actor:octocat"
```






