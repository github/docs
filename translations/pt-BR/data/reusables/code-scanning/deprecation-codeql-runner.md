---
ms.openlocfilehash: 62262d7dceb6318775493dfe5431199d57d3b756
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/11/2022
ms.locfileid: "148161221"
---
{% note %}

{% ifversion fpt or ghec %}

**Observação:** o {% data variables.code-scanning.codeql_runner %} foi preterido. No {% data variables.product.product_name %}, o {% data variables.code-scanning.codeql_runner %} teve suporte até março de 2022. Você deve fazer upgrade da última versão da [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-action/releases).

{% elsif ghes > 3.3 %}

**Observação:** o {% data variables.code-scanning.codeql_runner %} foi preterido e não está incluído no {% data variables.product.prodname_ghe_server %} 3.4. Você deve migrar para a [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-action/releases) versão 2.7.6. 

{% elsif ghes < 3.4 %}

**Observação:** o {% data variables.code-scanning.codeql_runner %} está sendo preterido. No {% data variables.product.prodname_ghe_server %} 3.0 e superior, você pode instalar a [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-action/releases) versão 2.6.3 para substituir o {% data variables.code-scanning.codeql_runner %}. 

{% elsif ghae %}

**Observação:** o {% data variables.code-scanning.codeql_runner %} foi preterido. Você deve migrar para a [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-action/releases). 

{% endif %}

Para obter mais informações, confira [a reprovação do executor do CodeQL](https://github.blog/changelog/2021-09-21-codeql-runner-deprecation/). Para obter informações sobre como migrar para a {% data variables.product.prodname_codeql_cli %}, confira "[Como migrar do executor do CodeQL para a CLI do CodeQL](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/migrating-from-the-codeql-runner-to-codeql-cli)".

{% endnote %}
