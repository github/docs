---
ms.openlocfilehash: c5a766780b3a2453300c61ea2a85db9b651af5cb
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: "148098370"
---
{% data reusables.package_registry.packages-classic-pat-only %}

1. 수행하려는 작업에 대한 적절한 범위를 사용하여 새 {% 데이터 variables.product.pat_v1 %}을(를) 만듭니다. 조직에 SSO가 필요한 경우 새 토큰에 대해 SSO를 사용하도록 설정해야 합니다.
  {% warning %}

  **참고:** 기본적으로 사용자 인터페이스 `repo` 에서 `write:packages` {% 데이터 variables.product.pat_v1 %}에 대한 범위를 선택하면 범위도 선택됩니다. 이 범위는 `repo` 불필요하고 광범위한 액세스를 제공하므로 특히 {% 데이터 variables.product.prodname_actions %} 워크플로에는 사용하지 않는 것이 좋습니다. 자세한 내용은 “[GitHub Actions의 보안 강화](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access)”를 참조하세요. 해결 방법으로 다음 URL`https://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/settings/tokens/new?scopes=write:packages`이 있는 사용자 인터페이스에서 `write:packages` {% 데이터 variables.product.pat_v1 %}의 범위만 선택할 수 있습니다. 

  {% endwarning %}

    - 컨테이너 이미지를 다운로드하고 해당 메타데이터를 읽으려면 `read:packages` 범위를 선택합니다.
    - 컨테이너 이미지를 다운로드하고 업로드하며 해당 메타데이터를 읽고 쓸 `write:packages` 범위를 선택합니다.
    - 컨테이너 이미지를 삭제하려면 `delete:packages` 범위를 선택하세요.

  자세한 내용은 "[명령줄에 대한 {% 데이터 variables.product.pat_generic %} 만들기](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)"를 참조하세요.

2. {% 데이터 variables.product.pat_v1 %}을(를) 저장합니다. 토큰을 환경 변수로 저장하는 것이 좋습니다.
  ```shell
  $ export CR_PAT=YOUR_TOKEN
  ```
3. 컨테이너 유형에 대한 CLI를 사용하여 `{% data reusables.package_registry.container-registry-hostname %}`에서 {% data variables.product.prodname_container_registry %} 서비스에 로그인합니다.
  {% raw %}
  ```shell
  $ echo $CR_PAT | docker login {% endraw %}{% data reusables.package_registry.container-registry-hostname %}{% raw %} -u USERNAME --password-stdin
  > Login Succeeded
  ```
  {% endraw %}
