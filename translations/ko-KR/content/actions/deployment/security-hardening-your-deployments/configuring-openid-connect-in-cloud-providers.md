---
title: 클라우드 공급자에서 OpenID Connect 구성
shortTitle: OpenID Connect in cloud providers
intro: 워크플로 내에서 OpenID Connect를 사용하여 클라우드 공급자에 인증합니다.
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>=3.5'
type: tutorial
topics:
  - Security
ms.openlocfilehash: 90dfa54e71fc602243ddb0d51b190fb8530727e4
ms.sourcegitcommit: 938ec7898dddd5da5481ad32809d68e4127e1948
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/07/2022
ms.locfileid: '148135496'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 개요

OIDC(OpenID Connect)를 사용하면 {% data variables.product.prodname_actions %} 워크플로가 수명이 긴 {% data variables.product.prodname_dotcom %} 비밀로 자격 증명을 저장하지 않고도 클라우드 공급자의 리소스에 액세스할 수 있습니다.

OIDC를 사용하려면 먼저 {% data variables.product.prodname_dotcom %}의 OIDC를 페더레이션 ID로 신뢰하도록 클라우드 공급자를 구성한 다음 토큰을 사용하여 인증하도록 워크플로를 업데이트해야 합니다.

## 필수 조건

{% data reusables.actions.oidc-link-to-intro %}

{% data reusables.actions.oidc-security-notice %}

## {% data variables.product.prodname_actions %} 워크플로 업데이트

OIDC에 대한 워크플로를 업데이트하려면 YAML에 두 가지를 변경해야 합니다.
1. 토큰에 대한 사용 권한 설정을 추가합니다.
2. 클라우드 공급자의 공식 작업을 사용하여 클라우드 액세스 토큰에 대한 OIDC 토큰(JWT)을 교환합니다.

클라우드 공급자가 아직 공식 작업을 제공하지 않는 경우 워크플로를 업데이트하여 해당 단계를 수동으로 수행할 수 있습니다.

### 사용 권한 설정 추가

 {% data reusables.actions.oidc-permissions-token %}

### 공식 작업 사용

클라우드 공급자가 {% data variables.product.prodname_actions %}와 함께 OIDC를 사용하기 위한 공식 작업을 만든 경우 OIDC 토큰을 액세스 토큰으로 쉽게 교환할 수 있습니다. 그런 다음 클라우드 리소스에 액세스할 때 이 토큰을 사용하도록 워크플로를 업데이트할 수 있습니다.

## 사용자 지정 작업 사용

클라우드 공급자에 공식 작업이 없거나 사용자 지정 스크립트를 만들려는 경우 {% data variables.product.prodname_dotcom %}의 OIDC 공급자에서 JWT(JSON Web Token)를 수동으로 요청할 수 있습니다.

공식 작업을 사용하지 않는 경우 {% data variables.product.prodname_dotcom %}에서 Actions 핵심 도구 키트를 사용하는 것이 좋습니다. 또는 다음 환경 변수를 사용하여 `ACTIONS_RUNTIME_TOKEN``ACTIONS_ID_TOKEN_REQUEST_URL` 토큰을 검색할 수 있습니다.

이 방법을 사용하여 워크플로를 업데이트하려면 YAML에 세 가지 변경사항을 적용해야 합니다.

1. 토큰에 대한 사용 권한 설정을 추가합니다.
2. {% data variables.product.prodname_dotcom %}의 OIDC 공급자에서 OIDC 토큰을 요청하는 코드를 추가합니다.
3. 액세스 토큰을 위해 클라우드 공급자와 OIDC 토큰을 교환하는 코드를 추가합니다.

### Actions 핵심 도구 키트를 사용하여 JWT 요청

다음 예제에서는 `core` 도구 키트와 함께 `actions/github-script` 사용하여 {% data variables.product.prodname_dotcom %}의 OIDC 공급자로부터 JWT를 요청하는 방법을 보여 줍니다. 자세한 내용은 “[작업 도구 키트 패키지 추가](/actions/creating-actions/creating-a-javascript-action#adding-actions-toolkit-packages)”를 참조하세요.

```yaml
jobs:
  job:
    environment: Production
    runs-on: ubuntu-latest
    steps:
    - name: Install OIDC Client from Core Package
      run: npm install @actions/core@1.6.0 @actions/http-client
    - name: Get Id Token
      uses: {% data reusables.actions.action-github-script %}
      id: idtoken
      with:
        script: |
          const coredemo = require('@actions/core')
          let id_token = await coredemo.getIDToken()
          coredemo.setOutput('id_token', id_token)
```

### 환경 변수를 사용하여 JWT 요청

다음 예제에서는 환경 변수를 사용하여 JSON 웹 토큰을 요청하는 방법을 보여 줍니다.

배포 작업의 경우 `core` 도구 키트와 함께 `actions/github-script`를 사용하여 토큰 설정을 정의해야 합니다. 자세한 내용은 “[작업 도구 키트 패키지 추가](/actions/creating-actions/creating-a-javascript-action#adding-actions-toolkit-packages)”를 참조하세요.

예를 들면 다음과 같습니다.

```yaml
jobs:
  job:
    runs-on: ubuntu-latest
    steps:
    - uses: {% data reusables.actions.action-github-script %}
      id: script
      timeout-minutes: 10
      with:
        debug: true
        script: |
          const token = process.env['ACTIONS_RUNTIME_TOKEN']
          const runtimeUrl = process.env['ACTIONS_ID_TOKEN_REQUEST_URL']
          core.setOutput('TOKEN', token.trim())
          core.setOutput('IDTOKENURL', runtimeUrl.trim())
```

그런 다음 {% data variables.product.prodname_dotcom %} OIDC 공급자에서 JWT를 검색하는 데 `curl`을 사용할 수 있습니다. 예를 들면 다음과 같습니다.

```yaml
    - run: |
        IDTOKEN=$(curl -H "Authorization: bearer {% raw %} ${{steps.script.outputs.TOKEN}}" ${{steps.script.outputs.IDTOKENURL}} {% endraw %} -H "Accept: application/json; api-version=2.0" -H "Content-Type: application/json" -d "{}" | jq -r '.value')
        echo $IDTOKEN
        jwtd() {
            if [[ -x $(command -v jq) ]]; then
                jq -R 'split(".") | .[0],.[1] | @base64d | fromjson' <<< "${1}"
                echo "Signature: $(echo "${1}" | awk -F'.' '{print $3}')"
            fi
        }
        jwtd $IDTOKEN
{%- ifversion actions-save-state-set-output-envs %}
        echo "idToken=${IDTOKEN}" >> $GITHUB_OUTPUT
{%- else %}
        echo "::set-output name=idToken::${IDTOKEN}"
{%- endif %}
      id: tokenid
```

### 클라우드 공급자에서 액세스 토큰 가져오기

액세스 토큰을 얻으려면 클라우드 공급자에게 OIDC JSON 웹 토큰을 제공해야 합니다.

각 배포에 대해 워크플로는 OIDC 토큰을 가져와 클라우드 공급자에게 제공하는 클라우드 로그인 작업(또는 사용자 지정 스크립트)을 사용해야 합니다. 그런 다음 클라우드 공급자는 토큰에서 클레임의 유효성을 검사합니다. 성공하면 해당 작업 실행에만 사용할 수 있는 클라우드 액세스 토큰을 제공합니다. 그러면 제공된 액세스 토큰을 작업의 후속 작업에서 사용하여 클라우드에 연결하고 해당 리소스에 배포할 수 있습니다.

액세스 토큰에 대한 OIDC 토큰을 교환하는 단계는 각 클라우드 공급자에 따라 달라집니다.

### 클라우드 공급자의 리소스 액세스

액세스 토큰을 가져온 후에는 특정 클라우드 작업 또는 스크립트를 사용하여 클라우드 공급자에 인증하고 해당 리소스에 배포할 수 있습니다. 단계는 각 클라우드 공급자에 따라 다를 수 있습니다.
또한 이 액세스 토큰의 기본 만료 시간은 각 클라우드마다 다를 수 있으며 클라우드 공급자 측에서 구성할 수 있습니다.
