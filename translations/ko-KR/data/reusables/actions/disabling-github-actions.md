---
ms.openlocfilehash: 711e10a8499559c88910eb24f4fb17301e13f221
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: "148097992"
---
기본적으로 {% 데이터 variables.product.prodname_actions %}에서 {% 데이터 variables.product.prodname_actions %}을(를) 사용하도록 설정한 후 {% ifversion variables.location.product_location ghes 또는 ghae %}은(는) 모든 리포지토리 및 조직에서 {% elsif fpt 또는 ghec %}{% 데이터 variables.product.prodname_actions %}{% endif %}을(를) 사용하도록 설정됩니다. {% data variables.product.prodname_actions %}를 사용하지 않거나 {% ifversion ghec or ghes or ghae %}엔터프라이즈{% else %}조직{% endif %}의 작업{% ifversion actions-workflow-policy %} 및 재사용 가능한 워크플로{% endif %}로 제한하도록 선택할 수 있습니다.
