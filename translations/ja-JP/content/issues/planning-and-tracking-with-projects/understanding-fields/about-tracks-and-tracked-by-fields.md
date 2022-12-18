---
title: 追跡と追跡対象フィールドについて
shortTitle: About Tracks and Tracked by fields
intro: プロジェクト内の issue のサブタスクを表示できます。
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2-tasklists
type: tutorial
topics:
  - Projects
ms.openlocfilehash: 44c1fcf3ed4495b57a0f2dbe3e92076f0e815502
ms.sourcegitcommit: f5ec7f52d2945ba8b7c14f8f604e4784a8feda19
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180746'
---
{% data reusables.projects.tasklists-release-stage %}

タスクリストにサブタスクを追加するときに、プロジェクトの [追跡] フィールドと [追跡対象] フィールドを有効にして、issue 間の関係を確認できます。 タスクリストでの issue 階層の作成の詳細については、「[タスクリストについて](/issues/tracking-your-work-with-issues/about-tasklists)」を参照してください。

[追跡対象] フィールドを使用して項目をグループ化し、各 issue のサブタスクと、それらを完了するために必要な作業を明確に示すビューを作成できます。 詳細については、「[テーブル レイアウトのフィールド値によるグループ化](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view#grouping-by-field-values-in-table-layout)」を参照してください。

[追跡対象] フィールドでフィルター処理して、特定の issue によって追跡されている項目のみを表示することもできます。 「tracked-by」と入力し始めて一覧から issue を選ぶか、リポジトリと issue 番号がわかっている場合は、以下のフィルターを完全に入力できます。

```
tracked-by:"<OWNER>/<REPO>#<ISSUE NUMBER>"
```

フィルターを使用するには、`<OWNER>` をリポジトリ所有者に、`<REPO>` をリポジトリ名に、`<ISSUE NUMBER>` を issue 番号に置き換えます。 詳細については、[プロジェクトのフィルター処理](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)に関するページを参照してください。

### [追跡対象] フィールドの有効化

[追跡対象] フィールドを有効にして、プロジェクト内の項目を追跡している issue を確認できます。

1. テーブル ビューで、右端のフィールド ヘッダーの [{% octicon "plus" aria-label="the plus icon" %}] をクリックします。
   
   ![新しいフィールドのボタンを示すスクリーンショット](/assets/images/help/projects-v2/new-field-button.png)
   
1. [非表示フィールド] の **[追跡対象]** をクリックします。
   
   ![フィールド メニューを示すスクリーンショット](/assets/images/help/projects-v2/select-tracked-by-field.png)
   

### [追跡] フィールドを有効にする

[追跡] フィールドを有効にすると、プロジェクト内のアイテムが追跡している他の issue を確認できます。

1. テーブル ビューで、右端のフィールド ヘッダーの [{% octicon "plus" aria-label="the plus icon" %}] をクリックします。
   
   ![新しいフィールドのボタンを示すスクリーンショット](/assets/images/help/projects-v2/new-field-button.png)
   
1. [非表示フィールド] の **[追跡]** をクリックします。
   
   ![フィールド メニューを示すスクリーンショット](/assets/images/help/projects-v2/select-tracks-field.png)
   
