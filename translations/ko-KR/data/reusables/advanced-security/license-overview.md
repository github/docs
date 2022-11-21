---
ms.openlocfilehash: 5d75f2a8b4c2c9bfdf7b491d23f76f4f820b98e7
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145091235"
---
{% data variables.product.prodname_GH_advanced_security %}에 대한 각 라이선스는 해당 기능을 사용할 수 있는 최대 계정 수 또는 최대 사용자 수를 지정합니다. 기능이 활성화된 하나 이상의 리포지토리에 대한 각 활성 커밋자는 한 사용자를 사용합니다. 커밋자는 원래 작성된 시기에 관계없이 지난 90일 이내에 커밋 중 하나가 리포지토리에 푸시된 경우 활성으로 간주됩니다.

{% note %}

**참고:** 활성 커밋자는 코드가 {% data variables.product.product_name %}에 푸시된 경우 커밋 작성자 정보와 타임스탬프를 모두 사용하여 계산됩니다.

- 사용자가 {% data variables.product.prodname_dotcom %}에 코드를 푸시하면 코드가 {% data variables.product.prodname_dotcom %}에 새로 추가되지 않은 경우에도 해당 푸시에서 코드를 작성한 모든 사용자가 {% data variables.product.prodname_GH_advanced_security %} 사용자 수를 계산합니다.

- 사용자는 항상 최근 베이스에서 분기를 만들거나 푸시하기 전에 분기를 다시 지정해야 합니다. 이렇게 하면 지난 90일 동안 커밋하지 않은 사용자가 {% data variables.product.prodname_GH_advanced_security %} 사용자를 차지하지 않습니다.

{% endnote %}

