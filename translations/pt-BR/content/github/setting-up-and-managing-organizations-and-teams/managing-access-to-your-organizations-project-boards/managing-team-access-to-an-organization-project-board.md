---
title: Gerenciar o acesso da equipe em um quadro de projeto da organização
intro: 'Como proprietário da organização ou administrador de quadro de projeto, você pode conceder o acesso da equipe a um quadro de projeto pertencente à sua organização.'
redirect_from:
  - /articles/managing-team-access-to-an-organization-project-board
  - /github/setting-up-and-managing-organizations-and-teams/managing-team-access-to-an-organization-project-board
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - organizations
  - teams
---
{% warning %}

**Avisos:**
- Você pode alterar os níveis de permissões de uma equipe se a equipe tiver acesso direto a um quadro de projeto. Se o acesso da equipe ao quadro de projeto é herança de uma equipe principal, você deve alterar o acesso da equipe principal ao quadro de projeto.
- Se você adicionar ou remover acesso de uma equipe principal ao quadro de projeto, cada uma das equipes secundárias da equipe principal também receberá ou perderá o acesso ao quadro de projeto. Para obter mais informações, consulte "[Sobre equipes](/articles/about-teams)".

{% endwarning %}

### Conceder a uma equipe acesso a um quadro de projeto

Você pode dar a uma equipe inteira o mesmo nível de permissão em um quadro de projeto.

{% note %}

**Observação:** {% data reusables.project-management.cascading-permissions %} por exemplo, se um proprietário da organização deu a uma equipe permissões de leitura em um quadro de projeto e um administrador de quadro de projeto concede permissões de administrador a um integrante da equipe como um colaborador individual, essa pessoa teria permissões de administrador no quadro de projeto. Para obter mais informações, consulte "[Permissões de quadro de projeto para uma organização](/articles/project-board-permissions-for-an-organization)".

{% endnote %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.organization-wide-project %}
{% data reusables.project-management.select-project %}
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
8. Na barra lateral esquerda, clique em **Teams** (Equipes).
9. Para adicionar uma equipe, clique em **Add a team: Select team** (Adicionar uma equipe: Selecionar equipe). Depois, escolha uma equipe no menu suspenso ou pesquise a equipe que você deseja adicionar. ![Menu suspenso Add a team (Adicionar uma equipe) com lista de equipes na organização](/assets/images/help/projects/add-a-team.png)
10. Ao lado do nome da equipe, use o menu suspenso para selecionar o nível de permissão desejado: **Read** (Leitura), **Write** (Gravação) ou **Admin** (Administrador). ![Menu suspenso Team permissions (Permissões de equipe) com opções read, write e admin (leitura, gravação e administrador)](/assets/images/help/projects/org-project-team-choose-permissions.png)

### Configurar o acesso de uma equipe a um quadro de projeto

Se o acesso de uma equipe a um quadro de projeto for herdado de uma equipe principal, você deverá alterar o acesso da equipe principal ao quadro de projeto para atualizar o acesso das equipes secundárias.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
4. Acima das conversas da equipe, clique em {% octicon "project" aria-label="The Projects icon" %} **Projects** (Projetos). ![Aba repositórios da equipe](/assets/images/help/organizations/team-project-board-button.png)
5. Para alterar os níveis de permissão, à direita do quadro de projetos que deseja atualizar, use o menu suspenso. Para remover um quadro de projeto, clique em **{% octicon "trashcan" aria-label="The trashcan icon" %}**. ![Botão Trash (Lixeira) Remove a project board from your team (Remover um quadro de projeto de sua equipe)](/assets/images/help/organizations/trash-button.png)
