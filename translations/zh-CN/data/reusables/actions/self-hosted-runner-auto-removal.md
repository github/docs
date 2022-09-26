---
ms.openlocfilehash: 80d40b1947f72a35fad5cf4cfb69f7ce68d28eab
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "147558373"
---
{%- ifversion fpt or ghec or ghes > 3.6 %} 自托管运行器与 {% data variables.product.prodname_actions %} 未连接超过 14 天，将被自动从 {% data variables.product.product_name %} 中删除。  
临时自托管运行器与 {% data variables.product.prodname_actions %} 未连接超过 1 天，将被自动从 {% data variables.product.product_name %} 中删除。  
{%- elsif ghae or ghes < 3.7 %} 自托管运行器与 {% data variables.product.prodname_actions %} 未连接超过 30 天，将被自动从 {% data variables.product.product_name %} 中删除。  
{%- endif %}