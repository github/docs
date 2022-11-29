---
title: 토론 관리
intro: '토론을 분류, 강조, 전송 또는 삭제할 수 있습니다.'
permissions: Repository administrators and people with write or greater access to a repository can manage discussions in the repository. Repository administrators and people with write or greater access to the source repository for organization discussions can manage discussions in the organization.
versions:
  feature: discussions
shortTitle: Manage discussions
redirect_from:
  - /discussions/managing-discussions-for-your-community/managing-discussions-in-your-repository
ms.openlocfilehash: e5e1474648973c90d16e8998db18518331233aa3
ms.sourcegitcommit: 1529de77bfcbe45519131b5f5fb3ab319758c2d2
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/14/2022
ms.locfileid: '148164341'
---
## 토론 관리 정보

{% data reusables.discussions.about-discussions %} 토론에 관한 자세한 내용은 “[토론 정보](/discussions/collaborating-with-your-community-using-discussions/about-discussions)”를 참조하세요.

조직 소유자는 조직이 소유한 리포지토리에서 토론을 만드는 데 필요한 권한을 선택할 수 있습니다. 마찬가지로 조직 토론을 만드는 데 필요한 권한을 선택하기 위해 조직 소유자는 원본 리포지토리에서 필요한 권한을 변경할 수 있습니다. 자세한 내용은 “[조직의 리포지토리에 대한 토론 만들기 관리](/organizations/managing-organization-settings/managing-discussion-creation-for-repositories-in-your-organization)”를 참조하세요.

토론 유지 관리자는 커뮤니티 리소스를 만들어 전체 프로젝트 목표에 부합하는 토론을 장려하고 협력자를 위한 친숙한 공개 포럼을 유지 관리할 수 있습니다. 협력자가 따라야 할{% ifversion fpt or ghec %} 사용 규정 또는 {% endif %}기여 지침을 만들면 협업적이고 생산적인 포럼을 원활하게 진행할 수 있습니다. 커뮤니티 리소스를 만드는 방법에 관한 자세한 내용은{% ifversion fpt or ghec %} “[프로젝트에 사용 규정 추가](/communities/setting-up-your-project-for-healthy-contributions/adding-a-code-of-conduct-to-your-project)” 및{% endif %} “[리포지토리 참가자에 대한 지침 설정](/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors)”을 참조하세요.

토론에서 작업할 준비가 된 아이디어 또는 버그가 생성되는 경우 토론에서 새 문제를 만들 수 있습니다. 자세한 내용은 “[어셈블리 만들기](/issues/tracking-your-work-with-issues/creating-an-issue#creating-an-issue-from-a-discussion)”를 참조하세요.

리포지토리 또는 조직에 대한 토론 목록 맨 위에 토론을 고정할 수 있습니다. {% ifversion discussions-category-specific-pins %} 토론을 특정 범주에 고정할 수도 있습니다. {% endif %} 자세한 내용은 "[토론 고정"을 참조하세요](/discussions/managing-discussions-for-your-community/managing-discussions#pinning-a-discussion).

정상적인 토론을 원활하게 진행하는 방법에 관한 자세한 내용은 “[의견 및 대화 조정](/communities/moderating-comments-and-conversations)”을 참조하세요.

{% data reusables.discussions.you-can-label-discussions %}

## 필수 조건

리포지토리에서 토론을 관리하려면 리포지토리에서 {% data variables.product.prodname_discussions %}을 사용하도록 설정해야 합니다. 자세한 내용은 “[리포지토리에 {% data variables.product.prodname_discussions %} 사용 또는 사용 안 함](/github/administering-a-repository/enabling-or-disabling-github-discussions-for-a-repository)”을 참조하세요.

조직에서 토론을 관리하려면 조직에서 {% data variables.product.prodname_discussions %}을 사용하도록 설정해야 합니다. 자세한 내용은 “[조직에 대해 {% data variables.product.prodname_discussions %} 사용 또는 사용 안 함](/organizations/managing-organization-settings/enabling-or-disabling-github-discussions-for-an-organization)”을 참조하세요.

## 토론 범주 변경

커뮤니티 멤버가 관련 토론을 찾을 수 있도록 토론을 분류할 수 있습니다. 자세한 내용은 “[토론 범주 관리](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions)”를 참조하세요.

토론을 다른 범주로 이동할 수도 있습니다. 설문 조사 범주 간에 토론을 이동하는 것은 불가능합니다.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.discussions.discussions-tab %} {% data reusables.discussions.click-discussion-in-list %}
1. 오른쪽 사이드바에서 “범주” 오른쪽에 있는 {% octicon "gear" aria-label="The gear icon" %}을 클릭합니다.

   ![기어 아이콘이 있는 "범주"의 스크린샷](/assets/images/help/discussions/category-in-sidebar.png)

1. 범주를 클릭합니다.

   !["범주 변경" 드롭다운 메뉴의 스크린샷](/assets/images/help/discussions/change-category-drop-down.png)

## 토론 고정

{% ifversion discussions-category-specific-pins %} 리포지토리 또는 조직에 대한 토론 목록 위에 토론을 고정할 수 있습니다. 토론을 특정 범주에 고정할 수도 있습니다. 전역적으로 고정된 토론은 특정 범주에 고정된 토론 외에도 표시됩니다.

전역적으로 고정된 토론과 토론이 아이디어 범주에 고정된 경우의 모양입니다.

![전역적으로 고정된 토론 및 아이디어 범주에 고정된 토론의 스크린샷](/assets/images/help/discussions/overview-pinned-discussions.png)

### 전역적으로 토론 고정
{% endif %}

리포지토리 또는 조직에 대한 토론 목록 위에 최대 4개의 중요한 토론을 고정할 수 있습니다. 


{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.discussions.discussions-tab %} {% data reusables.discussions.click-discussion-in-list %}
1. 오른쪽 사이드바에서 {% octicon "pin" aria-label="The pin icon" %} **토론 고정** 을 클릭합니다.
{% ifversion discussions-category-specific-pins %}

   ![토론을 위한 오른쪽 사이드바의 "토론 고정" 옵션 스크린샷](/assets/images/help/discussions/click-pin-discussion-with-category-pins.png){% else %}

   ![토론을 위한 오른쪽 사이드바의 "토론 고정" 옵션 스크린샷](/assets/images/help/discussions/click-pin-discussion.png){% endif %}

1. 필요에 따라 고정된 토론의 모양을 사용자 지정합니다.

   ![고정된 토론에 대한 사용자 지정 옵션의 스크린샷](/assets/images/help/discussions/customize-pinned-discussion.png)

1. **토론 고정** 을 클릭합니다.

   ![고정된 토론에 대한 사용자 지정 옵션 아래의 "토론 고정" 단추 스크린샷](/assets/images/help/discussions/click-pin-discussion-button.png)

{% ifversion discussions-category-specific-pins %}
### 범주에 토론 고정

특정 범주의 토론 목록 위에 최대 4개의 중요한 토론을 고정할 수 있습니다. 

{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.discussions.discussions-tab %} {% data reusables.discussions.click-discussion-in-list %}
1. 오른쪽 사이드바에서 {% octicon "pin" aria-label="The pin icon" %} **토픽을 CATEGORY에 고정을** 클릭합니다.
   
   ![토론을 위한 오른쪽 사이드바의 "범주에 토론 고정" 옵션의 스크린샷](/assets/images/help/discussions/pin-discussion-to-category.png)

2. 확인하려면 **범주에 고정을** 클릭합니다.

   !["범주에 토론 고정" 모달의 스크린샷](/assets/images/help/discussions/pin-discussion-to-category-modal.png)

{% endif %}

## 고정된 토론 편집

고정된 토론을 편집해도 토론 범주는 변경되지 않습니다. 자세한 내용은 “[토론 범주 관리](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions)”를 참조하세요.

{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.discussions.discussions-tab %} {% data reusables.discussions.click-discussion-in-list %}
1. 오른쪽 사이드바에서 {% octicon "pencil" aria-label="The pencil icon" %} **고정된 토론 편집** 을 클릭합니다.
  {% ifversion discussions-category-specific-pins %}

   ![토론을 위한 오른쪽 사이드바의 "고정된 토론 편집" 옵션 스크린샷](/assets/images/help/discussions/edit-pinned-discussion-with-category-pins.png) {% else %}


   ![토론을 위한 오른쪽 사이드바의 "고정된 토론 편집" 옵션 스크린샷](/assets/images/help/discussions/click-edit-pinned-discussion.png){% endif %}

1. 고정된 토론의 모양을 사용자 지정합니다.

  ![고정된 토론에 대한 사용자 지정 옵션의 스크린샷](/assets/images/help/discussions/customize-pinned-discussion.png)

1. **토론 고정** 을 클릭합니다.

  ![고정된 토론에 대한 사용자 지정 옵션 아래의 "토론 고정" 단추 스크린샷](/assets/images/help/discussions/click-pin-discussion-button.png)

## 토론 고정 해제

{% ifversion discussions-category-specific-pins %}

리포지토리 또는 조직에 대한 토론 목록 또는 특정 범주의 토론 목록에서 토론을 고정 해제할 수 있습니다.

### 전역적으로 고정된 토론 고정 해제

전역적으로 고정된 토론을 고정 해제할 수 있습니다. 이렇게 하면 토론이 삭제되지 않지만 토론은 더 이상 토론 목록 위에 표시되지 않습니다.
{% endif %}

{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.discussions.discussions-tab %} {% data reusables.discussions.click-discussion-in-list %}
1. 오른쪽 사이드바에서 {% octicon "pin" aria-label="The pin icon" %} **토론 고정 해제** 를 클릭합니다.

  ![토론을 위한 오른쪽 사이드바의 "토론 고정 해제" 옵션 스크린샷](/assets/images/help/discussions/click-unpin-discussion.png)

1. 경고를 읽은 다음, **토론 고정 해제** 를 클릭합니다.

  ![모달의 경고 아래에 있는 "토론 고정 해제" 단추의 스크린샷](/assets/images/help/discussions/click-unpin-discussion-button.png)

{% ifversion discussions-category-specific-pins %}
### 범주에서 토론 고정 해제

특정 범주에 고정된 토론을 고정 해제할 수 있습니다. 이렇게 하면 토론이 삭제되지 않지만 토론은 더 이상 범주의 맨 위에 표시되지 않습니다.

{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.discussions.discussions-tab %} {% data reusables.discussions.click-discussion-in-list %}
1. 오른쪽 사이드바에서 {% octicon "pin" aria-label="The pin icon" %} **이 범주에서 토론 고정 해제** 를 클릭합니다.

   ![토론을 위한 오른쪽 사이드바의 "이 범주에서 토론 고정 해제" 옵션 스크린샷](/assets/images/help/discussions/unpin-discussion-from-category.png)

1. 경고를 읽은 다음 **이 범주에서 고정 해제** 를 클릭합니다.

   !["이 범주에서 이 토론 고정 해제" 모달의 "이 범주에서 고정 해제" 단추의 스크린샷](/assets/images/help/discussions/unpin-discussion-from-category-modal.png)

{% endif %}

## 토론 전송

토론을 전송하려면 토론을 전송하려는 리포지토리에서 토론을 만들 수 있는 권한이 있어야 합니다. 토론을 조직에 전송하려면 조직의 토론에 대한 원본 리포지토리에서 토론을 만들 수 있는 권한이 있어야 합니다. 동일한 사용자 또는 조직 계정이 소유한 리포지토리 간에만 토론을 전송할 수 있습니다. 프라이빗{% ifversion ghec or ghes %} 또는 내부{% endif %} 리포지토리에서 퍼블릭 리포지토리로 토론을 전송할 수 없습니다.

{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.discussions.discussions-tab %} {% data reusables.discussions.click-discussion-in-list %}
1. 오른쪽 사이드바에서 {% octicon "arrow-right" aria-label="The right arrow icon" %} {% ifversion discussions-category-specific-pins %}**이 토론 전송**{% else %}**토론 전송**{% endif %}을 클릭합니다.
{% ifversion discussions-category-specific-pins %}

   ![토론을 위한 오른쪽 사이드바의 "토론 전송" 옵션 스크린샷](/assets/images/help/discussions/transfer-discussion-with-category-pin.png) {% else %}

  
   ![토론을 위한 오른쪽 사이드바의 "토론 전송" 옵션 스크린샷](/assets/images/help/discussions/click-transfer-discussion.png){% endif %}

1. **리포지토리 선택** 드롭다운을 선택하고 토론을 전송하려는 리포지토리를 선택합니다. 토론을 조직에 전송하려면 조직의 토론에 대한 원본 리포지토리를 선택합니다.

   !["리포지토리 선택" 드롭다운, "리포지토리 찾기" 검색 필드 및 목록의 리포지토리 스크린샷](/assets/images/help/discussions/use-choose-a-repository-drop-down.png)

1. **토론 전송** 을 클릭합니다.

   !["토론 전송" 단추의 스크린샷](/assets/images/help/discussions/click-transfer-discussion-button.png)

## 토론 삭제

{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.discussions.discussions-tab %} {% data reusables.discussions.click-discussion-in-list %}
1. 오른쪽 사이드바에서 {% octicon "trash" aria-label="The trash arrow icon" %} **토론 삭제** 를 클릭합니다.
{% ifversion discussions-category-specific-pins %}

   ![토론을 위한 오른쪽 사이드바의 "토론 삭제" 옵션 스크린샷](/assets/images/help/discussions/delete-discussion-with-category-pins.png){% else %}


   ![토론을 위한 오른쪽 사이드바의 "토론 삭제" 옵션 스크린샷](/assets/images/help/discussions/click-delete-discussion.png){% endif %}

1. 경고를 읽은 다음, **이 토론 삭제** 를 클릭합니다.

   ![모달의 경고 아래에 있는 "이 토론 삭제" 단추의 스크린샷](/assets/images/help/discussions/click-delete-this-discussion-button.png)

## 레이블에 따라 문제 변환

동일한 레이블의 모든 문제를 토론으로 대량 변환할 수 있습니다. 이 레이블의 향후 문제도 구성한 토론 및 범주로 자동으로 변환됩니다.

1. {% data variables.location.product_location %}에서 리포지토리의 기본 페이지로 이동하거나 조직 토론의 경우 원본 리포지토리로 이동합니다.
{% data reusables.repositories.sidebar-issues %} {% data reusables.project-management.labels %}
1. 문제로 변환하려는 레이블 옆에 있는 **문제 변환** 을 클릭합니다.
1. **범주 선택** 드롭다운 메뉴를 선택하고 토론할 범주를 클릭합니다.
1. **I understand, convert this issue to a discussion(알겠습니다. 이 문제를 토론으로 변환합니다)** 을 클릭합니다.
