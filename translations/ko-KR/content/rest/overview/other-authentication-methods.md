---
title: 기타 인증 방법
intro: 비프로덕션 환경에서 테스트에 기본 인증을 사용할 수 있습니다.
redirect_from:
  - /v3/auth
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: Other authentication methods
ms.openlocfilehash: a979c5e688f6f6942a56c9cff55386bb72a92e57
ms.sourcegitcommit: f392aa98511e0889d96af2e4a56e67f8adfb025f
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/18/2022
ms.locfileid: '148172719'
---
{% ifversion fpt or ghes or ghec %} API는 인증을 위해 여러 가지 방법을 제공하지만 프로덕션 애플리케이션에 [OAuth](/apps/building-integrations/setting-up-and-registering-oauth-apps/)를 사용하는 것이 좋습니다. 제공된 다른 메서드는 스크립트 또는 테스트(즉, 전체 OAuth가 과잉인 경우)에 사용됩니다. 인증을 위해 {% data variables.product.product_name %}을 사용하는 타사 애플리케이션은 {% data variables.product.product_name %} 자격 증명을 요청하거나 수집해서는 안 됩니다.
대신 [OAuth 웹 흐름](/apps/building-oauth-apps/authorizing-oauth-apps/)을 사용해야 합니다.

{% endif %}

{% ifversion ghae %}

인증하려면 [OAuth](/apps/building-integrations/setting-up-and-registering-oauth-apps/) 웹 흐름을 통해 {% data variables.product.pat_generic %}과 같은 [OAuth](/apps/building-oauth-apps/authorizing-oauth-apps/) 토큰을 사용하는 것이 좋습니다.

{% endif %}

## 기본 인증

API는 몇 가지 차이점이 있는 [RFC2617](http://www.ietf.org/rfc/rfc2617.txt)에 정의된 기본 인증을 지원합니다.
주요 차이점은 RFC가 인증되지 않은 요청에 `401 Unauthorized` 응답으로 응답하도록 요구한다는 것입니다. 대부분의 경우 사용자 데이터의 존재가 공개됩니다. 대신 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API가 `404 Not Found`로 응답합니다.
이로 인해 `401 Unauthorized` 응답을 가정하는 HTTP 라이브러리에 문제가 발생할 수 있습니다. 해결 방법은 `Authorization` 헤더를 수동으로 만드는 것입니다.

### {% data variables.product.pat_generic %}s를 통해

{% ifversion pat-v2%}{% data variables.product.pat_v2 %}s{% else %}{% data variables.product.pat_generic %}s{% endif %}를 사용하여 GitHub API에 인증하는 것이 좋습니다.

```shell
$ curl -u USERNAME:TOKEN {% data variables.product.api_url_pre %}/user
```

이 방법은 도구가 기본 인증만 지원하지만 {% data variables.product.pat_generic %} 보안 기능을 활용하려는 경우에 유용합니다.

{% ifversion not ghae %}
### 사용자 이름 및 암호를 통해

{% ifversion fpt or ghec %} {% note %}

**참고:** {% data variables.product.prodname_dotcom %}은 2020년 11월 13일부터 {% data variables.product.prodname_free_user %}, {% data variables.product.prodname_pro %}, {% data variables.product.prodname_team %} 또는 {% data variables.product.prodname_ghe_cloud %} 요금제에 있는 계정을 포함하여 모든 {% data variables.product.prodname_dotcom_the_website %} 계정에 대해 API에 대한 암호 인증을 중단했습니다. 이제 토큰으로 수행해야 하는 사항에 따라 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API(예: OAuth 액세스 토큰, GitHub 앱 설치 액세스 토큰 또는 {% 데이터 variables.product.pat_generic %})에 인증해야 합니다. 자세한 내용은 “[문제 해결](/rest/overview/troubleshooting#basic-authentication-errors)”을 참조하세요.
 
{% endnote %} {% else %}

{% data variables.product.product_name %} API와 함께 기본 인증을 사용하려면 계정과 연결된 사용자 이름 및 암호를 보내기만 하면 됩니다.

예를 들어 [cURL][curl]을 통해 API에 액세스하는 경우 `<username>`을 {% data variables.product.product_name %} 사용자 이름으로 바꾸면 다음 명령이 사용자를 인증합니다.
(cURL은 암호를 입력하라는 메시지를 표시합니다.)

```shell
$ curl -u USERNAME {% data variables.product.api_url_pre %}/user
```
2단계 인증을 사용하도록 설정한 경우 [2단계 인증을 사용](/rest/overview/other-authentication-methods#working-with-two-factor-authentication)하는 방법을 이해해야 합니다.
{% endif %} {% endif %}

{% ifversion fpt or ghec %}
### SAML SSO를 위한 인증

{% note %}

**참고:** 다른 사용자를 대신하여 토큰을 생성하는 통합 및 OAuth 애플리케이션에는 자동으로 권한이 부여됩니다.

{% endnote %}

{% note %}

**참고:** {% data reusables.getting-started.bearer-vs-token %}

{% endnote %}

API를 사용하여 인증을 위해 [SAML SSO][saml-sso] 를 적용하는 조직에 액세스하는 경우 {% data variables.product.pat_generic %}을 만들고 해당 조직의 [토큰에 권한을 부여][allowlist] 해야 합니다. 조직에 대한 토큰에 권한을 부여하려면 `X-GitHub-SSO`에서 지정된 URL을 방문하세요.

```shell
$ curl -v -H "Authorization: Bearer TOKEN" {% data variables.product.api_url_pre %}/repos/octodocs-test/test

> X-GitHub-SSO: required; url=https://github.com/orgs/octodocs-test/sso?authorization_request=AZSCKtL4U8yX1H3sCQIVnVgmjmon5fWxks5YrqhJgah0b2tlbl9pZM4EuMz4
{
  "message": "Resource protected by organization SAML enforcement. You must grant your personal token access to this organization.",
  "documentation_url": "https://docs.github.com"
}
```

여러 조직에서 올 수 있는 데이터(예: [사용자가 만든 문제 목록 요청][user-issues]) `X-GitHub-SSO` 를 요청할 때 헤더는 {% data variables.product.pat_generic %}에 권한을 부여해야 하는 조직을 나타냅니다.

```shell
$ curl -v -H "Authorization: Bearer TOKEN" {% data variables.product.api_url_pre %}/user/issues

> X-GitHub-SSO: partial-results; organizations=21955855,20582480
```

값 `organizations` 은 {% data variables.product.pat_generic %}의 권한 부여가 필요한 조직에 대한 조직 ID의 쉼표로 구분된 목록입니다.
{% endif %}

{% ifversion fpt or ghes or ghec %}
## 2단계 인증 작업

2단계 인증을 사용하도록 설정한 경우 REST API의 _대부분의_ 엔드포인트에 대한 [기본 인증](#basic-authentication)을 사용하려면 사용자 이름 및 암호 대신 {% data variables.product.pat_generic %}{% ifversion ghes %} 또는 OAuth 토큰을 사용해야 합니다{% endif %}.

{% data variables.product.product_name %} 개발자 설정{% endif %}{% ifversion ghes %}을(를) 사용하여 [새 {% data variables.product.pat_generic %} {](https://github.com/settings/tokens/new)% ifversion fpt or ghec %}을(를) 생성할 수 있습니다. OAuth Authorizations API에서 "[새 권한 부여 만들기][/rest/reference/oauth-authorizations#create-a-new-authorization]" 엔드포인트를 사용하여 새 OAuth 토큰{% endif %}을(를) 생성합니다. 자세한 내용은 "[명령줄에 대한 {% data variables.product.pat_generic %} 만들기](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)"를 참조하세요. 그런 다음, 이러한 토큰을 사용하여 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API와 함께 [OAuth 토큰을 사용하여 인증][oauth-auth]합니다. {% ifversion ghes %} 사용자 이름 및 암호를 사용하여 인증해야 하는 경우는 OAuth 토큰을 만들거나 OAuth 권한 부여 API를 사용하는 경우 뿐입니다. {% endif %}

{% endif %}

{% ifversion ghes %}
### 2단계 인증에서 OAuth 권한 부여 API 사용

OAuth 권한 부여 API를 호출할 때 기본 인증을 사용하려면 토큰 대신 OTP(일회성 암호)와 사용자 이름 및 암호를 사용해야 합니다. OAuth 권한 부여 API를 사용하여 인증을 시도하면 서버에서는 이러한 헤더 중 하나와 `401 Unauthorized`로 응답하여 2단계 인증 코드가 필요하다는 것을 알립니다.

`X-GitHub-OTP: required; SMS` 또는 `X-GitHub-OTP: required; app`  

이 헤더는 계정이 2단계 인증 코드를 받는 방법을 알려줍니다. 계정을 설정하는 방법에 따라 SMS를 통해 OTP 코드를 받거나 Google Authenticator 또는 1Password와 같은 애플리케이션을 사용합니다. 자세한 내용은 “[2단계 인증 구성](/articles/configuring-two-factor-authentication)”을 참조하세요. 헤더에 OTP를 전달합니다.

```shell
$ curl --request POST \
  --url https://api.github.com/authorizations \
  --header 'authorization: Basic PASSWORD' \
  --header 'content-type: application/json' \
  --header 'x-github-otp: OTP' \
  --data '{"scopes": ["public_repo"], "note": "test"}'
```
{% endif %}

[curl]: http://curl.haxx.se/
[oauth-auth]: /rest/overview/resources-in-the-rest-api#authentication
[personal-access-tokens]: /articles/creating-a-personal-access-token-for-the-command-line
[saml-sso]: /articles/about-identity-and-access-management-with-saml-single-sign-on
[saml-sso-tokens]: https://github.com/settings/tokens
[allowlist]: /github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on
[user-issues]: /rest/reference/issues#list-issues-assigned-to-the-authenticated-user
