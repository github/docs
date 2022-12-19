---
ms.openlocfilehash: 7b5452bfa6c1045b67060a24acdb2875d4266242
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109745"
---
{%- ifversion fpt or ghec or ghes > 3.6 %} セルフホストランナーは、{% data variables.product.prodname_actions %} に 14 日以上接続されないと、{% data variables.product.product_name %} から自動的に削除されます。  
エフェメラル セルフホストランナーは、{% data variables.product.prodname_actions %} に 1 日以上接続されないと、{% data variables.product.product_name %} から自動的に削除されます。  
{%- elsif ghae or ghes < 3.7 %} セルフホストランナーは、{% data variables.product.prodname_actions %} に 30 日以上接続されないと、{% data variables.product.product_name %} から自動的に削除されます。  
{%- endif %}
