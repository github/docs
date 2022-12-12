---
ms.openlocfilehash: c5fae1ce4acb04536efed974489a49b43ef07812
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: "148098629"
---
{% ifversion ghes or ghae %} 자체 호스트 실행기와 {% data variables.product.product_name %} 간의 연결은 {% ifversion ghes %}HTTP(포트 80) 또는 {% endif %}HTTPS(포트 443)를 초과합니다. {% ifversion ghes %} HTTPS를 통한 연결을 보장하려면 {% 데이터 variables.location.product_location %}에 대한 TLS를 구성합니다. 자세한 내용은 “[TLS 구성](/admin/configuration/configuring-network-settings/configuring-tls)”을 참조하세요.{% endif %} {% endif %}
