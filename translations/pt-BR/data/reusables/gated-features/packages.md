---
ms.openlocfilehash: b0dde5c70f7349ae325893afa36e21fbda77d884
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145093481"
---
O {% ifversion fpt or ghec or ghes < 3.5 %} {% data variables.product.prodname_registry %} está disponível com {% data variables.product.prodname_free_user %}, {% data variables.product.prodname_pro %}, {% data variables.product.prodname_free_team %} for organizations, {% data variables.product.prodname_team %}, {% data variables.product.prodname_ghe_cloud %}, {% data variables.product.prodname_ghe_server %} 3.0 ou superior e o {% data variables.product.prodname_ghe_managed %}.{% ifversion ghes %}. Para obter mais informações sobre como atualizar sua instância do {% data variables.product.prodname_ghe_server %}, confira "[Sobre atualizações para novas versões](/admin/overview/about-upgrades-to-new-releases)" e consulte o [{% data variables.enterprise.upgrade_assistant %}](https://support.github.com/enterprise/server-upgrade) para encontrar o caminho de atualização da sua versão atual.{% endif %} {% ifversion fpt or ghec %}
<br>O {% data variables.product.prodname_registry %} não está disponível para repositórios privados de contas que utilizam planos antigos por-repositório. Além disso, as contas que usam os planos de legado por repositório não podem acessar o {% data variables.product.prodname_container_registry %} já que essas contas são cobradas por repositório. {% data reusables.gated-features.more-info %} {% endif %} {% endif %}
