---
title: GitHub 앱과 OAuth 앱 간의 차이점
intro: '{% data variables.product.prodname_github_apps %}과 {% data variables.product.prodname_oauth_apps %}의 차이점을 이해하면 만들려는 앱을 결정하는 데 도움이 됩니다. {% data variables.product.prodname_oauth_app %}은 GitHub 사용자 역할을 하는 반면, {% data variables.product.prodname_github_app %}은 조직 또는 조직 내 리포지토리에 설치할 때 자체 ID를 사용합니다.'
redirect_from:
  - /early-access/integrations/integrations-vs-oauth-applications
  - /apps/building-integrations/setting-up-a-new-integration/about-choosing-an-integration-type
  - /apps/differences-between-apps
  - /developers/apps/differences-between-github-apps-and-oauth-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
  - OAuth Apps
shortTitle: GitHub Apps & OAuth Apps
ms.openlocfilehash: d70304b71de11a4a24f2acc6c2545e78cbd19b0c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148008710'
---
## GitHub 앱 설치와 OAuth 앱 권한 부여가 가능한 사용자

개인 계정 또는 소유한 조직에 GitHub 앱을 설치할 수 있습니다. 리포지토리에 관리자 권한이 있는 경우 조직 계정에 GitHub 앱을 설치할 수 있습니다. GitHub 앱이 리포지토리에 설치되어 있고 조직 권한이 필요한 경우 조직 소유자가 애플리케이션을 승인해야 합니다.

{% data reusables.apps.app_manager_role %}

반대로 사용자는 OAuth 앱에 권한을 부여하여 앱에 인증된 사용자 역할을 하는 역할을 부여합니다. 예를 들어 인증된 사용자에 대한 모든 알림을 찾는 OAuth 앱에 권한을 부여할 수 있습니다. 언제든지 OAuth 앱에서 사용 권한을 철회할 수 있습니다.

{% ifversion limit-app-access-requests %} {% data reusables.organizations.restricted-app-access-requests %} {% endif %}

{% data reusables.apps.deletes_ssh_keys %}

| GitHub 앱 | OAuth 앱 비교 |
| ----- | ------ |
| 조직에 GitHub 앱을 설치하려면 조직 소유자이거나 리포지토리의 관리자 권한이 있어야 합니다. GitHub 앱이 리포지토리에 설치되어 있고 조직 권한이 필요한 경우 조직 소유자가 애플리케이션을 승인해야 합니다. | OAuth 앱에 리소스에 대한 액세스 권한을 부여할 수 있습니다. |
| 개인 리포지토리에 GitHub 앱을 설치할 수 있습니다. | OAuth 앱에 리소스에 대한 액세스 권한을 부여할 수 있습니다.|
| GitHub 앱을 제거하고 GitHub 앱의 액세스 권한을 제거하려면 조직 소유자, 개인 리포지토리 소유자여야 하거나 리포지토리의 관리자 권한이 있어야 합니다. | OAuth 액세스 토큰을 삭제하여 액세스를 제거할 수 있습니다. |
| GitHub 앱 설치를 요청하려면 조직 소유자이거나 리포지토리의 관리자 권한이 있어야 합니다. | 조직 애플리케이션 정책이 활성화된 경우 모든 조직 구성원은 조직에 OAuth 앱을 설치하도록 요청할 수 있습니다. 조직 소유자는 요청을 승인하거나 거부해야 합니다. |

## GitHub 앱 및 OAuth 앱에서 액세스할 수 있는 대상

계정 소유자는 다른 계정에 대한 액세스 권한을 부여하지 않고 한 계정에서 {% data variables.product.prodname_github_app %}을 사용할 수 있습니다. 예를 들어 고용주 조직에 타사 빌드 서비스를 설치할 수 있지만 개인 계정의 리포지토리에 대한 해당 빌드 서비스 액세스 권한을 부여하지 않을 수 있습니다. GitHub 앱을 설정한 사람이 조직을 떠나는 경우 앱이 설치된 상태로 유지됩니다.

권한이 부여된 OAuth 앱에는 사용자 또는 조직 소유자의 액세스 가능한 모든 리소스에 대한 액세스 권한이 있습니다.

| GitHub 앱 | OAuth 앱 비교 |
| ----- | ------ |
| GitHub 앱을 설치하면 앱에 선택한 사용자 또는 조직 계정의 리포지토리에 대한 액세스 권한이 부여됩니다. | OAuth 앱에 권한을 부여하면 앱에 액세스 가능한 사용자의 리소스에 대한 액세스 권한을 부여하게 됩니다. 예를 들어 그들이 액세스할 수 있는 리포지토리가 있습니다. |
| 관리자가 설치에서 리포지토리를 제거하면 GitHub 앱의 설치 토큰이 리소스에 액세스할 수 없게 됩니다. | OAuth 액세스 토큰은 사용자가 리포지토리에 대한 쓰기 권한을 잃을 때와 같이 액세스 권한이 손실될 때 리소스에 대한 액세스 권한을 잃게 됩니다. |
| 설치 액세스 토큰은 앱 작성자가 선택한 권한이 있는 지정된 리포지토리로 제한됩니다. | OAuth 액세스 토큰은 범위를 통해 제한됩니다. |
| GitHub 앱은 리포지토리의 실제 콘텐츠에 액세스하지 않고도 문제 및 끌어오기 요청에 대한 별도 액세스를 요청할 수 있습니다. | OAuth 앱에서 문제, 끌어오기 요청 또는 리포지토리가 소유한 모든 항목에 액세스하려면 `repo` 범위를 요청해야 합니다. |
| GitHub 앱에는 조직 애플리케이션 정책이 적용되지 않습니다. GitHub 앱은 조직 소유자가 부여한 리포지토리에만 액세스할 수 있습니다. | 조직 애플리케이션 정책이 활성화된 경우 조직 소유자만 OAuth 앱 설치 권한을 부여할 수 있습니다. 설치된 경우 OAuth 앱은 승인된 조직 내에서 조직 소유자가 보유한 토큰에 표시되는 모든 것에 대한 액세스 권한을 얻습니다. |
| GitHub 앱은 설치가 변경되거나 제거될 때 웹후크 이벤트를 받습니다. 이렇게 하면 앱 작성자가 조직의 리소스에 대한 액세스 권한을 더 많거나 적게 받았을 때 알 수 있습니다. | OAuth 앱은 사용자의 변경된 액세스 권한 부여에 따라 언제든지 조직 또는 리포지토리에 대한 액세스 권한을 잃을 수 있습니다. OAuth 앱은 리소스에 대한 액세스 권한이 손실될 때 사용자에게 알리지 않습니다. |

## 토큰 기반 식별

{% note %}

**참고:** GitHub 앱은 사용자 기반 토큰을 사용할 수도 있습니다. 자세한 내용은 “[GitHub 앱의 사용자 식별 및 권한 부여](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)”를 참조하세요.

{% endnote %}

| GitHub 앱 | OAuth 앱 비교 |
| ----- | ----------- |
| GitHub 앱은 JSON 웹 토큰 형식이 대역 외인 프라이빗 키를 사용하여 설치 액세스 토큰을 요청할 수 있습니다. | OAuth 앱은 웹 요청을 통해 리디렉션한 후 요청 토큰을 액세스 토큰으로 교환할 수 있습니다. |
| 설치 토큰은 @jenkins-bot처럼 앱을 GitHub 앱 봇으로 식별합니다. | 액세스 토큰은 @octocat처럼 앱에 토큰을 부여한 사용자로 앱을 식별합니다. |
| 설치 토큰은 미리 정의된 시간(현재 1시간) 후에 만료됩니다. | OAuth 토큰은 고객이 철회할 때까지 활성 상태로 유지됩니다. |
| 조직 또는 리포지토리에 설치된 {% data variables.product.prodname_github_apps %}에는 서버 간 요청의 속도 제한이 적용됩니다. 자세한 내용은 “[{% data variables.product.prodname_github_apps %}의 속도 제한](/developers/apps/building-github-apps/rate-limits-for-github-apps)”을 참조하세요. | OAuth 토큰은 시간당 요청 {% ifversion fpt or ghec or ghes %}5,000{% elsif ghae %}15,000{% endif %}개의 사용자 속도 제한을 사용합니다. |
| 속도 제한 증가는 GitHub 앱 수준(모든 설치에 영향을 줌) 및 개별 설치 수준에서 부여할 수 있습니다. | OAuth 앱별로 속도 제한 증가가 부여됩니다. 해당 OAuth 앱에 부여된 모든 토큰은 증가된 제한을 받습니다. |
| {% data variables.product.prodname_github_apps %}은 사용자를 대신해 인증할 수 있으며, 이를 사용자-서버 요청이라고 합니다. 권한을 부여하는 흐름은 OAuth 앱 권한 부여 흐름과 동일합니다. 사용자-서버 토큰은 만료될 수 있으며 새로 고침 토큰으로 갱신할 수 있습니다. 자세한 내용은 “[사용자-서버 액세스 토큰 새로 고침](/apps/building-github-apps/refreshing-user-to-server-access-tokens/)” 및 “[GitHub 앱의 사용자 식별 및 권한 부여](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)”를 참조하세요. | {% data variables.product.prodname_oauth_apps %}에서 사용하는 OAuth 흐름으로 사용자를 대신하여 {% data variables.product.prodname_oauth_app %}에 권한을 부여합니다. 이 흐름은 {% data variables.product.prodname_github_app %} 사용자-서버 권한 부여에 사용되는 것과 동일한 흐름입니다. |

## 리소스의 사용 권한 수준 요청

OAuth 앱과 달리 GitHub 앱에는 필요한 권한에 대해서만 액세스를 요청할 수 있는 대상 권한이 있습니다. 예를 들어 CI(연속 통합) GitHub 앱은 리포지토리 콘텐츠에 대한 읽기 권한을 요청하고 상태 API에 대한 쓰기 권한을 요청할 수 있습니다. 또 다른 GitHub 앱은 코드에 대한 읽기 또는 쓰기 권한을 가질 수 없지만 여전히 문제, 레이블 및 마일스톤을 관리할 수 있습니다. OAuth 앱은 세분화된 권한을 사용할 수 없습니다.

| Access | GitHub 앱(`read`또는 `write` 권한) | OAuth 앱 비교 |
| ------ | ----- | ----------- |
| **퍼블릭 리포지토리에 대한 액세스** | 설치하는 동안 퍼블릭 리포지토리를 선택해야 합니다. | `public_repo` 범위입니다. |
| **리포지토리 코드/콘텐츠에 대한 액세스** | 리포지토리 콘텐츠 | `repo` 범위입니다. |
| **문제, 레이블 및 마일스톤에 대한 액세스** | 문제 | `repo` 범위입니다. |
| **끌어오기 요청, 레이블 및 마일스톤에 대한 액세스** | 끌어오기 요청 | `repo` 범위입니다. |
| **커밋 상태에 대한 액세스(CI 빌드의 경우)** | 커밋 상태 | `repo:status` 범위입니다. |
| **배포 및 배포 상태에 대한 액세스** | 배포 | `repo_deployment` 범위입니다. |
| **웹후크를 통한 이벤트 수신** | GitHub 앱에는 기본적으로 웹후크가 포함됩니다. | `write:repo_hook` 또는 `write:org_hook` 범위입니다. |

## 리포지토리 검색

| GitHub 앱 | OAuth 앱 비교 |
| ----- | ----------- |
| GitHub 앱은 `/installation/repositories`를 보고 설치에서 액세스할 수 있는 리포지토리를 확인할 수 있습니다. | OAuth 앱은 액세스 가능한 리포지토리에 대한 사용자 보기의 경우 `/user/repos`를, 조직 보기의 경우 `/orgs/:org/repos`를 확인할 수 있습니다. |
| GitHub 앱은 리포지토리가 설치에서 추가되거나 제거될 때 웹후크를 받습니다. | OAuth 앱은 조직 내에서 새 리포지토리를 만들 때 알림에 대한 조직 웹후크를 만듭니다. |

## Webhook

| GitHub 앱 | OAuth 앱 비교 |
| ----- | ----------- |
| 기본적으로 GitHub 앱에는 액세스 권한이 있는 모든 리포지토리에 대해 수신하도록 구성된 이벤트를 수신하는 단일 웹후크가 있습니다. | OAuth 앱은 이벤트를 수신하는 데 필요한 리포지토리마다 리포지토리 웹후크를 만들기 위해 웹후크 범위를 요청합니다. |
| GitHub 앱은 조직 구성원의 권한이 있는 특정 조직 수준 이벤트를 받습니다. | OAuth 앱은 조직 수준 이벤트를 수신하는 데 필요한 조직마다 조직 웹후크를 만들기 위해 조직 웹후크 범위를 요청합니다. |
| GitHub 앱을 제거하면 웹후크가 자동으로 비활성화됩니다. | OAuth 앱의 액세스 토큰이 삭제되고 자동으로 정리할 방법이 없으면 웹후크가 자동으로 비활성화되지 않습니다. 사용자에게 이 작업을 수동으로 수행하도록 요청해야 합니다.|

## Git 액세스

| GitHub 앱 | OAuth 앱 비교 |
| ----- | ----------- |
| GitHub 앱은 리포지토리 콘텐츠 권한을 요청하고 설치 토큰을 사용하여 [HTTP 기반 Git](/apps/building-github-apps/authenticating-with-github-apps/#http-based-git-access-by-an-installation)을 통해 인증합니다. | OAuth 앱은 `write:public_key` 범위를 요청하고 API를 통해 [배포 키를 만듭니다](/rest/reference/deployments#create-a-deploy-key). 그런 다음 해당 키를 사용하여 Git 명령을 수행할 수 있습니다. |
| 토큰은 HTTP 암호로 사용됩니다. | 토큰은 HTTP 사용자 이름으로 사용됩니다. |

## 컴퓨터 계정과 봇 계정 비교

머신 사용자 계정은 GitHub의 사용자 시스템을 사용하여 자동화된 시스템을 분리하는 OAuth 기반 개인 계정입니다.

반면 봇 계정은 GitHub 앱과 관련이 있으며 모든 GitHub 앱에 기본 제공됩니다.

| GitHub 앱 | OAuth 앱 비교 |
| ----- | ----------- |
| GitHub 앱 봇은 {% data variables.product.prodname_enterprise %} 사용자를 사용하지 않습니다. | 컴퓨터 사용자 계정은 {% data variables.product.prodname_enterprise %} 사용자를 사용합니다. |
| GitHub 앱 봇에는 암호가 부여되지 않으므로 고객은 직접 로그인할 수 없습니다. | 컴퓨터 사용자 계정에는 고객에 의해 관리 및 보호될 사용자 이름과 암호가 부여됩니다. |
