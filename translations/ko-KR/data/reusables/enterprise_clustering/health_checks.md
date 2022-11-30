---
ms.openlocfilehash: da828b3b969dfc24b1f71400f336cccfa1f4d004
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145123860"
---
다음 URL 중 하나를 확인하도록 부하 분산 장치를 구성합니다.
 - `https://HOSTNAME/status` HTTPS를 사용하는 경우(기본값)
 - `http://HOSTNAME/status` HTTPS를 사용하지 않는 경우

노드가 정상 상태이고 서비스 최종 사용자 요청에 사용할 수 있는 경우 검사는 상태 코드 `200`(OK)을 반환합니다.
