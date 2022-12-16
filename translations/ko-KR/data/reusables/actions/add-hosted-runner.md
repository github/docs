---
ms.openlocfilehash: cdf55c11d2d54b94788e317961466999079debbb
ms.sourcegitcommit: 3268914369fb29540e4d88ee5e56bc7a41f2a60e
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/26/2022
ms.locfileid: "148111298"
---
1. **새 실행** 기를 클릭한 다음 **{% octicon "mark-github" aria-label="New hosted runner" %} 새 {% data variables.product.prodname_dotcom %}호스팅 실행기를** 클릭합니다.
1. 새 실행기를 구성하는 데 필요한 세부 정보를 완료합니다.

    - **이름** 새 실행기의 이름을 입력합니다. 보다 쉽게 식별하려면 하드웨어 및 운영 구성(예: `ubuntu-20.04-16core`)을 나타내야 합니다.
    - **실행기 이미지**: 사용 가능한 옵션에서 운영 체제를 선택합니다. 운영 체제를 선택하면 특정 버전을 선택할 수 있습니다.
    - **실행기 크기**: 사용 가능한 옵션의 드롭다운 목록에서 하드웨어 구성을 선택합니다.
    - **자동 크기 조정**: 언제든지 활성화할 수 있는 최대 실행기 수를 선택합니다.
    - **실행기 그룹**: 실행기가 속할 그룹을 선택합니다. 이 그룹은 수요에 맞게 확장 및 축소되므로 실행기의 여러 인스턴스를 호스트합니다.
    - **네트워킹**: {% data variables.product.prodname_ghe_cloud %}에만 해당: {% data variables.actions.hosted_runner %}의 인스턴스에 고정 IP 주소 범위를 할당할지를 선택합니다. 최대 10개의 고정 IP 주소를 사용할 수 있습니다.

1. **실행기 만들기** 를 클릭합니다.
