---
title: 엔터프라이즈의 감사 로그 API 사용
intro: REST 또는 GraphQL API를 사용하여 프로그래밍 방식으로 엔터프라이즈 이벤트를 검색할 수 있습니다.
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
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192659'
---
## 감사 로그 API 사용

GraphQL API 또는 REST API를 사용하여 감사 로그와 상호 작용할 수 있습니다. {% ifversion read-audit-scope %} 범위를 사용하여 `read:audit_log` API를 통해 감사 로그에 액세스할 수 있습니다.{ % endif %}

API 응답의 타임스탬프 및 날짜 필드는 [UTC Epoch 밀리초](http://en.wikipedia.org/wiki/Unix_time) 단위로 측정됩니다.

## 감사 로그 GraphQL API 쿼리

지적 재산권의 안전을 보장하고 엔터프라이즈에 대한 규정 준수를 유지하기 위해 감사 로그 GraphQL API를 사용하여 감사 로그 데이터의 복사본을 유지하고 모니터링할 수 있습니다. {% data reusables.audit_log.audit-log-api-info %}

{% ifversion not ghec %}감사 로그 API를 사용하여 Git 이벤트를 검색할 수 없습니다.{% else %}GraphQL API. Git 이벤트를 검색하려면 REST API를 대신 사용합니다. 자세한 내용은 “[엔터프라이즈에 대한 감사 로그 작업](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#git-category-actions)”의 `git` 범주 작업과 “[Enterprise 관리](/rest/reference/enterprise-admin#audit-log)” 및 “REST API 설명서의 [조직](/rest/reference/orgs#get-the-audit-log-for-an-organization) 감사 로그 엔드포인트”를 참조하세요.{% endif %}

GraphQL 응답에는 최대 90~120일 동안의 데이터가 포함될 수 있습니다.

### 예제 1: 엔터프라이즈의 조직에 추가되거나 제거된 구성원

아래 쿼리는 `avocado-corp` 엔터프라이즈에 대한 감사 로그를 페치하고, 조직에서 멤버를 추가하거나 제거하는 작업만 수행한 엔터프라이즈의 처음 10개 조직을 반환합니다. 각 조직에 대한 처음 20개의 감사 로그 항목이 반환됩니다. 

이 쿼리는 조직 개체의 [auditlog](/graphql/reference/objects) 필드와 [OrgAddMemberAuditEntry](/graphql/reference/objects#orgaddmemberauditentry) 및 [OrgRemoveMemberAuditEntry](/graphql/reference/objects#orgremovememberauditentry) 개체를 사용합니다. 엔터프라이즈 감사 로그를 쿼리하는 {% data variables.product.prodname_dotcom %} 계정은 엔터프라이즈 내 각 조직의 조직 소유자여야 합니다.

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

GraphQL API는 쿼리당 최대 100개의 노드를 반환합니다. 추가 결과를 검색하려면 페이지 매김을 구현해야 합니다. 자세한 내용은 GraphQL API 설명서의 “[리소스 제한 사항](/graphql/overview/resource-limitations#node-limit)”과 공식 GraphQL 설명서의 [페이지 매김](https://graphql.org/learn/pagination/)을 참조하세요.
### 예제 2: 조직의 이벤트(특정 날짜 및 행위자)

쿼리 문자열에서 공백으로 구분하여 여러 검색 구(예: `created` 및 `actor`)를 지정할 수 있습니다.

아래 쿼리는 2022년 1월 1일 이후에 `octocat` 사용자가 작업을 수행한 `octo-org` 조직과 관련된 `avocado-corp` 엔터프라이즈에 대한 모든 감사 로그를 페치합니다. 처음 20개의 감사 로그 항목이 반환되고 최신 로그 항목이 먼저 표시됩니다. 

이 쿼리는 [AuditEntry](/graphql/reference/interfaces#auditentry) 인터페이스를 사용합니다. 엔터프라이즈 감사 로그를 쿼리하는 {% data variables.product.prodname_dotcom %} 계정은 `octo-org` 조직의 소유자여야 합니다.

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

더 많은 쿼리 예제는 [플랫폼 샘플 리포지토리](https://github.com/github/platform-samples/blob/master/graphql/queries)를 참조하세요.

## 감사 로그 REST API 쿼리

지적 재산권의 안전을 보장하고 엔터프라이즈에 대한 규정 준수를 유지하기 위해 감사 로그 REST API를 사용하여 감사 로그 데이터의 복사본을 유지하고 모니터링할 수 있습니다. {% data reusables.audit_log.audited-data-list %}

{% data reusables.audit_log.retention-periods %}

감사 로그 REST API에 대한 자세한 내용은 “[엔터프라이즈 관리](/rest/reference/enterprise-admin#audit-log)” 및 “[조직](/rest/reference/orgs#get-the-audit-log-for-an-organization)”을 참조하세요.

### 예제 1: 페이지를 매긴 특정 날짜에 대한 엔터프라이즈의 모든 이벤트

페이지 기반 페이지 매김 또는 커서 기반 페이지 매김을 사용할 수 있습니다. 페이지 매김에 대한 자세한 내용은 "[REST API에서 페이지 매김 사용"을](/rest/guides/using-pagination-in-the-rest-api) 참조하세요.

#### 페이지 기반 페이지 매김 예제

아래 쿼리는 엔터프라이즈에서 `avocado-corp` 2022년 1월 1일에 생성된 감사 로그 이벤트를 검색하고 페이지 매김을 사용하여 페이지당 최대 100개의 항목이 있는 첫 번째 페이지를 반환합니다. 페이지 매김에 대한 자세한 내용은 "[REST API에서 페이지 매김 사용"을](/rest/guides/using-pagination-in-the-rest-api) 참조하세요.

```shell
curl -H "Authorization: Bearer TOKEN" \
--request GET \
"https://api.github.com/enterprises/avocado-corp/audit-log?phrase=created:2022-01-01&page=1&per_page=100"
```

#### 커서 기반 페이지 매김을 사용하는 예제

아래 쿼리는 엔터프라이즈에서 `avocado-corp` 2022년 1월 1일에 생성된 감사 로그 이벤트를 검색하고 페이지 매김을 사용하여 페이지당 최대 100개의 항목이 있는 첫 번째 페이지를 반환합니다. 페이지 매김에 대한 자세한 내용은 "[REST API에서 페이지 매김 사용"을](/rest/guides/using-pagination-in-the-rest-api) 참조하세요. 플래그를 `--include` 사용하면 헤더가 응답과 함께 반환됩니다.

```
curl --include -H "Authorization: Bearer TOKEN" \
--request GET \
"https://api.github.com/enterprises/avocado-corp/audit-log?phrase=created:2022-01-01&per_page=100"
```

결과가 `link` 100개 이상인 경우 헤더에는 결과의 다음, 첫 번째 및 이전 페이지를 가져오는 URL이 포함됩니다.

```
link: <https://api.github.com/enterprises/13827/audit-log?%3A2022-11-01=&per_page=100&after=MS42NjQzODMzNTk5MjdlKzEyfDloQzBxdURzaFdVbVlLWjkxRU9mNXc%3D&before=>; rel="next", 
<https://api.github.com/enterprises/13827/audit-log?%3A2022-11-01=&per_page=100&after=&before=>; rel="first", 
<https://api.github.com/enterprises/13827/audit-log?%3A2022-11-01=&per_page=100&after=&before=MS42Njc4NDA2MjM4MzNlKzEyfExqeG5sUElvNEZMbG1XZHA5akdKTVE%3D>; rel="prev"
```

해당 페이지 매김 링크를 다음 요청에 복사합니다. 예를 들면 다음과 같습니다.

```shell
curl -I -H "Authorization: Bearer TOKEN" \
--request GET \
"https://api.github.com/enterprises/13827/audit-log?%3A2022-11-01=&per_page=100&after=MS42Njc4NDA2MjM5NDFlKzEyfHRYa3AwSkxUd2xyRjA5bWxfOS1RbFE%3D&before="
```

### 예제 2: 특정 날짜 및 행위자의 엔터프라이즈 끌어오기 요청에 대한 이벤트

`+` 기호 또는 ASCII 문자 코드 `%20`으로 구성된 URL에서 구분하여 `created` 및 `actor`와 같은 여러 검색 구문을 지정할 수 있습니다.

아래 쿼리는 `avocado-corp` 엔터프라이즈에서 2022년 1월 1일 이후에 이벤트가 발생하고 `octocat` 사용자가 작업을 수행한 끌어오기 요청에 대한 감사 로그 이벤트를 검색합니다.

```shell
curl -H "Authorization: Bearer TOKEN" \
--request GET \
"https://api.github.com/enterprises/avocado-corp/audit-log?phrase=action:pull_request+created:>=2022-01-01+actor:octocat"
```






