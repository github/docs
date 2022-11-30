---
title: 대화 잠금
intro: '리포지토리 소유자 및 협력자, 그리고 리포지토리에 대한 쓰기 권한이 있는 사용자는 과열된 상호작용을 멈추기 위해 문제에 대한 대화, 끌어오기 요청, 커밋을 영구적으로 또는 일시적으로 잠글 수 있습니다.'
redirect_from:
  - /articles/locking-conversations
  - /github/building-a-strong-community/locking-conversations
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
ms.openlocfilehash: 22d2f5cf16ce0a4c9cdda077d4ddd2bde789245f
ms.sourcegitcommit: bafb4fe4c8c086a510eafee6e54a2d172fd3a01b
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/16/2022
ms.locfileid: '148046578'
---
전체 대화가 건설적이지 않거나 커뮤니티의 사용 규정{% ifversion fpt or ghec %} 또는 GitHub [커뮤니티 지침](/free-pro-team@latest/github/site-policy/github-community-guidelines){% endif %}을 위반하는 경우 대화를 잠글 수 있습니다. 대화를 잠글 때 이유를 지정할 수 있으며, 이는 공개적으로 표시됩니다.

대화를 잠그면 리포지토리에 대한 읽기 권한이 있는 모든 사용자가 볼 수 있는 타임라인 이벤트가 생성됩니다. 그러나 대화를 잠근 사람의 사용자 이름은 리포지토리에 대한 쓰기 액세스 권한이 있는 사용자에게만 표시됩니다. 쓰기 권한이 없는 사용자에게는 타임라인 이벤트가 익명으로 표시됩니다.

![잠긴 대화에 대한 익명화된 타임라인 이벤트](/assets/images/help/issues/anonymized-timeline-entry-for-locked-conversation.png)

대화가 잠겨 있는 동안에는 [쓰기 권한이 있는 사용자](/articles/repository-permission-levels-for-an-organization/)와 [리포지토리 소유자 및 협업자](/articles/permission-levels-for-a-user-account-repository/#collaborator-access-for-a-repository-owned-by-a-personal-account)만 댓글을 추가, 숨기기, 삭제할 수 있습니다. 잠긴 대화의 반응과 투표는 모든 사용자에 대해 비활성화됩니다.

보관되지 않은 리포지토리에서 잠긴 대화를 검색하려면 검색 한정자 `is:locked` 및 `archived:false`를 사용할 수 있습니다. 대화는 보관된 리포지토리에 자동으로 잠깁니다. 자세한 내용은 “[이슈 검색 및 끌어오기 요청](/search-github/searching-on-github/searching-issues-and-pull-requests#search-based-on-whether-a-conversation-is-locked)”을 참조하세요.

1. 필요에 따라 대화를 잠그는 이유를 설명하는 댓글을 작성합니다.
2. 이슈 또는 끌어오기 요청의 오른쪽 여백 또는 커밋 페이지의 댓글 상자 위에서 **대화 잠금** 을 클릭합니다.
![대화 잠금 링크](/assets/images/help/repository/lock-conversation.png)
3. 필요에 따라 대화를 잠그는 이유를 선택합니다.
![대화를 잠그는 이유 메뉴](/assets/images/help/repository/locking-conversation-reason-menu.png)
4. 대화 잠금에 대한 정보를 읽고 **이 이슈에 대한 대화 잠금**, **이 끌어오기 요청에 대한 대화 잠금** 또는 **이 커밋에 대한 대화 잠금** 을 클릭합니다.
![이유 대화 상자에서 잠금 확인](/assets/images/help/repository/lock-conversation-confirm-with-reason.png)
5. 대화의 잠금을 해제할 준비가 되면 **대화 잠금 해제** 를 클릭합니다.
![대화 잠금 해제 링크](/assets/images/help/repository/unlock-conversation.png)

## 추가 참고 자료

- “[정상적인 기여를 위한 프로젝트 설정](/communities/setting-up-your-project-for-healthy-contributions)”
- “[템플릿을 사용하여 유용한 이슈 및 끌어오기 요청 권장](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)”
- “[중단 주석 관리](/communities/moderating-comments-and-conversations/managing-disruptive-comments)”{% ifversion fpt or ghec %}
- “[{% data variables.product.prodname_dotcom %}에서 안전 유지](/communities/maintaining-your-safety-on-github)”
- “[남용 또는 스팸 보고](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)”
- “[리포지토리 내 상호 작용 제한](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)”{% endif %}
