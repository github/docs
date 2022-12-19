---
title: 'Alterar a visibilidade do {% data variables.product.prodname_project_v1 %}'
intro: 'Como proprietário da organização ou administrador de {% data variables.projects.projects_v1_board %}, você pode tornar um {% data variables.projects.projects_v1_board %} {% ifversion ghae %}interno{% else %}público{% endif %} ou privado.'
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
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107868'
---
{% data reusables.projects.project_boards_old %}

{% data reusables.project-management.project-board-visibility %}

{% note %}

**{% ifversion classic-project-visibility-permissions %}Notes{% else %}Note{% endif %}:** {% ifversion classic-project-visibility-permissions %}

* {% data reusables.projects.owners-can-limit-visibility-permissions %}
* {% endif %}Quando você torna o {% data variables.projects.projects_v1_board %} {% ifversion ghae %}interno{% else %}público{% endif %}, por padrão, os membros da organização recebem acesso de leitura. Você pode conceder a membros específicos da organização permissões de gravação ou de administrador dando às equipes acesso ao {% data variables.projects.projects_v1_board %} em que eles estão ativos ou adicionando-os como um colaborador. Para obter mais informações, confira "[Permissões {% data variables.product.prodname_project_v1_caps %} para uma organização](/articles/project-board-permissions-for-an-organization)".

{% endnote %}

1. Navegue até o quadro de projetos que deseja tornar {% ifversion ghae %}interno{% else %}público{% endif %} ou privado.
{% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.choose-visibility %}
1. Clique em **Save** (Salvar).
