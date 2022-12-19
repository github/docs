---
ms.openlocfilehash: f7065b89a94ee3b76a4956a0cf06ea53c03187e2
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/27/2022
ms.locfileid: "148114073"
---
{% ifversion not fpt %} 조직 소유자 및 보안 관리자는 조직 수준 보안 개요{% ifversion ghec or ghes > 3.4 또는 ghae > 3.4 %}에 액세스하고 엔터프라이즈 수준 보안 개요를 통해 여러 조직에서 경고를 볼 수 있습니다. 엔터프라이즈 소유자는 조직 소유자 또는 보안 관리자{% endif %}로 추가된 조직의 리포지토리 및 경고만 볼 수 있습니다. {% ifversion ghec or ghes > 3.6 or ghae > 3.6 %} 조직 구성원은 조직 수준 보안 개요에 액세스하여 관리자 권한이 있거나 보안 경고에 대한 액세스 권한이 부여된 리포지토리에 대한 결과를 볼 수 있습니다. {% else %} 팀 구성원은 팀에 관리자 권한이 있는 리포지토리에 대한 보안 개요를 볼 수 있습니다. {% endif %} {% endif %}
