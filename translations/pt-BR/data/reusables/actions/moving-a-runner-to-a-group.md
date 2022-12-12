---
ms.openlocfilehash: 81cfff3e9391616c64b73a3d7fc3d180e6760502
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148108254"
---
Se você não especificar o grupo de um executor durante o processo de registro, seus novos executores são automaticamente atribuídos ao grupo padrão e poderão ser transferidos para outro grupo.

{% data reusables.actions.self-hosted-runner-navigate-to-org-enterprise %} {% ifversion ghec or ghes > 3.3 or ghae > 3.3 %}
1. Na lista de "Executores", clique no executor que você deseja configurar.
2. Selecione o menu suspenso **Grupo de executores**.
3. Em "Transferir executor para o grupo", escolha um grupo de destino para o executor.
{% elsif ghae < 3.4 or ghes < 3.4 %}
1. Na seção {% ifversion ghes or ghae %}"Grupos de executores"{% endif %} da página de configurações, localize o grupo atual do corredor que você deseja mover e expanda a lista de membros do grupo.
    ![Ver os membros do grupo de executores](/assets/images/help/settings/actions-org-runner-group-members.png)
2. Marque a caixa de seleção ao lado do executor auto-hospedado e clique em **Mover para o grupo** para ver os destinos disponíveis.
    ![Movimentação de um membro do grupo de executores](/assets/images/help/settings/actions-org-runner-group-member-move.png)
3. Para mover o executor, clique no grupo de destino.
    ![Movimentação de um membro do grupo de executores](/assets/images/help/settings/actions-org-runner-group-member-move-destination.png) {% endif %}
