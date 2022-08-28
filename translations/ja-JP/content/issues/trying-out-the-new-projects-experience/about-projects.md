---
title: プロジェクト（ベータ）について
intro: 'プロジェクトは、{% data variables.product.company_short %}上の作業の計画と追跡のための、カスタマイズ可能で柔軟なツールです。'
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
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

### 様々な観点からプロジェクトを見る

プロジェクトは、高密度のテーブルレイアウトで表示できます。

![プロジェクトのテーブル](/assets/images/help/issues/projects_table.png)

あるいはボードとして表示できます。

![プロジェクトボード](/assets/images/help/issues/projects_board.png)

プロジェクトの特定の側面に注目しやすくするために、アイテムをグループ化、ソート、フィルタできます。

![プロジェクトのビュー](/assets/images/help/issues/project_view.png)

詳しい情報については「[プロジェクトのビューのカスタマイズ](/issues/trying-out-the-new-projects-experience/customizing-your-project-views)」を参照してください。

### コマンドパレットでの作業

コマンドパレットを使って、素早くビューを変更したり、フィールドを追加したりできます。 コマンドパレットは、カスタムキーボードショートカットを覚えておかなくてもいいようにガイドしてくれます。 詳しい情報については「[プロジェクトのビューのカスタマイズ](/issues/trying-out-the-new-projects-experience/customizing-your-project-views)」を参照してください。

### プロジェクト管理タスクの自動化

GraphQL API及び{% data variables.product.prodname_actions %}を使って、ルーチンのプロジェクト管理タスクを自動化できます。 詳しい情報については「[APIを使ったプロジェクトの管理](/issues/trying-out-the-new-projects-experience/using-the-api-to-manage-projects)」及び「[プロジェクトの自動化](/issues/trying-out-the-new-projects-experience/automating-projects)」を参照してください。

## プロジェクト（ベータ）と非ベータのプロジェクトの比較

プロジェクト（ベータ）は、カスタマイズ可能な新しいバージョンのプロジェクトです。 プロジェクト（ベータ）は、現在限定数のベータユーザだけが利用可能です。 非ベータバージョンのプロジェクトは、すべてのユーザが利用できます。 ベータについて学ぶには、[{% data variables.product.prodname_github_issues %}](https://github.com/features/issues)を参照してください。 非ベータバージョンのプロジェクトについてさらに学ぶには、「[プロジェクトボードでの作業の整理](/issues/organizing-your-work-with-project-boards)」を参照してください。

## フィードバックを送る

プロジェクト（ベータ）に関するフィードバックを{% data variables.product.company_short %}を共有できます。 会話に参加するには[フィードバックの会話](https://github.com/github/feedback/discussions/categories/issues-feedback)を参照してください。
