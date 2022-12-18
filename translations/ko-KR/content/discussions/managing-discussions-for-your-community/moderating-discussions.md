---
title: 토론 중재
intro: '주석을 답변으로 표시하고, 토론을 잠그거나 잠금 해제하고, 문제를 토론으로 변환하고, {% ifversion fpt or ghec %} 커뮤니티의 사용 규정{% elsif ghes > 3.5 %} 조직의 기여 지침{% endif %}에 맞지 않는 주석, 토론 및 범주를 편집하거나 삭제하여 건강한 공동 작업을 촉진할 수 있습니다.'
permissions: People with triage access to a repository can moderate discussions in the repository. People with triage access to the source repository for organization discussions can moderate discussions in the organization.
versions:
  feature: discussions
ms.openlocfilehash: 4d09537a3c38d2eb9ac2650c48f2c44c1b0cbd95
ms.sourcegitcommit: 34d500fe45b362043b4b4685d6705a7bfb484d11
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/15/2022
ms.locfileid: '148164475'
---
## 토론 중재 정보

{% data reusables.discussions.about-discussions %} 리포지토리에 대한 심사 권한이 있는 경우 의견을 답변으로 표시하고, 더 이상 도움이 되지 않거나 커뮤니티에 피해를 주는 토론을 잠그고, 아이디어가 아직 개발 초기 단계에 있을 때 이슈를 토론으로 변환하여 리포지토리의 토론을 조정하는 데 도움이 될 수 있습니다. 마찬가지로 조직 토론을 위한 원본 리포지토리에 대한 심사 권한이 있는 경우 해당 조직에 대한 토론을 조정할 수 있습니다.

## 의견을 답변으로 표시

{% data reusables.discussions.marking-a-comment-as-an-answer %}

## 토론 잠금

전체 대화가 건설적이지 않거나 커뮤니티의 사용 규정 또는 {% data variables.product.prodname_dotcom %}의 [커뮤니티 지침](/free-pro-team@latest/github/site-policy/github-community-guidelines)을 위반하는 경우 대화를 잠글 수 있습니다. 커뮤니티에 대한 공지 사항으로 사용하려는 토론에 대해 의견을 달 수 없도록 방지하기 위해 대화를 잠글 수도 있습니다. 대화를 잠그면 리포지토리에 대한 쓰기 액세스 권한이 있는 사용자 또는 조직 토론을 위한 원본 리포지토리는 여전히 토론에 대한 의견을 제시할 수 있습니다.

{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.discussions.discussions-tab %}
1. 토론 목록에서 잠그려는 토론을 클릭합니다.
  ![토론 잠금](/assets/images/help/discussions/unanswered-discussion.png)
1. 토론의 오른쪽 여백에서 **대화 잠금** 을 클릭합니다.
1. 대화 잠금에 대한 정보를 읽고 **Lock conversation on this discussion(이 토론에 대한 대화 잠금)** 을 클릭합니다.
1. 대화의 잠금을 해제할 준비가 되면 **대화 잠금 해제** 를 클릭한 다음 **Unlock conversation on this discussion(이 토론에 대한 대화 잠금 해제)** 을 클릭합니다.

## 이슈를 토론으로 변환

이슈를 토론으로 변환하면 이슈의 콘텐츠를 사용하여 토론이 자동으로 생성됩니다. 리포지토리 또는 조직 토론을 위한 원본 리포지토리에 대한 쓰기 권한이 있는 사용자는 레이블에 따라 문제를 대량으로 변환할 수 있습니다. 자세한 내용은 “[토론 관리](/discussions/managing-discussions-for-your-community/managing-discussions)”를 참조하세요.

{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.repositories.sidebar-issues %}
1. 이슈 목록에서 변환하려는 이슈를 클릭합니다.
1. 이슈의 오른쪽 여백에서 **토론으로 변환** 을 클릭합니다.
1. **범주 선택** 드롭다운 메뉴를 선택하고 토론할 범주를 클릭합니다.
1. **I understand, convert this issue to a discussion(알겠습니다. 이 문제를 토론으로 변환합니다)** 을 클릭합니다.

{% ifversion discussions-hide-comments-on-block %}
## 조직에서 사용자 차단

조직 소유자와 중재자는 자신의 의견이 커뮤니티의 행동 강령과 일치하지 않는 경우 조직에서 사용자를 차단할 수 있습니다. 사용자를 차단하면 더 이상 토론에 대해 주석을 달 수 없습니다. 조직에서 사용자가 수행한 모든 주석을 숨길 수도 있습니다. 자세한 내용은 “[조직에서 사용자 차단](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)”을 참조하세요.

{% data reusables.organizations.blocking-a-user %} {% endif %}
