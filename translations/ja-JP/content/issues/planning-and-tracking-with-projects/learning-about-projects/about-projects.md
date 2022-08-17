---
title: '{% data variables.product.prodname_projects_v2 %}について'
intro: '{% data variables.product.prodname_projects_v2 %}は、{% data variables.product.company_short %}上の作業の計画と追跡のための、適応性のある柔軟なツールです。'
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/about-projects
type: overview
topics:
  - Projects
---

## {% data variables.product.prodname_projects_v2 %}について

プロジェクトは、{% data variables.product.company_short %}上のIssueやPull Requestと統合された適応性のあるスプレッドシートで、作業を効果的に計画し、追跡するのに役立ちます。 IssueやPull Requestをフィルタリングし、ソートし、グループ化して、チーム固有のメタデータを追跡するためのカスタムフィールドを追加し、設定可能なグラフで作業を可視化することによって、複数のビューを作成してカスタマイズできます。 プロジェクトは、特定の方法論を強制するのではなく、チームの要求やプロセスに合わせてカスタマイズ可能な重要な機能を提供します。

### 最新の状態に保つ

プロジェクトは追加するIssueやPull Requestから構築され、プロジェクトと作業の間に直接の参照を作成します。 情報は変更があるたびにプロジェクトと自動的に同期され、ビューやグラフが更新されます。 この統合は双方向なので、Pull ReqeustやIssueに関する情報をプロジェクトから変更すると、そのPull RequestやIssueにはその情報が反映されます。 たとえばプロジェクトでアサインされた人を変更すると、その変更はIssueでも表示されます。 この統合をさらに推し進め、プロジェクトをアサインされた人でグループ化し、Issueを他のグループにドラッグすることによってIssueにアサインされた人を変更できます。

### タスクへのメタデータの追加

カスタムフィールドを使って、タスクにメタデータを追加し、アイテムの属性のより豊かなビューを構築できます。 IssueやPull Requestに現在存在するビルトインのメタデータ（アサインされた人、マイルストーン、ラベルなど）に限定はされません。 たとえば、以下のメタデータをカスタムフィールドとして追加できます:

- ターゲットの出荷日を追跡する日付フィールド。
- タスクの複雑さを追跡する数値フィールド。
- タスクの優先度が低、中、高なのかを追跡するための単一選択フィールド。
- クイックノートを追加するためのテキストフィールド。
- 休憩のサポートを含め、作業を週単位で計画するための繰り返しフィールド。

### 様々な観点からプロジェクトを見る

必要な情報が得られるようにプロジェクトのビューを調整して、最も差し迫った疑問に素早く答えてください。 それらのビューを保存して、必要なときにすぐに戻れるように、そしてチームでそれらを利用できるようにすることができます。 ビューはリストされたアイテムだけを対象とするだけでなく、2つの異なるレイアウトの選択肢も提供します。

プロジェクトは、高密度のテーブルレイアウトで表示できます。

![プロジェクトのテーブル](/assets/images/help/issues/projects_table.png)

あるいはボードとして表示できます。

![プロジェクトボード](/assets/images/help/issues/projects_board.png)

プロジェクトの特定の側面に注目しやすくするために、アイテムをグループ化、ソート、フィルタできます。

![プロジェクトのビュー](/assets/images/help/issues/project_view.png)

詳しい情報については「[ビューのカスタマイズ](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view)」を参照してください。
