---
ms.openlocfilehash: 3e32ef8b3fc53f1818f1d09b8461aa00e50f200c
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: "145110674"
---
<!--This reusable describes the GHAS secret scanning feature. For a reusable that also covers the free secret scanning for public repositories on GitHub.com, use `secret-scanning-partner.md`  -->

{%- ifversion ghec or ghes %} {% data variables.product.prodname_secret_scanning_GHAS_caps %} está disponible para repositorios que son propiedad de una organización en {% data variables.product.product_name %} si la empresa tiene una licencia de {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghae %} {% data variables.product.prodname_secret_scanning_caps %} está disponible para repositorios que son propiedad de una organización en {% data variables.product.product_name %}. Esta es una característica de la {% data variables.product.prodname_GH_advanced_security %} (gratuita durante el lanzamiento beta).

{%- endif %} {% ifversion not ghae %} Para más información, vea "[Productos de GitHub](/articles/githubs-products)".{% endif %}
