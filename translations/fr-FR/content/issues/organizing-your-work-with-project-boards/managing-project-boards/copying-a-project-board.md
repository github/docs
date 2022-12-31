---
title: 'Copie d’un {% data variables.product.prodname_project_v1 %}'
intro: 'Vous pouvez copier un {% data variables.projects.projects_v1_board %} pour créer rapidement un projet. La copie de {% data variables.projects.projects_v1_boards %} fréquemment utilisés ou très personnalisés permet de standardiser votre workflow.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/copying-a-project-board
  - /articles/copying-a-project-board
  - /github/managing-your-work-on-github/copying-a-project-board
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pull requests
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 33f2822f338a2210c87ec9baad986231f11fe310
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108377'
---
{% data reusables.projects.project_boards_old %}

La copie d’un {% data variables.projects.projects_v1_board %} vous permet de réutiliser le titre, la description et la configuration d’automatisation d’un {% data variables.projects.projects_v1_board %}. Vous pouvez copier des {% data variables.projects.projects_v1_boards %} pour éliminer le processus manuel de création de nouveaux {% data variables.projects.projects_v1_boards %} pour des workflows similaires.

Vous devez bénéficier d’un accès en lecture à un {% data variables.projects.projects_v1_board %} pour le copier dans un dépôt ou une organisation pour lesquels vous bénéficier d’un accès en écriture.

Lorsque vous copiez un {% data variables.projects.projects_v1_board %} dans une organisation, la visibilité du {% data variables.projects.projects_v1_board %} est privée par défaut, avec une option permettant de la changer. Pour plus d’informations, consultez « [Changement de la visibilité d’un {% data variables.product.prodname_project_v1 %}](/articles/changing-project-board-visibility/) ».

L’automatisation d’un {% data variables.projects.projects_v1_board %} est également activée par défaut. Pour plus d’informations, consultez « [À propos de l’automatisation des {% data variables.product.prodname_projects_v1 %}](/articles/about-automation-for-project-boards/) ».

1. Accédez au {% data variables.projects.projects_v1_board %} que vous voulez copier.
{% data reusables.project-management.click-menu %}
3. Cliquez sur {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, puis sur **Copier**.
![Option Copier dans le menu déroulant de la barre latérale du tableau de projet](/assets/images/help/projects/project-board-copy-setting.png)
4. Sous « Propriétaire », utilisez le menu déroulant, puis cliquez sur le dépôt ou l’organisation dans lesquels vous souhaitez copier le tableau de projet.
![Sélectionner le propriétaire du tableau de projet copié dans le menu déroulant](/assets/images/help/projects/copied-project-board-owner.png)
5. Si vous le souhaitez, sous « Nom du tableau de projet », tapez le nom du {% data variables.projects.projects_v1_board %} copié.
![Champ dans lequel taper un nom pour le tableau de projet copié](/assets/images/help/projects/copied-project-board-name.png)
6. Si vous le souhaitez, sous « Description », tapez une description du tableau de projet copié que d’autres personnes verront.
![Champ dans lequel taper une description pour le tableau de projet copié](/assets/images/help/projects/copied-project-board-description.png)
7. Si vous le souhaitez, sous « Paramètres d’automatisation », indiquez si vous souhaitez copier les workflows automatiques configurés. Cette option est activée par défaut. Pour plus d’informations, consultez « [À propos de l’automatisation pour les tableaux de projet](/articles/about-automation-for-project-boards/) ».
![Sélectionner les paramètres d’automatisation pour le tableau de projet copié](/assets/images/help/projects/copied-project-board-automation-settings.png) {% data reusables.project-management.choose-visibility %}
9. Cliquez sur **Copier le projet**.
![Bouton Confirmer la copie](/assets/images/help/projects/confirm-copy-project-board.png)
