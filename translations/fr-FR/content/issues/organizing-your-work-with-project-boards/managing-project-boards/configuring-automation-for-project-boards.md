---
title: 'Configuration de l’automatisation pour {% data variables.product.prodname_projects_v1 %}'
intro: 'Vous pouvez configurer des workflows automatiques pour déplacer des problèmes et des demandes de tirage vers une colonne de {% data variables.projects.projects_v1_board %} lorsqu’un événement spécifié se produit.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/configuring-automation-for-project-boards
  - /articles/configuring-automation-for-project-boards
  - /github/managing-your-work-on-github/configuring-automation-for-project-boards
versions:
  feature: projects-v1
topics:
  - Pull requests
  - Projects
  - Issues
  - Project management
shortTitle: Configure automation
type: how_to
allowTitleToDifferFromFilename: true
ms.openlocfilehash: faf559c3423178b43f3b524bbf3cdc41acd18a92
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108712'
---
{% data reusables.projects.project_boards_old %}

{% data reusables.project-management.automate-project-board-permissions %} Pour plus d’informations, consultez « [À propos de l’automatisation pour les {% data variables.product.prodname_projects_v1 %}](/articles/about-automation-for-project-boards) ».

{% data reusables.project-management.use-automated-template %}

{% data reusables.project-management.resync-automation %}

{% tip %}

**Astuce** : pour modifier une colonne qui a déjà configuré l’automatisation, cliquez sur **Gérer** en bas de la colonne.

{% endtip %}

1. Accédez au {% data variables.projects.projects_v1_board %} que vous voulez automatiser.
2. Dans la colonne à automatiser, cliquez sur {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.
![Icône Modifier](/assets/images/help/projects/edit-column-button.png)
3. Cliquez sur **Gérer l’automatisation**.
![Bouton Gérer l’automatisation](/assets/images/help/projects/manage-automation-button.png)
4. À l’aide du menu déroulant Prédéfini, sélectionnez une automatisation prédéfinie.
![Sélectionner un automatisation prédéfinie dans le menu](/assets/images/help/projects/select-automation.png)
5. Sélectionnez les automatisations de workflow que vous souhaitez configurer pour la colonne.
![Liste des options d’automatisation de la colonne](/assets/images/help/projects/select-automation-options-existing-column.png)
6. Cliquez sur **Mettre à jour l’automatisation**.

## Pour aller plus loin
- « [À propos de l’automatisation pour les {% data variables.product.prodname_projects_v1 %}](/articles/about-automation-for-project-boards) »
