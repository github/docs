---
title: GitHub Discussions 빠른 시작
intro: '기존 리포지토리 또는 조직에서 {% data variables.product.prodname_discussions %}를 사용하도록 설정하고 커뮤니티와 대화를 시작합니다.'
allowTitleToDifferFromFilename: true
versions:
  feature: discussions
shortTitle: Quickstart
ms.openlocfilehash: 0b43d9ce559e31c93002cc8cccef51b8284672c1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410213'
---
## 소개

{% data variables.product.prodname_discussions %}는 오픈 소스 또는 내부 프로젝트를 중심으로 커뮤니티를 위한 공동 커뮤니케이션 포럼입니다. 토론은 투명하고 액세스할 수 있어야 하며 프로젝트 보드에서 추적할 필요가 없는 대화를 위한 기능이지만 {% data variables.product.prodname_github_issues %}와 달리 코드와 관련이 없습니다. 토론은 공개 포럼에서 편안하고 원활하게 대화를 이어갈 수 있도록 합니다.

토론은 소통하고 정보를 찾을 수 있는 중앙 집중식 영역을 제공하여 공동으로 더욱 합심하여 대화할 수 있는 공간을 제공합니다.

## 리포지토리에서 {% data variables.product.prodname_discussions %} 사용

리포지토리 소유자 및 쓰기 액세스 권한이 있는 사용자는 퍼블릭{% ifversion ghes > 3.5 %}, 내부{% endif %} 및 프라이빗 리포지토리의 커뮤니티에 대해 {% data variables.product.prodname_discussions %}를 사용하도록 설정할 수 있습니다. 토론의 표시 유형은 토론이 만들어지는 리포지토리에서 상속됩니다.

{% data variables.product.prodname_discussions %}를 처음 사용하도록 설정하면 환영 게시물을 구성하도록 초대됩니다.

{% data reusables.repositories.navigate-to-repo %}
1. 리포지토리 이름 아래에서 {% octicon "gear" aria-label="The gear icon" %} **설정** 을 클릭합니다.
![퍼블릭 설정 단추](/assets/images/help/discussions/public-repo-settings.png)
1. “기능”에서 **토론 설정** 을 클릭합니다.
  ![리포지토리에 대한 GitHub Discussions를 사용하거나 사용하지 않도록 설정하기 위한 “기능” 아래에 토론 설정 단추](/assets/images/help/discussions/setup-discussions-button.png)
1. “Start a new discussion” 아래에서 커뮤니티에 대해 설정하려는 리소스 및 어조에 맞춰 템플릿을 편집합니다.
1. **토론 시작** 을 클릭합니다.
  ![“토론 시작” 버튼](/assets/images/help/discussions/new-discussion-start-discussion-button.png)

## 조직에서 {% data variables.product.prodname_discussions %} 사용

조직 소유자는 조직에 대해 {% data variables.product.prodname_discussions %}을 사용하도록 설정할 수 있습니다.

{% data reusables.discussions.about-organization-discussions %}

{% data reusables.discussions.enabling-or-disabling-github-discussions-for-your-organization %}

## 토론에 대한 기여 환영

환영 게시물을 작성하고 해당 게시물을 {% data variables.product.prodname_discussions %} 페이지에 고정하여 커뮤니티를 환영하고 리포지토리 또는 조직에서 소통하는 새로운 방법을 도입할 수 있습니다. 토론을 고정하고 잠그면 다른 사람들이 게시물이 공지 사항임을 알 수 있습니다. 공지 사항을 사용하여 사람들을 더 많은 리소스에 연결하고 커뮤니티에서 토론을 열기 위한 지침을 제공할 수 있습니다. 토론 고정에 대한 자세한 내용은 “[토론 관리](/discussions/managing-discussions-for-your-community/managing-discussions#pinning-a-discussion)”를 참조하세요.


## contributor를 위한 커뮤니티 지침 설정

리포지토리 토론의 경우 협력자가 리포지토리와 관련된 의미 있고 유용한 대화를 하도록 권장하는 기여 지침을 설정할 수 있습니다. 또한 리포지토리의 추가 정보를 업데이트하여 협력자가 이슈 또는 토론을 열어야 하는 시점에 대한 기대치를 전달할 수 있습니다. 프로젝트 지침을 제공하는 방법에 대한 자세한 내용은 {% ifversion fpt or ghec %}“[프로젝트에 사용 규정 추가](/communities/setting-up-your-project-for-healthy-contributions/adding-a-code-of-conduct-to-your-project)” 및 {% endif %}“[정상적인 기여를 위한 프로젝트 설정](/communities/setting-up-your-project-for-healthy-contributions)”을 참조하세요.

조직 토론의 경우 조직 프로필 추가 정보를 만들어 조직과 소통하는 방법에 대한 정보를 공유할 수 있습니다. 자세한 내용은 “[조직의 프로필 사용자 지정](/organizations/collaborating-with-groups-in-organizations/customizing-your-organizations-profile)”을 참조하세요.

## 새 토론 만들기

리포지토리를 볼 수 있는 인증된 사용자는 해당 리포지토리에서 토론을 만들 수 있습니다. 마찬가지로 조직 토론은 원본 리포지토리를 기반으로 하므로 원본 리포지토리를 볼 수 있는 인증된 사용자는 해당 조직에서 토론을 만들 수 있습니다.

{% data reusables.discussions.starting-a-discussion %}

## 새 설문 조사 만들기

리포지토리를 볼 수 있는 인증된 사용자는 누구나 설문 조사를 만들 수 있습니다. 마찬가지로 조직 토론은 원본 리포지토리를 기반으로 하므로 원본 리포지토리를 볼 수 있는 인증된 사용자는 해당 조직에서 설문 조사를 만들 수 있습니다.

{% data reusables.discussions.starting-a-poll %}

## 토론 구성

리포지토리 소유자 및 리포지토리에 대한 쓰기 액세스 권한이 있는 사용자는 토론을 체계적으로 유지하기 위해 새 범주를 만들 수 있습니다. 마찬가지로 조직 토론은 원본 리포지토리를 기반으로 하므로 리포지토리 소유자와 원본 리포지토리에 대한 쓰기 권한이 있는 사용자는 조직 토론을 위한 새 범주를 만들 수 있습니다.

새 토론을 만들고 참여하는 협력자는 토론을 가장 관련성이 큰 기존 범주로 그룹화할 수 있습니다. 토론은 만든 후에 다시 분류할 수도 있습니다. 자세한 내용은 “[토론 범주 관리](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions)”를 참조하세요.

{% data reusables.discussions.you-can-label-discussions %}

## 건전한 대화 홍보

리포지토리 또는 조직 토론을 위한 원본 리포지토리에 대한 쓰기 권한이 있는 사용자는 토론을 고정하고, 더 이상 유용하지 않거나 커뮤니티에 피해를 주는 토론을 삭제하고, 조직이 소유한 더 관련성이 큰 리포지토리로 토론을 전송하여 중요한 대화를 노출하는 데 도움이 될 수 있습니다. 자세한 내용은 “[토론 관리](/discussions/managing-discussions-for-your-community/managing-discussions)”를 참조하세요.

리포지토리 또는 조직 토론을 위한 원본 리포지토리에 대한 심사 권한이 있는 사용자는 주석을 답변으로 표시하고, 더 이상 유용하지 않거나 커뮤니티에 피해를 주는 토론을 잠그고, 아이디어가 아직 개발 초기 단계에 있을 때 이슈를 토론으로 변환하여 프로젝트의 토론을 조정하는 데 도움이 될 수 있습니다. 자세한 내용은 “[토론 조정](/discussions/managing-discussions-for-your-community/moderating-discussions)”을 참조하세요.

## 다음 단계

범위가 명확하고 개념에서 현실로 아이디어를 이전하는 명확한 경로가 있으면 이슈를 만들고 진행 상황 추적을 시작할 수 있습니다. 토론에서 이슈를 만드는 방법에 대한 자세한 내용은 “[토론 중재](/discussions/managing-discussions-for-your-community/moderating-discussions)”를 참조하세요.
