---
ms.openlocfilehash: 0ea67362c541ed183fec256765d5bb9d1fd18e3c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109354"
---
{%- ifversion fpt %} {% data variables.product.prodname_code_scanning_capc %}는 {% data variables.product.prodname_dotcom_the_website %}의 모든 퍼블릭 리포지토리에 사용할 수 있습니다. {% data variables.product.prodname_code_scanning_capc %}는 또한 {% data variables.product.prodname_ghe_cloud %}를 사용하고 {% data variables.product.prodname_GH_advanced_security %}에 대한 라이선스가 있는 조직이 소유한 프라이빗 리포지토리에서 사용할 수 있습니다.

{%- elsif ghec %} {% data variables.product.prodname_code_scanning_capc %}는 {% data variables.product.prodname_dotcom_the_website %}의 모든 퍼블릭 리포지토리에 사용할 수 있습니다. 조직이 소유한 프라이빗 리포지토리에서 {% data variables.product.prodname_code_scanning %}을 사용하려면 {% data variables.product.prodname_GH_advanced_security %}에 대한 라이선스가 있어야 합니다.

{%- elsif ghes %} {% data variables.product.prodname_code_scanning_capc %}는 {% data variables.product.product_name %}의 조직 소유 리포지토리에서 사용할 수 있습니다. 이 기능을 사용하려면 {% data variables.product.prodname_GH_advanced_security %}에 대한 라이선스가 필요합니다.

{%- elsif ghae %} {% data variables.product.prodname_code_scanning_capc %}는 {% data variables.product.product_name %}의 조직 소유 리포지토리에서 사용할 수 있습니다. 이것은 {% data variables.product.prodname_GH_advanced_security %} 기능입니다(베타 릴리스 중 무료).

{%- endif %} {% data reusables.advanced-security.more-info-ghas %}
