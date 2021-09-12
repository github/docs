---
title: プロジェクトボードの自動化について
intro: プロジェクトボードカードのステータスを関連するIssueやプルリクエストと同期させておくために、自動化されたワークフローを設定できます。
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/about-automation-for-project-boards
  - /articles/about-automation-for-project-boards
  - /github/managing-your-work-on-github/about-automation-for-project-boards
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
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

進捗は、プロジェクトボードで追跡できます。 [To do]、[In progress]、または [Done] 列のカードの数は、プロジェクトの進捗全体にカウントされます。 {% data reusables.project-management.project-progress-locations %}

詳細については「[プロジェクトボードで進捗を追跡する](/github/managing-your-work-on-github/tracking-progress-on-your-project-board)」を参照してください。

### 参考リンク
- [プロジェクトボードの自動化を設定する](/articles/configuring-automation-for-project-boards){% if currentVersion == "free-pro-team@latest" %}
- [プロジェクトボードのコピー](/articles/copying-a-project-board)
{% endif %}
