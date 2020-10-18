---
title: プロジェクトボードの自動化について
intro: プロジェクトボードカードのステータスを関連するIssueやプルリクエストと同期させておくために、自動化されたワークフローを設定できます。
redirect_from:
  - /articles/about-automation-for-project-boards
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% data reusables.project-management.automate-project-board-permissions %} 詳細は「[Organization のプロジェクトボードの権限](/articles/project-board-permissions-for-an-organization)」を参照してください。

プロジェクトボードの列に対するトリガーとなるイベントに基づいて、アクションを自動化できます。 これによって、プロジェクトボードを管理するための手作業のタスクの一部を撤廃できます。 たとえば"To do"列を設定して、プロジェクトボードに追加された新しいIssueあるいはプルリクエストが自動的に設定された列に移動するようにできます。 詳しい情報については[プロジェクトボードのための自動化の設定](/articles/configuring-automation-for-project-boards)を参照してください。

{% data reusables.project-management.use-automated-template %}

{% data reusables.project-management.copy-project-boards %}

プロジェクトボードの自動化は、特定のアクションに対する標準化されたワークフローを作成することによって、プロジェクトボードの目的とTeamの開発プロセスの共通理解を育むための役にも立ちます。

{% data reusables.project-management.resync-automation %}

### 自動化のオプション

| プリセットの列     | 設定オプション                   |
| ----------- | ------------------------- |
| To do       | <ul><li>新しく追加されたすべてのIssuleをここに移動させる</li><li>新しく追加されたすべてのプルリクエストをここに移動させる</li><li>再オープンされたすべてのIssueをここに移動させる</li><li>再オープンされたすべてのプルリクエストをここに移動させる</li></ul> |
| In progress | <ul><li>新たにオープンされたすべてのプルリクエストをここに移動させる</li><li>再オープンされたすべてのIssueをここに移動させる</li><li>再オープンされたすべてのプルリクエストをここに移動させる</li><li>ベースブランチが要求する最小のレビュー数を満たしたすべてのプルリクエストをここに移動させる</li><li>ベースブランチが要求する最小のレビュー数を満たさなくなったすべてのプルリクエストをここに移動させる</li></ul> |
| 完了          | <ul><li>クローズされたすべてのIssueをここに移動させる</li><li>マージされたすべてのプルリクエストをここに移動させる</li><li>マージされずにクローズされたすべてのプルリクエストをここに移動させる</li></ul> |

### プロジェクトの進捗の追跡
プロジェクトボードの自動化によって、デフォルトで進捗を追跡できるようになります。 "To do"、"In progress"、"Done" がプリセットされた列内のカードは、プロジェクト全体の進捗に対してカウントされます。 {% data reusables.project-management.project-progress-locations %}

### 参考リンク
- "[Configuring automation for project boards](/articles/configuring-automation-for-project-boards)"{% if currentVersion == "free-pro-team@latest" %}
- [プロジェクトボードのコピー](/articles/copying-a-project-board)
{% endif %}
