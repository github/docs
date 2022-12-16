---
title: 협력자의 리포지토리에서 자신을 제거
intro: If you no longer want to be a collaborator on someone else's repository, you can remove yourself.
redirect_from:
- /leave-a-collaborative-repo
- /leave-a-repo
- /articles/removing-yourself-from-a-collaborator-s-repo
- /articles/removing-yourself-from-a-collaborator-s-repository
- /articles/removing-yourself-from-a-collaborators-repository
- /github/setting-up-and-managing-your-github-user-account/removing-yourself-from-a-collaborators-repository
- /github/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/removing-yourself-from-a-collaborators-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Accounts
- Repositories
shortTitle: Remove yourself
ms.openlocfilehash: dc9739d84d1794e3111f3b61e0dfd9a7c4bec11b
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145090086"
---
{% data reusables.user-settings.access_settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
2. 사이드바의 “코드, 계획, 자동화” 섹션에서 **{% octicon "repo" aria-label="The repo icon" %} 리포지토리** 를 클릭합니다.
{% else %}
2. 왼쪽 사이드바에서 **리포지토리** 를 클릭합니다.
  ![리포지토리 탭](/assets/images/help/settings/settings-sidebar-repositories.png) {% endif %}
3. 나가려는 리포지토리 옆에 있는 **나가기** 를 클릭합니다.
  ![나가기 단추](/assets/images/help/repository/repo-leave.png)
4. 경고를 주의 깊게 읽은 다음 “네, 이 리포지토리를 그대로 둡니다.”를 클릭합니다.
  ![나가기 경고 대화 상자](/assets/images/help/repository/repo-leave-confirmation.png)
