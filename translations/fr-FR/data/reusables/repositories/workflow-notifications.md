---
ms.openlocfilehash: 307a695e8a973c7b37a29ebbeb4606a8ed43d38d
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145105501"
---
Si vous activez les notifications par e-mail ou web pour {% data variables.product.prodname_actions %}, vous recevez une notification quand une exécution de workflow que vous avez déclenchée est terminée. La notification inclut l’état de l’exécution du workflow (y compris les exécutions réussies, ayant échoué, neutres et annulées). Vous pouvez également choisir de recevoir une notification uniquement lorsqu’une exécution de workflow a échoué. Pour plus d’informations sur l’activation ou la désactivation des notifications, consultez « [À propos des notifications](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications) ».

Les notifications pour les workflows planifiés sont envoyées à l’utilisateur qui a initialement créé les workflows. Si un autre utilisateur met à jour la syntaxe cron dans le fichier de workflow, les prochaines notifications sont envoyées à cet utilisateur à la place. {% ifversion fpt or ghes or ghec %} Si un workflow planifié est désactivé, puis réactivé, les notifications sont envoyées à l’utilisateur qui a réactivé le workflow plutôt qu’à l’utilisateur qui a modifié la syntaxe cron pour la dernière fois.{% endif %}

Vous pouvez également voir l’état des exécutions de workflow sous l’onglet Actions d’un dépôt. Pour plus d’informations, consultez « [Gestion d’une exécution de workflow](/actions/automating-your-workflow-with-github-actions/managing-a-workflow-run) ».
