---
title: 'Permissões de {% data variables.product.prodname_project_v1_caps %} para uma organização'
intro: 'Proprietários de organizações e pessoas com permissões de administrador {% data variables.projects.projects_v1_board %} podem personalizar quem tem permissões de leitura, gravação e administração para o {% data variables.projects.projects_v1_boards %} da organização.'
redirect_from:
  - /articles/project-board-permissions-for-an-organization
  - /github/setting-up-and-managing-organizations-and-teams/project-board-permissions-for-an-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: '{% data variables.product.prodname_project_v1_caps %} permissions'
allowTitleToDifferFromFilename: true
ms.openlocfilehash: fbc3ec7db52d6b4a417a4e9e93aea9ae717e2fca
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147614204'
---
{% data reusables.projects.project_boards_old %}

## Visão geral das permissões

Há três níveis de permissões em um {% data variables.projects.projects_v1_board %} para pessoas e equipes:

{% data reusables.project-management.project-board-permissions %}

Os proprietários da organização e as pessoas com permissões de administrador podem conceder acesso a alguém a um {% data variables.projects.projects_v1_board %} da organização individualmente, como colaborador externo ou membro da organização ou ainda por meio da associação dele a uma equipe ou organização. Um colaborador externo é uma pessoa que não é integrante da organização mas recebeu permissões para colaborar na organização.

Proprietários de organizações e pessoas com permissões de administrador de um {% data variables.projects.projects_v1_board %} também podem:
- Definir permissões de quadro de projeto padrão para todos os integrantes da organização.
- Gerenciar o acesso de integrantes, equipes e colaboradores externos da organização ao quadro de projeto. Para obter mais informações, confira "[Gerenciar o acesso de uma equipe ao {% data variables.product.prodname_project_v1 %} de uma organização](/articles/managing-team-access-to-an-organization-project-board)", "[Gerenciar o acesso de um indivíduo ao {% data variables.product.prodname_project_v1 %} de uma organização](/articles/managing-an-individual-s-access-to-an-organization-project-board)" ou "[Gerenciar o acesso de membros da organização a um {% data variables.product.prodname_project_v1 %}](/articles/managing-access-to-a-project-board-for-organization-members)".
- Gerenciar a visibilidade do quadro de projeto. Para obter mais informações, confira "[Gerenciar o acesso de membros da organização a um {% data variables.product.prodname_project_v1 %}](/articles/managing-access-to-a-project-board-for-organization-members)".

## Permissões em cascata para {% data variables.projects.projects_v1_boards %}

{% data reusables.project-management.cascading-permissions %}

Por exemplo, se um proprietário da organização dar permissões de leitura a todos os membros da organização para um {% data variables.projects.projects_v1_board %}, e um administrador do {% data variables.projects.projects_v1_board %} fornecer permissões de gravação a um membro da organização para esse quadro como um colaborador individual, essa pessoa terá permissões de gravação para o {% data variables.projects.projects_v1_board %}.

## Visibilidade de {% data variables.projects.projects_v1_board_caps %}

{% ifversion classic-project-visibility-permissions %}{% data reusables.projects.owners-can-limit-visibility-permissions %}{% endif %}

{% data reusables.project-management.project-board-visibility %} Você pode alterar a visibilidade do {% data variables.projects.projects_v1_board %} de privado para {% ifversion ghae %}interno{% else %}público{% endif %} e de volta novamente. Para obter mais informações, confira "[Alterar a visibilidade do {% data variables.product.prodname_project_v1 %}](/articles/changing-project-board-visibility)".

## Leitura adicional

- "[Alterar a visibilidade do {% data variables.product.prodname_project_v1 %}](/articles/changing-project-board-visibility)"
- "[Gerenciar o acesso de um indivíduo ao {% data variables.product.prodname_project_v1 %} de uma organização](/articles/managing-an-individual-s-access-to-an-organization-project-board)"
- "[Gerenciar o acesso de uma equipe ao {% data variables.product.prodname_project_v1 %} de uma organização](/articles/managing-team-access-to-an-organization-project-board)"
- "[Gerenciar o acesso de membros da organização a um {% data variables.product.prodname_project_v1 %}](/articles/managing-access-to-a-project-board-for-organization-members)"
