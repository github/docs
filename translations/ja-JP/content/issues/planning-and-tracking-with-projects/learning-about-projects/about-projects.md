---
title: '{% data variables.product.prodname_projects_v2 %} について'
intro: '{% data variables.product.prodname_projects_v2 %} は、{% data variables.product.company_short %} での作業を計画および追跡するための、適応性のある柔軟なツールです。'
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/about-projects
type: overview
topics:
  - Projects
ms.openlocfilehash: f50d54b95862102eafe97dcf1dfcec4daa1d7995
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147424156'
---
## {% data variables.product.prodname_projects_v2 %} について

プロジェクトは、作業の計画と追跡を効果的に行えるように {% data variables.product.company_short %} 上の issue および pull request と統合できる、適応性のあるスプレッドシートです。 issue と pull request をフィルター処理、並べ替え、グループ化して複数のビューを作成し、チーム固有のメタデータを追跡するカスタム フィールドを追加してカスタマイズしたうえで、構成可能なグラフを使って作業を視覚化できます。 プロジェクトには、特定の手法を適用するのではなく、チームのニーズやプロセスに合わせてカスタマイズできる柔軟な機能があります。

### 最新の状態に保つ

プロジェクトは、追加した issue と pull request から構築され、プロジェクトと作業の間に直接参照が作成されます。 変更を加えると情報がプロジェクトに自動的に同期され、ビューとグラフが更新されます。 この統合は双方向なので、pull reqeust や issue に関する情報をプロジェクト内で変更すると、その pull request や issue にはその情報が反映されます。 たとえば、プロジェクトの担当者を変更すると、その変更が issue に表示されます。 この統合をさらに進め、担当者別にプロジェクトをグループ化し、issue を別のグループにドラッグして issue の割り当てを変更できます。

### タスクへのメタデータの追加

カスタム フィールドを使用して、タスクにメタデータを追加し、項目属性のより豊富なビューを作成できます。 issue や pull request に関して、現時点で存在している組み込みのメタデータ (担当者、マイルストーン、ラベルなど) に限定されるわけではありません。 たとえば、カスタム フィールドとして次のメタデータを追加できます。

- ターゲット出荷日を追跡する日付フィールド。
- タスクの複雑さを追跡する数値フィールド。
- タスクの優先度が低、中、高のいずれかであるかを追跡する選択フィールド。
- クイック メモを追加できるテキスト フィールド。
- 週単位で作業計画を立てるためのイテレーション フィールド (休憩のサポートを含む)。

### 様々な観点からプロジェクトを見る

必要な情報が提供されるようにプロジェクト ビューを調整し、最も差し迫った質問にすばやく答えます。 これらのビューは、必要に応じてすばやく戻ることができるように保存し、チームで使用できます。 ビューを使用すると、一覧表示される項目を絞り込むことができるだけでなく、2 つの異なるレイアウト オプションも提供されます。

プロジェクトは、高密度のテーブルレイアウトで表示できます。

![プロジェクトのテーブル](/assets/images/help/issues/projects_table.png)

あるいはボードとして表示できます。

![Project ボード](/assets/images/help/issues/projects_board.png)

プロジェクトの特定の側面に注目しやすくするために、アイテムをグループ化、ソート、フィルタできます。

![プロジェクト ビュー](/assets/images/help/issues/project_view.png)

詳しくは、「[ビューのカスタマイズ](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view)」を参照してください。
