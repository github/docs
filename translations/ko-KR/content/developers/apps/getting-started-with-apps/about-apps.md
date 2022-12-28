---
title: 앱 정보
intro: '{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API와 통합하여 유연성을 추가하고 자체 워크플로에서 마찰을 줄일 수 있습니다.{% ifversion fpt or ghec %} [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace)에서 다른 사용자와 통합을 공유할 수도 있습니다.{% endif %}'
redirect_from:
  - /apps/building-integrationssetting-up-a-new-integration
  - /apps/building-integrations
  - /apps/getting-started-with-building-apps
  - /apps/about-apps
  - /developers/apps/about-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
ms.openlocfilehash: a66af14f6047b2aff435ac4ac8dc83d7a1181e92
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107359'
---
{% data variables.product.prodname_dotcom %}의 앱을 사용하면 워크플로를 자동화하고 개선할 수 있습니다. 워크플로를 개선하기 위해 앱을 빌드할 수 있습니다.{% ifversion fpt or ghec %} 또한 [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace)에서 앱을 공유하거나 판매할 수 있습니다. {% data variables.product.prodname_marketplace %}에 앱을 나열하는 방법을 알아보려면 “[GitHub Marketplace 시작](/marketplace/getting-started/)”을 참조하세요.{% endif %}

{% data reusables.marketplace.github_apps_preferred %}이지만 GitHub는 {% data variables.product.prodname_oauth_apps %}과 {% data variables.product.prodname_github_apps %}을 모두 지원합니다. 앱 유형 선택에 대한 자세한 내용은 “[GitHub 앱과 OAuth 앱 간의 차이점](/developers/apps/differences-between-github-apps-and-oauth-apps)”을 참조하세요.

{% data reusables.apps.general-apps-restrictions %}

{% data variables.product.prodname_github_app %}을 빌드하는 프로세스의 연습은 “[첫 번째 {% data variables.product.prodname_github_app %} 빌드](/apps/building-your-first-github-app)”를 참조하세요.

## {% data variables.product.prodname_github_apps %} 정보

{% data variables.product.prodname_github_apps %}은 GitHub 내의 첫 번째 클래스 작업자입니다. {% data variables.product.prodname_github_app %}은 자체 ID를 사용하여 API를 통해 직접 작업을 수행하므로 봇 또는 서비스 계정을 별도의 사용자로 유지할 필요가 없습니다.

{% data variables.product.prodname_github_apps %}은 조직 및 개인 계정에 직접 설치가 가능하고 특정 리포지토리에 대한 액세스 권한을 부여받을 수 있습니다. 또한 기본 제공 웹후크와 범위가 좁은 특정 권한이 함께 제공됩니다. {% data variables.product.prodname_github_app %}을 설정할 때 액세스할 리포지토리를 선택할 수 있습니다. 예를 들어 `octocat` 리포지토리 및 `octocat` 리포지토리에만 문제를 기록하는 `MyGitHub`라는 앱을 설정할 수 있습니다. {% data variables.product.prodname_github_app %}을 설치하려면 조직 소유자이거나 리포지토리에 관리자 권한이 있어야 합니다.

{% data reusables.apps.app_manager_role %}

{% data variables.product.prodname_github_apps %}은 어딘가에 호스트되어야 하는 애플리케이션입니다. 서버 및 호스팅을 다루는 단계별 지침은 “[첫 번째 {% data variables.product.prodname_github_app %} 빌드](/apps/building-your-first-github-app)”를 참조하세요.

워크플로를 개선하기 위해 여러 스크립트 또는 전체 애플리케이션이 포함된 {% data variables.product.prodname_github_app %}을 만든 다음, 해당 앱을 다른 많은 도구에 연결할 수 있습니다. 예를 들어 {% data variables.product.prodname_github_apps %}을 GitHub, Slack, 다른 사내 앱, 메일 프로그램 또는 기타 API에 연결할 수 있습니다.

{% data variables.product.prodname_github_apps %}을 만들 때 다음을 염두에 두어야 합니다.

{% ifversion fpt or ghec %}
* {% data reusables.apps.maximum-github-apps-allowed %} {% endif %}
* {% data variables.product.prodname_github_app %}은 [사용자-서버](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps#user-to-server-requests) 토큰을 사용하지 않는 한 사용자와 독립적으로 작업을 수행해야 합니다. {% data reusables.apps.expiring_user_authorization_tokens %}

* {% data variables.product.prodname_github_app %}이 특정 리포지토리와 통합되는지 확인합니다.
* {% data variables.product.prodname_github_app %}은 개인 계정 또는 조직에 연결해야 합니다.
* {% data variables.product.prodname_github_app %}이 사용자가 할 수 있는 모든 것을 알고 수행할 것으로 기대하지 마세요.
* “GitHub를 사용하여 로그인” 서비스만 필요한 경우 {% data variables.product.prodname_github_app %}을 사용하지 마세요. 그러나 {% data variables.product.prodname_github_app %}은 [사용자 ID 흐름](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)을 사용하여 사용자를 로그인하고 아울러 다른 작업을 수행할 수 있습니다.
* GitHub 사용자 역할만 하면서 GitHub 사용자가 할 수 있는 모든 작업을 수행하려는 경우 {% data variables.product.prodname_github_app %}을 빌드하지 마세요.{% ifversion fpt or ghec %}
* {% data reusables.apps.general-apps-restrictions %}{% endif %}

{% data variables.product.prodname_github_apps %}을 개발하려면 “[{% data variables.product.prodname_github_app %} 만들기](/apps/building-github-apps/creating-a-github-app/)”로 시작합니다. {% ifversion fpt or ghec %} 사용자가 미리 구성된 {% data variables.product.prodname_github_apps %}을 만들 수 있는 {% data variables.product.prodname_github_app %} 매니페스트를 사용하는 방법을 알아보려면 “[매니페스트에서 {% data variables.product.prodname_github_apps %} 만들기](/apps/building-github-apps/creating-github-apps-from-a-manifest/)”를 참조하세요.{% endif %}

## {% data variables.product.prodname_oauth_apps %} 정보

OAuth2는 외부 애플리케이션이 암호에 액세스하지 않고 사용자의 {% data variables.product.prodname_dotcom %} 계정의 개인 정보에 대한 권한 부여를 요청할 수 있는 프로토콜입니다. 토큰은 특정 유형의 데이터로 제한될 수 있으며 언제든지 사용자가 철회할 수 있으므로 OAuth2가 기본 인증보다 선호됩니다.

{% data reusables.apps.deletes_ssh_keys %}

{% data variables.product.prodname_oauth_app %}은 ID 공급자로 {% data variables.product.prodname_dotcom %}를 사용하여 앱에 대한 액세스 권한을 부여하는 사용자로 인증합니다. 즉, 사용자가 {% data variables.product.prodname_oauth_app %} 액세스 권한을 부여할 때 계정에서 액세스할 수 있는 모든 리포지토리 및 타사 액세스를 차단하지 않은 조직에도 권한을 부여합니다.

간단한 스크립트에서 처리할 수 있는 것보다 더 복잡한 프로세스를 만드는 경우 {% data variables.product.prodname_oauth_app %}을 빌드하는 것이 좋습니다. {% data variables.product.prodname_oauth_apps %}은 어딘가에 호스트되어야 하는 애플리케이션입니다.

{% data variables.product.prodname_oauth_apps %}을 만들 때 다음을 염두에 두어야 합니다.

{% ifversion fpt or ghec %}
* {% data reusables.apps.maximum-oauth-apps-allowed %} {% endif %}
* {% data variables.product.prodname_oauth_app %}은 모든 {% data variables.product.prodname_dotcom %}에서 인증된 {% data variables.product.prodname_dotcom %} 사용자 역할을 해야 합니다(예: 사용자 알림을 제공할 때).
* 인증된 사용자에 대해 “{% data variables.product.prodname_dotcom %}로 로그인”을 사용하도록 설정하여 {% data variables.product.prodname_oauth_app %}을 ID 공급자로 사용할 수 있습니다.
* 애플리케이션이 단일 리포지토리에서 작동하도록 하려면 {% data variables.product.prodname_oauth_app %}을 빌드하지 마세요. `repo` OAuth 범위를 사용하면 {% data variables.product.prodname_oauth_apps %}이 인증된 사용자의 모든 리포지토리에서 작동할 수 있습니다.
* 팀 또는 회사의 애플리케이션 역할을 하려면 {% data variables.product.prodname_oauth_app %}을 빌드하지 마세요. {% data variables.product.prodname_oauth_apps %}은 단일 사용자로 인증되므로 한 사람이 회사에서 사용할 {% data variables.product.prodname_oauth_app %}을 만든 다음 회사를 떠나는 경우 다른 사용자가 액세스할 수 없습니다.{% ifversion fpt or ghec %}
* {% data reusables.apps.oauth-apps-restrictions %}{% endif %}

{% data variables.product.prodname_oauth_apps %}에 대한 자세한 내용은 “[{% data variables.product.prodname_oauth_app %} 만들기](/apps/building-oauth-apps/creating-an-oauth-app/)” 및 “[앱 등록](/rest/guides/basics-of-authentication#registering-your-app)”을 참조하세요.

## {% data variables.product.pat_generic_caps %}s

[{% data variables.product.pat_generic %}](/articles/creating-a-personal-access-token-for-the-command-line/)은 범위를 통해 권한을 지정할 수 있다는 측면에서 [OAuth 토큰](/apps/building-oauth-apps/authorizing-oauth-apps/)과 유사하게 작동하는 문자 문자열[입니다](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). {% data variables.product.pat_generic %}은(는) 암호와 유사하지만 많은 데이터를 사용할 수 있으며 언제든지 각 데이터에 대한 액세스를 취소할 수 있습니다.

예를 들어 {% data variables.product.pat_generic %}을(를) 사용하여 리포지토리에 쓸 수 있습니다. 그런 다음 cURL 명령을 실행하거나 리포지토리에서 [문제를 만드는 스크립트를](/rest/reference/issues#create-an-issue) 작성하는 경우 {% data variables.product.pat_generic %}을(를) 전달하여 인증합니다. {% data variables.product.pat_generic %}을(를) 환경 변수로 저장하여 사용할 때마다 입력하지 않도록 할 수 있습니다.

{% data variables.product.pat_generic %}s를 사용할 때 다음 아이디어를 염두에 두어야 합니다.

* 본인만 나타내려면 이 토큰을 사용해야 합니다.
* 일회성 cURL 요청을 수행할 수 있습니다.
* 개인 스크립트를 실행할 수 있습니다.
* 팀 전체 또는 회사에서 사용할 스크립트를 설정하지 마세요.
* 봇 사용자 역할을 하려면 공유 개인 계정을 설정하지 마세요.
* 토큰에 필요한 최소한의 권한을 부여합니다.
* {% data variables.product.pat_generic %}s에 대한 만료를 설정하여 정보를 안전하게 보호합니다.

## 빌드할 통합 결정

통합 만들기를 시작하기 전에 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API에 액세스하고, 인증하고, 상호 작용하는 가장 좋은 방법을 결정해야 합니다. 다음 이미지는 통합에 {% data variables.product.pat_generic %}s, {% data variables.product.prodname_github_apps %} 또는 {% data variables.product.prodname_oauth_apps %}을(를) 사용할지 결정할 때 질문할 몇 가지 질문을 제공합니다.

![앱 질문 흐름 소개](/assets/images/intro-to-apps-flow.png)

통합의 동작 방법과 액세스 대상에 대한 다음 질문을 생각해 보세요.

* 내 통합은 단순히 나로서 작동할 것인가, 아니면 애플리케이션에 더 가깝게 작동할 것인가?
* 통합이 독자적인 엔터티로서 나와는 독립적으로 행동하기를 원하는가?
* 내가 액세스할 수 있는 모든 항목에 통합도 액세스할 것인가, 아니면 액세스를 제한할 것인가?
* 통합은 단순한가, 아니면 복잡한가? 예를 들어 {% data variables.product.pat_generic %}s은(는) 간단한 스크립트 및 URL에 적합하지만 {% data variables.product.prodname_oauth_app %}는 더 복잡한 스크립팅을 처리할 수 있습니다.

## 지원 요청

{% data reusables.support.help_resources %}
