---
ms.openlocfilehash: d3eda8a12037f1da8ec915c4652fa658f34fcc6b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109750"
---
실행기는 그룹이 제거되면 자동으로 기본 그룹으로 반환됩니다.

{% ifversion ghes or ghae or ghec %} {% data reusables.actions.runner-groups-navigate-to-repo-org-enterprise %}
1. 그룹 목록에서 삭제하려는 그룹의 오른쪽에 있는 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}을 클릭합니다.
2. 그룹을 제거하려면 **그룹 제거** 를 클릭합니다.
3. 확인 프롬프트를 검토하고 **이 실행기 그룹 제거** 를 클릭합니다. 이 그룹에 있는 모든 실행기는 자동으로 기본 그룹에 이동되며, 여기서 해당 그룹에 할당된 액세스 권한을 상속합니다.

{% endif %}
