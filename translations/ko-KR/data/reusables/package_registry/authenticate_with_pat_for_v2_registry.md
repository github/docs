---
ms.openlocfilehash: 4cf4347384a6be2cadb240a15bc78efea0097799
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/09/2022
ms.locfileid: "148192755"
---
일부 {% 데이터 variables.product.prodname_registry %} 레지스트리는 세분화된 권한을 지원합니다. 즉, 패키지를 사용자 또는 조직이 소유하거나 리포지토리에 연결하도록 선택할 수 있습니다. 세분화된 권한을 지원하는 레지스트리 목록은 "[{% data variables.product.prodname_registry %}에 대한 권한](/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages) 정보"를 참조하세요.

세분화된 권한을 지원하는 레지스트리의 경우 워크플로가 {% data variables.product.pat_generic %}를 사용하여 레지스트리에 인증하는 경우 을 사용하도록 `GITHUB_TOKEN`워크플로를 업데이트하는 것이 좋습니다.

{% data variables.product.pat_generic %}을(를) 사용하여 레지스트리에 인증하는 워크플로를 업데이트하는 방법에 대한 지침은 "[{% data variables.product.pat_generic %}을(를) 사용하여 레지스트리에 액세스하는 워크플로 업그레이드"를](/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions#upgrading-a-workflow-that-accesses-a-registry-using-a-personal-access-token) 참조하세요.

`GITHUB_TOKEN`에 대한 자세한 내용은 “[워크플로의 인증](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow)”을 참조하세요.

작업에서 레지스트리를 사용할 때 모범 사례에 대한 자세한 내용은 "[GitHub Actions 보안 강화"를](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access) 참조하세요.
