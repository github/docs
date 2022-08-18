---
title: ビューのカスタマイズ
intro: プロジェクトのレイアウト、グループ化、ソートを変更することによって、必要な情報を表示してください。
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/customizing-your-project-views
type: tutorial
topics:
  - Projects
---


## プロジェクトレイアウトの変更

プロジェクトを、テーブルまたはボードとして見ることができます。

{% data reusables.projects.open-view-menu %}
1. "Layout（レイアウト）"の下で、**Table（テーブル）**もしくは**Board（ボード）**をクリックしてください。 ![レイアウトオプションを表示しているスクリーンショット](/assets/images/help/projects-v2/table-or-board.png)



あるいは、{% data variables.projects.command-palette-shortcut %}を押してプロジェクトのコマンドパレットをオープンし、"Switch layout"と入力していってください。

## フィールドの表示と非表示

特定のフィールドを表示または非表示にできます。

{% data reusables.projects.open-view-menu %}
1. "Configuration（設定）"　の下で、{% octicon "note" aria-label="the note icon" %}と現在表示されているフィールドのリストをクリックしてください。 ![フィールドの表示非表示メニューオプションを表示しているスクリーンショット](/assets/images/help/projects-v2/show-hide-fields-menu-item.png)
1. 表示もしくは非表示にしたいフィールドを選択または選択解除してください。 ![フィールドの表示と非表示のメニューを表示しているスクリーンショット](/assets/images/help/projects-v2/show-hide-fields.png)

個々のフィールドをテーブルビューで非表示にすることもできます。

1. 非表示にしたいフィールドの隣で{% octicon "kebab-horizontal" aria-label="the kebab icon" %}をクリックしてください。 ![フィールドメニューアイコンを表示しているスクリーンショット](/assets/images/help/projects-v2/modify-field-menu.png)
1. {% octicon "eye-closed" aria-label="the eye closed icon" %} **Hide field（フィールドの非表示）**をクリックしてください。 ![フィールドの非表示メニューオプションを表示しているスクリーンショット](/assets/images/help/projects-v2/hide-field-via-menu.png)

あるいは、{% data variables.projects.command-palette-shortcut %}を押してプロジェクトのコマンドパレットをオープンし、"show"、"hide"もしくはフィールドの名前を入力していってください。

## フィールドの並び替え

テーブルレイアウトでは、フィールドの順序を変更できます。

1. フィールドのヘッダをクリックしてください。 ![フィールドヘッダを表示しているスクリーンショット](/assets/images/help/projects-v2/select-field-header.png)
2. クリックし続けて、フィールドを希望する位置にドラッグしてください。

## 行の並び替え

テーブルレイアウトでは、行の順序を変更できます。

1. 行の先頭にある数字をクリックしてください。 ![行番号を表示しているスクリーンショット](/assets/images/help/projects-v2/select-field-header.png)
2. クリックし続けて、行を希望する位置にドラッグしてください。

## フィールドの値でソート

テーブルレイアウトでは、フィールドの値でアイテムをソートできます。

{% note %}

**ノート:** テーブルがソートされると、手動で行を並び替えることはできなくなります。

{% endnote %}

{% data reusables.projects.open-view-menu %}
1. **Sort（ソート）**をクリックしてください。 ![ソートメニューアイテムを表示しているスクリーンショット](/assets/images/help/projects-v2/sort-menu-item.png)
1. ソートの基準にしたいフィールドをクリックしてください。 ![ソートメニューを表示しているスクリーンショット](/assets/images/help/projects-v2/sort-menu.png)
2. あるいは、ソートの方向を変更したい場合には、{% octicon "sort-desc" aria-label="the sort icon" %}をクリックしてください。 ![ソート順のオプションを表示しているスクリーンショット](/assets/images/help/projects-v2/sort-order.png)
3. あるいは、ソートを解除するには、リストの下部にある{% octicon "x" aria-label="the x icon" %} **No sorting（ソート無し）**をクリックしてください。 !["ソート無し"を表示しているスクリーンショット](/assets/images/help/projects-v2/no-sorting.png)

または、{% data variables.projects.command-palette-shortcut %}を押してプロジェクトのコマンドパレットをオープンし、"Sort by"と入力していってください。

## テーブルレイアウト内のフィールドの値でグループ化

テーブルレイアウトでは、カスタムフィールドの値でアイテムをグループ化できます。 アイテムがグループ化されると、アイテムを新しいグループにドラッグした場合、そのグループの値が適用されます。 たとえば"Status"でグループ化して、ステータスが`In progress`のアイテムを`Done`グループにドラッグすると、そのアイテムのステータスは`Done`に切り替わります。 同様に、新しいアイテムをグループに追加すると、新しいアイテムにはそのグループの値が展開されます。

{% note %}

**ノート:** タイトル、ラベル、レビュー担当者、リンクされたPull Requestでグループ化することはできません。

{% endnote %}

{% data reusables.projects.open-view-menu %}
1. {% octicon "rows" aria-label="the rows icon" %} **Group（グループ）**をクリックしてください。 ![グループメニューアイテムを表示しているスクリーンショット](/assets/images/help/projects-v2/group-menu-item.png)
1. グループ化したいフィールドをクリックしてください。 ![グループメニューを表示しているスクリーンショット](/assets/images/help/projects-v2/group-menu.png)
2. あるいは、グループ化を無効にするには、リストの下部にある{% octicon "x" aria-label="the x icon" %} **No grouping（グループ化無し）**をクリックしてください。 !["グループ化無し"を表示しているスクリーンショット](/assets/images/help/projects-v2/no-grouping.png)

または、{% data variables.projects.command-palette-shortcut %}を押してプロジェクトのコマンドパレットをオープンし、"Group by"と入力していってください。

## ボードレイアウトでの列フィールドの設定

ボードレイアウトでは、列に対して任意の単一選択あるいは繰り返しフィールドを選択します。 アイテムを新しい列にドラッグすると、その列の値がドラッグされたアイテムに適用されます。 たとえば、ボードの列に"Status"フィールドを使い、ステータスが`In progress`のアイテムを`Done`列にドラッグすると、そのアイテムのステータスは`Done`に切り替わります。

{% data reusables.projects.open-view-menu %}
1. {% octicon "columns" aria-label="the columns icon" %} **Column field（列のフィールド）**をクリックしてください。 ![列フィールドアイテムを表示しているスクリーンショット](/assets/images/help/projects-v2/column-field-menu-item.png)
1. 使用したいフィールドをクリックしてください。 ![列フィールドメニューを表示しているスクリーンショット](/assets/images/help/projects-v2/column-field-menu.png)

または、{% data variables.projects.command-palette-shortcut %}を押してプロジェクトのコマンドパレットをオープンし、"Column field by"と入力していってください。
