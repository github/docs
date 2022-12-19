---
title: 사용자-서버 액세스 토큰 새로 고침
intro: '일반 토큰 회전을 적용하고 손상된 토큰의 영향을 줄이려면, 만료되는 사용자 액세스 토큰을 사용하도록 {% data variables.product.prodname_github_app %}을 구성하면 됩니다.'
redirect_from:
  - /apps/building-github-apps/refreshing-user-to-server-access-tokens
  - /developers/apps/refreshing-user-to-server-access-tokens
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Refresh user-to-server access
ms.openlocfilehash: a288fcdd7eca423c9087a1a8ca4948e043de645b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064412'
---
{% data reusables.pre-release-program.expiring-user-access-tokens %}

## 만료되는 사용자 액세스 토큰 정보

일반 토큰 회전을 적용하고 손상된 토큰의 영향을 줄이려면, 만료되는 사용자 액세스 토큰을 사용하도록 {% data variables.product.prodname_github_app %}을 구성하면 됩니다. 사용자-서버 요청을 수행하는 자세한 방법은 "[GitHub 앱에 대한 사용자 식별 및 권한 부여](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)"를 참조하세요.

만료되는 사용자 토큰은 8시간 후에 만료됩니다. 새 사용자-서버 액세스 토큰을 받으면 응답에는 새 사용자 토큰 및 새로 고침 토큰으로 교환할 수 있는 새로 고침 토큰도 포함됩니다. 새로 고침 토큰은 6개월 동안 유효합니다. 

## 새로 고침 토큰을 사용하여 사용자 토큰 갱신

기존 사용자-서버 액세스 토큰을 갱신하려면 `refresh_token`을 새 액세스 토큰과 `refresh_token`으로 바꾸면 됩니다.

  `POST https://github.com/login/oauth/access_token`

이 콜백 요청은 신규 액세스 토큰과 신규 새로 고침 토큰을 보냅니다.  이 콜백 요청은 임시 `code`와 액세스 토큰 교환에 사용하는 OAuth 요청과 유사합니다. 자세한 내용은 "[GitHub 앱의 사용자 식별 및 권한 부여](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#2-users-are-redirected-back-to-your-site-by-github)"와 "[인증 기본 사항](/rest/guides/basics-of-authentication#providing-a-callback)"을 참조하세요.

### 매개 변수

이름 | 형식 | 설명
-----|------|------------
`refresh_token` | `string` | **필수 사항입니다.** {% data variables.product.prodname_github_app %} 소유자가 만료되는 토큰을 사용하도록 설정하고 새 사용자 액세스 토큰을 발급할 때 생성된 토큰입니다.
`grant_type` | `string` | **필수 사항입니다.** 값은 (OAuth 사양에서 요구하는) `refresh_token`이어야 합니다.
`client_id` | `string` | **필수 사항입니다.** {% data variables.product.prodname_github_app %}용 클라이언트 ID입니다.
`client_secret` | `string`   | **필수 사항입니다.** {% data variables.product.prodname_github_app %}용 클라이언트 비밀입니다.

### 응답

```json
{
  "access_token": "ghu_16C7e42F292c6912E7710c838347Ae178B4a",
  "expires_in": "28800",
  "refresh_token": "ghr_1B4a2e77838347a7E420ce178F2E7c6912E169246c34E1ccbF66C46812d16D5B1A9Dc86A1498",
  "refresh_token_expires_in": "15811200",
  "scope": "",
  "token_type": "bearer"
}
```
## 기존 GitHub 앱에 대한 만료되는 사용자 토큰 구성

{% data variables.product.prodname_github_app %} 설정에서 만료되는 사용자-서버 권한 부여 토큰을 사용하거나 사용하지 않도록 설정할 수 있습니다.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.github_apps %}
4. 선택한 {% data variables.product.prodname_github_app %} 옆에 있는 **편집** 을 클릭합니다.
  ![GitHub 앱을 편집하는 설정](/assets/images/github-apps/edit-test-app.png)
5. 왼쪽 사이드바에서 **선택적 기능** 을 클릭합니다.
   ![선택적 기능 탭](/assets/images/github-apps/optional-features-option.png) 
6. "사용자-서버 토큰 만료" 옆에 있는 **옵트인** 또는 **옵트아웃** 을 클릭합니다. 이 설정은 적용하는 데 몇 초 정도 걸릴 수 있습니다.

## 새 GitHub 앱에 대한 만료되는 토큰 옵트아웃

새 {% data variables.product.prodname_github_app %}을 만들 때 기본적으로 앱은 만료되는 사용자-서버 액세스 토큰을 사용합니다.

앱에서 만료되지 않는 사용자-서버 액세스 토큰을 사용하게 하려면 앱 설정 페이지에서 "사용자 권한 부여 토큰 만료"를 선택 취소하면 됩니다.

![GitHub 앱 설정 중 만료되는 사용자 토큰에 옵트인하는 옵션](/assets/images/github-apps/expire-user-tokens-selection.png)

사용자-서버 권한 부여 토큰을 사용하는 기존 {% data variables.product.prodname_github_apps %}은 앱 소유자가 만료되는 사용자 토큰을 앱에 사용하도록 설정하는 경우에만 이 새로운 흐름의 영향을 받습니다.

기존 {% data variables.product.prodname_github_apps %}에 만료되는 사용자 토큰을 사용하도록 설정하려면 OAuth 흐름을 통해 사용자를 보내 8시간 후에 만료되는 새 사용자 토큰을 다시 발급하고, 새로 고침 토큰을 사용하여 새 액세스 토큰 및 새로 고침 토큰을 가져오도록 요청해야 합니다. 자세한 내용은 “[GitHub 앱의 사용자 식별 및 권한 부여](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)”를 참조하세요.

## 추가 참고 자료

- “[{% data variables.product.prodname_dotcom %}에 대한 인증 정보](/github/authenticating-to-github/about-authentication-to-github#githubs-token-formats)”

