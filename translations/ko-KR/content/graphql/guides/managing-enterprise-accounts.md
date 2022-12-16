---
title: 엔터프라이즈 계정 관리
intro: GraphQL API를 사용하여 엔터프라이즈 계정 및 엔터프라이즈 계정이 소유한 조직을 관리할 수 있습니다.
redirect_from:
  - /v4/guides/managing-enterprise-accounts
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
shortTitle: Manage enterprise accounts
ms.openlocfilehash: c55a2b23ff88214739402f78f00c2682c97df93b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106783'
---
## GraphQL을 사용하여 엔터프라이즈 계정 관리하기 정보

조직에서 모니터링 및 변경을 수행하고 규정 준수를 유지 관리하려면, GraphQL API로서만 사용 가능한 Enterprise Accounts API 및 Audit Log API를 사용할 수 있습니다.

엔터프라이즈 계정 엔드포인트는 GitHub Enterprise Cloud와 GitHub Enterprise Server에서 모두 작동합니다.

GraphQL을 사용하면 지정한 데이터만 요청하고 반환할 수 있습니다. 예를 들어 GraphQL 쿼리를 만들거나 정보를 요청하여 조직에 추가된 새 조직 구성원을 모두 볼 수 있습니다. 또는 관리자를 Enterprise 계정에 초대하도록 변형 또는 변경을 수행할 수 있습니다.

Audit Log API를 사용하면 누군가가 다음을 수행할 때 모니터링할 수 있습니다.
- 조직 또는 리포지토리 설정에 액세스
- 권한 변경
- 조직, 리포지토리 또는 팀에서 사용자 추가 또는 제거
- 사용자를 관리자로 승격
- GitHub 앱의 권한 변경

Audit Log API를 사용하면 감사 로그 데이터의 복사본을 유지할 수 있습니다. Audit Log API를 사용하여 수행된 쿼리의 경우 GraphQL 응답에 최대 90~120일 동안의 데이터가 포함될 수 있습니다. Audit Log API에서 사용할 수 있는 필드 목록은 “[AuditEntry 인터페이스](/graphql/reference/interfaces#auditentry/)”를 참조하세요.

Enterprise Accounts API를 사용하면 다음을 수행할 수 있습니다.
- 엔터프라이즈 계정에 속한 모든 조직 및 리포지토리를 나열하고 검토합니다.
- 엔터프라이즈 계정 설정을 변경합니다.
- 엔터프라이즈 계정 및 해당 조직의 설정에 대한 정책을 구성합니다.
- 엔터프라이즈 계정에 관리자를 초대합니다.
- 엔터프라이즈 계정에 새 조직을 만듭니다.

Enterprise Accounts API에서 사용할 수 있는 필드 목록은 “[Enterprise Accounts API에 대한 GraphQL 필드 및 형식](/graphql/guides/managing-enterprise-accounts#graphql-fields-and-types-for-the-enterprise-accounts-api)”을 참조하세요.

## 엔터프라이즈 계정에 대해 GraphQL 사용 시작

GraphQL을 사용하여 엔터프라이즈 계정을 관리하려면 다음 단계를 수행합니다.
 - {% data variables.product.pat_generic %}을(를) 사용하여 인증
 - GraphQL 클라이언트 선택 또는 GraphQL Explorer 사용
 - GraphQL API를 사용하도록 Insomnia 설정

일부 예제 쿼리는 “[Enterprise Accounts API를 사용하는 예제 쿼리](#an-example-query-using-the-enterprise-accounts-api)”를 참조하세요.

### 1. {% data variables.product.pat_generic %}을(를) 사용하여 인증

{% data reusables.user-settings.graphql-classic-pat-only %}

1. GraphQL로 인증하려면 개발자 설정에서 {% data variables.product.pat_generic %}을(를) 생성해야 합니다. 자세한 내용은 "[{% data variables.product.pat_generic %} 만들기](/github/authenticating-to-github/creating-a-personal-access-token)"를 참조하세요.

2. 액세스하려는 GHES 영역에 대해 {% data variables.product.pat_generic %}에 관리자 및 모든 권한 권한을 부여합니다. 프라이빗 리포지토리, 조직, 팀, 사용자 데이터 및 엔터프라이즈 청구 및 프로필 데이터에 대한 액세스에 대한 전체 권한을 위해 {% data variables.product.pat_generic %}에 대해 이러한 범위를 선택하는 것이 좋습니다.
    - `repo`
    - `admin:org`
    - `user`
    - `admin:enterprise`

  엔터프라이즈 계정 특정 범위는 다음과 같습니다.
    - `admin:enterprise`: 엔터프라이즈를 완전히 제어할 수 있습니다(, `manage_billing:enterprise` 및 `read:enterprise`포함`manage_runners:enterprise`).
    - `manage_billing:enterprise`: 엔터프라이즈 청구 데이터를 읽고 씁니다. {% ifversion ghes or ghae %}
    - `manage_runners:enterprise`: GitHub Actions 엔터프라이즈 실행기 및 실행기 그룹을 관리할 수 있는 액세스 권한.{% endif %}
    - `read:enterprise`: 엔터프라이즈 프로필 데이터 읽기.

3. {% data variables.product.pat_generic %}을(를) 복사하고 GraphQL 클라이언트에 추가할 때까지 안전한 위치에 보관합니다.

### 2. GraphQL 클라이언트 선택

기본 URL을 구성할 수 있는 GraphiQL 또는 다른 독립 실행형 GraphQL 클라이언트를 사용하는 것이 좋습니다.

다음 GraphQL 클라이언트를 사용하는 것도 고려할 수 있습니다.
  - [Insomnia](https://support.insomnia.rest/article/176-graphql-queries)
  - [GraphiQL](https://www.gatsbyjs.org/docs/running-queries-with-graphiql/)
  - [Postman](https://learning.getpostman.com/docs/postman/sending_api_requests/graphql/)

다음 단계에서는 Insomnia를 사용합니다.

### 3. 엔터프라이즈 계정에서 GitHub GraphQL API를 사용하도록 Insomnia 설정

1. 기본 URL 및 `POST` 메서드를 GraphQL 클라이언트에 추가합니다. GraphQL을 사용하여 정보(쿼리)를 요청하거나, 정보(변형)를 변경하거나, GitHub API를 사용하여 데이터를 전송할 때 기본 HTTP 메서드는 `POST`이고 기본 URL은 다음 구문을 따릅니다.
    - 엔터프라이즈 인스턴스의 경우: `https://<HOST>/api/graphql`
    - GitHub Enterprise 클라우드의 경우: `https://api.github.com/graphql`

2. 인증하려면 인증 옵션 메뉴를 열고 **전달자 토큰** 을 선택합니다. 다음으로 이전에 복사한 {% data variables.product.pat_generic %}을(를) 추가합니다.

 ![{% data variables.product.pat_generic %}에 대한 권한 옵션](/assets/images/developer/graphql/insomnia-base-url-and-pat.png)

 ![{% data variables.product.pat_generic %}에 대한 권한 옵션](/assets/images/developer/graphql/insomnia-bearer-token-option.png)

3. 헤더 정보를 포함합니다.
   - 헤더로 `Content-Type`, 값으로 `application/json`을 추가합니다.
   ![표준 헤더](/assets/images/developer/graphql/json-content-type-header.png)
   ![Audit Log API에 대한 미리 보기 값이 있는 헤더](/assets/images/developer/graphql/preview-header-for-2.18.png)

이제 쿼리 만들기를 시작할 준비가 되었습니다.

## Enterprise Accounts API를 사용하는 예제 쿼리

이 GraphQL 쿼리는 Enterprise Accounts API를 사용하는 각 어플라이언스의 조직의 총 {% ifversion not ghae %}`public`{% else %}`private`{% endif %} 리포지토리 수를 요청합니다. 이 쿼리를 사용자 지정하려면 `<enterprise-account-name>`을 엔터프라이즈 계정의 핸들로 바꿉니다. 예를 들어 엔터프라이즈 계정이 `https://github.com/enterprises/octo-enterprise`에 있는 경우 `<enterprise-account-name>`을 `octo-enterprise`로 바꿉니다.

{% ifversion not ghae %}

```graphql
query publicRepositoriesByOrganization($slug: String!) {
  enterprise(slug: $slug) {
    ...enterpriseFragment
  }
}

fragment enterpriseFragment on Enterprise {
  ... on Enterprise{
    name
    organizations(first: 100){
      nodes{
        name
        ... on Organization{
          name
          repositories(privacy: PUBLIC){
            totalCount
          }
        }
      }
    }
  }
}

# Passing our Enterprise Account as a variable
variables {
  "slug": "<enterprise-account-name>"
}
```

{% else %}

```graphql
query privateRepositoriesByOrganization($slug: String!) {
  enterprise(slug: $slug) {
    ...enterpriseFragment
  }
}

fragment enterpriseFragment on Enterprise {
  ... on Enterprise{
    name
    organizations(first: 100){
      nodes{
        name
        ... on Organization{
          name
          repositories(privacy: PRIVATE){
            totalCount
          }
        }
      }
    }
  }
}

# Passing our Enterprise Account as a variable
variables {
  "slug": "<enterprise-account-name>"
}
```
{% endif %}

다음 GraphQL 쿼리 예제에서는 Enterprise Account API를 사용하지 않고 각 조직에서 {% ifversion not ghae %}`public`{% else %}`private`{% endif %} 리포지토리의 수를 검색하는 것이 얼마나 어려운지를 보여 줍니다.  GraphQL Enterprise Accounts API는 엔터프라이즈용으로 이 작업을 더 간단하게 만들었습니다. 사용자가 단일 변수만 사용자 지정하면 되기 때문입니다. 이 쿼리를 사용자 지정하려면 `<name-of-organization-one>`, `<name-of-organization-two>` 등을 인스턴스의 조직 이름으로 바꿉니다.

{% ifversion not ghae %}
```graphql
# Each organization is queried separately
{
  organizationOneAlias: organization(login: "nameOfOrganizationOne") {
    # How to use a fragment
    ...repositories
  }
  organizationTwoAlias: organization(login: "nameOfOrganizationTwo") {
    ...repositories
  }
  # organizationThreeAlias ... and so on up-to lets say 100
}

## How to define a fragment
fragment repositories on Organization {
  name
  repositories(privacy: PUBLIC){
    totalCount
  }
}
```
{% else %}
```graphql
# Each organization is queried separately
{
  organizationOneAlias: organization(login: "name-of-organization-one") {
    # How to use a fragment
    ...repositories
  }
  organizationTwoAlias: organization(login: "name-of-organization-two") {
    ...repositories
  }
  # organizationThreeAlias ... and so on up-to lets say 100
}

## How to define a fragment
fragment repositories on Organization {
  name
  repositories(privacy: PRIVATE){
    totalCount
  }
}
```
{% endif %}

## 각 조직을 개별적으로 쿼리

{% ifversion not ghae %}

```graphql
query publicRepositoriesByOrganization {
  organizationOneAlias: organization(login: "<name-of-organization-one>") {
    # How to use a fragment
    ...repositories
  }
  organizationTwoAlias: organization(login: "<name-of-organization-two>") {
    ...repositories
  }
  # organizationThreeAlias ... and so on up-to lets say 100
}
# How to define a fragment
fragment repositories on Organization {
  name
  repositories(privacy: PUBLIC){
    totalCount
  }
}
```

{% else %}

```graphql
query privateRepositoriesByOrganization {
  organizationOneAlias: organization(login: "<name-of-organization-one>") {
    # How to use a fragment
    ...repositories
  }
  organizationTwoAlias: organization(login: "<name-of-organization-two>") {
    ...repositories
  }
  # organizationThreeAlias ... and so on up-to lets say 100
}
# How to define a fragment
fragment repositories on Organization {
  name
  repositories(privacy: PRIVATE){
    totalCount
  }
}
```

{% endif %}

이 GraphQL 쿼리는 엔터프라이즈 조직에 대한 마지막 5개의 로그 항목을 요청합니다. 이 쿼리를 사용자 지정하려면 `<org-name>` 및 `<user-name>`을 바꿉니다.

```graphql
{
  organization(login: "<org-name>") {
    auditLog(last: 5, query: "actor:<user-name>") {
      edges {
        node {
          ... on AuditEntry {
# Get Audit Log Entry by 'Action'
            action
            actorLogin
            createdAt
# User 'Action' was performed on
           user{
              name
                email
            }
          }
        }
      }
    }
  }
}
```

GraphQL 시작에 대한 자세한 내용은 “[GraphQL 소개](/graphql/guides/introduction-to-graphql)” 및 “[GraphQL을 사용하여 호출 형성](/graphql/guides/forming-calls-with-graphql)”을 참조하세요.

## Enterprise Accounts API에 대한 GraphQL 필드 및 형식

다음은 Enterprise Accounts API에서 사용할 수 있는 새 쿼리, 변형, 스키마 정의 형식에 대한 개요입니다.

Enterprise Accounts API에서 사용할 수 있는 새 쿼리, 변형, 스키마 정의 형식에 대한 자세한 내용은 [GraphQL 참조 페이지](/graphql)의 자세한 GraphQL 정의가 포함된 사이드바를 참조하세요.

GitHub의 GraphQL Explorer 내에서 참조 문서에 액세스할 수 있습니다. 자세한 내용은 [Explorer 사용](/graphql/guides/using-the-explorer#accessing-the-sidebar-docs)을 참조하세요.
인증 및 속도 제한 세부 정보와 같은 기타 정보는 [가이드](/graphql/guides)를 확인하세요.
