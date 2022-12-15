---
ms.openlocfilehash: 3e32ef8b3fc53f1818f1d09b8461aa00e50f200c
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "145101932"
---
<!--This reusable describes the GHAS secret scanning feature. For a reusable that also covers the free secret scanning for public repositories on GitHub.com, use `secret-scanning-partner.md`  -->

{%- ifversion ghec or ghes %} {% data variables.product.prodname_secret_scanning_GHAS_caps %} ist für organisationseigene Repositorys in {% data variables.product.product_name %} verfügbar, wenn dein Unternehmen über eine Lizenz für {% data variables.product.prodname_GH_advanced_security %} verfügt.

{%- elsif ghae %} {% data variables.product.prodname_secret_scanning_caps %} ist für organisationseigene Repositorys in {% data variables.product.product_name %} verfügbar. Dies ist ein {% data variables.product.prodname_GH_advanced_security %}-Feature (kostenlos während der Betaphase).

{%- endif %} {% ifversion not ghae %} Weitere Informationen findest du unter [Produkte von GitHub](/articles/githubs-products).{% endif %}
