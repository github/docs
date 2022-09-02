---
title: 'Adicionar um colaborador externo a um {% data variables.product.prodname_project_v1 %} na sua organização'
intro: 'Como proprietário da organização ou administrador de {% data variables.projects.projects_v1_board %}, você pode adicionar um colaborador externo e personalizar suas permissões a um {% data variables.projects.projects_v1_board %}.'
redirect_from:
  - /articles/adding-an-outside-collaborator-to-a-project-board-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/adding-an-outside-collaborator-to-a-project-board-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Adicionar um colaborador
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

Um colaborador externo é uma pessoa que não é explicitamente integrante da sua organização, mas que tem permissões para um {% data variables.projects.projects_v1_board %} na sua organização.

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Clique em **Projetos (clássico)**{% endif %}
{% data reusables.project-management.select-project %}
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
{% data reusables.project-management.collaborator-option %}
9. Em "Search by username, full name or email address" (Pesquisar por nome de usuário, nome completo ou endereço de e-mail), digite o nome do colaborador externo, nome de usuário ou e-mail no {% data variables.product.prodname_dotcom %}. ![A seção Collaborators (Colaboradores) com o nome de usuário Octocat inserido no campo de pesquisa](/assets/images/help/projects/org-project-collaborators-find-name.png)
{% data reusables.project-management.add-collaborator %}
{% data reusables.project-management.collaborator-permissions %}
