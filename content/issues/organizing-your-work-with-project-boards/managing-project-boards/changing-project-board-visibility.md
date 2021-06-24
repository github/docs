---
title: Changing project board visibility
intro: 'As an organization owner or project board admin, you can make a project board {% ifversion ghae %}internal{% else %}public{% endif %} or private.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/changing-project-board-visibility
  - /articles/changing-project-board-visibility
  - /github/managing-your-work-on-github/changing-project-board-visibility
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Pull requests
shortTitle: Change visibility
---
{% data reusables.projects.project_boards_old %}

{% data reusables.project-management.project-board-visibility %}

{% tip %}

**Tip:** When you make your project board {% ifversion ghae %}internal{% else %}public{% endif %}, organization members are given read access by default. You can give specific organization members write or admin permissions by giving project board access to teams they're on or by adding them to the project board as a collaborator. For more information, see "[Project board permissions for an organization](/articles/project-board-permissions-for-an-organization)."

{% endtip %}

1. Navigate to the project board you want to make {% ifversion ghae %}internal{% else %}public{% endif %} or private.
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
{% data reusables.project-management.choose-visibility %}
1. Click **Save**.
