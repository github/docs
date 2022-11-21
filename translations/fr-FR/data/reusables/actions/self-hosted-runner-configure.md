---
ms.openlocfilehash: 27ed9d55b8199298dc1cfdf8b4d3da925e08aa8d
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145066506"
---
1. Sélectionnez l’image et l’architecture du système d’exploitation de votre machine d’exécuteur auto-hébergée.
1. Des instructions vous montrent comment télécharger l’application d’exécuteur et l’installer sur votre machine d’exécuteur auto-hébergée.

   Ouvrez un interpréteur de commandes sur votre machine d’exécuteur auto-hébergée et exécutez toutes les commandes shell dans l’ordre indiqué.

   {% note %}

   **Remarque :** Sur Windows, si vous souhaitez installer l’application d’exécuteur auto-hébergée en tant que service, vous devez ouvrir un interpréteur de commandes avec des privilèges d’administrateur. Nous vous recommandons également d’utiliser `C:\actions-runner` comme répertoire pour l’application de l’exécuteur auto-hébergé afin que les comptes système Windows puissent accéder au répertoire de l’exécuteur.

   {% endnote %}

   Les instructions vous guident tout au long des tâches suivantes :
   - Téléchargement et extraction de l’application d’exécuteur auto-hébergée.
   - Exécution du script `config` pour configurer l’application d’exécuteur auto-hébergée et l’inscrire auprès de {% data variables.product.prodname_actions %}. L’URL de destination et un jeton limité dans le temps généré automatiquement sont nécessaires pour permettre au script `config` d’authentifier la demande.
     - Sur Windows, le script `config` vous demande également si vous souhaitez installer l’application d’exécuteur auto-hébergée en tant que service. Pour Linux et macOS, vous pouvez installer un service une fois que vous avez terminé d’ajouter l’exécuteur. Pour plus d’informations, consultez « [Configuration de l’application d’exécuteur auto-hébergée en tant que service](/actions/automating-your-workflow-with-github-actions/configuring-the-self-hosted-runner-application-as-a-service) ».
   - Exécution de l’application d’exécuteur auto-hébergée pour connecter la machine à {% data variables.product.prodname_actions %}.
