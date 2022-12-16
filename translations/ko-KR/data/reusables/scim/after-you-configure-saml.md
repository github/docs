---
ms.openlocfilehash: 10f8ff754031aa529cae9525cffee31506b6b8f6
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/09/2022
ms.locfileid: "148193396"
---
기본적으로 IdP는 애플리케이션을 할당하거나 할당을 취소할 때 {% data variables.product.product_name %}와 자동으로 통신하지 않습니다. {% data variables.product.product_name %}{% ifversion fpt or ghec %}는 {% ifversion fpt or ghec %}누군가가{% endif %} {% data variables.product.product_name %}를 처음 탐색하고 IdP를 통해 인증하여 로그인할 때 SAML JIT(Just-in-Time) 프로비저닝을 사용하여 {% else %}사용자 계정을 만듭니다{% endif %}. {% data variables.product.product_name %}에 대한 액세스 권한을 부여할 때 사용자에게 수동으로 알려야 할 수 있으며 오프보딩하는 동안 {% endif %}{% data variables.product.product_name %}에서 {% ifversion fpt or ghec %}의 프로비전 해제 액세스{% else %}에서 사용자 계정을 수동으로 비활성화해야 합니다.

또는 SAML JIT 프로비저닝 대신 SCIM을 사용하여 {% ifversion ghec %}프로비전 또는 프로비전 해제{% elsif ghae 또는 scim-for-ghes %}만들기 또는 일시 중단{% endif %} {% ifversion fpt or ghec %) {% data variables.product.prodname_dotcom_the_website %} {% else %}사용자 계정에서 엔터프라이즈가 소유한 조직에 대한 액세스 및 IdP에서 애플리케이션을 할당하거나 할당 취소한 후 {% data variables.location.product_location %} {% endif %}에 대한 액세스 권한을 자동으로 부여하거나 거부합니다. {% ifversion scim-for-ghes %} {% data variables.product.product_name %}에 대한 SCIM은 현재 프라이빗 베타 버전이며 변경될 수 있습니다. {% endif %}
