---
ms.openlocfilehash: 8cf9b4b70c5295ad2c7178a586fd660e05a88076
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: "146458198"
---
종속성 그래프는 리포지토리에{% ifversion dependency-submission-api %} 저장된 매니페스트 및 잠금 파일과 종속성 제출 API(베타){% endif %}를 사용하여 리포지토리에 제출된 모든 종속성을 요약한 것입니다. 각 리포지토리에 대해 다음이 표시됩니다{% ifversion fpt or ghec %}.

- 리포지토리가 의존하는 종속성, 에코시스템 및 패키지
- 리포지토리에 의존하는 종속 항목, 리포지토리 및 패키지{% else %} 리포지토리가 의존하는 종속성, 즉 에코시스템 및 패키지. {% data variables.product.product_name %}는 리포지토리에 의존하는 종속 항목, 리포지토리 및 패키지에 대한 정보를 계산하지 않습니다.{% endif %}
