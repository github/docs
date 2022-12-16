---
ms.openlocfilehash: e7c2f46c3d9012c419d1523079af53479512a0e4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147682667"
---
{% note %}

**Remarques :** {% ifversion fpt %}
- L’utilisation de {% data variables.product.prodname_codeql_cli %} est gratuite sur les dépôts publics. {% data variables.product.prodname_codeql_cli %} est également disponible dans des dépôts privés appartenant à des organisations qui utilisent {% data variables.product.prodname_ghe_cloud %} et ont une licence pour {% data variables.product.prodname_GH_advanced_security %}. Pour plus d’informations, consultez « [Conditions générales de {% data variables.product.product_name %} {% data variables.product.prodname_codeql %}](https://securitylab.github.com/tools/codeql/license) » et « [Interface CLI de {% data variables.product.prodname_codeql %}](https://codeql.github.com/docs/codeql-cli/) ».
{%- elsif ghec %}
- L’utilisation de {% data variables.product.prodname_codeql_cli %} est gratuite sur des dépôts publics gérés sur {% data variables.product.prodname_dotcom_the_website %} et disponible sur des dépôts privés appartenant à des clients disposant d’une licence {% data variables.product.prodname_advanced_security %}. Pour plus d’informations, consultez « [Conditions générales de {% data variables.product.product_name %} {% data variables.product.prodname_codeql %}](https://securitylab.github.com/tools/codeql/license) » et « [Interface CLI de {% data variables.product.prodname_codeql %}](https://codeql.github.com/docs/codeql-cli/) ».
{%- elsif ghes or ghae %}
- L’{% data variables.product.prodname_codeql_cli %} est disponible pour les clients disposant d’une licence {% data variables.product.prodname_advanced_security %}.
{% endif %}
- {% data reusables.code-scanning.non-glibc-linux-support %}

{% endnote %}
