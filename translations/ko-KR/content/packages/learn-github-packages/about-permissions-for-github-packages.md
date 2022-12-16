---
title: GitHub 패키지에 대한 사용 권한 정보
intro: 패키지에 대한 사용 권한을 관리하는 방법에 대해 알아봅니다.
product: '{% data reusables.gated-features.packages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: About permissions
ms.openlocfilehash: 0159cee64d6faaeffe6257c9dc589f9fcda7a0ba
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193083'
---
{% ifversion packages-registries-v2 %} 패키지에 대한 사용 권한의 범위를 사용자 또는 조직 또는 리포지토리로 지정할 수 있습니다.

## 사용자/조직 범위 패키지에 대한 세분화된 사용 권한

세분화된 사용 권한이 있는 패키지는 개인 사용자 또는 조직 계정으로 범위가 지정됩니다. 패키지에 연결(또는 링크로 연결)되는 리포지토리와 별도로 패키지의 액세스 제어 및 표시 여부를 변경할 수 있습니다.

다음 {% data variables.product.prodname_registry %} 레지스트리는 세분화된 권한을 지원합니다.

- {% data variables.product.prodname_container_registry %} {% ifversion packages-npm-v2 %}- npm registry{% endif %} {% ifversion packages-nuget-v2 %}- NuGet 레지스트리{% endif %}

{% endif %}

## {% ifversion packages-registries-v2 %}리포지토리 범위 {% endif %}패키지에 대한 권한

{% ifversion packages-registries-v2 %}리포지토리 범위 {% endif %}패키지는 패키지를 소유하는 리포지토리의 사용 권한과 표시 유형을 상속합니다. 리포지토리의 기본 페이지로 이동하고 페이지 오른쪽에 있는 **패키지** 링크를 클릭하여 리포지토리로 범위가 지정된 패키지를 찾을 수 있습니다. {% ifversion fpt or ghec %}자세한 내용은 “[리포지토리를 패키지에 연결](/packages/learn-github-packages/connecting-a-repository-to-a-package)”을 참조하세요.{% endif %}

{% ifversion packages-registries-v2 %} 다음 {% data variables.product.prodname_registry %} 레지스트리는 리포지토리 범위 권한 **만** 지원합니다.

{% ifversion not fpt or ghec %}- Docker 레지스트리(`docker.pkg.github.com`){% endif %} {% ifversion packages-npm-v2 %}{% else %}- npm 레지스트리{% endif %}
- RubyGems 레지스트리
- Apache Maven 레지스트리
- Gradle 레지스트리 {% ifversion packages-nuget-v2 %}{% else %}- NuGet 레지스트리{% endif %}

{% ifversion ghes %}{% data variables.product.prodname_container_registry %}{% else %}다른 레지스트리{% endif %}의 경우 패키지의 범위를 사용자 또는 조직으로 지정하거나 리포지토리에 연결하도록 선택할 수 있습니다. {% ifversion docker-ghcr-enterprise-migration %} {% data variables.product.prodname_container_registry %}로 마이그레이션하는 방법에 대한 자세한 내용은 "[Docker 레지스트리에서 {% data variables.product.prodname_container_registry %}로 마이그레이션"을 참조하세요](/packages/working-with-a-github-packages-registry/migrating-to-the-container-registry-from-the-docker-registry). {% endif %}

{% endif %}

{% ifversion packages-registries-v2 %}
## 컨테이너 이미지에 대한 표시 여부 및 액세스 권한

{% data reusables.package_registry.visibility-and-access-permissions %}

자세한 내용은 “[패키지의 액세스 제어 및 표시 여부 구성](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)”을 참조하세요.

{% endif %}

## 패키지 레지스트리의 범위 및 사용 권한 정보

{% data reusables.package_registry.packages-classic-pat-only %}

패키지 레지스트리에서 호스트되는 패키지를 사용하거나 관리하려면 적절한 범위의 {% 데이터 variables.product.pat_v1 %}를 사용해야 하며 개인 계정에 적절한 권한이 있어야 합니다.

예를 들면 다음과 같습니다.
-  리포지토리에서 패키지를 다운로드하고 설치하려면 {% data variables.product.pat_v1 %}에 범위가 `read:packages` 있어야 하며 사용자 계정에 읽기 권한이 있어야 합니다.
- {% ifversion fpt or ghes or ghec %} {% data variables.product.product_name %}에서 패키지를 삭제하려면 {% data variables.product.pat_v1 %}에 최소한 및 `read:packages` 범위가 `delete:packages` 있어야 합니다. 리포지토리 범위 패키지에도 `repo` 범위가 필요합니다. 자세한 내용은 "[패키지 삭제 및 복원"을 참조하세요](/packages/learn-github-packages/deleting-and-restoring-a-package). {% elsif ghae %} {% data variables.product.product_name %}에서 지정된 버전의 패키지를 삭제하려면 {% data variables.product.pat_v1 %}에 및 `repo` 범위가 `delete:packages` 있어야 합니다. 자세한 내용은 “[패키지 삭제 및 복원](/packages/learn-github-packages/deleting-and-restoring-a-package)”을 참조하세요.{% endif %}

| 범위 | 설명 | 필요한 권한 |
| --- | --- | --- |
|`read:packages`| {% data variables.product.prodname_registry %}에서 패키지 다운로드 및 설치 | 읽기 |
|`write:packages`| {% data variables.product.prodname_registry %}에 패키지 업로드 및 게시 | 쓰기 |
| `delete:packages` | {% ifversion fpt or ghes or ghec %} {% data variables.product.prodname_registry %}에서 패키지 삭제 {% elsif ghae %} {% data variables.product.prodname_registry %}에서 지정된 버전의 패키지 삭제 {% endif %} | 관리자 |
| `repo` | 패키지 업로드 및 삭제(`write:packages` 또는 `delete:packages` 포함) | 쓰기 또는 관리자 |

{% data variables.product.prodname_actions %} 워크플로를 만들 때 을 사용하여 `GITHUB_TOKEN` {% data variables.product.prodname_registry %}에서 {% data variables.product.pat_generic %}을(를) 저장하고 관리할 필요 없이 패키지를 게시하고 설치할 수 있습니다.

자세한 내용은 다음을 참조하세요.{% ifversion fpt or ghec %}
- “[패키지의 액세스 제어 및 표시 여부 구성](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)”{% endif %}
- “[{% data variables.product.prodname_actions %}를 사용하여 패키지 게시 및 설치](/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions)”
- "[{% data variables.product.pat_generic %}을(를) 만듭니다](/github/authenticating-to-github/creating-a-personal-access-token/)."
- “[사용 가능한 범위](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes)”

## {% data variables.product.prodname_actions %} 워크플로에서 패키지에 대한 액세스 유지 관리

워크플로가 패키지에 대한 액세스를 유지하도록 하려면 워크플로에서 올바른 액세스 토큰을 사용하고 있고 패키지에 대한 {% data variables.product.prodname_actions %} 액세스를 사용하도록 설정했는지 확인합니다.

{% data variables.product.prodname_actions %}에 대한 자세한 개념적 배경 또는 워크플로에서 패키지를 사용하는 예제는 “[GitHub Actions 워크플로를 사용하여 GitHub 패키지 관리](/packages/managing-github-packages-using-github-actions-workflows)”를 참조하세요.

### 액세스 토큰  

- 워크플로 리포지토리와 연결된 패키지를 게시하려면 `GITHUB_TOKEN`을 사용합니다.
- 액세스할 수 없는 다른 프라이빗 리포지 `GITHUB_TOKEN` 토리와 연결된 패키지를 설치하려면 {% data variables.product.pat_v1 %}를 사용합니다.

{% data variables.product.prodname_actions %} 워크플로에서 사용되는 `GITHUB_TOKEN`에 대한 자세한 내용은 “[워크플로에서의 인증](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow)”을 참조하세요.

{% ifversion fpt or ghec %}
### 컨테이너 이미지에 대한 {% data variables.product.prodname_actions %} 액세스

워크플로가 컨테이너 이미지에 액세스할 수 있도록 하려면 워크플로가 실행되는 리포지토리에 대한 {% data variables.product.prodname_actions %} 액세스를 사용하도록 설정해야 합니다. 패키지의 설정 페이지에서 이 설정을 찾을 수 있습니다. 자세한 내용은 “[패키지에 대한 워크플로 액세스 보장](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-workflow-access-to-your-package)”을 참조하세요.

{% endif %}
