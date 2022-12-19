---
ms.openlocfilehash: 7b5452bfa6c1045b67060a24acdb2875d4266242
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148108251"
---
{%- ifversion fpt or ghec or ghes > 3.6 %} Um executor auto-hospedado é automaticamente removido de {% data variables.product.product_name %} se não se conectar a {% data variables.product.prodname_actions %} por mais de 14 dias.  
Um executor auto-hospedado efêmero é removido automaticamente de {% data variables.product.product_name %} se não estiver conectado a {% data variables.product.prodname_actions %} por mais de 1 dia.  
{%- elsif ghae or ghes < 3.7 %} Um executor auto-hospedado é automaticamente removido de {% data variables.product.product_name %} se não se conectar a {% data variables.product.prodname_actions %} por mais de 30 dias.  
{%- endif %}
