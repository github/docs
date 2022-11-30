---
title: À propos des champs de texte et de nombre
shortTitle: About text and number fields
intro: Vous pouvez ajouter des champs de texte et de nombre personnalisés à votre projet.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
type: tutorial
topics:
  - Projects
redirect_from:
  - /issues/planning-and-tracking-with-projects/understanding-field-types/about-text-and-number-fields
ms.openlocfilehash: 531931f74afd1d4fdc206002742d8d27bca67dc4
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159684'
---
Vous pouvez utiliser des champs de texte pour inclure des notes ou tout autre texte de forme libre dans votre projet.

Les champs de texte peuvent être utilisés dans des filtres, par exemple : `field:"exact text"`. Les champs de texte et les titres d’élément sont également utilisés si vous filtrez du texte sans spécifier de champ. 

Les champs de nombre peuvent également être utilisés dans les filtres. Vous pouvez utiliser les requêtes de plage `>`, `>=``<`, `<=` et `..` pour filtrer par un champ de nombre. Par exemple, `field:5..15` ou `field:>=20`. Pour plus d’informations, consultez « [Filtrage des projets](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects) ».

## Ajout d’un champ de texte

{% data reusables.projects.new-field %}
1. Sélectionner **Texte**
   ![Capture d’écran montrant l’option Texte](/assets/images/help/projects-v2/new-field-text.png)
1. Cliquez sur **Enregistrer**.
   ![Capture d’écran montrant le bouton Enregistrer](/assets/images/help/projects-v2/new-field-save.png)

Vous pouvez également ouvrir la palette de commandes du projet en appuyant sur {% data variables.projects.command-palette-shortcut %} et en commençant à taper « Créer un champ ».

## Ajout d’un champ de nombre

{% data reusables.projects.new-field %}
1. Sélectionner **Nombre**
   ![Capture d’écran montrant l’option Nombre](/assets/images/help/projects-v2/new-field-number.png)
1. Cliquez sur **Enregistrer**.
   ![Capture d’écran montrant le bouton Enregistrer](/assets/images/help/projects-v2/new-field-save.png)

Vous pouvez également ouvrir la palette de commandes du projet en appuyant sur {% data variables.projects.command-palette-shortcut %} et en commençant à taper « Créer un champ ».
