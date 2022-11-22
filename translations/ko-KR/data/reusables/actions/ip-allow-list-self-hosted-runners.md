---
ms.openlocfilehash: 16f0a067759f387d360529b7c79b30558bf5f220
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/22/2022
ms.locfileid: "148180158"
---
{% ifversion ghae %} 자체 호스트 실행기에서 {% data variables.product.prodname_dotcom %}과 통신할 수 있도록 하려면 자체 호스트 실행기의 IP 주소 또는 IP 주소 범위를 IP 허용 목록에 추가합니다. 자세한 내용은 “[허용된 IP 주소 추가](#adding-an-allowed-ip-address)”를 참조하세요.
{% else %} {% warning %}

**경고**: IP 허용 목록을 사용하고 {% data variables.product.prodname_actions %}을(를) 사용하려는 경우 자체 호스팅 실행기{% ifversion actions-hosted-runners %} 또는 {% data variables.product.prodname_dotcom %}고정 IP 주소 범위가 있는 호스트된 더 큰 실행기{% endif %}를 사용해야 합니다. 자세한 내용은 "[사용자 고유의 실행기 호스팅](/actions/automating-your-workflow-with-github-actions/about-self-hosted-runners)" {% ifversion actions-hosted-runners %} 또는 "[더 큰 실행기 사용](/actions/using-github-hosted-runners/using-larger-runners)"{% endif %}을 참조하세요.

{% endwarning %}

자체 호스팅 {% ifversion actions-hosted-runners %}이상 호스트{% endif %} 실행기가 {% data variables.product.prodname_dotcom %}와 통신할 수 있도록 하려면 엔터프라이즈에 대해 구성한 IP 허용 목록에 실행기의 IP 주소 또는 IP 주소 범위를 추가합니다. {% endif %}
