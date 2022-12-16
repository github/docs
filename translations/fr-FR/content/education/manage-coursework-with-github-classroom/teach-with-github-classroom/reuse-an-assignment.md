---
title: Réutiliser un devoir
intro: 'Vous pouvez réutiliser des affectations existantes dans plusieurs salles de classe, y compris des salles de classe d’une autre organisation.'
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can reuse assignments from a classroom. {% data reusables.classroom.classroom-admins-link %}'
shortTitle: Reuse an assignment
ms.openlocfilehash: 4c1c9048847affef95d5c904b188e68d2c183b43
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066913'
---
## À propos de la réutilisation des devoirs

Vous pouvez réutiliser un devoir individuel ou de groupe existant dans toute autre classe à laquelle vous avez accès, y compris les classes dans une autre organisation. Vous pouvez également réutiliser plusieurs affectations à la fois à partir d’une salle de classe. Si vous choisissez de réutiliser un devoir, {% data variables.product.prodname_classroom %} copie le devoir dans la classe de votre choix. Si le devoir utilise un dépôt de modèles et que vous choisissez de le réutiliser dans une classe d’une autre organisation, {% data variables.product.prodname_classroom %} crée une copie du dépôt et de son contenu dans l’organisation cible.

Le devoir copié inclut les détails du devoir tels que le nom, le dépôt source, le test d’évaluation automatique et l’éditeur par défaut. Vous pouvez ouvrir le devoir copié pour y apporter des modifications. Vous ne pouvez pas apporter de modifications à l’éditeur par défaut. 

## Réutilisation d’un devoir

1. Connectez-vous à {% data variables.product.prodname_classroom_with_url %}.
1. Accédez à la classe qui a le devoir que vous souhaitez réutiliser.

   ![Classe dans la liste des classes pour une organisation](/assets/images/help/classroom/click-classroom-in-list.png)

1. Dans la liste des devoirs, cliquez sur le devoir à réutiliser.

   ![Devoir dans la liste des devoirs pour une classe](/assets/images/help/classroom/click-assignment-in-list.png)

1. Sélectionnez le menu déroulant **{% octicon "pencil" aria-label="The pencil icon" %} Modifier** en haut à droite de la page, puis cliquez sur **{% octicon "sync" aria-label="The sync icon" %} Réutiliser le devoir**.

   ![Bouton Réutiliser le devoir](/assets/images/help/classroom/reuse-assignment-button.png)

1. Dans le modal « Réutiliser l’affectation », utilisez le menu déroulant **Choisir une organisation** pour sélectionner l’organisation dans laquelle vous souhaitez mettre l’affectation.  Utilisez ensuite le menu déroulant **Choisir une classe** pour sélectionner la classe au sein de cette organisation où vous souhaitez copier le devoir.

   ![Fenêtre Réutiliser le devoir](/assets/images/help/classroom/reuse-assignment-modal.png)

1. Cliquez sur **Créer un devoir**.
1. Le devoir est copié dans la classe sélectionnée et un message de confirmation s’affiche. Si vous avez choisi de réutiliser un devoir avec un dépôt de modèles, le processus de copie peut prendre quelques minutes, et vous devrez peut-être actualiser la page pour afficher le message « Terminé ».

   ![Message « Terminé » pour le devoir réutilisé](/assets/images/help/classroom/reuse-assignment-completed-message.png)

## Réutilisation de plusieurs affectations à partir d’une salle de classe

1. Connectez-vous à {% data variables.product.prodname_classroom_with_url %}.
2. À droite du nom d’une salle de classe, sélectionnez le menu déroulant {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, puis cliquez sur **Réutiliser l’affectation**.
   
   ![Capture d’écran de la page de présentation de la salle de classe avec la liste déroulante mise en évidence](/assets/images/help/classroom/classroom-reuse-assignment-modal.png)

3. Dans le modal « Réutiliser les affectations », utilisez le menu déroulant **Choisir une organisation** pour sélectionner l’organisation dans laquelle vous souhaitez mettre les affectations.  Utilisez ensuite le menu déroulant **Choisir une salle de classe** pour sélectionner la salle classe au sein de cette organisation où vous souhaitez copier l’affectation.
   
   ![Capture d’écran du modal Réutiliser les affectations](/assets/images/help/classroom/reuse-multiple-assignments-modal.png)

4. À gauche de chaque affectation, sélectionnez l’affectation que vous souhaitez réutiliser.

   ![Capture d’écran de plusieurs affectations sélectionnées](/assets/images/help/classroom/multiple-assignments-selected.png)

5. Cliquez sur **Créer des affectations**.
6. Les affectations sont copiées dans la salle de classe sélectionnée. Si vous avez choisi de réutiliser une affectation avec un modèle de référentiel, le processus de copie peut prendre quelques minutes.
