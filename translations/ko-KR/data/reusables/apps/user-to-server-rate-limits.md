---
ms.openlocfilehash: 13f781a5ff82706ad125c47daecde1e12602dfd9
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: "148098225"
---
{% ifversion ghes %}기본적으로 사용자-서버{% else %}사용자-서버{% endif %} 요청은 {% ifversion ghae %}15,000{% elsif fpt or ghec or ghes %}5,000{% endif %} 요청(시간당 및 인증된 사용자당)으로 제한됩니다. 사용자 또는 사용자가 소유한 {% 데이터 variables.product.pat_generic %}이(가) 승인한 OAuth 애플리케이션의 모든 요청과 사용자의 인증 자격 증명으로 인증된 요청은 해당 사용자에 대해 시간당 {% ifversion ghae %}15,000{% elsif fpt 또는 ghec 또는 ghes %}5,000{% endif %} 요청의 동일한 할당량을 공유합니다.
