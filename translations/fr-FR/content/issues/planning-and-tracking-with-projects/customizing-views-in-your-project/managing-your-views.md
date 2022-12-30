---
title: Gestion de vos vues
intro: 'Découvrez comment créer, enregistrer et gérer les vues de vos projets.'
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
type: tutorial
topics:
  - Projects
ms.openlocfilehash: 9b3d7f4b12210841a0c55f3b0b7356da9b225416
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108637'
---
## Création d’une vue de projet

Les vues de projet vous permettent de voir rapidement des aspects spécifiques de votre projet. Chaque vue apparaît sous un onglet séparé dans votre projet. 

Par exemple, vous pouvez avoir :
- Une vue qui présente tous les éléments qui n’ont pas encore démarré (filtrer sur « État »).
- Une vue qui présente la charge de travail pour chaque équipe (regrouper par un champ « Équipe » personnalisé).
- Une vue qui présente les éléments avec la date d’expédition cible la plus ancienne (trier par un champ de date).

Pour ajouter une nouvelle vue :

{% data reusables.projects.new-view %}

Vous pouvez également ouvrir la palette de commandes du projet en appuyant sur {% data variables.projects.command-palette-shortcut %} et en commençant à taper « Nouvelle vue ».

La nouvelle vue est automatiquement enregistrée.

## Duplication d’une vue

Vous pouvez dupliquer une vue existante et l’utiliser comme base pour apporter d’autres modifications.

1. Basculez vers la vue que vous souhaitez dupliquer.
{% data reusables.projects.open-view-menu %}
1. Cliquez sur {% octicon "versions" aria-label="the versions icon" %} **Dupliquer la vue**.
   ![Capture d’écran montrant l’élément de menu Dupliquer](/assets/images/help/projects-v2/duplicate-view.png)

## Enregistrement des modifications apportées à une vue

Quand vous apportez des modifications à une vue (notamment pour trier, réorganiser, filtrer ou regrouper des données), un point apparaît à côté du nom de la vue pour indiquer la présence de modifications non enregistrées. 

![Indicateur de modifications non enregistrées](/assets/images/help/projects/unsaved-changes.png)

Si vous ne souhaitez pas enregistrer les modifications, vous pouvez ignorer cet indicateur. Personne d’autre ne verra vos modifications.

{% data reusables.projects.save-view %}

Vous pouvez également ouvrir la palette de commandes du projet en appuyant sur {% data variables.projects.command-palette-shortcut %} et en commençant à taper « Enregistrer la vue ».

## Réorganisation de vues enregistrées

Pour modifier l’ordre des onglets contenant vos vues enregistrées, cliquez sur un onglet et faites-le glisser vers un nouvel emplacement. Le nouvel ordre des onglets est automatiquement enregistré.

## Renommage d’une vue enregistrée

Vous pouvez renommer vos vues enregistrées. Le changement de nom est automatiquement enregistré.

1. Basculez vers la vue que vous souhaitez renommer.
{% data reusables.projects.open-view-menu %}
1. Cliquez sur {% octicon "pencil" aria-label="the pencil icon" %} **Renommer la vue**.
   ![Capture d’écran montrant l’élément de menu Renommer](/assets/images/help/projects-v2/rename-view.png)
1. Tapez le nouveau nom de votre vue.
1. Pour enregistrer vos modifications, appuyez sur <kbd>Retour</kbd>.

## Suppression d’une vue enregistrée

1. Basculez vers la vue que vous souhaitez supprimer.
{% data reusables.projects.open-view-menu %}
1. Cliquez sur {% octicon "trash" aria-label="the trasj icon" %} **Supprimer la vue**.
   ![Capture d’écran montrant l’élément de menu Supprimer](/assets/images/help/projects-v2/delete-view.png)

Vous pouvez également ouvrir la palette de commandes du projet en appuyant sur {% data variables.projects.command-palette-shortcut %} et en commençant à taper « Supprimer la vue ».
