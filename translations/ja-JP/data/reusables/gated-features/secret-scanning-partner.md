---
ms.openlocfilehash: 0f465bd80e066cc8c1c047a1c6a52068de79ce37
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145110685"
---
{%- ifversion fpt %} {% data variables.product.prodname_secret_scanning_partner_caps %} は、{% data variables.product.prodname_dotcom_the_website %} 上のすべての製品のパブリック リポジトリで自動的に実行されます。 {% data variables.product.prodname_secret_scanning_GHAS_caps %} は、{% data variables.product.prodname_ghe_cloud %} を使用し、{% data variables.product.prodname_GH_advanced_security %} のライセンスを持つ Organization が所有するリポジトリで利用できます。

{%- elsif ghec %} {% data variables.product.prodname_secret_scanning_partner_caps %} はすべてのパブリック リポジトリで自動的に実行されます。 {% data variables.product.prodname_GH_advanced_security %} のライセンスをお持ちの場合は、Organization が所有するすべてのリポジトリに {% data variables.product.prodname_secret_scanning_GHAS %} を有効化および構成できます。

{%- elsif ghes %} ご自分のエンタープライズで {% data variables.product.prodname_GH_advanced_security %} のライセンスがある場合、{% data variables.product.product_name %} の Organization 所有のリポジトリで {% data variables.product.prodname_secret_scanning_caps %} が利用できます。

{%- elsif ghae %} {% data variables.product.product_name %} の Organization 所有のリポジトリで {% data variables.product.prodname_secret_scanning_caps %} が利用できます。 これは {% data variables.product.prodname_GH_advanced_security %} の機能です (ベータ リリース中は無料)。

{%- endif %} {% ifversion not ghae %}詳細については、「[GitHub's products](/articles/githubs-products)」 (GitHub の製品) を参照してください。{% endif %}
