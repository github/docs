---
title: Gestion des itérations dans des projets (bêta).
intro: Vous pouvez créer des itérations pour planifier le travail à venir et regrouper les éléments.
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 2
versions:
  fpt: '*'
  ghec: '*'
topics:
- Projects
- Organizations
ms.openlocfilehash: e64eb3e29efe513578984bc0c198ac8743803287
ms.sourcegitcommit: 95e6f3d3aba8c637a3f72b571a6beacaa38d367f
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 07/11/2022
ms.locfileid: "147067569"
---
{% data reusables.projects.projects-beta %}

## <a name="about-iterations"></a>À propos des itérations

Vous pouvez créer un champ d’itération pour associer des éléments à des plages de temps récurrentes spécifiques. Des itérations peuvent être définies sur n’importe quelle durée, peuvent inclure des pauses, et peuvent être éditées individuellement pour modifier leur nom et leur plage de dates. Des projets vous permettent de regrouper par itération pour visualiser l’équilibre du travail à venir, d’utiliser des filtres pour vous concentrer sur une seule itération et de trier par itération.

Quand vous créez un champ d’itération pour la première fois, trois itérations sont créées automatiquement.  Vous pouvez ajouter des itérations supplémentaires et apporter d’autres modifications à la page des paramètres de votre projet.

![Capture d’écran montrant les paramètres d’un champ d’itération](/assets/images/help/issues/iterations-example.png)

## <a name="creating-an-iteration-field"></a>Création d’un champ d’itération

Vous pouvez créer un champ d’itération en utilisant la palette de commandes ou l’interface du projet.

1. {% data reusables.projects.open-command-palette %} Commencez à taper n’importe quelle partie de « Créer un champ ». Lorsque « Créer un champ » s’affiche dans la palette de commandes, sélectionnez-le.

   Vous pouvez également cliquer sur {% octicon "plus" aria-label="the plus icon" %} dans l’en-tête de champ le plus à droite. Un menu déroulant avec les champs du projet s’affiche. Cliquez sur **Nouveau champ**.
1. Dans la zone de texte, entrez un nom pour le nouveau champ d’itération.
1. Sélectionnez le menu déroulant en dessous, puis cliquez sur **Itération**.
1. Si vous le souhaitez, pour modifier la date de début à partir du jour actuel, sélectionnez la liste déroulante du calendrier en regard de « Démarre le », puis cliquez sur une nouvelle date de début.
2. Pour modifier la durée de chaque itération, tapez un nouveau nombre, sélectionnez la liste déroulante, puis cliquez sur **Jours** ou **Semaines**.
3. Cliquez sur **Enregistrer et créer**.
  
## <a name="adding-new-iterations"></a>Ajout de nouvelles itérations

{% data reusables.projects.project-settings %}
1. Cliquez sur le nom du champ d’itération que vous souhaitez ajuster.
1. Pour ajouter une nouvelle itération de la même durée, cliquez sur **Ajouter une itération**.
1. Si vous le souhaitez, pour personnaliser la durée de la nouvelle itération et le moment où elle démarrera, cliquez sur {% octicon "triangle-down" aria-label="The triangle icon" %} en regard de « Ajouter une itération », sélectionnez une date de début et une durée, puis cliquez sur **Ajouter**.
1. Cliquez sur **Save changes**.

## <a name="editing-an-iteration"></a>Modification d’une itération

Vous pouvez modifier des itérations dans les paramètres de votre projet. Vous pouvez également accéder aux paramètres d’un champ d’itération en cliquant sur {% octicon "triangle-down" aria-label="The triangle icon" %} dans l’en-tête de table du champ, puis sur **Modifier les valeurs**.

{% data reusables.projects.project-settings %}
1. Cliquez sur le nom du champ d’itération que vous souhaitez ajuster.
1. Pour modifier le nom d’une itération, cliquez sur le nom, puis commencez à taper.
1. Pour modifier la date ou la durée d’une itération, cliquez sur la date pour ouvrir le calendrier. Cliquez sur le jour de début, sur le jour de fin, puis sur **Appliquer**.
1. Si vous le souhaitez, pour supprimer une itération, cliquez sur {% octicon "trash" aria-label="The trash icon" %}.
1. Cliquez sur **Save changes**.

## <a name="inserting-a-break"></a>Insertion d’une pause

Vous pouvez insérer des pauses dans vos itérations afin d’indiquer quand vous prenez du temps pour accomplir du travail non planifié. La durée d’une nouvelle pause est par défaut la durée de la dernière itération créée.

{% data reusables.projects.project-settings %}
1. Cliquez sur le nom du champ d’itération que vous souhaitez ajuster.
2. Sur la ligne de séparation au-dessus d’une itération, à droite, cliquez sur **Insérer une pause**.
   ![Capture d’écran montrant l’emplacement du bouton « Insérer une pause »](/assets/images/help/issues/iteration-insert-break.png)
3. Si vous le souhaitez, pour modifier la durée de la pause, cliquez sur la date pour ouvrir le calendrier. Cliquez sur le jour de début, sur le jour de fin, puis sur **Appliquer**.
4. Cliquez sur **Save changes**.
