---
ms.openlocfilehash: c7e95cef82f138648c1c664be0cc894854bfb0bf
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: "148098621"
---
1. **계정 또는 조직** 드롭다운 메뉴를 선택하고 지원 티켓이 관련된 계정의 이름을 클릭합니다.
!["계정 또는 조직" 드롭다운 메뉴의 스크린샷.](/assets/images/help/support/account-field.png)
1. **보낸 사람** 드롭다운 메뉴를 선택하고 {% data variables.contact.github_support %}에 연결할 이메일 주소를 클릭합니다.
!["보낸 사람" 드롭다운 메뉴의 스크린샷.](/assets/images/help/support/from-field.png)
{%- ifversion ghec or ghes %}
1. **제품** 드롭다운 메뉴를 선택하고 {% ifversion ghes %}**GitHub Enterprise Server(자체 호스트)** {% else %}**GitHub Enterprise Cloud**{% endif %}를 클릭합니다.
{% ifversion ghec %}![ "제품" 드롭다운 메뉴의 스크린샷.](/assets/images/help/support/product-field-ghec.png){% else %}![ "제품" 드롭다운 메뉴의 스크린샷.](/assets/images/help/support/product-field.png){% endif %} {%- endif %} {%- ifversion ghes %}
1. 메시지가 표시되면 **서버 설치** 드롭다운 메뉴를 선택하고 지원 티켓이 관련된 설치를 클릭합니다. 설치가 목록에 없으면 **기타** 를 클릭합니다.
!["서버 설치" 드롭다운 메뉴 스크린샷](/assets/images/help/support/installation-field.png) {%- endif %} {%- ifversion ghes %}
1. **릴리스 계열** 드롭다운 메뉴를 선택하고 %}이(가) 실행 중인 릴리스 {% 데이터 variables.location.product_location_enterprise 클릭합니다.
!["릴리스 계열" 드롭다운 메뉴의 스크린샷](/assets/images/help/support/release-field.png) {%- endif %} {%- ifversion ghes or ghec %}
1. **우선 순위** 드롭다운 메뉴를 선택하고 적절한 긴급도를 클릭합니다. 자세한 내용은 "[티켓 우선 순위 정보](/support/learning-about-github-support/about-ticket-priority)"를 참조하세요.
  !["우선 순위" 드롭다운 메뉴의 스크린샷.](/assets/images/help/support/priority-field.png)
{%- endif %} {%- ifversion ghes %}
    - **{% data variables.product.support_ticket_priority_urgent %}** 를 선택하여 {% ifversion fpt or ghec %}심각한 시스템 오류{% else %}치명적 시스템 오류, 중요한 시스템 작업에 영향을 주는 중단, 보안 인시던트 및 만료된 라이선스{% endif %}를 보고합니다.
    - **{% data variables.product.support_ticket_priority_high %}** 를 선택하여 사용자 계정 및 조직 복원에서 중요한 데이터(커밋, 문제, 끌어오기 요청, 업로드된 첨부 파일)를 제거하는 {% ifversion fpt or ghec %}를 포함하여 비즈니스 운영에 영향을 미치는 문제를 보고하거나{% else %}시스템 성능 문제{% endif %} 또는 중요한 버그를 보고합니다.
    - **{% data variables.product.support_ticket_priority_normal %}** 을 선택하여 {% ifversion fpt or ghec %}계정 복구 또는 스팸 해제를 요청하고, 사용자 로그인 문제를 보고{% else %}하고, 구성 변경 및 타사 통합{% endif %}과 같은 기술 요청을 수행하고, 중요하지 않은 버그를 보고합니다.
    - **{% data variables.product.support_ticket_priority_low %}** 를 선택하여 일반적인 질문을 하고 새로운 기능, 구매, 학습 또는 상태 검사에 대한 요청을 제출합니다.
{%- endif %} {%- ifversion ghes or ghec %}
1. 필요에 따라 계정에 {% data variables.contact.premium_support %}가 포함되어 있고 티켓이 {% ifversion ghes %}긴급 또는 높음{% elsif ghec %}높음{% endif %} 우선 순위인 경우 영어로 콜백을 요청할 수 있습니다. **GitHub 지원에서 콜백 요청** 을 선택하고 국가 번호 드롭다운 메뉴를 선택하여 국가를 선택하고 전화 번호를 입력합니다.
!["콜백 요청" 확인란, "국가 번호" 드롭다운 메뉴 및 "전화 번호" 텍스트 상자의 스크린샷.](/assets/images/help/support/request-callback.png)
{%- endif %}
1. "제목"에서 발생한 문제에 대한 설명 제목을 입력합니다.
!["제목" 텍스트 상자의 스크린샷.](/assets/images/help/support/subject-field.png)
1. "어떻게 도울 수 있나요?"에서 지원 팀이 문제를 해결하는 데 도움이 되는 추가 정보를 제공합니다. markdown을 사용하여 메시지에 서식을 지정할 수 있습니다.
  !["How can we help" 텍스트 영역의 스크린샷.](/assets/images/help/support/how-can-we-help-field.png)
   유용한 정보는 다음과 같습니다.
    - 문제 재현 단계
    - 문제 발견과 관련된 특수한 상황(예: 특정 이벤트 후 발생 또는 최초 발생, 발생 빈도, 문제의 비즈니스 영향 및 제안된 긴급도)
    - 오류 메시지 {% indented_data_reference reusables.repositories.anyone-can-view-anonymized-url spaces=3 %}의 정확한 표현

{%- ifversion ghes %}
1. 필요에 따라 클립보드에서 끌어서 놓기, 업로드 또는 붙여넣기를 통해 진단 파일 및 기타 파일을 첨부합니다.
{%- endif %}
1. **요청 보내기** 를 클릭합니다.
!["요청 보내기" 단추의 스크린샷.](/assets/images/help/support/send-request-button.png)
