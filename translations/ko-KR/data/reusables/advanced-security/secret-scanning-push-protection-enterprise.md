---
ms.openlocfilehash: d16a36596ef06dfae6fa7ae9b689f1642dd4ff13
ms.sourcegitcommit: 3ce69524dc95bb450204ba2b8e82ee69af3af833
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: "148101675"
---
1. “{% data variables.product.prodname_secret_scanning_caps %}”의 “보호 푸시”에서 **모두 사용** 을 클릭합니다.
   
   ![엔터프라이즈의 {% 데이터 variables.product.prodname_secret_scanning %}에 대한 푸시 보호를 사용하도록 설정하는 방법을 보여 주는 스크린샷](/assets/images/enterprise/security/secret-scanning-enable-push-protection-enterprise.png)

2. 필요에 따라 "{% 데이터 variables.product.prodname_secret_scanning %}에 추가된 리포지토리에 대해 자동으로 사용하도록 설정"을 클릭합니다. {% ifversion secret-scanning-custom-link-on-block %}
3. 필요에 따라 멤버가 비밀을 푸시하려고 할 때 표시되는 메시지에 사용자 지정 링크를 포함하려면 **커밋이 차단될 때 CLI 및 웹 UI에서 리소스 링크 추가** 를 클릭한 다음 URL을 입력하고 **링크 저장** 을 클릭합니다.

   ![사용자 지정 링크를 사용하도록 설정하기 위한 확인란 및 텍스트 필드를 보여주는 스크린샷](/assets/images/help/organizations/secret-scanning-custom-link.png){% endif %}
