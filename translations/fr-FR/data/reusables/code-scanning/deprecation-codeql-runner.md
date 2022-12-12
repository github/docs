---
ms.openlocfilehash: 62262d7dceb6318775493dfe5431199d57d3b756
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/11/2022
ms.locfileid: "148161231"
---
{% note %}

{% ifversion fpt or ghec %}

**Remarque :** L’{% data variables.code-scanning.codeql_runner %} est déprécié. Sur {% data variables.product.product_name %}, l’{% data variables.code-scanning.codeql_runner %} a été pris en charge jusqu’en mars 2022. Vous devez effectuer une mise à niveau vers la dernière version de [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-action/releases).

{% elsif ghes > 3.3 %}

**Remarque :** L’{% data variables.code-scanning.codeql_runner %} est déprécié et n’est pas inclus dans {% data variables.product.prodname_ghe_server %} 3.4. Vous devez migrer vers [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-action/releases) version 2.7.6. 

{% elsif ghes < 3.4 %}

**Remarque :** L’{% data variables.code-scanning.codeql_runner %} est en cours de dépréciation. Sur {% data variables.product.prodname_ghe_server %} 3.0 et les versions ultérieures, vous pouvez installer [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-action/releases) version 2.6.3 pour remplacer l’{% data variables.code-scanning.codeql_runner %}. 

{% elsif ghae %}

**Remarque :** L’{% data variables.code-scanning.codeql_runner %} a été déprécié. Vous devez migrer vers [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-action/releases). 

{% endif %}

Pour plus d’informations, consultez les informations relatives à la [dépréciation de l’exécuteur CodeQL](https://github.blog/changelog/2021-09-21-codeql-runner-deprecation/). Pour plus d’informations sur la migration vers l’{% data variables.product.prodname_codeql_cli %}, consultez « [Migration de l’exécuteur CodeQL vers l’interface CLI CodeQL](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/migrating-from-the-codeql-runner-to-codeql-cli) ».

{% endnote %}
