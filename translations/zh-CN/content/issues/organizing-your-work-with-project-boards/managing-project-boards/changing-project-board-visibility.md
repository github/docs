---
title: 'Changing {% data variables.product.prodname_project_v1 %} visibility'
intro: 'As an organization owner or {% data variables.projects.projects_v1_board %} admin, you can make a {% data variables.projects.projects_v1_board %} {% ifversion ghae %}internal{% else %}public{% endif %} or private.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/changing-project-board-visibility
  - /articles/changing-project-board-visibility
  - /github/managing-your-work-on-github/changing-project-board-visibility
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 更改可见性
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

{% data reusables.project-management.project-board-visibility %}

{% note %}

**{% ifversion classic-project-visibility-permissions %}Notes{% else %}Note{% endif %}:** {% ifversion classic-project-visibility-permissions %}

* {% data reusables.projects.owners-can-limit-visibility-permissions %}
* {% endif %}When you make your {% data variables.projects.projects_v1_board %} {% ifversion ghae %}internal{% else %}public{% endif %}, organization members are given read access by default. You can give specific organization members write or admin permissions by giving access to teams they're on or by adding them to the {% data variables.projects.projects_v1_board %} as a collaborator. For more information, see "[{% data variables.product.prodname_project_v1_caps %} permissions for an organization](/articles/project-board-permissions-for-an-organization)."

{% endnote %}

1. 导航到您要设为{% ifversion ghae %}内部{% else %}公共{% endif %}或私有的项目板。
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
{% data reusables.project-management.choose-visibility %}
1. 单击 **Save（保存）**。
