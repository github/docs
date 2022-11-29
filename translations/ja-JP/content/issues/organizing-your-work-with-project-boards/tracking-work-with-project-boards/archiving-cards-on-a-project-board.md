---
title: '{% data variables.product.prodname_project_v1 %}でのカードのアーカイブ'
intro: '{% data variables.projects.projects_v1_board %}のカードをアーカイブすることにより、プロジェクトの履歴コンテキストを失うことなくワークフローを整理できます。'
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-project-boards/archiving-cards-on-a-project-board
  - /articles/archiving-cards-on-a-project-board
  - /github/managing-your-work-on-github/archiving-cards-on-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Archive cards on {% data variables.product.prodname_project_v1 %}'
allowTitleToDifferFromFilename: true
ms.openlocfilehash: bef90f56a55d6d087c21603586def91ec2f1c9ed
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109691'
---
{% data reusables.projects.project_boards_old %}

{% data variables.projects.projects_v1_board %}の自動化は、アーカイブされた{% data variables.projects.projects_v1_board %} カードには適用されません。 たとえば{% data variables.projects.projects_v1_board %}のアーカイブで issue をクローズしても、アーカイブされたカードは自動的に [完了] 列には移動されません。 {% data variables.projects.projects_v1_board %} アーカイブからカードを復元すると、そのカードはアーカイブされていた列に戻ります。

## {% data variables.projects.projects_v1_board %}でのカードのアーカイブ

1. {% data variables.projects.projects_v1_board %}で、アーカイブしたいカードを見つけて {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} をクリックします。
![プロジェクト ボード カードを編集するためのオプションの一覧](/assets/images/help/projects/select-archiving-options-project-board-card.png)
2. **[アーカイブ]** をクリックします。
![メニューからアーカイブ オプションを選択する](/assets/images/help/projects/archive-project-board-card.png)

## サイドバーから{% data variables.projects.projects_v1_board %}のカードを復元する

{% data reusables.project-management.click-menu %}
2. {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} をクリックし、 **[アーカイブの表示]** をクリックします。
  ![メニューから [アーカイブの表示] オプションを選択する](/assets/images/help/projects/select-view-archive-option-project-board-card.png)
3. アーカイブ解除する{% data variables.projects.projects_v1_board %} カードの上にある **[復元]** をクリックします。
  ![プロジェクト ボード カードの復元を選択する](/assets/images/help/projects/restore-card.png)
