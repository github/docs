---
ms.openlocfilehash: e7c2f46c3d9012c419d1523079af53479512a0e4
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: "147682676"
---
{% note %}

**Notas:** {% ifversion fpt %}
- La {% data variables.product.prodname_codeql_cli %} puede usarse libremente en repositorios públicos. {% data variables.product.prodname_codeql_cli %} también está disponible en los repositorios privados que pertenecen a las organizaciones que usan {% data variables.product.prodname_ghe_cloud %} y que tienen una licencia de {% data variables.product.prodname_GH_advanced_security %}. Para obtener información, vea "[Términos y condiciones de {% data variables.product.product_name %} {% data variables.product.prodname_codeql %}](https://securitylab.github.com/tools/codeql/license)" y "[CLI de {% data variables.product.prodname_codeql %}](https://codeql.github.com/docs/codeql-cli/)".
{%- elsif ghec %}
- La {% data variables.product.prodname_codeql_cli %} se puede usar de forma gratuita en los repositorios públicos que se mantienen en {% data variables.product.prodname_dotcom_the_website %} y está disponible para utilizarse en los repositorios privados que pertenecen a los clientes con una licencia de {% data variables.product.prodname_advanced_security %}. Para obtener información, vea "[Términos y condiciones de {% data variables.product.product_name %} {% data variables.product.prodname_codeql %}](https://securitylab.github.com/tools/codeql/license)" y "[CLI de {% data variables.product.prodname_codeql %}](https://codeql.github.com/docs/codeql-cli/)".
{%- elsif ghes or ghae %}
- La {% data variables.product.prodname_codeql_cli %} se encuentra disponible para los clientes con una licencia de la {% data variables.product.prodname_advanced_security %}.
{% endif %}
- {% data reusables.code-scanning.non-glibc-linux-support %}

{% endnote %}
