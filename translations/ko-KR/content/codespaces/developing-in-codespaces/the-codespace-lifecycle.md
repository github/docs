---
title: codespace 수명 주기
intro: '{% data variables.product.prodname_github_codespaces %} 환경에서 개발하고 전체 codespace 수명 주기 동안 데이터를 유지 관리할 수 있습니다.'
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Codespaces
  - Developer
redirect_from:
  - /codespaces/developing-in-codespaces/codespaces-lifecycle
ms.openlocfilehash: bf3174d3a2a91db5a817d2d7298e3ffae229e9bb
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160261'
---
## Codespace의 수명 주기 정보

Codespace의 수명 주기는 Codespace를 만들 때 시작되고 Codespace를 삭제할 때 종료됩니다. 실행 중인 프로세스에 영향을 주지 않고 활성 Codespace의 연결을 끊고 다시 연결할 수 있습니다. 프로젝트에서 변경한 내용에 손실 없이 Codespace를 중지하고 다시 시작할 수 있습니다.

## codespace 만들기

프로젝트에서 작업하려는 경우 새 Codespace를 만들거나 기존 Codespace를 열도록 선택할 수 있습니다. {% data variables.product.prodname_github_codespaces %}에서 개발할 때마다 리포지토리의 분기에서 새 codespace를 만들거나 기능에 대한 장기 실행 codespace를 유지할 수 있습니다. {% data reusables.codespaces.starting-new-project-template %} 자세한 내용은 "[리포지토리에 대한 codespace 만들기](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository)" 및 "[템플릿에서 codespace 만들기"를](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template) 참조하세요.

{% data reusables.codespaces.max-number-codespaces %} 마찬가지로 활성 코드스페이스의 최대 수에 도달하고 다른 코드스페이스를 시작하려고 하면 활성 코드스페이스 중 하나를 중지하라는 메시지가 표시됩니다.

프로젝트에서 작업할 때마다 새 Codespace를 만들도록 선택한 경우 새 커밋이 {% data variables.product.prodname_dotcom %}에 있도록 변경 내용을 정기적으로 푸시해야 합니다. 프로젝트에 대해 장기 실행 Codespace를 사용하도록 선택하는 경우 환경에 최신 커밋이 있도록 Codespace에서 작업을 시작할 때마다 리포지토리의 기본 분기에서 끌어와야 합니다. 이 워크플로는 로컬 컴퓨터에 있는 프로젝트를 작업하는 경우와 매우 유사합니다. 

{% data reusables.codespaces.prebuilds-crossreference %}

## Codespace의 변경 내용 저장

웹을 통해 Codespace에 연결하면 자동 저장이 웹 편집기에서 자동으로 활성화되고 지연 후 변경 내용을 저장하도록 구성됩니다. 데스크톱에서 실행되는 {% data variables.product.prodname_vscode %}를 통해 Codespace에 연결하는 경우 자동 저장을 사용 설정해야 합니다. 자세한 내용은 {% data variables.product.prodname_vscode %} 설명서의 [저장/자동 저장](https://code.visualstudio.com/docs/editor/codebasics#_save-auto-save)을 참조하세요.

작업은 클라우드의 가상 머신에 저장됩니다. codespace를 닫고 중지하고 나중에 저장된 작업으로 돌아갈 수 있습니다. 저장되지 않은 변경 내용이 있는 경우 편집기에 종료하기 전에 저장하라는 메시지가 표시됩니다. 그러나 codespace가 삭제되면 작업도 삭제됩니다. 작업을 유지하려면 변경 내용을 커밋하고 원격 리포지토리에 푸시하거나 템플릿에서 codespace를 만든 경우 새 원격 리포지토리에 작업을 게시해야 합니다. 자세한 내용은 “[codespace에서 소스 제어 사용](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace)”을 참조하세요.

## {% data variables.product.prodname_github_codespaces %}에 대한 시간 제한

상호 작용 없이 Codespace를 실행 상태로 두거나 Codespace를 명시적으로 중지하지 않고 종료하는 경우 Codespace는 비활성 기간 후에 시간 초과되고 실행을 중지합니다. 기본적으로 Codespace는 30분 동안 활동이 없으면 시간 제한이 적용되지만 사용자가 만든 새 Codespace의 시간 제한 기간은 사용자 지정할 수 있습니다. Codespace의 기본 시간 제한 기간을 설정하는 방법에 대한 자세한 내용은 “[{% data variables.product.prodname_github_codespaces %}의 시간 제한 기간 설정](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-github-codespaces)”을 참조하세요. Codespace를 중지하는 방법에 대한 자세한 내용은 “[Codespace 중지](#stopping-a-codespace)”를 참조하세요.

Codespace가 시간 초과되면 변경 내용이 마지막으로 저장된 시점부터 데이터가 보존됩니다. 자세한 내용은 “[Codespace의 변경 내용 저장](#saving-changes-in-a-codespace)”을 참조하세요.

## Codespace 다시 빌드

Codespace를 다시 빌드하여 새 Codespace를 만든 것처럼 정리 상태를 복원할 수 있습니다. 대부분의 경우 Codespace를 다시 빌드하는 대신 새 Codespace를 만들면 됩니다. codespace를 다시 빌드하여 개발 컨테이너 구성에 대한 변경 내용을 구현할 가능성이 높습니다. Codespace를 다시 빌드하면 Docker 컨테이너, 이미지, 볼륨 및 캐시가 정리된 다음, Codespace가 다시 빌드됩니다.

다시 빌드를 통해 이 데이터를 유지해야 하는 경우 컨테이너의 원하는 위치에 영구 디렉터리에 대한 기호 링크(symlink)를 만들 수 있습니다. 예를 들어 `.devcontainer` 디렉터리에서 다시 빌드 간에 유지되는 `config` 디렉터리를 만들 수 있습니다. 그런 다음 `config` 디렉터리와 그 내용을 `devcontainer.json` 파일에 `postCreateCommand`로 symlink할 수 있습니다.

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

자세한 내용은 “[개발 컨테이너 소개](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#applying-configuration-changes-to-a-codespace)”를 참조하세요.

## Codespace 중지

{% data reusables.codespaces.stopping-a-codespace %} 자세한 내용은 "[codespace 중지 및 시작"을 참조하세요](/codespaces/developing-in-codespaces/stopping-and-starting-a-codespace).

## Codespace 삭제

특정 작업에 대한 Codespace를 만들고 변경 내용을 원격 분기에 푸시한 후 Codespace를 안전하게 삭제할 수 있습니다.

푸시되지 않은 git 커밋이 있는 Codespace를 삭제하려고 하면 편집기에서 원격 분기에 푸시되지 않은 변경 내용이 있음을 알립니다. 원하는 변경 내용을 푸시한 다음, Codespace를 삭제하거나, Codespace와 커밋되지 않은 변경 내용을 계속 삭제할 수 있습니다. 새 Codespace를 만들지 않고 코드를 새 분기로 내보낼 수도 있습니다. 자세한 내용은 “[분기로 변경 내용 내보내기](/codespaces/troubleshooting/exporting-changes-to-a-branch)”를 참조하세요.

지정된 기간 동안 중지되고 비활성 상태로 유지된 Codespace는 자동으로 삭제됩니다. 기본적으로 비활성 codespace는 30일 후에 삭제되지만 codespace 보존 기간을 사용자 지정할 수 있습니다. 자세한 내용은 “[내 Codespace의 자동 삭제 구성](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces)”을 참조하세요.

codespace를 만드는 경우 활성 상태인지 중지되었는지에 관계없이 삭제될 때까지 스토리지 요금이 계속 발생합니다. 자세한 내용은 “[{% data variables.product.prodname_github_codespaces %} 청구 정보](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#billing-for-storage-usage)”를 참조하세요. codespace를 삭제해도 매월 청구 주기마다 누적되는 {% data variables.product.prodname_github_codespaces %}에 대한 현재 청구 가능 금액이 줄어들지 않습니다. 자세한 내용은 “[{% data variables.product.prodname_github_codespaces %} 사용량 보기](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)”를 참조하세요.

Codespace 삭제에 대한 자세한 내용은 “[Codespace 삭제](/codespaces/developing-in-codespaces/deleting-a-codespace)”를 참조하세요.

## {% data variables.product.prodname_github_codespaces %}을(를) 사용하는 동안 연결 끊기

{% data variables.product.prodname_github_codespaces %}은(는) 클라우드 기반 개발 환경이며 인터넷에 연결해야 합니다. Codespace에서 작업하는 동안 인터넷에 대한 연결이 끊어지면 Codespace에 액세스할 수 없습니다. 그러나 커밋되지 않은 변경 내용은 저장됩니다. 인터넷에 다시 연결하게 되면 Codespace가 남아 있는 상태와 정확히 동일한 상태로 Codespace에 연결할 수 있습니다. 인터넷 연결이 불안정한 경우 변경 내용을 자주 커밋하고 푸시해야 합니다.

오프라인으로 작업하는 경우가 많다는 것을 알고 있는 경우 {% data variables.product.prodname_vscode_shortname %}에 대한 ["개발 컨테이너" 확장](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)과 함께 파일을 사용하여 `devcontainer.json` 리포지토리에 대한 로컬 개발 컨테이너를 빌드하고 연결할 수 있습니다. 자세한 내용은 {% data variables.product.prodname_vscode %} 설명서의 [컨테이너 내 개발](https://code.visualstudio.com/docs/remote/containers)을 참조하세요.
