---
ms.openlocfilehash: ed7e94a18edf6d5c55ba6fb12c5f09236a9f2fe5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145103993"
---
| Action | Description
|------------------|-------------------
| `remove_self_hosted_runner` | Déclenchée lorsqu’un exécuteur auto-hébergé est supprimé.
| `register_self_hosted_runner` | Déclenchée lorsqu’un nouvel exécuteur auto-hébergé est inscrit. Pour plus d’informations, consultez « [Ajout d’exécuteurs auto-hébergés](/actions/hosting-your-own-runners/adding-self-hosted-runners) ».
| `runner_group_created` | Déclenchée lorsqu’un groupe d’exécuteurs auto-hébergés est créé. Pour plus d’informations, consultez [À propos des groupes d’exécuteurs auto-hébergés](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#about-self-hosted-runner-groups).
| `runner_group_removed` | Déclenchée lorsqu’un groupe d’exécuteurs auto-hébergés est supprimé. Pour plus d’informations, consultez « [Suppression d’un groupe d’exécuteurs auto-hébergés](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group) ».
| `runner_group_runner_removed` | Déclenchée lorsque l’API REST est utilisée pour supprimer un exécuteur auto-hébergé d’un groupe.
| `runner_group_runners_added` | Déclenchée lorsqu’un exécuteur auto-hébergé est ajouté à un groupe. Pour plus d’informations, consultez « [Déplacement d’un exécuteur auto-hébergé vers un groupe](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group) ».
| `runner_group_runners_updated` | Déclenchée lors de la mise à jour de la liste des membres d’un groupe d’exécuteurs. Pour plus d’informations, consultez « [Définir des exécuteurs auto-hébergés dans un groupe pour une organisation](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization) ».
| `runner_group_updated` | Déclenchée lorsque la configuration d’un groupe d’exécuteurs auto-hébergés est modifiée. Pour plus d’informations, consultez « [Modification de la stratégie d’accès d’un groupe d’exécuteurs auto-hébergés](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group) ».
| `self_hosted_runner_updated` | Déclenchée lorsque l’application de l’exécuteur est mise à jour. Visible à l’aide de l’API REST et de l’interface utilisateur ; non visible dans l’exportation JSON/CSV. Pour plus d’informations, consultez « [À propos des coureurs auto-hébergés](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners) ». {% ifversion fpt or ghec %}
| `self_hosted_runner_online` | Déclenchée lorsque l’application de l’exécuteur est démarrée. Visible uniquement à l’aide de l’API REST ; non visible dans l’interface utilisateur ni l’exportation JSON/CSV. Pour plus d’informations, consultez « [Vérification de l’état d’un exécuteur auto-hébergé](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner) ».
| `self_hosted_runner_offline` | Déclenchée lorsque l’application de l’exécuteur est arrêtée. Visible uniquement à l’aide de l’API REST ; non visible dans l’interface utilisateur ni l’exportation JSON/CSV. Pour plus d’informations, consultez « [Vérification de l’état d’un exécuteur auto-hébergé](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner) ».{% endif %}
