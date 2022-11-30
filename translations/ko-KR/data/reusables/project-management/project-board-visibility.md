---
ms.openlocfilehash: 6f5f7b9a1ef172b471215d5ea66d834fb00e19d7
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: "147879073"
---
기본적으로 사용자 소유 및 조직 전체 {% data variables.projects.projects_v1_boards %}는 프라이빗이며 {% data variables.projects.projects_v1_board %}에 대한 읽기, 쓰기 또는 관리자 권한이 있는 사용자만 볼 수 있습니다. {% ifversion ghae %}내부{% else %}퍼블릭{% endif %} {% data variables.projects.projects_v1_board %}는 {% ifversion ghae %}엔터프라이즈에 액세스가 있는 모든 사람{% else %}{% data variables.projects.projects_v1_board %}의 URL이 있는 모든 사람{% endif %}에게 표시됩니다. 리포지토리 수준 {% data variables.projects.projects_v1_boards %}는 리포지토리의 표시 유형을 공유합니다. 즉, 프라이빗 리포지토리에는 프라이빗 보드가 있으며 이 표시 유형을 변경할 수 없습니다.
