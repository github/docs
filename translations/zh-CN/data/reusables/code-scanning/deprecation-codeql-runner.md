---
ms.openlocfilehash: c5fc9473755ce291aba79c71c850b18f4bcd1b00
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "145098784"
---
{% note %}

{% ifversion fpt or ghec %}

注意：{% data variables.product.prodname_codeql_runner %} 将被弃用。 对于 {% data variables.product.product_name %}，{% data variables.product.prodname_codeql_runner %} 一直支持到 2022 年 3 月。 应升级到最新版本的 [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-action/releases)。

{% elsif ghes > 3.3 %}

注意：{% data variables.product.prodname_codeql_runner %} 已被弃用，且未包含在 {% data variables.product.prodname_ghe_server %} 3.4 中。 应迁移到 [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-action/releases) 版本 2.7.6。 

{% elsif ghes < 3.4 %}

注意：{% data variables.product.prodname_codeql_runner %} 将被弃用。 对于 {% data variables.product.prodname_ghe_server %} 3.0及更高版本，可以安装 [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-action/releases) 版本 2.6.3 来替换 {% data variables.product.prodname_codeql_runner %}。 

{% elsif ghae %}

注意：{% data variables.product.prodname_codeql_runner %} 已被弃用。 应迁移到 [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-action/releases)。 

{% endif %}

有关详细信息，请参阅 [CodeQL 运行器弃用](https://github.blog/changelog/2021-09-21-codeql-runner-deprecation/)。 有关迁移到 {% data variables.product.prodname_codeql_cli %} 的信息，请参阅[从 CodeQL 运行器迁移到 CodeQL CLI](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/migrating-from-the-codeql-runner-to-codeql-cli)。

{% endnote %}
