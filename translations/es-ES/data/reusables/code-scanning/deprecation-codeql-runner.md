---
ms.openlocfilehash: 62262d7dceb6318775493dfe5431199d57d3b756
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/11/2022
ms.locfileid: "148161237"
---
{% note %}

{% ifversion fpt or ghec %}

**Nota:** {% data variables.code-scanning.codeql_runner %} está en desuso. En {% data variables.product.product_name %}, {% data variables.code-scanning.codeql_runner %} se admitió hasta marzo de 2022. Debe actualizar a la versión más reciente de [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-action/releases).

{% elsif ghes > 3.3 %}

**Nota:** {% data variables.code-scanning.codeql_runner %} está en desuso y no se incluye en {% data variables.product.prodname_ghe_server %} 3.4. Debe realizar la migración a la versión 2.7.6 de [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-action/releases). 

{% elsif ghes < 3.4 %}

**Nota:** {% data variables.code-scanning.codeql_runner %} está en desuso. En {% data variables.product.prodname_ghe_server %} 3.0 y posterior, puede instalar la versión 2.6.3 de [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-action/releases) para reemplazar {% data variables.code-scanning.codeql_runner %}. 

{% elsif ghae %}

**Nota:** {% data variables.code-scanning.codeql_runner %} está en desuso. Debe realizar la migración a [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-action/releases). 

{% endif %}

Para más información, vea [Ejecutor de CodeQL en desuso](https://github.blog/changelog/2021-09-21-codeql-runner-deprecation/). Para obtener información sobre la migración a {% data variables.product.prodname_codeql_cli %}, vea "[Migración del ejecutor de CodeQL a la CLI de CodeQL](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/migrating-from-the-codeql-runner-to-codeql-cli)".

{% endnote %}
