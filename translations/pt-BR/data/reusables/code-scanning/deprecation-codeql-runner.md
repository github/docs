---
ms.openlocfilehash: c5fc9473755ce291aba79c71c850b18f4bcd1b00
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145094690"
---
{% note %}

{% ifversion fpt or ghec %}

**Observação:** o {% data variables.product.prodname_codeql_runner %} foi preterido. No {% data variables.product.product_name %}, o {% data variables.product.prodname_codeql_runner %} teve suporte até março de 2022. Você deve fazer upgrade da última versão da [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-action/releases).

{% elsif ghes > 3.3 %}

**Observação:** o {% data variables.product.prodname_codeql_runner %} foi preterido e não está incluído no {% data variables.product.prodname_ghe_server %} 3.4. Você deve migrar para a [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-action/releases) versão 2.7.6. 

{% elsif ghes < 3.4 %}

**Observação:** o {% data variables.product.prodname_codeql_runner %} está sendo preterido. No {% data variables.product.prodname_ghe_server %} 3.0 e superior, você pode instalar a [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-action/releases) versão 2.6.3 para substituir o {% data variables.product.prodname_codeql_runner %}. 

{% elsif ghae %}

**Observação:** o {% data variables.product.prodname_codeql_runner %} foi preterido. Você deve migrar para a [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-action/releases). 

{% endif %}

Para obter mais informações, confira [a reprovação do executor do CodeQL](https://github.blog/changelog/2021-09-21-codeql-runner-deprecation/). Para obter informações sobre como migrar para a {% data variables.product.prodname_codeql_cli %}, confira "[Como migrar do executor do CodeQL para a CLI do CodeQL](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/migrating-from-the-codeql-runner-to-codeql-cli)".

{% endnote %}
