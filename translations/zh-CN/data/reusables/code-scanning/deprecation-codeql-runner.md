---
ms.openlocfilehash: 62262d7dceb6318775493dfe5431199d57d3b756
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/11/2022
ms.locfileid: "148161223"
---
{% note %}

{% ifversion fpt or ghec %}

注意：{% data variables.code-scanning.codeql_runner %} 被弃用。 在 {% data variables.product.product_name %} 上，对 {% data variables.code-scanning.codeql_runner %} 的支持一直到 2022 年 3 月。 应升级到最新版本的 [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-action/releases)。

{% elsif ghes > 3.3 %}

注意：{% data variables.code-scanning.codeql_runner %} 已被弃用，且未包含在 {% data variables.product.prodname_ghe_server %} 3.4 中。 应迁移到 [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-action/releases) 版本 2.7.6。 

{% elsif ghes < 3.4 %}

注意：{% data variables.code-scanning.codeql_runner %} 将被弃用。 对于 {% data variables.product.prodname_ghe_server %} 3.0 及更高版本，可以安装 [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-action/releases) 版本 2.6.3 来替换 {% data variables.code-scanning.codeql_runner %}。 

{% elsif ghae %}

注意：{% data variables.code-scanning.codeql_runner %} 已被弃用。 应迁移到 [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-action/releases)。 

{% endif %}

有关详细信息，请参阅 [CodeQL 运行器弃用](https://github.blog/changelog/2021-09-21-codeql-runner-deprecation/)。 有关迁移到 {% data variables.product.prodname_codeql_cli %} 的信息，请参阅[从 CodeQL 运行器迁移到 CodeQL CLI](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/migrating-from-the-codeql-runner-to-codeql-cli)。

{% endnote %}
