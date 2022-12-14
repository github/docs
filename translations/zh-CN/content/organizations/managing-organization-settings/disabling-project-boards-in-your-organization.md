---
title: '在组织中禁用{% ifversion projects-v2 %}项目{% else %}项目板{% endif %}'
intro: '组织所有者可以在组织中关闭{% ifversion projects-v2 %}组织范围的{% data variables.projects.projects_v2 %}、组织范围的{% data variables.projects.projects_v1_boards %}和存储库级别的{% data variables.projects.projects_v1_boards %}{% else %}组织范围的项目板和存储库项目板{% endif %}。'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/disabling-project-boards-in-your-organization
  - /articles/disabling-project-boards-in-your-organization
  - /github/managing-your-work-on-github/disabling-project-boards-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Disable projects
allowTitleToDifferFromFilename: true
ms.openlocfilehash: e1e2aed1e7c689bee83dabc4a6750f8976206f4a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147423322'
---
禁用组织范围的项目板后，将无法在组织级别创建新的项目板，并且将无法通过其先前的 URL 访问任何现有组织级别项目板。 组织仓库中的项目板不受影响。 {% ifversion projects-v2 %}这些设置适用于 {% data variables.projects.projects_v2 %} 和 {% data variables.projects.projects_v1_boards %}。{% endif %}

在组织中禁用仓库项目板后，将无法在任何组织仓库中创建新项目板，并且将无法通过其先前的 URL 访问组织仓库中的任何现有项目板。 组织级别的项目板不受影响。


禁用项目板后，在时间表或[审核日志](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization)中将不再看到项目板信息。


{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
1. 在边栏的“代码规划和自动化”部分，单击“{% octicon "table" aria-label="The table icon" %} 项目”。
{% endif %}
1. 决定是否禁用组织范围的项目板，禁用组织中的仓库项目板，或两者均禁用。 然后，在“项目”（项目）下：
    - 若要禁用组织范围的项目板，请取消选择“启用组织的项目”。
    - 若要在组织中禁用存储库项目板，请取消选择“启用所有存储库的项目”。
  ![用于禁用单个组织或单个组织所有存储库的项目的复选框](/assets/images/help/projects/disable-org-projects-checkbox.png)
1. 单击“ **保存**”。

{% data reusables.organizations.disable_project_board_results %}

## 延伸阅读

{% ifversion projects-v2 %}- [关于 {% data variables.product.prodname_projects_v2 %}](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects){% endif %}
- [关于 {% data variables.product.prodname_projects_v1 %}](/articles/about-project-boards)
- [关闭 {% data variables.projects.projects_v1_board %}](/articles/closing-a-project-board)
- [删除 {% data variables.projects.projects_v1_board %}](/articles/deleting-a-project-board)
- [禁用 {% data variables.projects.projects_v1_boards %} in a repository](/articles/disabling-project-boards-in-a-repository)
