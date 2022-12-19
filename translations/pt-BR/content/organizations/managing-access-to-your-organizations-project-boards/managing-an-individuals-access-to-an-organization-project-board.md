---
title: 'Gerenciar o acesso de um indivíduo ao {% data variables.product.prodname_project_v1 %} de uma organização'
intro: 'Como proprietário da organização ou administrador do {% data variables.projects.projects_v1_board %}, você pode gerenciar o acesso de um membro individual a um {% data variables.projects.projects_v1_board %} pertencente à sua organização.'
redirect_from:
  - /articles/managing-an-individual-s-access-to-an-organization-project-board
  - /articles/managing-an-individuals-access-to-an-organization-project-board
  - /github/setting-up-and-managing-organizations-and-teams/managing-an-individuals-access-to-an-organization-project-board
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage individual access
allowTitleToDifferFromFilename: true
ms.openlocfilehash: ceecfd317322f65541591f833c04f86d5b483c0e
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107981'
---
{% data reusables.projects.project_boards_old %}

{% note %}

**Observação:** {% data reusables.project-management.cascading-permissions %} Para obter mais informações, confira "[Permissões de {% data variables.product.prodname_project_v1_caps %} para uma organização](/articles/project-board-permissions-for-an-organization)". 

{% endnote %}

## Dar a um membro da organização acesso a um {% data variables.projects.projects_v1_board %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Clique em **Projetos (clássicos)** {% endif %} {% data reusables.project-management.select-project %} {% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.collaborator-option %}
9. Em "Search by username, full name or email address" (Pesquisar por nome de usuário, nome completo ou endereço de e-mail), digite o nome, o nome de usuário ou o e-mail do colaborador no {% data variables.product.prodname_dotcom %}.
   ![A seção Colaboradores com o nome de usuário do Octocat inserido no campo de pesquisa](/assets/images/help/projects/org-project-collaborators-find-name.png) {% data reusables.project-management.add-collaborator %} {% data reusables.project-management.collaborator-permissions %}

## Alterar o acesso de um membro da organização para um {% data variables.projects.projects_v1_board %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Clique em **Projetos (clássicos)** {% endif %} {% data reusables.project-management.select-project %} {% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.collaborator-option %} {% data reusables.project-management.collaborator-permissions %}

## Remover o acesso de um membro da organização a um {% data variables.projects.projects_v1_board %}

Quando você remove um colaborador de um {% data variables.projects.projects_v1_board %}, a pessoa ainda pode ter acesso ao quadro com base nas permissões que tem para outras funções. Para remover completamente o acesso a um {% data variables.projects.projects_v1_board %}, você deve remover o acesso à cada função que a pessoa tem. Por exemplo, uma pessoa pode ter acesso ao {% data variables.projects.projects_v1_board %} como membro de uma organização ou equipe. Para obter mais informações, confira "[Permissões {% data variables.product.prodname_project_v1_caps %} para uma organização](/articles/project-board-permissions-for-an-organization)".

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Clique em **Projetos (clássicos)** {% endif %} {% data reusables.project-management.select-project %} {% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.collaborator-option %} {% data reusables.project-management.remove-collaborator %}

## Leitura adicional

- "[Permissões de {% data variables.product.prodname_project_v1_caps %} para uma organização](/articles/project-board-permissions-for-an-organization)"
