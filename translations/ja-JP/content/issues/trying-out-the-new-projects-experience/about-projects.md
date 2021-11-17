---
title: プロジェクト（ベータ）について
intro: 'プロジェクトは、{% data variables.product.company_short %}上の作業の計画と追跡のための、カスタマイズ可能で柔軟なツールです。'
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Projects
---

{% data reusables.projects.projects-beta %}

## プロジェクトについて

プロジェクトは、{% data variables.product.company_short %}上のIssue及びPull Requestと統合された、カスタマイズ可能なスプレッドシートです。 IssueやPull Requestのフィルタリング、ソート、グループ化によってレイアウトをカスタマイズできます。 また、カスタムフィールドを追加してメタデータを追跡することもできます。 プロジェクトは柔軟で、チームが最適な方法で作業できるようにします。

### 最新の状態に保つ

プロジェクトは、{% data variables.product.company_short %}上の情報に対して常に最新の状態を保ちます。 Pull RequestやIssueが変更されると、プロジェクトにはその変更が反映されます。 この統合は双方向なので、Pull ReqeustやIssueに関する情報をプロジェクトから変更すると、そのPull RequestやIssueにはその情報が反映されます。

### タスクへのメタデータの追加

カスタムのフィールドを使ってタスクにメタデータを追加できます。 たとえば、以下のメタデータを追跡できます。

- ターゲットの出荷日を追跡する日付フィールド
- タスクの複雑さを追跡する数値フィールド
- タスクの優先度が低、中、高なのかを追跡するための単一選択フィールド
- クイックノートを追跡するテキストフィールド
- an iteration field to plan work week-by-week

### 様々な観点からプロジェクトを見る

プロジェクトは、高密度のテーブルレイアウトで表示できます。

![プロジェクトのテーブル](/assets/images/help/issues/projects_table.png)

あるいはボードとして表示できます。

![プロジェクトボード](/assets/images/help/issues/projects_board.png)

プロジェクトの特定の側面に注目しやすくするために、アイテムをグループ化、ソート、フィルタできます。

![プロジェクトのビュー](/assets/images/help/issues/project_view.png)

詳しい情報については「[プロジェクトのビューのカスタマイズ](/issues/trying-out-the-new-projects-experience/customizing-your-project-views)」を参照してください。

### Working with the project command palette

You can use the project command palette to quickly change views or add fields. コマンドパレットは、カスタムキーボードショートカットを覚えておかなくてもいいようにガイドしてくれます。 詳しい情報については「[プロジェクトのビューのカスタマイズ](/issues/trying-out-the-new-projects-experience/customizing-your-project-views)」を参照してください。

### プロジェクト管理タスクの自動化

Projects (beta) offers built-in workflows. For example, when an issue is closed, you can automatically set the status to "Done." You can also use the GraphQL API and {% data variables.product.prodname_actions %} to automate routine project management tasks. For more information, see "[Automating projects](/issues/trying-out-the-new-projects-experience/automating-projects)" and "[Using the API to manage projects](/issues/trying-out-the-new-projects-experience/using-the-api-to-manage-projects)."

## プロジェクト（ベータ）と非ベータのプロジェクトの比較

プロジェクト（ベータ）は、カスタマイズ可能な新しいバージョンのプロジェクトです。 非ベータバージョンのプロジェクトについてさらに学ぶには、「[プロジェクトボードでの作業の整理](/issues/organizing-your-work-with-project-boards)」を参照してください。

## フィードバックを送る

プロジェクト（ベータ）に関するフィードバックを{% data variables.product.company_short %}を共有できます。 会話に参加するには[フィードバックの会話](https://github.com/github/feedback/discussions/categories/issues-feedback)を参照してください。
