---
ms.openlocfilehash: 285d547af855fed298354ee62716de9e6c168608
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "147062976"
---
{%- ifversion fpt %} 依存関係の確認は、パブリック リポジトリで有効になっています。 また、依存関係の確認は、{% data variables.product.prodname_ghe_cloud %} を使用し、{% data variables.product.prodname_GH_advanced_security %} のライセンスを持つ Organization によって所有されるプライベート リポジトリでも利用できます。

{%- elsif ghec %} 依存関係の確認は、パブリック リポジトリの {% data variables.product.product_name %} に含まれています。 Organization が所有するプライベート リポジトリで依存関係の確認を使用するには、{% data variables.product.prodname_GH_advanced_security %} のライセンスを持っている必要があります。

{%- elsif ghes %}依存関係の確認は、{% data variables.product.product_name %} 内にある Organization 所有のリポジトリで利用できます。 この機能には、{% data variables.product.prodname_GH_advanced_security %} のライセンスが必要です。

{%- elsif ghae %} 依存関係の確認は、{% data variables.product.product_name %} 内にある組織所有のリポジトリで利用できます。 これは {% data variables.product.prodname_GH_advanced_security %} の機能です (ベータ リリース中は無料)。

{%- endif %} {% data reusables.advanced-security.more-info-ghas %}
