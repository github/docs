---
title: '{% data variables.product.prodname_project_v1 %}のクローズ'
intro: '{% data variables.projects.projects_v1_board %}のタスクをすべて完了したか、{% data variables.projects.projects_v1_board %}を使う必要がなくなった場合、{% data variables.projects.projects_v1_board %}をクローズできます。'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/closing-a-project-board
  - /articles/closing-a-project
  - /articles/closing-a-project-board
  - /github/managing-your-work-on-github/closing-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

{% data variables.projects.projects_v1_board %}をクローズすると、設定されたすべてのワークフロー自動化はデフォルトで一時停止されます。

{% data variables.projects.projects_v1_board %}を再オープンする際には、自動化の*同期*のオプションがあり、これはボードに設定された自動化設定に従って、ボード上のカードの位置を更新します。 詳しい情報については「[クローズされた{% data variables.product.prodname_project_v1 %}の再オープン](/articles/reopening-a-closed-project-board)」あるいは「[{% data variables.product.prodname_projects_v1 %}の自動化について](/articles/about-automation-for-project-boards)」を参照してください。

1. リポジトリもしくはOrganization内、あるいは個人アカウントが所有する{% data variables.projects.projects_v1_boards %}のリストにアクセスしてください。
2. プロジェクトのリスト中で、クローズしたい{% data variables.projects.projects_v1_board %}の隣の{% octicon "chevron-down" aria-label="The chevron icon" %}をクリックしてください。 ![プロジェクトボードの名前の右にある、V 字型のアイコン](/assets/images/help/projects/project-list-action-chevron.png)
3. [**Close**] をクリックします。 ![プロジェクトボードのドロップダウンメニューにある [Close] アイテム](/assets/images/help/projects/close-project.png)

## 参考リンク

- [{% data variables.product.prodname_projects_v1 %}について](/articles/about-project-boards)
- 「[{% data variables.product.prodname_project_v1 %}の削除](/articles/deleting-a-project-board)」
- 「[リポジトリの{% data variables.product.prodname_projects_v1 %}の無効化](/articles/disabling-project-boards-in-a-repository)」
- 「[Organization内の{% data variables.product.prodname_projects_v1 %}の無効化](/articles/disabling-project-boards-in-your-organization)」
- 「[Organizationの{% data variables.product.prodname_project_v1_caps %}の権限](/articles/project-board-permissions-for-an-organization)」
