---
ms.openlocfilehash: efa96c86f8e6393265a4052e0ce6d650a21805b4
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148107343"
---
{% ifversion fpt or ghec %} {% note %}

**참고:** {% data variables.product.company_short %}는 2022년 3월 15일에 이전의 안전하지 않은 키 형식을 삭제하여 보안을 향상시켰습니다.

해당 날짜를 기준으로 DSA 키(`ssh-dss`)는 더 이상 지원되지 않습니다. {% data variables.location.product_location %}의 개인 계정에 새 DSA 키를 추가할 수 없습니다.

`valid_after`가 2021년 11월 2일 이전인 RSA 키(`ssh-rsa`)는 서명 알고리즘을 계속 사용할 수 있습니다. 해당 날짜 이후에 생성된 RSA 키는 SHA-2 서명 알고리즘을 사용해야 합니다. SHA-2 서명을 사용하려면 일부 이전 클라이언트를 업그레이드해야 할 수 있습니다.

{% endnote %}

{% elsif ghes = 3.6 or ghes = 3.7 or ghes = 3.8 %}

{% note %}

**참고**: 기본적으로 {% data variables.product.product_name %} 3.6 이상에서는 2022년 8월 1일, UTC로 자정에 해당하는 컷오프 날짜를 기준으로 다음 조건을 **둘 다** 충족하는 SSH 연결이 실패합니다.

<br/>

{% data reusables.ssh.rsa-sha-1-connection-failure-criteria %}

{% data variables.product.product_name %} 3.6 이상에서는 DSA, HMAC-SHA-1 또는 CBC 암호화를 사용하는 SSH 연결도 지원하지 않습니다. 컷오프 날짜 이전에 업로드된 RSA SSH 키는 유효한 상태로 유지되는 한, SHA-1 해시 함수를 사용하여 계속 인증할 수 있습니다. 사용하는 {% data variables.product.product_name %}의 버전을 찾는 방법에 대한 자세한 내용은 “[{% data variables.product.prodname_docs %}의 버전 정보](/get-started/learning-about-github/about-versions-of-github-docs#github-enterprise-server)”를 참조하세요.

사이트 관리자는 RSA-SHA-1을 사용하여 연결의 컷오프 날짜를 조정할 수 있으며 RSA-SHA-1을 사용하여 모든 연결을 차단할 수 있습니다. 자세한 내용은 사이트 관리자에게 문의하거나 “[인스턴스에 대한 SSH 연결 구성](/admin/configuration/configuring-your-enterprise/configuring-ssh-connections-to-your-instance)”을 참조하세요.

{% endnote %}

{% endif %}
