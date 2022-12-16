---
ms.openlocfilehash: d358c88fda2590864a15c4cd3eb2f0bfb39cd78d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147525704"
---
{% ifversion fpt %} La vue d’ensemble de la sécurité est disponible pour les organisations qui utilisent {% data variables.product.prodname_enterprise %}. Pour plus d’informations, consultez « [Produits de GitHub](/articles/githubs-products) ».
{% elsif security-overview-displayed-alerts %} Toutes les organisations et entreprises ont une vue d’ensemble de la sécurité. Si vous utilisez {% data variables.product.prodname_GH_advanced_security %}{% ifversion ghae %} (gratuit avec la version bêta),{% endif %} vous verrez des informations supplémentaires. {% data reusables.advanced-security.more-info-ghas %} {% elsif ghes < 3.7 %} La vue d’ensemble de la sécurité de votre organisation est disponible si vous disposez d’une licence pour {% data variables.product.prodname_GH_advanced_security %}. {% data reusables.advanced-security.more-info-ghas %} {% elsif ghae %} Une vue d’ensemble de la sécurité pour votre entreprise et pour les organisations est disponible si vous utilisez {% data variables.product.prodname_GH_advanced_security %} (gratuit avec la version bêta). {% data reusables.advanced-security.more-info-ghas %} {% endif %}
