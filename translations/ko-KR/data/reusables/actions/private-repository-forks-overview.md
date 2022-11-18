---
ms.openlocfilehash: 0734336906d60a230cc3295722758d6e48629a6d
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: "147879495"
---
프라이빗 리포지토리의 포크를 사용하는 경우 사용자가 `pull_request`이벤트에서 워크플로를 실행하는 방법을 제어하는 정책을 구성할 수 있습니다. 프라이빗 {% ifversion ghec or ghes or ghae %}와 내부{% endif %} 리포지토리에서만 사용할 수 있으며, {% ifversion ghec %}엔터프라이즈, {% elsif ghes or ghae %}엔터프라이즈, {% endif %}조직 또는 리포지토리에 대해 정책 설정을 구성할 수 있습니다.
