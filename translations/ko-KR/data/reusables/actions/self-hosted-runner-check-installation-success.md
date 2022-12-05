---
ms.openlocfilehash: a9030eae8492863ee750f2a02eeac584fd13513a
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145068024"
---

### 자체 호스트 실행기를 성공적으로 추가했는지 확인

자체 호스트 실행기를 추가하는 단계를 완료하면 이제 실행기와 실행기 상태가 {% ifversion fpt or ghec %}“실행기”{% elsif ghae or ghes %}“자체 호스트 실행기”{% endif %}에 나열됩니다.

실행기에서 작업을 수락하려면 자체 호스트 실행기 애플리케이션이 활성화되어 있어야 합니다. 실행기 애플리케이션이 {% data variables.product.product_name %}에 연결되어 작업을 받을 준비가 되면 머신의 터미널에 다음 메시지가 표시됩니다.

{% data reusables.actions.self-hosted-runner-connected-output %}
