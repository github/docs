---
ms.openlocfilehash: 902af6bdbe3c48fe8b5930bdf1041151f343b60b
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/27/2022
ms.locfileid: "148113867"
---
워크플로가 {% data variables.product.pat_generic %}을(를) 사용하여 레지스트리에 인증하는 경우 을 사용하도록 `GITHUB_TOKEN`워크플로를 업데이트하는 것이 좋습니다.

{% ifversion fpt or ghec %} {% data variables.product.pat_generic %}을(를) 사용하여 레지스트리에 인증하는 워크플로를 업데이트하는 방법에 대한 지침은 "[{% data variables.product.pat_generic %}를 사용하여 레지스트리에 액세스하는 워크플로 업그레이드"를](/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions#upgrading-a-workflow-that-accesses-a-registry-using-a-personal-access-token) 참조하세요. {% endif %}

`GITHUB_TOKEN`에 대한 자세한 내용은 “[워크플로의 인증](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow)”을 참조하세요.

작업에서 레지스트리를 사용할 때의 모범 사례에 대한 자세한 내용은 "[GitHub Actions 보안 강화](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access)"를 참조하세요.
