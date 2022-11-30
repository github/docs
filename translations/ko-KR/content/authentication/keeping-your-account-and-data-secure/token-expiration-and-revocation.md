---
title: 토큰 만료 및 해지
intro: '토큰은 만료될 수 있으며 사용자, 사용자가 권한을 부여한 애플리케이션 및 {% data variables.product.product_name %} 자체에 의해 해지될 수도 있습니다.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Token expiration
redirect_from:
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/token-expiration-and-revocation
ms.openlocfilehash: 00ccfc3117401bfa9464da9599067fe1d2f514dd
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106999'
---
토큰이 만료되었거나 해지된 경우 더 이상 Git 및 API 요청을 인증하는 데 사용할 수 없습니다. 만료되거나 해지된 토큰을 복원할 수 없으므로 사용자 또는 애플리케이션이 새 토큰을 만들어야 합니다.

이 문서에서는 {% data variables.product.product_name %} 토큰이 철회되거나 만료될 수 있는 가능한 이유를 설명합니다.

{% note %}

**참고:** {% data variables.product.pat_generic %} 또는 OAuth 토큰이 만료되거나 해지되면 보안 로그에 작업이 표시 `oauth_authorization.destroy` 될 수 있습니다. 자세한 내용은 “[보안 로그 검토](/github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-security-log)”를 참조하세요.

{% endnote %}

## 만료 날짜에 도달한 후 토큰이 철회됨

{% data variables.product.pat_generic %}을(를) 만들 때 토큰에 대한 만료를 설정하는 것이 좋습니다. 토큰의 만료 날짜에 도달하면 토큰이 자동으로 철회됩니다. 자세한 내용은 "[{% data variables.product.pat_generic %} 만들기](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)"를 참조하세요.

{% ifversion fpt or ghec %}
## 퍼블릭 리포지토리 또는 퍼블릭 gist로 푸시할 때 토큰이 철회됨

유효한 OAuth 토큰, {% data variables.product.prodname_github_app %} 토큰 또는 {% data variables.product.pat_generic %}이(가) 퍼블릭 리포지토리 또는 퍼블릭 gist에 푸시되면 토큰이 자동으로 해지됩니다. 

{% endif %}

{% ifversion fpt or ghec %}
## 사용되지 않아 토큰이 만료됨

{% data variables.product.product_name %}는 토큰이 1년 동안 사용되지 않은 경우 OAuth 토큰 또는 {% data variables.product.pat_generic %}을(를) 자동으로 해지합니다.
{% endif %}

## 사용자가 철회한 토큰

계정 설정에서 {% data variables.product.prodname_github_app %} 또는 {% data variables.product.prodname_oauth_app %}의 권한 부여를 철회하여 앱과 연결된 모든 토큰을 철회할 수 있습니다. 자세한 내용은 “[권이 부여된 통합 검토](/github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-authorized-integrations)” 및 “[권한이 부여된 애플리케이션 검토(OAuth)](/github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-authorized-applications-oauth)”를 참조하세요.

권한 부여가 철회되면 권한 부여와 연결된 모든 토큰도 철회됩니다. 애플리케이션에 다시 권한을 부여하려면 타사 애플리케이션 또는 웹 사이트의 지침에 따라 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}에서 계정을 다시 연결합니다.

## {% data variables.product.prodname_oauth_app %}에 의해 철회된 토큰

{% data variables.product.prodname_oauth_app %}의 소유자는 계정의 앱 권한 부여를 철회할 수 있으며, 이 경우 권한 부여와 관련된 토큰도 철회됩니다. OAuth 앱의 권한 부여를 철회하는 방법에 대한 자세한 내용은 “[앱 권한 부여 삭제](/rest/reference/apps#delete-an-app-authorization)”를 참조하세요.

{% data variables.product.prodname_oauth_app %} 소유자는 권한 부여와 관련된 개별 토큰을 철회할 수도 있습니다. OAuth 앱에 대한 개별 토큰을 철회하는 방법에 대한 자세한 내용은 “[앱 토큰 삭제](/rest/apps/oauth-applications#delete-an-app-token)”를 참조하세요.

## 동일한 범위의 {% data variables.product.prodname_oauth_app %}에 대한 토큰이 초과되어 토큰이 철회됨

{% data reusables.apps.oauth-token-limit %}

## {% data variables.product.prodname_github_app %} 구성으로 인해 사용자 토큰이 철회됨

{% data variables.product.prodname_github_app %}에서 만든 사용자-서버 토큰은 기본적으로 8시간 후에 만료됩니다. {% data variables.product.prodname_github_apps %}의 소유자는 사용자-서버 토큰이 만료되지 않도록 앱을 구성할 수 있습니다. {% data variables.product.prodname_dotcom %} 앱의 사용자-서버 토큰 동작 방식을 변경하는 방법에 대한 자세한 내용은 “[앱의 선택적 기능 활성화](/developers/apps/getting-started-with-apps/activating-optional-features-for-apps)”를 참조하세요.
