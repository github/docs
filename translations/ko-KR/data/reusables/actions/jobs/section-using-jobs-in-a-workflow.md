---
ms.openlocfilehash: 2bdab95a93e5eff4bc68d8da73fd9d7d9a93580a
ms.sourcegitcommit: 96bbb6b8f3c9172209d80cb1502017ace3019807
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: "147879705"
---
워크플로 실행은 기본적으로 병렬로 실행되는 하나 이상의 `jobs`로 구성됩니다. 작업을 순차적으로 실행하려면 `jobs.<job_id>.needs` 키워드를 사용하여 다른 작업에 대한 종속성을 정의할 수 있습니다.

각 작업은 `runs-on`으로 지정된 실행기 환경에서 실행됩니다.

워크플로 사용량 한도 내에 있는 한 개수에 제한 없이 작업을 실행할 수 있습니다. 자세한 내용은 {% ifversion fpt or ghec or ghes %}{% data variables.product.prodname_dotcom %} 호스트 러너의 경우 “[사용 제한 및 청구](/actions/reference/usage-limits-billing-and-administration)” 및 {% endif %} 셀프 호스트 사용 제한은 “[셀프 호스트 실행기 정보](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits){% ifversion fpt or ghec or ghes %}”를 참조하세요.{% elsif ghae %}.”{% endif %}

워크플로 실행에서 실행 중인 작업의 고유 식별자를 찾아야 하는 경우 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API를 사용할 수 있습니다. 자세한 내용은 “[워크플로 작업](/rest/reference/actions#workflow-jobs)”을 참조하세요.
