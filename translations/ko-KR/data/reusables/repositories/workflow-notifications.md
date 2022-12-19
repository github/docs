---
ms.openlocfilehash: 307a695e8a973c7b37a29ebbeb4606a8ed43d38d
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145117812"
---
{% data variables.product.prodname_actions %}에 메일 또는 웹 알림을 사용하도록 설정하면 트리거한 워크플로 실행이 완료되면 알림이 표시됩니다. 알림에는 워크플로 실행 상태(성공, 실패, 중립 및 취소된 실행 포함)가 포함됩니다. 워크플로 실행이 실패한 경우에만 알림을 받도록 선택할 수도 있습니다. 알림을 사용하거나 사용하지 않도록 설정하는 방법에 대한 자세한 내용은 “[알림 정보](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications)”를 참조하세요.

예약된 워크플로에 대한 알림은 워크플로를 처음 만든 사용자에게 전송됩니다. 다른 사용자가 워크플로 파일에서 cron 구문을 업데이트하는 경우 후속 알림이 대신 해당 사용자에게 전송됩니다.{% ifversion fpt or ghes or ghec %} 예약된 워크플로를 사용하지 않도록 설정한 다음 다시 사용하도록 설정하면 cron 구문을 마지막으로 수정한 사용자가 아니라 워크플로를 다시 사용하도록 설정한 사용자에게 알림이 전송됩니다.{% endif %}

리포지토리의 작업 탭에서 워크플로 실행 상태를 확인할 수도 있습니다. 자세한 내용은 “[워크플로 실행 관리](/actions/automating-your-workflow-with-github-actions/managing-a-workflow-run)”를 참조하세요.
