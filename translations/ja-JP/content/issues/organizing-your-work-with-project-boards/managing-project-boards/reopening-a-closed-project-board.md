---
title: 'クローズされた{% data variables.product.prodname_project_v1 %}の再オープン'
intro: 'クローズされた{% data variables.projects.projects_v1_board %}を再オープンし、その{% data variables.projects.projects_v1_board %}で設定されたワークフローの自動化を再起動できます。'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/reopening-a-closed-project-board
  - /articles/reopening-a-closed-project-board
  - /github/managing-your-work-on-github/reopening-a-closed-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: '{% data variables.product.prodname_project_v1 %}の再オープン'
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

{% data variables.projects.projects_v1_board %}をクローズすると、{% data variables.projects.projects_v1_board %}で設定されたワークフローの自動化はデフォルトで一時停止されます。 詳しい情報については「[{% data variables.product.prodname_project_v1 %}のクローズ](/articles/closing-a-project-board)」を参照してください。

{% data variables.projects.projects_v1_board %}を再オープンすると、自動化を*同期*するオプションがあります。これは、ボード上のカードの位置を、ボードで設定された自動か設定に従って更新するものです。

1. 再オープンしたい{% data variables.projects.projects_v1_board %}にアクセスしてください。
{% data reusables.project-management.click-menu %}
3. {% data variables.projects.projects_v1_board %}の自動化を同期するか、あるいは同期なしで{% data variables.projects.projects_v1_board %}を再オープンするかを選択してください。
    - {% data variables.projects.projects_v1_board %}を再オープンして自動化を同期するには、**Reopen and sync project（プロジェクトを再オープンして同期）**をクリックしてください。 !["Reopen and resync project" ボタンの選択](/assets/images/help/projects/reopen-and-sync-project.png)
    - {% data variables.projects.projects_v1_board %}を自動化の同期なしで再オープンするには、再オープンのドロップダウンメニューを使い、**Reopen only（再オープンのみ）**をクリックしてください。 続いて、[**Reopen only**] をクリックします。 ![クローズ済みプロジェクトボード再オープンドロップダウンメニュー](/assets/images/help/projects/reopen-closed-project-board-drop-down-menu.png)

## 参考リンク

- 「[{% data variables.product.prodname_projects_v1 %}の自動化の設定](/articles/configuring-automation-for-project-boards)」
