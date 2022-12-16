---
ms.openlocfilehash: 6f389970efe1285e45a27f7e55a9b34672ed53e4
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/09/2022
ms.locfileid: "148193590"
---
{% ifversion ghes = 3.5 or ghes = 3.6 or ghes = 3.7 or ghes = 3.8 %}

{% note %}

{%- ifversion ghes = 3.5 or ghes = 3.6 %}

**참고**: 하위 도메인은 `http(s)://render.HOSTNAME` {% data variables.product.product_name %} 3.7 이상에서 더 이상 사용되지 않습니다. 3.7 이상으로 업그레이드한 후 TLS 인증서가 대체 서비스 및 `http(s)://viewscreen.HOSTNAME`의 하위 도메인을 포함하는지 확인합니다`http(s)://notebook.HOSTNAME`.

{%- elsif ghes = 3.7 or ghes = 3.8 %}

**참고**: 또는 `http(s)://viewscreen.HOSTNAME` 하위 도메인은 `http(s)://notebook.HOSTNAME` {% data variables.product.product_name %} 3.7 이상에서 새로 추가되었으며 를 대체`http(s)://render.HOSTNAME`합니다. 3.7 이상으로 업그레이드한 후 TLS 인증서는 대체 서비스 `http(s)://notebook.HOSTNAME` 및 `http(s)://viewscreen.HOSTNAME`의 하위 도메인을 포함해야 합니다.

{%- endif %}

{% endnote %}

{% endif %}
