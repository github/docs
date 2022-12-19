---
ms.openlocfilehash: f4e771b6d1f357f00e9e9f78d99646101618e2c4
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: "148098201"
---
{% 데이터 variables.location.product_location %}에 대한 끌어오기 요청에서 **Rebase 및 병합** 옵션을 선택하면 토픽 분기(또는 헤드 분기)의 모든 커밋이 병합 커밋 없이 개별적으로 기본 분기에 추가됩니다. 이러한 방식으로 다시 지정 및 병합 동작은 선형 프로젝트 기록을 유지 관리하여 [빨리 감기 병합](https://git-scm.com/docs/git-merge#_fast_forward_merge)과 유사합니다. 그러나 다시 지정은 새 커밋을 사용하여 기본 분기에 커밋 기록을 다시 작성하여 이를 달성합니다.

{% data variables.product.product_name %}의 다시 지정 및 병합 동작은 `git rebase`와 약간 다릅니다. {% data variables.product.prodname_dotcom %}에서의 다시 지정 및 병합은 커밋한 사람 정보를 항상 업데이트하고 새 커밋 SHA를 만듭니다. 반면에 {% data variables.product.prodname_dotcom %} 외부의 `git rebase`는 상위 커밋 위에 다시 지정이 발생할 때 커밋한 사람 정보를 변경하지 않습니다. `git rebase`에 대한 자세한 내용은 Git 설명서에서 [git-rebase](https://git-scm.com/docs/git-rebase)를 참조하세요.

끌어오기 요청을 다시 지정하고 병합하려면 리포지토리에서 [쓰기 권한](/articles/repository-permission-levels-for-an-organization/)이 있어야 하며 리포지토리에서 [다시 지정 병합을 허용](/articles/configuring-commit-rebasing-for-pull-requests/)해야 합니다.

`git rebase`의 시각적 표현은 [_Pro Git_ Book](https://git-scm.com/book/en/Git-Branching-Rebasing)에서 “Git 분기 - 다시 지정” 챕터를 참조하세요.
