---
title: ビューのカスタマイズ
intro: プロジェクトのレイアウト、グループ化、並べ替えを変更して、必要な情報を表示します。
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/customizing-your-project-views
type: tutorial
topics:
  - Projects
ms.openlocfilehash: 962a20daac125cdec5510daf3d792e0aaf6a194b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147424186'
---
## プロジェクトレイアウトの変更

プロジェクトを、テーブルまたはボードとして見ることができます。

{% data reusables.projects.open-view-menu %}
1. [レイアウト] で **[テーブル]** または **[ボード]** をクリックします。
   ![レイアウト オプションを示すスクリーンショット](/assets/images/help/projects-v2/table-or-board.png)

 

または、{% data variables.projects.command-palette-shortcut %} キーを押してプロジェクト コマンド パレットを開き、「Switch layout」と入力を始めます。

## フィールドの表示と非表示

特定のフィールドを表示または非表示にできます。

{% data reusables.projects.open-view-menu %}
1. [構成] で、{% octicon "note" aria-label="the note icon" %} と現在表示されているフィールドのリストをクリックします。
   ![フィールドの表示と非表示のメニュー オプションを示すスクリーンショット](/assets/images/help/projects-v2/show-hide-fields-menu-item.png)
1. 表示または非表示にする列を選択または選択解除します。
   ![フィールドの表示と非表示のメニューを示すスクリーンショット](/assets/images/help/projects-v2/show-hide-fields.png)

テーブル ビューで個々のフィールドを非表示にすることもできます。

1. 非表示にするフィールドの横にある [{% octicon "kebab-horizontal" aria-label="the kebab icon" %}] をクリックします。
   ![フィールドのメニュー アイコンを示すスクリーンショット](/assets/images/help/projects-v2/modify-field-menu.png)
1. [{% octicon "eye-closed" aria-label="the eye closed icon" %} **フィールドの非表示**] をクリックします。
   ![フィールド非表示のメニュー オプションを示すスクリーンショット](/assets/images/help/projects-v2/hide-field-via-menu.png)

または、{% data variables.projects.command-palette-shortcut %} キーを押してプロジェクト コマンド パレットを開き、「show」、「hide」、またはフィールドの名前の入力を始めます。

## フィールドの並び替え

テーブル レイアウトでは、フィールドの順序を変更できます。

1. フィールドのヘッダをクリックしてください。
   ![フィールドのヘッダーを示すスクリーンショット](/assets/images/help/projects-v2/select-field-header.png)
2. 続けてクリックしながら、フィールドを必要な場所にドラッグします。

## 行の並び替え

テーブルレイアウトでは、行の順序を変更できます。

1. 行の先頭にある数字をクリックしてください。
   ![行番号を示すスクリーンショット](/assets/images/help/projects-v2/select-row-number.png)
2. 続けてクリックしながら、行を必要な場所にドラッグします。

## フィールドの値でソート

テーブルレイアウトでは、フィールドの値でアイテムをソートできます。

{% note %}

**注:** テーブルを並べ替えると、手動で行を並べ替えることはできません。

{% endnote %}

{% data reusables.projects.open-view-menu %}
1. **[並べ替え]** をクリックします。
   ![並べ替えメニュー項目を示すスクリーンショット](/assets/images/help/projects-v2/sort-menu-item.png)
1. 並べ替えるフィールドをクリックします。
   ![並べ替えメニューを示すスクリーンショット](/assets/images/help/projects-v2/sort-menu.png)
2. 必要に応じて、並べ替えの方向を変更するには、[{% octicon "sort-desc" aria-label="the sort icon" %}] をクリックします。
   ![並べ替え順序のオプションを示すスクリーンショット](/assets/images/help/projects-v2/sort-order.png)
3. 必要に応じて、並べ替えを解除するには、[{% octicon "x" aria-label="the x icon" %} **並べ替えなし**] をクリックします。
   !["並べ替えなし" を示すスクリーンショット](/assets/images/help/projects-v2/no-sorting.png)

または、{% data variables.projects.command-palette-shortcut %} キーを押してプロジェクト コマンド パレットを開き、「Sort by」と入力を始めます。

## テーブルレイアウト内のフィールドの値でグループ化

テーブルレイアウトでは、カスタムフィールドの値でアイテムをグループ化できます。 アイテムがグループ化されると、アイテムを新しいグループにドラッグした場合、そのグループの値が適用されます。 たとえば、"Status" でグループ化し、状態が `In progress` のアイテムを `Done` グループにドラッグすると、アイテムの状態は `Done` に切り替わります。 同様に、新しいアイテムをグループに追加すると、新しいアイテムにはそのグループの値が展開されます。

{% note %}

**注:** タイトル、ラベル、レビュー担当者、リンクされた pull request によるグループ化はできません。

{% endnote %}

{% data reusables.projects.open-view-menu %}
1. [{% octicon "rows" aria-label="the rows icon" %} **グループ**] をクリックします。
   ![グループ メニュー項目を示すスクリーンショット](/assets/images/help/projects-v2/group-menu-item.png)
1. グループ化するフィールドをクリックします。
   ![グループ メニューを示すスクリーンショット](/assets/images/help/projects-v2/group-menu.png)
2. 必要に応じて、グループ化を無効にするには、[{% octicon "x" aria-label="the x icon" %} **グループ化なし**] をクリックします。
   !["グループ化なし" を示すスクリーンショット](/assets/images/help/projects-v2/no-grouping.png)

または、{% data variables.projects.command-palette-shortcut %} キーを押してプロジェクト コマンド パレットを開き、「Group by」と入力を始めます。

## ボードレイアウトでの列フィールドの設定

ボードレイアウトでは、列に対して任意の単一選択あるいは繰り返しフィールドを選択します。 アイテムを新しい列にドラッグすると、その列の値がドラッグされたアイテムに適用されます。 たとえば、ボードの列に "Status" フィールドを使い、状態が `In progress` のアイテムを `Done` 列にドラッグすると、そのアイテムの状態は `Done` に切り替わります。

{% data reusables.projects.open-view-menu %}
1. [{% octicon "columns" aria-label="the columns icon" %} **列フィールド**] をクリックします。
   ![列フィールド項目を示すスクリーンショット](/assets/images/help/projects-v2/column-field-menu-item.png)
1. 使用するフィールドをクリックします。
   ![列フィールド メニューを示すスクリーンショット](/assets/images/help/projects-v2/column-field-menu.png)

または、{% data variables.projects.command-palette-shortcut %} キーを押してプロジェクト コマンド パレットを開き、「Column field by」と入力を始めます。
