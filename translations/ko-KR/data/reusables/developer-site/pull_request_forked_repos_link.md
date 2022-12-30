---
ms.openlocfilehash: a314a101135f5b47bfd573b1be6d7867db4ac26d
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145138071"
---
#### 포크된 리포지토리의 워크플로

워크플로는 기본적으로 포크된 리포지토리에서 실행되지 않습니다. 포크된 리포지토리의 **Actions**(작업) 탭에서 GitHub Actions를 사용하도록 설정해야 합니다.

{% data reusables.actions.forked-secrets %} `GITHUB_TOKEN`에는 포크된 리포지토리에 대한 읽기 전용 권한이 있습니다. 자세한 내용은 “[GITHUB_TOKEN을 사용한 인증](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)”을 참조하세요.

#### 포크된 리포지토리에 대한 끌어오기 요청 이벤트

포크된 리포지토리에서 기본 리포지토리로의 끌어오기 요청의 경우 {% data variables.product.product_name %}는 기본 리포지토리에 `pull_request`, `issue_comment`, `pull_request_review_comment`, `pull_request_review`, `pull_request_target` 이벤트를 보냅니다. 포크된 리포지토리에서는 끌어오기 요청 이벤트가 발생하지 않습니다.

{% ifversion fpt or ghec %} 처음으로 참가자가 퍼블릭 리포지토리에 끌어오기 요청을 제출하는 경우, 끌어오기 요청에 대해 쓰기 액세스 권한이 있는 유지 관리자가 실행 중인 워크플로를 승인해야 할 수 있습니다. 자세한 내용은 “[퍼블릭 포크에서 워크플로 실행 승인](/actions/managing-workflow-runs/approving-workflow-runs-from-public-forks)”을 참조하세요.
{% endif %}

{% note %}

**참고:** 포크된 리포지토리에서 끌어오기 요청을 열 때는 프라이빗 기본 리포지토리에서 워크플로가 실행되지 않습니다.

{% endnote %}

{% note %}

**참고:** {% data variables.product.prodname_dependabot %} 끌어오기 요청에 의해 트리거되는 워크플로는 포크된 리포지토리에서 온 것처럼 처리되며 관련 제한 사항도 적용됩니다.

{% endnote %}
