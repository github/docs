---
title: '組織で{% ifversion projects-v2 %}プロジェクト{% else %}プロジェクト ボード{% endif %}を無効にする'
intro: '組織の所有者は、{% ifversion projects-v2 %}組織全体の{% data variables.projects.projects_v2 %}、組織全体の{% data variables.projects.projects_v1_boards %}、リポジトリ レベルの{% data variables.projects.projects_v1_boards %}{% else %}組織全体のプロジェクト ボードとリポジトリ プロジェクト ボード{% endif %}を組織で無効にすることができます。'
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
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147423325'
---
Organization 全体でプロジェクトボードを無効化すると、Organization レベルでプロジェクトボードを新たに作成することができなくなり、既存の Organization レベルのプロジェクトボードはそれまでの URL ではアクセスできなくなります。 Organization 内にあるリポジトリのプロジェクトボードは影響を受けません。 {% ifversion projects-v2 %}これらの設定は、{% data variables.projects.projects_v2 %}と{% data variables.projects.projects_v1_boards %}に適用されます。{% endif %}

Organization 内にあるリポジトリのプロジェクトボードを無効化すると、Organization 内のどのリポジトリでもプロジェクトボードを新たに作成できなくなり、既存の Organization 内にあるリポジトリのプロジェクトボードはそれまでの URL でアクセスできなくなります。 Organization レベルのプロジェクトボードは影響を受けません。


プロジェクト ボードを無効にすると、タイムラインや[監査ログ](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization)にプロジェクト ボード情報が表示されなくなります。


{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
1. サイドバーの [コード、計画、自動化] セクションで、 **[{% octicon "table" aria-label="The table icon" %} プロジェクト]** をクリックします。
{% endif %}
1. Organization 全体のプロジェクトボードを無効化するのか、Organization 内にあるリポジトリのプロジェクトボードを無効化するのか、その両方なのかを判断します。 次に [Projects] の下で:
    - Organization 全体のプロジェクト ボードを無効化するには、 **[Organization のプロジェクトを有効にする]** を選択解除します。
    - Organization 内にあるリポジトリのプロジェクト ボードを無効化するには、 **[すべてのリポジトリのプロジェクトを有効にする]** を選択解除します。
  ![Organization や Organization の全リポジトリのプロジェクトを無効にするチェックボックス](/assets/images/help/projects/disable-org-projects-checkbox.png)
1. **[保存]** をクリックします。

{% data reusables.organizations.disable_project_board_results %}

## 参考資料

{% ifversion projects-v2 %}- 「[{% data variables.product.prodname_projects_v2 %}について](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)」{% endif %}
- 「[{% data variables.product.prodname_projects_v1 %} について](/articles/about-project-boards)」
- 「[{% data variables.projects.projects_v1_board %}をクローズする](/articles/closing-a-project-board)」
- 「[{% data variables.projects.projects_v1_board %}の削除](/articles/deleting-a-project-board)」
- 「[リポジトリでの{% data variables.projects.projects_v1_boards %}の無効化](/articles/disabling-project-boards-in-a-repository)」
