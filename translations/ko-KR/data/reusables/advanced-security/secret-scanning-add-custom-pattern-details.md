---
ms.openlocfilehash: 53ead6c394e757a67d36fde9c73c74eec7e963bc
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145089057"
---
1. 새 사용자 지정 패턴에 대한 세부 정보 입력
   1. 적어도 패턴의 이름과 비밀 패턴 형식에 대한 정규식을 제공해야 합니다.
   1. **기타 옵션 {% octicon "chevron-down" aria-label="down" %}** 아이콘을 클릭하여 다른 주변 콘텐츠 또는 비밀 형식에 대한 추가 일치 요구 사항을 제공할 수 있습니다.
   1. 구성이 예상하는 패턴과 일치하는지 확인하는 샘플 테스트 문자열을 제공합니다.
   {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5499 %} ![사용자 지정 {% data variables.product.prodname_secret_scanning %} 패턴 형식 만들기](/assets/images/help/repository/secret-scanning-create-custom-pattern.png) {% else %} ![사용자 지정 {% data variables.product.prodname_secret_scanning %} 패턴 형식 만들기](/assets/images/enterprise/3.2/repository/secret-scanning-create-custom-pattern.png) {% endif %}
