---
title: Organization のプロジェクトボードを無効化
intro: Organization オーナーは Organization 全体のプロジェクトボードおよび Organization 内にあるリポジトリのプロジェクトボードをオフにできます。
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/disabling-project-boards-in-your-organization
  - /articles/disabling-project-boards-in-your-organization
  - /github/managing-your-work-on-github/disabling-project-boards-in-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

Organization 全体でプロジェクトボードを無効化すると、Organization レベルでプロジェクトボードを新たに作成することができなくなり、既存の Organization レベルのプロジェクトボードはそれまでの URL ではアクセスできなくなります。 Organization 内にあるリポジトリのプロジェクトボードは影響を受けません。

Organization 内にあるリポジトリのプロジェクトボードを無効化すると、Organization 内のどのリポジトリでもプロジェクトボードを新たに作成できなくなり、既存の Organization 内にあるリポジトリのプロジェクトボードはそれまでの URL でアクセスできなくなります。 Organization レベルのプロジェクトボードは影響を受けません。

プロジェクトボードを無効化すると、タイムラインや[監査ログ](/articles/reviewing-the-audit-log-for-your-organization/)でプロジェクトボード情報を見ることができなくなります。


{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
4. Organization 全体のプロジェクトボードを無効化するのか、Organization 内にあるリポジトリのプロジェクトボードを無効化するのか、その両方なのかを判断します。 次に [Projects] の下で:
    - Organization 全体のプロジェクトボードを無効化するには、[**Enable projects for the organization**] の選択を解除します。
    - Organization 内にあるリポジトリのプロジェクトボードを無効化するには、[**Enable projects for all repositories**] の選択を解除します。 ![Organization や Organization の全リポジトリのプロジェクトを無効にするチェックボックス](/assets/images/help/projects/disable-org-projects-checkbox.png)
5. [**Save**] をクリックします。

{% data reusables.organizations.disable_project_board_results %}

### 参考リンク

- [プロジェクトボードについて](/articles/about-project-boards)
- "[プロジェクトボードをクローズする](/articles/closing-a-project-board)"
- [プロジェクトボードの削除](/articles/deleting-a-project-board)
- [リポジトリ内のプロジェクトボードを無効化](/articles/disabling-project-boards-in-a-repository)
