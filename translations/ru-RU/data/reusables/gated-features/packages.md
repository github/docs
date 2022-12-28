---
ms.openlocfilehash: b0dde5c70f7349ae325893afa36e21fbda77d884
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: "145110731"
---
{% ifversion fpt or ghec or ghes < 3.5 %} {% data variables.product.prodname_registry %} доступно с {% data variables.product.prodname_free_user %}, {% data variables.product.prodname_pro %}, {% data variables.product.prodname_free_team %} для организаций, {% data variables.product.prodname_team %}, {% data variables.product.prodname_ghe_cloud %}, {% data variables.product.prodname_ghe_server %} версии 3.0 или более новой и {% data variables.product.prodname_ghe_managed %}.{% ifversion ghes %} Дополнительную информацию об обновлении экземпляра {% data variables.product.prodname_ghe_server %} см. в разделе [Сведения об обновлении до новых выпусков](/admin/overview/about-upgrades-to-new-releases), а также просмотрите [{% data variables.enterprise.upgrade_assistant %}](https://support.github.com/enterprise/server-upgrade), чтобы найти путь обновления с вашей текущей версии выпуска.{% endif %} {% ifversion fpt or ghec %}
<br>{% data variables.product.prodname_registry %} недоступен для частных репозиториев, принадлежащих учетным записям, которые используют устаревшие планы для каждого репозитория. Кроме того, учетные записи, использующие устаревшие планы для каждого репозитория, не могут получить доступ к {% data variables.product.prodname_container_registry %}, так как эти учетные записи оплачиваются по репозиториям. {% data reusables.gated-features.more-info %} {% endif %} {% endif %}
