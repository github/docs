---
ms.openlocfilehash: c9d2391a85dd42db8eb3914b9c3495e0441e0fd0
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 07/13/2022
ms.locfileid: "147061276"
---
기본적으로 {% data variables.product.prodname_actions %} 워크플로는 사전 빌드 템플릿을 만들거나 업데이트하거나 사전 빌드 사용 분기로 푸시할 때마다 트리거됩니다. 다른 워크플로와 마찬가지로, 사전 빌드 워크플로가 실행되는 동안 계정에 포함된 작업 시간(있는 경우)의 일부를 사용하거나 작업 시간(분)에 대한 요금이 부과됩니다. 작업 시간(분) 가격 책정에 대한 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 청구 정보](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)”를 참조하세요. 

{% data variables.product.prodname_actions %} 보고서에 따라 지정된 리포지토리 및 지역에 대한 각 사전 빌드 구성과 연결된 사전 빌드 템플릿의 스토리지에 대해서도 요금이 청구됩니다. 사전 빌드 템플릿의 스토리지는 codespace의 스토리지와 동일한 요율로 청구됩니다. 자세한 내용은 “[스토리지 사용량 계산](#calculating-storage-usage)”을 참조하세요.

작업 시간(분)의 소비를 줄이기 위해 개발 컨테이너 구성 파일을 변경할 때만 또는 사용자 지정 일정에 따라 사전 빌드 템플릿을 업데이트하도록 설정할 수 있습니다. 또한 사전 빌드 구성에 대해 보존할 템플릿 버전 수를 조정하여 스토리지 사용량을 관리할 수도 있습니다. 자세한 내용은 "[사전 빌드 구성](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-a-prebuild)"을 참조하세요.

조직 소유자인 경우 조직의 {% data variables.product.prodname_actions %} 사용 현황 보고서를 다운로드하여 사전 빌드 워크플로 및 스토리지의 사용량을 추적할 수 있습니다. “Codespaces 사전 빌드 만들기”라는 워크플로만 포함하도록 CSV 출력을 필터링하여 사전 빌드에 대한 워크플로 실행을 식별할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_actions %} 사용량 보기](/billing/managing-billing-for-github-actions/viewing-your-github-actions-usage#viewing-github-actions-usage-for-your-organization)”를 참조하세요.
