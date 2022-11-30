---
title: 커밋 cherry-pick
intro: 한 분기에서 특정 커밋을 선택하고 커밋을 다른 분기에 복사할 수 있습니다.
versions:
  fpt: '*'
redirect_from:
  - /desktop/contributing-and-collaborating-using-github-desktop/cherry-picking-a-commit
ms.openlocfilehash: 6dad1615b9a8c224c3648be60759b5bb6ccf0d62
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145090131'
---
## Git cherry-pick 정보

한 분기에서 커밋을 선택하여 다른 분기에서 동일한 변경 내용으로 커밋 복사본을 만들 수 있습니다. 잘못된 분기에 대한 변경 내용을 커밋하거나 다른 분기에 동일한 변경 내용을 적용하려는 경우 커밋을 cherry-pick하여 변경 내용을 다른 분기에 적용할 수 있습니다. 끌어오기 요청을 만들거나 병합할 준비가 마치기 전에 cherry-pick을 통해 특정 변경 내용을 적용할 수도 있습니다. 예를 들어 기능 분기에 버그 수정을 커밋하는 경우 프로젝트의 다른 분기에 대한 버그를 수정하여 커밋을 선택할 수 있습니다.

팀과 협업할 때 cherry-pick을 사용할 수도 있습니다. 일부 프로젝트에서는 cherry-pick 커밋에 의한 기여를 통합합니다. 자세한 내용은 Git 설명서에서 [분산 Git - 프로젝트 유지 관리](https://git-scm.com/book/en/v2/Distributed-Git-Maintaining-a-Project#_rebase_cherry_pick)를 참조하세요.

## 커밋 cherry-pick

{% data reusables.desktop.current-branch-menu %}
2. 분기 목록에서 cherry-pick하려는 커밋이 있는 분기를 클릭합니다.
{% data reusables.desktop.history-tab %}
4. {% octicon "git-branch" aria-label="The branch icon" %} **현재 분기** 메뉴로 cherry-pick하려는 커밋을 끌어서 커밋을 복사할 분기에 놓습니다.
  ![현재 분기 메뉴에서 다른 분기로 커밋 끌기](/assets/images/help/desktop/cherry-picking.png)

## 추가 참고 자료
- Git 설명서의 [git-cherry-pick](https://git-scm.com/docs/git-cherry-pick)
