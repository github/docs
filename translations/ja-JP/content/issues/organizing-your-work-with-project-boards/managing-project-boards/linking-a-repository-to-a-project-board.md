---
title: リポジトリをプロジェクトボードにリンクする
intro: リポジトリを、Organization またはユーザのアカウントのプロジェクトボードにリンクすることができます。
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/linking-a-repository-to-a-project-board
  - /articles/linking-a-repository-to-a-project-board
  - /github/managing-your-work-on-github/linking-a-repository-to-a-project-board
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

プロジェクトボードへの書き込み権限があれば誰でも、その Organization またはユーザアカウントが所有するリポジトリをプロジェクトボードにリンクできます。 詳細は「[Organization のプロジェクトボード権限](/articles/project-board-permissions-for-an-organization/)」または「[ユーザ所有のプロジェクトボードの権限レベル](/articles/permission-levels-for-user-owned-project-boards/)」を参照してください。

{% data reusables.project-management.link-repos-to-project-board %}Issue またはプルリクエストの URL をカードに入力すると、リンクされていないリポジトリから Issue またはプルリクエストを追加できます。 詳しい情報については、「[プロジェクトボードに Issue およびプルリクエストを追加する](/articles/adding-issues-and-pull-requests-to-a-project-board)」を参照してください。

1. リポジトリのリンク先にするプロジェクトボードに移動します。
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
4. 左サイドバーで [**Linked repositories**] をクリックします。 ![左サイドバーの [Linked repositories] メニュー オプション](/assets/images/help/projects/project-board-linked-repositories-setting.png)
5. [**Link a repository**] をクリックします。 ![[Linked repositories] タブにある [Link a repository] ボタン](/assets/images/help/projects/link-repository-button.png)
6. リンクしたいリポジトリを検索します。 ![[Link a repository] ウィンドウの [Search] フィールド](/assets/images/help/projects/search-to-link-repository.png)
7. [**Link**] をクリックします。 リンクを解除するには、[**Unlink**] をクリックします。 ![[Link] ボタン](/assets/images/help/projects/link-button.png)

{% note %}

**注釈:** 自分の Organization またはユーザ所有のプロジェクトボードにリポジトリをリンクするには、リポジトリで Issue が有効になっている必要があります。 つまり、リポジトリには [Issue] タブがあるということです（フォークされたリポジトリでは、Issue はデフォルトで無効になっています）。  リポジトリの Issue を有効または無効にする方法については、「[リポジトリの Issue の無効化する](/github/managing-your-work-on-github/disabling-issues)」を参照してください。

{% endnote %}

### 参考リンク

- "[プロジェクトボードについて](/articles/about-project-boards)"
