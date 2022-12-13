---
ms.openlocfilehash: 0f465bd80e066cc8c1c047a1c6a52068de79ce37
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: "145110682"
---
{%- ifversion fpt %} {% data variables.product.prodname_secret_scanning_partner_caps %} se ejecuta automáticamente en repositorios públicos en todos los productos de {% data variables.product.prodname_dotcom_the_website %}. {% data variables.product.prodname_secret_scanning_GHAS_caps %} está disponible para los repositorios que pertenecen a organizaciones que usan {% data variables.product.prodname_ghe_cloud %} y tienen una licencia de {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghec %} {% data variables.product.prodname_secret_scanning_partner_caps %} se ejecuta automáticamente en todos los repositorios públicos. Si tiene una licencia de {% data variables.product.prodname_GH_advanced_security %}, puede habilitar y configurar {% data variables.product.prodname_secret_scanning_GHAS %} para cualquier repositorio que pertenezca a una organización.

{%- elsif ghes %} {% data variables.product.prodname_secret_scanning_caps %} está disponible para repositorios que son propiedad de una organización en {% data variables.product.product_name %} si la empresa tiene una licencia de {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghae %} {% data variables.product.prodname_secret_scanning_caps %} está disponible para repositorios que son propiedad de una organización en {% data variables.product.product_name %}. Esta es una característica de la {% data variables.product.prodname_GH_advanced_security %} (gratuita durante el lanzamiento beta).

{%- endif %} {% ifversion not ghae %} Para más información, vea "[Productos de GitHub](/articles/githubs-products)".{% endif %}
