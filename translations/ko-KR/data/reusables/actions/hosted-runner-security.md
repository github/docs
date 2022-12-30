---
ms.openlocfilehash: 5fb9efcad1df3579f5eb28cedfc64ea69375c160
ms.sourcegitcommit: 7a0b8dde5c15b93eeec63581b6226e036c60270f
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/13/2022
ms.locfileid: "148045306"
---
고정 IP 범위를 사용하는 경우 개인 리포지토리에서 {% 데이터 variables.actions.hosted_runner %}s만 사용하는 것이 좋습니다. 리포지토리의 포크는 워크플로에서 코드를 실행하는 끌어오기 요청을 만들어 {% 데이터 variables.actions.hosted_runner %}에서 위험한 코드를 실행할 수 있습니다.
