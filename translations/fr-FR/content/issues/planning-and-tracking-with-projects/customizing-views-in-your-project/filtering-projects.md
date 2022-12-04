---
title: 'Filtrage de {% data variables.projects.projects_v2 %}'
intro: Utilisez des filtres pour choisir les éléments à montrer dans les vues de votre projet.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/filtering-projects
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 680d6cff10dfc063ebaef0ebc9f8f7d0c15ba2e7
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158940'
---
Vous pouvez personnaliser les vues en filtrant les métadonnées des éléments, comme les personnes responsables et les étiquettes appliquées aux problèmes, ainsi que les champs définis dans votre projet. Vous pouvez combiner des filtres et les enregistrer sous forme de vues. Pour plus d’informations, consultez « [Personnalisation des vues de votre projet](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view) ».

Pour filtrer un projet, cliquez sur {% octicon "filter" aria-label="The Filter icon" %} et commencez à taper les champs et les valeurs à filtrer. Pendant la saisie, des valeurs possibles apparaissent. Vous pouvez aussi ouvrir la palette de commandes du projet en appuyant sur {% data variables.projects.command-palette-shortcut %}, puis tapez « Filtrer par » pour choisir parmi les filtres disponibles.

L’utilisation de plusieurs filtres agit comme un filtre AND logique. Par exemple, `label:bug status:"In progress"` retourne les éléments avec l’étiquette `bug` et l’état « En cours ». Actuellement, {% data variables.product.prodname_projects_v2 %} ne prend pas en charge les filtres OR logiques sur plusieurs champs.

Les mêmes filtres sont disponibles pour les graphiques que vous créez à l’aide d’insights pour {% data variables.product.prodname_projects_v2 %}, ce qui vous permet de filtrer les données utilisées pour créer vos graphiques. Pour plus d’informations, consultez « [Utilisation des insights avec des projets](/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/about-insights-for-projects) ».

Quand vous filtrez une vue, puis ajoutez un élément, les métadonnées filtrées sont appliquées à l’élément ajouté. Par exemple, si vous filtrez par `status:"In progress"` et que vous ajoutez un élément, l’état du nouvel élément est défini sur « En cours ».

## Filtrage d’éléments

Cliquez sur {% octicon "filter" aria-label="the filter icon" %} en haut de la table pour afficher la barre « Filtrer par mot clé ou par champ ». Commencez à taper le nom et la valeur du champ à utiliser pour le filtrage. Pendant la saisie, des valeurs possibles apparaissent.

{% data reusables.projects.projects-filters %}

Vous pouvez également ouvrir la palette de commandes du projet en appuyant sur {% data variables.projects.command-palette-shortcut %} et en commençant à taper « Filtrer par ».

Dans la disposition de tableau, vous pouvez cliquer sur des données d’élément pour filtrer les éléments avec cette valeur. Par exemple, cliquez sur un destinataire pour afficher uniquement les éléments de ce destinataire. Pour supprimer le filtre, cliquez à nouveau sur les données d’élément.
