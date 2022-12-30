---
ms.openlocfilehash: 2e4a278a00c93ac7ca31e117bc61cd835f13022d
ms.sourcegitcommit: 3ce69524dc95bb450204ba2b8e82ee69af3af833
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: "148101640"
---
1. “{% data variables.product.prodname_secret_scanning_caps %}”의 “보호 푸시”에서 **모두 사용** 을 클릭합니다.
  {% ifversion ghec %}![ 조직의](/assets/images/help/organizations/secret-scanning-enable-push-protection-org.png) {% 데이터 variables.product.prodname_secret_scanning %}에 대한 푸시 보호를 사용하도록 설정하는 방법을 보여 주는 스크린샷{% elsif ghes > 3.4 또는 ghae > 3.4 %} ![스크린샷은 조직](/assets/images/help/organizations/secret-scanning-enable-push-protection-org-ghes.png){% endif %}에 대해 {% 데이터 variables.product.prodname_secret_scanning %}에 대한 푸시 보호를 사용하도록 설정하는 방법을 보여 줍니다.
1. 필요에 따라 "{% 데이터 variables.product.prodname_secret_scanning %}에 추가된 리포지토리를 자동으로 사용하도록 설정"을 클릭합니다. {% ifversion push-protection-custom-link-orgs %}
1. 필요에 따라 구성원이 비밀을 푸시하려고 할 때 표시되는 메시지에 사용자 지정 링크를 포함하려면 **커밋이 차단될 때 CLI 및 웹 UI에서 리소스 링크 추가** 를 선택한 다음 URL을 입력하고 **링크 저장** 을 클릭합니다.

   ![사용자 지정 링크를 사용하도록 설정하기 위한 확인란 및 텍스트 필드를 보여주는 스크린샷](/assets/images/help/organizations/secret-scanning-custom-link.png){% endif %}
