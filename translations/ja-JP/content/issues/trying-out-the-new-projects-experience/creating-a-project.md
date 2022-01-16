---
title: プロジェクト（ベータ）の作成
intro: プロジェクトを作成し、展開し、カスタムフィールドを追加する方法を学んでください。
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
type: quick_start
topics:
  - Projects
---

プロジェクトは、{% data variables.product.company_short %}のデータと最新の状況を保つアイテムのカスタマイズ可能なコレクションです。 プロジェクトでは、Issue、Pull Request、メモ書きできるアイデアを追跡できます。 カスタムフィールドを追加して、特定の目的のためのビューを作成できます。

{% data reusables.projects.projects-beta %}

## プロジェクトの作成

{% data reusables.projects.create-project %}

## プロジェクトへのアイテムの追加

プロジェクトは、ドラフトのIssue、Issue、Pull Requestを追跡できます。

### ドラフトIssueの作成

ドラフトIssueは、素早くアイデアを捕捉するのに役立ちます。

1. カーソルをプロジェクトの最下行、{% octicon "plus" aria-label="plus icon" %}の隣に持ってきてください。
2. アイデアを入力し、**Enter**を押してください。

### Issue およびPull Request

#### IssueあるいはPull RequestのURLの貼り付け

1. カーソルをプロジェクトの最下行、{% octicon "plus" aria-label="plus icon" %}の隣に持ってきてください。
1. IssueあるいはPull RequestのURLを貼り付けてください。

#### IssueあるいはPull Requestの検索

1. カーソルをプロジェクトの最下行、{% octicon "plus" aria-label="plus icon" %}の隣に持ってきてください。
2. `#`を入力してください。
3. Pull RequestあるいはIssueがあるリポジトリを選択してください。 リポジトリ名の一部を入力して、選択肢を狭めることができます。
4. IssueあるいはPull Requestを選択してください。 タイトルの一部を入力して、選択肢を狭めることができます。

#### IssueあるいはPull Requestの中からプロジェクトをアサインする

1. プロジェクトに追加したいIssueあるいはPull Requestにアクセスしてください。
2. サイドバーで**Projects（プロジェクト）**をクリックしてください。
3. IssueあるいはPull Requestを追加したいプロジェクトを選択してください。
4. あるいは、カスタムフィールドに入力してください。

   ![プロジェクトサイドバー](/assets/images/help/issues/project_side_bar.png)

## フィールドの追加

フィールドの値が変更されると、プロジェクト及びプロジェクトが追跡するアイテムが最新の状態に保たれるよう、自動的に同期されます。

{% note %}

**ノート:** プロジェクトに最低1つのアイテムを追加するまで、フィールドを編集したり追加したりすることはできません。

{% endnote %}

### 既存のフィールドの表示

プロジェクトは、タイトル、アサインされた人、ラベル、マイルストーン、リポジトリへのあらゆる変更を含め、IssueやPull Requestに関する最新の情報を追跡します。 プロジェクトが初期化された時点では、"title（タイトル）"と"assignees（アサインされた人）"が表示されます。他のフィールドは非表示になります。 プロジェクト内でのそれらのフィールドの可視性は変更できます。

1. {% data reusables.projects.open-command-palette %}
2. "show"と入力を始めてください。
3. 希望するコマンド（たとえば"Show: Repository"）を選択してください。

あるいは、これはUIから行うこともできます。

1. 右端のフィールドヘッダの{% octicon "plus" aria-label="the plus icon" %}をクリックしてください。 プロジェクトのフィールドのドロップダウンメニューが表示されます。 ![フィールドの表示もしくは非表示](/assets/images/help/issues/projects_fields_menu.png)
2. 表示あるいは非表示にしたいフィールドを選択してください。 {% octicon "check" aria-label="check icon" %}は、表示されるフィールドを示します。

### カスタムフィールドの追加

プロジェクトにカスタムフィールドを追加できます。 カスタムフィールドは、テキスト、数値、日付、単一選択にできます。 カスタムフィールドは、プロジェクトのIssueあるいはPull Requestのサイドバー上に表示されます。

1. {% data reusables.projects.open-command-palette %} "Create new field"のどこかを入力し始めてください。 コマンドパレットに"Create new field"が表示されたら、選択してください。
2. あるいは、右端のフィールドヘッダの{% octicon "plus" aria-label="the plus icon" %}をクリックしてください。 プロジェクトのフィールドのドロップダウンメニューが表示されます。 **New field（新規フィールド）**をクリックしてください。
3. 新しいフィールドに関する情報を入力するためのポップアップが表示されます。 ![新しいフィールド](/assets/images/help/issues/projects_new_field.png)
4. テキストボックスに、新しいフィールドの名前を入力してください。
5. ドロップダウンメニューを選択し、目的の種類をクリックしてください。
6. 種類として"single select"を指定した場合は、選択肢を入力してください。

## ビューのカスタマイズ

プロジェクトは、テーブルあるいはボードとしてみることができ、フィールドでのアイテムのグループ化、アイテムのフィルタリングなどができます。 詳しい情報については「[プロジェクト（ベータ）のビューのカスタマイズ](/issues/trying-out-the-new-projects-experience/customizing-your-project-views)」を参照してください。
