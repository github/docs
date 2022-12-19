---
ms.openlocfilehash: ed7e94a18edf6d5c55ba6fb12c5f09236a9f2fe5
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: "145114794"
---
| Acción | Descripción
|------------------|-------------------
| `remove_self_hosted_runner` | Se activa cuando se elimina un ejecutor auto-hospedado.
| `register_self_hosted_runner` | Se crea cuando se registra un ejecutor auto-hospedado nuevo. Para más información, vea "[Adición de ejecutores autohospedados](/actions/hosting-your-own-runners/adding-self-hosted-runners)".
| `runner_group_created` | Se activa cuando se crea un grupo de ejecutores auto-hospedados. Para más información, vea "[Acerca de los grupos de ejecutores autohospedados](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#about-self-hosted-runner-groups)".
| `runner_group_removed` | Se activa cuando se elimina un grupo de ejecutores auto-hospedado. Para más información, vea "[Eliminación de un grupo de ejecutores autohospedados](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group)".
| `runner_group_runner_removed` | Se activa cuando se utiliza la API de REST para eliminar un ejecutor auto-hospedado de un grupo.
| `runner_group_runners_added` | Se activa cuando se agrega un ejecutor auto-hospedado a un grupo. Para más información, vea "[Traslado de un ejecutor autohospedado a un grupo](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group)".
| `runner_group_runners_updated` | Se activa cuando se actualiza la lista de miembros de un grupo de ejecutores. Para más información, vea "[Establecimiento de los ejecutores autohospedados en un grupo para una organización](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization)".
| `runner_group_updated` | Se activa cuando se cambia la configuración de un grupo de ejecutores auto-hospedados. Para más información, vea "[Cambio de la directiva de acceso de un grupo de ejecutores autohospedados](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)".
| `self_hosted_runner_updated` | Se activa cuando se actualiza la aplicación ejecutora. Se puede ver utilizando la API de REST y la IU; no se puede ver en la exportación de JSON/CSV. Para más información, vea "[Acerca de los ejecutores autohospedados](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)".{% ifversion fpt or ghec %}
| `self_hosted_runner_online` | Se activa cuando la aplicación del ejecutor se inicia. Solo se puede ver utilizando la API de REST; no está visible en la IU o en la exportación de JSON/CSV. Para más información, vea "[Comprobación del estado de un ejecutor autohospedado](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)".
| `self_hosted_runner_offline` | Se activa cuando se detiene la aplicación del ejecutor. Solo se puede ver utilizando la API de REST; no está visible en la IU o en la exportación de JSON/CSV. Para más información, vea "[Comprobación del estado de un ejecutor autohospedado](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)".{% endif %}
