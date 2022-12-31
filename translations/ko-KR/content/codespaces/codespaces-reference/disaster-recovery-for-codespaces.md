---
title: Codespaces의 재해 복구
intro: 이 문서에서는 주요 자연 재해 또는 광범위한 서비스 중단으로 인해 전체 지역에 중단이 발생할 때의 재해 복구 시나리오와 관련된 참고 자료를 설명합니다.
versions:
  fpt: '*'
  ghec: '*'
product: '{% data reusables.gated-features.codespaces %}'
topics:
- Codespaces
shortTitle: Disaster recovery
ms.openlocfilehash: d33c9e5f1af8775ae5f8f097ba3911edd348dd1a
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145149350"
---
{% data variables.product.prodname_codespaces %}를 항상 사용할 수 있도록 지원하기 위해 최선을 다하고 있습니다. 그러나 서비스가 통제를 벗어나 계획되지 않은 서비스 중단이 발생하는 경우가 있습니다.

재해 복구 시나리오는 거의 발생하지 않지만 전체 지역이 중단될 경우에 대비하는 것이 좋습니다. 전체 지역에서 서비스 중단이 발생할 경우 데이터의 로컬 중복 복사본을 일시적으로 사용할 수 없게 됩니다.

다음 지침은 codespace가 배포된 전체 지역의 서비스 중단을 처리하는 방법에 대한 옵션을 제공합니다.

{% note %}

**참고:** 원격 리포지토리에 자주 푸시하면 서비스 전체 중단의 잠재적 영향을 줄일 수 있습니다.

{% endnote %}

## <a name="option-1-create-a-new-codespace-in-another-region"></a>옵션 1: 다른 지역에 새 codespace 만들기

지역 중단의 경우 영향을 받지 않는 지역에 codespace를 다시 만들어 계속 작업하는 것이 좋습니다. 새 codespace에는 {% data variables.product.prodname_dotcom %}에 대한 마지막 푸시를 기준으로 모든 변경 내용이 포함됩니다. 다른 지역을 수동으로 설정하는 방법에 대한 자세한 내용은 “[Codespaces의 기본 지역 설정](/codespaces/managing-your-codespaces/setting-your-default-region-for-codespaces)”을 참조하세요.

프로젝트 리포지토리에서 개발 환경을 자동으로 복원하는 데 필요한 도구, 런타임, 프레임워크, 편집기 설정, 확장, 기타 구성을 정의할 수 있는 `devcontainer.json`을 구성하여 복구 시간을 최적화할 수 있습니다. 자세한 내용은 “[개발 컨테이너 소개](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)”를 참조하세요.

## <a name="option-2-wait-for-recovery"></a>옵션 2: 복구 대기

이 경우에 사용자의 조치가 필요하지 않습니다. 서비스 가용성을 복원하기 위해 열심히 노력 중입니다. 

[상태 대시보드](https://www.githubstatus.com/)에서 현재 서비스 상태를 확인할 수 있습니다.

## <a name="option-3-clone-the-repository-locally-or-edit-in-the-browser"></a>옵션 3: 리포지토리를 로컬로 복제하거나 브라우저에서 편집

{% data variables.product.prodname_codespaces %}는 미리 구성된 개발자 환경의 이점을 제공하지만 {% data variables.product.prodname_dotcom_the_website %}에서 호스트된 리포지토리를 통해 소스 코드에 항상 액세스할 수 있어야 합니다. {% data variables.product.prodname_codespaces %}가 중단된 경우에도 리포지토리를 로컬로 복제하거나 {% data variables.product.company_short %} 브라우저 편집기에서 파일을 편집할 수 있습니다. 자세한 내용은 “[파일 편집](/repositories/working-with-files/managing-files/editing-files)”을 참조하세요.

이 옵션은 개발 환경을 구성하지 않지만 서비스 중단이 해결될 때까지 기다리는 동안 필요에 따라 소스 코드를 변경할 수 있습니다.

## <a name="option-4-use-remote-containers-and-docker-for-a-local-containerized-environment"></a>옵션 4: 컨테이너화된 로컬 환경에 Remote-Containers 및 Docker 사용

리포지토리에 `devcontainer.json`이 있는 경우 {% data variables.product.prodname_vscode %}의 [Remote-Containers 확장](https://code.visualstudio.com/docs/remote/containers#_quick-start-open-a-git-repository-or-github-pr-in-an-isolated-container-volume)을 사용하여 리포지토리용 로컬 개발 컨테이너를 빌드하고 연결하는 것이 좋습니다. 이 옵션의 설정 시간은 로컬 사양 및 개발 컨테이너 설정의 복잡성에 따라 달라집니다.

{% note %}

**참고:** 이 옵션을 시도하기 전에 로컬 설정이 [최소 요구 사항](https://code.visualstudio.com/docs/remote/containers#_system-requirements)을 충족하는지 확인합니다.

{% endnote %}
