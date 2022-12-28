---
ms.openlocfilehash: 91884dc1aa5c5b0b3d32593edfb1927e6c75592f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145110831"
---
{%- ifversion fpt %} 취약한 호출 검색은 공용 리포지토리에서 사용하도록 설정됩니다. 또한 이 분석은 {% data variables.product.prodname_ghe_cloud %}를 사용하고 {% data variables.product.prodname_GH_advanced_security %}에 대한 라이선스가 있는 조직이 소유한 프라이빗 리포지토리에서 사용할 수 있습니다.

{%- elsif ghec %} 취약한 호출 검색은 퍼블릭 리포지토리의 {% data variables.product.product_name %}에 포함됩니다. 조직이 소유한 프라이빗 리포지토리에서 취약 셀을 감지하려면 조직에 {% data variables.product.prodname_GH_advanced_security %}에 대한 라이선스가 있어야 합니다.

{%- elsif ghes > 3.5 %} 취약한 호출 검색은 {% data variables.product.product_name %}의 조직 소유 리포지토리에 사용할 수 있습니다. 이 기능을 사용하려면 {% data variables.product.prodname_GH_advanced_security %}에 대한 라이선스가 필요합니다.

{%- elsif ghae-issue-6076 %} 취약한 호출 검색은 {% data variables.product.product_name %}의 조직 소유 리포지토리에 사용할 수 있습니다. 이것은 {% data variables.product.prodname_GH_advanced_security %} 기능입니다(베타 릴리스 중 무료).

{%- endif %} {% data reusables.advanced-security.more-info-ghas %}
