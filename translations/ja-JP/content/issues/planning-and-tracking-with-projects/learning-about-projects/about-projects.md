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
ms.openlocfilehash: 3190379652fe1c95b8ea6ec7f864c44b72d9a7f7
ms.sourcegitcommit: f5ec7f52d2945ba8b7c14f8f604e4784a8feda19
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180762'
---
## {% data variables.product.prodname_projects_v2 %} について

プロジェクトは、作業の計画と追跡を効果的に行えるように {% data variables.product.company_short %} 上の issue および pull request と統合できる、適応性のあるスプレッドシートです。 issue と pull request をフィルター処理、並べ替え、グループ化して複数のビューを作成し、チーム固有のメタデータを追跡するカスタム フィールドを追加してカスタマイズしたうえで、構成可能なグラフを使って作業を視覚化できます。 プロジェクトには、特定の手法を適用するのではなく、チームのニーズやプロセスに合わせてカスタマイズできる柔軟な機能があります。

### 最新の状態に保つ

プロジェクトは、追加した issue と pull request から構築され、プロジェクトと作業の間に直接参照が作成されます。 変更を加えると情報がプロジェクトに自動的に同期され、ビューとグラフが更新されます。 この統合は双方向なので、pull reqeust や issue に関する情報をプロジェクト内で変更すると、その pull request や issue にはその情報が反映されます。 たとえば、プロジェクトの担当者を変更すると、その変更が issue に表示されます。 この統合をさらに進め、担当者別にプロジェクトをグループ化し、issue を別のグループにドラッグして issue の割り当てを変更できます。

### 項目へのメタデータの追加

カスタム フィールドを使用し、issue、pull request、ドラフト issue にメタデータを追加し、項目属性のより豊富なビューを作成できます。 issue や pull request に関して、現時点で存在している組み込みのメタデータ (担当者、マイルストーン、ラベルなど) に限定されるわけではありません。 たとえば、カスタム フィールドとして次のメタデータを追加できます。

- ターゲット出荷日を追跡する日付フィールド。
- タスクの複雑さを追跡する数値フィールド。
- タスクの優先度が低、中、高のいずれかであるかを追跡する選択フィールド。
- クイック メモを追加できるテキスト フィールド。
- 週単位で作業計画を立てるためのイテレーション フィールド (休憩のサポートを含む)。

{% ifversion projects-v2-tasklists %}

### issue 間の関係を調べる

{% data reusables.projects.tasklists-release-stage %}

タスクリストを使用し、issue の階層を構築したり、issue を小さなサブタスクに分割したり、issue 間に新しいリレーションシップを作成したりできます。 詳細については、「[タスクリストについて](/issues/tracking-your-work-with-issues/about-tasklists)」を参照してください。

これらの関係は、issue に加え、プロジェクトの "追跡対象" フィールドと "追跡" フィールドに表示されます。 別の issue によって追跡されている issue 別にフィルター処理できます。また、"追跡対象" フィールドでテーブル表示をグループ化し、すべての親 issue とそのサブタスクのリストを表示できます。

{% endif %}

### 様々な観点からプロジェクトを見る

必要な情報が提供されるようにプロジェクト ビューを調整し、最も差し迫った質問にすばやく答えます。 これらのビューは、必要に応じてすばやく戻ることができるように保存し、チームで使用できます。 ビューを使用すると、一覧表示される項目を絞り込むことができるだけでなく、2 つの異なるレイアウト オプションも提供されます。

プロジェクトは、高密度のテーブルレイアウトで表示できます。

![プロジェクトのテーブル](/assets/images/help/issues/projects_table.png)

あるいはボードとして表示できます。

![Project ボード](/assets/images/help/issues/projects_board.png)

プロジェクトの特定の側面に注目しやすくするために、アイテムをグループ化、ソート、フィルタできます。

![プロジェクト ビュー](/assets/images/help/issues/project_view.png)

詳しくは、「[ビューのカスタマイズ](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view)」を参照してください。
