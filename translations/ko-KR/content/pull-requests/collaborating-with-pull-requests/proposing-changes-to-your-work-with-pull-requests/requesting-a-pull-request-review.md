---
title: 끌어오기 요청 검토 요청
intro: 끌어오기 요청을 만든 후 특정 사용자에게 제안된 변경 내용을 검토하도록 요청할 수 있습니다. 조직 구성원인 경우 특정 팀에 변경 내용을 검토하도록 요청할 수도 있습니다.
product: '{% data reusables.gated-features.multiple-pr-reviewers %}'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review
  - /articles/requesting-a-pull-request-review
  - /github/collaborating-with-issues-and-pull-requests/requesting-a-pull-request-review
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Request a PR review
ms.openlocfilehash: b7b797d7e9ad2fdf9c1df29e7e5aad66f942b538
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145139592'
---
리포지토리는 개인 계정(단일 개별 소유자) 또는 조직 계정(수많은 협력자 또는 유지 관리자가 있는 공유 계정)에 속합니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom %} 계정 유형](/get-started/learning-about-github/types-of-github-accounts)”을 참조하세요. 개인 계정이 소유한 리포지토리의 소유자 및 협력자는 끌어오기 요청 검토를 할당할 수 있습니다. 심사 권한이 있는 조직 구성원은 끌어오기 요청에 대한 검토자를 할당할 수도 있습니다. 

검토자를 끌어오기 요청에 할당하려면 리포지토리에 대한 쓰기 권한이 필요합니다. 리포지토리 액세스에 대한 자세한 내용은 “[조직의 리포지토리 역할](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)”을 참조하세요. 쓰기 권한이 있는 경우 리포지토리에 대한 읽기 권한이 있는 모든 사용자를 검토자로 할당할 수 있습니다.

쓰기 권한이 있는 조직 구성원은 리포지토리에 대한 읽기 권한이 있는 모든 사람 또는 팀에 끌어오기 요청 검토를 할당할 수도 있습니다. 요청받은 검토자 또는 팀은 끌어오기 요청 검토를 요청받았다는 알림을 받게 됩니다. 팀에 검토를 요청하고 코드 검토 할당이 사용하도록 설정된 경우 특정 구성원에게 요청하고 팀이 검토자로 제거됩니다. 자세한 내용은 “[팀의 코드 검토 설정 관리](/organizations/organizing-members-into-teams/managing-code-review-settings-for-your-team)”를 참조하세요.

{% note %}

**참고:** 끌어오기 요청 작성자는 리포지토리에 대한 쓰기 액세스 권한이 있는 리포지토리 소유자 또는 협력자가 아니면 검토를 요청할 수 없습니다.

{% endnote %}

추천 사람 또는 특정 사람에게 검토를 요청할 수 있습니다. 제안된 검토자는 [git 블레임 데이터](/articles/tracking-changes-in-a-file/)를 기반으로 합니다. 검토를 요청하는 경우 리포지토리에 대한 읽기 권한이 있는 다른 사람은 끌어오기 요청을 계속 검토할 수 있습니다. 다른 사람이 끌어오기 요청을 검토하고 사용자가 필요한 내용을 변경했으면 동일한 검토자에게 검토를 다시 요청할 수 있습니다. 요청받은 검토자가 검토를 제출하지 않고 끌어오기 요청이 리포지토리의 [병합 가능성 요구 사항](/articles/defining-the-mergeability-of-pull-requests)을 충족하는 경우 끌어오기 요청을 병합할 수 있습니다.

{% data reusables.repositories.sidebar-pr %}
1. 끌어오기 요청 목록에서 특정 사람 또는 팀에 검토를 요청할 끌어오기 요청을 클릭합니다.
2. 오른쪽 사이드바에서 **Reviewers**(검토자)로 이동합니다.  
3. **Reviewers**(검토자) 아래의 추천 사람에게 검토를 요청하려면 사용자 이름 옆에 있는 **Request**(요청)를 클릭합니다.
 ![오른쪽 사이드바의 검토자 요청 아이콘](/assets/images/help/pull_requests/request-suggested-review.png)
5. 필요에 따라 추천 사람이 아닌 다른 사람에게 검토를 요청하려면 **Reviewers**(검토자)를 클릭한 다음 드롭다운 메뉴에서 이름을 클릭합니다.
  ![오른쪽 사이드바의 Reviewers(검토자) 톱니 모양 아이콘](/assets/images/help/pull_requests/request-a-review-not-suggested.png)
6. 필요에 따라 검토하려는 사람 또는 팀의 이름을 알고 있는 경우 **Reviewers**(검토자)를 클릭한 다음 변경 내용 검토를 요청하려는 사람의 사용자 이름이나 팀의 이름을 입력합니다. 팀 이름 또는 사용자 이름을 클릭하여 검토를 요청합니다.
  ![검토자의 사용자 이름을 입력하고 검토자의 이름을 사용하여 드롭다운할 필드](/assets/images/help/pull_requests/choose-pull-request-reviewer.png)
7. 끌어오기 요청을 검토하고 필요한 내용을 변경한 후 검토자에게 끌어오기 요청을 다시 검토하도록 요청할 수 있습니다. 오른쪽 사이드바에서 **Reviewers**(검토자)로 이동하고 검토하기를 원하는 검토자의 이름 옆에 있는 {% octicon "sync" aria-label="The sync icon" %} 아이콘을 클릭합니다.
  ![오른쪽 사이드바의 동기화 다시 검토 아이콘](/assets/images/help/pull_requests/request-re-review.png)

## 추가 참고 자료

- “[끌어오기 요청 검토 정보](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)”
