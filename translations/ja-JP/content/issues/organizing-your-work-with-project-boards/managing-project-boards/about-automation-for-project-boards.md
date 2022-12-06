---
title: '{% data variables.product.prodname_projects_v1 %} の自動化について'
intro: '{% data variables.projects.projects_v1_board %} カードの状態を関連する issue や pull request と同期させておくために、自動化されたワークフローを設定できます。'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/about-automation-for-project-boards
  - /articles/about-automation-for-project-boards
  - /github/managing-your-work-on-github/about-automation-for-project-boards
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Automation for {% data variables.product.prodname_projects_v1 %}'
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 28c4719cca14dff54d971b9a081837c172f4da76
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108982'
---
{% data reusables.projects.project_boards_old %}

{% data reusables.project-management.automate-project-board-permissions %}  詳しくは、「[Organization の {% data variables.product.prodname_projects_v1_caps %}権限](/articles/project-board-permissions-for-an-organization)」を参照してください。

{% data variables.projects.projects_v1_board %} 列のイベントのトリガーに基づいてアクションを自動化できます。 これにより、{% data variables.projects.projects_v1_board %}を管理する際の手動タスクの一部が不要になります。 たとえば "To do" 列を設定して、{% data variables.projects.projects_v1_board %}に追加された新しい issues または pull request が設定された列に自動的に移動するようにできます。 詳しくは、「[{% data variables.product.prodname_projects_v1 %} の自動化の構成](/articles/configuring-automation-for-project-boards)」を参照してください。  

{% data reusables.project-management.use-automated-template %}

{% data reusables.project-management.copy-project-boards %}

また、{% data variables.projects.projects_v1_board_caps %}の自動化は、特定のアクションの標準ワークフローを作成することで、チームが{% data variables.projects.projects_v1_board %}の目的とチームの開発プロセスに関する共有の理解を深めるのにも役立ちます。

{% data reusables.project-management.resync-automation %}

## Automation オプション

| プリセットの列 | 構成オプション |
| --- | --- |
| To Do | <ul><li>新しく追加されたすべてのIssuleをここに移動させる</li><li>新しく追加されたすべてのプルリクエストをここに移動させる</li><li>再オープンされたすべてのIssueをここに移動させる</li><li>再オープンされたすべてのプルリクエストをここに移動させる</li></ul> |
| 進行中 | <ul><li>新たにオープンされたすべてのプルリクエストをここに移動させる</li><li>再オープンされたすべてのIssueをここに移動させる</li><li>再オープンされたすべてのプルリクエストをここに移動させる</li><li>ベースブランチが要求する最小のレビュー数を満たしたすべてのプルリクエストをここに移動させる</li><li>ベースブランチが要求する最小のレビュー数を満たさなくなったすべてのプルリクエストをここに移動させる</li></ul> |
| 完了 | <ul><li>クローズされたすべてのIssueをここに移動させる</li><li>マージされたすべてのプルリクエストをここに移動させる</li><li>マージされずにクローズされたすべてのプルリクエストをここに移動させる</li></ul> |

## プロジェクトの進捗の追跡

{% data variables.projects.projects_v1_board %}の進行状況を追跡できます。 [To do]、[In progress]、または [Done] 列のカードの数は、プロジェクトの進捗全体にカウントされます。 {% data reusables.project-management.project-progress-locations %}

詳しくは、「[{% data variables.product.prodname_project_v1 %}の進行状況の追跡](/github/managing-your-work-on-github/tracking-progress-on-your-project-board)」を参照してください。

## 参考資料
- 「[{% data variables.product.prodname_projects_v1 %} の自動化の構成](/articles/configuring-automation-for-project-boards)」{% ifversion fpt or ghec %}
- 「[{% data variables.product.prodname_project_v1 %}のコピー](/articles/copying-a-project-board)」{% endif %}
