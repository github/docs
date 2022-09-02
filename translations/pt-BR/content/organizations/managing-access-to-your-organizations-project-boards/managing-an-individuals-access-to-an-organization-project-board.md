---
title: 'Gerenciando o acesso de um indivíduo a uma organização de {% data variables.product.prodname_project_v1 %}'
intro: 'Como proprietário da organização ou administrador de {% data variables.projects.projects_v1_board %}, você pode gerenciar o acesso de um integrante individual a um {% data variables.projects.projects_v1_board %} pertencente à sua organização.'
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
shortTitle: Gerenciar acesso individual
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

{% note %}

**Observação:** {% data reusables.project-management.cascading-permissions %} Para obter mais informações, consulte "[permissões de {% data variables.product.prodname_project_v1_caps %} para uma organização](/articles/project-board-permissions-for-an-organization)".

{% endnote %}

## Aoncedendo acesso a um integrante da organização a um {% data variables.projects.projects_v1_board %}

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Clique em **Projetos (clássico)**{% endif %}
{% data reusables.project-management.select-project %}
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
{% data reusables.project-management.collaborator-option %}
9. Em "Search by username, full name or email address" (Pesquisar por nome de usuário, nome completo ou endereço de e-mail), digite o nome, o nome de usuário ou o e-mail do colaborador no {% data variables.product.prodname_dotcom %}. ![A seção Collaborators (Colaboradores) com o nome de usuário Octocat inserido no campo de pesquisa](/assets/images/help/projects/org-project-collaborators-find-name.png)
{% data reusables.project-management.add-collaborator %}
{% data reusables.project-management.collaborator-permissions %}

## Alterando o acesso dos integrantes de uma organização para um {% data variables.projects.projects_v1_board %}

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Clique em **Projetos (clássico)**{% endif %}
{% data reusables.project-management.select-project %}
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
{% data reusables.project-management.collaborator-option %}
{% data reusables.project-management.collaborator-permissions %}

## Removendo acesso do integrante da organização a um {% data variables.projects.projects_v1_board %}

Ao remover um colaborador de um {% data variables.projects.projects_v1_board %}, ele ainda poderá manter o acesso ao quadro com base nas permissões para outras funções. Para remover completamente o acesso a um {% data variables.projects.projects_v1_board %}, você deverá remover o acesso para cada função que a pessoa possui. Por exemplo, uma pessoa pode ter acesso ao {% data variables.projects.projects_v1_board %} como integrante da organização ou integrante da equipe. Para obter mais informações, consulte "[Permissões de {% data variables.product.prodname_project_v1_caps %} para uma organização](/articles/project-board-permissions-for-an-organization)".

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Clique em **Projetos (clássico)**{% endif %}
{% data reusables.project-management.select-project %}
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
{% data reusables.project-management.collaborator-option %}
{% data reusables.project-management.remove-collaborator %}

## Leia mais

- "[Permissões de {% data variables.product.prodname_project_v1_caps %} para uma organização](/articles/project-board-permissions-for-an-organization)"
