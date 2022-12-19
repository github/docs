---
title: 끌어오기 요청 닫기
intro: '끌어오기 요청을 [업스트림 분기에 병합](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)하지 않고 닫도록 선택할 수 있습니다. 이렇게 하면 분기에 제안된 변경 내용이 더 이상 필요하지 않거나 다른 분기에서 다른 솔루션이 제안된 경우 편리할 수 있습니다.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request
  - /articles/closing-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/closing-a-pull-request
  - /github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 51048cfd4ae917149d81a011a8ec5418ca4beb51
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145139672'
---
{% tip %}

**팁**: 끌어오기 요청을 닫고 새 분기를 여는 대신 잘못된 베이스 분기를 사용하여 끌어오기 요청을 연 경우 대신 베이스 분기를 변경할 수 있습니다. 자세한 내용은 “[끌어오기 요청의 베이스 분기 변경](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-base-branch-of-a-pull-request)”을 참조하세요.

{% endtip %}

{% data reusables.repositories.sidebar-pr %}
2. “끌어오기 요청” 목록에서 닫으려는 끌어오기 요청을 클릭합니다.
3. 끌어오기 요청 아래쪽의 주석 상자 아래에서 **끌어오기 요청 닫기** 를 클릭합니다.
  ![끌어오기 요청 닫기 단추](/assets/images/help/pull_requests/pullrequest-closebutton.png)
4. 필요에 따라 [분기를 삭제](/articles/deleting-unused-branches)합니다. 이렇게 하면 리포지토리의 분기 목록이 깔끔하게 유지됩니다.
