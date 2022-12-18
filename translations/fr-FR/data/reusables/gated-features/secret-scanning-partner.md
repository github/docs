---
ms.openlocfilehash: 0f465bd80e066cc8c1c047a1c6a52068de79ce37
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145101937"
---
{%- ifversion fpt %} {% data variables.product.prodname_secret_scanning_partner_caps %} s’exécute automatiquement sur des référentiels publics dans tous les produits sur {% data variables.product.prodname_dotcom_the_website %}. {% data variables.product.prodname_secret_scanning_GHAS_caps %} est disponible dans des référentiels privés détenus par des organisations qui utilisent {% data variables.product.prodname_ghe_cloud %} et disposent d’une licence pour {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghec %} {% data variables.product.prodname_secret_scanning_partner_caps %} s’exécute automatiquement sur tous les référentiels publics. Si vous disposez d’une licence pour {% data variables.product.prodname_GH_advanced_security %}, vous pouvez activer et configurer {% data variables.product.prodname_secret_scanning_GHAS %} pour tout référentiel appartenant à une organisation.

{%- elsif ghes %} {% data variables.product.prodname_secret_scanning_caps %} est disponible pour les référentiels détenus par l’organisation dans {% data variables.product.product_name %} si votre entreprise dispose d’une licence pour {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghae %} {% data variables.product.prodname_secret_scanning_caps %} est disponible pour les référentiels appartenant à l’organisation dans {% data variables.product.product_name %}. Il s’agit d’une fonctionnalité de {% data variables.product.prodname_GH_advanced_security %} (gratuite avec la version bêta).

{%- endif %} {% ifversion not ghae %}Pour plus d’informations, consultez « [Produits GitHub](/articles/githubs-products)». {% endif %}
