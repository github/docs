---
title: À propos des listes de tâches
intro: Vous pouvez utiliser des listes de tâches pour diviser vos problèmes en sous-tâches.
versions:
  feature: projects-v2-tasklists
miniTocMaxHeadingLevel: 3
redirect_from:
  - /early-access/issues/about-tasklists
ms.openlocfilehash: 69cdde1bb071f963b1a2f58ef1227bc96ab9d869
ms.sourcegitcommit: f5ec7f52d2945ba8b7c14f8f604e4784a8feda19
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180784'
---
{% data reusables.projects.tasklists-release-stage %}

## À propos des listes de tâches

Les listes de tâches prennent en charge les hiérarchies de problèmes sur {% data variables.product.product_name %} pour vous aider à suivre vos problèmes, à les diviser en sous-tâches et à créer des relations entre eux.

Les listes de tâches s’appuient sur l’itération précédente des [listes de tâches bêta](/get-started/writing-on-github/working-with-advanced-formatting/about-task-lists) et prennent toujours en charge la conversion d’éléments en problèmes, l’affichage de la progression d’une liste de tâches et la création d’une relation « suivis/suivi par » entre les problèmes.

Les problèmes que vous ajoutez à vos listes de tâches sont automatiquement renseignés avec les personnes responsables et toute étiquette appliquée.

![Image montrant des listes de tâches en action](/assets/images/help/issues/tasklist-hero.png)

### À propos de l’intégration à {% data variables.projects.projects_v2 %}

 Le panneau latéral de votre projet affiche la place d’un problème dans la hiérarchie dans un menu de navigation, ce qui vous permet de parcourir les problèmes inclus dans vos listes de tâches. Vous pouvez également ajouter les champs Suivis et Suivi par à vos vues de projet pour voir rapidement les relations entre vos problèmes. Pour plus d’informations, consultez « [À propos des champs Suivis et Suivi par](/issues/planning-and-tracking-with-projects/understanding-fields/about-tracks-and-tracked-by-fields) ».

## Création de listes de tâches

Vous pouvez créer une liste d tâches dans une description de problème. Créez un bloc de code délimité et incluez `[tasklist]` en regard des accents graves d’ouverture. Vous pouvez ensuite préfacer chaque élément avec `- [ ]` et inclure des liens vers d’autres problèmes ou du texte. Vous pouvez éventuellement inclure un titre en tant qu’en-tête Markdown en haut de votre liste. 

````
```[tasklist]
### Tasks
- [ ] https://github.com/octo-org/octo-repo/issues/45
- [ ] Draft issue title
```
````
Votre Markdown sera rendu par {% data variables.product.product_name %} sous la forme d’une liste de tâches. Vous pouvez ensuite apporter des modifications et ajouter des problèmes et des brouillons de problèmes à l’aide de l’interface utilisateur. Si vous modifiez la description du problème, vous pouvez modifier le Markdown directement ou le copier pour dupliquer la liste de tâches dans d’autres problèmes.

Vous pouvez également cliquer sur {% octicon "checklist" aria-label="The checklist icon" %} dans la barre d’outils de mise en forme pour insérer une liste de tâches lors de la création d’un problème ou de la modification d’une description de problème.

![Capture d’écran montrant le bouton « Ajouter une liste de tâches »](/assets/images/help/issues/tasklist-formatting-toolbar.png)

## Ajout de problèmes à une liste de tâches

1. En bas de votre liste de tâches, cliquez sur **Ajouter un élément aux tâches**.
   
   ![Capture d’écran montrant le bouton « Ajouter un élément aux tâches »](/assets/images/help/issues/add-new-tasklist-button.png)
   
1. Sélectionnez le problème à ajouter à votre liste de tâches.
   
   * Pour ajouter un problème récemment mis à jour à partir du dépôt, cliquez sur le problème dans le menu déroulant ou utilisez les touches de direction pour le sélectionner, puis appuyez sur <kbd>Entrée</kbd>. 
     
     ![Capture d’écran montrant les problèmes récents](/assets/images/help/issues/select-recent-issue.png)
     
   * Pour rechercher un problème dans le dépôt, commencez à taper le titre d’un problème ou le numéro du problème et cliquez sur le résultat. Vous pouvez également utiliser les touches de direction pour sélectionner le problème et appuyer sur <kbd>Entrée</kbd>.
     
     ![Capture d’écran montrant comment rechercher un problème](/assets/images/help/issues/search-for-issue.png)
     
   * Pour ajouter un problème directement à l’aide de son URL, collez l’URL d’un problème et appuyez sur <kbd>Entrée</kbd>.
        
     ![Capture d’écran montrant l’URL d’un problème collé](/assets/images/help/issues/paste-issue-url.png)
     

## Créer des brouillons de problèmes dans une liste de tâches

Les brouillons de problèmes sont utiles pour capturer rapidement des idées que vous pouvez convertir par la suite en problèmes. Contrairement aux problèmes et aux demandes de tirage (pull requests) référencées à partir de vos dépôts, les brouillons de problèmes n’existent que dans votre liste de tâches.

1. En bas de votre liste de tâches, cliquez sur **Ajouter un élément aux tâches**.
   
   ![Capture d’écran montrant le bouton « Ajouter un élément aux tâches »](/assets/images/help/issues/add-new-tasklist-button.png)
   
1. Tapez le titre de votre brouillon de problème, puis appuyez sur <kbd>Entrée</kbd>.
   
   ![Capture d’écran montrant le titre d’un brouillon de problème](/assets/images/help/issues/add-draft-issue-to-tasklist.png)
   

## Conversion de brouillons de problèmes en problèmes dans une liste de tâches

Vous pouvez convertir des brouillons de problèmes en problèmes. Les problèmes sont créés dans le même dépôt que le problème parent de la liste de tâches.

1. À côté du brouillon de problème que vous souhaitez convertir, cliquez sur {% octicon "kebab-horizontal" aria-label="The kebab menu icon" %}.
   
   ![Capture d’écran montrant l’icône du menu.](/assets/images/help/issues/tasklist-item-kebab.png)
   
1. Dans le menu, cliquez sur **Convertir en problème**.
   
   ![Capture d’écran de l’option « Convertir en problème »](/assets/images/help/issues/tasklist-convert-to-issue.png)
   

## Suppression d’un problème ou d’un brouillon de problème d’une liste de tâches

Vous pouvez supprimer des problèmes et des brouillons de problèmes de votre liste de tâches. Les problèmes supprimés d’une liste de tâches ne sont pas supprimés du dépôt.

1. À côté du brouillon de problème que vous souhaitez supprimer, cliquez sur {% octicon "kebab-horizontal" aria-label="The kebab menu icon" %}.
   
   ![Capture d’écran montrant l’icône du menu.](/assets/images/help/issues/tasklist-item-kebab.png)
   
1. Dans le menu, cliquez sur **Supprimer**.
   
   ![Capture d’écran montrant l’option « Supprimer »](/assets/images/help/issues/tasklist-remove.png)
   
## Modification du titre d’une liste de tâches

Quand vous créez une liste de tâches, le titre par défaut est « Tâches ». Vous pouvez changer le titre en modifiant le Markdown du problème.

1. En haut à droite du corps du problème, cliquez sur {% octicon "kebab-horizontal" aria-label="The kebab menu icon" %}.
   
   ![Capture d’écran montrant l’emplacement de l’icône de menu](/assets/images/help/issues/comment-menu.png)
   
1. Dans le menu, cliquez sur **Modifier**.
   
   ![Capture d’écran montrant l’option Modifier](/assets/images/help/issues/comment-menu-edit.png)
   
1. Remplacez l’en-tête dans le bloc de code délimité par votre nouveau titre. Par exemple, remplacez `### Tasks` par `### My new title`. 
   
   ![Capture d’écran montrant l’option Modifier](/assets/images/help/issues/edit-tasklist-title.png)
   
1. Cliquez sur **Mettre à jour le commentaire**.

## Copie d’une liste de tâches

Quand vous copiez votre liste de tâches à l’aide de l’option « Copier le Markdown », {% data variables.product.product_name %} copie le Markdown dans le Presse-papiers et inclut le nom du problème pour vous permettre de coller la liste de tâches en dehors de GitHub sans perdre le contexte. 

1. En haut à droite de votre liste de tâches, cliquez sur {% octicon "kebab-horizontal" aria-label="The kebab menu icon" %}.
   
   ![Capture d’écran montrant l’icône du menu.](/assets/images/help/issues/tasklist-kebab.png)
   
1. Dans le menu, cliquez sur **Copier le Markdown**.
   
   ![Capture d’écran montrant l’option « Copier le Markdown »](/assets/images/help/issues/tasklist-copy-markdown.png)
   
