---
ms.openlocfilehash: cf95e20b26e8fb29fbae23c0a5e9a913aa73c8b0
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145066488"
---
1. Cliquez sur **Supprimer**.
1. Vous verrez des instructions pour supprimer l’exécuteur auto-hébergé. Effectuez l’une des étapes suivantes pour supprimer l’exécuteur, s’il est toujours accessible :

    * **Si vous avez accès à la machine de l’exécuteur :** Suivez les instructions à l’écran pour que le système d’exploitation de votre machine exécute la commande de suppression. Les instructions incluent l’URL nécessaire et un jeton généré automatiquement à durée limitée.

        La commande de suppression exécute les tâches suivantes :

        * Elle supprime l’exécuteur de {% data variables.product.product_name %}.
        * Elle supprime tout fichier de configuration d’application d’exécuteur auto-hébergé sur la machine.
        * Elle supprime tous les services configurés s’ils ne s’exécutent pas en mode interactif.

    * **Si vous n’avez pas accès à la machine :** Cliquez sur **Forcer la suppression de cet exécuteur** pour forcer {% data variables.product.product_name %} à supprimer l’exécuteur.
