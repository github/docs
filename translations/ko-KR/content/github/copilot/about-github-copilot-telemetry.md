---
title: GitHub Copilot 원격 분석 정보
intro: '{% data variables.product.prodname_copilot %} collects and relies on additional telemetry data beyond what other {% data variables.product.company_short %} products and services collect.'
redirect_from:
- /early-access/github/copilot/about-github-copilot-telemetry
versions:
  fpt: '*'
ms.openlocfilehash: ad46b7b2b6626cad0419b1588d64923cca34c0ca
ms.sourcegitcommit: d8653a0ad00d2122cdaaed47f6a4f0c1d0f41845
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 05/18/2022
ms.locfileid: "145148760"
---
## <a name="what-data-is-collected"></a>수집되는 데이터

수집되는 데이터는 “[{% data variables.product.prodname_copilot %} 원격 분석 용어](/github/copilot/github-copilot-telemetry-terms)”에 설명되어 있습니다. 또한 {% data variables.product.prodname_copilot %} 확장/플러그 인은 타임스탬프에 연결된 사용자의 IDE(통합 개발 환경)에서의 활동 및 확장/플러그 인 원격 분석 패키지에서 수집한 메타데이터를 수집합니다. {% data variables.product.prodname_vscode %}, IntelliJ, NeoVIM 또는 기타 IDE와 함께 사용하는 경우 {% data variables.product.prodname_copilot %}은 해당 IDE에서 제공하는 표준 메타데이터를 수집합니다. 

## <a name="how-the-data-is-used-by--data-variablesproductcompany_short-"></a>{% data variables.product.company_short %}에서 데이터를 사용하는 방법

{% data variables.product.company_short %}는 이 데이터를 다음에 사용합니다.

- 사용자에게 유용할 수 있는 제안을 처리 및 예측하는 다양한 전략의 평가를 포함한 제품의 직접적인 개선
- 제품 평가(예: 사용자에게 미치는 긍정적인 영향 측정)
- 기본 코드 생성 모델 개선. 예를 들어 긍정적인 예와 부정적인 예를 제공(그러나 항상 한 사용자의 전용 코드가 다른 {% data variables.product.prodname_copilot %} 사용자에게 코드를 제안하는 입력으로 사용되지는 않도록)
- 밀접하게 관련된 {% data variables.product.company_short %} 제품 안내
- {% data variables.product.prodname_copilot %} 서비스의 잠재적인 남용 조사 및 검색
- {% data variables.product.prodname_copilot %} 서비스의 개선과 관련된 기타 목적(다음 섹션에 설명된 공유 포함)

## <a name="how-the-data-is-shared"></a>데이터 공유 방법

원격 분석 데이터는 적절한 암호화와 함께 {% data variables.product.company_short %} 시스템에 안전하게 저장됩니다. 사용자 편집 작업, 소스 코드 조각, 리포지토리 및 파일 경로의 URL 등은 중요한 데이터입니다. 따라서 액세스가 엄격하게 제어됩니다. 이러한 데이터에 대한 액세스는 (1) {% data variables.product.prodname_copilot %} 팀 또는 {% data variables.product.company_short %} 플랫폼 상태 팀에서 근무하는 지정된 {% data variables.product.company_short %} 직원(정규직 또는 계약직), (2) Azure 및/또는 {% data variables.product.prodname_copilot %} 팀에서 근무하는 Microsoft 직원(정규직 또는 계약직), (3) {% data variables.product.prodname_copilot %}에서 근무하는 OpenAI의 직원으로 제한됩니다.

