---
ms.openlocfilehash: 8492ebc0962837c6f748fe30dbca08f529c353fc
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148107864"
---
{% ifversion fpt %} {% note %}

**Observação:** todas as organizações têm um só grupo de executores padrão. Somente contas de empresa e organizações pertencentes a contas de empresa podem criar e gerenciar grupos de executores adicionais.

{% endnote %}

Grupos de executores são usados para controlar o acesso aos executores. Os administradores da organização podem configurar políticas de acesso que controlam quais repositórios em uma organização têm acesso ao grupo de runner.

Se você usar o {% data variables.product.prodname_ghe_cloud %}, poderá criar grupos de executores adicionais. Os administradores da empresa podem configurar políticas de acesso que controlam quais organizações em uma empresa têm acesso ao grupo de executores, e os administradores da organização podem atribuir políticas de acesso ao repositório granulares adicionais para o grupo de executores da empresa. {% endif -%} {% ifversion ghec or ghes or ghae %}

{% data reusables.actions.runner-group-enterprise-overview %}

Quando novos executores são criados, eles são atribuídos automaticamente ao grupo-padrão. Os executores só podem estar em um grupo por vez. Você pode mover os executores do grupo-padrão para outro grupo. Para obter mais informações, confira "[Como mover um executor para um grupo](#moving-a-runner-to-a-group)".

{% endif %}
