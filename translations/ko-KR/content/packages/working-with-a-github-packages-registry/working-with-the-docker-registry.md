---
title: Docker 레지스트리 작업
intro: '{% ifversion fpt or ghec %}이제 Docker 레지스트리가 {% data variables.product.prodname_container_registry %}로 대체되었습니다.{% else %}{% data variables.product.prodname_registry %} Docker 레지스트리{% endif %}를 사용하여 Docker 이미지를 푸시하고 끌어올 수 있습니다.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/configuring-docker-for-use-with-github-package-registry
  - /github/managing-packages-with-github-package-registry/configuring-docker-for-use-with-github-package-registry
  - /github/managing-packages-with-github-packages/configuring-docker-for-use-with-github-packages
  - /packages/using-github-packages-with-your-projects-ecosystem/configuring-docker-for-use-with-github-packages
  - /packages/guides/container-guides-for-github-packages/configuring-docker-for-use-with-github-packages
  - /packages/guides/configuring-docker-for-use-with-github-packages
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Docker registry
ms.openlocfilehash: 9cb9971b42e348e4c2b70bae7dbcccc24c4fbf89
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094531'
---
<!-- Main versioning block. Short page for dotcom -->
{% ifversion fpt or ghec %}

{% data variables.product.prodname_dotcom %}의 Docker 레지스트리(네임스페이스 `docker.pkg.github.com`를 사용함)가 {% data variables.product.prodname_container_registry %}(네임스페이스 `https://ghcr.io`를 사용)로 대체되었습니다. {% data variables.product.prodname_container_registry %}는 Docker 이미지에 대한 세분화된 권한 및 스토리지 최적화와 같은 이점을 제공합니다.

이전에 Docker 레지스트리에 저장된 Docker 이미지는 자동으로 {% data variables.product.prodname_container_registry %}로 마이그레이션됩니다. 자세한 내용은 “[Docker 레지스트리에서 {% data variables.product.prodname_container_registry %}로 마이그레이션](/packages/working-with-a-github-packages-registry/migrating-to-the-container-registry-from-the-docker-registry)” 및 “[{% data variables.product.prodname_container_registry %}로 작업](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)”을 참조하세요.

{% else %}
<!-- The remainder of this article is displayed for releases that don't support the Container registry -->

{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

{% data reusables.package_registry.admins-can-configure-package-types %}

## Docker 지원 정보

Docker 이미지를 설치하거나 게시할 때 Docker 레지스트리는 현재 Windows 이미지와 같은 외부 레이어를 지원하지 않습니다.

## {% data variables.product.prodname_registry %} 인증

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %}

### {% 데이터 variables.product.pat_generic %}을(를) 사용하여 인증

{% data reusables.package_registry.required-scopes %}

`docker` 로그인 명령을 사용하여 Docker에서 {% data variables.product.prodname_registry %}에 인증할 수 있습니다.

자격 증명을 안전하게 유지하려면 {% 데이터 variables.product.pat_generic %}을(를) 컴퓨터의 로컬 파일에 저장하고 로컬 파일에서 토큰을 읽는 Docker의 `--password-stdin` 플래그를 사용하는 것이 좋습니다.

{% ifversion fpt or ghec %} {% raw %}
  ```shell
  $ cat ~/TOKEN.txt | docker login https://docker.pkg.github.com -u <em>USERNAME</em> --password-stdin
  ```
{% endraw %} {% endif %}

{% ifversion ghes or ghae %} {% ifversion ghes %} 인스턴스에 하위 도메인 격리가 사용하도록 설정된 경우: {% endif %} {% raw %}
 ```shell
 $ cat ~/TOKEN.txt | docker login docker.HOSTNAME -u USERNAME --password-stdin
```
{% endraw %} {% ifversion ghes %} 인스턴스에 하위 도메인 격리를 사용하지 않도록 설정한 경우:

{% raw %}
 ```shell
 $ cat ~/TOKEN.txt | docker login HOSTNAME -u USERNAME --password-stdin
```
{% endraw %} {% endif %}

{% endif %}

이 예제 로그인 명령을 사용하려면 {% 데이터 variables.product.product_name %} 사용자 이름{% ifversion ghe 또는 ghae %}로 바꾸고 {`HOSTNAME`% 데이터 variables.location.product_location %}, {% endif %}의 URL 및 `~/TOKEN.txt` {% 데이터 variables.product.product_name %}에 대한 {% 데이터 variables.product.pat_generic %}의 파일 경로로 바꿉 `USERNAME` 니다.

자세한 내용은 “[Docker 로그인](https://docs.docker.com/engine/reference/commandline/login/#provide-a-password-using-stdin)”을 참조하세요.

## 이미지 게시

{% data reusables.package_registry.docker_registry_deprecation_status %}

{% note %}

**참고:** 이미지 이름은 소문자만 사용해야 합니다.

{% endnote %}

{% data variables.product.prodname_registry %}는 리포지토리당 여러 개의 최상위 Docker 이미지를 지원합니다. 리포지토리에는 여러 이미지 태그가 있을 수 있습니다. 10GB보다 큰 Docker 이미지를 게시하거나 설치하는 서비스 성능이 저하될 수 있으며 각 레이어는 5GB로 제한됩니다. 자세한 내용은 Docker 설명서의 “[Docker 태그](https://docs.docker.com/engine/reference/commandline/tag/)”를 참조하세요.

{% data reusables.package_registry.viewing-packages %}

1. `docker images`를 사용하여 Docker 이미지의 이미지 이름 및 ID를 확인합니다.
  ```shell
  $ docker images
  > <&nbsp>
  > REPOSITORY        TAG        IMAGE ID       CREATED      SIZE
  > IMAGE_NAME        VERSION    IMAGE_ID       4 weeks ago  1.11MB
  ```
2. Docker 이미지 ID 사용 DOCKER 이미지에 태그를 지정하여 *OWNER* 를 리포지토리를 소유하는 사용자 또는 조직 계정의 이름으로 대체하고, *REPOSITORY* 는 프로젝트를 포함하는 리포지토리의 이름으로 *, 패키지* 또는 이미지의 이름으로 IMAGE_NAME,{% ifversion ghes 또는 ghae %} *HOSTNAME* 을 {% data variables.location.product_location %}의 호스트 이름으로, {% endif %} 및 *빌드 시 패키지* 버전이 포함된 버전으로 바꿔서 docker 이미지에 태그를 지정합니다.
  {% ifversion fpt or ghec %}
  ```shell
  $ docker tag IMAGE_ID docker.pkg.github.com/OWNER/REPOSITORY/IMAGE_NAME:VERSION
  ```
  {% else %} {% ifversion ghes %} 인스턴스에 하위 도메인 격리가 사용하도록 설정된 경우: {% endif %}
  ```shell
  $ docker tag IMAGE_ID docker.HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION
  ```
  {% ifversion ghes %} 인스턴스에 하위 도메인 격리가 사용되지 않은 경우:
  ```shell
  $ docker tag IMAGE_ID HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION
  ```
  {% endif %} {% endif %}
3. 패키지에 대한 Docker 이미지를 아직 빌드하지 않은 경우 이미지를 빌드하여 *OWNER* 를 리포지토리를 소유하는 사용자 또는 조직 계정의 이름으로 바꾸거나, *리포* 지토리를 프로젝트가 포함된 리포지토리의 이름으로, 패키지 또는 이미지의 이름으로 *IMAGE_NAME* , 빌드 시 패키지 버전이 있는 *버전* , {% ifversion ghes 또는 ghae %} *HOSTNAME* 을 {% 데이터 variables.location.product_location %}의 호스트 이름으로 바꿔서 이미지를 빌드합니다. 현재 작업 디렉터리에 없는 경우 {% endif %} 및 이미지에 대한 *PATH* 입니다.
  {% ifversion fpt or ghec %}
  ```shell
  $ docker build -t docker.pkg.github.com/OWNER/REPOSITORY/IMAGE_NAME:VERSION PATH
  ```
  {% else %} {% ifversion ghes %} 인스턴스에 하위 도메인 격리가 사용하도록 설정된 경우: {% endif %}
  ```shell
  $ docker build -t docker.HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION PATH
  ```
  {% ifversion ghes %} 인스턴스에 하위 도메인 격리가 사용되지 않은 경우:
  ```shell
  $ docker build -t HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION PATH
  ```
  {% endif %} {% endif %}
4. {% data variables.product.prodname_registry %}에 이미지를 게시합니다.
  {% ifversion fpt or ghec %}
  ```shell
  $ docker push docker.pkg.github.com/OWNER/REPOSITORY/IMAGE_NAME:VERSION
  ```
  {% else %} {% ifversion ghes %} 인스턴스에 하위 도메인 격리가 사용하도록 설정된 경우: {% endif %}
  ```shell
  $ docker push docker.HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION
  ```
  {% ifversion ghes %} 인스턴스에 하위 도메인 격리가 사용되지 않은 경우:
  ```shell
  $ docker push HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION
  ```
  {% endif %} {% endif %} {% note %}

  **참고:** `IMAGE_NAME:SHA`를 사용하지 않고 `IMAGE_NAME:VERSION`을 사용하여 이미지를 푸시해야 합니다.

  {% endnote %}

### Docker 이미지 게시 예제

{% ifversion ghes %} 아래 예제에서는 인스턴스가 하위 도메인 격리를 사용하도록 설정되어 있다고 가정합니다.
{% endif %}

이미지 ID를 사용하여 `monalisa` 이미지의 버전 1.0을 `octocat/octo-app` 리포지토리에 게시할 수 있습니다.

{% ifversion fpt or ghec %}
```shell
$ docker images

> REPOSITORY           TAG      IMAGE ID      CREATED      SIZE
> monalisa             1.0      c75bebcdd211  4 weeks ago  1.11MB

# Tag the image with <em>OWNER/REPO/IMAGE_NAME</em>
$ docker tag c75bebcdd211 docker.pkg.github.com/octocat/octo-app/monalisa:1.0

# Push the image to {% data variables.product.prodname_registry %}
$ docker push docker.pkg.github.com/octocat/octo-app/monalisa:1.0
```

{% else %}

```shell
$ docker images

> REPOSITORY           TAG      IMAGE ID      CREATED      SIZE
> monalisa             1.0      c75bebcdd211  4 weeks ago  1.11MB

# Tag the image with <em>OWNER/REPO/IMAGE_NAME</em>
$ docker tag c75bebcdd211 docker.HOSTNAME/octocat/octo-app/monalisa:1.0

# Push the image to {% data variables.product.prodname_registry %}
$ docker push docker.HOSTNAME/octocat/octo-app/monalisa:1.0
```

{% endif %}

새 Docker 이미지를 처음으로 게시하고 이름을 `monalisa`로 지정할 수 있습니다.

{% ifversion fpt or ghec %}
```shell
# Build the image with docker.pkg.github.com/<em>OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
# Assumes Dockerfile resides in the current working directory (.)
$ docker build -t docker.pkg.github.com/octocat/octo-app/monalisa:1.0 .

# Push the image to {% data variables.product.prodname_registry %}
$ docker push docker.pkg.github.com/octocat/octo-app/monalisa:1.0
```

{% else %}
```shell
# Build the image with docker.<em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
# Assumes Dockerfile resides in the current working directory (.)
$ docker build -t docker.HOSTNAME/octocat/octo-app/monalisa:1.0 .

# Push the image to {% data variables.product.prodname_registry %}
$ docker push docker.HOSTNAME/octocat/octo-app/monalisa:1.0
```
{% endif %}

## 이미지 다운로드

{% data reusables.package_registry.docker_registry_deprecation_status %}

이 명령을 사용하여 `docker pull` {% 데이터 variables.product.prodname_registry %}에서 docker 이미지를 설치하고 *OWNER* 를 리포지토리를 소유한 사용자 또는 조직 계정의 이름으로, *REPOSITORY* 를 프로젝트가 포함된 리포지토리의 이름으로 바꿔 패키지 또는 이미지의 이름으로 *IMAGE_NAME* ,{% ifversion ghes 또는 ghae %} *HOSTNAME* 을 {% data variables.location.product_location %}의 호스트 이름으로 바꿀 수 있습니다.  {% endif %} 및 *TAG_NAME* 설치하려는 이미지에 대한 태그가 있습니다.

{% ifversion fpt or ghec %}
```shell
$ docker pull docker.pkg.github.com/OWNER/REPOSITORY/IMAGE_NAME:TAG_NAME
```
{% else %}
<!--Versioning out this "subdomain isolation enabled" line because it's the only option for GHES 2.22 so it can be misleading.-->
{% ifversion ghes %} 인스턴스에 하위 도메인 격리가 사용된 경우: {% endif %}
```shell
$ docker pull docker.HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:TAG_NAME
```
{% ifversion ghes %} 인스턴스에 하위 도메인 격리가 사용되지 않은 경우:
```shell
$ docker pull HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:TAG_NAME
```
{% endif %} {% endif %}

{% note %}

**참고:** `IMAGE_NAME:SHA`를 사용하지 않고 `IMAGE_NAME:VERSION`을 사용하여 이미지를 풀(pull)해야 합니다.

{% endnote %}

## 추가 참고 자료

- “[패키지 삭제 및 복원](/packages/learn-github-packages/deleting-and-restoring-a-package)”

{% endif %}  <!-- End of main versioning block -->
