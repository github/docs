---
ms.openlocfilehash: dd7c5f37ab5b2d699b47460195e02ae21fca1733
ms.sourcegitcommit: d2f0b59ed096b9e68ef8f6fa019cd925165762ec
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/29/2022
ms.locfileid: "148184396"
---
{% data variables.product.product_name %} REST API의 버전이 지정됩니다. API 버전 이름은 API 버전이 릴리스된 날짜를 기반으로 합니다. 예를 들어 API 버전은 `{{ initialRestVersioningReleaseDate }}` {{ initialRestVersioningReleaseDateLong }}에 릴리스되었습니다.

호환성이 손상되는 모든 변경 내용은 새 API 버전에서 릴리스됩니다. 호환성이 손상되는 변경은 통합을 손상시킬 수 있는 변경 내용입니다. 호환성이 손상되는 변경 내용은 다음과 같습니다.

- 전체 작업 제거
- 매개 변수 제거 또는 이름 바꾸기
- 응답 필드 제거 또는 이름 바꾸기
- 새 필수 매개 변수 추가
- 이전에 선택적 매개 변수를 필수로 만들기
- 매개 변수 또는 응답 필드의 형식 변경
- 열거형 값 제거
- 기존 매개 변수에 새 유효성 검사 규칙 추가
- 인증 또는 권한 부여 요구 사항 변경

모든 추가(호환성이 손상되지 않는) 변경 내용은 지원되는 모든 API 버전에서 사용할 수 있습니다. 추가 변경 내용은 통합을 중단해서는 안 되는 변경 내용입니다. 추가 변경 내용은 다음과 같습니다.

- 작업 추가
- 선택적 매개 변수 추가
- 선택적 요청 헤더 추가
- 응답 필드 추가
- 응답 헤더 추가
- 열거형 값 추가

새 REST API 버전이 릴리스되면 새 API 버전이 릴리스된 후 최소 24개월 동안 이전 API 버전이 지원됩니다.
