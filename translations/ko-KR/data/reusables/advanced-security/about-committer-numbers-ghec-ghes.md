---
ms.openlocfilehash: 1c270b8561ccf065c78b204011804a7222ffe270
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: "148098172"
---
{% 데이터 variables.location.product_location %}에 {% 데이터 variables.product.prodname_GH_advanced_security %}에 대한 두 개의 커밋기를 기록하고 표시합니다.

- **커밋자** 는 조직에서 하나 이상의 {% ifversion fpt or ghec %}프라이빗 {% endif %}리포지토리에 기여하고 엔터프라이즈 라이선스의 좌석을 사용하는 커밋자의 수입니다. 즉, 조직 구성원이거나 외부 협력자이거나 엔터프라이즈에서 조직에 가입하기 위한 보류 중인 초대가 있습니다.
- **이 리포지토리/조직에 고유한** 것은 이 리포지토리 또는 이 조직의 리포지토리에만 기여한 커밋자의 수입니다. 이 번호는 해당 리포지토리 또는 조직에 대해 {% data variables.product.prodname_GH_advanced_security %}를 사용하지 않도록 설정하여 해제할 수 있는 라이선스 사용자 수를 보여줍니다.

고유한 커밋자가 없는 경우 모든 활성 커밋자는 {% data variables.product.prodname_GH_advanced_security %}를 사용하는 다른 리포지토리 또는 조직에도 기여합니다. 해당 리포지토리 또는 조직에 대한 기능을 사용하지 않도록 설정해도 라이선스의 사용자는 확보되지 않습니다.

엔터프라이즈 계정에서 사용자를 제거하면 사용자의 라이선스가 24시간 이내에 해제됩니다.

{% note %}

**참고:** 사용자는 여러 리포지토리 또는 조직에 기여할 수 있습니다. 사용량은 전체 엔터프라이즈 계정에서 측정되어 사용자가 기여하는 리포지토리 또는 조직 수에 관계없이 각 구성원이 한 사용자를 사용할 수 있도록 합니다.

{% endnote %}
