---
title: Test des changements de configuration de conteneur de développement sur une branche de pré-build
shortTitle: Test dev container changes
allowTitleToDifferFromFilename: true
intro: 'Quand vous modifiez la configuration du conteneur de développement pour une branche activée pour les prébuilds, vous devez tester vos modifications dans un codespace.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
permissions: People with write permissions to a repository can create or edit the dev container configuration for a branch.
ms.openlocfilehash: 29b44d0fb0b3bb3211f0c204cc7e99e39ab89b79
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159567'
---
Tous les changements que vous apportez à la configuration du conteneur de développement pour une branche de prébuild entraînent une mise à jour de la configuration du codespace et de la prébuild associée. Il est donc important de tester ces changements dans un codespace d’une branche de test avant de les valider dans une branche de votre dépôt utilisée activement. Vous serez ainsi assuré de ne pas introduire de changements cassants pour votre équipe.

Pour plus d’informations, consultez « [Présentation des conteneurs de développement](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers) ».

## Test des changements apportés à la configuration du conteneur de développement

1. Créez un codespace à partir de la branche de pré-build dont vous souhaitez modifier le conteneur de développement. Pour plus d’informations, consultez « [Création d’un codespace pour un dépôt](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository) ».
1. Dans le codespace, extrayez une branche de test. Pour plus d’informations, consultez « [Utilisation d’un contrôle de code source dans votre codespace](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace#creating-or-switching-branches) ».
1. Apportez les changements requis à la configuration du conteneur de développement.
1. Appliquez les modifications en régénérant le conteneur. Pour plus d’informations, consultez « [Présentation des conteneurs de développement](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#applying-configuration-changes-to-a-codespace) ».
1. Lorsque tout semble correct, nous vous recommandons également de créer un codespace à partir de votre branche de test pour vous assurer que tout fonctionne. Vous pouvez ensuite valider les changements que vous avez apportés à la branche par défaut de votre dépôt ou à une branche de fonctionnalité active, ce qui déclenche une mise à jour de la prébuild pour cette branche.

   {% note %}
   
   **Remarque** : la création de ce codespace prendra plus de temps que d’habitude, car elle ne sera pas créée à partir d’une pré-build.
   
   {% endnote %}
