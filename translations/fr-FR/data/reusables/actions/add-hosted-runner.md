---
ms.openlocfilehash: cdf55c11d2d54b94788e317961466999079debbb
ms.sourcegitcommit: 3268914369fb29540e4d88ee5e56bc7a41f2a60e
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/26/2022
ms.locfileid: "148111295"
---
1. Cliquez sur **Nouvel exécuteur**, puis sur **{% octicon "mark-github" aria-label="New hosted runner" %} Nouvel exécuteur hébergé par {% data variables.product.prodname_dotcom %}** .
1. Complétez les détails nécessaires pour configurer votre nouvel exécuteur :

    - **Nom** : Entrez un nom pour votre nouvel exécuteur. Pour faciliter son identification, ce nom doit indiquer sa configuration matérielle et son système d’exploitation, comme `ubuntu-20.04-16core`.
    - **Image de l’exécuteur** : Choisissez un système d’exploitation dans les options disponibles. Une fois que vous avez sélectionné un système d’exploitation, vous pouvez choisir une version spécifique.
    - **Taille de l’exécuteur** : Choisissez une configuration matérielle dans la liste déroulante des options disponibles.
    - **Mise à l’échelle automatique** : Choisissez le nombre maximal d’exécuteurs pouvant être actifs à un moment donné.
    - **Groupe d’exécuteurs** : Choisissez le groupe dont votre exécuteur sera membre. Ce groupe va héberger plusieurs instances de votre exécuteur, au fur et à mesure de leurs scale-up et scale-down pour répondre à la demande.
    - **Réseaux** : Uniquement pour {% data variables.product.prodname_ghe_cloud %} : Indiquez si une plage d’adresses IP statiques va être affectée aux instances de l’{% data variables.actions.hosted_runner %}. Vous pouvez utiliser jusqu’à 10 adresses IP statiques au total.

1. Cliquez sur **Créer un exécuteur**.
