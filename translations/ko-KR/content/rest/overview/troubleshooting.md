---
title: 문제 해결
intro: REST API에서 발생하는 가장 일반적인 문제를 해결하는 방법을 알아봅니다.
redirect_from:
  - /v3/troubleshooting
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
ms.openlocfilehash: c696f18d89ffe7d9c9c7c13eda933285502132ae
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192835'
---
API에서 몇 가지 이상한 점이 발생하는 경우 발생할 수 있는 몇 가지 문제에 대한 해결 목록은 다음과 같습니다.

{% ifversion api-date-versioning %}

## `400` 지원되지 않는 API 버전에 대한 오류

헤더를 `X-GitHub-Api-Version` 사용하여 API 버전을 지정해야 합니다. 예를 들면 다음과 같습니다.

```shell
$ curl {% data reusables.rest-api.version-header %} https://api.github.com/zen
```

존재하지 않는 버전을 지정하면 오류가 발생합니다 `400` .

자세한 내용은 "[API 버전"을 참조하세요](/rest/overview/api-versions).

{% endif %}

## 기존 리포지토리에 대한 `404` 오류

일반적으로 클라이언트가 제대로 인증되지 않으면 `404` 오류가 발생합니다.
이러한 경우에 `403 Forbidden`이 표시될 것으로 예상할 수 있습니다. 그러나 프라이빗 리포지토리에 대한 어떤 정보도 제공하지 않기 때문에 API는 대신 `404` 오류를 반환합니다.

문제를 해결하려면 [올바르게 인증하고](/guides/getting-started/), [OAuth 액세스 토큰에 필요한 범위가 있고](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), [타사 애플리케이션 제한][oap-guide]이 액세스를 차단하지 않으며, [토큰이 만료되거나 해지되지 않았는지](/github/authenticating-to-github/keeping-your-account-and-data-secure/token-expiration-and-revocation) 확인합니다.

## 모든 결과가 반환되지는 않음

대부분의 API 호출은 리소스 목록(예: 사용자, 문제 등)에 액세스하여 페이지 매김을 지원합니다.  요청을 수행하고 불완전한 결과 집합을 수신하는 경우 첫 번째 페이지만 표시할 수 있습니다. 더 많은 결과를 얻으려면 나머지 페이지를 요청해야 합니다.

페이지 매김 URL의 형식을 시도하고 추측하지 않는 것이 중요합니다. 모든 API 호출이 동일한 구조를 사용하는 것은 아닙니다. 대신 모든 요청과 함께 반환되는 링크 헤더에서 페이지 매김 정보를 추출합니다. 페이지 매김에 대한 자세한 내용은 "[REST API에서 페이지 매김 사용"을](/rest/guides/using-pagination-in-the-rest-api) 참조하세요.

[oap-guide]: https://developer.github.com/changes/2015-01-19-an-integrators-guide-to-organization-application-policies/

{% ifversion fpt or ghec %}
## 기본 인증 오류

2020년 11월 13일에 REST API 및 OAuth 권한 부여 API에 대한 사용자 이름 및 암호 인증은 더 이상 사용되지 않으며 더 이상 작동하지 않습니다.

### 기본 인증에 `username`/`password` 사용

API 호출에 `username` 및 `password`를 사용하는 경우 더 이상 인증할 수 없습니다. 예를 들면 다음과 같습니다.

```bash
curl -u my_user:my_password https://api.github.com/user/repos
```

대신 엔드포인트를 테스트하거나 로컬 개발을 수행할 때 [{% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line) 를 사용합니다.

```bash
curl -H 'Authorization: Bearer my_access_token' https://api.github.com/user/repos
```

OAuth 앱의 경우 [웹 애플리케이션 흐름](/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow)을 사용하여 API 호출의 헤더에 사용할 OAuth 토큰을 생성해야 합니다.

```bash
curl -H 'Authorization: Bearer my-oauth-token' https://api.github.com/user/repos
```

## 시간 제한

{% data variables.product.product_name %}이(가) API 요청을 처리하는 데 10초 이상 걸리면 {% data variables.product.product_name %}이(가) 요청을 종료하고 시간 제한 응답을 받게 됩니다.

{% endif %}
