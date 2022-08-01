---
title: 'Disabling {% ifversion projects-v2 %}projects{% else %}project boards{% endif %} in your organization'
intro: 'Organization owners can turn off {% ifversion projects-v2 %}organization-wide {% data variables.projects.projects_v2 %}, organization-wide {% data variables.projects.projects_v1_boards %}, and repository-level {% data variables.projects.projects_v1_boards %}{% else %}organization-wide project boards and repository project boards{% endif %} in an organization.'
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
---

Organization 全体でプロジェクトボードを無効化すると、Organization レベルでプロジェクトボードを新たに作成することができなくなり、既存の Organization レベルのプロジェクトボードはそれまでの URL ではアクセスできなくなります。 Organization 内にあるリポジトリのプロジェクトボードは影響を受けません。 {% ifversion projects-v2 %}These settings apply to {% data variables.projects.projects_v2 %} and {% data variables.projects.projects_v1_boards %}.{% endif %}

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

{% ifversion projects-v2 %}- "[About {% data variables.product.prodname_projects_v2 %}](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)"{% endif %}
- [{% data variables.product.prodname_projects_v1 %}について](/articles/about-project-boards)
- "[Closing a {% data variables.projects.projects_v1_board %}](/articles/closing-a-project-board)"
- "[Deleting a {% data variables.projects.projects_v1_board %}](/articles/deleting-a-project-board)"
- "[Disabling {% data variables.projects.projects_v1_boards %} in a repository](/articles/disabling-project-boards-in-a-repository)"
