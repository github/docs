---
title: 협력자의 리포지토리에서 자신을 제거
intro: 다른 사용자의 리포지토리에서 더 이상 협력자가 되고 싶지 않은 경우 자신을 제거할 수 있습니다.
redirect_from:
  - /leave-a-collaborative-repo
  - /leave-a-repo
  - /articles/removing-yourself-from-a-collaborator-s-repo
  - /articles/removing-yourself-from-a-collaborator-s-repository
  - /articles/removing-yourself-from-a-collaborators-repository
  - /github/setting-up-and-managing-your-github-user-account/removing-yourself-from-a-collaborators-repository
  - /github/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/removing-yourself-from-a-collaborators-repository
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/removing-yourself-from-a-collaborators-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
  - Repositories
shortTitle: Remove yourself
ms.openlocfilehash: 3b760d7947d734d8fa6e1e366795ce698f9c0b7f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145165149'
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
