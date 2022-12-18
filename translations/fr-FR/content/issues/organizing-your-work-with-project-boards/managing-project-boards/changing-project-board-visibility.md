---
title: 'Changement de la visibilité de {% data variables.product.prodname_project_v1 %}'
intro: 'En tant que propriétaire d’organisation ou administrateur de {% data variables.projects.projects_v1_board %}, vous pouvez créer un {% data variables.projects.projects_v1_board %} {% ifversion ghae %}interne{% else %}public{% endif %} ou privé.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/changing-project-board-visibility
  - /articles/changing-project-board-visibility
  - /github/managing-your-work-on-github/changing-project-board-visibility
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: Change visibility
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 445675ee14c1d1fb47ded4321ae6ac8816fa6d6f
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108484'
---
{% data reusables.projects.project_boards_old %}

{% data reusables.project-management.project-board-visibility %}

{% note %}

**{% ifversion classic-project-visibility-permissions %}Notes{% else %}Remarque{% endif %} :** {% ifversion classic-project-visibility-permissions %}

* {% data reusables.projects.owners-can-limit-visibility-permissions %}
* {% endif %}Lorsque vous créez votre {% data variables.projects.projects_v1_board %} {% ifversion ghae %}interne{% else %}public{% endif %}, les membres de l’organisation reçoivent un accès en lecture par défaut. Vous pouvez accorder à des membres spécifiques de l’organisation des autorisations d’écriture ou d’administration en donnant l’accès aux équipes dont ils font partie ou en les ajoutant au {% data variables.projects.projects_v1_board %} en tant que collaborateurs. Pour plus d’informations, consultez « [Autorisations des {% data variables.product.prodname_project_v1_caps %} d’une organisation](/articles/project-board-permissions-for-an-organization) ».

{% endnote %}

1. Accédez au tableau de projet que vous souhaitez rendre {% ifversion ghae %}interne{% else %}public{% endif %} ou privé.
{% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.choose-visibility %}
1. Cliquez sur **Enregistrer**.
