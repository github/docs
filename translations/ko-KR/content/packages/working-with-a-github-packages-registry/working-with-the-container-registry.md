---
title: 컨테이너 레지스트리 작업
intro: '패키지 네임스페이스 `https://{% data reusables.package_registry.container-registry-hostname %}`를 사용하는 {% data variables.product.prodname_container_registry %}에 Docker 및 OCI 이미지를 저장하고 관리할 수 있습니다.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/managing-container-images-with-github-container-registry/pushing-and-pulling-docker-images
  - /packages/guides/container-guides-for-github-packages/pushing-and-pulling-docker-images
  - /packages/guides/pushing-and-pulling-docker-images
  - /packages/getting-started-with-github-container-registry/about-github-container-registry
  - /packages/managing-container-images-with-github-container-registry
  - /packages/working-with-a-github-packages-registry/enabling-improved-container-support-with-the-container-registry
  - /packages/getting-started-with-github-container-registry/enabling-improved-container-support
  - /packages/guides/container-guides-for-github-packages/enabling-improved-container-support
  - /packages/guides/enabling-improved-container-support
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>= 3.5'
shortTitle: Container registry
ms.openlocfilehash: e22f7f660b76e41888bb8ae272ecb336fc273ff4
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099061'
---
{% data reusables.package_registry.container-registry-ghes-beta %}

## {% data variables.product.prodname_container_registry %} 정보

{% data reusables.package_registry.container-registry-benefits %}

{% ifversion ghes > 3.4 %}

{% data variables.product.product_name %}에서 {% data variables.product.prodname_container_registry %}를 구성하고 사용하려면 먼저 사이트 관리자가 인스턴스에 대해 {% data variables.product.prodname_registry %}를 구성 **및** 하위 도메인 격리를 사용하도록 설정해야 합니다. 자세한 내용은 "[엔터프라이즈용 GitHub 패키지 시작](/admin/packages/getting-started-with-github-packages-for-your-enterprise)" 및 "[하위 도메인 격리 사용](/admin/configuration/configuring-network-settings/enabling-subdomain-isolation)"을 참조하세요.

{% endif %}

## {% data variables.product.prodname_container_registry %} 지원 정보

{% data variables.product.prodname_container_registry %}는 현재 다음 컨테이너 이미지 형식을 지원합니다.

* [Docker 이미지 매니페스트 V2, 스키마 2](https://docs.docker.com/registry/spec/manifest-v2-2/)
* [OCI(Open Container Initiative) 사양](https://github.com/opencontainers/image-spec)

Docker 이미지를 설치하거나 게시할 때 {% data variables.product.prodname_container_registry %}는 Windows 이미지와 같은 외부 레이어를 지원합니다.

## {% data variables.product.prodname_container_registry %}에 인증

{% ifversion fpt or ghec or ghes > 3.4 %} {% data variables.product.prodname_actions %} 워크플로 내에서 {% data variables.product.prodname_container_registry %}(`ghcr.io`)에 인증하려면 최상의 보안과 환경을 위해 `GITHUB_TOKEN`을 사용하세요. {% data reusables.package_registry.authenticate_with_pat_for_v2_registry %} {% endif %}

{% ifversion ghes %} 아래 예제에서 {% 데이터 variables.location.product_location_enterprise %} 호스트 이름 또는 IP 주소로 대체 `HOSTNAME` 해야 합니다.{ % endif %}

{% data reusables.package_registry.authenticate-to-container-registry-steps %}

## 컨테이너 이미지 푸시

이 예제에서는 최신 버전의 `IMAGE_NAME`을 푸시합니다.
  ```shell
  $ docker push {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE_NAME:latest
  ```

이 예제에서는 이미지의 `2.5` 버전을 푸시합니다.
  ```shell
  $ docker push {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE_NAME:2.5
  ```

패키지를 처음 게시할 때 기본 표시 여부는 프라이빗입니다. 표시 여부를 변경하거나 액세스 권한을 설정하려면 “[패키지의 액세스 제어 및 표시 여부 구성](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)”을 참조하세요.

## 컨테이너 이미지 풀

### 다이제스트별로 풀

항상 동일한 이미지를 사용하려면 `digest` SHA 값으로 풀(pull)하려는 정확한 컨테이너 이미지 버전을 지정할 수 있습니다.

1. 다이제스트 SHA 값을 찾으려면 `docker inspect` 또는 `docker pull`을 사용하고 `Digest:` 뒤의 SHA 값을 복사합니다.
  ```shell
  $ docker inspect {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE_NAME
  ```
2. 필요에 따라 이미지를 로컬로 제거합니다.
  ```shell
  $ docker rmi  {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE_NAME:latest
  ```

3. 이미지 이름 뒤의 `@YOUR_SHA_VALUE`를 사용하여 컨테이너 이미지를 풀합니다.
  ```shell
  $ docker pull {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE_NAME@sha256:82jf9a84u29hiasldj289498uhois8498hjs29hkuhs
  ```

### 이름별로 풀

  ```shell
  $ docker pull {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE_NAME
  ```

### 이름 및 버전별로 풀

이름 및 `1.14.1` 버전 태그로 풀한 이미지를 보여 주는 Docker CLI 예제:
  ```shell
  $ docker pull {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE_NAME:1.14.1
  > 5e35bd43cf78: Pull complete
  > 0c48c2209aab: Pull complete
  > fd45dd1aad5a: Pull complete
  > db6eb50c2d36: Pull complete
  > Digest: sha256:ae3b135f133155b3824d8b1f62959ff8a72e9cf9e884d88db7895d8544010d8e
  > Status: Downloaded newer image for {% data reusables.package_registry.container-registry-hostname %}/orgname/image-name/release:1.14.1
  > {% data reusables.package_registry.container-registry-hostname %}/orgname/image-name/release:1.14.1
  ```

### 이름 및 최신 버전별로 풀

  ```shell
  $ docker pull {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE_NAME:latest
  > latest: Pulling from user/image-name
  > Digest: sha256:b3d3e366b55f9a54599220198b3db5da8f53592acbbb7dc7e4e9878762fc5344
  > Status: Downloaded newer image for {% data reusables.package_registry.container-registry-hostname %}/user/image-name:latest
  > {% data reusables.package_registry.container-registry-hostname %}/user/image-name:latest
  ```

## 컨테이너 이미지 빌드

이 예제에서는 `hello_docker` 이미지를 빌드합니다.
  ```shell
  $ docker build -t hello_docker .
  ```

## 컨테이너 이미지 태그 지정

1. 태그를 지정할 Docker 이미지의 ID를 찾습니다.
  ```shell
  $ docker images
  > REPOSITORY                                            TAG                 IMAGE ID            CREATED             SIZE
  > {% data reusables.package_registry.container-registry-hostname %}/my-org/hello_docker         latest              38f737a91f39        47 hours ago        91.7MB
  > {% data reusables.package_registry.container-registry-hostname %}/my-username/hello_docker    latest              38f737a91f39        47 hours ago        91.7MB
  > hello-world                                           latest              fce289e99eb9        16 months ago       1.84kB
  ```

2. 이미지 ID와 원하는 이미지 이름 및 호스팅 대상을 사용하여 Docker 이미지에 태그를 지정합니다.
  ```shell
  $ docker tag 38f737a91f39 {% data reusables.package_registry.container-registry-hostname %}/OWNER/NEW_IMAGE_NAME:latest
  ```

## 컨테이너 이미지 레이블 지정

{% data reusables.package_registry.about-docker-labels %} Docker 레이블에 대한 자세한 내용은 공식 Docker 설명서의 [LABEL](https://docs.docker.com/engine/reference/builder/#label) 및 리포지토리의 `opencontainers/image-spec` [미리 정의된 주석 키를](https://github.com/opencontainers/image-spec/blob/master/annotations.md#pre-defined-annotation-keys) 참조하세요.

다음 레이블은 {% 데이터 variables.product.prodname_container_registry %}에서 지원됩니다. 지원되는 레이블은 이미지의 패키지 페이지에 표시됩니다.

레이블 | Description
------|------------
| `org.opencontainers.image.source` | 패키지와 연결된 리포지토리의 URL입니다. 자세한 내용은 “[패키지에 리포지토리 연결](/packages/learn-github-packages/connecting-a-repository-to-a-package#connecting-a-repository-to-a-container-image-using-the-command-line)”을 참조하세요.
| `org.opencontainers.image.description` | 텍스트 전용 설명은 512자로 제한됩니다. 이 설명은 패키지의 이름 아래에 있는 패키지 페이지에 표시됩니다.
| `org.opencontainers.image.licenses` | "MIT"와 같은 SPDX 라이선스 식별자는 256자로 제한됩니다. 라이선스는 패키지 페이지의 "세부 정보" 사이드바에 표시됩니다. 자세한 내용은 [SPDX 라이선스 목록을 참조하세요](https://spdx.org/licenses/).

이미지 `LABEL` `Dockerfile`에 레이블을 추가하려면 . 예를 들어 사용자가 `monalisa` 소유하고 `my-repo`있고 이미지가 MIT 라이선스 조건에 따라 배포되는 경우 다음 줄을 다음 줄에 추가합니다 `Dockerfile`.

```dockerfile
LABEL org.opencontainers.image.source=https://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/monalisa/my-repo
LABEL org.opencontainers.image.description="My container image"
LABEL org.opencontainers.image.licenses=MIT
```

또는 명령을 사용하여 빌드 시 이미지에 레이블을 `docker build` 추가할 수 있습니다.

```shell
$ docker build \
 --label "org.opencontainers.image.source=https://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/monalisa/my-repo" \
 --label "org.opencontainers.image.description=My container image" \
 --label "org.opencontainers.image.licenses=MIT"
