---
title: 문제성 댓글 관리
intro: '{% ifversion fpt or ghec %}숨기기, 편집,{% else %}편집{% endif %} 또는 문제, 끌어오기 요청 및 커밋에 대한 주석을 삭제할 수 있습니다.'
redirect_from:
  - /articles/editing-a-comment
  - /articles/deleting-a-comment
  - /articles/managing-disruptive-comments
  - /github/building-a-strong-community/managing-disruptive-comments
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Manage comments
ms.openlocfilehash: f27a310b0ee299839967f6db402c6fdebbc129f0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145117655'
---
## 댓글 숨기기

리포지토리에 대한 쓰기 권한이 있는 {% ifversion fpt or ghec %}조직 조정자 및 모든 사용자{% else %}모든 사용자{% endif %}는 이슈, 끌어오기 요청, 커밋에 대한 댓글을 숨길 수 있습니다.

댓글이 주제를 벗어나거나 만료되었거나 해결된 경우 댓글을 숨겨 논의의 초점을 유지하거나 끌어오기 요청을 더 쉽게 탐색하고 검토할 수 있도록 할 수 있습니다. 숨겨진 댓글은 최소화되지만 리포지토리에 대한 읽기 권한이 있는 사용자는 이를 펼칠 수 있습니다.

![최소화된 댓글](/assets/images/help/repository/hidden-comment.png)

1. 숨기려는 댓글로 이동합니다.
2. 댓글의 오른쪽 상단에서 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}을 클릭한 다음 **숨기기** 를 클릭합니다.
  ![편집, 숨기기, 삭제 옵션을 보여주는 더보기 아이콘 및 댓글 조정 메뉴](/assets/images/help/repository/comment-menu.png)
3. “이유 선택” 드롭다운 메뉴에서 댓글을 숨기는 이유를 클릭합니다. 그런 다음 **댓글 숨기기** 를 클릭합니다.
  {% ifversion fpt or ghec %} ![댓글을 숨기는 이유 선택 드롭다운 메뉴](/assets/images/help/repository/choose-reason-for-hiding-comment.png) {% else %} ![댓글을 숨기는 이유 선택 드롭다운 메뉴](/assets/images/help/repository/choose-reason-for-hiding-comment-ghe.png) {% endif %}

## 댓글 숨기기 해제

리포지토리에 대한 쓰기 권한이 있는 {% ifversion fpt or ghec %}조직 조정자 및 모든 사용자{% else %}모든 사용자{% endif %}는 이슈, 끌어오기 요청, 커밋에 대한 댓글의 숨기기를 해제할 수 있습니다.

1. 숨기기를 해제하려는 댓글로 이동합니다.
2. 댓글의 오른쪽 상단에서 **{% octicon "fold" aria-label="The fold icon" %} 댓글 표시** 를 클릭합니다.
   ![댓글 텍스트 표시하기](/assets/images/help/repository/hidden-comment-show.png)
3. 펼쳐진 댓글의 오른쪽에서 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}을 클릭한 다음 **숨기기를 해제** 합니다.
   ![편집, 숨기기 해제, 삭제 옵션을 보여주는 더보기 아이콘 및 댓글 조정 메뉴](/assets/images/help/repository/comment-menu-hidden.png)

## 댓글 편집

리포지토리에 대한 쓰기 권한이 있는 모든 사용자는 이슈, 끌어오기 요청, 커밋에 대한 댓글을 편집할 수 있습니다.

대화에 관련이 없으며 커뮤니티 사용 규정{% ifversion fpt or ghec %} 또는 GitHub [커뮤니티 지침](/free-pro-team@latest/github/site-policy/github-community-guidelines){% endif %}을 위반하는 댓글은 편집하고 콘텐츠는 삭제하는 것이 좋습니다.

경우에 따라 편집 내용과 해당 근거를 명확하게 나타내는 것이 합리적일 수 있습니다.

즉, 리포지토리에 대한 읽기 권한이 있는 모든 사용자는 댓글의 편집 기록을 볼 수 있습니다. 댓글 상단에 있는 **편집됨** 드롭다운에는 각 편집의 사용자 및 타임스탬프를 보여 주는 편집 기록이 포함되어 있습니다.

![콘텐츠가 편집되었다는 메모가 추가된 댓글](/assets/images/help/repository/content-redacted-comment.png)

## 중요한 정보 수정

댓글 작성자와 리포지토리에 대한 쓰기 권한이 있는 모든 사용자는 댓글의 편집 기록에서 중요한 정보를 삭제할 수도 있습니다. 자세한 내용은 “[댓글 변경 내용 추적](/communities/moderating-comments-and-conversations/tracking-changes-in-a-comment)”을 참조하세요.

1. 편집하려는 댓글로 이동합니다.
2. 댓글의 오른쪽 상단에서 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}을 클릭한 다음 **편집** 을 클릭합니다.
  ![편집, 숨기기, 삭제, 보고 옵션을 보여주는 더보기 아이콘 및 댓글 조정 메뉴](/assets/images/help/repository/comment-menu.png)
3. 댓글 창에서 제거할 콘텐츠를 삭제한 다음 `[REDACTED]`를 입력하여 바꿉니다.
  ![콘텐츠가 편집된 주석 창](/assets/images/help/issues/redacted-content-comment.png)
4. 댓글 하단에서, 댓글을 편집했음을 밝히는 메모를 입력하고, 필요에 따라 댓글을 편집한 이유를 입력합니다.
  ![콘텐츠가 편집되었다는 메모가 추가된 댓글 창](/assets/images/help/issues/note-content-redacted-comment.png)
5. **댓글 업데이트** 를 클릭합니다.

## 댓글 삭제

리포지토리에 대한 쓰기 권한이 있는 모든 사용자는 이슈, 끌어오기 요청, 커밋에 대한 댓글을 삭제할 수 있습니다. 조직 담당자, 팀 유지 관리자, 댓글 작성자는 팀 페이지에서 댓글을 삭제할 수도 있습니다.

댓글에 이슈 또는 끌어오기 요청의 대화에 참여하는 건설적인 콘텐츠가 포함된 경우에는 댓글을 편집할 수 있습니다.

댓글을 삭제하는 것은 조정자로서의 최후의 수단입니다. 댓글 전체가 대화에 건설적인 콘텐츠를 제공하지 않고 커뮤니티의 사용 규정{% ifversion fpt or ghec %} 또는 GitHub [커뮤니티 지침](/free-pro-team@latest/github/site-policy/github-community-guidelines){% endif %}을 위반하는 경우 댓글을 삭제하는 것이 적절합니다.

댓글을 삭제하면 리포지토리에 대한 읽기 권한이 있는 모든 사용자가 볼 수 있는 타임라인 이벤트가 생성됩니다. 그러나 댓글을 삭제한 사용자의 사용자 이름은 리포지토리에 대한 쓰기 권한이 있는 사용자에게만 표시됩니다. 쓰기 권한이 없는 사용자에게는 타임라인 이벤트가 익명으로 표시됩니다.

![삭제된 댓글에 대한 익명화된 타임라인 이벤트](/assets/images/help/issues/anonymized-timeline-entry-for-deleted-comment.png)

{% note %}

**참고:** 이슈 또는 끌어오기 요청의 최초 댓글(또는 본문)은 삭제할 수 없습니다. 대신, 이슈 및 끌어오기 요청 본문을 편집하여 원치 않는 콘텐츠를 삭제할 수 있습니다.

{% endnote %}

### 댓글을 삭제하는 단계

1. 삭제하려는 댓글로 이동합니다.
2. 댓글의 오른쪽 상단에서 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}을 클릭한 다음 **삭제** 를 클릭합니다.
  ![편집, 숨기기, 삭제, 보고 옵션을 보여주는 더보기 아이콘 및 댓글 조정 메뉴](/assets/images/help/repository/comment-menu.png)
3. 필요에 따라 댓글을 삭제했다는 사실과 그 이유를 나타내는 댓글을 작성합니다.

{% ifversion fpt or ghec %}
## 추가 참고 자료
- “[조직에서 조정자 관리](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-moderators-in-your-organization)” {% endif %} 
