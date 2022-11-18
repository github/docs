---
title: À propos des champs de date
shortTitle: About date fields
intro: Vous pouvez créer des champs de date personnalisés qui peuvent être définis en tapant une date ou à l’aide d’un calendrier.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
type: tutorial
topics:
  - Projects
redirect_from:
  - /issues/planning-and-tracking-with-projects/understanding-field-types/about-date-fields
ms.openlocfilehash: d6057212941db8d20ed49f240052e5ad0fc8eb80
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159688'
---
Vous pouvez filtrer les valeurs de date avec le format `YYYY-MM-DD`, par exemple : `date:2022-07-01`. Vous pouvez également utiliser des opérateurs tels que `>`, `>=`, `<`, `<=` et `..`. Par exemple : `date:>2022-07-01` et `date:2022-07-01..2022-07-31`. Vous pouvez également fournir `@today` pour représenter le jour actuel dans votre filtre. Pour plus d’informations, consultez « [Filtrage des projets](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects) ».

## Ajout d’un champ de date

{% data reusables.projects.new-field %}
1. Sélectionner **Date**
   ![Capture d’écran montrant l’option date](/assets/images/help/projects-v2/new-field-date.png)
1. Cliquez sur **Enregistrer**.
   ![Capture d’écran montrant le bouton Enregistrer](/assets/images/help/projects-v2/new-field-save.png)

Vous pouvez également ouvrir la palette de commandes du projet en appuyant sur {% data variables.projects.command-palette-shortcut %} et en commençant à taper « Créer un champ ».
