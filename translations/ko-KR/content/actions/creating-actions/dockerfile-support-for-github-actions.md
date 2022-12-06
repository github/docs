---
title: GitHub Actions에 대한 Dockerfile 지원
shortTitle: Dockerfile support
intro: Docker 컨테이너 작업에 대한 `Dockerfile`을 만들 때 일부 Docker 명령이 GitHub Actions 및 작업의 메타데이터 파일과 상호 작용하는 방법을 알고 있어야 합니다.
redirect_from:
  - /actions/building-actions/dockerfile-support-for-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: reference
ms.openlocfilehash: 6e061e479f4988398cbdc92114e387a3055734af
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145088646'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Dockerfile 명령 정보

`Dockerfile`에는 Docker 컨테이너의 콘텐츠 및 시작 동작을 정의하는 명령과 인수가 포함되어 있습니다. Docker에서 지원하는 명령에 대한 자세한 내용은 Docker 설명서의 “[Dockerfile 참조](https://docs.docker.com/engine/reference/builder/)”를 참조하세요.

## Dockerfile 명령 및 재정의

일부 Docker 명령은 GitHub Actions와 상호 작용하며 작업의 메타데이터 파일은 일부 Docker 명령을 재정의할 수 있습니다. 예기치 않은 동작을 방지하기 위해 Dockerfile이 {% data variables.product.prodname_actions %}와 상호 작용하는 방법을 잘 알고 있어야 합니다.

### USER

Docker 작업은 기본 Docker 사용자(루트)에 의해 실행되어야 합니다. `GITHUB_WORKSPACE`에 액세스할 수 없으므로 `Dockerfile`에서 `USER` 명령을 사용하지 마세요. 자세한 내용은 Docker 설명서의 “[환경 변수 사용](/actions/configuring-and-managing-workflows/using-environment-variables)” 및 [USER 참조](https://docs.docker.com/engine/reference/builder/#user)를 참조하세요.

### FROM

`Dockerfile`의 첫 번째 명령은 Docker 기본 이미지를 선택하는 `FROM`이어야 합니다. 자세한 내용은 Docker 설명서의 [FROM 참조](https://docs.docker.com/engine/reference/builder/#from)를 참조하세요.

`FROM` 인수를 설정할 때 몇 가지 모범 사례는 다음과 같습니다.

- 공식 Docker 이미지를 사용하는 것이 좋습니다. 예를 들어 `python` 또는 `ruby`입니다.
- 버전 태그가 있는 경우 주 버전과 함께 사용하는 것이 좋습니다. 예를 들어 `node:latest` 대신 `node:10`을 사용합니다.
- [Debian](https://www.debian.org/) 운영 체제를 기반으로 Docker 이미지를 사용하는 것이 좋습니다.

### WORKDIR

{% data variables.product.product_name %}는 `GITHUB_WORKSPACE` 환경 변수에 작업 디렉터리 경로를 설정합니다. `Dockerfile`에서 `WORKDIR` 명령을 사용하지 않는 것이 좋습니다. 작업이 실행되기 전에 {% data variables.product.product_name %}는 Docker 이미지의 해당 위치에 있던 모든 항목 위에 `GITHUB_WORKSPACE` 디렉터리를 탑재하고 `GITHUB_WORKSPACE`를 작업 디렉터리로 설정합니다. 자세한 내용은 Docker 설명서의 “[환경 변수 사용](/actions/configuring-and-managing-workflows/using-environment-variables)” 및 [WORKDIR 참조](https://docs.docker.com/engine/reference/builder/#workdir)를 참조하세요.

### ENTRYPOINT

작업의 메타데이터 파일에 `entrypoint`을 정의하면 `Dockerfile`에 정의된 `ENTRYPOINT`를 재정의합니다. 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 메타데이터 구문](/actions/creating-actions/metadata-syntax-for-github-actions/#runsentrypoint)”을 참조하세요.

Docker `ENTRYPOINT` 명령에는 _shell_ 형식과 _exec_ 형식이 있습니다. Docker `ENTRYPOINT` 문서에서는 `ENTRYPOINT` 명령의 _exec_ 형식을 사용하는 것이 좋습니다. _exec_ 및 _shell_ 형식에 대한 자세한 내용은 Docker 문서의 [ENTRYPOINT 참조](https://docs.docker.com/engine/reference/builder/#entrypoint)를 참조하세요.

Dockerfile에서 진입점을 지정하는 데 `WORKDIR`을 사용하면 안 됩니다. 대신 절대 경로를 사용해야 합니다. 자세한 내용은 [WORKDIR](#workdir)을 참조하세요.

`ENTRYPOINT` 명령의 _exec_ 형식을 사용하도록 컨테이너를 구성하면 작업의 메타데이터 파일에 구성된 `args`가 명령 셸에서 실행되지 않습니다. 작업의 `args`에 환경 변수가 포함된 경우 변수는 대체되지 않습니다. 예를 들어 다음 _exec_ 형식을 사용하면 `$GITHUB_SHA`에 저장된 값이 출력되지 않고 대신 `"$GITHUB_SHA"`가 출력됩니다.

```dockerfile
ENTRYPOINT ["echo $GITHUB_SHA"]
```

 변수를 대체하길 원하면 _shell_ 형식을 사용하거나 셸을 직접 실행하세요. 예를 들어 다음 _exec_ 형식을 사용하면 셸을 실행하여 `GITHUB_SHA` 환경 변수에 저장된 값을 출력할 수 있습니다.

```dockerfile
ENTRYPOINT ["sh", "-c", "echo $GITHUB_SHA"]
```

 작업의 메타데이터 파일에 정의된 `args`를 `ENTRYPOINT`에서 _exec_ 형식을 사용하는 Docker 컨테이너에 공급하려면 `ENTRYPOINT` 명령에서 호출하는 `entrypoint.sh`라는 셸 스크립트를 만드는 것이 좋습니다.

#### 예제 *Dockerfile*

```dockerfile
# Container image that runs your code
FROM debian:9.5-slim

# Copies your code file from your action repository to the filesystem path `/` of the container
COPY entrypoint.sh /entrypoint.sh

# Executes `entrypoint.sh` when the Docker container starts up
ENTRYPOINT ["/entrypoint.sh"]
```

#### 예제 *entrypoint.sh* 파일

위의 예제 Dockerfile을 사용하여 {% data variables.product.product_name %}는 작업의 메타데이터 파일에 구성된 `args`을 인수로 `entrypoint.sh`에 보냅니다. 시스템의 [POSIX](https://en.wikipedia.org/wiki/POSIX) 호환 셸을 명시적으로 사용하려면 `entrypoint.sh` 파일 위쪽의 `#!/bin/sh` [셔뱅](https://en.wikipedia.org/wiki/Shebang_(Unix))을 추가합니다.

``` sh
#!/bin/sh

# `$*` expands the `args` supplied in an `array` individually
# or splits `args` in a string separated by whitespace.
sh -c "echo $*"
```

코드는 실행 파일이어야 합니다. 워크플로에서 사용하기 전에 `entrypoint.sh` 파일에 `execute` 권한이 있는지 확인하세요. 다음 명령을 사용하여 터미널에서 권한을 수정할 수 있습니다.
  ``` sh
  chmod +x entrypoint.sh
  ```

`ENTRYPOINT` 셸 스크립트를 실행할 수 없으면 다음과 유사한 오류가 수신됩니다.

``` sh
Error response from daemon: OCI runtime create failed: container_linux.go:348: starting container process caused "exec: \"/entrypoint.sh\": permission denied": unknown
```

### CMD

작업의 메타데이터 파일에 `args`을 정의하면 `args`가 `Dockerfile`에 지정된 `CMD` 명령을 재정의합니다. 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 메타데이터 구문](/actions/creating-actions/metadata-syntax-for-github-actions#runsargs)”을 참조하세요.

`Dockerfile`에서 `CMD`를 사용하는 경우 다음 지침을 따르세요.

{% data reusables.actions.dockerfile-guidelines %}

## 지원되는 Linux 기능

{% data variables.product.prodname_actions %}는 Docker에서 지원하는 기본 Linux 기능을 지원합니다. 기능은 추가하거나 제거할 수 없습니다. Docker에서 지원하는 기본 Linux 기능에 대한 자세한 내용은 Docker 설명서의 “[런타임 권한 및 Linux 기능](https://docs.docker.com/engine/reference/run/#runtime-privilege-and-linux-capabilities)”을 참조하세요. Linux 기능에 대한 자세한 내용은 Linux man-page의 “[Linux 기능 개요](http://man7.org/linux/man-pages/man7/capabilities.7.html)”를 참조하세요.
