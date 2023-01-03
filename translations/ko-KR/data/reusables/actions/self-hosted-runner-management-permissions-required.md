---
ms.openlocfilehash: 3a9ea7fdc7089c5423254ca10f1ad789eaa81de1
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: "148099294"
---
자체 호스팅 실행기는 {% 데이터 variables.product.prodname_dotcom {%data variables.product.prodname_dotcom %}{% elsif ghes 또는 ghae %} 엔터프라이즈 설정의 리포지토리, 조직 또는 {% ifversion fpt 또는 ghec %}엔터프라이즈 계정 설정에 위치할 수 있습니다. {% 데이터 variables.location.product_location %}{% endif %}. 자체 호스트 실행기를 관리하려면 자체 호스트 실행기를 추가한 위치에 따라 다음 권한이 있어야 합니다.
- **사용자 리포지토리**: 리포지토리 소유자여야 합니다.
- **조직**: 조직 소유자여야 합니다. 
- **조직 리포지토리**: 조직 소유자거나 리포지토리에 대한 관리자 액세스 권한이 있어야 합니다.
{% ifversion ghec %}
- **엔터프라이즈 계정**: 엔터프라이즈 소유자여야 합니다.
{% elsif ghes or ghae %}
- **엔터프라이즈**: {% data variables.product.prodname_enterprise %} 사이트 관리자여야 합니다.
{% endif %}
