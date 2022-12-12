---
ms.openlocfilehash: 62262d7dceb6318775493dfe5431199d57d3b756
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/11/2022
ms.locfileid: "148161230"
---
{% note %}

{% ifversion fpt or ghec %}

**Hinweis:** Der {% data variables.code-scanning.codeql_runner %} ist veraltet. In {% data variables.product.product_name %} wurde der {% data variables.code-scanning.codeql_runner %} bis März 2022 unterstützt. Führe ein Upgrade auf die neueste Version von [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-action/releases) durch.

{% elsif ghes > 3.3 %}

**Hinweis:** Der {% data variables.code-scanning.codeql_runner %} wurde als veraltet eingestuft und ist in {% data variables.product.prodname_ghe_server %} 3.4 nicht enthalten. Migriere zur Version 2.7.6 von [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-action/releases). 

{% elsif ghes < 3.4 %}

**Hinweis:** Der {% data variables.code-scanning.codeql_runner %} ist veraltet. Ab Version 3.0 von {% data variables.product.prodname_ghe_server %} kannst du die Version 2.6.3 von [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-action/releases) installieren, um {% data variables.code-scanning.codeql_runner %} zu ersetzen. 

{% elsif ghae %}

**Hinweis:** Der {% data variables.code-scanning.codeql_runner %} ist veraltet. Migriere zu [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-action/releases). 

{% endif %}

Weitere Informationen findest du unter [Veraltung des CodeQL-Runners](https://github.blog/changelog/2021-09-21-codeql-runner-deprecation/). Informationen zum Migrieren zu {% data variables.product.prodname_codeql_cli %} findest du unter [Migrieren vom CodeQL-Runner zur CodeQL-CLI](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/migrating-from-the-codeql-runner-to-codeql-cli).

{% endnote %}
