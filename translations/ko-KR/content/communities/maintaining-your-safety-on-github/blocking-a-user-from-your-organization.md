---
title: 조직에서 사용자 차단
intro: 조직 소유자와 진행자는 조직의 구성원이 아닌 모든 사용자가 조직의 리포지토리에서 공동 작업을 하지 못하도록 차단할 수 있습니다.
redirect_from:
  - /articles/blocking-a-user-from-your-organization
  - /github/building-a-strong-community/blocking-a-user-from-your-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Block from your org
ms.openlocfilehash: 527ce4fcf92946836f7a3d93e5caf07193561d4b
ms.sourcegitcommit: 1529de77bfcbe45519131b5f5fb3ab319758c2d2
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/14/2022
ms.locfileid: '148164357'
---
조직 설정 내에서 또는 사용자가 작성한 특정 주석에서 멤버가 아닌 사용자를 차단할 수 있습니다. 주석에서 사용자를 차단하는 경우 차단된 이유와 그 이유를 설명하는 알림을 사용자에게 보내도록 선택할 수 있습니다. 그렇지 않으면 차단했다는 사실을 사용자에게 직접 알리지 않습니다. 차단된 사용자는 여전히 기존 콘텐츠를 삭제할 수 있습니다.

{% data reusables.organizations.blocking-a-user %}

{% tip %}

**팁:** 열띤 대화로 인해 사용자를 차단하는 경우 협력자만 주석을 달 수 있도록 대화를 잠그는 것이 좋습니다. 자세한 내용은 “[대화 잠금](/communities/moderating-comments-and-conversations/locking-conversations)”을 참조하세요.

{% endtip %}

조직에서 사용자를 차단할 때 다음을 수행합니다.
- 사용자가 조직의 리포지토리 감시를 중지합니다.
- 사용자의 별 및 문제 할당이 리포지토리에서 제거됩니다.
- 조직의 리포지토리에서 토론 또는 주석에 대한 사용자의 투표가 삭제됩니다.
- 사용자는 조직의 리포지토리의 협력자에서 제거됩니다.
- 조직의 리포지토리에 대한 사용자의 기여는 더 이상 해당 사용자의 기여로 계산되지 않습니다.
- 차단된 사용자에 대한 보류 중인 리포지토리 또는 조직 초대가 취소됩니다.

조직에서 사용자를 차단한 후에는 다음을 수행할 수 없습니다.
- 주석에서 조직의 리포지토리 교차 참조
- 조직의 리포지토리를 포크, 시청, 고정 또는 별표로 표시

조직의 리포지토리에서 차단된 사용자도 다음을 수행할 수 없습니다.
- 미해결 문제
- 끌어오기 요청 보내기, 닫기 또는 병합
- 문제, 끌어오기 요청 또는 커밋에 대한 주석
- Wiki 페이지 추가 및 편집

## 주석에서 사용자 차단

1. 차단하려는 작성자의 주석으로 이동합니다.
2. 주석의 오른쪽 위에서 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}을 클릭한 다음 **사용자 차단** 을 클릭합니다.
![사용자 차단 옵션을 보여주는 가로 케밥 아이콘 및 주석 검토 메뉴](/assets/images/help/repository/comment-menu-block-user.png)
3. 차단에 대한 시간 제한을 설정하려면 사용자 차단 드롭다운 메뉴를 사용하고 사용자를 차단하려는 시간을 선택합니다.
![사용자 차단 드롭다운 메뉴의 차단 시간 제한](/assets/images/help/organizations/org-block-options-menu-from-comment.png)
4. 사용자가 조직에서 작성한 모든 주석을 숨기려면 **이 사용자의 주석 숨기기** 를 선택하고 이유를 선택합니다.
![차단 사용자 드롭다운 메뉴에서 알림 보내기](/assets/images/help/organizations/org-block-options-menu-hide-user-comments.png)
5. 사용자에게 차단되는 이유를 알리려면 **이 사용자에게 알림 보내기** 를 선택합니다.
![차단 사용자 드롭다운 메뉴에서 알림 보내기](/assets/images/help/organizations/org-block-options-menu-send-notification.png)
6. 사용자를 차단하려면 **조직에서 사용자 차단** 을 클릭하거나 **조직에서 사용자 차단을 클릭하고 메시지를 보냅니다**.
![사용자 차단 단추](/assets/images/help/organizations/org-block-user-button-in-comment.png)

## 조직 설정에서 사용자 차단

1. 조직 멤버를 차단하려면 먼저 조직에서 [사용자를 제거](/articles/removing-a-member-from-your-organization)합니다.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.block_users %}
6. “사용자 차단”에서 차단하려는 사용자의 사용자 이름을 입력합니다.
![사용자 이름 필드](/assets/images/help/organizations/org-block-username-field.png)
7. 차단에 대한 시간 제한을 설정하려면 차단 옵션 드롭다운 메뉴를 사용하고 사용자를 차단하려는 시간을 선택합니다.
![차단 옵션 드롭다운 메뉴](/assets/images/help/organizations/org-block-options-menu.png)
8. **사용자 차단** 을 클릭합니다.
![차단 단추](/assets/images/help/organizations/org-block-user-button.png)

## 추가 참고 자료

- “[조직에서 차단된 사용자 보기](/communities/maintaining-your-safety-on-github/viewing-users-who-are-blocked-from-your-organization)”
- “[조직에서 사용자 차단 해제](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-organization)”
- “[개인 계정에서 사용자 차단](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-personal-account)”
- “[개인 계정에서 사용자 차단 해제](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-personal-account)”
- “[남용 또는 스팸 보고](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)”
