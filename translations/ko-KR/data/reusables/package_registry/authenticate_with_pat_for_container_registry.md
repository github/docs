---
ms.openlocfilehash: 0957d7c909250bfccb51681eac05e3f3196bb6d5
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145122004"
---
{% ifversion fpt or ghec or ghes > 3.4 %}

{% data variables.product.prodname_actions %} 워크플로 내에서 {% data variables.product.prodname_container_registry %}에 인증하려면 최상의 보안과 환경을 위해 `GITHUB_TOKEN`을 사용하세요. 워크플로에서 PAT(개인용 액세스 토큰)를 사용하여 `{% data reusables.package_registry.container-registry-hostname %}`에 인증하는 경우 `GITHUB_TOKEN`을 사용하도록 워크플로를 업데이트하는 것이 좋습니다.

{% ifversion fpt or ghec %}개인용 액세스 토큰으로 `{% data reusables.package_registry.container-registry-hostname %}`에 인증하는 워크플로 업데이트에 대한 참고 자료는 “[`ghcr.io`에 액세스하는 워크플로 업그레이드](/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions#upgrading-a-workflow-that-accesses-ghcrio)”를 참조하세요.{% endif %}

`GITHUB_TOKEN`에 대한 자세한 내용은 “[워크플로의 인증](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow)”을 참조하세요.

작업에서 {% data variables.product.prodname_container_registry %}를 사용하는 경우 “[GitHub Actions를 위한 보안 강화](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access)”에서 보안 모범 사례를 따르세요.

{% endif %}
