---
ms.openlocfilehash: 62262d7dceb6318775493dfe5431199d57d3b756
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/11/2022
ms.locfileid: "148161229"
---
{% note %}

{% ifversion fpt or ghec %}

**メモ:** {% data variables.code-scanning.codeql_runner %}は非推奨です。 {% data variables.product.product_name %} では、2022 年 3 月まで、{% data variables.code-scanning.codeql_runner %}がサポートされていました。 最新バージョンの [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-action/releases) にアップグレードする必要があります。

{% elsif ghes > 3.3 %}

**メモ:** {% data variables.code-scanning.codeql_runner %}は非推奨となり、{% data variables.product.prodname_ghe_server %} 3.4 には含まれていません。 [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-action/releases) バージョン 2.7.6 に移行する必要があります。 

{% elsif ghes < 3.4 %}

**メモ:** {% data variables.code-scanning.codeql_runner %}は非推奨になっています。 {% data variables.product.prodname_ghe_server %} 3.0 以降では、[{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-action/releases) バージョン 2.6.3 をインストールして、{% data variables.code-scanning.codeql_runner %}を置き換えることができます。 

{% elsif ghae %}

**メモ:** {% data variables.code-scanning.codeql_runner %}は非推奨となりました。 [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-action/releases) に移行する必要があります。 

{% endif %}

詳しくは、「[CodeQL ランナーの非推奨化](https://github.blog/changelog/2021-09-21-codeql-runner-deprecation/)」をご覧ください。 {% data variables.product.prodname_codeql_cli %} への移行については、「[CodeQL ランナーから CodeQL CLI への移行](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/migrating-from-the-codeql-runner-to-codeql-cli)」を参照してください。

{% endnote %}
