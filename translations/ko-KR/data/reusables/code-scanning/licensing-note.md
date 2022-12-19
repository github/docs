---
ms.openlocfilehash: e7c2f46c3d9012c419d1523079af53479512a0e4
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/09/2022
ms.locfileid: "147682670"
---
{% note %}

**참고:** {% ifversion fpt %}
- {% data variables.product.prodname_codeql_cli %}는 퍼블릭 리포지토리에서 무료로 사용할 수 있습니다. {% data variables.product.prodname_codeql_cli %}는 또한 {% data variables.product.prodname_ghe_cloud %}를 사용하고 {% data variables.product.prodname_GH_advanced_security %}에 대한 라이선스가 있는 조직이 소유한 프라이빗 리포지토리에서 사용할 수 있습니다. 자세한 내용은 "[{% data variables.product.product_name %} {% data variables.product.prodname_codeql %} 사용 약관](https://securitylab.github.com/tools/codeql/license)" 및 "[{% data variables.product.prodname_codeql %} CLI](https://codeql.github.com/docs/codeql-cli/)"를 참조하세요.
{%- elsif ghec %}
- {% data variables.product.prodname_codeql_cli %}는 {% data variables.product.prodname_dotcom_the_website %}에서 유지 관리되는 퍼블릭 리포지토리에서 무료로 사용할 수 있으며 {% data variables.product.prodname_advanced_security %} 라이선스가 있는 고객이 소유한 프라이빗 리포지토리에서 사용할 수 있습니다. 자세한 내용은 "[{% data variables.product.product_name %} {% data variables.product.prodname_codeql %} 사용 약관](https://securitylab.github.com/tools/codeql/license)" 및 "[{% data variables.product.prodname_codeql %} CLI](https://codeql.github.com/docs/codeql-cli/)"를 참조하세요.
{%- elsif ghes or ghae %}
- {% data variables.product.prodname_codeql_cli %}는 {% data variables.product.prodname_advanced_security %} 라이선스가 있는 고객이 사용할 수 있습니다.
{% endif %}
- {% data reusables.code-scanning.non-glibc-linux-support %}

{% endnote %}
