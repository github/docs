---
title: 리포지토리 삭제
intro: 조직 소유자이거나 리포지토리 또는 포크에 대한 관리자 권한이 있는 경우 리포지토리 또는 포크를 삭제할 수 있습니다. 포크된 리포지토리를 삭제해도 업스트림 리포지토리는 삭제되지 않습니다.
redirect_from:
  - /delete-a-repo
  - /deleting-a-repo
  - /articles/deleting-a-repository
  - /github/administering-a-repository/deleting-a-repository
  - /github/administering-a-repository/managing-repository-settings/deleting-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 53e6b69113a5483ea37c7ddd34dee7921959b62a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145136882'
---
{% data reusables.organizations.owners-and-admins-can %}에서 조직 리포지토리를 삭제합니다. **멤버가 이 조직의 리포지토리를 삭제하거나 전송할 수 있도록 허용** 이 비활성화된 경우 조직 소유자만 조직 리포지토리를 삭제할 수 있습니다. {% data reusables.organizations.new-repo-permissions-more-info %}

{% ifversion not ghae %}퍼블릭 리포지토리를 삭제해도 리포지토리의 포크는 삭제되지 않습니다.{% endif %}

{% warning %}

**경고**:

- 리포지토리를 삭제하면 릴리스 첨부 파일 및 팀 권한이 **영구적으로** 삭제됩니다. 이 작업은 취소할 수 **없습니다**.
- 프라이빗{% ifversion ghes or ghec or ghae %} 또는 내부{% endif %} 리포지토리를 삭제하면 리포지토리의 모든 포크가 삭제됩니다.

{% endwarning %}

삭제된 일부 리포지토리는 삭제 후 90일 이내에 복원할 수 있습니다. {% ifversion ghes or ghae %}사이트 관리자가 삭제된 리포지토리를 복원할 수 있습니다. 자세한 내용은 “[삭제된 리포지토리 복원](/admin/user-management/managing-repositories-in-your-enterprise/restoring-a-deleted-repository)”을 참조하세요. {% else %}자세한 내용은 “[삭제된 리포지토리 복원](/articles/restoring-a-deleted-repository)”을 참조하세요.{% endif %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
2. 위험 영역에서 **이 리포지토리 삭제** 를 클릭합니다.
   ![리포지토리 삭제 단추](/assets/images/help/repository/repo-delete.png)
3. **경고를 읽습니다**.
4. 올바른 리포지토리를 삭제하고 있는지 확인하려면 삭제할 리포지토리의 이름을 입력합니다.
   ![삭제 레이블 지정](/assets/images/help/repository/repo-delete-confirmation.png)
5. **결과를 이해하고 있으며 이 리포지토리를 삭제합니다.** 를 클릭합니다.
