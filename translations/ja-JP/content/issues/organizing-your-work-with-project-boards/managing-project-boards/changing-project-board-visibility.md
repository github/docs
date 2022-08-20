---
title: '{% data variables.product.prodname_project_v1 %}の可視性の変更'
intro: 'Organizationのオーナーもしくは{% data variables.projects.projects_v1_board %}の管理者は、{% data variables.projects.projects_v1_board %}を{% ifversion ghae %}インターナル{% else %}パブリック{% endif %}もしくはプライベートにできます。'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/changing-project-board-visibility
  - /articles/changing-project-board-visibility
  - /github/managing-your-work-on-github/changing-project-board-visibility
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 可視性の変更
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

{% data reusables.project-management.project-board-visibility %}

{% note %}

**{% ifversion classic-project-visibility-permissions %}Notes{% else %}Note{% endif %}:** {% ifversion classic-project-visibility-permissions %}

* {% data reusables.projects.owners-can-limit-visibility-permissions %}
* {% endif %}When you make your {% data variables.projects.projects_v1_board %} {% ifversion ghae %}internal{% else %}public{% endif %}, organization members are given read access by default. Organizationの特定のメンバーに対して、その人が所属するTeamにアクセスを付与するか、その人をコラボレータとして{% data variables.projects.projects_v1_board %}に追加することによって、書き込みあるいは管理権限を付与することができます。 詳しい情報については[Organizationの{% data variables.product.prodname_project_v1_caps %}の権限](/articles/project-board-permissions-for-an-organization)」を参照してください。

{% endnote %}

1. {% ifversion ghae %}インターナル{% else %}パブリック{% endif %}もしくはプライベートにしたいプロジェクトボードにアクセスしてください。
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
{% data reusables.project-management.choose-visibility %}
1. [**Save**] をクリックします。
