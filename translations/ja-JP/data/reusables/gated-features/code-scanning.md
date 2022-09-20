---
ms.openlocfilehash: f17bcd04bb02118a15e29276cfc37210765bb260
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "147419866"
---
{%- ifversion fpt %} {% data variables.product.prodname_code_scanning_capc %} は、{% data variables.product.prodname_dotcom_the_website %} のすべてのパブリック リポジトリに使用できます。 {% data variables.product.prodname_code_scanning_capc %} は、{% data variables.product.prodname_ghe_cloud %} を使用していて {% data variables.product.prodname_GH_advanced_security %} のライセンスを持つ Organization によって所有されるリポジトリで使用できます。

{%- elsif ghec %} {% data variables.product.prodname_code_scanning_capc %} は、{% data variables.product.prodname_dotcom_the_website %} のすべてのパブリック リポジトリに使用できます。 Organization によって所有されるプライベート リポジトリで {% data variables.product.prodname_code_scanning %} を使うには、{% data variables.product.prodname_GH_advanced_security %} のライセンスが必要です。

{%- elsif ghes %} {% data variables.product.prodname_code_scanning_capc %} は、{% data variables.product.product_name %} の Organization 所有のリポジトリで利用できます。 この機能には、{% data variables.product.prodname_GH_advanced_security %} のライセンスが必要です。

{%- elsif ghae %} {% data variables.product.prodname_code_scanning_capc %} は、{% data variables.product.product_name %} の Organization 所有のリポジトリで利用できます。 これは {% data variables.product.prodname_GH_advanced_security %} の機能です (ベータ リリース中は無料)。

{%- endif %}詳しくは、「[GitHub の製品](/articles/githubs-products)」をご覧ください。