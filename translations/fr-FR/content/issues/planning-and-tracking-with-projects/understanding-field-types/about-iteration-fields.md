---
title: À propos des champs d’itération
shortTitle: About iteration fields
intro: Vous pouvez créer des itérations pour planifier le travail à venir et regrouper les éléments.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
- /issues/trying-out-the-new-projects-experience/managing-iterations
type: tutorial
topics:
- Projects
ms.openlocfilehash: 93039327ab7075e0f79c9d5ae5d6652aa635a500
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148108765"
---
Vous pouvez créer un champ d’itération pour associer des éléments à des plages de temps récurrentes spécifiques. Des itérations peuvent être définies sur n’importe quelle durée, peuvent inclure des pauses, et peuvent être éditées individuellement pour modifier leur nom et leur plage de dates. Des projets vous permettent de regrouper par itération pour visualiser l’équilibre du travail à venir, d’utiliser des filtres pour vous concentrer sur une seule itération et de trier par itération.

Vous pouvez filtrer les itérations en spécifiant le nom de l’itération ou `@current` pour l’itération actuelle, `@previous` pour l’itération précédente ou `@next` pour la prochaine itération. Vous pouvez également utiliser des opérateurs tels que `>`, `>=`, `<`, `<=` et `..`.  Par exemple : `iteration:>"Iteration 4"` et `iteration:<@current`. Pour plus d’informations, consultez « [Filtrage des projets](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects) ».

Quand vous créez un champ d’itération pour la première fois, trois itérations sont créées automatiquement.  Vous pouvez ajouter des itérations supplémentaires et apporter d’autres modifications à la page des paramètres de votre projet.

![Capture d’écran montrant les paramètres d’un champ d’itération](/assets/images/help/issues/iterations-example.png)

## Ajout d’un champ d’itération

{% data reusables.projects.new-field %}
1. Sélectionner **Itération**
   ![Capture d’écran montrant l’option Itération](/assets/images/help/projects-v2/new-field-iteration.png)
2. Si vous ne voulez pas que l’itération démarre aujourd’hui, sélectionnez la liste déroulante du calendrier à côté de « Démarre le » et choisissez une nouvelle date de début.
   ![Capture d’écran montrant la date de début de l’itération](/assets/images/help/projects-v2/iteration-field-starts.png)
3. Pour modifier la durée de chaque itération, tapez un nouveau nombre, sélectionnez la liste déroulante, puis cliquez sur **Jours** ou **Semaines**.
   ![Capture d’écran montrant la durée de l’itération](/assets/images/help/projects-v2/iteration-field-duration.png)
4. Cliquez sur **Enregistrer**.
   ![Capture d’écran montrant le bouton Enregistrer](/assets/images/help/projects-v2/new-field-save-and-create.png)

Vous pouvez également ouvrir la palette de commandes du projet en appuyant sur {% data variables.projects.command-palette-shortcut %} et en commençant à taper « Créer un champ ».

## Ajout de nouvelles itérations

{% data reusables.projects.project-settings %}
1. Cliquez sur le nom du champ d’itération que vous souhaitez ajuster.
   ![Capture d’écran montrant un champ d’itération](/assets/images/help/projects-v2/select-iteration-field.png)
1. Pour ajouter une nouvelle itération de la même durée, cliquez sur **Ajouter une itération**.
   ![Capture d’écran du bouton « Ajouter une itération »](/assets/images/help/projects-v2/add-iteration.png)
1. Si vous le souhaitez, pour personnaliser la durée de la nouvelle itération et le moment où elle démarrera, cliquez sur {% octicon "triangle-down" aria-label="The triangle icon" %} **Plus d’options**, sélectionnez une date de début et une durée, puis cliquez sur **Ajouter**.
   ![Capture d’écran du formulaire des options d’ajout d’itérations](/assets/images/help/projects-v2/add-iteration-options.png)
1. Cliquez sur **Save changes**.
   ![Capture d’écran du bouton Enregistrer](/assets/images/help/projects-v2/iteration-save.png)

## Modification d’une itération

Vous pouvez modifier des itérations dans les paramètres de votre projet. Vous pouvez également accéder aux paramètres d’un champ d’itération en cliquant sur {% octicon "triangle-down" aria-label="The triangle icon" %} dans l’en-tête de table du champ, puis sur **Modifier les valeurs**.

{% data reusables.projects.project-settings %}
1. Cliquez sur le nom du champ d’itération que vous souhaitez ajuster.
   ![Capture d’écran montrant un champ d’itération](/assets/images/help/projects-v2/select-iteration-field.png)
1. Pour modifier le nom d’une itération, cliquez sur le nom, puis commencez à taper.
   ![Capture d’écran d’un champ de titre pour renommer une itération](/assets/images/help/projects-v2/iteration-rename.png)
1. Pour modifier la date ou la durée d’une itération, cliquez sur la date pour ouvrir le calendrier. Cliquez sur le jour de début, sur le jour de fin, puis sur **Appliquer**.
   ![Capture d’écran montrant les dates d’itération](/assets/images/help/projects-v2/iteration-date.png)
1. Si vous le souhaitez, pour supprimer une itération, cliquez sur {% octicon "trash" aria-label="The trash icon" %}.
   ![Capture d’écran du bouton Supprimer](/assets/images/help/projects-v2/iteration-delete.png)
2. Cliquez sur **Save changes**.
   ![Capture d’écran du bouton Enregistrer](/assets/images/help/projects-v2/iteration-save.png)

## Insertion d’une pause

Vous pouvez insérer des pauses dans vos itérations afin d’indiquer quand vous prenez du temps pour accomplir du travail non planifié. La durée d’une nouvelle pause est par défaut la durée de la dernière itération créée.

{% data reusables.projects.project-settings %}
1. Cliquez sur le nom du champ d’itération que vous souhaitez ajuster.
   ![Capture d’écran montrant un champ d’itération](/assets/images/help/projects-v2/select-iteration-field.png)
2. Sur la ligne de séparation au-dessus d’une itération, à droite, cliquez sur **Insérer une pause**.
   ![Capture d’écran montrant l’emplacement du bouton « Insérer une pause »](/assets/images/help/issues/iteration-insert-break.png)
3. Si vous le souhaitez, pour modifier la durée de la pause, cliquez sur la date pour ouvrir le calendrier. Cliquez sur le jour de début, sur le jour de fin, puis sur **Appliquer**.
4. Cliquez sur **Save changes**.
   ![Capture d’écran du bouton Enregistrer](/assets/images/help/projects-v2/iteration-save.png)
