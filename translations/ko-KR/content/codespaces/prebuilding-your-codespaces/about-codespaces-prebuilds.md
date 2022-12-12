---
title: Codespaces 사전 빌드 정보
shortTitle: About prebuilds
intro: Codespaces 사전 빌드를 사용하면 크거나 복잡한 리포지토리에 대한 새 codespace를 빠르게 만들 수 있습니다.
versions:
  fpt: '*'
  ghec: '*'
topics:
- Codespaces
product: '{% data reusables.gated-features.codespaces %}'
ms.openlocfilehash: 4653ead4a97ff1ff87ac8029fb215fdc8ae56566
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 07/13/2022
ms.locfileid: "146381189"
---
## <a name="overview"></a>개요

Codespace를 미리 빌드하면 생산성을 높일 수 있으며 특히 리포지토리가 크거나 복잡하고 새 코드스페이스를 시작하는 데 2분 이상 걸리는 경우 보다 빠르게 codespace에 액세스할 수 있습니다. 프로젝트에 대한 codespace를 만들기 전에 소스 코드, 편집기 확장, 프로젝트 종속성, 명령, 구성을 이미 다운로드하고 설치하고 적용했기 때문입니다. 사전 빌드를 codespace에 대한 “준비 완료” 템플릿으로 간주합니다. 

기본적으로 리포지토리에 변경 내용을 푸시할 때마다 {% data variables.product.prodname_codespaces %}는 {% data variables.product.prodname_actions %}를 사용하여 미리 빌드를 자동으로 업데이트합니다.

리포지토리의 특정 분기에 대해 사전 빌드를 사용할 수 있는 경우, 해당 지역에서 codespace를 만들 때 표시되는 머신 유형 옵션 목록에는 "{% octicon "zap" aria-label="The zap icon" %} 사전 빌드 준비됨" 레이블이 표시됩니다. 사전 빌드가 아직 만들어지고 있으면 "{% octicon "history" aria-label="The history icon" %} 사전 빌드 진행 중" 레이블이 표시됩니다. 자세한 내용은 “[codespace 만들기](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)”를 참조하세요.

![머신 유형을 선택하기 위한 대화 상자](/assets/images/help/codespaces/choose-custom-machine-type.png)

{% note %}

{% data reusables.codespaces.prebuilds-not-available %}

{% endnote %}

## <a name="about-billing-for--data-variablesproductprodname_codespaces--prebuilds"></a>{% data variables.product.prodname_codespaces %} 사전 빌드 청구

{% data reusables.codespaces.billing-for-prebuilds %} {% data variables.product.prodname_codespaces %} 스토리지 가격 책정에 대한 자세한 내용은 “[{% data variables.product.prodname_codespaces %}에 대한 청구 정보](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces)”를 참조하세요. 

사전 빌드를 사용하여 만든 codespace의 사용은 일반 codespace와 동일한 요금으로 청구됩니다.

## <a name="about-pushing-changes-to-prebuild-enabled-branches"></a>사전 빌드된 분기로 변경 내용 푸시 정보

기본적으로 사전 빌드 구성이 있는 분기로 푸시할 때마다 {% data variables.product.prodname_dotcom %} 관리형 작업 워크플로가 실행되어 사전 빌드 템플릿을 업데이트합니다. 연결된 리포지토리의 개발 컨테이너 구성에 영향을 주는 변경 사항이 없는 한 사전 빌드 워크플로에는 지정된 사전 빌드 구성에 대해 한 번에 하나의 워크플로 실행의 동시성 제한이 있습니다. 자세한 내용은 “[개발 컨테이너 소개](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)”를 참조하세요. 실행이 이미 진행 중인 경우 가장 최근에 대기열에 있던 워크플로 실행이 현재 실행이 완료된 후 다음으로 실행됩니다. 

각 푸시에 대해 미리 빌드 템플릿을 업데이트하도록 설정하면, 리포지토리에 대한 푸시가 매우 자주 수행되는 경우 미리 빌드된 템플릿 업데이트는 최소한 사전 빌드 워크플로를 실행하는 데 걸리는 빈도만큼 발생합니다. 즉, 워크플로 실행을 완료하는 데 일반적으로 1시간이 걸린다면 실행이 성공하는 경우 또는 분기에 개발 컨테이너 구성을 변경하는 푸시가 있는 경우 약 1시간 동안 리포지토리에 대한 사전 빌드가 생성됩니다.

예를 들어 사전 빌드된 구성이 있는 분기에 대해 5개의 푸시가 연속해서 만들어지고 있다고 가정해 보겠습니다. 이 상황에서는 다음을 수행합니다.

* 사전 빌드 템플릿을 업데이트하기 위해 첫 번째 푸시에 대한 워크플로 실행이 시작됩니다.
* 나머지 4개 푸시가 개발 컨테이너 구성에 영향을 미치지 않으면 이러한 푸시에 대한 워크플로 실행이 “보류 중” 상태로 큐에 대기됩니다. 
  
  나머지 4개 푸시 중 하나가 개발 컨테이너 구성을 변경하는 경우 서비스는 해당 구성을 건너뛰지 않고 사전 빌드 만들기 워크플로를 즉시 실행하여 성공하면 그에 따라 사전 빌드를 업데이트합니다. 

* 첫 번째 실행이 완료되면 푸시 2, 3, 4에 대한 워크플로 실행이 취소되고 마지막 큐에 대기된 워크플로(푸시 5의 경우)가 실행되며 사전 빌드 템플릿이 업데이트됩니다. 
