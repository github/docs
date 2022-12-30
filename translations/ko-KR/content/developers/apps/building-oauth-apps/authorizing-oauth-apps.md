---
title: OAuth 앱 권한 부여
intro: '{% data reusables.shortdesc.authorizing_oauth_apps %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-oauth-apps/about-authorization-options-for-oauth-apps
  - /apps/building-integrations/setting-up-and-registering-oauth-apps/directing-users-to-review-their-access
  - /apps/building-integrations/setting-up-and-registering-oauth-apps/creating-multiple-tokens-for-oauth-apps
  - /v3/oauth
  - /apps/building-oauth-apps/authorization-options-for-oauth-apps
  - /apps/building-oauth-apps/authorizing-oauth-apps
  - /developers/apps/authorizing-oauth-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - OAuth Apps
ms.openlocfilehash: d35b65add4259df72d9ae8b179829a148abd7174
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106711'
---
{% data variables.product.product_name %}의 OAuth 구현은 웹 브라우저에 액세스할 수 없는 앱의 표준 [권한 부여 코드 부여 유형](https://tools.ietf.org/html/rfc6749#section-4.1) 및 OAuth 2.0 [디바이스 권한 부여](https://tools.ietf.org/html/rfc8628)를 지원합니다.

앱을 테스트할 때와 같이 표준 방식으로 앱에 대한 권한을 건너뛰려면 [비 웹 애플리케이션 흐름](#non-web-application-flow)을 사용할 수 있습니다.

OAuth 앱에 권한을 부여하려면 앱에 가장 적합한 권한 부여 흐름을 고려하세요.

- [웹 애플리케이션 흐름](#web-application-flow): 브라우저에서 실행되는 표준 OAuth 앱에 대해 사용자에게 권한을 부여하는 데 사용됩니다. ([암시적 허용 유형](https://tools.ietf.org/html/rfc6749#section-4.2)은 지원되지 않습니다.)
- [디바이스 흐름](#device-flow): CLI 도구와 같은 헤드리스 앱에 사용됩니다.

## 웹 애플리케이션 흐름

{% note %}

**참고:** GitHub 앱을 빌드하는 경우 OAuth 웹 애플리케이션 흐름을 계속 사용할 수 있지만 설정에는 몇 가지 중요한 차이점이 있습니다. 자세한 내용은 “[GitHub 앱의 사용자 식별 및 권한 부여](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)”를 참조하세요.

{% endnote %}

앱 사용자에게 권한을 부여하는 웹 애플리케이션 흐름은 다음과 같습니다.

1. 사용자는 GitHub ID를 요청하도록 리디렉션됩니다.
2. GitHub가 사용자를 사이트로 다시 리디렉션합니다.
3. 앱이 사용자의 액세스 토큰을 사용하여 API에 액세스합니다.

### 1. 사용자의 GitHub ID 요청

    GET {% data variables.product.oauth_host_code %}/login/oauth/authorize

GitHub 앱이 `login` 매개 변수를 지정하면 앱에 로그인하고 권한을 부여하는 데 사용할 수 있는 특정 계정을 사용자에게 표시합니다.

#### 매개 변수

이름 | Type | 설명
-----|------|--------------
`client_id`|`string` | **필수**. {% ifversion fpt or ghec %}[등록](https://github.com/settings/applications/new){% else %}registered{% endif %} 시 GitHub에서 받은 클라이언트 ID입니다.
`redirect_uri`|`string` | 권한 부여 후에 사용자를 보낼 애플리케이션의 URL입니다. [url 리디렉션](#redirect-urls)에 대한 자세한 내용은 아래를 참조하세요.
`login` | `string` | 앱에 로그인하고 권한을 부여하는 데 사용할 특정 계정을 제안합니다.
`scope`|`string` | 공백으로 구분되는 [범위](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/) 목록입니다. 제공되지 않은 경우 `scope`는 애플리케이션의 범위에 권한을 부여하지 않은 사용자의 빈 목록으로 기본 설정됩니다. 애플리케이션의 범위에 권한을 부여하지 않은 사용자의 경우 사용자에게 범위 목록이 포함된 OAuth 권한 부여 페이지가 표시되지 않습니다. 대신, 이 흐름 단계는 사용자가 애플리케이션에 대해 권한을 부여한 범위 집합으로 자동으로 완료됩니다. 예를 들어 사용자가 이미 웹 흐름을 두 번 수행하고 `user` 범위의 토큰 하나와 `repo` 범위의 다른 토큰에 권한을 부여한 경우, `scope`를 제공하지 않는 세 번째 웹 흐름은 `user` 및 `repo` 범위의 토큰을 수신합니다.
`state` | `string` | {% data reusables.apps.state_description %}
`allow_signup`|`string` | 인증되지 않은 사용자에게 OAuth 흐름 중에 GitHub에 등록하는 옵션이 제공되는지 여부입니다. 기본값은 `true`입니다. 정책에서 등록을 금지할 때 `false`를 사용합니다.

### 2. GitHub가 사용자를 사이트로 다시 리디렉션

사용자가 요청을 수락하면 {% data variables.product.product_name %}는 `state` 매개 변수의 이전 단계에서 제공한 상태뿐만 아니라 코드 매개 변수의 임시 `code`와 함께 사이트로 다시 리디렉션합니다. 임시 코드는 10분 후에 만료됩니다. 상태가 일치하지 않으면 타사에서 요청을 만들었으므로 프로세스를 중단해야 합니다.

이 `code`를 액세스 토큰으로 교환합니다.

    POST {% data variables.product.oauth_host_code %}/login/oauth/access_token

#### 매개 변수

이름 | Type | 설명
-----|------|--------------
`client_id` | `string` | **필수 사항입니다.** {% data variables.product.prodname_oauth_app %}에 사용하기 위해 {% data variables.product.product_name %}에서 받은 클라이언트 ID입니다.
`client_secret` | `string` | **필수 사항입니다.** {% data variables.product.prodname_oauth_app %}에 사용하기 위해 {% data variables.product.product_name %}에서 받은 클라이언트 암호입니다.
`code` | `string` | **필수 사항입니다.** 1단계에 대한 응답으로 받은 코드입니다.
`redirect_uri` | `string` | 권한 부여 후 사용자가 전송되는 애플리케이션의 URL입니다.

#### 응답

기본적으로 응답의 형식은 다음과 같습니다.

```
access_token=gho_16C7e42F292c6912E7710c838347Ae178B4a&scope=repo%2Cgist&token_type=bearer
```

{% data reusables.apps.oauth-auth-vary-response %}

```json
Accept: application/json
{
  "access_token":"gho_16C7e42F292c6912E7710c838347Ae178B4a",
  "scope":"repo,gist",
  "token_type":"bearer"
}
```

```xml
Accept: application/xml
<OAuth>
  <token_type>bearer</token_type>
  <scope>repo,gist</scope>
  <access_token>gho_16C7e42F292c6912E7710c838347Ae178B4a</access_token>
</OAuth>
```

### 3. 액세스 토큰을 사용하여 API에 액세스

액세스 토큰을 사용하면 사용자를 대신하여 API에 요청할 수 있습니다.

    Authorization: Bearer OAUTH-TOKEN
    GET {% data variables.product.api_url_code %}/user

예를 들어 curl에서 다음과 같이 인증 헤더를 설정할 수 있습니다.

```shell
curl -H "Authorization: Bearer OAUTH-TOKEN" {% data variables.product.api_url_pre %}/user
```

## 디바이스 흐름

{% note %}

**참고:** 디바이스 흐름은 퍼블릭 베타 상태이며 변경될 수 있습니다.

{% endnote %}

디바이스 흐름을 사용하면 CLI 도구 또는 Git 자격 증명 관리자와 같은 헤드리스 앱의 사용자에게 권한을 부여할 수 있습니다.

{% ifversion device-flow-is-opt-in %}

디바이스 흐름을 사용하여 사용자에게 권한을 부여하고 식별하려면 먼저 앱 설정에서 사용하도록 설정해야 합니다. 앱에서 디바이스 흐름을 사용하도록 설정하는 방법에 대한 자세한 내용은 OAuth 앱의 경우 “[OAuth 앱 수정](/developers/apps/managing-oauth-apps/modifying-an-oauth-app)”과 GitHub 앱의 경우 “[GitHub 앱 수정](/developers/apps/managing-github-apps/modifying-a-github-app)”을 참조하세요.

{% endif %}

### 디바이스 흐름 개요

1. 앱은 디바이스 및 사용자 확인 코드를 요청하고 사용자가 사용자 확인 코드를 입력할 권한 부여 URL을 가져옵니다.
2. 앱은 사용자에게 {% data variables.product.device_authorization_url %}에 사용자 확인 코드를 입력하라는 메시지를 표시합니다.
3.  앱은 사용자 인증 상태를 폴링합니다. 사용자가 디바이스에 권한을 부여하면 앱은 새 액세스 토큰으로 API 호출을 수행할 수 있습니다.

### 1단계: 앱이 GitHub에서 디바이스 및 사용자 확인 코드를 요청합니다.

    POST {% data variables.product.oauth_host_code %}/login/device/code

앱은 사용자에게 다음 단계에서 인증하라는 메시지를 표시하는 데 사용할 사용자 확인 코드 및 확인 URL을 요청해야 합니다. 또한 이 요청은 앱이 액세스 토큰을 수신하고 사용자 인증 상태를 확인하는 데 사용해야 하는 디바이스 확인 코드를 반환합니다.

#### 입력 매개 변수

이름 | Type | 설명
-----|------|--------------
`client_id` | `string` | **필수 사항입니다.** 앱에 사용하기 위해 {% data variables.product.product_name %}에서 받은 클라이언트 ID입니다.
`scope` | `string` | 앱이 액세스를 요청하는 범위입니다.

#### 응답

기본적으로 응답의 형식은 다음과 같습니다.

```
device_code=3584d83530557fdd1f46af8289938c8ef79f9dc5&expires_in=900&interval=5&user_code=WDJB-MJHT&verification_uri=https%3A%2F%{% data variables.product.product_url %}%2Flogin%2Fdevice
```

{% data reusables.apps.oauth-auth-vary-response %}

```json
Accept: application/json
{
  "device_code": "3584d83530557fdd1f46af8289938c8ef79f9dc5",
  "user_code": "WDJB-MJHT",
  "verification_uri": "{% data variables.product.oauth_host_code %}/login/device",
  "expires_in": 900,
  "interval": 5
}
```

```xml
Accept: application/xml
<OAuth>
  <device_code>3584d83530557fdd1f46af8289938c8ef79f9dc5</device_code>
  <user_code>WDJB-MJHT</user_code>
  <verification_uri>{% data variables.product.oauth_host_code %}/login/device</verification_uri>
  <expires_in>900</expires_in>
  <interval>5</interval>
</OAuth>
```

#### 응답 매개 변수

Name | Type | 설명
-----|------|--------------
`device_code` | `string` | 디바이스 확인 코드는 40자이며 디바이스를 확인하는 데 사용됩니다.
`user_code` | `string` | 사용자가 브라우저에서 코드를 입력할 수 있도록 사용자 확인 코드가 디바이스에 표시됩니다. 이 코드는 8자이며 중간에 하이픈이 있습니다.
`verification_uri` | `string` | 사용자가 `user_code`를 입력해야 하는 확인 URL({% data variables.product.device_authorization_url %})입니다.
`expires_in` | `integer`| `device_code` 및 `user_code`의 만료 전 시간(초)입니다. 기본값은 900초(또는 15분)입니다.
`interval` | `integer` | 디바이스 권한 부여를 완료하려면 새 액세스 토큰을 요청하기 전에 경과해야 하는 최소 시간(초)입니다(`POST {% data variables.product.oauth_host_code %}/login/oauth/access_token`). 예를 들어 간격이 5이면 5초가 지나야 새로 요청할 수 있습니다. 5초 동안 두 번 이상 요청하면 속도 제한에 도달하면서 `slow_down` 오류를 수신합니다.

### 2단계: 사용자에게 브라우저에서 사용자 코드를 입력하라는 메시지를 표시합니다.

디바이스에 사용자 확인 코드가 표시되고 {% data variables.product.device_authorization_url %}에 코드를 입력하라는 메시지가 표시됩니다.

  ![디바이스에 표시되는 사용자 확인 코드를 입력할 필드](/assets/images/github-apps/device_authorization_page_for_user_code.png)

### 3단계: 앱이 GitHub를 폴링하여 사용자가 디바이스에 권한을 부여했는지 확인합니다.

    POST {% data variables.product.oauth_host_code %}/login/oauth/access_token

디바이스 및 사용자 코드가 만료되거나 사용자가 유효한 사용자 코드로 앱에 권한을 성공적으로 부여할 때까지 앱은 `POST {% data variables.product.oauth_host_code %}/login/oauth/access_token`을 폴링하는 디바이스 권한 부여 요청을 합니다. 앱이 속도 제한 오류를 방지하려면 1단계에서 검색된 최소 폴링 `interval`을 사용해야 합니다. 자세한 내용은 “[디바이스 흐름의 속도 제한](#rate-limits-for-the-device-flow)”을 참조하세요.

사용자는 15분(또는 900초) 이내에 유효한 코드를 입력해야 합니다. 15분이 지나면 `POST {% data variables.product.oauth_host_code %}/login/device/code`를 사용하여 새 디바이스 권한 부여 코드를 요청해야 합니다.

사용자가 권한을 부여하면 앱은 사용자를 대신하여 API에 요청하는 데 사용할 수 있는 액세스 토큰을 받게 됩니다.

#### 입력 매개 변수

Name | Type | 설명
-----|------|--------------
`client_id` | `string` | **필수 사항입니다.** {% data variables.product.prodname_oauth_app %}에 사용하기 위해 {% data variables.product.product_name %}에서 받은 클라이언트 ID입니다.
`device_code` | `string` | **필수 사항입니다.** `POST {% data variables.product.oauth_host_code %}/login/device/code` 요청에서 받은 디바이스 확인 코드입니다.
`grant_type` | `string` | **필수 사항입니다.** 권한 부여 유형은 `urn:ietf:params:oauth:grant-type:device_code`이어야 합니다.

#### 응답

기본적으로 응답의 형식은 다음과 같습니다.

```
access_token=gho_16C7e42F292c6912E7710c838347Ae178B4a&token_type=bearer&scope=repo%2Cgist
```

{% data reusables.apps.oauth-auth-vary-response %}

```json
Accept: application/json
{
 "access_token": "gho_16C7e42F292c6912E7710c838347Ae178B4a",
  "token_type": "bearer",
  "scope": "repo,gist"
}
```

```xml
Accept: application/xml
<OAuth>
  <access_token>gho_16C7e42F292c6912E7710c838347Ae178B4a</access_token>
  <token_type>bearer</token_type>
  <scope>gist,repo</scope>
</OAuth>
```

### 디바이스 흐름의 속도 제한

사용자가 브라우저에서 확인 코드를 제출하는 경우 애플리케이션당 1시간에 50개의 제출 속도 제한이 있습니다.

요청 간에 필요한 최소 기간 내(또는 `interval`)에 둘 이상의 액세스 토큰 요청(`POST {% data variables.product.oauth_host_code %}/login/oauth/access_token`)을 하는 경우 속도 제한에 도달하고 `slow_down` 오류 응답을 수신하게 됩니다. `slow_down` 오류 응답은 마지막 `interval`에 5초를 추가합니다. 자세한 내용은 [디바이스 흐름의 오류](#errors-for-the-device-flow)를 참조하세요.

### 디바이스 흐름의 오류 코드

| 오류 코드 | Description |
|----|----|
| `authorization_pending`| 이 오류는 권한 부여 요청이 보류 중이고 사용자가 사용자 코드를 아직 입력하지 않은 경우에 발생합니다. 앱은 각 요청 사이에 최소 시간(초)이 필요한 [`interval`](#response-parameters)을 초과하지 않고 `POST {% data variables.product.oauth_host_code %}/login/oauth/access_token` 요청을 계속 폴링할 것으로 예상됩니다. |
| `slow_down` | `slow_down` 오류를 수신하는 경우 `POST {% data variables.product.oauth_host_code %}/login/oauth/access_token`을 사용하여 요청 간 필요한 최소 `interval` 또는 기간에 5초가 더 추가됩니다. 예를 들어 시작 간격이 요청 사이에 5초 이상 필요하고 `slow_down` 오류 응답을 수신하는 경우 OAuth 액세스 토큰을 새로 요청하기 전에 최소 10초 동안 기다려야 합니다. 오류 응답에는 사용해야 하는 새 `interval`이 포함됩니다.
| `expired_token` | 디바이스 코드가 만료되면 `token_expired` 오류가 표시됩니다. 이 경우 디바이스 코드를 새로 요청해야 합니다.
| `unsupported_grant_type` | OAuth 토큰 요청 `POST {% data variables.product.oauth_host_code %}/login/oauth/access_token`을 폴링할 때 권한 부여 형식은 `urn:ietf:params:oauth:grant-type:device_code`이며 입력 매개 변수로 포함되어야 합니다.
| `incorrect_client_credentials` | 디바이스 흐름의 경우 앱 설정 페이지에서 찾을 수 있는 앱의 클라이언트 ID를 전달해야 합니다. `client_secret`은 디바이스 흐름에 필요하지 않습니다.
| `incorrect_device_code` | 제공된 device_code는 잘못되었습니다.
| `access_denied` | 권한 부여 프로세스 중에 사용자가 취소를 클릭하면 `access_denied` 오류를 수신하게 되고 사용자는 확인 코드를 다시 사용할 수 없습니다.{% ifversion device-flow-is-opt-in %}
| `device_flow_disabled` | 앱 설정에서 디바이스 흐름을 사용하도록 설정하지 않았습니다. 자세한 내용은 “[디바이스 흐름](#device-flow)”을 참조하세요.{% endif %}

자세한 내용은 “[OAuth 2.0 디바이스 권한 부여](https://tools.ietf.org/html/rfc8628#section-3.5)”를 참조하세요.

## 비 웹 애플리케이션 흐름

비 웹 인증은 테스트와 같은 제한된 상황에서 사용할 수 있습니다. 필요한 경우 [기본 인증](/rest/overview/other-authentication-methods#basic-authentication) 을 사용하여 {% data variables.product.pat_generic % [}의 설정 페이지를 사용하여 {% data variables.product.pat_generic %}](/articles/creating-an-access-token-for-command-line-use)을(를) 만들 수 있습니다. 이 방법으로 사용자는 언제든지 액세스를 철회할 수 있습니다.

{% ifversion fpt or ghes or ghec %} {% note %}

**참고:** 비 웹 애플리케이션 흐름을 사용하여 OAuth2 토큰을 만들 때 사용자가 2단계 인증을 사용하도록 설정한 경우 [2단계 인증을 사용하는](/rest/overview/other-authentication-methods#working-with-two-factor-authentication) 방법을 이해해야 합니다.

{% endnote %} {% endif %}

## 리디렉션 URL

`redirect_uri` 매개 변수는 선택 사항입니다. 매개 변수가 제외되는 경우 GitHub는 OAuth 애플리케이션 설정에 구성된 콜백 URL로 사용자를 리디렉션합니다. 제공된 경우 리디렉션 URL의 호스트(하위 도메인 제외) 및 포트는 콜백 URL과 정확히 일치해야 합니다. 리디렉션 URL의 경로는 콜백 URL의 하위 디렉터리를 참조해야 합니다.

    CALLBACK: http://example.com/path

    GOOD: http://example.com/path
    GOOD: http://example.com/path/subdir/other
    GOOD: http://oauth.example.com/path
    GOOD: http://oauth.example.com/path/subdir/other
    BAD:  http://example.com/bar
    BAD:  http://example.com/
    BAD:  http://example.com:8080/path
    BAD:  http://oauth.example.com:8080/path
    BAD:  http://example.org

### 루프백 리디렉션 URL

선택적 `redirect_uri` 매개 변수는 루프백 URL에도 사용할 수 있습니다. 애플리케이션이 루프백 URL 및 포트를 지정하는 경우 애플리케이션 사용자에게 권한을 부여한 후 제공된 URL 및 포트로 리디렉션됩니다. 는 `redirect_uri` 앱의 콜백 URL에 지정된 포트와 일치할 필요가 없습니다.

`http://127.0.0.1/path` 콜백 URL의 경우 다음 `redirect_uri`를 사용할 수 있습니다.

```
http://127.0.0.1:1234/path
```

OAuth RFC는 를 [사용하지 `localhost`말고](https://datatracker.ietf.org/doc/html/rfc8252#section-7.3) 루프백 리터럴 `127.0.0.1` 또는 IPv6 `::1`를 사용하는 것이 좋습니다.

## OAuth 앱에 여러 토큰 만들기

사용자/애플리케이션/범위 조합에 여러 토큰을 만들어 특정 사용 사례를 위한 토큰을 만들 수 있습니다.

이는 OAuth 앱이 로그인에 GitHub를 사용하고 기본 사용자 정보만 필요한 단일 워크플로를 지원하는 경우에 유용합니다. 다른 워크플로에서는 사용자의 프라이빗 리포지토리에 액세스해야 할 수 있습니다. OAuth 앱은 여러 토큰을 사용해 필요한 범위만 요청하여 사용 사례마다 웹 흐름을 수행할 수 있습니다. 사용자가 애플리케이션을 사용하여 로그인하는 경우 OAuth 앱에 프라이빗 리포지토리에 대한 액세스 권한을 부여할 필요가 없습니다.

{% data reusables.apps.oauth-token-limit %}

{% data reusables.apps.deletes_ssh_keys %}

## 사용자에게 액세스 권한을 검토하도록 지시

OAuth 앱에 대한 권한 부여 정보에 연결하면 사용자가 애플리케이션 권한 부여를 검토하고 철회할 수 있습니다.

연결 링크를 빌드하려면 애플리케이션을 등록할 때 GitHub에서 받은 OAuth 앱 `client_id`가 필요합니다.

```
{% data variables.product.oauth_host_code %}/settings/connections/applications/:client_id
```

{% tip %}

**팁:** 사용자를 위해 OAuth 앱에서 액세스할 수 있는 리소스에 대한 자세한 내용은 “[사용자용 리소스 알아보기](/rest/guides/discovering-resources-for-a-user)”를 참조하세요.

{% endtip %}

## 문제 해결

* “[권한 부여 요청 오류 문제 해결](/apps/managing-oauth-apps/troubleshooting-authorization-request-errors)”
* “[OAuth 앱 액세스 토큰 요청 오류 문제 해결](/apps/managing-oauth-apps/troubleshooting-oauth-app-access-token-request-errors)”
* "[디바이스 흐름 오류](#error-codes-for-the-device-flow)"
* "[토큰 만료 및 해지](/github/authenticating-to-github/keeping-your-account-and-data-secure/token-expiration-and-revocation)"

## 추가 참고 자료

- “[{% data variables.product.prodname_dotcom %}에 대한 인증 정보](/github/authenticating-to-github/about-authentication-to-github)”
