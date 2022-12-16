---
title: 'Démarrage rapide avec les {% data variables.product.prodname_projects_v2 %}'
intro: 'Testez la vitesse, la flexibilité et la personnalisation des {% data variables.product.prodname_projects_v2 %} en créant un projet dans ce guide interactif.'
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/quickstart
type: quick_start
topics:
  - Projects
ms.openlocfilehash: 39798565419acaa831a996a0c86cc62f367f4bb7
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108701'
---
## Introduction

Ce guide montre comment utiliser des {% data variables.product.prodname_projects_v2 %} pour planifier et suivre le travail. Dans ce guide, vous allez créer un projet et ajouter un champ personnalisé pour suivre les priorités de vos tâches. Vous apprendrez également à créer des vues enregistrées qui vous aideront à communiquer les priorités et la progression avec vos collaborateurs.

## Prérequis

Vous pouvez créer un projet d’organisation ou un projet d’utilisateur. Pour créer un projet d’organisation, vous avez besoin d’une organisation {% data variables.product.prodname_dotcom %}. Pour plus d’informations sur la création d’une organisation, consultez « [Création d’une organisation à partir de zéro](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch) ».

Dans ce guide, vous allez ajouter à votre nouveau projet des problèmes existants issus de dépôts vous appartenant (projets d’utilisateur) ou appartenant à votre organisation (projets d’organisation). Pour plus d’informations sur la création de problèmes, consultez « [Création d’un problème](/issues/tracking-your-work-with-issues/creating-an-issue) ».

## Création d’un projet

Tout d’abord, créez un projet d’organisation ou un projet d’utilisateur.

### Création d’un projet d’organisation

{% data reusables.projects.create-project %}

### Création d’un projet d’utilisateur

{% data reusables.projects.create-user-project %}

## Définition de la description de votre projet et du fichier README

{% data reusables.projects.project-description %}

## Ajout de problèmes à votre projet

Ensuite, ajoutez quelques problèmes à votre projet.

{% data reusables.projects.add-item-via-paste %}

Répétez les étapes ci-dessus pour ajouter plusieurs problèmes à votre projet.

Pour plus d’informations et d’autres moyens d’ajouter des problèmes à votre projet ou pour découvrir les autres éléments que vous pouvez ajouter à votre projet, consultez « [Ajout d’éléments à votre projet](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/adding-items-to-your-project) ».

## Ajout de brouillons de problèmes à votre projet

Ensuite, ajoutez un brouillon de problème à votre projet.

{% data reusables.projects.add-draft-issue %}

## Ajout d’un champ d’itération

Ensuite, créez un champ d’itération pour vous permettre de planifier et de suivre votre travail sur des périodes de temps répétées. Les itérations peuvent être configurées pour répondre à la façon dont vous et votre équipe travaillez, avec des durées personnalisables et la possibilité d’insérer des arrêts.

{% data reusables.projects.new-field %}
1. Sélectionner **Itération**
   ![Capture d’écran montrant l’option Itération](/assets/images/help/projects-v2/new-field-iteration.png)
3. Pour modifier la durée de chaque itération, tapez un nouveau nombre, sélectionnez la liste déroulante, puis cliquez sur **Jours** ou **Semaines**.
   ![Capture d’écran montrant la durée de l’itération](/assets/images/help/projects-v2/iteration-field-duration.png)
4. Cliquez sur **Enregistrer**.
   ![Capture d’écran montrant le bouton Enregistrer](/assets/images/help/projects-v2/new-field-save-and-create.png)

## Création d’un champ pour suivre la priorité

Maintenant, créez un champ personnalisé appelé `Priority` contenant les valeurs : `High`, `Medium` ou `Low`.

{% data reusables.projects.new-field %}
1. Sélectionner **Choix unique**
   ![Capture d’écran montrant l’option Choix unique](/assets/images/help/projects-v2/new-field-single-select.png)
1. Sous « Options », tapez la première option, « High ».
   ![Capture d’écran montrant l’option Choix unique](/assets/images/help/projects-v2/priority-example.png)
1. Pour ajouter des champs supplémentaires, pour « Medium » et « Low », cliquez sur **Ajouter une option**.
1. Cliquez sur **Enregistrer**.
   ![Capture d’écran montrant le bouton Enregistrer](/assets/images/help/projects-v2/new-field-save.png)

Spécifiez une priorité pour tous les problèmes de votre projet.

![Exemples de priorités](/assets/images/help/projects/priority_example.png)

## Regroupement de problèmes par priorité

Ensuite, regroupez tous les éléments de votre projet par priorité pour identifier plus facilement les éléments prioritaires.

{% data reusables.projects.open-view-menu %}
1. Cliquez sur {% octicon "rows" aria-label="the rows icon" %} **Regrouper**.
   ![Capture d’écran montrant l’élément de menu Groupe](/assets/images/help/projects-v2/group-menu-item.png)
1. Cliquez sur **Priorité**.
   ![Capture d’écran montrant le menu Groupe](/assets/images/help/projects-v2/group-menu.png)

À présent, déplacez les problèmes entre les groupes pour changer leur priorité.

1. Choisissez un problème.
2. Faites glisser-déposer le problème dans un groupe avec une priorité différente. Lorsque vous procédez ainsi, la priorité du problème est remplacée par celle de son nouveau groupe.

![Déplacer un problème entre des groupes](/assets/images/help/projects/move_between_group.gif)

## Enregistrement de la vue des priorités

Si vous avez regroupé vos problèmes par priorité à l’étape précédente, un indicateur apparaît dans votre projet pour montrer que la vue a été modifiée. Enregistrez ces modifications pour que vos collaborateurs voient également les tâches regroupées par priorité.

{% data reusables.projects.save-view %}

Vous pouvez partager l’URL avec votre équipe pour que tout le monde ait connaissance des priorités du projet.

Quand une vue est enregistrée, toute personne qui ouvre le projet voit la vue enregistrée. Ici, vous avez effectuez un regroupement par priorité, mais vous pouvez également ajouter d’autres modificateurs tels qu’un tri, un filtre ou une disposition. Ensuite, vous allez créer une vue avec la disposition modifiée.

## Ajout d’une disposition de tableau

Pour voir la progression des problèmes de votre projet, vous pouvez passer à la disposition de tableau.

La disposition de tableau étant basée sur le champ d’état, spécifiez un état pour chaque problème de votre projet.

![Exemple d’état](/assets/images/help/projects/status_example.png)

Ensuite, créez une vue.

{% data reusables.projects.new-view %}

Ensuite, passez à la disposition de tableau.

{% data reusables.projects.open-view-menu %}
1. Sous « Disposition », cliquez sur **Tableau**.
   ![Capture d’écran montrant l’option Disposition](/assets/images/help/projects-v2/table-or-board.png)

![Exemples de priorités](/assets/images/help/projects/example_board.png)

Quand vous changez la disposition, un indicateur apparaît dans votre projet pour montrer que la vue a été modifiée. Enregistrez cette vue pour que vous et vos collaborateurs puissiez y accéder facilement à l’avenir.

{% data reusables.projects.save-view %}

Pour indiquer l’objectif de la vue, donnez-lui un nom descriptif.

{% data reusables.projects.open-view-menu %}
1. Cliquez sur {% octicon "pencil" aria-label="the pencil icon" %} **Renommer la vue**.
   ![Capture d’écran montrant l’élément de menu Renommer](/assets/images/help/projects-v2/rename-view.png)
1. Tapez le nouveau nom de votre vue.
1. Pour enregistrer les changements, appuyez sur <kbd>Retour</kbd>.

![Exemples de priorités](/assets/images/help/projects/project-view-switch.gif)

## Configurer l’automatisation intégrée

Enfin, ajoutez un workflow intégré pour définir l’état sur **À faire** quand un élément est ajouté à votre projet.

1. En haut à droite, cliquez sur {% octicon "kebab-horizontal" aria-label="The menu icon" %} pour ouvrir le menu.
  ![Capture d’écran montrant l’icône du menu.](/assets/images/help/projects-v2/open-menu.png)
1. Dans le menu, cliquez sur {% octicon "workflow" aria-label="The workflow icon" %} **Workflows**.
  ![Capture d’écran montrant l’élément de menu « Workflows »](/assets/images/help/projects-v2/workflows-menu-item.png)
1. Sous **Workflows par défaut**, cliquez sur **Élément ajouté au projet**.
  ![Capture d’écran montrant les workflows par défaut](/assets/images/help/projects-v2/default-workflows.png)
1. À côté de **Quand**, vérifiez que `issues` et `pull requests` sont sélectionnés.
  ![Capture d’écran montrant la configuration « quand » pour un workflow](/assets/images/help/projects-v2/workflow-when.png)
1. À côté de **Définir**, sélectionnez **État : À faire**.
  ![Capture d’écran montrant la configuration « définir » pour un workflow](/assets/images/help/projects-v2/workflow-set.png)
1. Cliquez sur le bouton bascule **Désactivé** pour activer le workflow.
  ![Capture d’écran montrant la commande « activer » pour un workflow](/assets/images/help/projects-v2/workflow-enable.png)

## Pour aller plus loin

- « [Ajout d’éléments à votre projet](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/adding-items-to-your-project) »
- « [Personnalisation d’une vue](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view) »
