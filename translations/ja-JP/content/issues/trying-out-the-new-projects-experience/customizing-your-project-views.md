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
---

{% data reusables.projects.projects-beta %}

## Project command palette

Use the project command palette to quickly change settings and run commands in your project.

1. {% data reusables.projects.open-command-palette %}
2. コマンドの一部を入力し始めるか、コマンドパレットウィンドウをナビゲートしてコマンドを見つけてください。 さらなるコマンドの例については、次のセクションを参照してください。

## レイアウトの変更

プロジェクトを、テーブルまたはボードとして見ることができます。

1. {% data reusables.projects.open-command-palette %}
2. "Switch layout"と入力し始めてください。
3. 希望するコマンド（例:"Switch layout: Table"）を選択してください。
3. あるいは、ビュー名の隣にあるドロップダウンメニューを選択し、**Table（テーブル）**もしくは**Board（ボード）**をクリックしてください。

## フィールドの表示もしくは非表示

You can show or hide a specific field.

In table layout:

1. {% data reusables.projects.open-command-palette %}
2. 行いたいアクション（"show"もしくは"hide"）もしくはフィールド名を入力し始めてください。
3. 希望するコマンド（例:"Show: Milestone"）を選択してください。
4. あるいは、表の右の{% octicon "plus" aria-label="the plus icon" %}をクリックしてください。 表示されるドロップダウンメニューで、表示または非表示にするフィールドを指定してください。 {% octicon "check" aria-label="check icon" %}は、表示されるフィールドを示します。
5. あるいは、フィールド名の隣のドロップダウンメニューを選択し、**Hide field（フィールドを非表示にする）**をクリックしてください。

In board layout:

1. ビュー名の隣のドロップダウンメニューを選択してください。
2. Under **configuration**, click {% octicon "list-unordered" aria-label="the unordered list icon" %}.
3. In the menu that appears, select fields to add them and deselect fields to remove them from the view.

## フィールドの並び替え

フィールドの順序を変えることができます。

1. フィールドのヘッダをクリックしてください。
2. クリックしながら、フィールドを希望する位置へドラッグしてください。

## 行の並び替え

テーブルレイアウトでは、行の順序を変更できます。

1. 行の先頭にある数字をクリックしてください。
2. クリックしながら、行を希望する位置へドラッグしてください。

## ソート

テーブルレイアウトでは、フィールドの値でアイテムをソートできます。

1. {% data reusables.projects.open-command-palette %}
2. "Sort by"あるいはソートの基準にしたいフィールド名を入力し始めてください。
3. 希望するコマンド（例:"Sort by: Assignees, asc"）を選択してください。
4. あるいは、ソートの基準にしたいフィールド名の隣のドロップダウンメニューを選択し、**Sort ascending（昇順にソート）**あるいは**Sort descending（降順にソート）**をクリックしてください。

{% note %}

**ノート:** テーブルがソートされると、手動で行を並び替えることはできなくなります。

{% endnote %}

ソートを解除するには、同じようなステップに従ってください。

1. {% data reusables.projects.open-command-palette %}
2. "Remove sort-by"と入力し始めてください。
3. "Remove sort-by"コマンドを選択してください。
4. あるいは、ビュー名の隣のドロップダウンメニューを選択し、現在のソートを示すメニューアイテムをクリックしてください。

## グループ化

In the table layout, you can group items by a custom field value. アイテムがグループ化されると、アイテムを新しいグループにドラッグした場合、そのグループの値が適用されます。 たとえば`Status`でグループ化して、ステータスが`In progress`のアイテムを`Done`のグループにドラッグすると、そのアイテムのステータスは`Done`に切り替わります。

{% note %}

**Note:** Currently, you cannot group by title, assignees, repository or labels.

{% endnote %}

1. {% data reusables.projects.open-command-palette %}
2. "Group by" あるいはグループ化に使いたいフィールド名を入力し始めてください。
3. 希望するコマンド（たとえば"Group by: Status"）を選択してください。
4. あるいは、グループ化に使いたいフィールド名の隣のドロップダウンメニューを選択し、**Group by values（値でグループ化）**をクリックしてください。

グループを削除するには、同じようなステップに従ってください。

1. {% data reusables.projects.open-command-palette %}
2. "Remove group-by"と入力し始めてください。
3. "Remove group-by"コマンドを選択してください。
4. あるいは、ビュー名の隣のドロップダウンメニューを選択し、現在のグループ化を示すメニューアイテムをクリックしてください。

## フィルタ

Click {% octicon "search" aria-label="the search icon" %} at the top of the table to show the "Filter by keyword or field" bar. Start typing the field name and value that you want to filter by. 入力していくと、利用できる値が表示されます。

- To filter for multiple values, separate the values with a comma. For example `label:"good first issue",bug` will list all issues with a label `good first issue` or `bug`.
- To filter for the absence of a specific value, place `-` before your filter. For example, `-label:"bug"` will only show items that do not have the label `bug`.
- To filter for the absence of all values, enter `no:` followed by the field name. For example, `no:assignee` will only show items that do not have an assignee.
- To filter by state, enter `is:`. For example, `is: issue` or `is:open`.
- 複数のフィルタは空白で区切ってください。 For example, `status:"In progress" -label:"bug" no:assignee` will show only items that have a status of `In progress`, do not have the label `bug`, and do not have an assignee.

Alternatively, use the command palette.

1. {% data reusables.projects.open-command-palette %}
2. Filter by"あるいはフィルタリングに使いたいフィールド名を入力し始めてください。
3. 希望するコマンド（たとえば"Filter by Status"）を選択してください。
4. フィルタに使いたい値（たとえば"In progress")を入力してください。 You can also filter for the absence of specific values (for example: "Exclude status") or the absence of all values (for example: "No status").

In board layout, you can click on item data to filter for items with that value. For example, click on an assignee to show only items for that assignee. To remove the filter, click the item data again.

## ビューの保存

ビューを保存すると、プロジェクトの特定の側面を素早く見ることができるようになります。 たとえば、以下のようなビューを持つことができます。
- すべての開始されていないアイテム（"Status"でフィルタ）を表示するビュー。
- Teamの各メンバーの作業負荷を表示する（"Asssignee"でグループ化して"Status"でフィルタ）ビュー。
- 最短のターゲット出荷日を持つアイテムを表示する（日付フィールドでソート）ビュー。

以下のステップは、新しいビューを追加する方法を紹介しています。

1. {% data reusables.projects.open-command-palette %}
2. "New view"（新しいビューを作成する場合）あるいは"Duplicate view"（現在のビューを複製する場合）と入力し始めます。
3. 希望するコマンドを選択してください。
4. あるいは、最も右側のビューの隣にある{% octicon "plus" aria-label="the plus icon" %} **New view（新しいビュー）**をクリックしてください。
5. あるいは、ビュー名の隣にあるドロップダウンメニューを選択し、**Duplicate view（ビューを複製）**をクリックしてください。

ビューに変更を加えると、ビュー名の隣にドットが表示され、そのビューが変更されたことを示します。 変更を保存したくなければ、この表示は無視してかまいません。 すべてのプロジェクトメンバーに対してビューを保存するには以下のようにします。

1. {% data reusables.projects.open-command-palette %}
1. "Save view"あるいは"Save changes to new view"と入力し始めてください。
1. 希望するコマンドを選択してください。
1. あるいは、ビュー名の隣にあるドロップダウンメニューを選択し、**Save view（ビューを保存）**あるいは**Save changes to new view（新しいビューに変更を保存）**をクリックしてください。

ビューの名前を変更するには、ビュー名をダブルクリックしてから、希望する名前を入力してください。

ビューを削除するには以下のようにしてください。

1. {% data reusables.projects.open-command-palette %}
2. "Delete view"と入力し始めてください。
3. 希望するコマンドを選択してください。
4. あるいは、ビュー名の隣にあるドロップダウンメニューを選択し、**Delete view（ビューを削除）**をクリックしてください。

## 参考リンク

- "[About projects (beta)](/issues/trying-out-the-new-projects-experience/about-projects)"
- "[Creating a project (beta)](/issues/trying-out-the-new-projects-experience/creating-a-project)"
