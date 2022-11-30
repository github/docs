---
ms.openlocfilehash: 1ba4f5242c21b752ac7e3bd9a424e0c8c4e96b2a
ms.sourcegitcommit: 72e1c60459a610944184ca00e3ae60bf1f5fc6db
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/09/2022
ms.locfileid: "147878614"
---
{% warning %}

**사용 중단 알림:** {% data variables.product.prodname_dotcom %}는 쿼리 매개 변수를 사용한 API에 대한 인증을 중단합니다. API에 대한 인증은 [HTTP 기본 인증](/rest/overview/other-authentication-methods#via-oauth-and-personal-access-tokens)을 사용하여 수행해야 합니다.{% ifversion fpt or ghec %} 쿼리 매개 변수를 사용한 API에 대한 인증은 2021년 5월 5일부터 더 이상 작동하지 않습니다. {% endif %}  예정된 브라운아웃을 포함한 자세한 내용은 [블로그 게시물](https://developer.github.com/changes/2020-02-10-deprecating-auth-through-query-param/)을 참조하세요.

{% ifversion ghes or ghae %} 쿼리 매개 변수를 사용한 API에 대한 인증은 사용 가능한 동안에도 보안 문제로 인해 더 이상 지원되지 않습니다. 대신 통합자가 헤더에서 액세스 토큰, `client_id` 또는 `client_secret`을 이동할 것을 권장합니다. {% data variables.product.prodname_dotcom %}는 고급 알림이 포함된 쿼리 매개 변수에 의한 인증을 제거한다고 발표할 것입니다. {% endif %}

{% endwarning %}
