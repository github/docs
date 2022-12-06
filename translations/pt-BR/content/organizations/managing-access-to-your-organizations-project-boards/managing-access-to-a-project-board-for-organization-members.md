---
title: 'Gerenciar o acesso a um {% data variables.product.prodname_project_v1 %} para membros da organização'
intro: 'Como proprietário de uma organização ou administrador do {% data variables.projects.projects_v1_board %}, você pode definir um nível de permissão padrão para um {% data variables.projects.projects_v1_board %} para todos os membros da organização.'
redirect_from:
  - /articles/managing-access-to-a-project-board-for-organization-members
  - /github/setting-up-and-managing-organizations-and-teams/managing-access-to-a-project-board-for-organization-members
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage access for members
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 4c0b280f6c1b28532b191282db465b5ae5b3c274
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107958'
---
{% data reusables.projects.project_boards_old %}

Por padrão, os membros da organização têm acesso de gravação aos dados do {% data variables.projects.projects_v1_boards %} a menos que os proprietários da organização ou os administradores do {% data variables.projects.projects_v1_board %} definam permissões diferentes para {% data variables.projects.projects_v1_boards %} específicos.

## Configurar um nível referencial de permissão para todos os integrantes da organização

{% tip %}

**Ponta:** Você pode conceder a um membro da organização permissões mais elevadas para {% data variables.projects.projects_v1_board %}. Para obter mais informações, confira "[Permissões de quadro de projetos para uma organização](/articles/project-board-permissions-for-an-organization)".

{% endtip %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Clique em **Projetos (clássicos)** {% endif %} {% data reusables.project-management.select-project %} {% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %}
8. Em "Permissão de membro da organização", escolha um nível de permissão de linha de base para todos os membros da organização: **Leitura**, **Gravação**, **Administrador** ou **Nenhum**.
![Opções de permissões de linha de base de quadro de projetos para todos os membros da organização](/assets/images/help/projects/baseline-project-permissions-for-organization-members.png)
9. Clique em **Salvar**.

## Leitura adicional

- "[Gerenciar o acesso de um indivíduo ao {% data variables.product.prodname_project_v1 %} de uma organização](/articles/managing-an-individual-s-access-to-an-organization-project-board)"
- "[Gerenciar o acesso de uma equipe ao {% data variables.product.prodname_project_v1 %} de uma organização](/articles/managing-team-access-to-an-organization-project-board)"
- "[Permissões de {% data variables.product.prodname_project_v1_caps %} para uma organização](/articles/project-board-permissions-for-an-organization)"
