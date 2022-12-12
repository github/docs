---
title: '{% data variables.product.prodname_project_v1 %}の可視性の変更'
intro: '組織の所有者または{% data variables.projects.projects_v1_board %}管理者は、{% data variables.projects.projects_v1_board %}を{% ifversion ghae %}内部{% else %}パブリック{% endif %}またはプライベートにすることができます。'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/changing-project-board-visibility
  - /articles/changing-project-board-visibility
  - /github/managing-your-work-on-github/changing-project-board-visibility
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: Change visibility
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 445675ee14c1d1fb47ded4321ae6ac8816fa6d6f
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109102'
---
{% data reusables.projects.project_boards_old %}

{% data reusables.project-management.project-board-visibility %}

{% note %}

**{% ifversion classic-project-visibility-permissions %}注{% else %}注{% endif %}:** {% ifversion classic-project-visibility-permissions %}

* {% data reusables.projects.owners-can-limit-visibility-permissions %}
* {% endif %}{% data variables.projects.projects_v1_board %} を{% ifversion ghae %}内部{% else %}パブリック{% endif %}にすると、Organization のメンバーには既定で読み取りアクセス権が付与されます。 特定の Organization メンバーに書き込みまたは管理者権限を付与するには、参加しているチームへのアクセス権限を与えるか、{% data variables.projects.projects_v1_board %}にコラボレーターとして追加します。 詳しくは、「[Organization の{% data variables.product.prodname_project_v1_caps %}のアクセス許可](/articles/project-board-permissions-for-an-organization)」を参照してください。

{% endnote %}

1. {% ifversion ghae %}インターナル{% else %}パブリック{% endif %}もしくはプライベートにしたいプロジェクトボードにアクセスしてください。
{% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.choose-visibility %}
1. **[保存]** をクリックします。
