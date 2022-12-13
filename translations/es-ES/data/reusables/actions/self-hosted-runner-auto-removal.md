---
ms.openlocfilehash: 7b5452bfa6c1045b67060a24acdb2875d4266242
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: "148110112"
---
{%- ifversion fpt or ghec or ghes > 3.6 %} Un ejecutor auto-hospedado se eliminará automáticamente de {% data variables.product.product_name %} si no se ha conectado a {% data variables.product.prodname_actions %} por más de 14 días.  
Un ejecutor efímero auto-hospedado se eliminará automáticamente de {% data variables.product.product_name %} si no se ha conectado a {% data variables.product.prodname_actions %} por más de 1 día.  
{%- elsif ghae or ghes < 3.7 %} Un ejecutor auto-hospedado se eliminará automáticamente de {% data variables.product.product_name %} si no se ha conectado a {% data variables.product.prodname_actions %} por más de 30 días.  
{%- endif %}
