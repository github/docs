---
title: 매니페스트에서 GitHub 앱 만들기
intro: 'GitHub 앱 매니페스트는 개인 리포지토리에서 앱을 사용하려는 모든 사용자와 공유할 수 있는 미리 구성된 GitHub 앱입니다. 매니페스트 흐름을 사용하면 앱을 등록하거나 등록을 호스트된 앱 코드에 연결하지 않고도 GitHub 앱을 빠르게 만들고, 설치하고, 확장할 수 있습니다.'
redirect_from:
  - /apps/building-github-apps/creating-github-apps-from-a-manifest
  - /developers/apps/creating-a-github-app-from-a-manifest
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: App creation manifest flow
ms.openlocfilehash: 9ff6fa93e0f31de16e6ee2d96f1d7665742151d3
ms.sourcegitcommit: 6bd8fe6d49214743f82fa2dc71847c241f140c87
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/07/2022
ms.locfileid: '148135721'
---
## GitHub 앱 매니페스트 정보

누군가 매니페스트에서 GitHub 앱을 만드는 경우 URL을 따르고 앱 이름을 지정하면 됩니다. 매니페스트에는 앱을 자동으로 등록하는 데 필요한 권한, 이벤트 및 웹후크 URL이 포함됩니다. 매니페스트 흐름은 GitHub 앱 등록을 만들고 앱의 웹후크 비밀, 프라이빗 키(PEM 파일), GitHub 앱 ID를 검색합니다. 매니페스트에서 앱을 만드는 사용자는 앱을 소유하며 [앱의 구성 설정을 편집](/apps/managing-github-apps/modifying-a-github-app/)하거나, 앱을 삭제하거나, 앱을 GitHub의 다른 사용자에게 전송하도록 선택할 수 있습니다.

[Probot](https://probot.github.io/)을 사용하여 GitHub 앱 매니페스트를 시작하거나 예제 구현을 볼 수 있습니다. 자세한 내용은 “[Probot을 사용하여 GitHub 앱 매니페스트 흐름 구현](#using-probot-to-implement-the-github-app-manifest-flow)”을 참조하세요.

다음은 GitHub 앱 매니페스트를 사용하여 미리 구성된 앱을 만드는 몇 가지 시나리오입니다.

* GitHub 앱을 개발할 때 새 팀 멤버가 빠르게 최신 정보를 갖출 수 있도록 돕습니다.
* 다른 사용자가 앱을 구성할 필요 없이 GitHub API를 사용하여 GitHub 앱을 확장하도록 허용합니다.
* GitHub 커뮤니티와 공유할 GitHub 앱 참조 디자인을 만듭니다.
* 동일한 구성을 사용하여 개발 및 프로덕션 환경에 GitHub 앱을 배포해야 합니다.
* GitHub 앱 구성의 수정 버전을 추적합니다.

## GitHub 앱 매니페스트 흐름 구현

GitHub 앱 매니페스트 흐름은 [OAuth 흐름](/apps/building-oauth-apps/authorizing-oauth-apps/)과 유사한 핸드셰이크 프로세스를 사용합니다. 흐름은 매니페스트를 사용하여 [GitHub 앱을 등록](/apps/building-github-apps/creating-a-github-app/)하고 앱의 프라이빗 키, 웹후크 비밀, ID를 검색하는 데 사용되는 임시 `code`를 받습니다.

{% note %}

**참고:** 1시간 내에 GitHub 앱 매니페스트 흐름의 세 단계를 모두 완료해야 합니다.

{% endnote %}

다음 단계에 따라 GitHub 앱 매니페스트 흐름을 구현합니다.

1. 사용자를 GitHub로 리디렉션하여 새 GitHub 앱을 만듭니다.
1. GitHub는 사용자를 사이트로 다시 리디렉션합니다.
1. 임시 코드를 교환하여 앱 구성을 검색합니다.

### 1. 사용자를 GitHub로 리디렉션하여 새 GitHub 앱 만들기

사용자를 리디렉션하여 새 GitHub 앱을 만들려면 `POST` 요청을 `https://github.com/settings/apps/new`(개인 계정) 또는 `https://github.com/organizations/ORGANIZATION/settings/apps/new`(조직 계정)로 보내는 클릭 가능한 [링크를 제공](#examples)하고 `ORGANIZATION`을 앱을 만들 조직 계정의 이름으로 바꿉니다.

[GitHub 앱 매니페스트 매개 변수](#github-app-manifest-parameters)를 JSON으로 인코딩된 문자열로 `manifest` 매개 변수에 포함해야 합니다. 추가 보안을 위해 `state` [매개 변수](#parameters)를 포함할 수도 있습니다.

앱을 만드는 사용자는 `manifest` 매개 변수에 포함한 앱의 이름을 편집할 수 있는 입력 필드가 있는 GitHub 페이지로 리디렉션됩니다. `name`을 `manifest`에 포함하지 않는 경우 이 필드에서 앱의 고유한 이름을 설정할 수 있습니다.

![GitHub 앱 매니페스트 만들기](/assets/images/github-apps/create-github-app-manifest.png)

#### GitHub 앱 매니페스트 매개 변수

 Name | Type | 설명
-----|------|-------------
`name` | `string` | GitHub 앱의 이름입니다.
`url` | `string` | **필수 사항입니다.** GitHub 앱의 홈페이지입니다.
`hook_attributes` | `object` | GitHub 앱 웹후크의 구성입니다.
`redirect_url` | `string` | 사용자가 매니페스트에서 GitHub 앱 만들기를 시작한 후 리디렉션할 전체 URL입니다.
`callback_urls` | `array of strings` | 다른 사람이 설치 권한을 부여한 후 리디렉션할 전체 URL입니다. 최대 10개의 콜백 URL을 제공할 수 있습니다.
`setup_url` | `string` | 추가 설정이 필요한 경우 GitHub 앱을 설치한 후 사용자를 로 리디렉션하는 전체 URL입니다.
`description` | `string` | GitHub 앱에 대한 설명입니다.
`public` | `boolean` | GitHub 앱을 퍼블릭으로 사용할 수 있는 경우 `true`로 설정하고, 앱 소유자만 액세스할 수 있는 경우 `false`로 설정합니다.
`default_events` | `array` | GitHub 앱이 구독하는 [이벤트](/webhooks/event-payloads) 목록입니다.
`default_permissions` | `object` | GitHub 앱에 필요한 [권한](/rest/reference/permissions-required-for-github-apps) 세트입니다. 개체 형식은 키에 권한 이름(예 `issues`)을 사용하고 값에 액세스 형식(예: `write`)을 사용합니다.

`hook_attributes` 개체에는 다음 키가 있습니다.

Name | Type | 설명
-----|------|-------------
`url` | `string` | **필수 사항입니다.** 웹후크 `POST` 요청을 수신할 서버의 URL입니다.
`active` | `boolean` | 이 후크가 트리거될 때 이벤트 세부 정보를 전달하며 기본값은 true입니다.

#### 매개 변수

 속성 | Type | 설명
-----|------|-------------
`state`| `string` | {% data reusables.apps.state_description %}

#### 예제

이 예제에서는 개인 계정에 대한 `POST` 요청을 트리거하는 단추가 있는 웹 페이지의 양식을 사용합니다.

```html
<form action="https://github.com/settings/apps/new?state=abc123" method="post">
 Create a GitHub App Manifest: <input type="text" name="manifest" id="manifest"><br>
 <input type="submit" value="Submit">
</form>

<script>
 input = document.getElementById("manifest")
 input.value = JSON.stringify({
   "name": "Octoapp",
   "url": "https://www.example.com",
   "hook_attributes": {
     "url": "https://example.com/github/events",
   },
   "redirect_url": "https://example.com/redirect",
   "callback_urls": [
     "https://example.com/callback"
   ],
   "public": true,
   "default_permissions": {
     "issues": "write",
     "checks": "write"
   },
   "default_events": [
     "issues",
     "issue_comment",
     "check_suite",
     "check_run"
   ]
 })
</script>
```

이 예제에서는 조직 계정에 대한 `POST` 요청을 트리거하는 단추가 있는 웹 페이지의 양식을 사용합니다. `ORGANIZATION`을 앱을 만들려는 조직 계정의 이름으로 바꿉니다.

```html
<form action="https://github.com/organizations/ORGANIZATION/settings/apps/new?state=abc123" method="post">
 Create a GitHub App Manifest: <input type="text" name="manifest" id="manifest"><br>
 <input type="submit" value="Submit">
</form>

<script>
 input = document.getElementById("manifest")
 input.value = JSON.stringify({
   "name": "Octoapp",
   "url": "https://www.example.com",
   "hook_attributes": {
     "url": "https://example.com/github/events",
   },
   "redirect_url": "https://example.com/redirect",
   "callback_urls": [
     "https://example.com/callback"
   ],
   "public": true,
   "default_permissions": {
     "issues": "write",
     "checks": "write"
   },
   "default_events": [
     "issues",
     "issue_comment",
     "check_suite",
     "check_run"
   ]
 })
</script>
```

### 2. GitHub는 사용자를 사이트로 다시 리디렉션

사용자가 **GitHub 앱 만들기** 를 클릭하면 GitHub는 코드 매개 변수에서 임시 `code`를 사용하여 `redirect_url`로 다시 리디렉션됩니다. 예를 들면 다음과 같습니다.

    https://example.com/redirect?code=a180b1a3d263c81bc6441d7b990bae27d4c10679

`state` 매개 변수를 제공한 경우 `redirect_url`에도 해당 매개 변수가 표시됩니다. 예를 들면 다음과 같습니다.

    https://example.com/redirect?code=a180b1a3d263c81bc6441d7b990bae27d4c10679&state=abc123

### 3. 임시 코드를 교환하여 앱 구성 검색

핸드셰이크를 완료하려면 `POST` 요청의 임시 `code`를 [매니페스트에서 GitHub 앱 만들기](/rest/reference/apps#create-a-github-app-from-a-manifest) 엔드포인트로 보냅니다. 응답에는 `id`(GitHub 앱 ID), `pem`(프라이빗 키), `webhook_secret`이 포함됩니다. GitHub는 자동으로 앱에 대한 웹후크 비밀을 만듭니다. 이러한 값을 앱 서버의 환경 변수에 저장할 수 있습니다. 예를 들어, 앱에서 [dotenv](https://github.com/bkeepers/dotenv)를 사용하여 환경 변수를 저장하는 경우 변수를 앱의 `.env` 파일에 저장합니다.

1시간 내에 GitHub 앱 매니페스트 흐름의 이 단계를 완료해야 합니다.

{% note %}

**참고:** 이 엔드포인트는 속도가 제한됩니다. 현재 속도 제한 상태를 가져오는 방법을 알아보려면 [속도 제한](/rest/reference/rate-limit)을 참조하세요.

{% endnote %}

    POST /app-manifests/{code}/conversions

엔드포인트의 응답에 관한 자세한 내용은 [매니페스트에서 GitHub 앱 만들기](/rest/reference/apps#create-a-github-app-from-a-manifest)를 참조하세요.

매니페스트 흐름의 마지막 단계가 완료되면 흐름에서 앱을 만드는 사용자는 개인 리포지토리에 설치할 수 있는 등록된 GitHub 앱의 소유자가 됩니다. GitHub API를 사용하여 앱을 확장하거나, 소유권을 다른 사용자에게 이전하거나, 언제든지 삭제하도록 선택할 수 있습니다.

## Probot을 사용하여 GitHub 앱 매니페스트 흐름 구현

[Probot](https://probot.github.io/)은 웹후크 유효성 검사, 인증 수행 등 모든 GitHub 앱에 필요한 많은 작업을 수행하는 [Node.js](https://nodejs.org/)로 빌드된 프레임워크입니다. Probot은 [GitHub 앱 매니페스트 흐름](#implementing-the-github-app-manifest-flow)을 구현하므로 GitHub 앱 참조 디자인을 쉽게 만들고 GitHub 커뮤니티와 공유할 수 있도록 합니다.

공유할 수 있는 Probot 앱을 만들려면 다음 단계를 수행합니다.

1. [새 GitHub 앱을 생성합니다](https://probot.github.io/docs/development/#generating-a-new-app).
1. 생성한 프로젝트를 열고 `app.yml` 파일의 설정을 사용자 지정합니다. Probot은 `app.yml`의 설정을 [GitHub 앱 매니페스트 매개 변수](#github-app-manifest-parameters)로 사용합니다.
1. 애플리케이션의 사용자 지정 코드를 추가합니다.
1. [GitHub 앱을 로컬로 실행](https://probot.github.io/docs/development/#running-the-app-locally)하거나 [원하는 위치에 호스트](#hosting-your-app-with-glitch)합니다. 호스트된 앱의 URL로 이동하면 사용자가 클릭하여 미리 구성된 앱을 만들 수 있는 **GitHub 앱 등록** 단추가 있는 웹 페이지를 찾을 수 있습니다. 아래 웹 페이지는 GitHub 앱 매니페스트 흐름에서 [1단계](#1-you-redirect-people-to-github-to-create-a-new-github-app)의 Probot 구현입니다.

![Probot GitHub 앱 등록](/assets/images/github-apps/github_apps_probot-registration.png)

[dotenv](https://github.com/bkeepers/dotenv)를 사용하면 Probot은 `.env` 파일을 만들고 [앱 구성에서 검색된](#3-you-exchange-the-temporary-code-to-retrieve-the-app-configuration) 값으로 `APP_ID`, `PRIVATE_KEY` 및 `WEBHOOK_SECRET` 환경 변수를 설정합니다.

### Glitch를 사용하여 앱 호스트

[Glitch](https://glitch.com/)를 사용하여 앱을 호스트하고 공유하는 [예제 Probot 앱](https://glitch.com/~auspicious-aardwolf)을 볼 수 있습니다. 이 예제에서는 [Checks API](/rest/reference/checks)를 사용하고 `app.yml` 파일에서 필요한 Checks API 이벤트 및 권한을 선택합니다. Glitch는 “자신만의 앱을 리믹스”할 수 있는 도구입니다. 앱을 리믹스하면 Glitch가 호스트하고 배포하는 앱 복사본이 만들어집니다. Glitch 앱 리믹스에 관한 자세한 내용은 “[Glitch 정보](https://glitch.com/about/)”를 참조하세요.
