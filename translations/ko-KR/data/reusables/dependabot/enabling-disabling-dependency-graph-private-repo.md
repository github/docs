---
ms.openlocfilehash: a9678c48ca3bd557f99816ef21c70c2332fb4e46
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145138792"
---
리포지토리 관리자는 프라이빗 리포지토리에 대한 종속성 그래프를 사용하거나 사용하지 않도록 설정할 수 있습니다.

사용자 계정 또는 조직이 소유한 모든 리포지토리에 대해 종속성 그래프를 사용하거나 사용하지 않도록 설정할 수도 있습니다. 자세한 내용은 "[종속성 그래프 구성](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-the-dependency-graph)"을 참조하세요.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. 종속성 그래프를 사용하도록 설정하기 위해 리포지토리 데이터에 {% data variables.product.product_name %} 읽기 전용 액세스 권한을 부여하는 방법에 대한 메시지를 읽은 다음 “종속성 그래프” 옆에 있는 **사용** 을 클릭합니다.
   ![종속성 그래프에 대한 "사용" 단추](/assets/images/help/repository/dependency-graph-enable-button.png) {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}"코드 보안 및 분석"의 설정 페이지에서 "종속성 그래프" 옆에 있는 **사용 안 함** 을 클릭하여 언제든지 종속성 그래프를 비활성화할 수 있습니다. {% else %}"보안 및 분석"{% endif %}
