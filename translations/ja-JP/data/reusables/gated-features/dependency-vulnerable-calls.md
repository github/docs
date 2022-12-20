---
ms.openlocfilehash: 91884dc1aa5c5b0b3d32593edfb1927e6c75592f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145110830"
---
{%- ifversion fpt %}パブリック リポジトリで脆弱な呼び出しの検出が有効になっています。 また、この分析は、{% data variables.product.prodname_ghe_cloud %} を使い、{% data variables.product.prodname_GH_advanced_security %} のライセンスを持つ組織が所有するプライベート リポジトリでも使用できます。

{%- elsif ghec %}脆弱な呼び出しの検出は、パブリック リポジトリの {% data variables.product.product_name %} に含まれています。 組織が所有するプライベート リポジトリで脆弱な呼び出しを検出するには、{% data variables.product.prodname_GH_advanced_security %} のライセンスを持っている必要があります。

{%- elsif ghes > 3.5 %}脆弱な呼び出しの検出は、{% data variables.product.product_name %} 内にある組織所有のリポジトリで使用できます。 この機能には、{% data variables.product.prodname_GH_advanced_security %} のライセンスが必要です。

{%- elsif ghae-issue-6076 %}脆弱な呼び出しの検出は、{% data variables.product.product_name %} 内にある組織所有のリポジトリで使用できます。 これは {% data variables.product.prodname_GH_advanced_security %} の機能です (ベータ リリース中は無料)。

{%- endif %} {% data reusables.advanced-security.more-info-ghas %}
