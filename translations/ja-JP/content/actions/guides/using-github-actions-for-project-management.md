---
title: GitHub Actions をプロジェクト管理に使用する
intro: '{% data variables.product.prodname_actions %} を使用して、プロジェクト管理タスクの多くを自動化できます。'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: overview
topics:
  - Project management
---

{% data variables.product.prodname_actions %} を使用してワークフローを作成することで、プロジェクト管理タスクを自動化できます。 各ワークフローには、ワークフローが実行されるたびに自動的に実行される一連のタスクが含まれています。 たとえば、Issue が作成されるたびに実行されるワークフローを作成して、ラベルを追加したり、コメントを残したり、Issue をプロジェクトボードに移動したりすることができます。

### ワークフローはいつ実行されますか？

ワークフローをスケジュールで実行するか、イベント発生時にトリガーされるようにするかを設定できます。 たとえば、誰かがリポジトリに Issue を作成したときに実行するようにワークフローを設定できます。

多くのワークフロートリガーは、プロジェクト管理を自動化するのに役立ちます。

- Issue がオープン、割り当て済、ラベルが付けられたとき。
- Issue にコメントが追加されたとき。
- プロジェクトカードが作成または移動したとき。
- スケジュールされた時刻がきたとき。

ワークフローをトリガーできるイベントの完全なリストについては、「[ワークフローをトリガーするイベント](/actions/reference/events-that-trigger-workflows)」を参照してください。

### ワークフローでは何ができますか？

ワークフローでは、Issue へのコメント、ラベルの追加または削除、プロジェクトボード上のカードの移動、Issue のオープンなど、多くのことを実行できます。

これらのチュートリアルには、ニーズに合わせて調整できるワークフローの例が含まれており、プロジェクト管理における {% data variables.product.prodname_actions %} の使用方を学ぶことができます。

- 「[Issue にラベルを追加する](/actions/guides/adding-labels-to-issues)」
- 「[プロジェクトボードの列にカードが追加されたときにラベルを削除する](/actions/guides/removing-a-label-when-a-card-is-added-to-a-project-board-column)」
- 「[プロジェクトボードで割り当てられたIssue を移動する](/actions/guides/moving-assigned-issues-on-project-boards)」
- 「[ラベルが追加されたときに Issue についてコメントする](/actions/guides/commenting-on-an-issue-when-a-label-is-added)」
- 「[非アクティブな Issue を解決する](/actions/guides/closing-inactive-issues)」
- 「[Issue 作成をスケジュールする](/actions/guides/scheduling-issue-creation)」
