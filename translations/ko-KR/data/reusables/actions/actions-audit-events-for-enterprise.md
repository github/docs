---
ms.openlocfilehash: ed7e94a18edf6d5c55ba6fb12c5f09236a9f2fe5
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145114796"
---
| 작업 | 설명
|------------------|-------------------
| `remove_self_hosted_runner` | 자체 호스팅 실행기를 제거할 때 트리거됩니다.
| `register_self_hosted_runner` | 새 자체 호스팅 실행기를 등록할 때 트리거됩니다. 자세한 내용은 “[자체 호스팅 실행기 추가](/actions/hosting-your-own-runners/adding-self-hosted-runners)”를 참조하세요.
| `runner_group_created` | 자체 호스팅 실행기 그룹을 만들 때 트리거됩니다. 자세한 내용은 “[자체 호스팅 실행기 그룹 정보](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#about-self-hosted-runner-groups)”를 참조하세요.
| `runner_group_removed` | 자체 호스팅 실행기 그룹을 제거할 때 트리거됩니다. 자세한 내용은 “[자체 호스팅 실행기 그룹 제거](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group)”를 참조하세요.
| `runner_group_runner_removed` | REST API를 사용하여 그룹에서 자체 호스팅 실행기를 제거할 때 트리거됩니다.
| `runner_group_runners_added` | 자체 호스팅 실행기를 그룹에 추가할 때 트리거됩니다. 자세한 내용은 “[자체 호스팅 실행기를 그룹으로 이동](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group)”을 참조하세요.
| `runner_group_runners_updated` | 실행기 그룹의 구성원 목록이 업데이트될 때 트리거됩니다. 자세한 내용은 “[조직의 그룹에서 자체 호스팅 실행기 설정](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization)”을 참조하세요.
| `runner_group_updated` | 자체 호스팅 실행기 그룹의 구성이 변경될 때 트리거됩니다. 자세한 내용은 “[자체 호스팅 실행기 그룹의 액세스 정책 변경](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)”을 참조하세요.
| `self_hosted_runner_updated` | 실행기 애플리케이션이 업데이트될 때 트리거됩니다. REST API 및 UI를 사용하여 볼 수 있습니다. JSON/CSV 내보내기에 표시되지 않습니다. 자세한 내용은 “[자체 호스팅 실행기 정보](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)”를 참조하세요.{% ifversion fpt or ghec %}
| `self_hosted_runner_online` | 실행기 애플리케이션이 시작될 때 트리거됩니다. REST API를 사용해서만 볼 수 있습니다. UI 또는 JSON/CSV 내보내기에서 표시되지 않습니다. 자세한 내용은 “[자체 호스팅 실행기의 상태 검사](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)”를 참조하세요.
| `self_hosted_runner_offline` | 실행기 애플리케이션이 중지될 때 트리거됩니다. REST API를 사용해서만 볼 수 있습니다. UI 또는 JSON/CSV 내보내기에서 표시되지 않습니다. 자세한 내용은 “[자체 호스팅 실행기의 상태 검사](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)”를 참조하세요.{% endif %}
