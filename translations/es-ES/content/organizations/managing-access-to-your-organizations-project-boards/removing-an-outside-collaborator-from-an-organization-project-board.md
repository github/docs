---
title: 'Eliminar a un colaborador externo del {% data variables.product.prodname_project_v1 %} de una organización'
intro: 'Como propietario de una organización o administrador de un {% data variables.projects.projects_v1_board %}, puedes eliminar el acceso de un colaborador externo a un {% data variables.projects.projects_v1_board %}.'
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
shortTitle: Eliminar a un colaborador externo
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Haz clic en **Proyectos (clásico)**{% endif %}
{% data reusables.project-management.select-project %}
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
{% data reusables.project-management.collaborator-option %}
{% data reusables.project-management.remove-collaborator %}
