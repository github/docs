---
title: 'Gerenciar o acesso de uma equipe ao {% data variables.product.prodname_project_v1 %} de uma organização'
intro: 'Como proprietário da organização ou administrador do {% data variables.projects.projects_v1_board %}, você pode dar a uma equipe acesso a um {% data variables.projects.projects_v1_board %} pertencente à sua organização.'
redirect_from:
  - /articles/managing-team-access-to-an-organization-project-board
  - /github/setting-up-and-managing-organizations-and-teams/managing-team-access-to-an-organization-project-board
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage team access
allowTitleToDifferFromFilename: true
ms.openlocfilehash: c49fab76bbf286f865e3845356213bc1af18b20a
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107962'
---
{% data reusables.projects.project_boards_old %}

{% warning %}

**Avisos:**
- Você pode alterar os níveis de permissões de uma equipe se ela tiver acesso direto a um {% data variables.projects.projects_v1_board %}. Se o acesso da equipe ao {% data variables.projects.projects_v1_board %} for herdado de uma equipe pai, você deverá alterar o acesso da equipe pai para {% data variables.projects.projects_v1_board %}.
- Se você adicionar ou remover acesso ao {% data variables.projects.projects_v1_board %} para uma equipe pai, cada uma das equipes filho desse pai também receberá ou perderá o acesso ao {% data variables.projects.projects_v1_board %}. Para obter mais informações, confira "[Sobre as equipes](/articles/about-teams)".

{% endwarning %}

## Dar a uma equipe acesso a um {% data variables.projects.projects_v1_board %}

Você pode dar a toda uma equipe o mesmo nível de permissão para um {% data variables.projects.projects_v1_board %}.

{% note %}

**Observação:** {% data reusables.project-management.cascading-permissions %} Por exemplo, se um proprietário da organização dar a uma equipe permissões de leitura em um {% data variables.projects.projects_v1_board %} e um administrador do {% data variables.projects.projects_v1_board %} conceder permissões de administrador a esse quadro a um membro da equipe como um colaborador individual, essa pessoa terá permissões de administrador no {% data variables.projects.projects_v1_board %}. Para obter mais informações, confira "[Permissões de {% data variables.product.prodname_project_v1_caps %} para uma organização](/articles/project-board-permissions-for-an-organization)".

{% endnote %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Clique em **Projetos (clássicos)** {% endif %} {% data reusables.project-management.select-project %} {% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %}
8. Na barra lateral esquerda, clique em **Equipes**.
9. Para adicionar uma equipe, clique em **Adicionar uma equipe: Selecionar equipe**. Depois, escolha uma equipe no menu suspenso ou pesquise a equipe que você deseja adicionar.
 ![Menu suspenso Adicionar uma equipe com uma lista de equipes na organização](/assets/images/help/projects/add-a-team.png)
10. Ao lado do nome da equipe, use o menu suspenso usado para selecionar o nível de permissão desejado: **Leitura**, **Gravação** ou **Administrador**. ![Menu suspenso Permissões da equipe com as opções de leitura, gravação e administrador](/assets/images/help/projects/org-project-team-choose-permissions.png)

## Configurar o acesso de uma equipe a um {% data variables.projects.projects_v1_board %}

Se o acesso de uma equipe a um {% data variables.projects.projects_v1_board %} for herdado de uma equipe pai, você deverá alterar o acesso da equipe pai ao{% data variables.projects.projects_v1_board %} para atualizar o acesso às equipes filho.

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %}
4. Acima da conversa da equipe, clique em {% octicon "project" aria-label="The Projects icon" %} **Projetos**.
  ![A guia Repositórios da equipe](/assets/images/help/organizations/team-project-board-button.png)
5. Para alterar os níveis de permissão, à direita do {% data variables.projects.projects_v1_board %} que deseja atualizar, use o menu suspenso. Para remover um {% data variables.projects.projects_v1_board %}, clique em **{% octicon "trash" aria-label="The trash icon" %}** .
  ![Botão Remover um quadro de projetos da sua equipe da lixeira](/assets/images/help/organizations/trash-button.png)

{% ifversion projects-v2-add-to-team %}

## Leitura adicional

- [Adicionar o projeto a uma equipe](/issues/planning-and-tracking-with-projects/managing-your-project/adding-your-project-to-a-team)


{% endif %}
