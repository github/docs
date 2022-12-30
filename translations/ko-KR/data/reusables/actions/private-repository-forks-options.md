---
ms.openlocfilehash: d9874c3884e3191a0296272fbead8f30b7630e5a
ms.sourcegitcommit: fdc4466e89467a7b13239e26c6042dc1428946b6
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/14/2022
ms.locfileid: "148163822"
---
- **포크 끌어오기 요청에서 워크플로 실행** - 사용자가 포크 끌어오기 요청에서 워크플로를 실행할 수 있도록 허용하고, 읽기 전용 권한이 있는 `GITHUB_TOKEN`을 사용하며, 비밀에 액세스할 수 없습니다.
- **끌어오기 요청에서 워크플로에 쓰기 토큰 보내기** - 포크에서 끌어오기 요청이 쓰기 권한으로 `GITHUB_TOKEN`을 사용할 수 있도록 허용합니다.
- **끌어오기 요청에서 워크플로로 비밀 보내기 - 끌어오기 요청에** 모든 비밀을 사용할 수 있도록 합니다. {% ifversion actions-private-fork-workflow-approvals %}
- **포크 끌어오기 요청 워크플로에 대한 승인 필요** - 쓰기 권한이 없는 협력자의 끌어오기 요청에서 워크플로를 실행하려면 실행하기 전에 쓰기 권한이 있는 사용자의 승인이 필요합니다. {% endif %}
