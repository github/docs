---
ms.openlocfilehash: 0f465bd80e066cc8c1c047a1c6a52068de79ce37
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "145101936"
---
{%- ifversion fpt %} {% data variables.product.prodname_secret_scanning_partner_caps %} wird automatisch in öffentlichen Repositorys in allen Produkten auf {% data variables.product.prodname_dotcom_the_website %} ausgeführt. {% data variables.product.prodname_secret_scanning_GHAS_caps %} ist für private Repositorys im Besitz von Organisationen verfügbar, die {% data variables.product.prodname_ghe_cloud %} verwenden und über eine Lizenz für {% data variables.product.prodname_GH_advanced_security %} verfügen.

{%- elsif ghec %} {% data variables.product.prodname_secret_scanning_partner_caps %} wird automatisch für alle öffentlichen Repositorys ausgeführt. Wenn du über eine Lizenz für {% data variables.product.prodname_GH_advanced_security %} verfügst, kannst du {% data variables.product.prodname_secret_scanning_GHAS %} für jedes Repository im Besitz einer Organisation aktivieren und konfigurieren.

{%- elsif ghes %} {% data variables.product.prodname_secret_scanning_caps %} ist für organisationseigene Repositorys in {% data variables.product.product_name %} verfügbar, wenn dein Unternehmen über eine Lizenz für {% data variables.product.prodname_GH_advanced_security %} verfügt.

{%- elsif ghae %} {% data variables.product.prodname_secret_scanning_caps %} ist für organisationseigene Repositorys in {% data variables.product.product_name %} verfügbar. Dies ist ein {% data variables.product.prodname_GH_advanced_security %}-Feature (kostenlos während der Betaphase).

{%- endif %} {% ifversion not ghae %} Weitere Informationen findest du unter [Produkte von GitHub](/articles/githubs-products).{% endif %}
