---
ms.openlocfilehash: b0dde5c70f7349ae325893afa36e21fbda77d884
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145110730"
---
{% ifversion fpt or ghec or ghes < 3.5 %} {% data variables.product.prodname_registry %} está disponible con {% data variables.product.prodname_free_user %}, {% data variables.product.prodname_pro %}, {% data variables.product.prodname_free_team %} para organizaciones, {% data variables.product.prodname_team %}, {% data variables.product.prodname_ghe_cloud %}, {% data variables.product.prodname_ghe_server %} 3.0 o superior y {% data variables.product.prodname_ghe_managed %}.{% ifversion ghes %} Para obtener más información sobre cómo actualizar la instancia {% data variables.product.prodname_ghe_server %}, consulta «[Acerca de las actualizaciones a nuevas versiones](/admin/overview/about-upgrades-to-new-releases)» y el [{% data variables.enterprise.upgrade_assistant %}](https://support.github.com/enterprise/server-upgrade) para encontrar la ruta de actualización de la versión actual.{% endif %} {% ifversion fpt or ghec %}
<br>{% data variables.product.prodname_registry %} no está disponible para repositorios privados que pertenezcan a cuentas que utilicen planes tradicionales por repositorio. Las cuentas que utilicen los planes tradicionales por repositorio tampoco podrán acceder al {% data variables.product.prodname_container_registry %} ya que estas cuentas se facturan por repositorio. {% data reusables.gated-features.more-info %} {% endif %} {% endif %}
