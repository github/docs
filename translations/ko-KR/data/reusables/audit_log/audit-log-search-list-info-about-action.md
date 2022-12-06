---
ms.openlocfilehash: e01273fe15058c00b11d380a3c50d4448cfb92b8
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: "146180785"
---
각 감사 로그 항목의 이름은 `action` 개체 또는 범주 한정자, 작업 유형으로 구성됩니다. 예를 들어 `repo.create` 항목은 `repo` 범주에 대한 `create` 작업을 참조합니다.

각 감사 로그 항목에는 다음과 같은 이벤트에 대한 적용 가능한 정보가 표시됩니다.

- 작업이 수행된 {% ifversion ghec or ghes or ghae %}enterprise 또는 {% endif %}조직
- 작업을 수행한 사용자(행위자)
- 작업의 영향을 받는 사용자
- 작업이 수행된 리포지토리
- 수행된 작업
- 작업이 수행된 국가
- 작업이 발생한 날짜 및 시간 {%- ifversion enterprise-audit-log-ip-addresses %}
- 필요에 따라 작업을 수행한 사용자(작업자)의 원본 IP 주소 {%- endif %}
