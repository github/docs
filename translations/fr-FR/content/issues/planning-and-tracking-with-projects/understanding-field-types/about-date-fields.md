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
ms.openlocfilehash: 7c3bc45c036e209e0be682c3b13b9dafcba17885
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148108692"
---
Vous pouvez filtrer les valeurs de date avec le format `YYYY-MM-DD`, par exemple : `date:2022-07-01`. Vous pouvez également utiliser des opérateurs tels que `>`, `>=`, `<`, `<=` et `..`. Par exemple : `date:>2022-07-01` et `date:2022-07-01..2022-07-31`. Vous pouvez également fournir `@today` pour représenter le jour actuel dans votre filtre. Pour plus d’informations, consultez « [Filtrage des projets](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects) ».

## Ajout d’un champ de date

{% data reusables.projects.new-field %}
1. Sélectionner **Date**
   ![Capture d’écran montrant l’option date](/assets/images/help/projects-v2/new-field-date.png)
1. Cliquez sur **Enregistrer**.
   ![Capture d’écran montrant le bouton Enregistrer](/assets/images/help/projects-v2/new-field-save.png)

Vous pouvez également ouvrir la palette de commandes du projet en appuyant sur {% data variables.projects.command-palette-shortcut %} et en commençant à taper « Créer un champ ».
