---
ms.openlocfilehash: 7b5452bfa6c1045b67060a24acdb2875d4266242
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: "148110111"
---
{%- ifversion fpt or ghec or ghes > 3.6 %} Локальное средство выполнения автоматически удаляется из {% data variables.product.product_name %} при отсутствии подключения к {% data variables.product.prodname_actions %} в течение более 14 дней.  
Временное локальное средство выполнения автоматически удаляется из {% data variables.product.product_name %} при отсутствии подключения к {% data variables.product.prodname_actions %} в течение более 1 дня.  
{%- elsif ghae or ghes < 3.7 %} Локальное средство выполнения автоматически удаляется из {% data variables.product.product_name %} при отсутствии подключения к {% data variables.product.prodname_actions %} в течение более 30 дней.  
{%- endif %}
