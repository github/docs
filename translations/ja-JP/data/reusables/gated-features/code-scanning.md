---
ms.openlocfilehash: 0ea67362c541ed183fec256765d5bb9d1fd18e3c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109355"
---
{%- ifversion fpt %} {% data variables.product.prodname_code_scanning_capc %} は、{% data variables.product.prodname_dotcom_the_website %} のすべてのパブリック リポジトリに使用できます。 {% data variables.product.prodname_code_scanning_capc %} は、{% data variables.product.prodname_ghe_cloud %} を使用していて {% data variables.product.prodname_GH_advanced_security %} のライセンスを持つ Organization によって所有されるリポジトリで使用できます。

{%- elsif ghec %} {% data variables.product.prodname_code_scanning_capc %} は、{% data variables.product.prodname_dotcom_the_website %} のすべてのパブリック リポジトリに使用できます。 Organization によって所有されるプライベート リポジトリで {% data variables.product.prodname_code_scanning %} を使うには、{% data variables.product.prodname_GH_advanced_security %} のライセンスが必要です。

{%- elsif ghes %} {% data variables.product.prodname_code_scanning_capc %} は、{% data variables.product.product_name %} の Organization 所有のリポジトリで利用できます。 この機能には、{% data variables.product.prodname_GH_advanced_security %} のライセンスが必要です。

{%- elsif ghae %} {% data variables.product.prodname_code_scanning_capc %} は、{% data variables.product.product_name %} の Organization 所有のリポジトリで利用できます。 これは {% data variables.product.prodname_GH_advanced_security %} の機能です (ベータ リリース中は無料)。

{%- endif %} {% data reusables.advanced-security.more-info-ghas %}
