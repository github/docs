---
title: Archivage automatique d’éléments
shortTitle: Archiving automatically
intro: Vous pouvez configurer les workflows intégrés de votre projet pour archiver automatiquement les éléments qui répondent à des critères spécifiques.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2-auto-archive
type: tutorial
topics:
  - Projects
ms.openlocfilehash: 75346021f51cb8cc373b4a50aef43e0b5c7646dc
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107220'
---
{% note %}

**Remarque :** Les workflows intégrés sont disponibles dans le cadre d’une version bêta limitée.

{% endnote %}

## À propos de l’archivage automatique d’éléments

Vous pouvez configurer les workflows intégrés de votre projet pour archiver automatiquement des éléments. L’archivage des éléments vous permet de rester en dessous de la limite de {% data variables.projects.item_limit %} éléments dans chaque projet.

Vous pouvez utiliser les filtres `is`, `reason` et `last-updated` pour spécifier quand un élément doit être archivé.

Quand vous activez l’archivage automatique pour les problèmes ou les demandes de tirage, les éléments de votre projet qui répondent déjà à vos critères sont également archivés. Il peut y avoir un certain retard dans l’archivage d’un grand nombre d’éléments qui répondent déjà aux critères.

Les projets ont également une limite sur le nombre d’éléments archivés qu’ils peuvent contenir. Votre projet peut contenir jusqu’à {% data variables.projects.archived_item_limit %} éléments archivés. Pour plus d’informations sur la suppression définitive d’éléments, consultez « [Suppression d’éléments](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/archiving-items-from-your-project#deleting-items) ».

## Configuration de l’archivage automatique dans votre projet

{% data reusables.projects.access-workflows %}
1. Dans la liste « Workflows par défaut », cliquez sur **Archiver automatiquement les éléments**.
   
   ![Capture d’écran montrant des workflows d’archivage automatique](/assets/images/help/projects-v2/archive-workflows.png)
   
1. En regard de **Quand**, cochez le ou les types d’éléments que vous voulez archiver automatiquement.
   
   ![Capture d’écran montrant la configuration « quand » pour un workflow](/assets/images/help/projects-v2/workflow-when-archive.png)

1. En regard de {% octicon "filter" aria-label="The filter icon" %}, tapez les critères de filtrage que vous voulez utiliser pour archiver automatiquement des éléments. Vous pouvez utiliser seulement les filtres `is`, `reason` et `last-updated`. Pour plus d’informations sur la syntaxe des filtres, consultez [Filtrage des projets](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects).
   
   ![Capture d’écran montrant la zone de texte d’un filtre](/assets/images/help/projects-v2/auto-archive-filter.png)
   
1. Si le workflow est désactivé, cliquez sur le bouton bascule en regard de **Désactivé** pour activer le workflow.
   
   ![Capture d’écran montrant la commande « Activé/Désactivé » pour un workflow](/assets/images/help/projects-v2/workflow-enable.png)
   

## Pour aller plus loin

* « [Archivage d’éléments de votre projet](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/archiving-items-from-your-project) »
* « [Utilisation d’automatisations intégrées](/issues/planning-and-tracking-with-projects/automating-your-project/using-the-built-in-automations) »
