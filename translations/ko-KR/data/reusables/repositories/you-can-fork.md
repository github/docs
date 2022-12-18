---
ms.openlocfilehash: 62cc59d41cc165e0767c5ef9a79b2ff9145d4e67
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: "148098255"
---
{% ifversion ghae %} 엔터프라이즈에 대한 정책에서 프라이빗 및 내부 리포지토리의 포크를 허용하는 경우 리포지토리를 개인 계정 또는 리포지토리 만들기 권한이 있는 조직에 포크할 수 있습니다. 자세한 내용은 “[조직의 역할](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)”을 참조하세요.

{% elsif ghes 또는 ghec %} 리포지토리 및 엔터프라이즈 정책에 대한 설정에서 포크를 허용하는 경우 개인 계정 또는 {% 데이터 variables.location.product_location %}의 조직에 개인 또는 내부 리포지토리를 포크할 수 있습니다.

{% elsif fpt %} 프라이빗 리포지토리에 액세스할 수 있고 소유자가 포크를 허용하는 경우 개인 계정 또는 리포지토리 생성 권한이 있는 {% data variables.product.prodname_team %}의 조직에 리포지토리를 포크할 수 있습니다. {% data variables.product.prodname_free_team %}을 사용하여 개인 리포지토리를 조직에 포크할 수 없습니다. 자세한 내용은 “[GitHub 제품](/articles/githubs-products)”을 참조하세요.
{% endif %}
