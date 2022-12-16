---
ms.openlocfilehash: 0d73e17e61dc0848a42a18a7e1811b43e541b6a4
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/12/2022
ms.locfileid: "147061297"
---
1. Sous « Exécuteur », recherchez l’exécuteur dans la liste. Si votre exécuteur est dans un groupe, cliquez sur {% octicon "chevron-down" aria-label="The downwards chevron" %} pour développer la liste.
1. Cliquez sur {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} en regard de l’exécuteur que vous souhaitez supprimer, puis cliquez sur **Supprimer**.

    ![Suppression d’un paramètre d’exécuteur auto-hébergé](/assets/images/help/settings/actions-runner-remove.png)
1. Vous verrez des instructions pour supprimer l’exécuteur auto-hébergé. Effectuez l’une des étapes suivantes pour supprimer l’exécuteur, s’il est toujours accessible :

    * **Si vous avez accès à la machine de l’exécuteur :** Suivez les instructions à l’écran pour que le système d’exploitation de votre machine exécute la commande de suppression. Les instructions incluent l’URL nécessaire et un jeton généré automatiquement à durée limitée.

        La commande de suppression exécute les tâches suivantes :

        * Elle supprime l’exécuteur de {% data variables.product.product_name %}.
        * Elle supprime tout fichier de configuration d’application d’exécuteur auto-hébergé sur la machine.
        * Supprime tous les services configurés s’ils ne s’exécutent pas en mode interactif.

    * **Si vous n’avez pas accès à la machine :** cliquez sur **Oui, forcer la suppression de cet exécuteur** pour forcer {% data variables.product.product_name %} à supprimer l’exécuteur.
