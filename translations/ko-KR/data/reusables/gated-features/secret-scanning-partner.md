---
ms.openlocfilehash: 0f465bd80e066cc8c1c047a1c6a52068de79ce37
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145110684"
---
{%- ifversion fpt %} {% data variables.product.prodname_secret_scanning_partner_caps %}는 {% data variables.product.prodname_dotcom_the_website %}에 있는 모든 제품의 퍼블릭 리포지토리에서 자동으로 실행됩니다. {% data variables.product.prodname_secret_scanning_GHAS_caps %}는 {% data variables.product.prodname_ghe_cloud %}를 사용하고 {% data variables.product.prodname_GH_advanced_security %}에 대한 라이선스가 있는 조직이 소유한 리포지토리에 사용할 수 있습니다.

{%- elsif ghec %} {% data variables.product.prodname_secret_scanning_partner_caps %}는 모든 퍼블릭 리포지토리에서 자동으로 실행됩니다. {% data variables.product.prodname_GH_advanced_security %}에 대한 라이선스가 있는 경우 조직이 소유한 모든 리포지토리에 대해 {% data variables.product.prodname_secret_scanning_GHAS %}을 사용하도록 설정하고 구성할 수 있습니다.

{%- elsif ghes %} 엔터프라이즈에 {% data variables.product.prodname_GH_advanced_security %}에 대한 라이선스가 있는 경우 {% data variables.product.product_name %}의 조직 소유 리포지토리에서 {% data variables.product.prodname_secret_scanning_caps %}를 사용할 수 있습니다.

{%- elsif ghae %} {% data variables.product.prodname_secret_scanning_caps %}는 {% data variables.product.product_name %}의 조직 소유 리포지토리에서 사용할 수 있습니다. 이것은 {% data variables.product.prodname_GH_advanced_security %} 기능입니다(베타 릴리스 중 무료).

{%- endif %} {% ifversion not ghae %}자세한 내용은 “[GitHub 제품](/articles/githubs-products)”을 참조하세요.{% endif %}
