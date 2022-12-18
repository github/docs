---
title: À propos des champs à choix unique
shortTitle: About single select fields
intro: Vous pouvez créer des champs à choix unique avec des options définies qui peuvent être sélectionnées dans un menu déroulant.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
type: tutorial
topics:
  - Projects
redirect_from:
  - /issues/planning-and-tracking-with-projects/understanding-field-types/about-single-select-fields
ms.openlocfilehash: b401f11502185527444cd72fa3264fda51465116
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159780'
---
Vous pouvez filtrer par vos champs à choix unique en spécifiant l’option, par exemple : `fieldname:option`. Vous pouvez filtrer plusieurs valeurs en fournissant une liste d’options séparées par des virgules, par exemple : `fieldname:option,option`. Pour plus d’informations, consultez « [Filtrage des projets](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects) ».

Les champs à choix unique peuvent contenir jusqu’à 50 options. 

## Ajout d’un champ à choix unique

{% data reusables.projects.new-field %}
1. Sélectionner **Choix unique**
   ![Capture d’écran montrant l’option Choix unique](/assets/images/help/projects-v2/new-field-single-select.png)
1. Sous « Options », tapez la première option.
   ![Capture d’écran montrant l’option Choix unique](/assets/images/help/projects-v2/single-select-create-with-options.png)
   - Pour ajouter des options supplémentaires, cliquez sur **Ajouter une option**.
1. Cliquez sur **Enregistrer**.
   ![Capture d’écran montrant le bouton Enregistrer](/assets/images/help/projects-v2/new-field-save.png)

Vous pouvez également ouvrir la palette de commandes du projet en appuyant sur {% data variables.projects.command-palette-shortcut %} et en commençant à taper « Créer un champ ».

## Modification d’un champ à choix unique

{% data reusables.projects.project-settings %}
1. Cliquez sur le nom du champ à choix unique que vous souhaitez ajuster.
   ![Capture d’écran montrant un champ à choix unique](/assets/images/help/projects-v2/select-single-select.png)
1. Modifiez les options existantes ou cliquez sur **Ajouter une option**.
   ![Capture d’écran montrant les options de choix unique](/assets/images/help/projects-v2/single-select-edit-options.png)
1. Si vous le souhaitez, pour supprimer une option, cliquez sur {% octicon "x" aria-label="The x icon" %}.
   ![Capture d’écran montrant le bouton de suppression](/assets/images/help/projects-v2/single-select-delete.png)
1. Cliquez sur **Enregistrer les options**.
   ![Capture d’écran montrant le bouton Enregistrer](/assets/images/help/projects-v2/save-options.png)
