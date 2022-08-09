---
title: '{% data variables.product.prodname_project_v1 %}上のカードのアーカイブ'
intro: '{% data variables.projects.projects_v1_board %}カードをアーカイブして、プロジェクトの履歴のコンテキストを失うことなくワークフローを整理できます。'
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-project-boards/archiving-cards-on-a-project-board
  - /articles/archiving-cards-on-a-project-board
  - /github/managing-your-work-on-github/archiving-cards-on-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: '{% data variables.product.prodname_project_v1 %}上のカードのアーカイブ'
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

{% data variables.projects.projects_v1_board %}内の自動化は、アーカイブされた{% data variables.projects.projects_v1_board %}カードには適用されません。 たとえば、{% data variables.projects.projects_v1_board %}のアーカイブ内のIssueをクローズしても、アーカイブされたカードは自動的に"Done"列に移動しません。 カードを{% data variables.projects.projects_v1_board %}アーカイブから復元すれば、そのカードはアーカイブされたときの列に戻ります。

## {% data variables.projects.projects_v1_board %}上のカードのアーカイブ

1. {% data variables.projects.projects_v1_board %}で、アーカイブしたいカードを見つけて {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} をクリックします。 ![プロジェクトボードカードの編集オプションのリスト](/assets/images/help/projects/select-archiving-options-project-board-card.png)
2. [**Archive**] をクリックします。 ![メニューからのアーカイブオプションの選択](/assets/images/help/projects/archive-project-board-card.png)

## サイドバーからの{% data variables.projects.projects_v1_board %}上のカードの復元

{% data reusables.project-management.click-menu %}
2. {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} をクリックし、続いて [** View archive**] をクリックします。 ![メニューからのアーカイブの表示オプションの選択](/assets/images/help/projects/select-view-archive-option-project-board-card.png)
3. アーカイブを解除したい{% data variables.projects.projects_v1_board %}カードの上の**Restore（復元）**をクリックしてください。 ![プロジェクトボードカードのリストアの選択](/assets/images/help/projects/restore-card.png)
