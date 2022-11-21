---
ms.openlocfilehash: 8492ebc0962837c6f748fe30dbca08f529c353fc
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109089"
---
{% ifversion fpt %} {% note %}

**참고:** 모든 조직에는 단일 기본 실행기 그룹이 있습니다. 엔터프라이즈 계정 및 엔터프라이즈 계정이 소유한 조직만 추가 실행기 그룹을 만들고 관리할 수 있습니다.

{% endnote %}

실행기 그룹은 실행기에 대한 액세스를 제어하는 데 사용됩니다. 조직 관리자는 실행기 그룹에 액세스할 수 있는 조직의 리포지토리를 제어하는 액세스 정책을 구성할 수 있습니다.

{% data variables.product.prodname_ghe_cloud %}를 사용하는 경우 추가 실행기 그룹을 만들 수 있습니다. 엔터프라이즈 관리자는 엔터프라이즈에서 실행기 그룹에 액세스할 수 있는 조직을 제어하는 액세스 정책을 구성할 수 있으며 조직 관리자는 엔터프라이즈 실행기 그룹에 추가 세분화된 리포지토리 액세스 정책을 할당할 수 있습니다. {% endif -%} {% ifversion ghec or ghes or ghae %}

{% data reusables.actions.runner-group-enterprise-overview %}

새 실행기가 생성되면 기본 그룹에 자동으로 할당됩니다. 실행기는 한 번에 한 그룹에만 있을 수 있습니다. 실행기를 기본 그룹에서 다른 그룹으로 이동할 수 있습니다. 자세한 내용은 [실행기를 그룹으로 이동](#moving-a-runner-to-a-group)을 참조하세요.

{% endif %}
