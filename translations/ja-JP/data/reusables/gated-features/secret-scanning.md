---
ms.openlocfilehash: 3e32ef8b3fc53f1818f1d09b8461aa00e50f200c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145110677"
---
<!--This reusable describes the GHAS secret scanning feature. For a reusable that also covers the free secret scanning for public repositories on GitHub.com, use `secret-scanning-partner.md`  -->

{%- ifversion ghec or ghes %} ご自分のエンタープライズで {% data variables.product.prodname_GH_advanced_security %} のライセンスがある場合、{% data variables.product.product_name %} の Organization 所有のリポジトリで {% data variables.product.prodname_secret_scanning_GHAS_caps %} が利用できます。

{%- elsif ghae %} {% data variables.product.product_name %} の Organization 所有のリポジトリで {% data variables.product.prodname_secret_scanning_caps %} が利用できます。 これは {% data variables.product.prodname_GH_advanced_security %} の機能です (ベータ リリース中は無料)。

{%- endif %} {% ifversion not ghae %}詳細については、「[GitHub's products](/articles/githubs-products)」 (GitHub の製品) を参照してください。{% endif %}
