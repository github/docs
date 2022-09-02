---
title: 'Organizationの{% ifversion projects-v2 %}プロジェクト{% else %}プロジェクトボード{% endif %}の無効化'
intro: 'Organizationのオーナーは、Organizationにおいて{% ifversion projects-v2 %}Organization全体の{% data variables.projects.projects_v2 %}、Organization全体の{% data variables.projects.projects_v1_boards %}、リポジトリレベルの{% data variables.projects.projects_v1_boards %}{% else %}Organization全体のプロジェクトボードとリポジトリのプロジェクトボード{% endif %}をオフにできます。'
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
shortTitle: プロジェクトの無効化
allowTitleToDifferFromFilename: true
---

Organization 全体でプロジェクトボードを無効化すると、Organization レベルでプロジェクトボードを新たに作成することができなくなり、既存の Organization レベルのプロジェクトボードはそれまでの URL ではアクセスできなくなります。 Organization 内にあるリポジトリのプロジェクトボードは影響を受けません。 {% ifversion projects-v2 %}これらの設定は、{% data variables.projects.projects_v2 %}及び{% data variables.projects.projects_v1_boards %}に適用されます。{% endif %}

Organization 内にあるリポジトリのプロジェクトボードを無効化すると、Organization 内のどのリポジトリでもプロジェクトボードを新たに作成できなくなり、既存の Organization 内にあるリポジトリのプロジェクトボードはそれまでの URL でアクセスできなくなります。 Organization レベルのプロジェクトボードは影響を受けません。


プロジェクトボードを無効化すると、タイムラインや[監査ログ](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization)でプロジェクトボード情報を見ることができなくなります。


{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
1. サイドバーの「Code planning, and automation（コードの計画と自動化）」セクションで、**{% octicon "table" aria-label="The table icon" %} Projects（プロジェクト）**をクリックしてください。
{% endif %}
1. Organization 全体のプロジェクトボードを無効化するのか、Organization 内にあるリポジトリのプロジェクトボードを無効化するのか、その両方なのかを判断します。 次に [Projects] の下で:
    - Organization 全体のプロジェクトボードを無効化するには、[**Enable projects for the organization**] の選択を解除します。
    - Organization 内にあるリポジトリのプロジェクトボードを無効化するには、[**Enable projects for all repositories**] の選択を解除します。 ![Organization や Organization の全リポジトリのプロジェクトを無効にするチェックボックス](/assets/images/help/projects/disable-org-projects-checkbox.png)
1. [**Save**] をクリックします。

{% data reusables.organizations.disable_project_board_results %}

## 参考リンク

{% ifversion projects-v2 %}- 「[{% data variables.product.prodname_projects_v2 %}について](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)」{% endif %}
- [{% data variables.product.prodname_projects_v1 %}について](/articles/about-project-boards)
- 「[{% data variables.projects.projects_v1_board %}のクローズ](/articles/closing-a-project-board)」
- 「[{% data variables.projects.projects_v1_board %}の削除](/articles/deleting-a-project-board)」
- 「[リポジトリでの{% data variables.projects.projects_v1_boards %}の無効化](/articles/disabling-project-boards-in-a-repository)」
