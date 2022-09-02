---
title: 'Removendo um colaborador externo de uma organização de {% data variables.product.prodname_project_v1 %}'
intro: 'Como proprietário da organização ou administrador de {% data variables.projects.projects_v1_board %}, você pode remover o acesso de um colaborador externo a um {% data variables.projects.projects_v1_board %}.'
redirect_from:
  - /articles/removing-an-outside-collaborator-from-an-organization-project-board
  - /github/setting-up-and-managing-organizations-and-teams/removing-an-outside-collaborator-from-an-organization-project-board
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Remover colaborador externo
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Clique em **Projetos (clássico)**{% endif %}
{% data reusables.project-management.select-project %}
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
{% data reusables.project-management.collaborator-option %}
{% data reusables.project-management.remove-collaborator %}
