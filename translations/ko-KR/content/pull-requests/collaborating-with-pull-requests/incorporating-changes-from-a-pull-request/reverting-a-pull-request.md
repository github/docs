---
title: 끌어오기 요청 되돌리기
intro: 끌어오기 요청이 업스트림 분기에 병합된 후에 되돌릴 수 있습니다.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/incorporating-changes-from-a-pull-request/reverting-a-pull-request
  - /github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/reverting-a-pull-request
  - /articles/reverting-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/reverting-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 9e94b6e9358089da8f62ff5152800e14556db3e7
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145139663'
---
## 끌어오기 요청 되돌리기 정보

{% data variables.product.product_name %}에서 끌어오기 요청을 되돌리면 원래 병합된 끌어오기 요청에서 병합 커밋을 한 번 되돌리는 새 끌어오기 요청이 만들어집니다. 끌어오기 요청을 되돌리려면 리포지토리에 [쓰기 권한](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)이 있어야 합니다. 

## 끌어오기 요청 되돌리기

{% note %}

**참고:** 다음 중 하나가 true인 경우 끌어오기 요청에서 개별 커밋을 되돌려야 할 수 있습니다.

- 끌어오기 요청을 되돌리면 병합 충돌이 발생합니다.
- 원본 끌어오기 요청은 원래 {% data variables.product.product_name %}에 병합되지 않았습니다. 예를 들어 누군가가 명령줄에서 빠른 전달 병합을 사용하여 끌어오기 요청을 병합했을 수 있습니다.

Git을 사용하여 개별 커밋을 수동으로 되돌리는 방법에 대한 자세한 내용은 Git 설명서의 [Git 되돌리기](https://git-scm.com/docs/git-revert.html)를 참조하세요.

{% endnote %}

{% data reusables.repositories.sidebar-pr %}
2. “끌어오기 요청” 목록에서 되돌리려는 끌어오기 요청을 클릭합니다.
3. 끌어오기 요청의 아래쪽 가까이에 있는 **되돌리기** 를 클릭합니다. **되돌리기** 옵션이 표시되지 않으면 리포지토리 관리자에게 쓰기 권한을 요청해야 합니다.
  ![끌어오기 요청 되돌리기 링크](/assets/images/help/pull_requests/revert-pull-request-link.png)
4. 그에 따른 끌어오기 요청을 병합합니다. 자세한 내용은 “[끌어오기 요청 병합](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)”을 참조하세요.
