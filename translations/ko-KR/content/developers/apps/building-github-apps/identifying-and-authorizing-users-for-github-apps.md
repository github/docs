---
title: GitHub 앱에 대한 사용자 식별 및 권한 부여
intro: '{% data reusables.shortdesc.identifying_and_authorizing_github_apps %}'
redirect_from:
  - /early-access/integrations/user-identification-authorization
  - /apps/building-integrations/setting-up-and-registering-github-apps/identifying-users-for-github-apps
  - /apps/building-github-apps/identifying-and-authorizing-users-for-github-apps
  - /developers/apps/identifying-and-authorizing-users-for-github-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Identify & authorize users
ms.openlocfilehash: 302e7a25931c3af2957dae7a67e0ca080fc5bd50
ms.sourcegitcommit: f54d01e643f994ce48f0774dbc680ad77dd6193f
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160582'
---
{% data reusables.pre-release-program.expiring-user-access-tokens %}

GitHub 앱이 사용자를 대신하여 작동하면 사용자-서버 요청을 수행합니다. 해당 요청은 사용자의 액세스 토큰을 사용하여 권한을 부여받아야 합니다. 사용자-서버 요청은 특정 사용자에게 표시할 리포지토리를 결정하는 것과 같은 사용자에 대한 데이터 요청을 포함합니다. 해당 요청에는 빌드 실행과 같이 사용자가 트리거하는 작업도 포함됩니다.

{% data reusables.apps.expiring_user_authorization_tokens %}

## 사이트에서 사용자 식별

사용자에게 브라우저에서 실행되는 표준 앱에 대한 권한을 부여하려면 [웹 애플리케이션 흐름](#web-application-flow)을 사용합니다.

CLI 도구 또는 Git 자격 증명 관리자와 같이 브라우저에 직접 액세스하지 않고 헤드리스 앱에 대해 사용자에게 권한을 부여하려면 [디바이스 흐름](#device-flow)을 사용합니다. 디바이스 흐름은 OAuth 2.0 [디바이스 권한 부여](https://tools.ietf.org/html/rfc8628)를 사용합니다.

## 웹 애플리케이션 흐름

웹 애플리케이션 흐름을 사용하여 사이트에서 사용자를 식별하는 프로세스는 다음과 같습니다.

1. 사용자는 GitHub ID를 요청하도록 리디렉션됩니다.
2. GitHub가 사용자를 사이트로 다시 리디렉션합니다.
3. GitHub 앱이 사용자의 액세스 토큰을 사용하여 API에 액세스합니다.

앱을 만들거나 수정할 때 **설치 중에 OAuth(사용자 권한 부여 요청)** 를 선택하면 앱 설치 중에 1단계가 완료됩니다. 자세한 내용은 “[설치하는 동안 사용자에게 권한 부여](/apps/installing-github-apps/#authorizing-users-during-installation)”를 참조하세요.

### 1. 사용자의 GitHub ID 요청
브라우저에서 다음 URL로 사용자를 안내합니다.

    GET {% data variables.product.oauth_host_code %}/login/oauth/authorize

GitHub 앱이 `login` 매개 변수를 지정하면 앱에 로그인하고 권한을 부여하는 데 사용할 수 있는 특정 계정을 사용자에게 표시합니다.

#### 매개 변수

이름 | 형식 | 설명
-----|------|------------
`client_id` | `string` | **필수 사항입니다.** GitHub 앱의 클라이언트 ID입니다. 앱을 선택할 때 [GitHub 앱 설정](https://github.com/settings/apps)에서 찾을 수 있습니다. **참고:** 앱 ID와 클라이언트 ID는 동일하지 않으며 서로 교환할 수 없습니다.
`redirect_uri` | `string` | 권한 부여 후에 사용자를 보낼 애플리케이션의 URL입니다. 이는 GitHub 앱을 설정할 때 {% ifversion fpt or ghes or ghec %} **콜백 URL** 로 제공한 URL 중 하나{% else %}**사용자 권한 부여 콜백 URL** 필드에 제공한 URL{% endif %}와 정확히 일치해야 하며 추가 매개 변수를 포함할 수 없습니다.
`state` | `string` | 위조 공격으로부터 보호하기 위해 임의 문자열을 포함해야 하며 다른 임의 데이터를 포함할 수 있습니다.
`login` | `string` | 앱에 로그인하고 권한을 부여하는 데 사용할 특정 계정을 제안합니다.
`allow_signup` | `string` | 인증되지 않은 사용자에게 OAuth 흐름 중에 {% data variables.product.prodname_dotcom %}에 등록하는 옵션이 제공될지 여부입니다. 기본값은 `true`입니다. 정책에서 등록을 금지할 때 `false`를 사용합니다.

{% note %}

**참고:** 권한 부여 요청에 범위를 제공할 필요가 없습니다. 기존 OAuth와 달리 권한 부여 토큰은 GitHub 앱 및 사용자의 권한과 연결된 권한으로 제한됩니다.

{% endnote %}

### 2. GitHub가 사용자를 사이트로 다시 리디렉션

사용자가 요청을 수락하면 GitHub는 `state` 매개 변수의 이전 단계에서 제공한 상태뿐만 아니라 코드 매개 변수의 임시 `code`와 함께 사이트로 다시 리디렉션합니다. 상태가 일치하지 않으면 요청이 타사에 의해 만들어졌으며 프로세스를 중단해야 합니다.

{% note %}

**참고:** 앱을 만들거나 수정할 때 **설치 중에 OAuth(사용자 권한 부여 요청)** 를 선택하는 경우 GitHub에서 액세스 토큰을 교환해야 하는 임시 `code`를 반환합니다. 앱을 설치하는 동안 GitHub에서 OAuth 흐름을 시작할 때 `state` 매개 변수가 반환되지 않습니다.

{% endnote %}

이 `code`를 액세스 토큰으로 교환합니다.  만료 토큰을 사용하도록 설정하면 액세스 토큰은 8시간 후에 만료되고 새로 고침 토큰은 6개월 후에 만료됩니다. 토큰을 새로 고칠 때마다 새 새로 고침 토큰이 발생합니다. 자세한 내용은 “[사용자-서버 액세스 토큰 새로 고침](/developers/apps/refreshing-user-to-server-access-tokens)”을 참조하세요.

만료된 사용자 토큰은 현재 선택적 기능이며 변경될 수 있습니다. 사용자-서버 토큰 만료 기능을 옵트인하려면 “[앱에 선택적 기능 활성화](/developers/apps/activating-optional-features-for-apps)”를 참조하세요.

다음 엔드포인트에 액세스 토큰을 받도록 요청합니다.

    POST {% data variables.product.oauth_host_code %}/login/oauth/access_token

#### 매개 변수

이름 | 형식 | 설명
-----|------|------------
`client_id` | `string` | **필수 사항입니다.** GitHub 앱의 클라이언트 ID입니다.
`client_secret` | `string`   | **필수 사항입니다.** GitHub 앱의 클라이언트 암호입니다.
`code` | `string`   | **필수 사항입니다.** 1단계에 대한 응답으로 받은 코드입니다.
`redirect_uri` | `string` | 권한 부여 후에 사용자를 보낼 애플리케이션의 URL입니다. 이는 GitHub 앱을 설정할 때 {% ifversion fpt or ghes or ghec %} **콜백 URL** 로 제공한 URL 중 하나{% else %}**사용자 권한 부여 콜백 URL** 필드에 제공한 URL{% endif %}와 정확히 일치해야 하며 추가 매개 변수를 포함할 수 없습니다.

#### 응답

기본적으로 응답은 다음 형식을 사용합니다. 응답 매개 변수 `expires_in`, `refresh_token`, `refresh_token_expires_in`은 만료되는 사용자-서버 액세스 토큰을 사용하도록 설정할 때만 반환됩니다.

```json
{
  "access_token": "ghu_16C7e42F292c6912E7710c838347Ae178B4a",
  "expires_in": 28800,
  "refresh_token": "ghr_1B4a2e77838347a7E420ce178F2E7c6912E169246c34E1ccbF66C46812d16D5B1A9Dc86A1498",
  "refresh_token_expires_in": 15811200,
  "scope": "",
  "token_type": "bearer"
}
```

### 3. GitHub 앱이 사용자의 액세스 토큰을 사용하여 API에 액세스

사용자의 액세스 토큰을 사용하면 GitHub 앱이 사용자를 대신하여 API에 요청할 수 있습니다.

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

{% ifversion device-flow-is-opt-in %}디바이스 흐름을 사용하여 사용자를 식별하고 권한을 부여하려면 먼저 앱 설정에서 사용하도록 설정해야 합니다. 디바이스 흐름을 사용하도록 설정하는 방법에 대한 자세한 내용은 “[GitHub 앱 수정](/developers/apps/managing-github-apps/modifying-a-github-app)”을 참조하세요. {% endif %}디바이스 흐름을 사용하여 사용자에게 권한을 부여하는 방법에 대한 자세한 내용은 “[OAuth 앱 권한 부여](/developers/apps/authorizing-oauth-apps#device-flow)”를 참조하세요.

## 사용자가 액세스할 수 있는 설치 리소스 확인

사용자에 대한 OAuth 토큰이 있으면 사용자가 액세스할 수 있는 설치를 확인할 수 있습니다.

    Authorization: Bearer OAUTH-TOKEN
    GET /user/installations

설치를 위해 사용자가 액세스할 수 있는 리포지토리를 확인할 수도 있습니다.

    Authorization: Bearer OAUTH-TOKEN
    GET /user/installations/:installation_id/repositories

자세한 내용은 [사용자 액세스 토큰에 액세스할 수 있는 앱 설치 나열](/rest/apps#list-app-installations-accessible-to-the-user-access-token) 및 [사용자 액세스 토큰에 액세스할 수 있는 목록 리포지토리](/rest/apps#list-repositories-accessible-to-the-user-access-token)에서 찾을 수 있습니다.

## 철회한 GitHub 앱 권한 부여 처리

사용자가 GitHub 앱의 권한 부여를 철회하면 앱은 기본적으로 [`github_app_authorization`](/webhooks/event-payloads/#github_app_authorization) 웹후크를 받습니다. GitHub 앱은 이 이벤트에서 구독을 취소할 수 없습니다. {% data reusables.webhooks.authorization_event %}

## 사용자 수준 권한

GitHub 앱에 사용자 수준 권한을 추가하여 [사용자 권한 부여 흐름](#identifying-users-on-your-site)의 일부로 개별 사용자가 부여한 사용자 메일과 같은 사용자 리소스에 액세스할 수 있습니다. 사용자 수준 권한은 조직 또는 개인 계정에 설치할 때 부여되는 [리포지토리 및 조직 수준 권한](/rest/overview/permissions-required-for-github-apps)과 다릅니다.

**사용 권한 및 웹후크** 페이지의 **사용자 권한** 섹션의 GitHub 앱의 설정 내에서 사용자 수준 권한을 선택할 수 있습니다. 사용 권한 선택에 대한 자세한 내용은 “[GitHub 앱 사용 권한 편집](/apps/managing-github-apps/editing-a-github-app-s-permissions/)”을 참조하세요.

사용자가 자신의 계정에 앱을 설치하면 설치 프롬프트에 앱이 요청하는 사용자 수준 권한이 나열되고 앱이 개별 사용자에게 사용 권한을 요청할 수 있음을 설명합니다.

사용자 수준 권한은 개별 사용자별로 부여되므로 업그레이드하라는 메시지가 표시되지 않아도 기존 앱에 추가할 수 있습니다. 그러나 사용자 권한 부여 흐름을 통해 기존 사용자를 보내 새 권한을 부여하고 해당 요청에 대한 새 사용자-서버 토큰을 가져와야 합니다.

## 사용자-서버 요청

대부분의 API 상호 작용은 서버 간 설치 액세스 토큰을 사용하여 발생해야 하지만 특정 엔드포인트를 사용하면 사용자 액세스 토큰을 사용하여 API를 통해 작업을 수행할 수 있습니다. 앱은 [GraphQL](/graphql) 또는 [REST](/rest) 엔드포인트를 사용하여 다음 요청을 수행할 수 있습니다.

### 지원되는 엔드포인트

{% ifversion fpt or ghec %}
#### 작업 실행기

* [리포지토리의 실행기 애플리케이션 나열](/rest/actions#list-runner-applications-for-a-repository)
* [리포지토리의 자체 호스팅 실행기 나열](/rest/actions#list-self-hosted-runners-for-a-repository)
* [리포지토리의 자체 호스팅 실행기 가져오기](/rest/actions#get-a-self-hosted-runner-for-a-repository)
* [리포지토리에서 자체 호스팅 실행기 삭제](/rest/actions#delete-a-self-hosted-runner-from-a-repository)
* [리포지토리의 등록 토큰 만들기](/rest/actions#create-a-registration-token-for-a-repository)
* [리포지토리의 제거 토큰 만들기](/rest/actions#create-a-remove-token-for-a-repository)
* [조직의 실행기 애플리케이션 나열](/rest/actions#list-runner-applications-for-an-organization)
* [조직의 자체 호스팅 실행기 나열](/rest/actions#list-self-hosted-runners-for-an-organization)
* [조직의 자체 호스팅 실행기 가져오기](/rest/actions#get-a-self-hosted-runner-for-an-organization)
* [조직에서 자체 호스팅 실행기 삭제](/rest/actions#delete-a-self-hosted-runner-from-an-organization)
* [조직의 등록 토큰 만들기](/rest/actions#create-a-registration-token-for-an-organization)
* [조직의 제거 토큰 만들기](/rest/actions#create-a-remove-token-for-an-organization)

#### 작업 비밀

* [리포지토리 퍼블릭 키 가져오기](/rest/actions#get-a-repository-public-key)
* [리포지토리 비밀 나열](/rest/actions#list-repository-secrets)
* [리포지토리 비밀 가져오기](/rest/actions#get-a-repository-secret)
* [리포지토리 비밀 만들기 또는 업데이트](/rest/actions#create-or-update-a-repository-secret)
* [리포지토리 비밀 삭제](/rest/actions#delete-a-repository-secret)
* [조직 퍼블릭 키 가져오기](/rest/actions#get-an-organization-public-key)
* [조직 비밀 나열](/rest/actions#list-organization-secrets)
* [조직 비밀 가져오기](/rest/actions#get-an-organization-secret)
* [조직 비밀 만들기 또는 업데이트](/rest/actions#create-or-update-an-organization-secret)
* [조직 비밀에 대해 선택한 리포지토리 나열](/rest/actions#list-selected-repositories-for-an-organization-secret)
* [조직 비밀에 대해 선택한 리포지토리 설정](/rest/actions#set-selected-repositories-for-an-organization-secret)
* [조직 비밀에 선택한 리포지토리 추가](/rest/actions#add-selected-repository-to-an-organization-secret)
* [조직 비밀에서 선택한 리포지토리 제거](/rest/actions#remove-selected-repository-from-an-organization-secret)
* [조직 비밀 삭제](/rest/actions#delete-an-organization-secret) {% endif %}

{% ifversion fpt or ghec %}
#### Artifacts

* [리포지토리의 아티팩트 나열](/rest/actions#list-artifacts-for-a-repository)
* [워크플로 실행 아티팩트 나열](/rest/actions#list-workflow-run-artifacts)
* [아티팩트 가져오기](/rest/actions#get-an-artifact)
* [아티팩트 삭제](/rest/actions#delete-an-artifact)
* [아티팩트 다운로드](/rest/actions#download-an-artifact) {% endif %}

#### 실행 확인

* [확인 실행 만들기](/rest/checks#create-a-check-run)
* [확인 실행 가져오기](/rest/checks#get-a-check-run)
* [확인 실행 업데이트](/rest/checks#update-a-check-run)
* [확인 실행 주석 나열](/rest/checks#list-check-run-annotations)
* [확인 도구 모음의 확인 실행 나열](/rest/checks#list-check-runs-in-a-check-suite)
* [Git 참조에 대한 확인 실행 나열](/rest/checks#list-check-runs-for-a-git-reference)

#### 체크 스위트

* [확인 도구 모음 만들기](/rest/checks#create-a-check-suite)
* [확인 도구 모음 가져오기](/rest/checks#get-a-check-suite)
* [확인 도구 모음 다시 요청](/rest/checks#rerequest-a-check-suite)
* [확인 도구 모음에 대한 리포지토리 기본 설정 업데이트](/rest/checks#update-repository-preferences-for-check-suites)
* [Git 참조에 대한 확인 도구 모음 나열](/rest/checks#list-check-suites-for-a-git-reference)

#### 사용 규정

* [모든 사용 규정 가져오기](/rest/codes-of-conduct#get-all-codes-of-conduct)
* [사용 규정 가져오기](/rest/codes-of-conduct#get-a-code-of-conduct)

#### 배포 상태

* [배포 상태 나열](/rest/deployments#list-deployment-statuses)
* [배포 상태 만들기](/rest/deployments#create-a-deployment-status)
* [배포 상태 가져오기](/rest/deployments#get-a-deployment-status)

#### 배포

* [배포 나열](/rest/deployments#list-deployments)
* [배포 만들기](/rest/deployments#create-a-deployment)
* [배포 가져오기](/rest/deployments#get-a-deployment)
* [배포 삭제](/rest/deployments#delete-a-deployment)

#### 이벤트

* [리포지토리 네트워크에 대한 공개 이벤트 나열](/rest/activity#list-public-events-for-a-network-of-repositories)
* [퍼블릭 조직 이벤트 나열](/rest/activity#list-public-organization-events)

#### 피드

* [피드 가져오기](/rest/activity#get-feeds)

#### Git Blob

* [Blob 만들기](/rest/git#create-a-blob)
* [Blob 가져오기](/rest/git#get-a-blob)

#### Git 커밋

* [커밋 만들기](/rest/git#create-a-commit)
* [커밋 가져오기](/rest/git#get-a-commit)

#### Git 참조

* [참조 만들기](/rest/git#create-a-reference)
* [참조 가져오기](/rest/git#get-a-reference)
* [일치하는 참조 나열](/rest/git#list-matching-references)
* [참조 업데이트](/rest/git#update-a-reference)
* [참조 삭제](/rest/git#delete-a-reference)

#### Git 태그

* [태그 개체 만들기](/rest/git#create-a-tag-object)
* [태그 가져오기](/rest/git#get-a-tag)

#### Git 트리

* [트리 만들기](/rest/git#create-a-tree)
* [트리 가져오기](/rest/git#get-a-tree)

#### Gitignore 템플릿

* [모든 gitignore 템플릿 가져오기](/rest/gitignore#get-all-gitignore-templates)
* [gitignore 템플릿 가져오기](/rest/gitignore#get-a-gitignore-template)

#### 설치

* [사용자 액세스 토큰에 액세스할 수 있는 리포지토리 나열](/rest/apps#list-repositories-accessible-to-the-user-access-token)

{% ifversion fpt or ghec %}
#### 상호 작용 제한

* [조직에 대한 상호 작용 제한 가져오기](/rest/interactions#get-interaction-restrictions-for-an-organization)
* [조직에 대한 상호 작용 제한 설정](/rest/interactions#set-interaction-restrictions-for-an-organization)
* [조직에 대한 상호 작용 제한 제거](/rest/interactions#remove-interaction-restrictions-for-an-organization)
* [리포지토리에 대한 상호 작용 제한 가져오기](/rest/interactions#get-interaction-restrictions-for-a-repository)
* [리포지토리에 대한 상호 작용 제한 설정](/rest/interactions#set-interaction-restrictions-for-a-repository)
* [리포지토리에 대한 상호 작용 제한 제거](/rest/interactions#remove-interaction-restrictions-for-a-repository) {% endif %}

#### 문제 담당자

* [문제에 담당자 추가](/rest/issues#add-assignees-to-an-issue)
* [문제에서 담당자 제거](/rest/issues#remove-assignees-from-an-issue)

#### 문제 주석

* [문제 주석 나열](/rest/issues#list-issue-comments)
* [문제 주석 만들기](/rest/issues#create-an-issue-comment)
* [리포지토리에 대한 문제 주석 나열](/rest/issues#list-issue-comments-for-a-repository)
* [문제 주석 가져오기](/rest/issues#get-an-issue-comment)
* [문제 주석 업데이트](/rest/issues#update-an-issue-comment)
* [문제 주석 삭제](/rest/issues#delete-an-issue-comment)

#### 문제 이벤트

* [문제 이벤트 나열](/rest/issues#list-issue-events)

#### 문제 타임라인

* [문제에 대한 타임라인 이벤트 나열](/rest/issues#list-timeline-events-for-an-issue)

#### 문제

* [인증된 사용자에게 할당된 문제 나열](/rest/issues#list-issues-assigned-to-the-authenticated-user)
* [담당자 나열](/rest/issues#list-assignees)
* [사용자를 할당할 수 있는지 확인](/rest/issues#check-if-a-user-can-be-assigned)
* [리포지토리 문제 나열](/rest/issues#list-repository-issues)
* [문제 만들기](/rest/issues#create-an-issue)
* [문제 가져오기](/rest/issues#get-an-issue)
* [문제 업데이트](/rest/issues#update-an-issue)
* [문제 잠금](/rest/issues#lock-an-issue)
* [문제 잠금 해제](/rest/issues#unlock-an-issue)

{% ifversion fpt or ghec %}
#### 작업

* [워크플로 실행에 대한 작업 가져오기](/rest/actions#get-a-job-for-a-workflow-run)
* [워크플로 실행에 대한 작업 로그 다운로드](/rest/actions#download-job-logs-for-a-workflow-run)
* [워크플로 실행에 대한 작업 나열](/rest/actions#list-jobs-for-a-workflow-run) {% endif %}

#### 레이블

* [문제에 대한 레이블 나열](/rest/issues#list-labels-for-an-issue)
* [문제에 레이블 추가](/rest/issues#add-labels-to-an-issue)
* [문제에 대한 레이블 설정](/rest/issues#set-labels-for-an-issue)
* [문제에서 모든 레이블 제거](/rest/issues#remove-all-labels-from-an-issue)
* [문제에서 레이블 제거](/rest/issues#remove-a-label-from-an-issue)
* [리포지토리의 레이블 나열](/rest/issues#list-labels-for-a-repository)
* [레이블 만들기](/rest/issues#create-a-label)
* [레이블 가져오기](/rest/issues#get-a-label)
* [레이블 업데이트](/rest/issues#update-a-label)
* [레이블 삭제](/rest/issues#delete-a-label)
* [마일스톤의 모든 문제에 대한 레이블 가져오기](/rest/issues#list-labels-for-issues-in-a-milestone)

#### 라이선스

* [일반적으로 사용되는 모든 라이선스 가져오기](/rest/licenses#get-all-commonly-used-licenses)
* [라이선스 가져오기](/rest/licenses#get-a-license)

#### Markdown

* [Markdown 문서 렌더링](/rest/markdown#render-a-markdown-document)
* [원시 모드에서 markdown 문서 렌더링](/rest/markdown#render-a-markdown-document-in-raw-mode)

#### Meta

* [Meta](/rest/meta#meta)

#### 마일스톤

* [마일스톤 나열](/rest/issues#list-milestones)
* [마일스톤 만들기](/rest/issues#create-a-milestone)
* [마일스톤 가져오기](/rest/issues#get-a-milestone)
* [마일스톤 업데이트](/rest/issues#update-a-milestone)
* [마일스톤 삭제](/rest/issues#delete-a-milestone)

#### 조직 후크

* [조직 웹후크 나열](/rest/orgs#webhooks/#list-organization-webhooks)
* [조직 웹후크 만들기](/rest/orgs#webhooks/#create-an-organization-webhook)
* [조직 웹후크 가져오기](/rest/orgs#webhooks/#get-an-organization-webhook)
* [조직 웹후크 업데이트](/rest/orgs#webhooks/#update-an-organization-webhook)
* [조직 웹후크 삭제](/rest/orgs#webhooks/#delete-an-organization-webhook)
* [조직 웹후크 Ping](/rest/orgs#webhooks/#ping-an-organization-webhook)

{% ifversion fpt or ghec %}
#### 조직 초대

* [보류 중인 조직 초대 나열](/rest/orgs#list-pending-organization-invitations)
* [조직 초대 만들기](/rest/orgs#create-an-organization-invitation)
* [조직 초대 팀 나열](/rest/orgs#list-organization-invitation-teams) {% endif %}

#### 조직 구성원

* [조직 구성원 나열](/rest/orgs#list-organization-members)
* [사용자의 조직 멤버 자격 확인](/rest/orgs#check-organization-membership-for-a-user)
* [조직 구성원 제거](/rest/orgs#remove-an-organization-member)
* [사용자의 조직 멤버 자격 가져오기](/rest/orgs#get-organization-membership-for-a-user)
* [사용자의 조직 멤버 자격 설정](/rest/orgs#set-organization-membership-for-a-user)
* [사용자의 조직 멤버 자격 제거](/rest/orgs#remove-organization-membership-for-a-user)
* [퍼블릭 조직 구성원 나열](/rest/orgs#list-public-organization-members)
* [사용자의 퍼블릭 조직 멤버 자격 확인](/rest/orgs#check-public-organization-membership-for-a-user)
* [인증된 사용자의 퍼블릭 조직 멤버 자격 설정](/rest/orgs#set-public-organization-membership-for-the-authenticated-user)
* [인증된 사용자의 퍼블릭 조직 멤버 자격 제거](/rest/orgs#remove-public-organization-membership-for-the-authenticated-user)

#### 조직 외부 협력자

* [조직의 외부 협력자 나열](/rest/orgs#list-outside-collaborators-for-an-organization)
* [조직 구성원을 외부 협력자로 변환](/rest/orgs#convert-an-organization-member-to-outside-collaborator)
* [조직에서 외부 협력자 제거](/rest/orgs#remove-outside-collaborator-from-an-organization)

{% ifversion ghes %}
#### 조직 사전 수신 후크

* [조직의 사전 수신 후크 나열](/enterprise/user/rest/reference/enterprise-admin#list-pre-receive-hooks-for-an-organization)
* [조직의 사전 수신 후크 가져오기](/enterprise/user/rest/reference/enterprise-admin#get-a-pre-receive-hook-for-an-organization)
* [조직에 대한 사전 수신 후크 적용 업데이트](/enterprise/user/rest/reference/enterprise-admin#update-pre-receive-hook-enforcement-for-an-organization)
* [조직에 대한 사전 수신 후크 적용 제거](/enterprise/user/rest/reference/enterprise-admin#remove-pre-receive-hook-enforcement-for-an-organization) {% endif %}

#### 조직 팀 프로젝트

* [팀 프로젝트 나열](/rest/teams#list-team-projects)
* [프로젝트에 대한 팀 권한 확인](/rest/teams#check-team-permissions-for-a-project)
* [팀 프로젝트 권한 추가 또는 업데이트](/rest/teams#add-or-update-team-project-permissions)
* [팀에서 프로젝트 제거](/rest/teams#remove-a-project-from-a-team)

#### 조직 팀 리포지토리

* [팀 리포지토리 나열](/rest/teams#list-team-repositories)
* [리포지토리에 대한 팀 권한 확인](/rest/teams#check-team-permissions-for-a-repository)
* [팀 리포지토리 권한 추가 또는 업데이트](/rest/teams#add-or-update-team-repository-permissions)
* [팀에서 리포지토리 제거](/rest/teams#remove-a-repository-from-a-team)

{% ifversion fpt or ghec %}
#### 조직 팀 동기화

* [팀의 IdP 그룹 나열](/rest/teams#list-idp-groups-for-a-team)
* [IdP 그룹 연결 만들기 또는 업데이트](/rest/teams#create-or-update-idp-group-connections)
* [조직에 대한 IdP 그룹 나열](/rest/teams#list-idp-groups-for-an-organization) {% endif %}

#### 조직 팀

* [팀 나열](/rest/teams#list-teams)
* [팀 만들기](/rest/teams#create-a-team)
* [이름으로 팀 가져오기](/rest/teams#get-a-team-by-name)
* [팀 업데이트](/rest/teams#update-a-team)
* [팀 삭제](/rest/teams#delete-a-team) {% ifversion fpt or ghec %}
* [보류 중인 팀 초대 나열](/rest/teams#list-pending-team-invitations) {% endif %}
* [팀 구성원 나열](/rest/teams#list-team-members)
* [사용자의 팀 멤버 자격 가져오기](/rest/teams#get-team-membership-for-a-user)
* [사용자의 팀 멤버 자격 추가 또는 업데이트](/rest/teams#add-or-update-team-membership-for-a-user)
* [사용자의 팀 멤버 자격 제거](/rest/teams#remove-team-membership-for-a-user)
* [자식 팀 나열](/rest/teams#list-child-teams)
* [인증된 사용자의 팀 나열](/rest/teams#list-teams-for-the-authenticated-user)8

#### 조직

* [조직 나열](/rest/orgs#list-organizations)
* [조직 가져오기](/rest/orgs#get-an-organization)
* [조직 업데이트](/rest/orgs#update-an-organization)
* [인증된 사용자의 조직 멤버 자격 나열](/rest/orgs#list-organization-memberships-for-the-authenticated-user)
* [인증된 사용자의 조직 멤버 자격 가져오기](/rest/orgs#get-an-organization-membership-for-the-authenticated-user)
* [인증된 사용자의 조직 멤버 자격 업데이트](/rest/orgs#update-an-organization-membership-for-the-authenticated-user)
* [인증된 사용자의 조직 나열](/rest/orgs#list-organizations-for-the-authenticated-user)
* [사용자의 조직 나열](/rest/orgs#list-organizations-for-a-user)

{% ifversion fpt or ghec %}
#### 조직 자격 증명 권한 부여

* [조직의 SAML SSO 권한 부여 나열](/rest/orgs#list-saml-sso-authorizations-for-an-organization)
* [조직의 SAML SSO 권한 부여 제거](/rest/orgs#remove-a-saml-sso-authorization-for-an-organization) {% endif %}

{% ifversion fpt or ghec %}
#### 조직 Scim

* [SCIM 프로비저닝된 ID 나열](/rest/scim#list-scim-provisioned-identities)
* [SCIM 사용자 프로비저닝 및 초대](/rest/scim#provision-and-invite-a-scim-user)
* [사용자에 대한 SCIM 프로비저닝 정보 가져오기](/rest/scim#get-scim-provisioning-information-for-a-user)
* [프로비저닝된 사용자에 대한 SCIM 정보 설정](/rest/scim#set-scim-information-for-a-provisioned-user)
* [SCIM 사용자에 대한 특성 업데이트](/rest/scim#update-an-attribute-for-a-scim-user)
* [조직에서 SCIM 사용자 삭제](/rest/scim#delete-a-scim-user-from-an-organization) {% endif %}

{% ifversion fpt or ghec %}
#### 원본 가져오기

* [가져오기 상태 가져오기](/rest/migrations#get-an-import-status)
* [가져오기 시작](/rest/migrations#start-an-import)
* [가져오기 업데이트](/rest/migrations#update-an-import)
* [가져오기 취소](/rest/migrations#cancel-an-import)
* [커밋 작성자 가져오기](/rest/migrations#get-commit-authors)
* [커밋 작성자 매핑](/rest/migrations#map-a-commit-author)
* [대용량 파일 가져오기](/rest/migrations#get-large-files)
* [Git LFS 기본 설정 업데이트](/rest/migrations#update-git-lfs-preference) {% endif %}

#### 프로젝트 협력자

* [프로젝트 협력자 나열](/rest/projects#list-project-collaborators)
* [프로젝트 협력자 추가](/rest/projects#add-project-collaborator)
* [프로젝트 협력자 제거](/rest/projects#remove-project-collaborator)
* [사용자의 프로젝트 권한 가져오기](/rest/projects#get-project-permission-for-a-user)

#### 프로젝트

* [조직 프로젝트 나열](/rest/projects#list-organization-projects)
* [조직 프로젝트 만들기](/rest/projects#create-an-organization-project).
* [프로젝트 가져오기](/rest/projects#get-a-project)
* [프로젝트 업데이트](/rest/projects#update-a-project)
* [프로젝트 삭제](/rest/projects#delete-a-project)
* [프로젝트 열 나열](/rest/projects#list-project-columns)
* [프로젝트 열 만들기](/rest/projects#create-a-project-column)
* [프로젝트 열 가져오기](/rest/projects#get-a-project-column)
* [프로젝트 열 업데이트](/rest/projects#update-a-project-column)
* [프로젝트 열 삭제](/rest/projects#delete-a-project-column)
* [프로젝트 카드 나열](/rest/projects#list-project-cards)
* [프로젝트 카드 만들기](/rest/projects#create-a-project-card)
* [프로젝트 열 이동](/rest/projects#move-a-project-column)
* [프로젝트 카드 가져오기](/rest/projects#get-a-project-card)
* [프로젝트 카드 업데이트](/rest/projects#update-a-project-card)
* [프로젝트 카드 삭제](/rest/projects#delete-a-project-card)
* [프로젝트 카드 이동](/rest/projects#move-a-project-card)
* [리포지토리 프로젝트 나열](/rest/projects#list-repository-projects)
* [리포지토리 프로젝트 만들기](/rest/projects#create-a-repository-project)

#### 끌어오기 주석

* [끌어오기 요청에 대한 검토 주석 나열](/rest/pulls#list-review-comments-on-a-pull-request)
* [끌어오기 요청에 대한 검토 주석 만들기](/rest/pulls#create-a-review-comment-for-a-pull-request)
* [리포지토리의 검토 주석 나열](/rest/pulls#list-review-comments-in-a-repository)
* [끌어오기 요청에 대한 검토 주석 가져오기](/rest/pulls#get-a-review-comment-for-a-pull-request)
* [끌어오기 요청에 대한 검토 주석 업데이트](/rest/pulls#update-a-review-comment-for-a-pull-request)
* [끌어오기 요청에 대한 검토 주석 삭제](/rest/pulls#delete-a-review-comment-for-a-pull-request)

#### 끌어오기 요청 검토 이벤트

* [끌어오기 요청에 대한 검토 해제](/rest/pulls#dismiss-a-review-for-a-pull-request)
* [끌어오기 요청에 대한 검토 제출](/rest/pulls#submit-a-review-for-a-pull-request)

#### 끌어오기 요청 검토 요청

* [끌어오기 요청에 대해 요청된 검토자 나열](/rest/pulls#list-requested-reviewers-for-a-pull-request)
* [끌어오기 요청에 대한 요청 검토자](/rest/pulls#request-reviewers-for-a-pull-request)
* [끌어오기 요청에서 요청된 검토자 제거](/rest/pulls#remove-requested-reviewers-from-a-pull-request)

#### 끌어오기 요청 검토

* [끌어오기 요청에 대한 검토 나열](/rest/pulls#list-reviews-for-a-pull-request)
* [끌어오기 요청에 대한 검토 만들기](/rest/pulls#create-a-review-for-a-pull-request)
* [끌어오기 요청에 대한 검토 가져오기](/rest/pulls#get-a-review-for-a-pull-request)
* [끌어오기 요청에 대한 검토 업데이트](/rest/pulls#update-a-review-for-a-pull-request)
* [끌어오기 요청 검토에 대한 주석 나열](/rest/pulls#list-comments-for-a-pull-request-review)

#### 끌어오기

* [끌어오기 요청 나열](/rest/pulls#list-pull-requests)
* [끌어오기 요청 만들기](/rest/pulls#create-a-pull-request)
* [끌어오기 요청 가져오기](/rest/pulls#get-a-pull-request)
* [끌어오기 요청 업데이트](/rest/pulls#update-a-pull-request)
* [끌어오기 요청에 대한 커밋 나열](/rest/pulls#list-commits-on-a-pull-request)
* [끌어오기 요청 파일 나열](/rest/pulls#list-pull-requests-files)
* [끌어오기 요청이 병합되었는지 확인](/rest/pulls#check-if-a-pull-request-has-been-merged)
* [끌어오기 요청 병합(병합 단추)](/rest/pulls#merge-a-pull-request)

#### 반응

* [반응 삭제](/rest/reactions)
* [커밋 주석에 대한 반응 나열](/rest/reactions#list-reactions-for-a-commit-comment)
* [커밋 주석에 대한 반응 만들기](/rest/reactions#create-reaction-for-a-commit-comment)
* [문제에 대한 반응 나열](/rest/reactions#list-reactions-for-an-issue)
* [문제에 대한 반응 만들기](/rest/reactions#create-reaction-for-an-issue)
* [문제 주석에 대한 반응 나열](/rest/reactions#list-reactions-for-an-issue-comment)
* [문제 주석에 대한 반응 만들기](/rest/reactions#create-reaction-for-an-issue-comment)
* [끌어오기 요청 검토 주석에 대한 반응 나열](/rest/reactions#list-reactions-for-a-pull-request-review-comment)
* [끌어오기 요청 검토 주석에 대한 반응 만들기](/rest/reactions#create-reaction-for-a-pull-request-review-comment)
* [팀 토론 댓글에 대한 반응 나열](/rest/reactions#list-reactions-for-a-team-discussion-comment)
* [팀 토론 댓글에 대한 반응 만들기](/rest/reactions#create-reaction-for-a-team-discussion-comment)
* [팀 토론에 대한 반응 나열](/rest/reactions#list-reactions-for-a-team-discussion)
* [팀 토론에 대한 반응 만들기](/rest/reactions#create-reaction-for-a-team-discussion)
* [커밋 메모 반응 삭제](/rest/reactions#delete-a-commit-comment-reaction)
* [문제 반응 삭제](/rest/reactions#delete-an-issue-reaction)
* [커밋 주석에 대한 반응 삭제](/rest/reactions#delete-an-issue-comment-reaction)
* [끌어오기 요청 주석 반응 삭제](/rest/reactions#delete-a-pull-request-comment-reaction)
* [팀 토론 반응 삭제](/rest/reactions#delete-team-discussion-reaction)
* [팀 토론 주석 반응 삭제](/rest/reactions#delete-team-discussion-comment-reaction)

#### 리포지토리

* [조직 리포지토리 나열](/rest/repos#list-organization-repositories)
* [인증된 사용자에 대한 리포지토리 만들기](/rest/repos#create-a-repository-for-the-authenticated-user)
* [리포지토리 가져오기](/rest/repos#get-a-repository)
* [리포지토리 업데이트](/rest/repos#update-a-repository)
* [리포지토리 삭제](/rest/repos#delete-a-repository)
* [두 커밋 비교](/rest/commits#compare-two-commits)
* [리포지토리 참가자 나열](/rest/repos#list-repository-contributors)
* [포크 나열](/rest/repos#list-forks)
* [포크 만들기](/rest/repos#create-a-fork)
* [리포지토리 언어 나열](/rest/repos#list-repository-languages)
* [리포지토리 태그 나열](/rest/repos#list-repository-tags)
* [리포지토리 팀 나열](/rest/repos#list-repository-teams)
* [리포지토리 전송](/rest/repos#transfer-a-repository)
* [퍼블릭 리포지토리 나열](/rest/repos#list-public-repositories)
* [인증된 사용자의 리포지토리 나열](/rest/repos#list-repositories-for-the-authenticated-user)
* [사용자를 위한 리포지토리 나열](/rest/repos#list-repositories-for-a-user)
* [리포지토리 템플릿을 사용하여 리포지토리 만들기](/rest/repos#create-repository-using-a-repository-template)

#### 리포지토리 작업

* [별을 준 사람들 나열](/rest/activity#list-stargazers)
* [감시자 나열](/rest/activity#list-watchers)
* [사용자가 별표 표시한 리포지토리 나열](/rest/activity#list-repositories-starred-by-a-user)
* [인증된 사용자가 리포지토리를 별표로 표시했는지 확인](/rest/activity#check-if-a-repository-is-starred-by-the-authenticated-user)
* [인증된 사용자에 대한 리포지토리 별표 표시](/rest/activity#star-a-repository-for-the-authenticated-user)
* [인증된 사용자에 대한 리포지토리 별표 표시 해제](/rest/activity#unstar-a-repository-for-the-authenticated-user)
* [사용자가 보는 리포지토리 나열](/rest/activity#list-repositories-watched-by-a-user)

{% ifversion fpt or ghec %}
#### 리포지토리 자동화된 보안 수정

* [자동화된 보안 수정 사용](/rest/repos#enable-automated-security-fixes)
* [자동화된 보안 수정 사용 안 함](/rest/repos#disable-automated-security-fixes) {% endif %}

#### 리포지토리 분기

* [분기 나열](/rest/branches#list-branches)
* [분기 가져오기](/rest/branches#get-a-branch)
* [분기 보호 가져오기](/rest/branches#get-branch-protection)
* [분기 보호 업데이트](/rest/branches#update-branch-protection)
* [분기 보호 삭제](/rest/branches#delete-branch-protection)
* [관리자 분기 보호 가져오기](/rest/branches#get-admin-branch-protection)
* [관리자 분기 보호 설정](/rest/branches#set-admin-branch-protection)
* [관리자 분기 보호 삭제](/rest/branches#delete-admin-branch-protection)
* [끌어오기 요청 검토 보호 가져오기](/rest/branches#get-pull-request-review-protection)
* [끌어오기 요청 검토 보호 업데이트](/rest/branches#update-pull-request-review-protection)
* [끌어오기 요청 검토 보호 삭제](/rest/branches#delete-pull-request-review-protection)
* [커밋 서명 보호 가져오기](/rest/branches#get-commit-signature-protection)
* [커밋 서명 보호 만들기](/rest/branches#create-commit-signature-protection)
* [커밋 서명 보호 삭제](/rest/branches#delete-commit-signature-protection)
* [상태 검사 보호 가져오기](/rest/branches#get-status-checks-protection)
* [상태 검사 보호 업데이트](/rest/branches#update-status-check-protection)
* [상태 검사 보호 제거](/rest/branches#remove-status-check-protection)
* [모든 상태 검사 컨텍스트 가져오기](/rest/branches#get-all-status-check-contexts)
* [모든 상태 검사 컨텍스트 추가](/rest/branches#add-status-check-contexts)
* [모든 상태 검사 컨텍스트 설정](/rest/branches#set-status-check-contexts)
* [모든 상태 검사 컨텍스트 제거](/rest/branches#remove-status-check-contexts)
* [액세스 제한 가져오기](/rest/branches#get-access-restrictions)
* [액세스 제한 삭제](/rest/branches#delete-access-restrictions)
* [보호된 분기에 액세스할 수 있는 팀 나열](/rest/repos#list-teams-with-access-to-the-protected-branch)
* [팀 액세스 제한 추가](/rest/branches#add-team-access-restrictions)
* [팀 액세스 제한 설정](/rest/branches#set-team-access-restrictions)
* [팀 액세스 제한 제거](/rest/branches#remove-team-access-restrictions)
* [보호된 분기의 사용자 제한 나열](/rest/repos#list-users-with-access-to-the-protected-branch)
* [사용자 액세스 제한 추가](/rest/branches#add-user-access-restrictions)
* [사용자 액세스 제한 설정](/rest/branches#set-user-access-restrictions)
* [사용자 액세스 제한 제거](/rest/branches#remove-user-access-restrictions)
* [분기 병합](/rest/branches#merge-a-branch)

#### 리포지토리 협력자

* [리포지토리 협력자 나열](/rest/collaborators#list-repository-collaborators)
* [사용자가 리포지토리 협력자인지 확인](/rest/collaborators#check-if-a-user-is-a-repository-collaborator)
* [리포지토리 협력자 추가](/rest/collaborators#add-a-repository-collaborator)
* [리포지토리 협력자 제거](/rest/collaborators#remove-a-repository-collaborator)
* [사용자의 리포지토리 권한 가져오기](/rest/collaborators#get-repository-permissions-for-a-user)

#### 리포지토리 커밋 주석

* [리포지토리에 대한 커밋 주석 나열](/rest/commits#list-commit-comments-for-a-repository)
* [커밋 주석 가져오기](/rest/commits#get-a-commit-comment)
* [커밋 주석 업데이트](/rest/commits#update-a-commit-comment)
* [커밋 주석 삭제](/rest/commits#delete-a-commit-comment)
* [커밋 주석 나열](/rest/commits#list-commit-comments)
* [커밋 주석 만들기](/rest/commits#create-a-commit-comment)

#### 리포지토리 커밋

* [커밋 나열](/rest/commits#list-commits)
* [커밋 가져오기](/rest/commits#get-a-commit)
* [헤드 커밋에 대한 분기 나열](/rest/commits#list-branches-for-head-commit)
* [커밋과 연결된 끌어오기 요청 나열](/rest/repos#list-pull-requests-associated-with-commit)

#### 리포지토리 커뮤니티

* [리포지토리에 대한 사용 규정 가져오기](/rest/codes-of-conduct#get-the-code-of-conduct-for-a-repository) {% ifversion fpt or ghec %}
* [커뮤니티 프로필 메트릭 가져오기](/rest/metrics#get-community-profile-metrics) {% endif %}

#### 리포지토리 콘텐츠

* [리포지토리 보관 다운로드](/rest/repos#download-a-repository-archive)
* [리포지토리 콘텐츠 가져오기](/rest/repos#get-repository-content)
* [파일 콘텐츠 만들기 또는 업데이트](/rest/repos#create-or-update-file-contents)
* [파일 삭제](/rest/repos#delete-a-file)
* [리포지토리 추가 정보 가져오기](/rest/repos#get-a-repository-readme)
* [리포지토리에 대한 라이선스 가져오기](/rest/licenses#get-the-license-for-a-repository)

#### 리포지토리 이벤트 디스패치

* [리포지토리 디스패치 이벤트 만들기](/rest/repos#create-a-repository-dispatch-event)

#### 리포지토리 후크

* [리포지토리 웹후크 나열](/rest/webhooks#list-repository-webhooks)
* [리포지토리 웹후크 만들기](/rest/webhooks#create-a-repository-webhook)
* [리포지토리 웹후크 가져오기](/rest/webhooks#get-a-repository-webhook)
* [리포지토리 웹후크 업데이트](/rest/webhooks#update-a-repository-webhook)
* [리포지토리 웹후크 삭제](/rest/webhooks#delete-a-repository-webhook)
* [리포지토리 웹후크 Ping](/rest/webhooks#ping-a-repository-webhook)
* [푸시 리포지토리 웹후크 테스트](/rest/repos#test-the-push-repository-webhook)

#### 리포지토리 초대

* [리포지토리 초대 나열](/rest/collaborators#list-repository-invitations)
* [리포지토리 초대 업데이트](/rest/collaborators#update-a-repository-invitation)
* [리포지토리 초대 삭제](/rest/collaborators#delete-a-repository-invitation)
* [인증된 사용자에 대한 리포지토리 초대 나열](/rest/collaborators#list-repository-invitations-for-the-authenticated-user)
* [리포지토리 초대 수락](/rest/collaborators#accept-a-repository-invitation)
* [리포지토리 초대 거절](/rest/collaborators#decline-a-repository-invitation)

#### 리포지토리 키

* [배포 키 나열](/rest/deployments#list-deploy-keys)
* [배포 키 만들기](/rest/deployments#create-a-deploy-key)
* [배포 키 가져오기](/rest/deployments#get-a-deploy-key)
* [배포 키 삭제](/rest/deployments#delete-a-deploy-key)

#### 리포지토리 페이지

* [GitHub Pages 사이트 가져오기](/rest/pages#get-a-github-pages-site)
* [GitHub Pages 사이트 만들기](/rest/pages#create-a-github-pages-site)
* [GitHub Pages 사이트에 대한 정보 업데이트](/rest/pages#update-information-about-a-github-pages-site)
* [GitHub Pages 사이트 삭제](/rest/pages#delete-a-github-pages-site)
* [GitHub Pages 빌드 나열](/rest/pages#list-github-pages-builds)
* [GitHub Pages 빌드 요청](/rest/pages#request-a-github-pages-build)
* [GitHub Pages 빌드 가져오기](/rest/pages#get-github-pages-build)
* [최신 페이지 빌드 가져오기](/rest/pages#get-latest-pages-build)

{% ifversion ghes %}
#### 리포지토리 사전 수신 후크

* [리포지토리에 대한 사전 수신 후크 나열](/enterprise/user/rest/enterprise-admin#list-pre-receive-hooks-for-a-repository)
* [리포지토리에 대한 사전 수신 후크 가져오기](/enterprise/user/rest/enterprise-admin#get-a-pre-receive-hook-for-a-repository)
* [리포지토리에 대한 사전 수신 후크 적용 업데이트](/enterprise/user/rest/enterprise-admin#update-pre-receive-hook-enforcement-for-a-repository)
* [리포지토리에 대한 사전 수신 후크 적용 제거](/enterprise/user/rest/enterprise-admin#remove-pre-receive-hook-enforcement-for-a-repository) {% endif %}

#### 리포지토리 릴리스

* [릴리스 목록](/rest/repos#list-releases)
* [릴리스 만들기](/rest/repos#create-a-release)
* [릴리스 가져오기](/rest/repos#get-a-release)
* [릴리스 업데이트](/rest/repos#update-a-release)
* [릴리스 삭제](/rest/repos#delete-a-release)
* [릴리스 자산 나열](/rest/repos#list-release-assets)
* [릴리스 자산 가져오기](/rest/repos#get-a-release-asset)
* [릴리스 자산 업데이트](/rest/repos#update-a-release-asset)
* [릴리스 자산 삭제](/rest/repos#delete-a-release-asset)
* [최신 릴리스 가져오기](/rest/repos#get-the-latest-release)
* [태그 이름으로 릴리스 가져오기](/rest/repos#get-a-release-by-tag-name)

#### 리포지토리 통계

* [주간 커밋 작업 가져오기](/rest/metrics#get-the-weekly-commit-activity)
* [커밋 작업의 마지막 연도 가져오기](/rest/metrics#get-the-last-year-of-commit-activity)
* [모든 기여자 커밋 작업 가져오기](/rest/metrics#get-all-contributor-commit-activity)
* [주간 커밋 수 가져오기](/rest/metrics#get-the-weekly-commit-count)
* [일별 시간당 커밋 수 가져오기](/rest/metrics#get-the-hourly-commit-count-for-each-day)

{% ifversion fpt or ghec %}
#### 리포지토리 취약성 경고

* [취약성 경고 사용](/rest/repos#enable-vulnerability-alerts)
* [취약성 경고 사용 안 함](/rest/repos#disable-vulnerability-alerts) {% endif %}

#### Root

* [루트 엔드포인트](/rest#root-endpoint)
* [이모지](/rest/emojis#emojis)
* [인증된 사용자의 속도 제한 상태 가져오기](/rest/rate-limit#get-rate-limit-status-for-the-authenticated-user)

#### 검색

* [코드 검색](/rest/search#search-code)
* [커밋 검색](/rest/search#search-commits)
* [레이블 검색](/rest/search#search-labels)
* [리포지토리 검색](/rest/search#search-repositories)
* [토픽 검색](/rest/search#search-topics)
* [사용자 검색](/rest/search#search-users)

#### 상태

* [특정 참조에 대한 결합된 상태 가져오기](/rest/commits#get-the-combined-status-for-a-specific-reference)
* [참조에 대한 커밋 상태 나열](/rest/commits#list-commit-statuses-for-a-reference)
* [커밋 상태 만들기](/rest/commits#create-a-commit-status)

#### 팀 토론

* [토론 나열](/rest/teams#list-discussions)
* [토론 만들기](/rest/teams#create-a-discussion)
* [토론 가져오기](/rest/teams#get-a-discussion)
* [토론 업데이트](/rest/teams#update-a-discussion)
* [토론 삭제](/rest/teams#delete-a-discussion)
* [토론 주석 나열](/rest/teams#list-discussion-comments)
* [토론 주석 만들기](/rest/teams#create-a-discussion-comment)
* [토론 주석 가져오기](/rest/teams#get-a-discussion-comment)
* [토론 주석 업데이트](/rest/teams#update-a-discussion-comment)
* [토론 주석 삭제](/rest/teams#delete-a-discussion-comment)

#### 토픽

* [모든 리포지토리 토픽 가져오기](/rest/repos#get-all-repository-topics)
* [모든 리포지토리 토픽 바꾸기](/rest/repos#replace-all-repository-topics)

{% ifversion fpt or ghec %}
#### 트래픽

* [리포지토리 복제본 가져오기](/rest/metrics#get-repository-clones)
* [상위 조회 경로 가져오기](/rest/metrics#get-top-referral-paths)
* [상위 조회 경로 가져오기](/rest/metrics#get-top-referral-sources)
* [페이지 보기 가져오기](/rest/metrics#get-page-views) {% endif %}

{% ifversion fpt or ghec %}
#### 사용자 차단

* [인증된 사용자가 차단한 사용자 나열](/rest/users#list-users-blocked-by-the-authenticated-user)
* [사용자가 인증된 사용자에 의해 차단되었는지 확인](/rest/users#check-if-a-user-is-blocked-by-the-authenticated-user)
* [조직에서 차단한 사용자 나열](/rest/orgs#list-users-blocked-by-an-organization)
* [사용자가 조직에 의해 차단되었는지 확인](/rest/orgs#check-if-a-user-is-blocked-by-an-organization)
* [조직에서 사용자 차단](/rest/orgs#block-a-user-from-an-organization)
* [조직에서 사용자 차단 해제](/rest/orgs#unblock-a-user-from-an-organization)
* [사용자 차단](/rest/users#block-a-user)
* [사용자 차단 해제](/rest/users#unblock-a-user) {% endif %}

{% ifversion fpt or ghes or ghec %}
#### 사용자 전자 메일

{% ifversion fpt or ghec %}
* [인증된 사용자에 대한 기본 메일 표시 여부 설정](/rest/users#set-primary-email-visibility-for-the-authenticated-user) {% endif %}
* [인증된 사용자의 메일 주소 나열](/rest/users#list-email-addresses-for-the-authenticated-user)
* [메일 주소 추가](/rest/users#add-an-email-address-for-the-authenticated-user)
* [메일 주소 삭제](/rest/users#delete-an-email-address-for-the-authenticated-user)
* [인증된 사용자의 퍼블릭 메일 주소 나열](/rest/users#list-public-email-addresses-for-the-authenticated-user) {% endif %}

#### 사용자 팔로워

* [사용자의 팔로워 나열](/rest/users#list-followers-of-a-user)
* [사용자가 팔로우하는 사용자 나열](/rest/users#list-the-people-a-user-follows)
* [인증된 사용자가 사용자를 팔로우하는지 확인](/rest/users#check-if-a-person-is-followed-by-the-authenticated-user)
* [사용자 팔로우](/rest/users#follow-a-user)
* [사용자 팔로우 취소](/rest/users#unfollow-a-user)
* [사용자가 다른 사용자를 팔로우하는지 확인](/rest/users#check-if-a-user-follows-another-user)

#### 사용자 Gpg 키

* [인증된 사용자의 GPG 키 나열](/rest/users#list-gpg-keys-for-the-authenticated-user)
* [인증된 사용자에 대한 GPG 키 만들기](/rest/users#create-a-gpg-key-for-the-authenticated-user)
* [인증된 사용자에 대한 GPG 키 가져오기](/rest/users#get-a-gpg-key-for-the-authenticated-user)
* [인증된 사용자에 대한 GPG 키 삭제](/rest/users#delete-a-gpg-key-for-the-authenticated-user)
* [사용자에 대한 gpg 키 나열](/rest/users#list-gpg-keys-for-a-user)

#### 사용자 퍼블릭 키

* [인증된 사용자의 퍼블릭 SSH 키 나열](/rest/users#list-public-ssh-keys-for-the-authenticated-user)
* [인증된 사용자의 퍼블릭 SSH 키 만들기](/rest/users#create-a-public-ssh-key-for-the-authenticated-user)
* [인증된 사용자의 퍼블릭 SSH 키 가져오기](/rest/users#get-a-public-ssh-key-for-the-authenticated-user)
* [인증된 사용자의 퍼블릭 SSH 키 삭제](/rest/users#delete-a-public-ssh-key-for-the-authenticated-user)
* [사용자의 퍼블릭 키 나열](/rest/users#list-public-keys-for-a-user)

#### 사용자

* [인증된 사용자 가져오기](/rest/users#get-the-authenticated-user)
* [사용자 액세스 토큰에 액세스할 수 있는 앱 설치 나열](/rest/apps#list-app-installations-accessible-to-the-user-access-token) {% ifversion fpt or ghec %}
* [인증된 사용자의 구독 나열](/rest/apps#list-subscriptions-for-the-authenticated-user) {% endif %}
* [사용자 나열](/rest/users#list-users)
* [사용자 한 명 가져오기](/rest/users#get-a-user)

{% ifversion fpt or ghec %}
#### 워크플로 실행

* [리포지토리의 워크플로 실행 나열](/rest/actions#list-workflow-runs-for-a-repository)
* [워크플로 실행 가져오기](/rest/actions#get-a-workflow-run)
* [워크플로 실행 취소](/rest/actions#cancel-a-workflow-run)
* [워크플로 실행 로그 다운로드](/rest/actions#download-workflow-run-logs)
* [워크플로 실행 로그 삭제](/rest/actions#delete-workflow-run-logs)
* [워크플로 다시 실행](/rest/actions#re-run-a-workflow)
* [워크플로 실행 나열](/rest/actions#list-workflow-runs)
* [워크플로 실행 사용량 가져오기](/rest/actions#get-workflow-run-usage) {% endif %}

{% ifversion fpt or ghec %}
#### 워크플로

* [리포지토리 워크플로 나열](/rest/actions#list-repository-workflows)
* [워크플로 가져오기](/rest/actions#get-a-workflow)
* [워크플로 사용량 가져오기](/rest/actions#get-workflow-usage) {% endif %}

## 추가 참고 자료

- “[{% data variables.product.prodname_dotcom %}에 대한 인증 정보](/github/authenticating-to-github/about-authentication-to-github#githubs-token-formats)”

