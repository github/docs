---
title: '{% data variables.product.prodname_projects_v1 %}の自動化について'
intro: '{% data variables.projects.projects_v1_board %}カードのステータスと、関連するIssue及びPull Requestとの同期を保つための自動化ワークフローを設定できます。'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/about-automation-for-project-boards
  - /articles/about-automation-for-project-boards
  - /github/managing-your-work-on-github/about-automation-for-project-boards
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: '{% data variables.product.prodname_projects_v1 %}の自動化'
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

{% data reusables.project-management.automate-project-board-permissions %} 詳しい情報については[Organizationの{% data variables.product.prodname_projects_v1_caps %}の権限](/articles/project-board-permissions-for-an-organization)」を参照してください。

アクションを、{% data variables.projects.projects_v1_board %}の列に対するイベントによるトリガーに基づいて自動化できます。 これによって、{% data variables.projects.projects_v1_board %}の管理のための主導のタスクの一部を削減できます。 例えば、{% data variables.projects.projects_v1_board %}に対して新しいIssueやPull Requestを追加する"To do"列が、自動的に設定された列に移動されるように設定できます。 詳しい情報については「[{% data variables.product.prodname_projects_v1 %}の自動化の設定](/articles/configuring-automation-for-project-boards)」を参照してください。

{% data reusables.project-management.use-automated-template %}

{% data reusables.project-management.copy-project-boards %}

{% data variables.projects.projects_v1_board_caps %}の自動化は、特定のアクションに対する標準化されたワークフローを作成することによって、Teamが{% data variables.projects.projects_v1_board %}の目的とTeamの開発プロセスの共通理解を促進するための役にも立ちます。

{% data reusables.project-management.resync-automation %}

## 自動化のオプション

| プリセットの列     | 設定オプション                   |
| ----------- | ------------------------- |
| To do       | <ul><li>新しく追加されたすべてのIssuleをここに移動させる</li><li>新しく追加されたすべてのプルリクエストをここに移動させる</li><li>再オープンされたすべてのIssueをここに移動させる</li><li>再オープンされたすべてのプルリクエストをここに移動させる</li></ul> |
| In progress | <ul><li>新たにオープンされたすべてのプルリクエストをここに移動させる</li><li>再オープンされたすべてのIssueをここに移動させる</li><li>再オープンされたすべてのプルリクエストをここに移動させる</li><li>ベースブランチが要求する最小のレビュー数を満たしたすべてのプルリクエストをここに移動させる</li><li>ベースブランチが要求する最小のレビュー数を満たさなくなったすべてのプルリクエストをここに移動させる</li></ul> |
| 完了          | <ul><li>クローズされたすべてのIssueをここに移動させる</li><li>マージされたすべてのプルリクエストをここに移動させる</li><li>マージされずにクローズされたすべてのプルリクエストをここに移動させる</li></ul> |

## プロジェクトの進捗の追跡

{% data variables.projects.projects_v1_board %}の進捗を追跡できます。 [To do]、[In progress]、または [Done] 列のカードの数は、プロジェクトの進捗全体にカウントされます。 {% data reusables.project-management.project-progress-locations %}

詳しい情報については「[{% data variables.product.prodname_project_v1 %}の進捗の追跡](/github/managing-your-work-on-github/tracking-progress-on-your-project-board)」を参照してください。

## 参考リンク
- 「[{% data variables.product.prodname_projects_v1 %}の自動化の設定](/articles/configuring-automation-for-project-boards)」{% ifversion fpt or ghec %}
- 「[{% data variables.product.prodname_project_v1 %}のコピー](/articles/copying-a-project-board)」{% endif %}
