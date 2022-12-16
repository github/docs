---
title: 개인 대시보드 정보
redirect_from:
- /hidden/about-improved-navigation-to-commonly-accessed-pages-on-github
- /articles/opting-into-the-public-beta-for-a-new-dashboard
- /articles/about-your-personal-dashboard
- /github/setting-up-and-managing-your-github-user-account/about-your-personal-dashboard
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/about-your-personal-dashboard
intro: You can visit your personal dashboard to keep track of issues and pull requests you're working on or following, navigate to your top repositories and team pages, stay updated on recent activities in organizations and repositories you're subscribed to, and explore recommended repositories.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Accounts
shortTitle: Your personal dashboard
ms.openlocfilehash: a6c91f68a30f06bbc5b3b7bc8a0b95dddfbae64a
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145090068"
---
## <a name="accessing-your-personal-dashboard"></a>개인 대시보드에 액세스

개인 대시보드는 {% data variables.product.product_name %}에 로그인할 때 표시되는 첫 번째 페이지입니다.

로그인한 후 개인 대시보드에 액세스하려면 {% data variables.product.product_name %} 페이지의 왼쪽 위 모서리에 있는 {% octicon "mark-github" aria-label="The github octocat logo" %}를 클릭합니다.

## <a name="finding-your-recent-activity"></a>최근 활동 찾기

뉴스 피드의 “최근 활동” 섹션에서 최근 업데이트된 문제와 작업 중인 끌어오기 요청을 빠르게 찾고 후속 조치를 수행할 수 있습니다. “최근 활동”에서 지난 2주 동안 진행된 최대 4개의 최신 업데이트를 미리 볼 수 있습니다.

{% data reusables.dashboard.recent-activity-qualifying-events %}

## <a name="finding-your-top-repositories-and-teams"></a>상위 리포지토리 및 팀 찾기

대시보드의 왼쪽 사이드바에서 사용하는 상위 리포지토리 및 팀에 액세스할 수 있습니다.

![여러 조직의 리포지토리 및 팀 목록](/assets/images/help/dashboard/repositories-and-teams-from-personal-dashboard.png)

상위 리포지토리 목록은 자동으로 생성되며 계정에서 직접 소유하든 소유하지 않든 상호 작용한 리포지토리를 포함할 수 있습니다. 상호 작용에는 커밋 만들기, 문제 및 끌어오기 요청 열기 또는 주석 달기가 포함됩니다. 상위 리포지토리 목록은 편집할 수 없지만 리포지토리는 마지막으로 상호 작용한 후 4개월이 지나면 목록에서 삭제됩니다.

{% data variables.product.product_name %}의 페이지 위에 있는 검색 표시줄을 클릭하면 최근에 방문한 리포지토리, 팀, 프로젝트 보드 목록을 찾을 수 있습니다.

## <a name="staying-updated-with-activity-from-the-community"></a>커뮤니티 활동으로 최신 상태 유지

{% if for-you-feed %} 대시보드의 주 섹션에는 두 가지 작업 피드가 있습니다.

- 팔로우 중: 팔로우하는 사용자와 보는 리포지토리의 작업입니다.
- 사용자용: {% data variables.product.product_name %} 네트워크를 기반으로 하는 작업 및 권장 사항입니다.

### <a name="following-feed"></a>팔로우 중인 피드

이 피드는 사용자를 팔로우하거나 리포지토리를 보면서 직접 관심을 보인 리포지토리 및 사용자의 작업을 보여 줍니다. 예를 들어 팔로우하는 사용자가 다음과 같은 경우 업데이트가 표시됩니다.

{% else %} 뉴스 피드의 “모든 작업” 섹션에서 보는 리포지토리와 팔로우하는 사용자의 업데이트를 볼 수 있습니다.

팔로우하는 사용자가 다음과 같은 경우 뉴스 피드에 업데이트가 표시됩니다. {% endif %}


- 리포지토리에 별을 지정합니다.
- 다른 사용자를 팔로우합니다.{% ifversion fpt or ghes or ghec %}
- 퍼블릭 리포지토리를 만듭니다.{% endif %}
- 보고 있는 리포지토리에서 “도움이 필요함” 또는 “유용한 첫 번째 문제” 레이블이 있는 문제 또는 끌어오기 요청을 엽니다.
- 보는 리포지토리에 커밋을 푸시합니다.{% ifversion fpt or ghes or ghec %}
- 퍼블릭 리포지토리를 포크합니다.{% endif %}
- 새 릴리스를 게시합니다.

사람을 팔로우하거나 리포지토리를 보는 데 대한 자세한 내용은 “[팔로우하는 사람](/get-started/exploring-projects-on-github/following-people)” 및 “[소셜 기능 사용](/get-started/quickstart/be-social)”을 참조하세요.

{% if for-you-feed %}
### <a name="for-you-feed"></a>피드의 경우

{% note %}

**참고:** 이 새 탭은 현재 퍼블릭 베타 버전이며 변경될 수 있습니다. 

{% endnote %}

이 피드는 {% data variables.product.product_name %}에서 네트워크를 기반으로 하는 작업 및 추천을 보여 줍니다. 영감을 주고, 최신 상태로 유지하고, 참여하려는 새 커뮤니티를 찾는 데 도움이 되는 업데이트를 제공하도록 설계되었습니다. 네트워크에는 다음이 포함됩니다.

- 별을 지정한 리포지토리
- 기여한 리포지토리
- 팔로우하거나 후원하는 사용자
- 협업한 사용자
- 팔로우하는 조직

{% endif %}

## <a name="exploring-recommended-repositories"></a>권장 리포지토리 탐색

대시보드 오른쪽의 “리포지토리 탐색” 섹션에서 커뮤니티에서 권장되는 리포지토리를 탐색할 수 있습니다. 추천은 별을 지정하거나 방문한 리포지토리, 팔로우하는 사람, 액세스 권한이 있는 리포지토리 내 활동을 기반으로 합니다.{% ifversion fpt or ghec %} 자세한 내용은 “[{% data variables.product.prodname_dotcom %}의 오픈 소스에 기여하는 방법 찾기](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github)”를 참조하세요.{% endif %}

## <a name="further-reading"></a>추가 참고 자료

- “[조직 대시보드 정보](/articles/about-your-organization-dashboard)”
