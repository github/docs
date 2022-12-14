---
title: GitHub 앱으로 인증
intro: '{% data reusables.shortdesc.authenticating_with_github_apps %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-github-apps/about-authentication-options-for-github-apps
  - /apps/building-github-apps/authentication-options-for-github-apps
  - /apps/building-github-apps/authenticating-with-github-apps
  - /developers/apps/authenticating-with-github-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Authentication
ms.openlocfilehash: 5530e34207140e7beab836a2a7bc9a70d0066c20
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/04/2022
ms.locfileid: '148009290'
---
## 프라이빗 키 생성

GitHub 앱을 만든 후에는 하나 이상의 프라이빗 키를 생성해야 합니다. 프라이빗 키를 사용하여 액세스 토큰 요청에 서명합니다.

여러 프라이빗 키를 만들고 회전하여 키가 손상되거나 손실되는 경우 가동 중지 시간을 방지할 수 있습니다. 프라이빗 키가 퍼블릭 키와 일치하는지 확인하려면 [프라이빗 키 확인](#verifying-private-keys)을 참조하세요.

프라이빗 키를 생성하려면 다음을 수행합니다.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.github_apps %} {% data reusables.user-settings.modify_github_app %}
5. “Private keys”(프라이빗 키)에서 **Generate a private key**(프라이빗 키 생성)를 클릭합니다.
![Generate private key(프라이빗 키 생성)](/assets/images/github-apps/github_apps_generate_private_keys.png)
6. 컴퓨터에 다운로드된 PEM 형식의 프라이빗 키가 표시됩니다. GitHub는 키의 공용 부분만 저장하므로 이 파일을 저장해야 합니다.

{% note %}

**참고:** 특정 파일 형식이 필요한 라이브러리를 사용하는 경우 다운로드한 PEM 파일은 `PKCS#1 RSAPrivateKey` 형식이 됩니다.

{% endnote %}

## 프라이빗 키 확인
{% data variables.product.product_name %}는 SHA-256 해시 함수를 사용하여 각 프라이빗 키 및 퍼블릭 키 쌍에 대한 지문을 생성합니다. 프라이빗 키의 지문을 생성하고 {% data variables.product.product_name %}에 표시된 지문과 비교하여 프라이빗 키가 {% data variables.product.product_name %}에 저장된 퍼블릭 키와 일치하는지 확인할 수 있습니다.

프라이빗 키를 확인하려면 다음을 수행합니다.

1. {% data variables.product.prodname_github_app %}의 개발자 설정 페이지의 “프라이빗 키” 섹션에서 확인하려는 프라이빗 키 및 퍼블릭 키 쌍의 지문을 찾습니다. 자세한 내용은 [프라이빗 키 생성](#generating-a-private-key)을 참조하세요.
![프라이빗 키 지문](/assets/images/github-apps/github_apps_private_key_fingerprint.png)
2. 다음 명령을 사용하여 프라이빗 키 지문(PEM)을 로컬로 생성합니다.
    ```shell
    $ openssl rsa -in PATH_TO_PEM_FILE -pubout -outform DER | openssl sha256 -binary | openssl base64
    ```
3. 로컬로 생성된 지문의 결과를 {% data variables.product.product_name %}에 표시되는 지문과 비교합니다.

## 프라이빗 키 삭제
손실되거나 손상된 프라이빗 키를 삭제하여 제거할 수 있지만 최소 한 개의 프라이빗 키가 있어야 합니다. 키가 하나만 있는 경우 이전 키를 삭제하기 전에 새 키를 생성해야 합니다.
![마지막 프라이빗 키 삭제](/assets/images/github-apps/github_apps_delete_key.png)

## {% data variables.product.prodname_github_app %}으로 인증

{% data variables.product.prodname_github_app %}으로 인증하면 다음과 같은 몇 가지 작업을 수행할 수 있습니다.

* {% data variables.product.prodname_github_app %}에 대한 높은 수준의 관리 정보를 검색할 수 있습니다.
* 앱 설치에 대한 액세스 토큰을 요청할 수 있습니다.

{% data variables.product.prodname_github_app %}으로 인증하려면 PEM 형식의 [프라이빗 키를 생성](#generating-a-private-key)하고 로컬 컴퓨터에 다운로드합니다. 이 키를 사용하여 [JWT(JSON Web Token)](https://jwt.io/introduction)에 서명하고 `RS256` 알고리즘을 사용하여 인코딩합니다. {% data variables.product.product_name %}는 앱의 저장된 퍼블릭 키로 토큰을 확인하여 요청이 인증되었는지 확인합니다.

다음은 JWT를 생성하는 데 사용할 수 있는 빠른 Ruby 스크립트입니다. 사용하기 전에 실행 `gem install jwt`를 실행해야 합니다.

<a name="jwt-payload"></a>
```ruby
require 'openssl'
require 'jwt'  # https://rubygems.org/gems/jwt

# Private key contents
private_pem = File.read("YOUR_PATH_TO_PEM")
private_key = OpenSSL::PKey::RSA.new(private_pem)

# Generate the JWT
payload = {
  # issued at time, 60 seconds in the past to allow for clock drift
  iat: Time.now.to_i - 60,
  # JWT expiration time (10 minute maximum)
  exp: Time.now.to_i + (10 * 60),
  # {% data variables.product.prodname_github_app %}'s identifier
  iss: "YOUR_APP_ID"
}

jwt = JWT.encode(payload, private_key, "RS256")
puts jwt
```

`YOUR_PATH_TO_PEM` 및 `YOUR_APP_ID`는 바꿔야 하는 값입니다. 값을 큰따옴표로 묶어야 합니다.

{% data variables.product.prodname_github_app %}의 식별자(`YOUR_APP_ID`)를 JWT [iss](https://tools.ietf.org/html/rfc7519#section-4.1.1)(발급자) 클레임의 값으로 사용합니다. [앱을 만든](/apps/building-github-apps/creating-a-github-app/) 후 초기 웹후크 ping을 통해 또는 언제든지 GitHub.com UI의 앱 설정 페이지에서 {% data variables.product.prodname_github_app %} 식별자를 가져올 수 있습니다.

JWT를 만든 후 API 요청의 `Header`에서 설정합니다.

```shell
$ curl -i -H "Authorization: Bearer YOUR_JWT" -H "Accept: application/vnd.github+json" {% data variables.product.api_url_pre %}/app
```

`YOUR_JWT`는 바꿔야 하는 값입니다.

위의 예제에서는 최대 만료 시간 10분을 사용하며, 그 후에 API가 `401` 오류를 반환하기 시작합니다.

```json
{
  "message": "'Expiration' claim ('exp') must be a numeric value representing the future time at which the assertion expires.",
  "documentation_url": "{% data variables.product.doc_url_pre %}"
}
```

시간이 만료된 후 새 JWT를 만들어야 합니다.

## {% data variables.product.prodname_github_app %}(으)로 API 엔드포인트 액세스

{% data variables.product.prodname_github_app %}에 대한 상위 수준 정보를 가져오는 데 사용할 수 있는 REST API 엔드포인트 목록은 “[GitHub 앱](/rest/reference/apps)”을 참조하세요.

## 설치로 인증

설치로 인증하면 해당 설치에 대한 API에서 작업을 수행할 수 있습니다. 설치로 인증하기 전에 설치 액세스 토큰을 만들어야 합니다. GitHub 앱을 최소 한 개의 리포지토리에 이미 설치했는지 확인합니다. 단일 설치 없이 설치 토큰을 만들 수 없습니다. 설치 액세스 토큰은 {% data variables.product.prodname_github_apps %}에서 인증하는 데 사용됩니다. 자세한 내용은 “[GitHub 앱 설치](/developers/apps/managing-github-apps/installing-github-apps)”를 참조하세요.

기본적으로 설치 액세스 토큰은 설치에서 액세스할 수 있는 모든 리포지토리로 범위가 지정됩니다. `repository_ids` 매개 변수를 사용하여 설치 액세스 토큰의 범위를 특정 리포지토리로 제한할 수 있습니다. 자세한 내용은 [앱 엔드포인트에 대한 설치 액세스 토큰 만들기](/rest/reference/apps#create-an-installation-access-token-for-an-app)를 참조하세요. 설치 액세스 토큰에는 {% data variables.product.prodname_github_app %}에 의해 구성된 사용 권한이 있으며 1시간 후에 만료됩니다.

인증된 앱에 대한 설치를 나열하려면 [위에서 생성된](#jwt-payload) JWT를 API 요청의 권한 부여 헤더에 포함합니다.

```shell
$ curl -i -X GET \
-H "Authorization: Bearer YOUR_JWT" \
-H "Accept: application/vnd.github+json" \
{% data variables.product.api_url_pre %}/app/installations
```

응답에는 설치 액세스 토큰을 만드는 데 각 설치의 `id`를 사용할 수 있는 설치 목록이 포함됩니다. 응답 형식에 대한 자세한 내용은 “[인증된 앱에 대한 설치 나열](/rest/reference/apps#list-installations-for-the-authenticated-app)”을 참조하세요.

설치 액세스 토큰을 만들려면 [위에서 생성된](#jwt-payload) JWT를 API 요청의 권한 부여 헤더에 포함하고 `:installation_id`를 설치의 `id`로 바꿉니다.

```shell
$ curl -i -X POST \
-H "Authorization: Bearer YOUR_JWT" \
-H "Accept: application/vnd.github+json" \
{% data variables.product.api_url_pre %}/app/installations/:installation_id/access_tokens
```

응답에는 설치 액세스 토큰, 만료 날짜, 토큰의 사용 권한 및 토큰이 액세스할 수 있는 리포지토리가 포함됩니다. 응답 형식에 대한 자세한 내용은 [앱 엔드포인트에 대한 설치 액세스 토큰 만들기](/rest/reference/apps#create-an-installation-access-token-for-an-app)를 참조하세요.

설치 액세스 토큰을 사용하여 인증하려면 API 요청의 권한 부여 헤더에 포함합니다.

```shell
$ curl -i \
-H "Authorization: Bearer YOUR_INSTALLATION_ACCESS_TOKEN" \
-H "Accept: application/vnd.github+json" \
{% data variables.product.api_url_pre %}/installation/repositories
```

`YOUR_INSTALLATION_ACCESS_TOKEN`은 바꿔야 하는 값입니다.

{% note %}

**참고:** {% data reusables.getting-started.bearer-vs-token %}

{% endnote %}

## 설치로 API 엔드포인트 액세스

설치 액세스 토큰을 사용하여 {% data variables.product.prodname_github_apps %}에서 사용할 수 있는 REST API 엔드포인트 목록은 “[사용 가능한 엔드포인트](/rest/overview/endpoints-available-for-github-apps)”를 참조하세요.

설치와 관련된 엔드포인트 목록은 "[설치](/rest/reference/apps#installations)"를 참조하세요.

## 설치를 통한 HTTP 기반 Git 액세스

리포지토리의 `contents`에 대한 [사용 권한](/apps/building-github-apps/setting-permissions-for-github-apps/)이 있는 설치는 설치 액세스 토큰을 사용하여 Git 액세스를 인증할 수 있습니다. 설치 액세스 토큰을 HTTP 암호로 사용합니다.

```shell
git clone https://x-access-token:&lt;token&gt;@github.com/owner/repo.git
```
