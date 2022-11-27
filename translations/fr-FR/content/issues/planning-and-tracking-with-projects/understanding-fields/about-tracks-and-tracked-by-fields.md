---
title: À propos des champs Suivis et Suivi par
shortTitle: About Tracks and Tracked by fields
intro: Vous pouvez afficher les sous-tâches des problèmes dans vos projets.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2-tasklists
type: tutorial
topics:
  - Projects
ms.openlocfilehash: 44c1fcf3ed4495b57a0f2dbe3e92076f0e815502
ms.sourcegitcommit: f5ec7f52d2945ba8b7c14f8f604e4784a8feda19
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180744'
---
{% data reusables.projects.tasklists-release-stage %}

Vous pouvez activer les champs Suivis et Suivi par sur vos projets pour voir les relations entre vos problèmes quand vous ajoutez des sous-tâches dans des listes de tâches. Pour plus d’informations sur la création de hiérarchies de problèmes dans des listes de tâches, consultez « [À propos des listes de tâches](/issues/tracking-your-work-with-issues/about-tasklists) ».

Le champ Suivi par peut être utilisé pour regrouper des éléments, générant ainsi une vue qui montre clairement les sous-tâches de chaque problème et le travail à fournir pour les accomplir. Pour plus d’informations, consultez « [Regroupement par valeurs de champ dans la disposition du tableau](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view#grouping-by-field-values-in-table-layout) ».

Vous pouvez également filtrer par le champ Suivi par pour afficher uniquement les éléments suivis par des problèmes spécifiques. Commencez à taper « suivi par » et sélectionnez un problème dans la liste ou, si vous connaissez le dépôt et le numéro du problème, tapez le filtre ci-dessous en entier.

```
tracked-by:"<OWNER>/<REPO>#<ISSUE NUMBER>"
```

Pour utiliser le filtre, remplacez `<OWNER>` par le propriétaire du dépôt, `<REPO>` par le nom du dépôt et `<ISSUE NUMBER>` par le numéro du problème. Pour plus d’informations, consultez « [Filtrage des projets](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects) ».

### Activation du champ Suivi par

Vous pouvez activer le champ Suivi par pour voir les problèmes qui suivent un élément de votre projet.

1. Dans la vue table, dans le titre du champ le plus à droite, cliquez sur {% octicon "plus" aria-label="the plus icon" %}.
   
   ![Capture d’écran montrant le bouton Nouveau champ](/assets/images/help/projects-v2/new-field-button.png)
   
1. Sous « Champs masqués », cliquez sur **Suivi par**.
   
   ![Capture d’écran montrant le menu du champ](/assets/images/help/projects-v2/select-tracked-by-field.png)
   

### Activation du champ Suivis

Vous pouvez activer le champ Suivis pour voir les autres problèmes suivis par un élément dans votre projet.

1. Dans la vue table, dans le titre du champ le plus à droite, cliquez sur {% octicon "plus" aria-label="the plus icon" %}.
   
   ![Capture d’écran montrant le bouton Nouveau champ](/assets/images/help/projects-v2/new-field-button.png)
   
1. Sous « Champs masqués », cliquez sur **Suivis**.
   
   ![Capture d’écran montrant le menu du champ](/assets/images/help/projects-v2/select-tracks-field.png)
   
