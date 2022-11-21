---
title: OAuth 앱을 GitHub 앱으로 마이그레이션
intro: '{% data variables.product.prodname_oauth_app %}를 {% data variables.product.prodname_github_app %}로 마이그레이션할 때의 이점과 {% data variables.product.prodname_marketplace %}에 나열되지 않은 {% data variables.product.prodname_oauth_app %}를 마이그레이션하는 방법에 대해 알아봅니다. '
redirect_from:
  - /apps/migrating-oauth-apps-to-github-apps
  - /developers/apps/migrating-oauth-apps-to-github-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Migrate from OAuth Apps
ms.openlocfilehash: 4fea258cc9677401d8212634fdcc04abf22724c9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147081034'
---
이 문서에서는 OAuth 앱에서 GitHub 앱으로 마이그레이션하는 것을 고려하는 기존 통합업체를 위한 지침을 제공합니다.

## GitHub 앱으로 전환하는 이유

[GitHub 앱](/apps/)은 순수 OAuth 기반 통합에 비해 많은 이점을 제공하기 때문에 공식적으로 권장되는 GitHub 통합 방식입니다.

- [세분화된 권한](/apps/differences-between-apps/#requesting-permission-levels-for-resources)은 GitHub 앱이 액세스할 수 있는 특정 정보를 대상으로 하므로 권한으로 제한할 수 없는 OAuth 앱보다 보안 정책을 사용하는 사용자 및 조직에서 앱을 더 광범위하게 사용할 수 있습니다.
- [수명이 짧은 토큰](/apps/differences-between-apps/#token-based-identification)은 OAuth 토큰을 통해 보다 안전한 인증 방법을 제공합니다. OAuth 토큰은 OAuth 앱에 권한을 부여한 사용자가 토큰을 철회할 때까지 만료되지 않습니다. GitHub 앱은 빠르게 만료되는 토큰을 사용하여 손상된 토큰을 사용할 수 있는 기간을 훨씬 더 짧게 만듭니다.
- [기본 제공 중앙 집중식 웹후크](/apps/differences-between-apps/#webhooks)는 앱이 액세스할 수 있는 모든 리포지토리 및 조직에 대한 이벤트를 수신합니다. 반대로 OAuth 앱은 사용자가 액세스할 수 있는 각 리포지토리 및 조직에 대한 웹후크를 구성해야 합니다.
- [봇 계정](/apps/differences-between-apps/#machine-vs-bot-accounts)은 {% data variables.product.product_name %} 사용자를 사용하지 않으며 처음에 앱을 설치한 사람이 조직을 떠날 때에도 설치 상태를 유지합니다.
- OAuth에 대한 기본 제공 지원은 [사용자-서버 엔드포인트](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)를 사용하여 GitHub 앱에서 계속 사용할 수 있습니다.
- 봇 계정에 대한 전용 [API 속도 제한](/apps/building-github-apps/understanding-rate-limits-for-github-apps/)은 통합을 통해 스케일링됩니다.
- 리포지토리 소유자는 조직 리포지토리에 [GitHub 앱을 설치](/apps/differences-between-apps/#who-can-install-github-apps-and-authorize-oauth-apps)할 수 있습니다. GitHub 앱의 구성에 조직의 리소스를 요청하는 권한이 있는 경우 조직 소유자는 설치를 승인해야 합니다.
- 오픈 소스 커뮤니티 지원은 [Octokit 라이브러리](/rest/overview/libraries) 및 [Probot](https://probot.github.io/)과 같은 다른 프레임워크를 통해 사용할 수 있습니다.
- GitHub 앱을 빌드하는 통합업체에게는 API에 대한 조기 액세스를 채택할 수 있는 기회가 제공됩니다.

## OAuth 앱을 GitHub 앱으로 변환

이 지침에서는 등록된 OAuth 앱{% ifversion fpt or ghec %}이 GitHub Marketplace{% endif %}에 나열되거나 나열되지 않을 수 있다고 가정합니다. 개략적으로 다음 단계를 수행해야 합니다.

1. [GitHub 앱에 사용 가능한 API 엔드포인트 검토](#review-the-available-api-endpoints-for-github-apps)
1. [API 속도 제한 내에서 유지하도록 설계](#design-to-stay-within-api-rate-limits)
1. [새 GitHub 앱 등록](#register-a-new-github-app)
1. [앱에 필요한 권한 확인](#determine-the-permissions-your-app-requires)
1. [웹후크 구독](#subscribe-to-webhooks)
1. [다양한 인증 방법 이해](#understand-the-different-methods-of-authentication)
1. [리포지토리에 GitHub 앱을 설치하도록 사용자에게 지시](#direct-users-to-install-your-github-app-on-repositories)
1. [불필요한 리포지토리 후크 제거](#remove-any-unnecessary-repository-hooks)
1. [사용자에게 OAuth 앱에 대한 액세스 권한을 철회하도록 권장](#encourage-users-to-revoke-access-to-your-oauth-app)
1. [OAuth 앱 삭제](#delete-the-oauth-app)

### GitHub 앱에 사용 가능한 API 엔드포인트 검토

대다수의 [REST API](/rest) 엔드포인트 및 [GraphQL](/graphql) 쿼리는 현재 GitHub 앱에서 사용할 수 있지만 일부 엔드포인트의 사용 설정은 여전히 진행 중입니다. [사용 가능한 REST 엔드포인트](/rest/overview/endpoints-available-for-github-apps)를 검토하여 필요한 엔드포인트가 GitHub 앱과 호환되는지 확인합니다. GitHub 앱에 사용하도록 설정된 일부 API 엔드포인트를 사용하면 앱이 사용자를 대신하여 작동할 수 있습니다. GitHub 앱이 사용자로 인증할 수 있도록 하는 엔드포인트의 목록은 “[사용자-서버 요청](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#user-to-server-requests)”을 참조하세요.

필요한 API 엔드포인트 목록을 최대한 빨리 검토하는 것이 좋습니다. {% data variables.product.prodname_github_apps %}에 대해 아직 사용하도록 설정되지 않은 엔드포인트가 필요한 경우 고객 지원팀에 알려주세요.

### API 속도 제한 내에서 유지하도록 설계

GitHub 앱은 조직의 리포지토리 및 사용자 수에 따라 증가할 수 있는 [속도 제한의 슬라이딩 규칙](/apps/building-github-apps/understanding-rate-limits-for-github-apps/)을 사용합니다. GitHub 앱은 [조건부 요청](/rest/overview/resources-in-the-rest-api#conditional-requests)을 하거나 [GraphQL API](/graphql)를 사용하여 요청을 통합할 수도 있습니다.

### 새 GitHub 앱 등록

GitHub 앱으로 전환하기로 결정한 후에는 [새 GitHub 앱을 만들어야](/apps/building-github-apps/) 합니다.

### 앱에 필요한 권한 확인

GitHub 앱을 등록할 때 앱 코드에 사용되는 각 엔드포인트에 필요한 권한을 선택해야 합니다. GitHub 앱에 사용할 수 있는 각 엔드포인트에 필요한 권한의 목록은 “[GitHub 앱 권한](/rest/reference/permissions-required-for-github-apps)”을 참조하세요.

GitHub 앱의 설정에서 앱에서 각 권한 유형에 대해 필요한 액세스 권한을 `No Access`, `Read-only` 또는 `Read & Write`로 지정할 수 있습니다. 세분화된 권한을 통해 앱은 필요한 데이터 하위 집합에 대한 대상 액세스 권한을 얻을 수 있습니다. 원하는 기능을 제공하는 가능한 가장 작은 사용 권한 집합을 지정하는 것이 좋습니다.

### 웹후크 구독

새 GitHub 앱을 만들고 권한을 선택한 후 구독하려는 웹후크 이벤트를 선택할 수 있습니다. 웹후크를 구독하는 방법을 알아보려면 “[GitHub 앱의 권한 편집](/apps/managing-github-apps/editing-a-github-app-s-permissions/)”을 참조하세요.

### 다양한 인증 방법 이해

GitHub 앱은 주로 짧은 시간 후에 만료되는 토큰 기반 인증을 사용하여 만료되지 않는 OAuth 토큰보다 더 강력한 보안을 제공합니다. 사용 가능한 다양한 인증 방법과 이 인증 방법을 사용해야 하는 경우를 이해하는 것이 중요합니다.

* **JWT(JSON Web Token)** 는 [GitHub 앱으로 인증합니다](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app). 예를 들어 **JWT** 를 통해 인증하여 애플리케이션 설치 세부 정보를 가져오거나 **JWT** 를 **설치 액세스 토큰** 으로 교환할 수 있습니다.
* **설치 액세스 토큰** 은 [GitHub 앱의 특정 설치로 인증](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation)합니다(서버-서버 요청이라고도 함). 예를 들어 **설치 액세스 토큰** 으로 인증하여 문제를 열거나 끌어오기 요청에 대한 피드백을 제공할 수 있습니다.
* **OAuth 액세스 토큰** 은 [GitHub 앱의 사용자로서 인증](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site)합니다(사용자-서버 요청이라고도 함). 예를 들어 GitHub 앱이 사용자의 ID를 확인하거나 사용자를 대신하여 조치를 취해야 하는 경우 OAuth 액세스 토큰을 사용하여 사용자로서 인증할 수 있습니다.

가장 일반적인 시나리오는 **설치 액세스 토큰** 을 사용하여 특정 설치로 인증하는 것입니다.

### 리포지토리에 GitHub 앱을 설치하도록 사용자에게 지시

OAuth 앱에서 GitHub 앱으로 전환한 후에는 GitHub 앱을 설치할 수 있음을 사용자에게 알려야 합니다. 예를 들어 애플리케이션 내의 활용 방안 배너에 GitHub 앱의 설치 링크를 포함할 수 있습니다. 전환을 용이하게 하기 위해 쿼리 매개 변수를 사용하여 GitHub 앱의 설치 흐름을 통과하는 사용자 또는 조직 계정을 식별하고 OAuth 앱이 액세스한 리포지토리를 미리 선택할 수 있습니다. 이렇게 하면 액세스 권한을 이미 갖고 있는 리포지토리에 사용자가 GitHub 앱을 쉽게 설치할 수 있습니다.

#### 쿼리 매개 변수

| Name | 설명 |
|------|-------------|
| `suggested_target_id` | **필수**: GitHub 앱을 설치하는 사용자 또는 조직의 ID입니다. |
| `repository_ids[]` | 리포지토리 ID의 배열입니다. 생략되는 경우 모든 리포지토리를 선택합니다. 미리 선택할 수 있는 최대 리포지토리 수는 100개입니다. |

#### URL 예
```
https://github.com/apps/YOUR_APP_NAME/installations/new/permissions?suggested_target_id=ID_OF_USER_OR_ORG&repository_ids[]=REPO_A_ID&repository_ids[]=REPO_B_ID
```

`YOUR_APP_NAME`을 GitHub 앱의 이름으로, `ID_OF_USER_OR_ORG`를 대상 사용자 또는 조직의 ID로 바꾸고 최대 100개의 리포지토리 ID(`REPO_A_ID` 및 `REPO_B_ID`)를 포함해야 합니다. OAuth 앱에서 액세스할 수 있는 리포지토리의 목록을 얻으려면 [인증된 사용자의 리포지토리 열거](/rest/reference/repos#list-repositories-for-the-authenticated-user) 및 [조직 리포지토리 열거](/rest/reference/repos#list-organization-repositories) 엔드포인트를 사용합니다.

### 불필요한 리포지토리 후크 제거

GitHub 앱이 리포지토리에 설치되면 레거시 OAuth 앱에서 만든 불필요한 웹후크를 제거해야 합니다. 두 앱이 모두 리포지토리에 설치된 경우 사용자의 기능이 중복될 수 있습니다. 웹후크를 제거하려면 `repositories_added` 작업을 사용하여 [`installation_repositories` 웹후크](/webhooks/event-payloads/#installation_repositories)를 수신 대기하고 OAuth 앱에서 만든 리포지토리에서 [리포지토리 웹후크를 삭제](/rest/reference/webhooks#delete-a-repository-webhook)할 수 있습니다.

### 사용자에게 OAuth 앱에 대한 액세스 권한을 철회하도록 권장

GitHub 앱 설치 기반이 커짐에 따라 사용자에게 레거시 OAuth 통합에 대한 액세스를 철회하도록 권장하는 것이 좋습니다. 자세한 내용은 “[OAuth 앱 권한 부여](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-oauth-apps)”를 참조하세요.

### OAuth 앱 삭제

OAuth 앱의 자격 증명이 남용되는 것을 방지하려면 OAuth 앱을 삭제하는 것이 좋습니다. 이 작업은 OAuth 앱의 나머지 권한 부여도 모두 철회합니다. 자세한 내용은 “[Deleting an OAuth App](/developers/apps/managing-oauth-apps/deleting-an-oauth-app)(OAuth 앱 삭제)”를 참조하세요.
