---
title: 컨테이너의 전체 다시 빌드 수행
intro: 디스크 공간이 부족하거나 개발 컨테이너 구성이 새 codespace에서 작동하는지 확인하려는 경우 컨테이너의 전체 다시 빌드를 수행할 수 있습니다.
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Full rebuilds
ms.openlocfilehash: f844d5f92073adf01c3b1a1100e6fe1912b2d7ad
ms.sourcegitcommit: 3ff64a8c8cf70e868c10105aa6bbf6cd4f78e4d3
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180852'
---
## 컨테이너 다시 빌드 정보

codespace에서 작업하는 경우 개발 환경은 가상 머신에서 실행되는 Docker 컨테이너입니다. codespace 내에서 개발 컨테이너 구성을 변경하고 해당 변경 내용을 현재 codespace에 적용하려면 컨테이너를 다시 빌드해야 합니다.

기본적으로 컨테이너를 다시 빌드할 때 {% data variables.product.prodname_github_codespaces %}은 컨테이너의 이전 빌드에서 캐시된 이미지를 다시 사용하여 빌드 프로세스를 가속화합니다. 이는 일반적으로 다음과 같은 이유로 개발 컨테이너 구성에 대한 변경 내용을 구현하는 가장 빠른 방법입니다.
- {% data variables.product.prodname_github_codespaces %}은(는) 컨테이너 레지스트리에서 이미지를 다시 사용하는 대신 캐시의 이미지를 다시 사용할 수 있습니다.
- 개발 컨테이너 기능 및 Dockerfile 지침과 같이 컨테이너를 빌드하는 방법을 정의하는 개발 컨테이너 구성의 부분은 캐시의 이미지 계층에서 이미 구현되었을 수 있으므로 이러한 프로세스가 다시 실행될 때까지 기다릴 필요가 없습니다. 그러나 컨테이너가 빌드된 후 실행되는 구성의 명령(예: `onCreateCommand`)이 다시 실행됩니다.

경우에 따라 컨테이너의 전체 다시 빌드를 수행할 수 있습니다. 전체 다시 빌드를 사용하여 {% data variables.product.prodname_github_codespaces %}는 캐시에서 모든 Docker 컨테이너, 이미지 및 볼륨을 정리한 다음 새로 끌어온 이미지로 컨테이너를 다시 빌드합니다. 구성에 정의된 모든 설정이 다시 실행되어 새 이미지 계층이 생성됩니다. 다음과 같은 상황에서 캐시된 이미지로 컨테이너를 다시 빌드하는 여러 번 반복한 후에 전체 다시 빌드를 수행할 수 있습니다.

- 구성에 정의된 설정이 캐시된 이미지에 종속되지 않고 누군가가 구성에 따라 새 codespace를 만들 때 필요에 따라 실행되도록 하려고 합니다. 예를 들어 코드스페이스로 마지막으로 끌어온 이후 기본 이미지에서 종속성이 제거되었을 수 있습니다.
- 예를 들어 디스크 공간이 부족하거나 스토리지 요금을 최소화하려는 경우 캐시에서 사용하는 디스크 공간을 확보하려고 합니다. 기본 이미지를 여러 번 변경했거나, 구성을 여러 번 반복하거나, Docker Compose를 사용하여 여러 컨테이너를 실행하는 경우 이미지 캐시에서 상당한 양의 디스크 공간을 사용할 수 있습니다.

## 전체 다시 빌드 수행

{% data variables.product.prodname_vscode %}에서 전체 다시 빌드를 수행할 수 있습니다.

{% data reusables.codespaces.command-pallette %}
1. "다시 빌드"를 입력하고 **Codespaces: 전체 컨테이너 다시 빌드를** 선택합니다.

   ![명령 팔레트의 전체 컨테이너 다시 빌드 명령 스크린샷](/assets/images/help/codespaces/codespaces-rebuild-full.png)

## 전체 다시 빌드를 통해 데이터 유지

codespace의 디렉터리에 포함된 `/workspaces` 모든 파일 및 폴더는 항상 다시 빌드를 통해 유지됩니다. 전체 다시 빌드를 통해 이 디렉터리의 콘텐츠를 유지하기 위해 설정을 변경하거나 구성을 추가할 필요가 없습니다.

전체 다시 빌드를 통해 디렉터리 외부의 `/workspaces` 파일을 유지하려는 경우 컨테이너의 원하는 위치에 영구 디렉터리에 대한 기호 링크(symlink)를 만들 수 있습니다. 예를 들어 `/workspaces/.devcontainer` 디렉터리에서 다시 빌드 간에 유지되는 `config` 디렉터리를 만들 수 있습니다. 그런 다음 `config` 디렉터리와 그 내용을 `devcontainer.json` 파일에 `postCreateCommand`로 symlink할 수 있습니다.

```json  
{
    "image": "mcr.microsoft.com/vscode/devcontainers/base:alpine",
    "postCreateCommand": ".devcontainer/postCreate.sh"
}
```

아래 예제 `postCreate.sh` 파일에서 `config` 디렉터리의 내용은 홈 디렉터리에 기호적으로 연결됩니다.

```bash
#!/bin/bash
ln -sf $PWD/.devcontainer/config $HOME/config && set +x
```

## 추가 정보
- [개발 컨테이너 소개](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)
