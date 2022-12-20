---
title: プロジェクト（ベータ）のビューのカスタマイズ
intro: プロジェクトのレイアウト、グループ化、ソート、フィルタを変更して、必要な情報を表示させてください。
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
- Projects
ms.openlocfilehash: 86b8d7e439b19327b1f752f8d893e349665168f4
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 07/13/2022
ms.locfileid: "145130968"
---
{% data reusables.projects.projects-beta %}

## <a name="project-command-palette"></a>プロジェクトコマンドパレット

プロジェクトコマンドパレットを使って、プロジェクトで素早く設定を変更し、コマンドを実行してください。

1. {% data reusables.projects.open-command-palette %}
2. コマンドの一部を入力し始めるか、コマンドパレットウィンドウをナビゲートしてコマンドを見つけてください。 さらなるコマンドの例については、次のセクションを参照してください。

## <a name="changing-the-project-layout"></a>プロジェクトレイアウトの変更

プロジェクトを、テーブルまたはボードとして見ることができます。

1. {% data reusables.projects.open-command-palette %}
2. "Switch layout"と入力し始めてください。
3. 必要なコマンドを選択してください。 たとえば、**Switch layout: Table** です。

あるいは、ビュー名の隣の {% octicon "triangle-down" aria-label="the drop-down icon" %} をクリックし、 **[表]** または **[ボード]** をクリックします。

## <a name="showing-and-hiding-fields"></a>フィールドの表示と非表示

特定のフィールドを表示または非表示にできます。

### <a name="showing-and-hiding-fields-in-table-layout"></a>テーブルレイアウトでのフィールドの表示と非表示

1. {% data reusables.projects.open-command-palette %}
2. 行いたいアクション（"show"もしくは"hide"）もしくはフィールド名を入力し始めてください。
3. 必要なコマンドを選択してください。 たとえば、**Show: Milestone** です。

あるいは、表の右の{% octicon "plus" aria-label="the plus icon" %}をクリックしてください。 表示されるドロップダウンメニューで、表示または非表示にするフィールドを指定してください。 {% octicon "check" aria-label="check icon" %}は、表示されるフィールドを示します。

あるいは、フィールド名の隣の {% octicon "triangle-down" aria-label="the drop-down icon" %} をクリックし、 **[フィールドを非表示にする]** をクリックします。

### <a name="showing-and-hiding-fields-in-board-layout"></a>ボードレイアウトでのフィールドの表示と非表示

1. ビュー名の隣の{% octicon "triangle-down" aria-label="the drop-down icon" %}をクリックしてください。
2. **[構成]** の下で、{% octicon "list-unordered" aria-label="the unordered list icon" %}をクリックします。
3. 表示されたメニューで、追加するフィールドを選択し、ビューから削除するフィールドの選択を解除してください。

## <a name="reordering-fields"></a>フィールドの並び替え

フィールドの順序を変えることができます。

1. フィールドのヘッダをクリックしてください。
2. クリックしながら、フィールドを必要な場所へドラッグしてください。

## <a name="reordering-rows"></a>行の並び替え

テーブルレイアウトでは、行の順序を変更できます。

1. 行の先頭にある数字をクリックしてください。
2. クリックしながら、行を必要な場所へドラッグしてください。

## <a name="sorting-by-field-values"></a>フィールドの値でソート

テーブルレイアウトでは、フィールドの値でアイテムをソートできます。

1. {% data reusables.projects.open-command-palette %}
2. "Sort by"あるいはソートの基準にしたいフィールド名を入力し始めてください。
3. 必要なコマンドを選択してください。 たとえば、**Sort by: Assignees, asc** です。

あるいは、並べ替えの基準にするフィールド名の隣の {% octicon "triangle-down" aria-label="the drop-down icon" %} をクリックし、次に **[昇順で並べ替え]** または **[降順で並べ替え]** をクリックします。

{% note %}

**注:** テーブルを並べ替えると、手動で行を並べ替えることはできません。

{% endnote %}

ソートを解除するには、同じようなステップに従ってください。

1. {% data reusables.projects.open-command-palette %}
2. "Remove sort-by"と入力し始めてください。
3. **[並べ替えの削除]** を選択します。

あるいは、ビュー名の隣の{% octicon "triangle-down" aria-label="the drop-down icon" %}をクリックし、現在のソートを表しているメニューアイテムをクリックしてください。

## <a name="grouping-by-field-values-in-table-layout"></a>テーブルレイアウト内のフィールドの値でグループ化

テーブルレイアウトでは、カスタムフィールドの値でアイテムをグループ化できます。 アイテムがグループ化されると、アイテムを新しいグループにドラッグした場合、そのグループの値が適用されます。 たとえば、"Status" でグループ化し、状態が `In progress` のアイテムを `Done` グループにドラッグすると、アイテムの状態は `Done` に切り替わります。 同様に、新しいアイテムをグループに追加すると、新しいアイテムにはそのグループの値が展開されます。

{% note %}

**注:** 現在、タイトル、ラベル、レビュー担当者、リンクされた pull request によるグループ化はできません。

{% endnote %}

1. {% data reusables.projects.open-command-palette %}
2. "Group by" あるいはグループ化に使いたいフィールド名を入力し始めてください。
3. 必要なコマンドを選択してください。 たとえば、**Group by: Status** です。

あるいは、グループ化したいフィールド名の隣の {% octicon "triangle-down" aria-label="the drop-down icon" %} をクリックし、 **[値でグループ化]** をクリックします。

グループを削除するには、同じようなステップに従ってください。

1. {% data reusables.projects.open-command-palette %}
2. "Remove group-by"と入力し始めてください。
3. **[グループ化の削除]** を選択します。

あるいは、ビュー名の隣の{% octicon "triangle-down" aria-label="the drop-down icon" %}をクリックし、現在のグループ化を示すメニューアイテムをクリックしてください。

## <a name="setting-the-column-field-in-board-layout"></a>ボードレイアウトでの列フィールドの設定

ボードレイアウトでは、列に対して任意の単一選択あるいは繰り返しフィールドを選択します。 アイテムを新しい列にドラッグすると、その列の値がドラッグされたアイテムに適用されます。 たとえば、ボードの列に "Status" フィールドを使い、状態が `In progress` のアイテムを `Done` 列にドラッグすると、そのアイテムの状態は `Done` に切り替わります。

1. {% data reusables.projects.open-command-palette %}
1. "Column field by"もしくは列で使いたいフィールドの名前をタイプし始めてください。
1. 必要なコマンドを選択してください。 たとえば、**Column field by: Status** です。

あるいは、変更したいボード ビューの隣の {% octicon "triangle-down" aria-label="the drop-down icon" %} をクリックし、{% octicon "columns" aria-label="the column icon" %} **[列フィールド]** をクリックします。 続いて、ボードの列に使いたいフィールドを選択してください。

## <a name="filtering-items"></a>アイテムのフィルタリング

テーブルの上部にある{% octicon "filter" aria-label="the filter icon" %}をクリックして、"Filter by keyword or by field（キーワードもしくはフィールドでフィルタ）"バーを表示させてください。 フィルタに使いたいフィールド名及び値を入力し始めてください。 入力していくと、利用できる値が表示されます。

{% data reusables.projects.projects-filters %}

あるいは、コマンドパレットを使用してください。

1. {% data reusables.projects.open-command-palette %}
2. Filter by"あるいはフィルタリングに使いたいフィールド名を入力し始めてください。
3. 必要なコマンドを選択してください。 たとえば、**Filter by Status** です。
4. フィルタリングしたい値を入力してください。 たとえば"In progress"と入力してください。 特定の値がないことでフィルタリングしたり（たとえば"Exclude status"を選択してからステータスを選択）、すべての値がないことでフィルタリングしたり（たとえば"No status"）もできます。

ボードレイアウトでは、アイテムデータをクリックして、その値を持つアイテムにフィルタリングできます。 たとえば、アサインされた人をクリックして、そのアサインされた人のアイテムだけを表示させられます。 このフィルタを削除するには、そのアイテムデータをもう一度クリックします。

詳細については、[プロジェクトのフィルター処理](/issues/trying-out-the-new-projects-experience/filtering-projects)に関するページを参照してください。

## <a name="creating-a-project-view"></a>プロジェクトビューの作成

プロジェクトビューを使うと、プロジェクトの特定の側面を素早く見ることができます。 それぞれのビューは、プロジェクト内の個別のタブに表示されます。 

たとえば、以下のようなビューを持つことができます:
- まだ開始されていないすべてのアイテムを表示するビュー（"Status"でフィルタ）。
- 各チームの作業負荷を表示するビュー（カスタムの"Team"フィールドでグループ化）。
- 最短のターゲット出荷日を持つアイテムを表示するビュー（日付フィールドでソート）。

新しいビューは以下のように追加します:

1. {% data reusables.projects.open-command-palette %}
2. "New view"（新しいビューを作成する場合）あるいは"Duplicate view"（現在のビューを複製する場合）と入力し始めます。
3. 必要なコマンドを選択してください。

あるいは、右端のビューの隣にある {% octicon "plus" aria-label="the plus icon" %} **[新しいビュー]** をクリックします。

あるいは、ビュー名の隣の {% octicon "triangle-down" aria-label="the drop-down icon" %} をクリックし、 **[ビューを複製]** をクリックします。

新しいビューは自動的に保存されます。

## <a name="saving-changes-to-a-view"></a>ビューへの変更の保存

ビューのデータのソート、並び替え、フィルタリング、グループ化など、ビューに変更を加えた場合、ビュー名の隣にはドットが表示され、保存されていない変更があることを示します。 

![未保存の変更インジケータ](/assets/images/help/projects/unsaved-changes.png)

変更を保存したくなければ、この表示は無視してかまいません。 この変更は他のユーザには見えません。

ビューの現在の設定を、すべてのプロジェクトメンバーのために保存するには以下のようにします:
1. {% data reusables.projects.open-command-palette %}
1. "Save view"あるいは"Save changes to new view"と入力し始めてください。
1. 必要なコマンドを選択してください。

あるいは、ビュー名の隣の {% octicon "triangle-down" aria-label="the drop-down icon" %} をクリックし、 **[ビューの保存]** または **[新しいビューへの変更を保存]** をクリックします。

## <a name="reordering-saved-views"></a>保存されたビューの並び替え

保存されたビューを含むタブの順序を変更するには、タブをクリックして新しい場所へドラッグします。

新しいタブの順序は自動的に保存されます。

## <a name="renaming-a-saved-view"></a>保存されたビューの名前の変更

ビューの名前を変更するには以下のようにします:
1. プロジェクトタブの名前をダブルクリックします。
1. 名前を変更します。
1. Enterを押すか、タブの外部をクリックします。

名前の変更は自動的に保存されます。

## <a name="deleting-a-saved-view"></a>保存されたビューの削除

ビューを削除するには、次のようにします。
1. {% data reusables.projects.open-command-palette %}
2. "Delete view"と入力し始めてください。
3. 必要なコマンドを選択してください。

あるいは、ビュー名の隣の {% octicon "triangle-down" aria-label="the drop-down icon" %} をクリックし、 **[ビューの削除]** をクリックします。

## <a name="further-reading"></a>参考資料

- [プロジェクトについて](/issues/trying-out-the-new-projects-experience/about-projects)
- [プロジェクトの作成](/issues/trying-out-the-new-projects-experience/creating-a-project)
