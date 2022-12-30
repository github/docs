---
ms.openlocfilehash: b189db919701cb53e317e1d7852528ab0bb79b79
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: "148098375"
---
{% data reusables.package_registry.packages-classic-pat-only %}

프라이빗, 내부 및 공용 패키지를 게시, 설치 및 삭제하려면 액세스 토큰이 필요합니다.

{% 데이터 variables.product.pat_v1 %}을(를) 사용하여 {% 데이터 variables.product.prodname_registry %} 또는 {% ifversion fpt 또는 ghec %}{% 데이터 variables.product.prodname_dotcom %}{% else %}{% 데이터 variables.product.product_name %}{% endif %} API에 인증할 수 있습니다. {% 데이터 variables.product.pat_v1 %}을(를) 만들 때 필요에 따라 토큰 범위를 다르게 할당할 수 있습니다. {% 데이터 variables.product.pat_v1 %}에 대한 패키지 관련 범위에 대한 자세한 내용은 "[GitHub 패키지에 대한 권한 정보](/packages/learn-github-packages/about-permissions-for-github-packages#about-scopes-and-permissions-for-package-registries)"를 참조하세요.

{% data variables.product.prodname_actions %} 워크플로 내에서 {% data variables.product.prodname_registry %} 레지스트리에 인증하려면 다음을 사용할 수 있습니다.
- 워크플로 리포지토리와 연결된 패키지를 게시하려면 `GITHUB_TOKEN`을 사용합니다.
- 다른 프라이빗 리포지 `GITHUB_TOKEN` 토리(액세스할 수 없음)와 연결된 패키지를 설치하는 범위가 최소 `packages:read` 인 {% 데이터 variables.product.pat_v1 %}입니다.
