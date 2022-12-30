---
ms.openlocfilehash: a9ba68f182b48a4186a4ae63909ef4e146d7c392
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109134"
---
## 오류: "현재 시간이 NotBefore 조건보다 이전입니다."

이 오류는 IdP 및 일반적으로 자체 호스팅 IdP에서 발생하는 {% data variables.product.product_name %} 간의 시간 차이가 너무 큰 경우에 발생할 수 있습니다.

{% ifversion ghes %}이 문제를 방지하려면 가능하면 어플라이언스가 IdP와 동일한 NTP(네트워크 시간 프로토콜) 원본을 가리키는 것이 좋습니다. {% endif %}이 오류가 발생하면 {% ifversion ghes %}어플라이언스{% else %}IdP{% endif %}의 시간이 NTP 서버와 올바르게 동기화되었는지 확인합니다.

ADFS를 IdP로 사용하는 경우 {% data variables.product.prodname_dotcom %}에 대해서도 ADFS에서 `NotBeforeSkew`를 1분으로 설정합니다. `NotBeforeSkew`가 0으로 설정된 경우 밀리초를 포함하여 매우 작은 시간 차이라도 인증 문제가 발생할 수 있습니다.
