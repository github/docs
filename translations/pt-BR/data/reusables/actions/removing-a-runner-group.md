---
ms.openlocfilehash: d3eda8a12037f1da8ec915c4652fa658f34fcc6b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148108253"
---
Os executores são retornados automaticamente ao grupo padrão quando o grupo deles é removido.

{% ifversion ghes or ghae or ghec %} {% data reusables.actions.runner-groups-navigate-to-repo-org-enterprise %}
1. Na lista de grupos, à direita do grupo que você deseja excluir, clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.
2. Para remover o grupo, clique em **Remover grupo**.
3. Revise as solicitações de confirmação e clique em **Remover este grupo de executores**. Todos os executores que ainda estiverem nesse grupo serão movidos automaticamente para o grupo padrão, herdando as permissões de acesso atribuídas a ele.

{% endif %}
