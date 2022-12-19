---
ms.openlocfilehash: 1f59c95d79ab5fa0f778e05379112ec4b82afd42
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145118340"
---
{% ifversion fpt or ghec %} 암호를 입력하여 로그인하거나 계정을 만들거나 암호를 변경하면 {% data variables.product.product_name %}에서 입력한 암호가 HaveIBeenPwned와 같은 데이터 세트에 따라 약한 것으로 간주되는지 확인합니다. 이전에 해당 암호를 사용한 적이 없더라도 암호가 약한 것으로 식별될 수 있습니다.

{% data variables.product.product_name %}는 입력할 때만 암호를 검사하고 입력한 암호를 일반 텍스트로 저장하지 않습니다. 자세한 내용은 [HaveIBeenPwned](https://haveibeenpwned.com/)를 참조하세요.
{% endif %}
