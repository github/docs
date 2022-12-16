---
ms.openlocfilehash: dbc37853f288c92b80e2858c0e94b9a07ca9b60f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145134830"
---
조직에 SCIM 프로비저닝이 구현된 경우 사용자의 조직 멤버 자격에 대한 변경 내용은 ID 공급자로부터 트리거되어야 합니다. 사용자가 기존 SCIM 통합 대신 수동으로 조직에 초대되는 경우 사용자 계정이 SCIM ID에 제대로 연결되지 않을 수 있습니다. 이렇게 하면 나중에 SCIM을 통해 사용자 계정의 프로비전이 해제되지 않도록 할 수 있습니다. 기존 SCIM 통합 대신 수동으로 사용자를 제거하면 부실 연결 ID가 남게 되어 사용자가 조직에 다시 가입해야 하는 경우에 문제가 발생할 수 있습니다.
