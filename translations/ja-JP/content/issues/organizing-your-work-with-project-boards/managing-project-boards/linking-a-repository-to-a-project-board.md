---
title: '{% data variables.product.prodname_project_v1 %}へのリポジトリのリンク'
intro: 'Organizationもしくは個人アカウントの{% data variables.projects.projects_v1_board %}にリポジトリをリンクできます。'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/linking-a-repository-to-a-project-board
  - /articles/linking-a-repository-to-a-project-board
  - /github/managing-your-work-on-github/linking-a-repository-to-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: ボードへのリポジトリのリンク
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

{% data variables.projects.projects_v1_board %}への書き込み権限を持っているユーザは、そのOrganizationもしくは個人アカウントが所有するリポジトリを{% data variables.projects.projects_v1_board %}にリンクできます。 詳しい情報については「[Organizationの{% data variables.product.prodname_project_v1_caps %}の権限](/articles/project-board-permissions-for-an-organization/)」あるいは「[ユーザが所有する{% data variables.product.prodname_projects_v1 %}の権限レベル](/articles/permission-levels-for-user-owned-project-boards/)」を参照してください。

{% data reusables.project-management.link-repos-to-project-board %}Issue またはプルリクエストの URL をカードに入力すると、リンクされていないリポジトリから Issue またはプルリクエストを追加できます。 詳しい情報については「[{% data variables.product.prodname_project_v1 %}へのIssue及びPull Requestの追加](/articles/adding-issues-and-pull-requests-to-a-project-board)」を参照してください。

1. リポジトリをリンクしたい{% data variables.projects.projects_v1_board %}にアクセスしてください。
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
4. 左サイドバーで [**Linked repositories**] をクリックします。 ![左サイドバーの [Linked repositories] メニュー オプション](/assets/images/help/projects/project-board-linked-repositories-setting.png)
5. [**Link a repository**] をクリックします。 ![[Linked repositories] タブにある [Link a repository] ボタン](/assets/images/help/projects/link-repository-button.png)
6. リンクしたいリポジトリを検索します。 ![[Link a repository] ウィンドウの [Search] フィールド](/assets/images/help/projects/search-to-link-repository.png)
7. [**Link**] をクリックします。 リンクを解除するには、[**Unlink**] をクリックします。 ![[Link] ボタン](/assets/images/help/projects/link-button.png)

{% note %}

**ノート:** リポジトリをOrganizationもしくはユーザが所有する{% data variables.projects.projects_v1_board %}にリンクするためには、そのリポジトリでIssueが有効化されていなければなりません。 つまり、リポジトリには [Issue] タブがあるということです（フォークされたリポジトリでは、Issue はデフォルトで無効になっています）。  リポジトリの Issue を有効または無効にする方法については、「[リポジトリの Issue の無効化する](/github/managing-your-work-on-github/disabling-issues)」を参照してください。

{% endnote %}

## 参考リンク

- [{% data variables.product.prodname_projects_v1 %}について](/articles/about-project-boards)
