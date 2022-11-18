---
ms.openlocfilehash: a92a36101675ea033048f97465a87571b23ee9ef
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145091304"
---
아니면 {% data variables.product.product_name %}에 리포지토리{% ifversion fpt %} 또는 조직{% elsif ghes or ghec or ghae %}, 조직 또는 엔터프라이즈{% endif %}에 대한 실행기 삭제 권한이 없지만 실행기 컴퓨터를 재사용하려는 경우 자체 호스팅 실행기 애플리케이션 디렉터리 내부의 `.runner` 파일을 삭제하면 됩니다. 이렇게 하면 자체 호스팅 실행기 애플리케이션을 다시 다운로드하지 않고도 실행기를 등록할 수 있습니다.
