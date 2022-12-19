---
ms.openlocfilehash: ed7e94a18edf6d5c55ba6fb12c5f09236a9f2fe5
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145094497"
---
| Ação | Descrição
|------------------|-------------------
| `remove_self_hosted_runner` | Acionada quando um executor auto-hospedado é removido.
| `register_self_hosted_runner` | Acionada quando um novo executor auto-hospedado é registrado. Para obter mais informações, confira "[Como adicionar executores auto-hospedados](/actions/hosting-your-own-runners/adding-self-hosted-runners)".
| `runner_group_created` | Acionada quando um grupo de executores auto-hospedado é criado. Para obter mais informações, confira "[Sobre os grupos de executores auto-hospedados](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#about-self-hosted-runner-groups).
| `runner_group_removed` | Acionada quando um grupo de executores auto-hospedados é removido. Para obter mais informações, confira "[Como remover um grupo de executores auto-hospedados](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group)".
| `runner_group_runner_removed` | Acionada quando a API REST é usada para remover um executor auto-hospedado de um grupo.
| `runner_group_runners_added` | Acionada quando um executor auto-hospedado é adicionado a um grupo. Para obter mais informações, confira "[Como mover um executor auto-hospedado para um grupo](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group)".
| `runner_group_runners_updated` | Acionada quando a lista de integrantes do grupo de executor é atualizada. Para obter mais informações, confira "[Definir executores auto-hospedados em um grupo de uma organização](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization)".
| `runner_group_updated` | Acionada quando a configuração de um grupo de executor auto-hospedado é alterada. Para obter mais informações, confira "[Como alterar a política de acesso de um grupo de executores auto-hospedados](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)".
| `self_hosted_runner_updated` | Acionada quando o executor é atualizado. Pode ser visto usando a API REST e a interface do usuário; não visível na exportação de JSON/CSV. Para obter mais informações, confira "[Sobre os executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)".{% ifversion fpt or ghec %}
| `self_hosted_runner_online` | Acionada quando o aplicativo do executor é iniciado. Só pode ser visto usando a API REST. Não é visível na interface do usuário ou na exportação do JSON/CSV. Para obter mais informações, confira "[Como verificar o status de um executor auto-hospedado](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)".
| `self_hosted_runner_offline` | Acionada quando o aplicativo do executor é interrompido. Só pode ser visto usando a API REST. Não é visível na interface do usuário ou na exportação do JSON/CSV. Para obter mais informações, confira "[Como verificar o status de um executor auto-hospedado](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)".{% endif %}
