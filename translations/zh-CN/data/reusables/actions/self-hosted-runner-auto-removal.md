---
ms.openlocfilehash: 7b5452bfa6c1045b67060a24acdb2875d4266242
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: "148108742"
---
{%- ifversion fpt or ghec or ghes > 3.6 %} 自托管运行器与 {% data variables.product.prodname_actions %} 未连接超过 14 天，将被自动从 {% data variables.product.product_name %} 中删除。  
临时自托管运行器与 {% data variables.product.prodname_actions %} 未连接超过 1 天，将被自动从 {% data variables.product.product_name %} 中删除。  
{%- elsif ghae or ghes < 3.7 %} 自托管运行器与 {% data variables.product.prodname_actions %} 未连接超过 30 天，将被自动从 {% data variables.product.product_name %} 中删除。  
{%- endif %}
