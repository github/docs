---
title: 'Liaison d’un dépôt à un {% data variables.product.prodname_project_v1 %}'
intro: 'Vous pouvez lier un dépôt au {% data variables.projects.projects_v1_board %} de votre organisation ou de votre compte personnel.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/linking-a-repository-to-a-project-board
  - /articles/linking-a-repository-to-a-project-board
  - /github/managing-your-work-on-github/linking-a-repository-to-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: Link repository to board
allowTitleToDifferFromFilename: true
ms.openlocfilehash: d0893b64551be80577547b9791e7a7ed6a432de0
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108709'
---
{% data reusables.projects.project_boards_old %}

Toute personne avec des autorisations en écriture sur un {% data variables.projects.projects_v1_board %} peut lier des dépôts appartenant à cette organisation ou un compte personnel au {% data variables.projects.projects_v1_board %}. Pour plus d’informations, consultez « [Autorisations des {% data variables.product.prodname_project_v1_caps %} d’une organisation](/articles/project-board-permissions-for-an-organization/) » ou « [Niveaux d’autorisations pour les {% data variables.product.prodname_projects_v1 %} appartenant à l’utilisateur](/articles/permission-levels-for-user-owned-project-boards/) ».

{% data reusables.project-management.link-repos-to-project-board %} Vous pouvez ajouter des problèmes et des demandes de tirage (pull requests) provenant de n’importe quel dépôt non lié en tapant l’URL du problème ou de la demande de tirage dans une carte. Pour plus d’informations, consultez « [Ajout de problèmes et de demandes de tirage à un {% data variables.product.prodname_project_v1 %}](/articles/adding-issues-and-pull-requests-to-a-project-board) ».

1. Accédez au {% data variables.projects.projects_v1_board %} où vous souhaitez lier un dépôt.
{% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %}
4. Dans la barre latérale gauche, cliquez sur **Dépôts liés**.
![Option de menu Dépôts liés dans la barre latérale gauche](/assets/images/help/projects/project-board-linked-repositories-setting.png)
5. Cliquez sur **Lier un dépôt**.
![Bouton Lier un dépôt sous l’onglet Dépôts liés](/assets/images/help/projects/link-repository-button.png)
6. Recherchez le dépôt que vous souhaitez lier.
![Champ de recherche dans la fenêtre Lier un dépôt](/assets/images/help/projects/search-to-link-repository.png)
7. Cliquez sur **Lier**. Pour supprimer le lien, cliquez sur **Supprimer le lien**.
![Bouton Lier](/assets/images/help/projects/link-button.png)

{% note %}

**Remarque :** Pour lier un dépôt à votre organisation ou à un {% data variables.projects.projects_v1_board %} appartenant à l’utilisateur, les problèmes doivent être activés sur le dépôt. Autrement dit, le dépôt dispose d’un onglet « Problèmes » (dans les dépôt dupliqués, les problèmes sont désactivés par défaut).  Pour plus d’informations sur l’activation ou la désactivation des problèmes pour un dépôt, consultez « [Désactivation des problèmes pour un dépôt](/github/managing-your-work-on-github/disabling-issues) ».

{% endnote %}

## Pour aller plus loin

- « [À propos de {% data variables.product.prodname_projects_v1 %}](/articles/about-project-boards) »
