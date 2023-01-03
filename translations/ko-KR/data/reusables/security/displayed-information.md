---
ms.openlocfilehash: b57bbd1a709b4cae3b93607d1cd03c1a4a31be15
ms.sourcegitcommit: 6bd8fe6d49214743f82fa2dc71847c241f140c87
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/07/2022
ms.locfileid: "148135689"
---
기존 리포지토리에 대해 하나 이상의 보안 및 분석 기능을 사용하도록 설정하면 몇 분 내로 {% data variables.product.prodname_dotcom %}에 결과가 표시됩니다.

- 선택한 구성이 모든 기존 리포지토리에 제공됩니다.
- 새 리포지토리에 대한 확인란을 사용하도록 설정한 경우 새 리포지토리가 선택한 구성을 따릅니다. {% ifversion GH-advisory-db-supports-malware %}
- 권한을 사용해 매니페스트 파일을 검색하여 관련 서비스를 적용합니다.
- 사용하도록 설정하면 종속성 그래프에 종속성 정보가 표시됩니다.
- 사용하도록 설정하면 {% data variables.product.prodname_dotcom %}에서 취약한 종속성 또는 맬웨어에 대한 {% 데이터 variables.product.prodname_dependabot_alerts %}을(를) 생성합니다. {% endif %} {% ifversion fpt or ghec or ghes %}
- 사용하도록 설정하면 {% data variables.product.prodname_dependabot %} 보안 업데이트는 {% data variables.product.prodname_dependabot_alerts %}가 트리거될 때 취약한 종속성을 업그레이드하기 위한 끌어오기 요청을 만듭니다.{% endif %}
