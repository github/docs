---
title: 'Gerenciando o acesso a um {% data variables.product.prodname_project_v1 %} para os integrantes da organização'
intro: 'Como proprietário de uma organização ou administrador de {% data variables.projects.projects_v1_board %}, você pode definir um nível de permissão padrão para um {% data variables.projects.projects_v1_board %} para todos os membros da organização.'
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
shortTitle: Gerenciar acesso para os integrantes
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

Por padrão, os integrantes da organização têm acesso de gravação ao {% data variables.projects.projects_v1_boards %} da sua organização, a menos que os proprietários da organização ou administradores de {% data variables.projects.projects_v1_board %} definam permissões diferentes para {% data variables.projects.projects_v1_boards %} específicos.

## Configurar um nível referencial de permissão para todos os integrantes da organização

{% tip %}

**Dica:** Você pode conceder permissões superiores a um integrante da organização para {% data variables.projects.projects_v1_board %}. Para obter mais informações, consulte "[Permissões de quadro de projeto para uma organização](/articles/project-board-permissions-for-an-organization)".

{% endtip %}

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Clique em **Projetos (clássico)**{% endif %}
{% data reusables.project-management.select-project %}
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
8. Em "Organization member permission" (Permissão de integrante da organização), escolha um nível referencial de permissão para todos os integrantes da organização: **Read** (Leitura), **Write** (Gravação), **Admin** (Administrador) ou **None** (Nenhuma). ![Opções de permissões a quadro de projeto para todos os integrantes da organização](/assets/images/help/projects/baseline-project-permissions-for-organization-members.png)
9. Clique em **Salvar**.

## Leia mais

- "[Gerenciando o acesso de um indivíduo a uma organização de {% data variables.product.prodname_project_v1 %}](/articles/managing-an-individual-s-access-to-an-organization-project-board)"
- "[Gerenciando o acesso de uma equipe a uma organização de {% data variables.product.prodname_project_v1 %}](/articles/managing-team-access-to-an-organization-project-board)"
- "[Permissões de {% data variables.product.prodname_project_v1_caps %} para uma organização](/articles/project-board-permissions-for-an-organization)"
