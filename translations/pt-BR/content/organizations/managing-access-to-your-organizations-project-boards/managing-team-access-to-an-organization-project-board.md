---
title: 'Gerenciando o acesso de equipe a uma organização de {% data variables.product.prodname_project_v1 %}'
intro: 'Como proprietário de uma organização ou administrador de {% data variables.projects.projects_v1_board %}, você pode conceder acesso a uma equipe a um {% data variables.projects.projects_v1_board %} pertencente à sua organização.'
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
shortTitle: Gerenciar acesso de equipe
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

{% warning %}

**Avisos:**
- Você pode alterar o nível de permissão de uma equipe se a equipe tiver acesso direto a um {% data variables.projects.projects_v1_board %}. Se o acesso da equipe ao {% data variables.projects.projects_v1_board %} for herdado de uma equipe principal, você deverá alterar o acesso da equipe principal a {% data variables.projects.projects_v1_board %}.
- Se você adicionar ou remover o acesso de {% data variables.projects.projects_v1_board %} a uma equipe principal, cada uma das equipes secundárias dessa principal também receberá ou perderá acesso ao {% data variables.projects.projects_v1_board %}. Para obter mais informações, consulte "[Sobre equipes](/articles/about-teams)".

{% endwarning %}

## Dando acesso a uma equipe {% data variables.projects.projects_v1_board %}

Você pode dar a uma equipe inteira o mesmo nível de permissão para um {% data variables.projects.projects_v1_board %}.

{% note %}

**Observação:** {% data reusables.project-management.cascading-permissions %} Por exemplo, se o proprietário de uma organização concedeu permissões de leitura para um {% data variables.projects.projects_v1_board %}, e um administrador de {% data variables.projects.projects_v1_board %} conceder a um dos integrantes da equipe permissões de administrador para esse quadro como colaborador individual, essa pessoa teria permissões de administrador para o {% data variables.projects.projects_v1_board %}. Para obter mais informações, consulte "[Permissões de {% data variables.product.prodname_project_v1_caps %}para uma organização](/articles/project-board-permissions-for-an-organization)".

{% endnote %}

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Clique em **Projetos (clássico)**{% endif %}
{% data reusables.project-management.select-project %}
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
8. Na barra lateral esquerda, clique em **Teams** (Equipes).
9. Para adicionar uma equipe, clique em **Add a team: Select team** (Adicionar uma equipe: Selecionar equipe). Depois, escolha uma equipe no menu suspenso ou pesquise a equipe que você deseja adicionar. ![Menu suspenso Add a team (Adicionar uma equipe) com lista de equipes na organização](/assets/images/help/projects/add-a-team.png)
10. Ao lado do nome da equipe, use o menu suspenso para selecionar o nível de permissão desejado: **Read** (Leitura), **Write** (Gravação) ou **Admin** (Administrador). ![Menu suspenso Team permissions (Permissões de equipe) com opções read, write e admin (leitura, gravação e administrador)](/assets/images/help/projects/org-project-team-choose-permissions.png)

## Configurando o acesso de uma equipe a um {% data variables.projects.projects_v1_board %}

Se o acesso de uma equipe a um {% data variables.projects.projects_v1_board %} for herdado de uma equipe principal, você precisa alterar o acesso da equipe principal a {% data variables.projects.projects_v1_board %} para atualizar o acesso às equipes secundárias.

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.specific_team %}
4. Acima das conversas da equipe, clique em {% octicon "project" aria-label="The Projects icon" %} **Projects** (Projetos). ![Aba repositórios da equipe](/assets/images/help/organizations/team-project-board-button.png)
5. Para alterar níveis de permissões, à direita de {% data variables.projects.projects_v1_board %} que você deseja atualizar, use o menu suspenso. Para remover um {% data variables.projects.projects_v1_board %}, clique em **{% octicon "trash" aria-label="The trash icon" %}**. ![Botão Trash (Lixeira) Remove a project board from your team (Remover um quadro de projeto de sua equipe)](/assets/images/help/organizations/trash-button.png)
