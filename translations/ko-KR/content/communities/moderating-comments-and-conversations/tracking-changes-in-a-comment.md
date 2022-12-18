---
title: 댓글의 변경 내용 추적
intro: 설명의 편집 기록을 보거나 주석의 편집 기록에서 중요한 정보를 삭제할 수 있습니다.
redirect_from:
  - /articles/tracking-changes-in-a-comment
  - /github/building-a-strong-community/tracking-changes-in-a-comment
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Track comment changes
ms.openlocfilehash: 7da6b53f9b98ade8ee73411a80aaf2ff3f412700
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145090221'
---
## 댓글의 편집 기록 세부 정보 보기

리포지토리에 대한 읽기 권한이 있는 모든 사용자는 댓글의 편집 기록을 볼 수 있습니다.

1. 편집 기록을 보려는 댓글로 이동합니다.
{% data reusables.repositories.edited-comment-list %}

## 댓글 기록에서 중요한 정보 삭제

댓글 작성자 및 리포지토리에 대한 쓰기 권한이 있는 모든 사용자는 댓글의 편집 기록에서 중요한 정보를 삭제할 수 있습니다.

댓글의 편집 기록에서 중요한 정보를 삭제해도 댓글 기록에 편집한 사용자와 편집 시점이 표시되지만 편집 내용은 확인할 수 없습니다.

1. 편집 기록에서 중요한 정보를 삭제하려는 댓글로 이동합니다.
{% data reusables.repositories.edited-comment-list %}
3. 편집 기록 창의 오른쪽 상단에서 **옵션** 을 클릭합니다. 그런 다음 **기록에서 수정 내용 삭제** 를 클릭하여 추가되는 콘텐츠를 보여 주는 diff를 삭제합니다.
  ![댓글 편집 세부 정보 삭제](/assets/images/help/repository/delete-comment-edit-details.png)
4. **확인** 을 클릭하여 삭제를 확인합니다.

## 추가 참고 자료

{% ifversion fpt or ghec %}“[남용 또는 스팸 신고](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)”{% endif %}
- “[댓글 편집](/articles/editing-a-comment)”
