---
ms.openlocfilehash: 255dcb0346e9413e32492c34a7724df6284cd325
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: "146455743"
---
{% data variables.product.prodname_GH_advanced_security %}에 우선 순위를 지정할 리포지토리 및 조직을 결정할 때 이를 검토하고 다음 사항을 식별해야 합니다.

- 회사의 성공에 가장 중요한 코드베이스. 취약한 코드, 하드 코딩된 비밀 또는 안전하지 않은 종속성의 도입이 회사에 가장 큰 영향을 미치는 프로젝트입니다.
- 커밋 빈도가 가장 높은 코드베이스. 가장 적극적으로 개발된 프로젝트이므로 보안 문제가 발생할 위험이 더 높습니다.

조직 또는 리포지토리에 대해 {% data variables.product.prodname_GH_advanced_security %}를 사용하도록 설정한 경우 고유한 커밋자에 대한 청구 없이 추가할 수 있는 다른 코드베이스를 평가합니다. 마지막으로, 나머지 중요하고 사용 중인 코드베이스를 검토합니다. {% ifversion fpt or ghes or ghec %} 라이선스의 사용자 수를 늘리려면 {% data variables.contact.contact_enterprise_sales %}에 문의하세요. {% endif %}
