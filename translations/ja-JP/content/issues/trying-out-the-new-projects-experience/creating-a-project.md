---
title: プロジェクト（ベータ）の作成
intro: プロジェクトを作成し、展開し、カスタムフィールドを追加する方法を学んでください。
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: tutorial
topics:
  - Projects
---

プロジェクトは、{% data variables.product.company_short %}のデータと最新の状況を保つアイテムのカスタマイズ可能なコレクションです。 プロジェクトでは、Issue、Pull Request、メモ書きできるアイデアを追跡できます。 カスタムフィールドを追加して、特定の目的のためのビューを作成できます。

{% data reusables.projects.projects-beta %}

## プロジェクトの作成

### Creating an organization project

{% data reusables.projects.create-project %}

### Creating a user project

{% data reusables.projects.create-user-project %}

## プロジェクトへのアイテムの追加

プロジェクトは、ドラフトのIssue、Issue、Pull Requestを追跡できます。

### ドラフトIssueの作成

ドラフトIssueは、素早くアイデアを捕捉するのに役立ちます。

1. カーソルをプロジェクトの最下行、{% octicon "plus" aria-label="plus icon" %}の隣に持ってきてください。
2. アイデアを入力し、**Enter**を押してください。

You can convert draft issues into issues. For more information, see [Converting draft issues to issues](#converting-draft-issues-to-issues).

### Issue およびプルリクエスト

#### IssueあるいはPull RequestのURLの貼り付け

1. カーソルをプロジェクトの最下行、{% octicon "plus" aria-label="plus icon" %}の隣に持ってきてください。
1. IssueあるいはPull RequestのURLを貼り付けてください。

#### IssueあるいはPull Requestの検索

1. カーソルをプロジェクトの最下行、{% octicon "plus" aria-label="plus icon" %}の隣に持ってきてください。
2. <kbd>#</kbd>を入力してください。
3. Pull RequestあるいはIssueがあるリポジトリを選択してください。 リポジトリ名の一部を入力して、選択肢を狭めることができます。
4. IssueあるいはPull Requestを選択してください。 タイトルの一部を入力して、選択肢を狭めることができます。

#### IssueあるいはPull Requestの中からプロジェクトをアサインする

1. プロジェクトに追加したいIssueあるいはPull Requestにアクセスしてください。
2. サイドバーで**Projects（プロジェクト）**をクリックしてください。
3. IssueあるいはPull Requestを追加したいプロジェクトを選択してください。
4. あるいは、カスタムフィールドに入力してください。

   ![プロジェクトサイドバー](/assets/images/help/issues/project_side_bar.png)

## Converting draft issues to issues

In table layout:

1. Click the {% octicon "triangle-down" aria-label="the item menu" %} on the draft issue that you want to convert.
2. Select **Convert to issue**.
3. Select the repository that you want to add the issue to.
4. Alternatively, edit the `assignee`, `labels`, `milestone`, or `repository` fields of the draft issue that you want to convert.

In board layout:

1. Click the {% octicon "kebab-horizontal" aria-label="the item menu" %} on the draft issue that you want to convert.
2. Select **Convert to issue**.
3. Select the repository that you want to add the issue to.

## Removing items from your project

You can archive an item to keep the context about the item in the project but remove it from the project views. You can delete an item to remove it from the project entirely.

1. Select the item(s) to archive or delete. To select multiple items, do one of the following:
     - <kbd>Command</kbd>+Click (Mac) or <kbd>Ctrl</kbd>+Click (Windows/Linux) each item.
     - Select an item then <kbd>Shift</kbd>+<kbd>↑</kbd> or <kbd>Shift</kbd>+<kbd>↓</kbd> to select additional items above or below the initially selected item.
     - Select an item then <kbd>Shift</kbd>+Click another item to select all items between the two items.
     - Enter <kbd>Command</kbd>+<kbd>A</kbd> (Mac) or <kbd>Ctrl</kbd>+<kbd>A</kbd> (Windows/Linux) to select all items in a column in a board layout or all items in a table layout.
2. To archive all selected items, enter <kbd>E</kbd>. To delete all selected items, enter <kbd>Del</kbd>. Alternatively, select the {% octicon "triangle-down" aria-label="the item menu" %} (in table layout) or the {% octicon "kebab-horizontal" aria-label="the item menu" %} (in board layout), then select the desired action.

You can restore archived items but not deleted items. For more information, see [Restoring archived items](#restoring-archived-items).

## Restoring archived items

To restore an archived item, navigate to the issue or pull request. In the project side bar on the issue or pull request, click **Restore** for the project that you want to restore the item to. Draft issues cannot be restored.

## フィールドの追加

フィールドの値が変更されると、プロジェクト及びプロジェクトが追跡するアイテムが最新の状態に保たれるよう、自動的に同期されます。

### 既存のフィールドの表示

プロジェクトは、タイトル、アサインされた人、ラベル、マイルストーン、リポジトリへのあらゆる変更を含め、IssueやPull Requestに関する最新の情報を追跡します。 プロジェクトが初期化された時点では、"title（タイトル）"と"assignees（アサインされた人）"が表示されます。他のフィールドは非表示になります。 プロジェクト内でのそれらのフィールドの可視性は変更できます。

1. {% data reusables.projects.open-command-palette %}
2. "show"と入力を始めてください。
3. 希望するコマンド（たとえば"Show: Repository"）を選択してください。

あるいは、これはUIから行うこともできます。

1. 右端のフィールドヘッダの{% octicon "plus" aria-label="the plus icon" %}をクリックしてください。 プロジェクトのフィールドのドロップダウンメニューが表示されます。 ![フィールドの表示もしくは非表示](/assets/images/help/issues/projects_fields_menu.png)
2. 表示あるいは非表示にしたいフィールドを選択してください。 {% octicon "check" aria-label="check icon" %}は、表示されるフィールドを示します。

### カスタムフィールドの追加

プロジェクトにカスタムフィールドを追加できます。 カスタムフィールドは、プロジェクトのIssueあるいはPull Requestのサイドバー上に表示されます。

Custom fields can be text, number, date, single select, or iteration:

- Text: The value can be any text.
- Number: The value must be a number.
- Date: The value must be a date.
- Single select: The value must be selected from a set of specified values.
- Iteration: The value must be selected from a set of date ranges (iterations). Iterations in the past are automatically marked as "completed", and the iteration covering the current date range is marked as "current".

1. {% data reusables.projects.open-command-palette %} "Create new field"のどこかを入力し始めてください。 コマンドパレットに"Create new field"が表示されたら、選択してください。
2. あるいは、右端のフィールドヘッダの{% octicon "plus" aria-label="the plus icon" %}をクリックしてください。 プロジェクトのフィールドのドロップダウンメニューが表示されます。 **New field（新規フィールド）**をクリックしてください。
3. 新しいフィールドに関する情報を入力するためのポップアップが表示されます。 ![新しいフィールド](/assets/images/help/issues/projects_new_field.png)
4. テキストボックスに、新しいフィールドの名前を入力してください。
5. ドロップダウンメニューを選択し、目的の種類をクリックしてください。
6. If you specified **Single select** as the type, enter the options.
7. If you specified **Iteration** as the type, enter the start date of the first iteration and the duration of the iteration. Three iterations are automatically created, and you can add additional iterations on the project's settings page.

You can later edit the drop down options for single select and iteration fields.

{% data reusables.projects.project-settings %}
1. Under **Fields**, select the field that you want to edit.
1. For single select fields, you can add, delete, or reorder the options.
2. For iteration fields, you can add or delete iterations, change iteration names, and change the start date and duration of the iteration.

## Customizing your views

プロジェクトは、テーブルあるいはボードとしてみることができ、フィールドでのアイテムのグループ化、アイテムのフィルタリングなどができます。 詳しい情報については「[プロジェクト（ベータ）のビューのカスタマイズ](/issues/trying-out-the-new-projects-experience/customizing-your-project-views)」を参照してください。

## Configuring built-in automation

{% data reusables.projects.about-workflows %}

You can enable or disable the built-in workflows for your project.

{% data reusables.projects.enable-basic-workflow %}
