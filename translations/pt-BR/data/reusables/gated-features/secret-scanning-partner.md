---
ms.openlocfilehash: 0f465bd80e066cc8c1c047a1c6a52068de79ce37
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145093469"
---
{%- ifversion fpt %} Os {% data variables.product.prodname_secret_scanning_partner_caps %} são executados automaticamente em repositórios públicos em todos os produtos do {% data variables.product.prodname_dotcom_the_website %}. A {% data variables.product.prodname_secret_scanning_GHAS_caps %} está disponível nos repositórios pertencentes às organizações que usam o {% data variables.product.prodname_ghe_cloud %} e têm uma licença do {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghec %} Os {% data variables.product.prodname_secret_scanning_partner_caps %} são executados automaticamente em todos os repositórios públicos. Se você tiver uma licença do {% data variables.product.prodname_GH_advanced_security %}, poderá habilitar e configurar a {% data variables.product.prodname_secret_scanning_GHAS %} para qualquer repositório pertencente a uma organização.

{%- elsif ghes %} A {% data variables.product.prodname_secret_scanning_caps %} está disponível para os repositórios pertencentes a uma organização no {% data variables.product.product_name %} se a sua empresa tem uma licença do {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghae %} A {% data variables.product.prodname_secret_scanning_caps %} está disponível para os repositórios pertencentes à organização no {% data variables.product.product_name %}. Esse é um recurso do {% data variables.product.prodname_GH_advanced_security %} (gratuito durante a versão beta).

{%- endif %} {% ifversion not ghae %}Para obter mais informações, confira "[Produtos do GitHub](/articles/githubs-products)".{% endif %}
