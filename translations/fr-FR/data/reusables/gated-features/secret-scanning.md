---
ms.openlocfilehash: 3e32ef8b3fc53f1818f1d09b8461aa00e50f200c
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145101933"
---
<!--This reusable describes the GHAS secret scanning feature. For a reusable that also covers the free secret scanning for public repositories on GitHub.com, use `secret-scanning-partner.md`  -->

{%- ifversion ghec or ghes %} {% data variables.product.prodname_secret_scanning_GHAS_caps %} est disponible pour les référentiels appartenant à l’organisation dans {% data variables.product.product_name %} si votre entreprise dispose d’une licence pour {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghae %} {% data variables.product.prodname_secret_scanning_caps %} est disponible pour les référentiels appartenant à l’organisation dans {% data variables.product.product_name %}. Il s’agit d’une fonctionnalité de {% data variables.product.prodname_GH_advanced_security %} (gratuite avec la version bêta).

{%- endif %} {% ifversion not ghae %}Pour plus d’informations, consultez « [Produits GitHub](/articles/githubs-products)». {% endif %}
