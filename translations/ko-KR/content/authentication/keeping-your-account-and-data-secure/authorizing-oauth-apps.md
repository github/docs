---
title: OAuth 앱 권한 부여
intro: 'OAuth를 사용하여 {% data variables.product.product_name %} ID를 타사 애플리케이션에 연결할 수 있습니다. {% data variables.product.prodname_oauth_app %}에 권한을 부여하는 경우 애플리케이션을 신뢰하는지 확인하고 애플리케이션 개발자와 애플리케이션에서 액세스하려는 정보 종류를 검토해야 합니다.'
redirect_from:
  - /articles/authorizing-oauth-apps
  - /github/authenticating-to-github/authorizing-oauth-apps
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-oauth-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
ms.openlocfilehash: 7d116f8fc5117cdcbdbd5582e007351c47b2d55d
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/28/2022
ms.locfileid: '148184022'
---
{% data variables.product.prodname_oauth_app %}에서 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}에서 계정으로 사용자를 식별하려는 경우 앱의 개발자 연락처 정보와 요청되는 특정 데이터 목록이 있는 페이지가 표시됩니다.

{% ifversion fpt or ghec %}

{% tip %}

**팁:** 먼저 [사용자 메일 주소를 확인해야](/articles/verifying-your-email-address) {% data variables.product.prodname_oauth_app %}에 권한을 부여할 수 있습니다.

{% endtip %}

{% endif %}

## {% data variables.product.prodname_oauth_app %} 액세스

{% data variables.product.prodname_oauth_apps %}은 {% data variables.product.product_name %} 데이터에 대한 ‘읽기’ 또는 ‘쓰기’ 권한을 가질 수 있습니다. 

- **읽기 권한** 은 앱이 데이터를 ‘보는’ 것만 허용합니다.
- **쓰기 권한** 은 앱이 데이터를 ‘변경’할 수 있도록 합니다.

{% tip %}

**팁:** {% data reusables.user-settings.review_oauth_tokens_tip %}

{% endtip %}

### OAuth 범위 정보

‘범위’는 {% data variables.product.prodname_oauth_app %}이 퍼블릭 데이터와 비퍼블릭 데이터에 둘 다 액세스하기 위해 요청할 수 있는 명명된 권한 그룹입니다.

{% data variables.product.product_name %}와 통합되는 {% data variables.product.prodname_oauth_app %}을 사용하려는 경우 해당 앱이 어떤 유형의 데이터 액세스 권한이 필요한지 알려줍니다. 앱에 액세스 권한을 부여하면 앱은 데이터를 읽거나 수정하는 등의 작업을 사용자 대신 수행할 수 있습니다. 예를 들어 `user:email` 범위를 요청하는 앱을 사용하려는 경우 앱은 개인 메일 주소에 대한 읽기 전용 액세스 권한을 갖습니다. 자세한 내용은 “[{% data variables.product.prodname_oauth_apps %}의 범위 정보](/apps/building-integrations/setting-up-and-registering-oauth-apps/about-scopes-for-oauth-apps)”를 참조하세요.

{% tip %}

**참고:** 현재 소스 코드 액세스 범위를 읽기 전용으로 지정할 수는 없습니다.

{% endtip %}

{% data reusables.apps.oauth-token-limit %}

### 요청된 데이터 형식

{% data variables.product.prodname_oauth_apps %}에서 여러 형식의 데이터를 요청할 수 있습니다.

| 데이터 형식 | 설명 |
| --- | --- |
| 커밋 상태 | 앱이 커밋 상태를 보고하도록 액세스 권한을 부여할 수 있습니다. 커밋 상태 액세스를 통해 앱은 특정 커밋을 기준으로 빌드가 성공했는지 확인할 수 있습니다. 앱이 코드에 액세스할 수는 없지만 특정 커밋의 상태 정보를 읽고 쓸 수 있습니다. |
| 배포 | 배포 상태 액세스를 통해 앱은 퍼블릭 및 프라이빗 리포지토리에 대한 특정 커밋을 기준으로 배포가 성공했는지 확인할 수 있습니다. 앱이 코드에 액세스할 수는 없습니다. |
| Gists | [Gist](https://gist.github.com) 액세스를 통해 앱은 퍼블릭 및 비밀 Gist에 모두 읽거나 쓸 수 있습니다. |
| 후크 | [웹후크](/webhooks) 액세스를 통해 앱은 사용자가 관리하는 리포지토리의 후크 구성을 읽거나 쓸 수 있습니다. |
| 알림 | 알림 액세스를 통해 앱은 이슈 및 끌어오기 요청의 주석과 같은 {% data variables.product.product_name %} 알림을 읽을 수 있습니다. 그러나 앱이 리포지토리의 항목에 액세스할 수는 없습니다. |
| 조직 및 팀 | 조직 및 팀 액세스를 통해 앱은 조직 및 팀 멤버 자격에 액세스하고 관리할 수 있습니다. |
| 개인 사용자 데이터 | 사용자 데이터에는 사용자 프로필에 있는 정보(예: 이름, 메일 주소, 위치)가 포함됩니다. |
| 리포지토리 | 리포지토리 정보에는 기여자 이름, 사용자가 만든 분기, 리포지토리 내의 실제 파일이 포함됩니다. 앱은 사용자 수준의 퍼블릭 또는 프라이빗 리포지토리에 대한 액세스를 요청할 수 있습니다. |
| 리포지토리 삭제 | 앱은 사용자가 관리하는 리포지토리를 삭제하도록 요청할 수 있지만 코드에 액세스할 수는 없습니다. |{% ifversion projects-oauth-scope %}
| 프로젝트 | 사용자 및 조직 {% data variables.projects.projects_v2 %}에 대한 액세스 앱은 읽기/쓰기 또는 읽기 전용 액세스를 요청할 수 있습니다. |{% endif %}

## 업데이트된 권한 요청

{% data variables.product.prodname_oauth_apps %}은 새 액세스 권한을 요청할 때 현재 권한과 새 권한 간의 차이점을 알려줍니다.

{% ifversion fpt or ghec %}

## {% data variables.product.prodname_oauth_apps %} 및 조직

{% data variables.product.prodname_oauth_app %}에 개인 계정에 대한 권한을 부여하면 멤버로 속해 있는 각 조직에 권한 부여가 미치는 영향도 확인할 수 있습니다.

- **{% data variables.product.prodname_oauth_app %} 액세스 제한이 ‘있는’ 조직의 경우 조직 관리자가 해당 조직에서 사용할 애플리케이션을 승인하도록 요청할 수 있습니다.**  조직이 승인하지 않은 애플리케이션은 조직의 퍼블릭 리소스에만 액세스할 수 있습니다. 조직 관리자인 경우 직접 [애플리케이션을 승인](/articles/approving-oauth-apps-for-your-organization)할 수 있습니다.

- **{% data variables.product.prodname_oauth_app %} 액세스 제한이 ‘없는’ 조직의 경우 해당 조직의 리소스에 대한 액세스 권한이 애플리케이션에 자동으로 부여됩니다.**  이런 이유로, 개인 계정 리소스 및 조직 리소스에 대한 액세스를 승인할 {% data variables.product.prodname_oauth_apps %}을 결정할 때는 주의해야 합니다.

SAML SSO(Single Sign-On)가 사용하도록 설정된 조직에 속해 있고 과거에 SAML을 통해 인증하여 해당 조직에 대한 연결된 ID를 만든 경우 {% data variables.product.prodname_oauth_app %}에 권한을 부여할 때마다 각 조직에 대해 활성 SAML 세션이 있어야 합니다.

{% note %}

**참고:** SAML로 보호되는 조직에 액세스하는 권한 있는 {% data variables.product.prodname_oauth_app %} 또는 {% data variables.product.prodname_github_app %}에 문제가 발생하는 경우 [권한 있는 {% data variables.product.prodname_github_apps %} 또는 권한 있는 {](https://github.com/settings/applications)[% data variables.product.prodname_oauth_apps %}](https://github.com/settings/apps/authorizations)에서 앱을 해지해야 할 수 있습니다.  페이지에서 조직을 방문하여 활성 SAML 세션을 인증하고 설정한 다음, 액세스하여 앱을 다시 인증하려고 시도합니다.

{% endnote %}

## 추가 참고 자료

- “[{% data variables.product.prodname_oauth_app %} 액세스 제한 정보](/articles/about-oauth-app-access-restrictions)”
- “[GitHub 앱에 권한 부여](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-github-apps)”
- “[{% data variables.product.prodname_marketplace %} 지원](/articles/github-marketplace-support)”

{% endif %}
