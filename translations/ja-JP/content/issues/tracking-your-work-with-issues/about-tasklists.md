---
title: タスクリストについて
intro: タスクリストを使用して、issue をより小さなサブタスクに分割できます。
versions:
  feature: projects-v2-tasklists
miniTocMaxHeadingLevel: 3
redirect_from:
  - /early-access/issues/about-tasklists
ms.openlocfilehash: 69cdde1bb071f963b1a2f58ef1227bc96ab9d869
ms.sourcegitcommit: f5ec7f52d2945ba8b7c14f8f604e4784a8feda19
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180786'
---
{% data reusables.projects.tasklists-release-stage %}

## タスクリストについて

タスクリストでは、{% data variables.product.product_name %} に関する issue の階層のサポートが追加され、issue の追跡、issue のより小さなサブタスクへの分割、issue 間の新しいリレーションシップの作成に役立ちます。

タスクリストは、[ベータ タスク リスト](/get-started/writing-on-github/working-with-advanced-formatting/about-task-lists)の以前のイテレーションに基づいて構築され、項目を issue に変換し、タスクリストの進行状況を表示し、issue 間の "追跡/追跡対象" リレーションシップを作成する機能が保持されます。

タスクリストに追加した issue は、担当者と適用されたラベルを表示するために自動的に設定されます。

![動作中のタスクリストを示す画像](/assets/images/help/issues/tasklist-hero.png)

### {% data variables.projects.projects_v2 %} との統合について

 プロジェクトのサイドパネルでは階層内の issue の場所が階層リンク メニューに表示され、タスクリストに含まれる issue 間を移動できます。 "追跡" フィールドと "追跡対象" フィールドをプロジェクト ビューに追加して、issue 間のリレーションシップをすばやく確認することもできます。 詳しくは、「[追跡と追跡対象フィールドについて](/issues/planning-and-tracking-with-projects/understanding-fields/about-tracks-and-tracked-by-fields)」を参照してください

## タスクリストの作成

issue の説明で Markdown を使って、タスクリストを作成できます。 フェンスされたコード ブロックを作成し、開くバッククォートの横に `[tasklist]` を含めます。 次に、各項目の先頭に `- [ ]` を付け、他の issue やテキストへのリンクを含めることができます。 必要に応じて、リストの上部に Markdown ヘッダーとしてタイトルを含めることができます。 

````
```[tasklist]
### Tasks
- [ ] https://github.com/octo-org/octo-repo/issues/45
- [ ] Draft issue title
```
````
Markdown は、{% data variables.product.product_name %} によってタスクリストとしてレンダリングされます。 その後、UI を使用して変更を加え、issue とドラフト issue を追加できます。 issue の説明を編集する場合、Markdown を直接変更することも、Markdown をコピーして他の issue のタスクリストを複製することもできます。

書式設定ツールバーの {% octicon "checklist" aria-label="The checklist icon" %} をクリックして、新しい issue を作成するときや issue の説明を編集するときにタスクリストを挿入することもできます。

![[タスクリストの追加] ボタンを示すスクリーンショット](/assets/images/help/issues/tasklist-formatting-toolbar.png)

## タスクリストへの issue の追加

1. タスクリストの下部にある **[タスクに項目を追加する]** をクリックします。
   
   ![[タスクに項目を追加する] ボタンを示すスクリーンショット](/assets/images/help/issues/add-new-tasklist-button.png)
   
1. タスクリストに追加する issue を選びます。
   
   * リポジトリから最近更新された issue を追加するには、ドロップダウンでその issue をクリックするか、方向キーを使用して選んでから、<kbd>Enter</kbd> キーを押します。 
     
     ![最近の issue を示すスクリーンショット](/assets/images/help/issues/select-recent-issue.png)
     
   * リポジトリで issue を検索するには、まず、issue のタイトルまたは issue の番号を入力して結果をクリックするか、方向キーを使用して選び、<kbd>Enter</kbd> キーを押します。
     
     ![issue の検索を示すスクリーンショット](/assets/images/help/issues/search-for-issue.png)
     
   * URL を使用して issue を直接追加するには、issue の URL を貼り付けて <kbd>Enter</kbd> キーを押します。
        
     ![貼り付けた issue の URL を示すスクリーンショット](/assets/images/help/issues/paste-issue-url.png)
     

## タスクリストでのドラフト issue の作成

ドラフト issue は、後で issue に変換できるアイデアをすばやく取り込むのに役立ちます。 リポジトリから参照される issue や pull request とは異なり、ドラフト issue はタスクリストにのみ存在します。

1. タスクリストの下部にある **[タスクに項目を追加する]** をクリックします。
   
   ![[タスクに項目を追加する] ボタンを示すスクリーンショット](/assets/images/help/issues/add-new-tasklist-button.png)
   
1. ドラフト issue のタイトルを入力し、<kbd>Enter</kbd> キーを押します。
   
   ![ドラフト issue のタイトルを示すスクリーンショット](/assets/images/help/issues/add-draft-issue-to-tasklist.png)
   

## タスクリストの issue へのドラフト issue の変換

ドラフト issue を issue に変換することができます。 issue は、タスクリストの親 issue と同じリポジトリに作成されます。

1. 変換するドラフト issue の横にある {% octicon "kebab-horizontal" aria-label="The kebab menu icon" %} をクリックします。
   
   ![メニュー アイコンを示すスクリーンショット](/assets/images/help/issues/tasklist-item-kebab.png)
   
1. メニューで、 **[issue に変換]** をクリックします。
   
   ![[issue に変換] オプションを示すスクリーンショット](/assets/images/help/issues/tasklist-convert-to-issue.png)
   

## タスクリストからの issue またはドラフト issue の削除

タスクリストから issue またはドラフト issue を削除することができます。 タスクリストから削除された issue は、リポジトリから削除されません。

1. 削除するドラフト issue の横にある {% octicon "kebab-horizontal" aria-label="The kebab menu icon" %} をクリックします。
   
   ![メニュー アイコンを示すスクリーンショット](/assets/images/help/issues/tasklist-item-kebab.png)
   
1. メニューで、 **[削除]** をクリックします。
   
   ![[削除] オプションを示すスクリーンショット](/assets/images/help/issues/tasklist-remove.png)
   
## タスクリストのタイトルの変更

新しいタスクリストを作成すると、既定のタイトルは "タスク" になります。 issue の Markdown を編集して、タイトルを変更することができます。

1. issue 本文の右上にある {% octicon "kebab-horizontal" aria-label="The kebab menu icon" %} をクリックします。
   
   ![メニュー アイコンの場所を示すスクリーンショット](/assets/images/help/issues/comment-menu.png)
   
1. メニューで、 **[編集]** をクリックします。
   
   ![編集オプションを示すスクリーンショット](/assets/images/help/issues/comment-menu-edit.png)
   
1. フェンスされたコード ブロックのヘッダーを新しいタイトルに変更します。 たとえば、`### Tasks` を `### My new title` に変更します。 
   
   ![編集オプションを示すスクリーンショット](/assets/images/help/issues/edit-tasklist-title.png)
   
1. **[コメントの更新]** をクリックします。

## タスクリストのコピー

[Markdown のコピー] オプションを使用してタスクリストをコピーすると、{% data variables.product.product_name %} によって Markdown がクリップボードにコピーされ、issue の名前が含まれるため、コンテキストを失うことなく GitHub の外部にタスクリストを貼り付けることができます。 

1. タスクリストの右上にある {% octicon "kebab-horizontal" aria-label="The kebab menu icon" %} をクリックします。
   
   ![メニュー アイコンを示すスクリーンショット](/assets/images/help/issues/tasklist-kebab.png)
   
1. メニューで、 **[Markdown のコピー]** をクリックします。
   
   ![[Markdown のコピー] オプションを示すスクリーンショット](/assets/images/help/issues/tasklist-copy-markdown.png)
   
