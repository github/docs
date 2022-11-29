---
title: GitHub Codespaces 사전 빌드 관련 정보
shortTitle: About prebuilds
intro: '{% data variables.product.prodname_github_codespaces %} 사전 빌드는 크거나 복잡한 리포지토리에 대한 새 codespace 생성 속도를 향상하는 데 도움이 됩니다.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
redirect_from:
  - /codespaces/prebuilding-your-codespaces/about-codespaces-prebuilds
ms.openlocfilehash: e0962e410f2227a23ff98c8a3e7995ea8ec8a914
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158799'
---
## 개요

{% data reusables.codespaces.prebuilds-definition %}

현재 리포지토리에 대한 codespace를 만드는 데 2분 이상 걸리는 경우 사전 빌드를 사용하면 도움이 될 수 있습니다. 사전 빌드를 사용하면 codespace를 만들기 전에 소스 코드, 편집기 확장, 프로젝트 종속성, 명령 및 구성이 이미 다운로드, 설치 및 적용되었기 때문입니다. 

기본적으로 리포지토리에 변경 내용을 푸시할 때마다 {% data variables.product.prodname_github_codespaces %}는 {% data variables.product.prodname_actions %}를 사용하여 미리 빌드를 자동으로 업데이트합니다.

리포지토리의 특정 분기, 특정 개발 컨테이너 구성 파일 및 해당 지역에 대해 사전 빌드를 사용할 수 있는 경우, codespace를 만들 때 머신 유형 옵션 목록에 "{% octicon "zap" aria-label="The zap icon" %} 사전 빌드 준비됨" 레이블이 표시됩니다. 사전 빌드가 아직 만들어지고 있으면 "{% octicon "history" aria-label="The history icon" %} 사전 빌드 진행 중" 레이블이 표시됩니다. 자세한 내용은 "[리포지토리에 대한 codespace 만들기"를 참조하세요](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository).

![머신 유형을 선택하기 위한 대화 상자](/assets/images/help/codespaces/choose-custom-machine-type.png)

"Codespaces" 페이지의 템플릿에서 codespace를 만들 때 {% data variables.product.prodname_dotcom %}는 자동으로 사전 빌드를 사용하여 생성 시간을 단축할 수 있습니다. 템플릿에 대한 자세한 내용은 "[템플릿에서 codespace 만들기"를 참조하세요](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template).

## 사전 빌드 프로세스

사전 빌드를 만들려면 사전 빌드 구성을 설정합니다. 구성을 저장하면 {% data variables.product.prodname_actions %} 워크플로가 실행되어 필요한 각 사전 빌드를 만들며, 사전 빌드당 하나의 워크플로가 실행됩니다. 또한 워크플로는 구성에 대한 사전 빌드를 업데이트해야 할 때마다 실행됩니다. 예약된 간격, 사전 빌드 사용 리포지토리로 푸시 또는 개발 컨테이너 구성을 변경할 때 발생할 수 있습니다. 자세한 내용은 “[사전 빌드 구성](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-prebuilds)”을 참조하세요.  

사전 빌드 구성 워크플로가 실행되면 {% data variables.product.prodname_dotcom %}에서 임시 codespace를 만들어 `devcontainer.json` 파일의 모든 `onCreateCommand` 명령과 `updateContentCommand` 명령을 포함하여 설정 작업을 수행합니다. 사전 빌드를 만드는 동안에는 `postCreateCommand` 명령이 실행되지 않습니다. 이러한 명령에 대한 자세한 내용은 {% data variables.product.prodname_vscode_shortname %} 설명서에서 [`devcontainer.json`참조](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_devcontainerjson-properties)를 확인하세요. 생성된 컨테이너의 스냅샷이 만들어지고 저장됩니다.

다른 {% data variables.product.prodname_actions %} 워크플로와 마찬가지로 사전 빌드 구성 워크플로를 실행하면 계정에 포함된 {% data variables.product.prodname_actions %} 분 중 일부가 사용되거나 {% data variables.product.prodname_actions %} 분 요금이 부과됩니다. codespace 사전 빌드의 스토리지는 활성 또는 중지된 codespace 스토리지와 동일한 방식으로 청구됩니다. 자세한 내용은 “[{% data variables.product.prodname_github_codespaces %} 청구 정보](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#billing-for-codespaces-prebuilds)”를 참조하세요.

사전 빌드에서 codespace를 만들 때 {% data variables.product.prodname_dotcom %}에서는 스토리지로부터 기존 컨테이너 스냅샷을 다운로드하고 새 가상 머신에 배포하여 개발 컨테이너 구성에 지정된 나머지 명령을 완료합니다. 리포지토리 복제와 같은 많은 작업이 이미 수행되었으므로 사전 빌드에서 codespace를 만드는 것이 사전 빌드 없이 만드는 것보다 훨씬 빠를 수 있습니다. 리포지토리가 크거나 `onCreateCommand` 명령이 실행되는 데 시간이 오래 걸리는 경우에도 마찬가지입니다.

## 사전 빌드된 분기로 변경 내용 푸시 정보

기본적으로 사전 빌드 구성이 있는 분기에 푸시할 때마다 {% data variables.product.prodname_dotcom %}관리되는 {% data variables.product.prodname_actions %} 워크플로가 실행되어 사전 빌드를 업데이트합니다. 연결된 리포지토리의 개발 컨테이너 구성에 영향을 주는 변경 사항이 없는 한 사전 빌드 워크플로에는 지정된 사전 빌드 구성에 대해 한 번에 하나의 워크플로 실행의 동시성 제한이 있습니다. 자세한 내용은 “[개발 컨테이너 소개](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)”를 참조하세요. 실행이 이미 진행 중인 경우 가장 최근에 대기열에 있던 워크플로 실행이 현재 실행이 완료된 후 다음으로 실행됩니다. 

각 푸시에 대해 사전 빌드를 업데이트하도록 설정하면, 리포지토리에 대한 푸시가 매우 자주 수행되는 경우 사전 빌드 업데이트는 최소한 사전 빌드 워크플로를 실행하는 데 걸리는 빈도만큼 발생합니다. 즉, 워크플로 실행을 완료하는 데 일반적으로 1시간이 걸린다면 실행이 성공하는 경우 또는 분기에 개발 컨테이너 구성을 변경하는 푸시가 있는 경우 약 1시간 동안 리포지토리에 대한 사전 빌드가 생성됩니다.

예를 들어 사전 빌드된 구성이 있는 분기에 대해 5개의 푸시가 연속해서 만들어지고 있다고 가정해 보겠습니다. 이 상황에서는 다음을 수행합니다.

* 사전 빌드를 업데이트하기 위해 첫 번째 푸시에 대한 워크플로 실행이 시작됩니다.
* 나머지 4개 푸시가 개발 컨테이너 구성에 영향을 미치지 않으면 이러한 푸시에 대한 워크플로 실행이 “보류 중” 상태로 큐에 대기됩니다. 
  
  나머지 4개 푸시 중 하나가 개발 컨테이너 구성을 변경하는 경우 서비스는 해당 구성을 건너뛰지 않고 사전 빌드 만들기 워크플로를 즉시 실행하여 성공하면 그에 따라 사전 빌드를 업데이트합니다. 

* 첫 번째 실행이 완료되면 푸시 2, 3, 4에 대한 워크플로 실행이 취소되고 마지막 큐에 대기된 워크플로(푸시 5의 경우)가 실행되며 사전 빌드가 업데이트됩니다. 
