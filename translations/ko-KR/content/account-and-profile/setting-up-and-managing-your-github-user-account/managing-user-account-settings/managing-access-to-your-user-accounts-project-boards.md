---
title: 사용자 계정의 프로젝트 보드에 대한 액세스 관리
intro: As a project board owner, you can add or remove a collaborator and customize their permissions to a project board.
redirect_from:
- /articles/managing-project-boards-in-your-repository-or-organization
- /articles/managing-access-to-your-user-account-s-project-boards
- /articles/managing-access-to-your-user-accounts-project-boards
- /github/setting-up-and-managing-your-github-user-account/managing-access-to-your-user-accounts-project-boards
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-access-to-your-user-accounts-project-boards
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Accounts
shortTitle: Manage access project boards
ms.openlocfilehash: 5a5cf08169fec04a896b05b7934c80cfe9f2eded
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145088889"
---
협력자는 소유한 프로젝트 보드에 대한 권한이 있는 사람입니다. 협력자의 권한은 기본적으로 읽기 권한으로 설정됩니다. 자세한 내용은 “[사용자 소유 프로젝트 보드에 대한 권한 수준](/articles/permission-levels-for-user-owned-project-boards)”을 참조하세요.

## <a name="inviting-collaborators-to-a-user-owned-project-board"></a>사용자 소유 프로젝트 보드에 협력자 초대

1. 협력자를 추가하려는 프로젝트 보드로 이동합니다.
{% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.collaborator-option %}
5. “사용자 이름, 전체 이름 또는 메일 주소로 검색”에서 협력자 이름, 사용자 이름 또는 {% data variables.product.prodname_dotcom %} 메일을 입력합니다.
   ![검색 필드에 Octocat의 사용자 이름이 입력된 협력자 섹션](/assets/images/help/projects/org-project-collaborators-find-name.png) {% data reusables.project-management.add-collaborator %}
7. 새 협력자는 기본적으로 읽기 권한이 있습니다. 필요에 따라 새 협력자 이름 옆의 드롭다운 메뉴를 사용하여 권한 수준을 다르게 선택합니다.
  ![협력](/assets/images/help/projects/user-project-collaborators-edit-permissions.png)

## <a name="removing-a-collaborator-from-a-user-owned-project-board"></a>사용자 소유 프로젝트 보드에서 협력자 제거

{% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.collaborator-option %} {% data reusables.project-management.remove-collaborator %}
