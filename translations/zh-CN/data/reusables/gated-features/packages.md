---
ms.openlocfilehash: b0dde5c70f7349ae325893afa36e21fbda77d884
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "145097575"
---
{% ifversion fpt or ghec or ghes < 3.5 %} {% data variables.product.prodname_registry %} 适用于 {% data variables.product.prodname_free_user %}、{% data variables.product.prodname_pro %}、面向组织的 {% data variables.product.prodname_free_team %}、{% data variables.product.prodname_team %}, {% data variables.product.prodname_ghe_cloud %}, {% data variables.product.prodname_ghe_server %} 3.0 或更高版本以及 {% data variables.product.prodname_ghe_managed %}。{% ifversion ghes %} 有关升级 {% data variables.product.prodname_ghe_server %} 实例更多信息，请参阅“[关于升级至新版本](/admin/overview/about-upgrades-to-new-releases)”和 [{% data variables.enterprise.upgrade_assistant %}](https://support.github.com/enterprise/server-upgrade)以从你当前的发布版本中查找升级路径。{% endif %} {% ifversion fpt or ghec %}
<br>{% data variables.product.prodname_registry %} 不适用于使用旧版按仓库计划的帐户所拥有的私有仓库。 此外，使用旧版按仓库计划的帐户无法访问 {% data variables.product.prodname_container_registry %}，因为这些帐户是按仓库计费的。 {% data reusables.gated-features.more-info %} {% endif %} {% endif %}
