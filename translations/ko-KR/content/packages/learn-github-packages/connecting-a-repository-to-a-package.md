---
title: 리포지토리를 패키지에 연결
intro: '{% 데이터 variables.location.product_location %}의 컨테이너 이미지에 리포지토리를 연결할 수 있습니다.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/managing-container-images-with-github-container-registry/connecting-a-repository-to-a-container-image
  - /packages/guides/connecting-a-repository-to-a-container-image
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
shortTitle: Connect a repository
ms.openlocfilehash: f13907e510c11add3ab2a24d060b275daa3aa855
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094667'
---
리포지토리를 패키지에 연결하면 패키지 방문 페이지에 README와 같은 리포지토리의 정보와 링크가 표시됩니다.

## {% data variables.product.prodname_dotcom %}에서 리포지토리를 사용자 소유 패키지에 연결

{% data reusables.package_registry.package-settings-from-user-level %}

{% data reusables.package_registry.repository_connection_steps %}

## {% data variables.product.prodname_dotcom %}에서 리포지토리를 조직 소유 패키지에 연결

{% data reusables.package_registry.package-settings-from-org-level %}

{% data reusables.package_registry.repository_connection_steps %}

{% ifversion fpt or ghec or ghes > 3.4 %}
## 명령줄을 사용하여 리포지토리를 컨테이너 이미지에 연결

{% ifversion ghes > 3.4 %} {% data reusables.package_registry.container-registry-ghes-beta %} {% endif %}

1. Dockerfile에서 이 줄을 추가하고 {% ifversion ghes %}`HOSTNAME`, {% endif %}`OWNER`와 `REPO`를 사용자 세부 정보로 바꿉니다.

 ```shell
 LABEL org.opencontainers.image.source=https://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/OWNER/REPO
 ```
 예를 들어 사용자가 `monalisa` 소유하고 `my-repo`있고 {% 데이터 variables.location.product_location %} 호스트 이름이면 Dockerfile `github.companyname.com`에 다음 줄을 추가합니다.
 ```shell
 LABEL org.opencontainers.image.source=https://{% ifversion fpt or ghec %}github.com{% else %}{% data reusables.package_registry.container-registry-example-hostname %}{% endif %}/monalisa/my-repo
 ```
 자세한 내용은 공식 Docker 설명서의 “[레이블](https://docs.docker.com/engine/reference/builder/#label)”과 `opencontainers/image-spec` 리포지토리의 “[미리 정의된 주석 키](https://github.com/opencontainers/image-spec/blob/master/annotations.md#pre-defined-annotation-keys)”를 참조하세요.

2. 컨테이너 이미지를 빌드합니다. 다음은 현재 디렉터리의 Dockerfile에서 이미지를 빌드하고 이미지 이름 `hello_docker`를 할당하는 예제입니다.

  ```shell
  $ docker build -t hello_docker .
  ```
3. 필요에 따라 태그를 지정할 Docker 이미지에 대한 세부 정보를 검토합니다.
  ```shell
  $ docker images
  > REPOSITORY                                                    TAG                 IMAGE ID            CREATED             SIZE
  > {% data reusables.package_registry.container-registry-example-hostname %}/my-org/hello_docker         latest              38f737a91f39        47 hours ago        91.7MB
  > {% data reusables.package_registry.container-registry-example-hostname %}/my-username/hello_docker    latest              38f737a91f39        47 hours ago        91.7MB
  > hello-world                                                   latest              fce289e99eb9        16 months ago       1.84kB
  ```

4. 원하는 이미지 이름 및 호스팅 대상으로 Docker 이미지에 태그를 지정합니다.
  ```shell
  $ docker tag IMAGE_NAME {% data reusables.package_registry.container-registry-hostname %}/OWNER/NEW_IMAGE_NAME:TAG
  ```
  예를 들면 다음과 같습니다.
  ```shell
  $ docker tag 38f737a91f39 {% data reusables.package_registry.container-registry-example-hostname %}/monalisa/hello_docker:latest
  ```

5. 아직 인증하지 않은 경우 {% data variables.product.prodname_container_registry %}에 인증합니다. 자세한 내용은 “[{% data variables.product.prodname_container_registry %}에 인증](/packages/managing-container-images-with-github-container-registry/pushing-and-pulling-docker-images#authenticating-to-the-container-registry)”을 참조하세요.
    {% raw %}
    ```shell
    $ echo $CR_PAT | docker login {% endraw %}{% data reusables.package_registry.container-registry-hostname %}{% raw %} -u USERNAME --password-stdin
    > Login Succeeded
    ```
    {% endraw %}
6. 컨테이너 이미지를 {% data variables.product.prodname_container_registry %}에 푸시합니다.
  ```shell
  $ docker push {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE-NAME:TAG
  ```
  예를 들면 다음과 같습니다.
  ```shell
  $ docker push {% data reusables.package_registry.container-registry-example-hostname %}/monalisa/hello_docker:latest
  ```
{% endif %}
