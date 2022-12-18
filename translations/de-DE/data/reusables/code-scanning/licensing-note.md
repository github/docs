---
ms.openlocfilehash: e7c2f46c3d9012c419d1523079af53479512a0e4
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: "147682668"
---
{% note %}

**Hinweise:** {% ifversion fpt %}
- Die {% data variables.product.prodname_codeql_cli %} kann in öffentlichen Repositorys kostenlos eingesetzt werden. Die {% data variables.product.prodname_codeql_cli %} ist auch in privaten Repositorys verfügbar, die Organisationen gehören, die {% data variables.product.prodname_ghe_cloud %} nutzen und eine Lizenz für {% data variables.product.prodname_GH_advanced_security %} haben. Weitere Informationen findest du unter [{% data variables.product.product_name %} {% data variables.product.prodname_codeql %}-Geschäftsbedingungen](https://securitylab.github.com/tools/codeql/license) und [{% data variables.product.prodname_codeql %}-CLI](https://codeql.github.com/docs/codeql-cli/).
{%- elsif ghec %}
- Die {% data variables.product.prodname_codeql_cli %} kann in öffentlichen Repositorys, die auf {% data variables.product.prodname_dotcom_the_website %} verwaltet werden, kostenlos verwendet werden und steht in privaten Repositorys, die Kunden mit einer Lizenz für {% data variables.product.prodname_advanced_security %} gehören, zur Verfügung. Weitere Informationen findest du unter [{% data variables.product.product_name %} {% data variables.product.prodname_codeql %}-Geschäftsbedingungen](https://securitylab.github.com/tools/codeql/license) und [{% data variables.product.prodname_codeql %}-CLI](https://codeql.github.com/docs/codeql-cli/).
{%- elsif ghes or ghae %}
- Die {% data variables.product.prodname_codeql_cli %} ist für Kunden mit einer Lizenz für {% data variables.product.prodname_advanced_security %} verfügbar.
{% endif %}
- {% data reusables.code-scanning.non-glibc-linux-support %}

{% endnote %}
