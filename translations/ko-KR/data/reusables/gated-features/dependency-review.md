---
ms.openlocfilehash: 285d547af855fed298354ee62716de9e6c168608
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147062978"
---
{%- ifversion fpt %} 종속성 검토는 퍼블릭 리포지토리에서 사용하도록 설정됩니다. 종속성 검토는 또한 {% data variables.product.prodname_ghe_cloud %}를 사용하고 {% data variables.product.prodname_GH_advanced_security %}에 대한 라이선스가 있는 조직이 소유한 프라이빗 리포지토리에서 사용할 수 있습니다.

{%- elsif ghec %} 종속성 검토는 퍼블릭 리포지토리의 {% data variables.product.product_name %}에 포함됩니다. 조직이 소유한 프라이빗 리포지토리에서 종속성 검토를 사용하려면 {% data variables.product.prodname_GH_advanced_security %}에 대한 라이선스가 있어야 합니다.

{%- elsif ghes %} 종속성 검토는 {% data variables.product.product_name %}의 조직 소유 리포지토리에 사용할 수 있습니다. 이 기능을 사용하려면 {% data variables.product.prodname_GH_advanced_security %}에 대한 라이선스가 필요합니다.

{%- elsif ghae %} 종속성 검토는 {% data variables.product.product_name %}의 조직 소유 리포지토리에 사용할 수 있습니다. 이것은 {% data variables.product.prodname_GH_advanced_security %} 기능입니다(베타 릴리스 중 무료).

{%- endif %} {% data reusables.advanced-security.more-info-ghas %}
