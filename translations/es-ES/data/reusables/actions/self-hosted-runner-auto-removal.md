---
ms.openlocfilehash: 80d40b1947f72a35fad5cf4cfb69f7ce68d28eab
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "147558379"
---
{%- ifversion fpt or ghec or ghes > 3.6 %} Un ejecutor auto-hospedado se eliminará automáticamente de {% data variables.product.product_name %} si no se ha conectado a {% data variables.product.prodname_actions %} por más de 14 días.  
Un ejecutor efímero auto-hospedado se eliminará automáticamente de {% data variables.product.product_name %} si no se ha conectado a {% data variables.product.prodname_actions %} por más de 1 día.  
{%- elsif ghae or ghes < 3.7 %} Un ejecutor auto-hospedado se eliminará automáticamente de {% data variables.product.product_name %} si no se ha conectado a {% data variables.product.prodname_actions %} por más de 30 días.  
{%- endif %}