---
ms.openlocfilehash: ae3a6c6743e497213f23230a4f78d98a1ab9a110
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/09/2022
ms.locfileid: "148192931"
---
사용자가 {% ifversion fpt or ghec or ghes %}{% data variables.location.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %}에서 다음 작업을 수행한 경우 사용자는 활성으로 간주됩니다.

- {% data variables.location.product_location %}에 로그인
- 리포지토리 만들기
- 리포지토리에 푸시
- 리포지토리에 추가됨
- 리포지토리 표시 유형 변경
- 문제 또는 끌어오기 요청 만들기
- 이슈 또는 끌어오기 요청에 주석 작성
- 이슈 또는 끌어오기 요청 닫기 또는 다시 열기
- 이슈 또는 끌어오기 요청에 레이블 적용 또는 레이블 제거
- 이슈 또는 끌어오기 요청 할당 또는 할당 취소
- 끌어오기 요청의 검토 요청 또는 검토 요청 제거
- 끌어오기 요청 검토에서 주석 작성 또는 편집
- 끌어오기 요청에서 주석 해제 
- 끌어오기 요청 동기화
- 커밋에 대한 주석 달기
- 릴리스 게시
- wiki에 푸시
- 리포지토리 보기
- 리포지토리에 별 지정
- 리포지토리 삭제
- {% data variables.product.pat_generic %} 또는 SSH 키를 사용하여 리소스에 액세스
- 조직 가입

{% ifversion ghes %} LDAP에서 계정을 업데이트한 경우에도 사용자가 활성으로 간주됩니다.
{% endif %}
