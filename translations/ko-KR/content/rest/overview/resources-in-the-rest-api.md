---
title: REST API의 리소스
intro: '{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API에서 제공하는 리소스를 탐색하는 방법을 알아봅니다.'
redirect_from:
  - /rest/initialize-the-repo
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
topics:
  - API
ms.openlocfilehash: c7928ce90b887d6fa3bd5342fc1633b3e30983f1
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192851'
---
{% ifversion api-date-versioning %}
## API 버전

사용 가능한 리소스는 REST API 버전마다 다를 수 있습니다. 헤더를 `X-GitHub-Api-Version` 사용하여 API 버전을 지정해야 합니다. 자세한 내용은 "[API 버전"을 참조하세요](/rest/overview/api-versions).

{% endif %}

## 스키마

{% ifversion fpt or ghec %}모든 API 액세스는 HTTPS를 통해 수행되고 {% else %}API는 {% endif %}`{% data variables.product.api_url_code %}`에서 액세스됩니다.  모든 데이터가 JSON으로 전송되고 수신됩니다.

```shell
$ curl -I {% data variables.product.api_url_pre %}/users/octocat/orgs

> HTTP/2 200
> Server: nginx
> Date: Fri, 12 Oct 2012 23:33:14 GMT
> Content-Type: application/json; charset=utf-8
> ETag: "a00049ba79152d03380c34652f2cb612"
> X-GitHub-Media-Type: github.v3
> x-ratelimit-limit: 5000
> x-ratelimit-remaining: 4987
> x-ratelimit-reset: 1350085394{% ifversion ghes %}
> X-GitHub-Enterprise-Version: {{ currentVersion | remove: "enterprise-server@" }}.0{% elsif ghae %}
> X-GitHub-Enterprise-Version: GitHub AE{% endif %}
> Content-Length: 5
> Cache-Control: max-age=0, private, must-revalidate
> X-Content-Type-Options: nosniff
```

빈 필드는 생략되는 대신 `null`로 포함됩니다.

모든 타임스탬프는 UTC 시간, ISO 8601 형식으로 반환됩니다.

    YYYY-MM-DDTHH:MM:SSZ

타임스탬프의 표준 시간대에 대한 자세한 내용은 [이 섹션](#timezones)을 참조하세요.

### 요약 표현

리소스 목록을 가져올 때 응답에는 해당 리소스에 대한 특성의 _하위 집합_ 이 포함됩니다. 리소스의 "요약" 표현입니다. (일부 특성은 컴퓨팅 비용이 많이 들어 API가 제공하기 어렵습니다.
성능상의 이유로 요약 표현은 해당 특성을 제외합니다.
이러한 특성을 가져오려면 "자세한" 표현을 가져옵니다.)

**예**: 리포지토리 목록을 가져오는 경우 각 리포지토리의 요약 표현을 가져옵니다. 여기서는 [octokit](https://github.com/octokit) 조직이 소유한 리포지토리 목록을 가져옵니다.

    GET /orgs/octokit/repos

### 자세한 표현

개별 리소스를 가져올 때 응답에는 일반적으로 해당 리소스에 대한 _모든_ 특성이 포함됩니다. 리소스의 "자세한" 표현입니다. (경우에 따라 권한 부여는 표현에 포함된 자세한 정도에 영향을 줍니다.)

**예**: 개별 리포지토리를 가져올 때 리포지토리의 자세한 표현을 가져옵니다. 여기서는 [octokit/octokit.rb](https://github.com/octokit/octokit.rb) 리포지토리를 가져옵니다.

    GET /repos/octokit/octokit.rb

설명서는 각 API 메서드에 대한 예제 응답을 제공합니다. 예제 응답은 해당 메서드에서 반환되는 모든 특성을 보여 줍니다.

## 인증

{% ifversion ghae %} [웹 애플리케이션 흐름](/developers/apps/authorizing-oauth-apps#web-application-flow)을 통해 OAuth2 토큰을 만들어 {% data variables.product.product_name %} REST API에서 인증을 받는 것이 좋습니다. {% else %} {% data variables.product.product_name %} REST API를 통해 인증하는 방법에는 두 가지가 있습니다.{% endif %} 인증이 필요한 요청은 일부 위치에서 `403 Forbidden` 대신 `404 Not Found`를 반환합니다.  이는 권한 없는 사용자에게 프라이빗 리포지토리가 실수로 누출되는 것을 방지하기 위한 것입니다.

### 기본 인증

```shell
$ curl -u "username" {% data variables.product.api_url_pre %}
```

### OAuth2 토큰(헤더로 전송됨)

```shell
$ curl -H "Authorization: Bearer OAUTH-TOKEN" {% data variables.product.api_url_pre %}
```

{% note %}

참고: GitHub에서는 권한 부여 헤더를 사용하여 OAuth 토큰을 보내도록 권장합니다.

{% endnote %}

{% note %}

**참고:** {% data reusables.getting-started.bearer-vs-token %}

{% endnote %}

[OAuth2에 대해 자세히](/apps/building-oauth-apps/) 읽어봅니다.  OAuth2 토큰은 프로덕션 애플리케이션에 대한 [웹 애플리케이션 흐름](/developers/apps/authorizing-oauth-apps#web-application-flow)을 사용하여 가져올 수 있습니다.

{% ifversion fpt or ghes or ghec %}
### OAuth2 키/비밀

{% data reusables.apps.deprecating_auth_with_query_parameters %}

```shell
curl -u my_client_id:my_client_secret '{% data variables.product.api_url_pre %}/user/repos'
```

`client_id` 및 `client_secret`를 사용해도 사용자로 인증하지 _않으며_, 속도 제한을 늘리려는 경우에만 OAuth 앱을 식별합니다. 권한은 애플리케이션이 아닌 사용자에게만 부여되며 인증되지 않은 사용자에게 표시되는 데이터만 다시 가져옵니다. 이러한 이유로 서버 간 시나리오에서는 OAuth2 키/암호만 사용해야 합니다. OAuth 앱의 클라이언트 비밀을 사용자에게 유출하지 마세요.

{% ifversion ghes %} 프라이빗 모드에서 OAuth2 키와 비밀을 사용하여 인증할 수 없으며 인증을 시도하면 `401 Unauthorized`가 반환됩니다. 자세한 내용은 “[프라이빗 모드 사용](/admin/configuration/configuring-your-enterprise/enabling-private-mode)”을 참조하세요.
{% endif %} {% endif %}

{% ifversion fpt or ghec %}

[인증되지 않은 속도 제한에 대해 자세히](#increasing-the-unauthenticated-rate-limit-for-oauth-apps) 알아보세요.

{% endif %}

### 실패한 로그인 제한

잘못된 자격 증명으로 인증하면 `401 Unauthorized`가 반환됩니다.

```shell
$ curl -I {% data variables.product.api_url_pre %} -u foo:bar
> HTTP/2 401

> {
>   "message": "Bad credentials",
>   "documentation_url": "{% data variables.product.doc_url_pre %}"
> }
```

짧은 기간 내에 잘못된 자격 증명을 사용한 여러 요청을 검색하면 API는 `403 Forbidden`을 나타내며 해당 사용자에 대한 모든 인증 시도(유효한 자격 증명을 사용한 시도 포함)를 일시적으로 거부합니다.

```shell
$ curl -i {% data variables.product.api_url_pre %} -u {% ifversion fpt or ghae or ghec %}
-u VALID_USERNAME:VALID_TOKEN {% endif %}{% ifversion ghes %}-u VALID_USERNAME:VALID_PASSWORD {% endif %}
> HTTP/2 403
> {
>   "message": "Maximum number of login attempts exceeded. Please try again later.",
>   "documentation_url": "{% data variables.product.doc_url_pre %}"
> }
```

## 매개 변수

많은 API 메서드는 선택적 매개 변수를 사용합니다. `GET` 요청의 경우 경로에 세그먼트로 지정되지 않은 매개 변수를 HTTP 쿼리 문자열 매개 변수로 전달할 수 있습니다.

```shell
$ curl -i "{% data variables.product.api_url_pre %}/repos/vmg/redcarpet/issues?state=closed"
```

이 예제에서는 쿼리 문자열에 `:state`가 전달되는 동안 경로의 `:owner` 및 `:repo` 매개 변수에 대해 'vmg' 및 'redcarpet' 값이 제공됩니다.

`POST`, `PATCH`, `PUT` 및 `DELETE` 요청의 경우 URL에 포함되지 않은 매개 변수는 Content-Type이 'application/json'인 JSON으로 인코딩되어야 합니다.

```shell
$ curl -i -u username -d '{"scopes":["repo_deployment"]}' {% data variables.product.api_url_pre %}/authorizations
```

## 루트 엔드포인트

루트 엔드포인트에 대해 `GET` 요청을 실행하여 REST API에서 지원하는 모든 엔드포인트 범주를 가져올 수 있습니다.

```shell
$ curl {% ifversion fpt or ghae or ghec %}
-u USERNAME:TOKEN {% endif %}{% ifversion ghes %}-u USERNAME:PASSWORD {% endif %}{% data variables.product.api_url_pre %}
```

## GraphQL 전역 노드 ID

REST API를 통해 `node_id`를 찾은 후 GraphQL 작업에서 사용하는 방법에 대한 자세한 내용은 "[전역 노드 ID 사용](/graphql/guides/using-global-node-ids)"에 대한 가이드를 참조하세요.

## 클라이언트 오류

요청 본문을 수신하는 API 호출에는 다음과 같은 세 가지 유형의 클라이언트 오류가 발생할 수 있습니다.

1. 잘못된 JSON을 보내면 `400 Bad Request` 응답이 발생합니다.

        HTTP/2 400
        Content-Length: 35

        {"message":"Problems parsing JSON"}

2. 잘못된 형식의 JSON 값을 보내면 `400 Bad
   Request` 응답이 발생합니다.

        HTTP/2 400
        Content-Length: 40

        {"message":"Body should be a JSON object"}

3. 잘못된 필드를 보내면 `422 Unprocessable Entity` 응답이 발생합니다.

        HTTP/2 422
        Content-Length: 149

        {
          "message": "Validation Failed",
          "errors": [
            {
              "resource": "Issue",
              "field": "title",
              "code": "missing_field"
            }
          ]
        }

모든 오류 개체에는 리소스 및 필드 속성이 있으므로 클라이언트에서 문제가 무엇인지 알 수 있습니다.  필드에 무엇이 잘못되었는지 알려주는 오류 코드도 있습니다.  가능한 유효성 검사 오류 코드는 다음과 같습니다.

오류 코드 이름 | 설명
-----------|-----------|
`missing` | 리소스가 존재하지 않습니다.
`missing_field` | 리소스에 대한 필수 필드가 설정되지 않았습니다.
`invalid` | 필드의 서식이 잘못되었습니다.  보다 구체적인 내용은 설명서를 검토하세요.
`already_exists` | 다른 리소스의 값은 이 필드의 값과 같습니다.  이 오류는 일부 고유 키(예: 레이블 이름)가 있어야 하는 리소스에서 발생할 수 있습니다.
`unprocessable` | 제공된 입력이 잘못되었습니다.

리소스는 사용자 지정 유효성 검사 오류를 전송할 수도 있습니다(여기서 `code`는 `custom`임). 사용자 지정 오류에는 항상 오류를 설명하는 `message` 필드가 있으며, 대부분의 오류에는 오류를 해결하는 데 도움이 될 수 있는 일부 콘텐츠를 가리키는 `documentation_url` 필드도 포함됩니다.

## HTTP 리디렉션

{% data variables.product.product_name %} REST API는 적절한 경우 HTTP 리디렉션을 사용합니다. 클라이언트는 모든 요청이 리디렉션을 초래할 수 있다고 가정해야 합니다. HTTP 리디렉션을 받는 것은 오류가 *아니며* 클라이언트는 해당 리디렉션을 따라야 합니다. 리디렉션 응답에는 클라이언트가 요청을 반복해야 하는 리소스의 URI가 포함된 `Location` 헤더 필드가 있습니다.

상태 코드 | Description
-----------|-----------|
`301` | 영구 리디렉션. 요청을 만드는 데 사용한 URI가 `Location` 헤더 필드에 지정된 URI로 대체되었습니다. 이 리소스 및 모든 후속 요청은 새 URI로 전달되어야 합니다.
`302`, `307` | 임시 리디렉션. 요청은 `Location` 헤더 필드에 지정된 URI에 대해 반복되는 축자여야 하지만 클라이언트는 후속 요청에 원래 URI를 계속 사용해야 합니다.

다른 리디렉션 상태 코드는 HTTP 1.1 사양에 따라 사용될 수 있습니다.

## HTTP 동사

가능한 경우 {% data variables.product.product_name %} REST API는 각 작업에 적절한 HTTP 동사를 사용하려고 합니다. HTTP 동사는 대/소문자를 구분합니다.

동사 | Description
-----|-----------
`HEAD` | HTTP 헤더 정보만 가져오기 위해 어떤 리소스에 대해서도 실행할 수 있습니다.
`GET` | 리소스를 검색하는 데 사용됩니다.
`POST` | 리소스를 만드는 데 사용됩니다.
`PATCH` | 부분 JSON 데이터로 리소스를 업데이트하는 데 사용됩니다. 예를 들어, 이슈 리소스에는 `title` 및 `body` 특성이 있습니다. `PATCH` 요청은 하나 이상의 특성을 수락하여 리소스를 업데이트할 수 있습니다.
`PUT` | 리소스 또는 컬렉션을 바꾸는 데 사용됩니다. `body` 특성이 없는 `PUT` 요청의 경우 `Content-Length` 헤더를 0으로 설정해야 합니다.
`DELETE` |리소스를 삭제하는 데 사용됩니다.

## 하이퍼미디어

모든 리소스에는 다른 리소스에 연결된 하나 이상의 `*_url` 속성이 있을 수 있습니다.  이는 적절한 API 클라이언트가 자체 URL을 생성할 필요가 없도록 명시적 URL을 제공하기 위한 것입니다.  API 클라이언트는 이를 사용하는 것이 좋습니다.  이렇게 하면 개발자가 API를 더 쉽게 업그레이드할 수 있습니다.  모든 URL은 적절한 [RFC 6570][rfc] URI 템플릿이어야 합니다.

그러면 [uri_template][uri] gem과 같은 항목을 사용하여 이러한 템플릿을 확장할 수 있습니다.

    >> tmpl = URITemplate.new('/notifications{?since,all,participating}')
    >> tmpl.expand
    => "/notifications"

    >> tmpl.expand all: 1
    => "/notifications?all=1"

    >> tmpl.expand all: 1, participating: 1
    => "/notifications?all=1&participating=1"

[rfc]: https://datatracker.ietf.org/doc/html/rfc6570
[uri]: https://github.com/hannesg/uri_template

## 페이지 매김

REST API의 응답에 많은 결과가 포함되는 경우 {% data variables.product.company_short %}은 결과를 페이지를 매긴 후 결과의 하위 집합을 반환합니다. 응답의 링크 헤더를 사용하여 추가 데이터 페이지를 요청할 수 있습니다. 엔드포인트가 쿼리 매개 변수를 `per_page` 지원하는 경우 페이지에서 반환되는 결과 수를 제어할 수 있습니다. 페이지 매김에 대한 자세한 내용은 "[REST API에서 페이지 매김 사용"을](/rest/guides/using-pagination-in-the-rest-api) 참조하세요.

## 시간 제한

{% data variables.product.prodname_dotcom %}가 API 요청을 처리하는 데 10초 이상 걸리면 {% data variables.product.prodname_dotcom %}가 요청을 종료하고 다음과 같이 시간 제한 응답을 받게 됩니다.

```json
{
    "message": "Server Error"
}
```

{% data variables.product.product_name %}는 API의 속도와 안정성을 보호하기 위해 시간 제한 기간을 변경할 수 있는 권한이 있습니다.

## 속도 제한

{% data variables.location.product_location %}에 대한 다양한 유형의 API 요청에는 다른 속도 제한이 적용됩니다. 

또한 Search API에는 전용 제한이 있습니다. 자세한 내용은 REST API 설명서의 "[검색](/rest/reference/search#rate-limit)"을 참조하세요.

{% data reusables.enterprise.rate_limit %}

{% data reusables.rest-api.always-check-your-limit %}

### 개인 계정의 요청

{% data variables.product.pat_generic %}로 인증하는 직접 API 요청은 사용자-서버 요청입니다. OAuth 앱 또는 GitHub 앱은 앱에 권한을 부여한 후 사용자를 대신하여 사용자와 서버 간 요청을 수행할 수도 있습니다. 자세한 내용은 "[{% data variables.product.pat_generic %} 만들기](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)", "[OAuth 앱 권한 부여](/authentication/keeping-your-account-and-data-secure/authorizing-oauth-apps)" 및 "[GitHub 앱 권한 부여](/authentication/keeping-your-account-and-data-secure/authorizing-github-apps)"를 참조하세요.

{% data variables.product.product_name %}는 사용자와 서버 간 모든 요청을 인증된 사용자와 연결합니다. OAuth 앱 및 GitHub 앱의 경우 앱에 권한을 부여한 사용자입니다. 사용자와 서버 간 모든 요청은 인증된 사용자의 속도 제한에 따라 영향을 받습니다.

{% data reusables.apps.user-to-server-rate-limits %}

{% ifversion fpt or ghec %}

{% data reusables.apps.user-to-server-rate-limits-ghec %}

{% ifversion fpt or ghec or ghes %}

인증되지 않은 요청의 경우 속도 제한을 사용하면 시간당 최대 60개의 요청을 만들 수 있습니다. 인증되지 않은 요청은 요청을 하는 사람이 아니라 원래 IP 주소와 연결됩니다.

{% endif %}

{% endif %}

### GitHub 앱의 요청

GitHub 앱의 요청은 사용자와 서버 간 또는 서버 간 요청일 수 있습니다. GitHub 앱의 속도 제한에 대한 자세한 내용은 "[GitHub 앱에 대한 속도 제한](/developers/apps/building-github-apps/rate-limits-for-github-apps)"을 참조하세요. 

### GitHub Actions의 요청

기본 제공 `GITHUB_TOKEN`을 사용하여 GitHub Actions 워크플로에서 요청을 인증할 수 있습니다. 자세한 내용은 “[자동 토큰 인증](/actions/security-guides/automatic-token-authentication)”을 참조하세요.

를 사용하는 `GITHUB_TOKEN`경우 속도 제한은 리포지토리당 시간당 1,000개 요청입니다.{ % ifversion fpt or ghec %} {% data variables.location.product_location %}의 엔터프라이즈 계정에 속한 리소스에 대한 요청의 경우 {% data variables.product.prodname_ghe_cloud %}의 속도 제한이 적용되며 리포지토리당 시간당 요청은 15,000개입니다. {% endif %}

### 속도 제한 상태 확인

속도 제한 API 및 응답의 HTTP 헤더는 지정된 시간에 사용자 또는 앱에서 사용할 수 있는 현재 API 호출 수에 대한 신뢰할 수 있는 원본입니다.

#### 속도 제한 API

속도 제한 API를 사용하여 현재 제한에 도달하지 않고도 속도 제한 상태를 확인할 수 있습니다. 자세한 내용은 "[속도 제한](/rest/reference/rate-limit)"을 참조하세요.

#### 속도 제한 HTTP 헤더

모든 API 요청의 반환된 HTTP 헤더는 현재 속도 제한 상태를 표시합니다.

```shell
$ curl -I {% data variables.product.api_url_pre %}/users/octocat
> HTTP/2 200
> Date: Mon, 01 Jul 2013 17:27:06 GMT
> x-ratelimit-limit: 60
> x-ratelimit-remaining: 56
> x-ratelimit-used: 4
> x-ratelimit-reset: 1372700873
```

헤더 이름 | Description
-----------|-----------|
`x-ratelimit-limit` | 시간당 허용되는 최대 요청 수입니다.
`x-ratelimit-remaining` | 현재 속도 제한 창에 남아 있는 요청 수입니다.
`x-ratelimit-used` | 현재 속도 제한 창에서 수행한 요청 수입니다.
`x-ratelimit-reset` | 현재 속도 제한 창이 [UTC Epoch 초](http://en.wikipedia.org/wiki/Unix_time) 단위로 다시 설정되는 시간입니다.

다른 형식의 시간이 필요한 경우 어떤 최신 프로그래밍 언어로도 작업을 완료할 수 있습니다. 예를 들어 웹 브라우저에서 콘솔을 열면 다시 설정 시간을 JavaScript Date 개체로서 쉽게 가져올 수 있습니다.

``` javascript
new Date(1372700873 * 1000)
// => Mon Jul 01 2013 13:47:53 GMT-0400 (EDT)
```

속도 제한을 초과하면 오류 응답이 반환됩니다.

```shell
> HTTP/2 403
> Date: Tue, 20 Aug 2013 14:50:41 GMT
> x-ratelimit-limit: 60
> x-ratelimit-remaining: 0
> x-ratelimit-used: 60
> x-ratelimit-reset: 1377013266

> {
>    "message": "API rate limit exceeded for xxx.xxx.xxx.xxx. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)",
>    "documentation_url": "{% data variables.product.doc_url_pre %}/overview/resources-in-the-rest-api#rate-limiting"
> }
```

### OAuth 앱에 대한 인증되지 않은 속도 제한 증가

OAuth 앱이 더 높은 속도 제한으로 인증되지 않은 호출을 수행해야 하는 경우 엔드포인트 경로 전에 앱의 클라이언트 ID와 비밀을 전달할 수 있습니다.

```shell
$ curl -u my_client_id:my_client_secret -I {% data variables.product.api_url_pre %}/user/repos
> HTTP/2 200
> Date: Mon, 01 Jul 2013 17:27:06 GMT
> x-ratelimit-limit: 5000
> x-ratelimit-remaining: 4966
> x-ratelimit-used: 34
> x-ratelimit-reset: 1372700873
```

{% note %}

**참고:** 클라이언트 비밀을 누구와도 공유하거나 클라이언트 쪽 브라우저 코드에 포함하지 마세요. 여기에 표시된 메서드는 서버 간 호출에만 사용합니다.

{% endnote %}

### 속도 제한 유지

기본 인증 또는 OAuth를 사용하여 속도 제한을 초과하는 경우 API 응답을 캐싱하고 [조건부 요청](#conditional-requests)을 사용하여 문제를 해결할 수 있습니다.

### 보조 속도 제한

{% data variables.product.product_name %}에 고품질 서비스를 제공하기 위해, API를 사용할 때 일부 작업에 추가 속도 제한이 적용될 수 있습니다. 예를 들어 API를 사용하여 신속하게 콘텐츠를 만들거나, webhook를 사용하는 대신 적극적으로 폴링하거나, 여러 개의 동시 요청을 수행하거나, 컴퓨팅 비용이 많이 드는 데이터를 반복적으로 요청하면 보조 속도 제한이 발생할 수 있습니다.

보조 속도 제한은 API의 합법적인 사용을 방해하기 위한 것이 아닙니다. 일반 속도 제한만 준수하면 됩니다. 적절한 API 사용자가 되려면 [모범 사례 지침](/guides/best-practices-for-integrators/)을 확인하세요.

애플리케이션이 이 속도 제한을 트리거하는 경우 다음과 같은 정보용 응답을 받게 됩니다.

```shell
> HTTP/2 403
> Content-Type: application/json; charset=utf-8
> Connection: close

> {
>   "message": "You have exceeded a secondary rate limit and have been temporarily blocked from content creation. Please retry your request again later.",
>   "documentation_url": "{% data variables.product.doc_url_pre %}/overview/resources-in-the-rest-api#secondary-rate-limits"
> }
```

{% ifversion fpt or ghec %}

## 사용자 에이전트 필요

모든 API 요청에는 유효한 `User-Agent` 헤더가 포함되어야 합니다. `User-Agent` 헤더가 없는 요청은 거부됩니다. `User-Agent` 헤더 값에 {% data variables.product.product_name %} 사용자 이름 또는 애플리케이션 이름을 사용하도록 요청합니다. 이렇게 하면 문제가 있는 경우 연락을 받을 수 있습니다.

예를 들면 다음과 같습니다.

```shell
User-Agent: Awesome-Octocat-App
```

cURL은 기본적으로 유효한 `User-Agent` 헤더를 보냅니다. cURL(또는 대체 클라이언트)을 통해 잘못된 `User-Agent` 헤더를 제공하는 경우 다음과 같은 `403 Forbidden` 응답을 받게 됩니다.

```shell
$ curl -IH 'User-Agent: ' {% data variables.product.api_url_pre %}/meta
> HTTP/1.0 403 Forbidden
> Connection: close
> Content-Type: text/html

> Request forbidden by administrative rules.
> Please make sure your request has a User-Agent header.
> Check  for other possible causes.
```

{% endif %}

## 조건부 요청

대부분의 응답은 `ETag` 헤더를 반환합니다. 많은 응답이 `Last-Modified` 헤더도 반환합니다. `If-None-Match` 및 `If-Modified-Since` 헤더에서 이러한 헤더 값을 각각 사용하여 해당 리소스에 대한 후속 요청을 수행할 수 있습니다. 리소스가 변경되지 않은 경우 서버는 `304 Not Modified`를 반환합니다.

{% ifversion fpt or ghec %}

{% tip %}

**참고**: 조건부 요청을 수행하고 304 응답을 받는 것은 [속도 제한](#rate-limiting)의 영향을 받지 않으므로 가능하면 언제든지 사용하는 것이 좋습니다.

{% endtip %}

{% endif %}

```shell
$ curl -I {% data variables.product.api_url_pre %}/user
> HTTP/2 200
> Cache-Control: private, max-age=60
> ETag: "644b5b0155e6404a9cc4bd9d8b1ae730"
> Last-Modified: Thu, 05 Jul 2012 15:31:30 GMT
> Vary: Accept, Authorization, Cookie
> x-ratelimit-limit: 5000
> x-ratelimit-remaining: 4996
> x-ratelimit-reset: 1372700873

$ curl -I {% data variables.product.api_url_pre %}/user -H 'If-None-Match: "644b5b0155e6404a9cc4bd9d8b1ae730"'
> HTTP/2 304
> Cache-Control: private, max-age=60
> ETag: "644b5b0155e6404a9cc4bd9d8b1ae730"
> Last-Modified: Thu, 05 Jul 2012 15:31:30 GMT
> Vary: Accept, Authorization, Cookie
> x-ratelimit-limit: 5000
> x-ratelimit-remaining: 4996
> x-ratelimit-reset: 1372700873

$ curl -I {% data variables.product.api_url_pre %}/user -H "If-Modified-Since: Thu, 05 Jul 2012 15:31:30 GMT"
> HTTP/2 304
> Cache-Control: private, max-age=60
> Last-Modified: Thu, 05 Jul 2012 15:31:30 GMT
> Vary: Accept, Authorization, Cookie
> x-ratelimit-limit: 5000
> x-ratelimit-remaining: 4996
> x-ratelimit-reset: 1372700873
```

## 원본 간 리소스 공유

API는 모든 원본의 AJAX 요청에 대해 CORS(원본 간 리소스 공유)를 지원합니다.
[CORS W3C 권장 사항](http://www.w3.org/TR/cors/) 또는 HTML 5 보안 가이드의 [이 소개](https://code.google.com/archive/p/html5security/wikis/CrossOriginRequestSecurity.wiki)를 읽을 수 있습니다.

`http://example.com`에 도달한 브라우저에서 보낸 샘플 요청은 다음과 같습니다.

```shell
$ curl -I {% data variables.product.api_url_pre %} -H "Origin: http://example.com"
HTTP/2 302
Access-Control-Allow-Origin: *
Access-Control-Expose-Headers: ETag, Link, X-GitHub-OTP, x-ratelimit-limit, x-ratelimit-remaining, x-ratelimit-reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval
```

CORS 사전 실행 요청은 다음과 같습니다.

```shell
$ curl -I {% data variables.product.api_url_pre %} -H "Origin: http://example.com" -X OPTIONS
HTTP/2 204
Access-Control-Allow-Origin: *
Access-Control-Allow-Headers: Authorization, Content-Type, If-Match, If-Modified-Since, If-None-Match, If-Unmodified-Since, X-GitHub-OTP, X-Requested-With
Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE
Access-Control-Expose-Headers: ETag, Link, X-GitHub-OTP, x-ratelimit-limit, x-ratelimit-remaining, x-ratelimit-reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval
Access-Control-Max-Age: 86400
```

## JSON-P 콜백

GET 호출에 `?callback` 매개 변수를 전송하여 결과를 JSON 함수로 래핑할 수 있습니다.  일반적으로 브라우저가 도메인 간 이슈를 해결하여 웹 페이지에 {% data variables.product.product_name %} 콘텐츠를 포함하려는 경우에 사용됩니다.  응답에는 일반 API와 동일한 데이터 출력 및 관련 HTTP 헤더 정보가 포함됩니다.

```shell
$ curl {% data variables.product.api_url_pre %}?callback=foo

> /**/foo({
>   "meta": {
>     "status": 200,
>     "x-ratelimit-limit": "5000",
>     "x-ratelimit-remaining": "4966",
>     "x-ratelimit-reset": "1372700873",
>     "Link": [ // pagination headers and other links
>       ["{% data variables.product.api_url_pre %}?page=2", {"rel": "next"}]
>     ]
>   },
>   "data": {
>     // the data
>   }
> })
```

JavaScript 처리기를 작성하여 콜백을 처리할 수 있습니다. 다음은 사용해 볼 수 있는 최소한의 예제입니다.

    <html>
    <head>
    <script type="text/javascript">
    function foo(response) {
      var meta = response.meta;
      var data = response.data;
      console.log(meta);
      console.log(data);
    }

    var script = document.createElement('script');
    script.src = '{% data variables.product.api_url_code %}?callback=foo';

    document.getElementsByTagName('head')[0].appendChild(script);
    </script>
    </head>

    <body>
      <p>Open up your browser's console.</p>
    </body>
    </html>

모든 헤더는 HTTP 헤더와 동일한 문자열 값이며 유의해야 할 한 가지 예외는 Link입니다.  Link 헤더는 미리 구문 분석되며 `[url, options]` 튜플 배열로 제공됩니다.

링크

    Link: <url1>; rel="next", <url2>; rel="foo"; bar="baz"

...콜백 출력에 표시되는 내용:

```json
{
  "Link": [
    [
      "url1",
      {
        "rel": "next"
      }
    ],
    [
      "url2",
      {
        "rel": "foo",
        "bar": "baz"
      }
    ]
  ]
}
```

## 표준 시간대

새 커밋 만들기와 같이 새 데이터를 만드는 일부 요청에서는 타임스탬프를 지정하거나 생성할 때 표준 시간대 정보를 제공할 수 있습니다. 우선 순위에 따라 다음 규칙을 적용하여 이러한 API 호출에 대한 표준 시간대 정보를 결정합니다.

* [ISO 8601 타임스탬프에 표준 시간대 정보를 명시적으로 제공](#explicitly-providing-an-iso-8601-timestamp-with-timezone-information)
* [`Time-Zone` 헤더 사용](#using-the-time-zone-header)
* [사용자에 대해 마지막으로 알려진 표준 시간대 사용](#using-the-last-known-timezone-for-the-user)
* [다른 표준 시간대 정보 없이 UTC로 기본 설정](#defaulting-to-utc-without-other-timezone-information)

이러한 규칙은 API에서 반환된 데이터가 아니라 API에 전달된 데이터에만 적용됩니다. "[스키마](#schema)"에서 설명한 대로 API에서 반환된 타임스탬프는 UTC 시간 ISO 8601 형식입니다.

### ISO 8601 타임스탬프에 표준 시간대 정보를 명시적으로 제공

타임스탬프를 지정할 수 있는 API 호출의 경우 정확한 타임스탬프를 사용합니다. [커밋 API](/rest/reference/git#commits)를 예로 들 수 있습니다.

이러한 타임스탬프는 `2014-02-27T15:05:06+01:00`과 같습니다. 또한 이러한 타임스탬프를 지정하는 방법은 [이 예제](/rest/reference/git#example-input)를 참조하세요.

### `Time-Zone` 헤더 사용

[Olson 데이터베이스의 이름 목록](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)에 따라 표준 시간대를 정의하는 `Time-Zone` 헤더를 제공할 수 있습니다.

```shell
$ curl -H "Time-Zone: Europe/Amsterdam" -X POST {% data variables.product.api_url_pre %}/repos/github/linguist/contents/new_file.md
```

즉, 이 헤더가 정의하는 표준 시간대에서 API 호출이 수행되는 순간의 타임스탬프를 생성합니다. 예를 들어 [콘텐츠 API](/rest/reference/repos#contents)는 추가 또는 변경마다 git 커밋을 생성하고 현재 시간을 타임스탬프로 사용합니다. 이 헤더는 현재 타임스탬프를 생성하는 데 사용되는 표준 시간대를 결정합니다.

### 사용자에 대해 마지막으로 알려진 표준 시간대 사용

`Time-Zone` 헤더가 지정되지 않고 API에 대해 인증된 호출을 수행하는 경우 인증된 사용자에 대해 마지막으로 알려진 표준 시간대를 사용합니다. 마지막으로 알려진 표준 시간대는 {% data variables.product.product_name %} 웹 사이트로 이동할 때마다 업데이트됩니다.

### 다른 표준 시간대 정보 없이 UTC로 기본 설정

위의 단계를 수행해도 정보가 생성되지 않으면 UTC를 표준 시간대로 사용하여 git 커밋을 만듭니다.
