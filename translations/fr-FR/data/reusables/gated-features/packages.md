---
ms.openlocfilehash: b0dde5c70f7349ae325893afa36e21fbda77d884
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145101961"
---
{% ifversion fpt or ghec or ghes < 3.5 %} {% data variables.product.prodname_registry %} est disponible avec {% data variables.product.prodname_free_user %}, {% data variables.product.prodname_pro %}, {% data variables.product.prodname_free_team %} pour les organisations, {% data variables.product.prodname_team %}, {% data variables.product.prodname_ghe_cloud %}, {% data variables.product.prodname_ghe_server %} 3.0 ou version ultérieure et {% data variables.product.prodname_ghe_managed %}.{% ifversion ghes %} Pour plus d’information sur la mise à niveau de votre instance {% data variables.product.prodname_ghe_server %}, consultez « [À propos des mises à niveau vers de nouvelles versions](/admin/overview/about-upgrades-to-new-releases) » et reportez-vous à l’[{% data variables.enterprise.upgrade_assistant %}](https://support.github.com/enterprise/server-upgrade) pour trouver le chemin de mise à niveau à partir de votre version actuelle.{% endif %} {% ifversion fpt or ghec %}
<br>{% data variables.product.prodname_registry %} n’est pas disponible pour les référentiels privés appartenant à des comptes qui utilisent des plans par référentiel hérités. En outre, les comptes qui utilisent des plans par référentiel hérités n’ont pas accès au {% data variables.product.prodname_container_registry %} puisque ces comptes sont facturés par référentiel. {% data reusables.gated-features.more-info %} {% endif %} {% endif %}
