---
ms.openlocfilehash: 444e70adced8ef2f4fdc5f91b06a28bba89c898a
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: "147879262"
---
{% warning %}

**경고:**

- 프라이빗 리포지토리에 대한 사용자의 액세스를 제거하면 해당 프라이빗 리포지토리의 모든 포크가 삭제됩니다. 프라이빗 리포지토리의 로컬 클론은 유지됩니다. 프라이빗 리포지토리에 대한 팀의 액세스가 취소되거나 프라이빗 리포지토리에 대한 액세스 권한이 있는 팀이 삭제되고 팀 멤버가 다른 팀을 통해 리포지토리에 액세스할 수 없는 경우 리포지토리의 프라이빗 포크가 삭제됩니다.{% ifversion ghes %}
- [LDAP 동기화를 사용](/enterprise/admin/authentication/using-ldap#enabling-ldap-sync)하는 경우 리포지토리에서 사용자를 제거하면 액세스 권한을 잃게 되지만 해당 포크는 삭제되지 않습니다. 사용자가 3개월 이내에 원래 조직 리포지토리에 액세스 권한이 있는 팀에 추가되면 다음 동기화 시 포크에 대한 액세스 권한이 자동으로 복원됩니다.{% endif %}
- 귀하는 리포지토리에 대한 액세스 권한을 상실한 사용자가 기밀 정보 또는 지적 재산권을 삭제하도록 할 책임이 있습니다.

- 프라이빗{% ifversion ghes or ghae or ghec %} 또는 내부 리포지토리{% endif %}에 대한 관리자 권한이 있는 사람은 해당 리포지토리의 포크를 허용하지 않을 수 있으며 조직 소유자는 조직의 모든 프라이빗{% ifversion ghes or ghae or ghec %} 또는 내부 리포지토리{% endif %}의 분기를 허용하지 않을 수 있습니다. 자세한 내용은 “[조직의 포크 정책 관리](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization)” 및 “[리포지토리에 대한 포크 정책 관리](/github/administering-a-repository/managing-the-forking-policy-for-your-repository)”를 참조하세요.

{% endwarning %}
