---
ms.openlocfilehash: b0dde5c70f7349ae325893afa36e21fbda77d884
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145110732"
---
{% ifversion fpt or ghec or ghes < 3.5 %} {% data variables.product.prodname_registry %}는 {% data variables.product.prodname_free_user %}, {% data variables.product.prodname_pro %}, 조직용 {% data variables.product.prodname_free_team %}, {% data variables.product.prodname_team %}, {% data variables.product.prodname_ghe_cloud %}, {% data variables.product.prodname_ghe_server %} 3.0 이상 및 {% data variables.product.prodname_ghe_managed %}를 이용해 사용할 수 있습니다.{% ifversion ghes %} {% data variables.product.prodname_ghe_server %} 인스턴스 업그레이드에 관한 자세한 내용은 "[새 릴리스로 업그레이드 정보](/admin/overview/about-upgrades-to-new-releases)"를 참조하세요. [{% data variables.enterprise.upgrade_assistant %}](https://support.github.com/enterprise/server-upgrade)를 참조하여 현재 릴리스 버전의 업그레이드 경로를 확인하세요.{% endif %} {% ifversion fpt or ghec %}
<br>{% data variables.product.prodname_registry %}는 레거시 리포지토리별 플랜을 사용하는 계정이 소유한 프라이빗 리포지토리에서 사용할 수 없습니다. 또한 레거시 리포지토리별 플랜을 사용하는 계정은 리포지토리별로 요금이 청구되므로 {% data variables.product.prodname_container_registry %}에 액세스할 수 없습니다. {% data reusables.gated-features.more-info %} {% endif %} {% endif %}
