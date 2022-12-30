---
ms.openlocfilehash: 3cc118cb9748ada5efb83aad6c0fe3b86c76d9bb
ms.sourcegitcommit: 738c16f6fc6d56d939a80c832497c8bfa28d10c7
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/05/2022
ms.locfileid: "148134902"
---
{% ifversion fpt or ghec %}기본적으로 다음과 같이 알림을 받습니다. {% endif %}{% ifversion ghes or ghae %}기본적으로 엔터프라이즈 소유자가 인스턴스에 대한 알림을 받기 위해 메일을 구성한 경우 다음과 같이 {% data variables.product.prodname_dependabot_alerts %}를 받게 됩니다.{% endif %}

- 받은 편지함에서 - 웹 알림으로 제공됩니다. {% data variables.product.prodname_dependabot %}이(가) 리포지토리에 대해 사용하도록 설정되고, 새 매니페스트 파일이 리포지토리에 커밋된 경우, 심각도가 높거나 심각도가 높은 새 취약성이 발견되면(**{% data variables.product.prodname_dotcom %}** 옵션에서) 웹 알림이 전송됩니다.
- {% data variables.product.prodname_dependabot %}이(가) 리포지토리에 대해 사용하도록 설정되고, 새 매니페스트 파일이 리포지토리에 커밋된 경우, 심각도가 높거나 심각도가 높은 새 취약성이 발견되면 이메일이 전송됩니다(**Email** 옵션). % ifversion ghes < 3.8 or ghae < 3.8 %}
- 사용자 인터페이스에서 안전하지 않은 종속성(UI 경고 옵션)이 있는 경우 리포지토리의 파일 및 코드 뷰에 **경고가** 표시됩니다. {% endif %}
- 명령줄에서 안전하지 않은 종속성(**CLI** 옵션)이 있는 리포지토리로 푸시할 때 경고가 콜백으로 표시됩니다.
{% ifversion not ghae %}
- {% data variables.product.prodname_mobile %}에서 웹 알림으로. 자세한 내용은 "[{% data variables.product.prodname_mobile %}을(를) 사용하여 푸시 알림 사용](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#enabling-push-notifications-with-github-mobile)"을 참조하세요. {% endif %}

{% note %}

**참고:** 메일 및 웹{% ifversion not ghae %}/{% data variables.product.prodname_mobile %}{% endif %} 알림은 다음 기준별로 전송됩니다.

- _리포지토리별_. 리포지토리에 대해 {% data variables.product.prodname_dependabot %}을 사용하도록 설정한 경우 또는 새 매니페스트 파일이 리포지토리로 커밋된 경우

- _조직별_. 새 취약성이 발견된 경우.

{% endnote %}

{% ifversion update-notification-settings-22 %} {% data variables.product.prodname_dependabot_alerts %}에 대한 알림을 받을 수 있는 방법을 사용자 지정할 수 있습니다. 예를 들어 Email 주간 다이제스트 옵션을 사용하여 최대 10개의 리포지토리에 대한 경고를 요약하는 **일별 또는 주간 다이제** 스트 전자 메일을 받을 수 있습니다.
{% else %} {% data variables.product.prodname_dependabot_alerts %}에 대한 알림을 받을 수 있는 방법을 사용자 지정할 수 있습니다. 예를 들어 취약성 및 주간 보안 전자 메일 다이제스트 옵션의 다이제스트 **요약을 Email** 사용하여 최대 10개의 리포지토리에 대한 경고를 요약 **하는 주간 다이제스트 전자 메일** 을 받을 수 있습니다.{ % endif %}
