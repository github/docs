---
ms.openlocfilehash: 699a28a2443778018ea25e0060e621da9427b4ef
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/22/2022
ms.locfileid: "148179975"
---
{% warning %}

**경고:** 끌어오기 요청이나 이슈 주석에 이미지 첨부 파일을 추가하는 경우, 끌어오기 요청이 프라이빗 리포지토리에 있거나 프라이빗 모드가 사용되고 있더라도 누구나 인증{% ifversion ghes %} 없이 익명의 URL을 볼 수 있습니다. 이미지에 대한 무단 액세스를 방지하려면 {% data variables.location.product_location %}{% endif %}를 포함하여 이미지를 제공하는 시스템에 대한 네트워크 액세스를 제한해야 합니다. {% ifversion ghae %} {% data variables.product.product_name %}의 이미지 URL에 대한 무단 액세스를 방지하려면 네트워크 트래픽을 엔터프라이즈로 제한하는 것이 좋습니다. 자세한 내용은 "[IP 허용 목록을 사용하여 엔터프라이즈로 네트워크 트래픽 제한"을 참조하세요](/admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list). {% endif %}

{% endwarning %}
