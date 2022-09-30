---
ms.openlocfilehash: 80d40b1947f72a35fad5cf4cfb69f7ce68d28eab
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147558372"
---
{%- ifversion fpt or ghec or ghes > 3.6 %} Um executor auto-hospedado é automaticamente removido de {% data variables.product.product_name %} se não se conectar a {% data variables.product.prodname_actions %} por mais de 14 dias.  
Um executor auto-hospedado efêmero é removido automaticamente de {% data variables.product.product_name %} se não estiver conectado a {% data variables.product.prodname_actions %} por mais de 1 dia.  
{%- elsif ghae or ghes < 3.7 %} Um executor auto-hospedado é automaticamente removido de {% data variables.product.product_name %} se não se conectar a {% data variables.product.prodname_actions %} por mais de 30 dias.  
{%- endif %}