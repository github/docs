---
title: 개인 리포지토리에서 협력자 제거
intro: When you remove a collaborator from your project, they lose read/write access to your repository. If the repository is private and the person has created a fork, then that fork is also deleted.
redirect_from:
- /articles/how-do-i-remove-a-collaborator
- /articles/what-happens-when-i-remove-a-collaborator-from-my-private-repository
- /articles/removing-a-collaborator-from-a-private-repository
- /articles/deleting-a-private-fork-of-a-private-user-repository
- /articles/how-do-i-delete-a-fork-of-my-private-repository
- /articles/removing-a-collaborator-from-a-personal-repository
- /github/setting-up-and-managing-your-github-user-account/removing-a-collaborator-from-a-personal-repository
- /github/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/removing-a-collaborator-from-a-personal-repository
product: '{% data reusables.gated-features.user-repo-collaborators %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Accounts
- Repositories
shortTitle: Remove a collaborator
ms.openlocfilehash: eafe4f8bb1cea085910179a95f17c0b4a1358ad2
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145091424"
---
## <a name="deleting-forks-of-private-repositories"></a>프라이빗 리포지토리의 포크 삭제

협력자를 제거하면 프라이빗 리포지토리의 포크가 삭제되는 반면, 해당 사용자는 리포지토리의 로컬 복제본을 계속 유지합니다.

## <a name="removing-collaborator-permissions-from-a-person-contributing-to-a-repository"></a>리포지토리에 기여하는 사용자로부터 협력자 권한 제거

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %} {% data reusables.repositories.click-collaborators-teams %}
4. 제거할 협력자의 오른쪽에 있는 {% octicon "trash" aria-label="The trash icon" %}을 클릭합니다.
  ![협력자 제거 단추](/assets/images/help/repository/collaborator-remove.png) {% else %}
3. 왼쪽 사이드바에서 **협력자 및 팀** 을 클릭합니다.
  ![협력자 탭](/assets/images/help/repository/repo-settings-collaborators.png)
4. 제거할 협력자 옆에 있는 **X** 아이콘을 클릭합니다.
  ![제거 링크](/assets/images/help/organizations/Collaborator-Remove.png) {% endif %}

## <a name="further-reading"></a>추가 참고 자료

- “[팀에서 조직 멤버 제거](/articles/removing-organization-members-from-a-team)”
- “[조직 리포지토리에서 외부 협력자 제거](/articles/removing-an-outside-collaborator-from-an-organization-repository)”
