---
ms.openlocfilehash: e7c2f46c3d9012c419d1523079af53479512a0e4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "147682669"
---
{% note %}

**メモ:** {% ifversion fpt %}
- {% data variables.product.prodname_codeql_cli %} は、パブリック リポジトリ上で無料で使うことができます。 また、{% data variables.product.prodname_ghe_cloud %} を使い、{% data variables.product.prodname_GH_advanced_security %} のライセンスを持つ組織が所有するプライベート リポジトリでも、{% data variables.product.prodname_codeql_cli %} を使用できます。 詳細については、「[{% data variables.product.product_name %} {% data variables.product.prodname_codeql %} の使用条件](https://securitylab.github.com/tools/codeql/license)」および「[{% data variables.product.prodname_codeql %} CLI](https://codeql.github.com/docs/codeql-cli/)」を参照してください。
{%- elsif ghec %}
- {% data variables.product.prodname_codeql_cli %} は、{% data variables.product.prodname_dotcom_the_website %} 上で管理されているパブリック リポジトリ上で無料で使うことができます。また、{% data variables.product.prodname_advanced_security %} のライセンスを持つ顧客が所有するプライベート リポジトリでも使うことができます。 詳細については、「[{% data variables.product.product_name %} {% data variables.product.prodname_codeql %} の使用条件](https://securitylab.github.com/tools/codeql/license)」および「[{% data variables.product.prodname_codeql %} CLI](https://codeql.github.com/docs/codeql-cli/)」を参照してください。
{%- elsif ghes or ghae %}
- {% data variables.product.prodname_codeql_cli %} は、{% data variables.product.prodname_advanced_security %} のライセンスを持つ顧客が使うことができます。
{% endif %}
- {% data reusables.code-scanning.non-glibc-linux-support %}

{% endnote %}
