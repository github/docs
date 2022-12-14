---
title: Docker 이미지 게시
shortTitle: Publish Docker images
intro: 'CI(연속 통합) 워크플로의 일부로 Docker Hub 또는 {% data variables.product.prodname_registry %}와 같은 레지스트리에 Docker 이미지를 게시할 수 있습니다.'
redirect_from:
  - /actions/language-and-framework-guides/publishing-docker-images
  - /actions/guides/publishing-docker-images
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Packaging
  - Publishing
  - Docker
ms.openlocfilehash: 4e34516985f7e96bccc24820b64669a8bd9102bc
ms.sourcegitcommit: 7b86410fc3bc9fecf0cb71dda4c7d2f0da745b85
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/05/2022
ms.locfileid: '148009563'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 소개

이 가이드에서는 Docker 빌드를 수행하는 워크플로를 만든 다음, Docker 이미지를 Docker Hub 또는 {% data variables.product.prodname_registry %}에 게시하는 방법을 보여 줍니다. 단일 워크플로를 사용하여 단일 레지스트리 또는 여러 레지스트리에 이미지를 게시할 수 있습니다.

{% note %}

**참고:** 다른 타사 Docker 레지스트리로 푸시하려는 경우 “[{% data variables.product.prodname_registry %}에 이미지 게시](#publishing-images-to-github-packages)” 섹션의 예제가 좋은 템플릿으로 사용될 수 있습니다.

{% endnote %}

## 필수 조건

워크플로 구성 옵션과 워크플로 파일을 만드는 방법을 기본적으로 이해하는 것이 좋습니다. 자세한 내용은 “[{% data variables.product.prodname_actions %} 알아보기](/actions/learn-github-actions)”를 참조하세요.

또한 다음 사항을 기본적으로 이해하는 것이 유용할 수 있습니다.

- “[암호화된 비밀](/actions/reference/encrypted-secrets)”
- “[워크플로의 인증](/actions/reference/authentication-in-a-workflow)”{% ifversion fpt or ghec %}
- “[{% data variables.product.prodname_container_registry %} 작업](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)”{% else %}
- “[Docker 레지스트리 작업](/packages/working-with-a-github-packages-registry/working-with-the-docker-registry)”{% endif %}

## 이미지 구성 정보

이 가이드에서는 {% data variables.product.prodname_dotcom %} 리포지토리에 저장된 Docker 이미지에 대한 완전한 정의가 있다고 가정합니다. 예를 들어 리포지토리에는 _Dockerfile_ 및 이미지를 만들기 위해 Docker 빌드를 수행하는 데 필요한 다른 파일이 포함되어야 합니다.

{% ifversion fpt or ghec or ghes > 3.4 %}

{% data reusables.package_registry.about-docker-labels %} 자세한 내용은 "[{% 데이터 variables.product.prodname_container_registry %}로 작업](/packages/working-with-a-github-packages-registry/working-with-the-container-registry#labelling-container-images)"을 참조하세요.

{% endif %}

이 가이드에서는 Docker `build-push-action` 작업을 사용하여 Docker 이미지를 빌드하고 하나 이상의 Docker 레지스트리에 푸시합니다. 자세한 내용은 [`build-push-action`](https://github.com/marketplace/actions/build-and-push-docker-images)를 참조하세요.

{% data reusables.actions.enterprise-marketplace-actions %}

## Docker Hub에 이미지 게시

{% data reusables.actions.release-trigger-workflow %}

아래 예제 워크플로에서는 Docker `login-action` 및 `build-push-action` 작업을 사용하여 Docker 이미지를 빌드하고 빌드에 성공하면 빌드된 이미지를 Docker Hub로 푸시합니다.

Docker Hub로 푸시하려면 Docker Hub 계정이 있어야 하고 Docker Hub 리포지토리를 만들어야 합니다. 자세한 내용은 Docker 설명서에서 “[ "Docker Hub로 Docker 컨테이너 이미지 푸시](https://docs.docker.com/docker-hub/repos/#pushing-a-docker-container-image-to-docker-hub)”를 참조하세요.

Docker Hub에 필요한 `login-action` 옵션은 다음과 같습니다.
* `username` 및 `password`: Docker Hub 사용자 이름 및 암호입니다. 워크플로 파일에 노출되지 않도록 Docker Hub 사용자 이름과 암호는 비밀로 저장하는 것이 좋습니다. 자세한 내용은 “[암호화된 비밀 만들기 및 사용](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)”을 참조하세요.

Docker Hub에 필요한 `metadata-action` 옵션은 다음과 같습니다.
* `images`: Docker Hub로 빌드/푸시하는 Docker 이미지의 네임스페이스 및 이름입니다.

Docker Hub에 필요한 `build-push-action` 옵션은 다음과 같습니다.
* `tags`: `DOCKER-HUB-NAMESPACE/DOCKER-HUB-REPOSITORY:VERSION` 형식의 새 이미지 태그입니다. 아래 표시된 것처럼 단일 태그를 설정하거나 목록에서 여러 태그를 지정할 수 있습니다.
* `push`: `true`로 설정하면 이미지가 성공적으로 빌드된 경우 레지스트리에 푸시됩니다.

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Publish Docker image

on:
  release:
    types: [published]

jobs:
  push_to_registry:
    name: Push Docker image to Docker Hub
    runs-on: {% ifversion ghes %}[self-hosted]{% else %}ubuntu-latest{% endif %}
    steps:
      - name: Check out the repo
        uses: {% data reusables.actions.action-checkout %}
      
      - name: Log in to Docker Hub
        uses: docker/login-action@f054a8b539a109f9f41c372932f1ae047eff08c9
        with:
          username: {% raw %}${{ secrets.DOCKER_USERNAME }}{% endraw %}
          password: {% raw %}${{ secrets.DOCKER_PASSWORD }}{% endraw %}
      
      - name: Extract metadata (tags, labels) for Docker
        id: meta
        uses: docker/metadata-action@98669ae865ea3cffbcbaa878cf57c20bbf1c6c38
        with:
          images: my-docker-hub-namespace/my-docker-hub-repository
      
      - name: Build and push Docker image
        uses: docker/build-push-action@ad44023a93711e3deb337508980b4b5e9bcdc5dc
        with:
          context: .
          push: true
          tags: {% raw %}${{ steps.meta.outputs.tags }}{% endraw %}
          labels: {% raw %}${{ steps.meta.outputs.labels }}{% endraw %}
```

위의 워크플로는 {% data variables.product.prodname_dotcom %} 리포지토리를 체크 아웃하고 `login-action`을 사용하여 레지스트리에 로그인한 다음 `build-push-action` 작업을 사용하여 리포지토리의 `Dockerfile`을 기반으로 Docker 이미지를 빌드하고, 이미지를 Docker Hub로 푸시하고, 이미지에 태그를 적용합니다.

## {% data variables.product.prodname_registry %}에 이미지 게시

{% ifversion ghes > 3.4 %} {% data reusables.package_registry.container-registry-ghes-beta %} {% endif %}

{% data reusables.actions.release-trigger-workflow %}

아래 예제 워크플로에서는 Docker `login-action`{% ifversion fpt or ghec %}, `metadata-action`,{% endif %} 및 `build-push-action` 작업을 사용하여 Docker 이미지를 빌드하고 빌드에 성공하면 빌드된 이미지를 {% data variables.product.prodname_registry %}에 푸시합니다.

{% data variables.product.prodname_registry %}에 필요한 `login-action` 옵션은 다음과 같습니다.
* `registry`: {% ifversion fpt or ghec %}`ghcr.io`{% elsif ghes > 3.4 %}`{% data reusables.package_registry.container-registry-hostname %}`{% else %}`docker.pkg.github.com`{% endif %}으로 설정해야 합니다.
* `username`: {% raw %}`${{ github.actor }}`{% endraw %} 컨텍스트를 사용하여 워크플로 실행을 트리거한 사용자의 사용자 이름을 자동으로 사용할 수 있습니다. 자세한 내용은 “[컨텍스트](/actions/learn-github-actions/contexts#github-context)”를 참조하세요.
* `password`: 자동으로 생성된 `GITHUB_TOKEN` 비밀을 암호에 사용할 수 있습니다. 자세한 내용은 “[GITHUB_TOKEN을 사용한 인증](/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token)”을 참조하세요.

{% ifversion fpt or ghec %} {% data variables.product.prodname_registry %}에 필요한 `metadata-action` 옵션은 다음과 같습니다.
* `images`: 빌드 중인 Docker 이미지의 네임스페이스 및 이름입니다.
{% endif %}

{% data variables.product.prodname_registry %}에 필요한 `build-push-action` 옵션은 다음과 같습니다.{% ifversion fpt or ghec %}
* `context`: 지정된 경로에 있는 파일 집합으로 빌드의 컨텍스트를 정의합니다.{% endif %}
* `push`: `true`로 설정하면 이미지가 성공적으로 빌드된 경우 레지스트리에 푸시됩니다.{% ifversion fpt or ghec %}
* `tags` 및 `labels`: `metadata-action`의 출력으로 채워집니다.{% else %}
* `tags`: {% ifversion ghes > 3.4 %}`{% data reusables.package_registry.container-registry-hostname %}/OWNER/REPOSITORY/IMAGE_NAME:VERSION` 형식으로 설정해야 합니다. 
  
   예를 들어, `https://HOSTNAME/octo-org/octo-repo`에서 {% data variables.product.prodname_ghe_server %}에 저장된 `octo-image`라는 이미지의 경우 `tags` 옵션을 `{% data reusables.package_registry.container-registry-hostname %}/octo-org/octo-repo/octo-image:latest`{% else %}`docker.pkg.github.com/OWNER/REPOSITORY/IMAGE_NAME:VERSION`로 설정해야 합니다.
  
   예를 들어, `http://github.com/octo-org/octo-repo`에서 {% data variables.product.prodname_dotcom %}에 저장된 `octo-image`라는 이미지의 경우 `tags` 옵션을 `docker.pkg.github.com/octo-org/octo-repo/octo-image:latest`{% endif %}로 설정해야 합니다. 아래 표시된 것처럼 단일 태그를 설정하거나 목록에서 여러 태그를 지정할 수 있습니다.{% endif %}

{% ifversion fpt or ghec or ghes > 3.4 %} {% data reusables.package_registry.publish-docker-image %}

위의 워크플로는 “릴리스” 분기로 푸시하여 트리거됩니다. GitHub 리포지토리를 확인하고 `login-action`을 사용하여 {% data variables.product.prodname_container_registry %}에 로그인합니다. 그런 다음 Docker 이미지에 대한 레이블 및 태그를 추출합니다. 최종적으로, `build-push-action` 작업을 사용하여 이미지를 빌드하고 {% data variables.product.prodname_container_registry %}에 게시합니다.

{% else %}

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Publish Docker image

on:
  release:
    types: [published]
jobs:
  push_to_registry:
    name: Push Docker image to GitHub Packages
    runs-on: ubuntu-latest
    permissions:
      packages: write
      contents: read
    steps:
      - name: Check out the repo
        uses: {% data reusables.actions.action-checkout %}
      
      - name: Log in to GitHub Docker Registry
        uses: docker/login-action@f054a8b539a109f9f41c372932f1ae047eff08c9
        with:
          registry: {% ifversion ghae %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}
          username: {% raw %}${{ github.actor }}{% endraw %}
          password: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
      
      - name: Build and push Docker image
        uses: docker/build-push-action@ad44023a93711e3deb337508980b4b5e9bcdc5dc
        with:
          context: .
          push: true
          tags: |
            {% ifversion ghae %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}{% raw %}/${{ github.repository }}/octo-image:${{ github.sha }}{% endraw %}
            {% ifversion ghae %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}{% raw %}/${{ github.repository }}/octo-image:${{ github.event.release.tag_name }}{% endraw %}
```

위의 워크플로는 {% data variables.product.product_name %} 리포지토리를 체크 아웃하고 `login-action`을 사용하여 레지스트리에 로그인한 다음 `build-push-action` 작업을 사용하여 리포지토리의 `Dockerfile`을 기반으로 Docker 이미지를 빌드하고, 이미지를 Docker 레지스트리로 푸시하고, 커밋 SHA 및 릴리스 버전을 이미지 태그로 적용합니다.
{% endif %}

## Docker Hub 및 {% data variables.product.prodname_registry %}에 이미지 게시

{% ifversion ghes > 3.4 %} {% data reusables.package_registry.container-registry-ghes-beta %} {% endif %}

단일 워크플로에서 각 레지스트리에 `login-action` 및 `build-push-action` 작업을 사용하여 여러 레지스트리에 Docker 이미지를 게시할 수 있습니다.

다음 예제 워크플로는 이전 섹션의 단계(“[Docker Hub 이미지 게시](#publishing-images-to-docker-hub)” 및 “[{% data variables.product.prodname_registry %}에 이미지 게시](#publishing-images-to-github-packages)”)를 사용하여 두 레지스트리에 푸시하는 단일 워크플로를 만듭니다.

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Publish Docker image

on:
  release:
    types: [published]

jobs:
  push_to_registries:
    name: Push Docker image to multiple registries
    runs-on: {% ifversion ghes %}[self-hosted]{% else %}ubuntu-latest{% endif %}
    permissions:
      packages: write
      contents: read
    steps:
      - name: Check out the repo
        uses: {% data reusables.actions.action-checkout %}
      
      - name: Log in to Docker Hub
        uses: docker/login-action@f054a8b539a109f9f41c372932f1ae047eff08c9
        with:
          username: {% raw %}${{ secrets.DOCKER_USERNAME }}{% endraw %}
          password: {% raw %}${{ secrets.DOCKER_PASSWORD }}{% endraw %}
      
      - name: Log in to the {% ifversion fpt or ghec or ghes > 3.4 %}Container{% else %}Docker{% endif %} registry
        uses: docker/login-action@f054a8b539a109f9f41c372932f1ae047eff08c9
        with:
          registry: {% ifversion fpt or ghec %}ghcr.io{% elsif ghae %}docker.YOUR-HOSTNAME.com{% elsif ghes > 3.4 %}{% data reusables.package_registry.container-registry-hostname %}{% else %}docker.pkg.github.com{% endif %}
          username: {% raw %}${{ github.actor }}{% endraw %}
          password: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
      
      - name: Extract metadata (tags, labels) for Docker
        id: meta
        uses: docker/metadata-action@98669ae865ea3cffbcbaa878cf57c20bbf1c6c38
        with:
          images: |
            my-docker-hub-namespace/my-docker-hub-repository
            {% ifversion fpt or ghec or ghes > 3.4 %}{% data reusables.package_registry.container-registry-hostname %}/{% raw %}${{ github.repository }}{% endraw %}{% elsif ghae %}{% raw %}docker.YOUR-HOSTNAME.com/${{ github.repository }}/my-image{% endraw %}{% else %}{% raw %}docker.pkg.github.com/${{ github.repository }}/my-image{% endraw %}{% endif %}
      
      - name: Build and push Docker images
        uses: docker/build-push-action@ad44023a93711e3deb337508980b4b5e9bcdc5dc
        with:
          context: .
          push: true
          tags: {% raw %}${{ steps.meta.outputs.tags }}{% endraw %}
          labels: {% raw %}${{ steps.meta.outputs.labels }}{% endraw %}
```

위의 워크플로는 {% data variables.product.product_name %} 리포지토리를 체크 아웃하고, `login-action`을 두 번 사용하여, 두 레지스트리에 모두 로그인하고 `metadata-action` 작업으로 태그와 레이블을 생성합니다.
그런 다음 `build-push-action` 작업이 Docker 이미지를 빌드하여 Docker Hub 및 {% ifversion fpt or ghec or ghes > 3.4 %}{% data variables.product.prodname_container_registry %}{% else %}Docker 레지스트리{% endif %}로 푸시합니다.
