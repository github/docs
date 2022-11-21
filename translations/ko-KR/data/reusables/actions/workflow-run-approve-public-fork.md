---
ms.openlocfilehash: 59e70683dad451b603d2d34286976bfaa8d1d9c8
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: "147881060"
---
누구나 퍼블릭 리포지토리를 포크한 다음 리포지토리의 {% data variables.product.prodname_actions %} 워크플로에 대한 변경 내용을 제안하는 끌어오기 요청을 제출할 수 있습니다. 포크의 워크플로는 비밀과 같은 중요한 데이터에 액세스할 수 없지만 악의적인 목적으로 수정된 경우 유지 관리자에게 성가신 일이 될 수 있습니다.

이를 방지하기 위해 일부 외부 기여자로부터 퍼블릭 리포지토리에 대한 끌어오기 요청 워크플로는 자동으로 실행되지 않으며 먼저 승인되어야 할 수 있습니다. 기본적으로 모든 최초 참가자는 워크플로를 실행하려면 승인이 필요합니다.

{% note %}

**참고:** `pull_request_target` 이벤트에 의해 트리거되는 워크플로는 기본 분기의 컨텍스트에서 실행됩니다. 기본 분기는 신뢰할 수 있는 것으로 간주되므로 이러한 이벤트에 의해 트리거되는 워크플로는 승인 설정에 관계없이 항상 실행됩니다.

{% endnote %}
