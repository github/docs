---
ms.openlocfilehash: 801b42faa6e9a1bff269c1e4fcb0a5a2330717a4
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145068821"
---
| 우선 순위 | 설명 | 예제 |
| :---: | --- | --- |
| {% data variables.product.support_ticket_priority_urgent %} | {% data variables.product.prodname_ghe_server %}가 프로덕션 환경에서 작동하지 않으며, 이러한 장애가 비즈니스 운영에 직접적인 영향을 줍니다.<br/><br/>_{% data reusables.support.priority-urgent-english-only %}_ | <ul><li>모든 사용자의 핵심 Git 또는 웹 애플리케이션 기능에 영향을 주는 오류 또는 중단</li><li>대부분의 사용자에 대한 심각한 성능 저하</li><li>가득 차거나 빠르게 채워지는 스토리지</li><li>갱신된 라이선스 파일을 설치할 수 없음</li><li>보안 인시던트</li><li>해결 방법이 알려지지 않은 인스턴스에 대한 관리 액세스 손실</li><li>프로덕션 환경에 백업을 복원할 수 없음</li></ul> |
| {% data variables.product.support_ticket_priority_high %} | {% data variables.product.prodname_ghe_server %}가 프로덕션 환경에서 작동하지 않지만 비즈니스에 미치는 영향은 제한적입니다. | <ul><li>많은 사용자의 생산성을 저하시키는 성능 저하</li><li>HA(고가용성) 또는 클러스터 노드 실패에 따른 중복도 감소</li><li>인스턴스를 백업 실패</li><li>프로덕션 환경에 대한 성공적인 복원을 방해할 수 있는, 테스트 또는 스테이징 환경에 대한 백업 복원 실패</li></ul> |
| {% data variables.product.support_ticket_priority_normal %} | {% data variables.product.prodname_ghe_server %}에서 제한적이거나 보통 수준의 문제가 발생하거나, 인스턴스 작업에 대한 일반적인 우려 사항이나 질문이 있습니다. | <ul><li>테스트 또는 스테이징 환경 내 문제</li><li>{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API 및 기능 사용에 대한 조언 또는 인스턴스에서의 타사 통합 구성 관련 질문</li><li>{% data variables.product.company_short %}에서 제공하는 사용자 데이터 마이그레이션 도구와 관련된 문제</li><li>업그레이드</li><li>버그 보고서</li><li>기능이 예상대로 작동하지 않음</li><li>일반 보안 질문</li></ul> |
| {% data variables.product.support_ticket_priority_low %} | 시간에 민감하지 않거나 팀의 생산성을 차단하지 않는 {% data variables.product.prodname_ghe_server %}에 대한 질문 또는 제안이 있습니다. | <ul><li>기능 요청</li><li>제품 사용자 의견</li><li>상태 검사 요청(현재는 {% data variables.product.premium_support_plan %}을 이용하는 고객만 사용 가능)</li><li>인스턴스에서 계획된 유지 관리의 {% data variables.product.company_short %} 알림</li></ul> |
