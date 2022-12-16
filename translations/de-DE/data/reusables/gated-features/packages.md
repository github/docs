---
ms.openlocfilehash: b0dde5c70f7349ae325893afa36e21fbda77d884
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "145101960"
---
{% ifversion fpt or ghec or ghes < 3.5 %} {% data variables.product.prodname_registry %} ist verfügbar mit {% data variables.product.prodname_free_user %}, {% data variables.product.prodname_pro %}, {% data variables.product.prodname_free_team %} für Organisationen, {% data variables.product.prodname_team %}, {% data variables.product.prodname_ghe_cloud %}, {% data variables.product.prodname_ghe_server %} 3.0 oder höher, und {% data variables.product.prodname_ghe_managed %}.{% ifversion ghes %} Weitere Informationen zum Upgrade deiner Instanz von {% data variables.product.prodname_ghe_server %} findest du unter „[Über Upgrades auf neue Versionen](/admin/overview/about-upgrades-to-new-releases)“ und im [{% data variables.enterprise.upgrade_assistant %}](https://support.github.com/enterprise/server-upgrade), um den Upgrade-Pfad von deiner aktuellen Release-Version zu finden.{% endif %} {% ifversion fpt or ghec %}.
<br>{% data variables.product.prodname_registry %} ist nicht verfügbar für private Repositorys im Besitz von Konten mit älteren Pro-Repository-Plänen. Außerdem können Konten, die die alten Repository-Pläne verwenden, nicht auf die {% data variables.product.prodname_container_registry %} zugreifen, da diese Konten pro Repository abgerechnet werden. {% data reusables.gated-features.more-info %} {% endif %} {% endif %}
