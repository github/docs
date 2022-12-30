---
title: '{% data variables.product.prodname_project_v1 %}へのリポジトリのリンク'
intro: 'リポジトリは、組織または個人アカウントの{% data variables.projects.projects_v1_board %}にリンクできます。'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/linking-a-repository-to-a-project-board
  - /articles/linking-a-repository-to-a-project-board
  - /github/managing-your-work-on-github/linking-a-repository-to-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: Link repository to board
allowTitleToDifferFromFilename: true
ms.openlocfilehash: d0893b64551be80577547b9791e7a7ed6a432de0
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109697'
---
{% data reusables.projects.project_boards_old %}

{% data variables.projects.projects_v1_board %}への書き込みアクセス許可を持つユーザーは、その組織または個人アカウントが所有するリポジトリを{% data variables.projects.projects_v1_board %}にリンクできます。 詳しくは、「[Organization の{% data variables.product.prodname_project_v1_caps %}のアクセス許可](/articles/project-board-permissions-for-an-organization/)」または「[ユーザー所有の{% data variables.product.prodname_projects_v1 %} のアクセス許可レベル](/articles/permission-levels-for-user-owned-project-boards/)」を参照してください。

{% data reusables.project-management.link-repos-to-project-board %}Issue またはプルリクエストの URL をカードに入力すると、リンクされていないリポジトリから Issue またはプルリクエストを追加できます。 詳しくは、「[{% data variables.product.prodname_project_v1 %}への issue と pull request の追加](/articles/adding-issues-and-pull-requests-to-a-project-board)」を参照してください。

1. リポジトリをリンクする{% data variables.projects.projects_v1_board %}に移動します。
{% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %}
4. 左側のサイドバーで、 **[Linked repositories]\(リンクされたリポジトリ\)** をクリックします。
![左サイドバーの [Linked repositories]\(リンクされたリポジトリ\) メニュー オプション](/assets/images/help/projects/project-board-linked-repositories-setting.png)
5. **[Link a repository]\(リポジトリのリンク\)** をクリックします。
![[Linked repositories]\(リンクされたリポジトリ\) タブにある [Link a repository]\(リポジトリのリンク\) ボタン](/assets/images/help/projects/link-repository-button.png)
6. リンクしたいリポジトリを検索します。
![[Link a repository]\(リポジトリのリンク\) ウィンドウの [検索] フィールド](/assets/images/help/projects/search-to-link-repository.png)
7. **[リンク]** をクリックします。 リンクを解除するには、 **[リンク解除]** をクリックします。
![[リンク] ボタン](/assets/images/help/projects/link-button.png)

{% note %}

**注:** Organization またはユーザーが所有する{% data variables.projects.projects_v1_board %}にリポジトリをリンクするには、リポジトリで issue が有効になっている必要があります。 つまり、リポジトリには [Issue] タブがあるということです（フォークされたリポジトリでは、Issue はデフォルトで無効になっています）。  リポジトリで Issue を有効または無効にする方法については、[リポジトリの Issue の無効化](/github/managing-your-work-on-github/disabling-issues)に関する記事をご覧ください。

{% endnote %}

## 参考資料

- 「[{% data variables.product.prodname_projects_v1 %} について](/articles/about-project-boards)」
