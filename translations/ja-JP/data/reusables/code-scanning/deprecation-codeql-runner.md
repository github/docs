---
ms.openlocfilehash: c5fc9473755ce291aba79c71c850b18f4bcd1b00
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145115566"
---
{% note %}

{% ifversion fpt or ghec %}

**注:** {% data variables.product.prodname_codeql_runner %} は非推奨になりました。 {% data variables.product.product_name %} では、{% data variables.product.prodname_codeql_runner %} は 2022 年 3 月までサポートされていました。 最新バージョンの [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-action/releases) にアップグレードする必要があります。

{% elsif ghes > 3.3 %}

**注:** {% data variables.product.prodname_codeql_runner %} は非推奨となり、{% data variables.product.prodname_ghe_server %} 3.4 には含まれていません。 [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-action/releases) バージョン 2.7.6 に移行する必要があります。 

{% elsif ghes < 3.4 %}

**注:** {% data variables.product.prodname_codeql_runner %} は非推奨になりました。 {% data variables.product.prodname_ghe_server %} 3.0 以降では、[{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-action/releases) バージョン 2.6.3 をインストールして、{% data variables.product.prodname_codeql_runner %} を置き換えることができます。 

{% elsif ghae %}

**注:** {% data variables.product.prodname_codeql_runner %} は非推奨となりました。 [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-action/releases) に移行する必要があります。 

{% endif %}

詳しくは、「[CodeQL ランナーの非推奨化](https://github.blog/changelog/2021-09-21-codeql-runner-deprecation/)」をご覧ください。 {% data variables.product.prodname_codeql_cli %} への移行については、「[CodeQL ランナーから CodeQL CLI への移行](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/migrating-from-the-codeql-runner-to-codeql-cli)」を参照してください。

{% endnote %}
