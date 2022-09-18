---
ms.openlocfilehash: 80d40b1947f72a35fad5cf4cfb69f7ce68d28eab
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "147558376"
---
{%- ifversion fpt or ghec or ghes > 3.6 %} セルフホストランナーは、{% data variables.product.prodname_actions %} に 14 日以上接続されないと、{% data variables.product.product_name %} から自動的に削除されます。  
エフェメラル セルフホストランナーは、{% data variables.product.prodname_actions %} に 1 日以上接続されないと、{% data variables.product.product_name %} から自動的に削除されます。  
{%- elsif ghae or ghes < 3.7 %} セルフホストランナーは、{% data variables.product.prodname_actions %} に 30 日以上接続されないと、{% data variables.product.product_name %} から自動的に削除されます。  
{%- endif %}