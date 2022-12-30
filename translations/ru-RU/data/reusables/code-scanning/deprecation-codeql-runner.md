---
ms.openlocfilehash: 62262d7dceb6318775493dfe5431199d57d3b756
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/11/2022
ms.locfileid: "148161238"
---
{% note %}

{% ifversion fpt or ghec %}

**Примечание:** {% data variables.code-scanning.codeql_runner %} является устаревшим. На {% data variables.product.product_name %} {% data variables.code-scanning.codeql_runner %} поддерживался до марта 2022 г. Необходимо обновить до последней версии [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-action/releases).

{% elsif ghes > 3.3 %}

**Примечание:** {% data variables.code-scanning.codeql_runner %} устарел и не включен в {% data variables.product.prodname_ghe_server %} 3.4. Необходимо перейти к версии [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-action/releases) 2.7.6. 

{% elsif ghes < 3.4 %}

**Примечание:** {% data variables.code-scanning.codeql_runner %} является устаревшим. В {% data variables.product.prodname_ghe_server %} 3.0 и более поздних версий можно установить [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-action/releases) версии 2.6.3, чтобы заменить {% data variables.code-scanning.codeql_runner %}. 

{% elsif ghae %}

**Примечание:** {% data variables.code-scanning.codeql_runner %} устарел. Необходимо перейти к [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-action/releases). 

{% endif %}

Дополнительные сведения см. в разделе [ Прекращение поддержки средства выполнения тестов CodeQL](https://github.blog/changelog/2021-09-21-codeql-runner-deprecation/). Дополнительные сведения о переходе к {% data variables.product.prodname_codeql_cli %} см. в статье «[Переход со средства выполнения CodeQL на CodeQL CLI](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/migrating-from-the-codeql-runner-to-codeql-cli)».

{% endnote %}
