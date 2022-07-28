---
title: 'Linking a repository to a {% data variables.product.prodname_project_v1 %}'
intro: 'You can link a repository to your organization''s or personal account''s {% data variables.projects.projects_v1_board %}.'
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

Anyone with write permissions to a {% data variables.projects.projects_v1_board %} can link repositories owned by that organization or personal account to the {% data variables.projects.projects_v1_board %}. For more information, see "[{% data variables.product.prodname_project_v1_caps %} permissions for an organization](/articles/project-board-permissions-for-an-organization/)" or "[Permission levels for user-owned {% data variables.product.prodname_projects_v1 %}](/articles/permission-levels-for-user-owned-project-boards/)."

{% data reusables.project-management.link-repos-to-project-board %}Issue またはプルリクエストの URL をカードに入力すると、リンクされていないリポジトリから Issue またはプルリクエストを追加できます。 For more information, see "[Adding issues and pull requests to a {% data variables.product.prodname_project_v1 %}](/articles/adding-issues-and-pull-requests-to-a-project-board)."

1. Navigate to the {% data variables.projects.projects_v1_board %} where you want to link a repository.
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
4. 左サイドバーで [**Linked repositories**] をクリックします。 ![左サイドバーの [Linked repositories] メニュー オプション](/assets/images/help/projects/project-board-linked-repositories-setting.png)
5. [**Link a repository**] をクリックします。 ![[Linked repositories] タブにある [Link a repository] ボタン](/assets/images/help/projects/link-repository-button.png)
6. リンクしたいリポジトリを検索します。 ![[Link a repository] ウィンドウの [Search] フィールド](/assets/images/help/projects/search-to-link-repository.png)
7. [**Link**] をクリックします。 リンクを解除するには、[**Unlink**] をクリックします。 ![[Link] ボタン](/assets/images/help/projects/link-button.png)

{% note %}

**Note:** In order to link a repository to your organization or user owned {% data variables.projects.projects_v1_board %} the repository needs to have issues enabled. つまり、リポジトリには [Issue] タブがあるということです（フォークされたリポジトリでは、Issue はデフォルトで無効になっています）。  リポジトリの Issue を有効または無効にする方法については、「[リポジトリの Issue の無効化する](/github/managing-your-work-on-github/disabling-issues)」を参照してください。

{% endnote %}

## 参考リンク

- [{% data variables.product.prodname_projects_v1 %}について](/articles/about-project-boards)
