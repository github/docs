---
title: codespace가 프라이빗 이미지 레지스트리에 액세스할 수 있도록 허용
intro: 비밀을 사용하여 {% data variables.product.prodname_github_codespaces %}가 프라이빗 이미지 레지스트리에 액세스하도록 허용할 수 있습니다.
versions:
  fpt: '*'
  ghec: '*'
topics:
- Codespaces
shortTitle: Private image registry
ms.openlocfilehash: c11cfe0179856caf17f30ac32830ee1485defa3c
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: "148159207"
---
## 프라이빗 이미지 레지스트리 및 {% data variables.product.prodname_github_codespaces %} 정보

레지스트리는 프라이빗 컨테이너 이미지를 저장하고, 관리하고, 가져오기 위한 안전한 공간입니다. 레지스트리를 사용하여 하나 이상의 이미지를 저장할 수 있습니다. {% data variables.product.prodname_container_registry %}, {% data variables.product.prodname_npm_registry %}, Azure Container Registry 또는 DockerHub 등과 같은 많은 레지스트리 예제가 있습니다.

인증 자격 증명을 제공하지 않고도 codespace를 만드는 동안 컨테이너 이미지를 {% data variables.product.prodname_github_codespaces %}로 원활하게 끌어올 수 있도록 {% data variables.packages.prodname_ghcr_and_npm_registry %}을(를) 구성할 수 있습니다. 다른 이미지 레지스트리의 경우 {% data variables.product.prodname_dotcom %}에 비밀을 만들어 액세스 세부 정보를 저장해야 합니다. 그러면 {% data variables.product.prodname_github_codespaces %}이(가) 해당 레지스트리에 저장된 이미지에 액세스할 수 있습니다.

## {% data variables.packages.prodname_ghcr_and_npm_registry %}에 저장된 이미지에 액세스

{% data variables.packages.prodname_ghcr_and_npm_registry %}는 {% data variables.product.prodname_github_codespaces %}에서 개발 컨테이너 이미지를 사용하는 가장 쉬운 방법을 제공합니다.

자세한 내용은 “[컨테이너 레지스트리 작업](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)” 및 “[npm 레지스트리 작업](/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)”을 참조하세요.

### codespace와 동일한 리포지토리에 게시된 이미지 액세스

codespace가 시작되는 동일한 리포지토리의 {% data variables.packages.prodname_ghcr_or_npm_registry %}에 컨테이너 이미지를 게시하는 경우 codespace를 만들 때 해당 이미지를 자동으로 가져올 수 있습니다. 컨테이너 이미지를 게시할 때 **리포지토리에서 액세스 상속** 옵션을 선택 취소하지 않는 한, 추가 자격 증명을 제공할 필요가 없습니다.

#### 이미지가 게시된 리포지토리에서 액세스 상속

기본적으로 컨테이너 이미지를 {% data variables.packages.prodname_ghcr_or_npm_registry %}에 게시하는 경우 이미지는 이미지가 게시된 리포지토리의 액세스 설정을 상속합니다. 예를 들어 리포지토리가 퍼블릭이면 이미지도 퍼블릭입니다. 리포지토리가 프라이빗이면 이미지도 프라이빗이지만 리포지토리에서 액세스할 수 있습니다.

이 동작은 **리포지토리에서 액세스 상속** 옵션을 통해 제어됩니다. {% data variables.product.prodname_actions %}을(를) 통해 게시할 때는 기본적으로 **리포지토리에서 액세스 상속** 이 선택되지만 {% data variables.product.pat_generic %}을(를) 사용하여 {% data variables.packages.prodname_ghcr_or_npm_registry %}에 직접 게시할 때는 선택되지 않습니다.

이미지를 게시할 때 **리포지토리에서 액세스 상속** 옵션을 선택하지 않은 경우 게시된 컨테이너 이미지의 액세스 제어에 리포지토리를 수동으로 추가할 수 있습니다. 자세한 내용은 “[패키지의 액세스 제어 및 표시 유형 구성](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#inheriting-access-for-a-container-image-from-a-repository)”을 참조하세요.

### codespace가 시작되는 조직에 게시된 이미지 액세스

조직의 모든 codespace에서 컨테이너 이미지에 액세스할 수 있도록 하려면 내부 표시 유형을 사용하여 컨테이너 이미지를 게시하는 것이 좋습니다. 이렇게 하면 codespace가 시작된 리포지토리가 퍼블릭이 아닌 한, 조직 내의 모든 codespace에 이미지가 자동으로 표시됩니다.

내부 또는 프라이빗 이미지를 참조하는 퍼블릭 리포지토리에서 codespace를 시작하는 경우 퍼블릭 리포지토리에 내부 컨테이너 이미지에 대한 액세스를 수동으로 허용해야 합니다. 이렇게 하면 실수로 내부 이미지가 공개적으로 유출되는 것을 방지할 수 있습니다. 자세한 내용은 “[패키지에 대한 Codespaces 액세스 보장](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-codespaces-access-to-your-package)”을 참조하세요.

### 조직의 리포지토리 하위 집합에서 프라이빗 컨테이너 액세스

조직의 리포지토리 하위 집합이 컨테이너 이미지에 액세스하도록 허용하거나 퍼블릭 리포지토리에서 시작된 codespace에서 내부 또는 프라이빗 이미지에 액세스하도록 허용하려는 경우 컨테이너 <span class="x x-first x-last">이미지의</span> 액세스 설정에 리포지토리를 수동으로 추가할 수 있습니다. 자세한 내용은 “[패키지에 대한 Codespaces 액세스 보장](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-codespaces-access-to-your-package)”을 참조하세요<span class="x x-first x-last">.</span>

### codespace에서 컨테이너 이미지 게시

codespace에서 {% data variables.packages.prodname_ghcr_or_npm_registry %}로의 원활한 액세스는 컨테이너 이미지를 끌어당기는 것으로 제한됩니다. codespace 내에서 컨테이너 이미지를 게시하려면 범위와 함께 `write:packages` {% data variables.product.pat_v1 %}를 사용해야 합니다.

{% data variables.product.prodname_actions %}를 통해 이미지를 게시하는 것이 좋습니다. 자세한 내용은 “[Docker 이미지 게시](/actions/publishing-packages/publishing-docker-images)” 및 “[Node.js 패키지 게시](/actions/publishing-packages/publishing-nodejs-packages)”를 참조하세요.

## 다른 컨테이너 레지스트리에 저장된 이미지 액세스

{% data variables.packages.prodname_ghcr_or_npm_registry %}이 아닌 레지스트리에서 컨테이너 이미지에 액세스하는 경우 {% data variables.product.prodname_github_codespaces %}는 컨테이너 레지스트리의 서버 이름, 사용자 이름 및 {% 데이터 variables.product.pat_generic %}를 정의하는 세 가지 비밀이 있는지 확인합니다. 해당 비밀이 발견되면 {% data variables.product.prodname_github_codespaces %}는 Codespace 내에서 레지스트리를 사용할 수 있게 합니다.

- `<*>_CONTAINER_REGISTRY_SERVER`
- `<*>_CONTAINER_REGISTRY_USER`
- `<*>_CONTAINER_REGISTRY_PASSWORD`

사용자, 리포지토리 또는 조직 수준에서 비밀을 저장하여 서로 다른 codespace 간에 안전하게 공유할 수 있습니다. 프라이빗 이미지 레지스트리에 대한 비밀 집합을 만들 때는 이름의 “<*>”를 일관된 식별자로 바꿔야 합니다. 자세한 내용은 “[Codespace에 대한 암호화된 비밀 관리](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)” 및 “[{% data variables.product.prodname_github_codespaces %}의 리포지토리 및 조직에 대한 암호화된 비밀 관리](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces)”를 참조하세요.

사용자 또는 조직 수준에서 비밀을 설정하는 경우 드롭다운 목록에서 액세스 정책을 선택하여 codespace를 만들 리포지토리에 해당 비밀을 할당해야 합니다.  

![이미지 레지스트리 비밀 예제](/assets/images/help/codespaces/secret-repository-access.png)

### 예제 비밀

Azure에 있는 프라이빗 이미지 레지스트리의 경우 다음 비밀을 만들 수 있습니다.

```
ACR_CONTAINER_REGISTRY_SERVER = mycompany.azurecr.io
ACR_CONTAINER_REGISTRY_USER = acr-user-here
ACR_CONTAINER_REGISTRY_PASSWORD = <PERSONAL_ACCESS_TOKEN>
```

일반 이미지 레지스트리에 대한 자세한 내용은 “[일반 이미지 레지스트리 서버](#common-image-registry-servers)”를 참조하세요. AWS ECR(Elastic Container Registry)에 액세스하는 경우는 다릅니다.

![이미지 레지스트리 비밀 예제](/assets/images/help/settings/codespaces-image-registry-secret-example.png)

비밀을 추가한 후에는 새 환경 변수가 컨테이너에 전달되도록 현재 codespace를 중지했다가 시작해야 할 수 있습니다. 자세한 내용은 “[codespace 일시 중단 또는 중지](/codespaces/codespaces-reference/using-the-command-palette-in-codespaces#suspending-or-stopping-a-codespace)”를 참조하세요.

#### AWS Elastic Container Registry 액세스

AWS ECR(Elastic Container Registry)에 액세스하기 위해 AWS 액세스 키 ID와 비밀 키를 제공할 수 있으며, {% data variables.product.prodname_dotcom %}에서 사용자 대신 액세스 토큰을 검색하고 로그인할 수 있습니다.

```
*_CONTAINER_REGISTRY_SERVER = <ECR_URL>
*_CONTAINER_REGISTRY_USER = <AWS_ACCESS_KEY_ID>
*_CONTAINER_REGISTRY_PASSWORD = <AWS_SECRET_KEY>
```

ECR 읽기 작업(`AmazonEC2ContainerRegistryFullAccess` 또는 `ReadOnlyAccess`)뿐만 아니라 자격 증명 교환(예: `sts:GetServiceBearerToken`)을 수행하기 위한 적절한 AWS IAM 권한이 있는지도 확인해야 합니다.

또는 GitHub에서 사용자 대신 자격 증명 교환을 수행하지 않으려는 경우 AWS의 API 또는 CLI를 통해 가져온 권한 부여 토큰을 제공할 수 있습니다.

```
*_CONTAINER_REGISTRY_SERVER = <ECR_URL>
*_CONTAINER_REGISTRY_USER = AWS
*_CONTAINER_REGISTRY_PASSWORD = <TOKEN>
```

이 토큰은 수명이 짧고 주기적으로 새로 고쳐야 하므로 액세스 키 ID와 비밀을 제공하는 것이 좋습니다.

`*_CONTAINER_REGISTRY_SERVER`가 ECR URL이기만 하면 비밀 이름을 임의로 지정할 수 있지만 여러 ECR 레지스트리를 처리하지 않는 한, `ECR_CONTAINER_REGISTRY_*`를 사용하는 것이 좋습니다.

자세한 내용은 AWS ECR의 “[프라이빗 레지스트리 인증 설명서](https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry_auth.html)”를 참조하세요.

### 일반 이미지 레지스트리 서버

아래에는 몇 가지 일반 이미지 레지스트리 서버가 나와 있습니다.

- [DockerHub](https://docs.docker.com/engine/reference/commandline/info/) - `https://index.docker.io/v1/`
- [GitHub Container Registry](/packages/working-with-a-github-packages-registry/working-with-the-container-registry) - `ghcr.io`
- [Azure Container Registry](https://docs.microsoft.com/azure/container-registry/) - `<registry name>.azurecr.io`
- [AWS Elastic Container Registry](https://docs.aws.amazon.com/AmazonECR/latest/userguide/Registries.html) - `<aws_account_id>.dkr.ecr.<region>.amazonaws.com`
- [Google Cloud Container Registry](https://cloud.google.com/container-registry/docs/overview#registries) - `gcr.io`(미국), `eu.gcr.io`(EU), `asia.gcr.io`(아시아)

## 프라이빗 이미지 레지스트리 액세스 디버그

프라이빗 이미지 레지스트리에서 이미지를 끌어오는 데 문제가 있는 경우 위에 정의된 비밀 값을 사용하여 `docker login -u <user> -p <password> <server>`를 실행할 수 있는지 확인합니다. 로그인에 실패하면 로그인 자격 증명이 유효하고 서버에서 컨테이너 이미지를 가져올 수 있는 권한이 있는지 확인합니다. 로그인에 성공하면 사용자, 리포지토리 또는 조직 수준에서 올바른 {% 데이터 variables.product.prodname_github_codespaces %} 비밀에 이러한 값이 적절히 복사되었는지 확인하고 다시 시도합니다.
