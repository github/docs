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

### Organizationプロジェクトの作成

{% data reusables.projects.create-project %}

### ユーザプロジェクトの作成

{% data reusables.projects.create-user-project %}

## プロジェクトの説明とREADMEの更新

{% data reusables.projects.project-description %}

## プロジェクトへのアイテムの追加

プロジェクトは、ドラフトのIssue、Issue、Pull Requestを追跡できます。

### ドラフトIssueの作成

ドラフトIssueは、素早くアイデアを捕捉するのに役立ちます。

1. カーソルをプロジェクトの最下行、{% octicon "plus" aria-label="plus icon" %}の隣に持ってきてください。
1. アイデアを入力し、**Enter**を押してください。
1. 本文のテキストを追加するには、ドラフトIssueのタイトルをクリックしてください。 表示されるMarkdownの入力ボックスに、ドラフトIssueの本文のテキストを入力し、**Save（保存）**をクリックしてください。

ドラフトIssueには、タイトル、テキストの本文、アサインされた人、プロジェクトからの任意のカスタムフィールドを持たせることができます。 ドラフトIssueのリポジトリ、ラベル、マイルストーンを展開するには、まずドラフトIssueをIssueに変換しなければなりません。 詳しい情報については「[ドラフトIssueのIssueへの変換](#converting-draft-issues-to-issues)」を参照してください。

{% note %}

**ノート**: ドラフトIssueがIssueに変換されなければ、ドラフトIssueにアサインされたりメンションされたりした人は、通知を受けません。

{% endnote %}

### Issue およびプルリクエスト

#### IssueあるいはPull RequestのURLの貼り付け

1. カーソルをプロジェクトの最下行、{% octicon "plus" aria-label="plus icon" %}の隣に持ってきてください。
1. IssueあるいはPull RequestのURLを貼り付けてください。

#### IssueあるいはPull Requestの検索

1. カーソルをプロジェクトの最下行、{% octicon "plus" aria-label="plus icon" %}の隣に持ってきてください。
2. <kbd>#</kbd>を入力してください。
3. Pull RequestあるいはIssueがあるリポジトリを選択してください。 リポジトリ名の一部を入力して、選択肢を狭めることができます。
4. IssueあるいはPull Requestを選択してください。 タイトルの一部を入力して、選択肢を狭めることができます。

#### リポジトリから複数のIssueあるいはPull Requestを追加する

1. {% data variables.product.product_location %}で、プロジェクトに追加したいIssueあるいはPull Requestが含まれているリポジトリにアクセスしてください。
{% data reusables.repositories.sidebar-issue-pr %}
1. それぞれのIssueのタイトルの左で、プロジェクトに追加したいIssueを選択してください。 ![IssueあるいはPull Requestを選択するためのチェックボックスが表示されているスクリーンショット](/assets/images/help/issues/select-issue-checkbox.png)
1. あるいは、ページ上のすべてのIssueあるいはPull Requestを選択するには、IssueあるいはPull Requestのリストの上部で、すべてを選択してください。 ![画面上のすべてを選択するためのチェックボックスが表示されているスクリーンショット](/assets/images/help/issues/select-all-checkbox.png)
1. IssueあるいはPull Requestのリストの上部で、**Projects (beta)（プロジェクト（ベータ））**をクリックしてください。 ![画面上のすべてを選択するためのチェックボックスが表示されているスクリーンショット](/assets/images/help/issues/projects-beta-assign-button.png)
1. 選択されたIssueあるいはPull Requestを追加したいプロジェクトをクリックしてください。 ![画面上のすべてを選択するためのチェックボックスが表示されているスクリーンショット](/assets/images/help/issues/projects-beta-assign-dropdown.png)

#### IssueあるいはPull Requestの中からプロジェクトをアサインする

1. プロジェクトに追加したいIssueあるいはPull Requestにアクセスしてください。
2. サイドバーで**Projects（プロジェクト）**をクリックしてください。
3. IssueあるいはPull Requestを追加したいプロジェクトを選択してください。
4. あるいは、カスタムフィールドに入力してください。

   ![プロジェクトサイドバー](/assets/images/help/issues/project_side_bar.png)

## ドラフトIssueのIssueへの変換

表レイアウトの場合:

1. 変換したいドラフトIssueの{% octicon "triangle-down" aria-label="the item menu" %}をクリックしてください。
2. **Convert to issue（Issueに変換）**を選択してください。
3. Issueを追加したいリポジトリを選択してください。
4. あるいは、変換したいドラフトIssueの`labels`、`milestone`、`repository`を編集してください。

ボードレイアウトの場合:

1. 変換したいドラフトIssueの{% octicon "kebab-horizontal" aria-label="the item menu" %}をクリックしてください。
2. **Convert to issue（Issueに変換）**を選択してください。
3. Issueを追加したいリポジトリを選択してください。

## プロジェクトからのアイテムの削除

アイテムをアーカイブして、そのアイテムに関するコンテキストをプロジェクト中に保持しながら、アイテムをプロジェクトのビューから削除できます。 アイテムを削除すれば、それをプロジェクトから完全に取り除くことができます。

1. アーカイブもしくは削除したいアイテム（群）を選択してください。 複数のアイテムを選択するには、以下のいずれかのようにしてください。
     - 各アイテムを<kbd>Command</kbd>+クリック（Mac）もしくは<kbd>Ctrl</kbd>+クリック（Windows/Linux）。
     - 1つのアイテムを選択し、続いて<kbd>Shift</kbd>+<kbd>↑</kbd>もしくは<kbd>Shift</kbd>+<kbd>↓</kbd>として、最初に選択されたアイテムの上下にあるアイテムを追加選択。
     - 1つのアイテムを選択し、続いて他のアイテムを<kbd>Shift</kbd>+クリックし、2つのアイテム間のすべてのアイテムを選択。
     - <kbd>Command</kbd>+<kbd>A</kbd>（Mac）あるいは<kbd>Ctrl</kbd>+<kbd>A</kbd>（Windows/Linux）を入力し、ボードレイアウト中の1つの列にあるすべてのアイテム、あるいは表レイアウト中のすべてのアイテムを選択。
2. 選択されたすべてのアイテムをアーカイブするには、<kbd>E</kbd>を入力します。 選択されたすべてのアイテムを削除するには、<kbd>Del</kbd>を入力します。 あるいは{% octicon "triangle-down" aria-label="the item menu" %}（表レイアウトの場合）あるいは{% octicon "kebab-horizontal" aria-label="the item menu" %}（ボードレイアウトの場合）を選択し、続いて希望するアクションを選択してください。

アーカイブされたアイテムはリストアできますが、削除されたアイテムはリストアできません。 詳しい情報については[アーカイブされたアイテムのリストア](#restoring-archived-items)を参照してください。

## アーカイブされたアイテムの復元

1. プロジェクトにアクセスしてください。
1. 右上にある {% octicon "kebab-horizontal" aria-label="the kebab icon" %} をクリックしてください。
1. メニューで**Archived items（アーカイブされたアイテム）**をクリックしてください。
1. あるいは、表示されているアーカイブされたアイテムをフィルタリングするには、アイテムのリストの上にあるテキストボックスにフィルタを入力してください。 利用可能なフィルタに関する詳しい情報については「[プロジェクト（ベータ）のフィルタリング](/issues/trying-out-the-new-projects-experience/filtering-projects)」を参照してください。

   ![アーカイブされているアイテムをフィルタリングするためのフィールドが表示されているスクリーンショット](/assets/images/help/issues/filter-archived-items.png)

1. 各アイテムのタイトルの左で、復元したいアイテムを選択してください。

   ![アーカイブされたアイテムの隣のチェックボックスが表示されているスクリーンショット](/assets/images/help/issues/select-archived-item.png)

1. 選択されたアイテムを復元するには、アイテムのリストの上部で**Restore（復元）**をクリックしてください。

   !["復元"ボタンが表示されているスクリーンショット](/assets/images/help/issues/restore-archived-item-button.png)

## フィールドの追加

フィールドの値が変更されると、プロジェクト及びプロジェクトが追跡するアイテムが最新の状態に保たれるよう、自動的に同期されます。

### 既存のフィールドの表示

プロジェクトは、タイトル、アサインされた人、ラベル、マイルストーン、リポジトリ、レビュー担当者、リンクされたPull Requestへのあらゆる変更を含む、Issue及びPull Requestに関する最新の情報を追跡します。 プロジェクトが初期化された時点では、"title（タイトル）"と"assignees（アサインされた人）"が表示されます。他のフィールドは非表示になります。 プロジェクト内でのそれらのフィールドの可視性は変更できます。

1. {% data reusables.projects.open-command-palette %}
2. "show"と入力を始めてください。
3. 希望するコマンド（たとえば"Show: Repository"）を選択してください。

あるいは、これはUIから行うこともできます。

1. 右端のフィールドヘッダの{% octicon "plus" aria-label="the plus icon" %}をクリックしてください。 プロジェクトのフィールドのドロップダウンメニューが表示されます。 ![フィールドの表示もしくは非表示](/assets/images/help/issues/projects_fields_menu.png)
2. 表示あるいは非表示にしたいフィールドを選択してください。 {% octicon "check" aria-label="check icon" %}は、表示されるフィールドを示します。

### カスタムフィールドの追加

プロジェクトにカスタムフィールドを追加できます。 カスタムフィールドは、プロジェクトのIssueあるいはPull Requestのサイドバー上に表示されます。

カスタムのフィールドは、テキスト、数値、日付、単一選択、繰り返しにすることができます。

- テキスト: 値は任意のテキストにできます。
- 数値: 値は数値でなければなりません。
- 日付: 値は日付でなければなりません。
- 単一選択: 値は指定された値の集合から選択されなければなりません。
- 繰り返し: 値は日付範囲のセット（繰り返し）から選択しなければなりません。 過去の繰り返しは、自動的に"completed"としてマークされ、現在の日付範囲をカバーする繰り返しは"current"としてマークされます。 詳しい情報については「[プロジェクトでの繰り返しの管理](/issues/trying-out-the-new-projects-experience/managing-iterations)」を参照してください。

1. {% data reusables.projects.open-command-palette %} "Create new field"のどこかを入力し始めてください。 コマンドパレットに"Create new field"が表示されたら、選択してください。
2. あるいは、右端のフィールドヘッダの{% octicon "plus" aria-label="the plus icon" %}をクリックしてください。 プロジェクトのフィールドのドロップダウンメニューが表示されます。 **New field（新規フィールド）**をクリックしてください。
3. 新しいフィールドに関する情報を入力するためのポップアップが表示されます。 ![新しいフィールド](/assets/images/help/issues/projects_new_field.png)
4. テキストボックスに、新しいフィールドの名前を入力してください。
5. ドロップダウンメニューを選択し、目的の種類をクリックしてください。
6. タイプとして**Single select（単一選択）**を指定した場合は、選択肢を入力してください。
7. タイプとして**Iteration（繰り返し）**を指定した場合は、最初の繰り返しの日付と、繰り返しの期間を入力してください。 3つの繰り返しが自動的に作成され、プロジェクトの設定ページで繰り返しを追加できます。

単一選択や繰り返しフィールドのドロップダウンの選択肢は、後から編集できます。

{% data reusables.projects.project-settings %}
1. **Fields（フィールド）**の下で、編集したいフィールドを選択してください。
1. 単一選択フィールドでは、選択肢を追加、削除、並び替えができます。
1. 繰り返しフィールドでは、繰り返しの追加や削除、繰り返し名の変更、繰り返しの開始日と期間を変更できます。

   繰り返しフィールドの変更に関する詳しい情報については「[プロジェクトでの繰り返しの管理](/issues/trying-out-the-new-projects-experience/managing-iterations)」を参照してください。

## ビューのカスタマイズ

プロジェクトは、テーブルあるいはボードとしてみることができ、フィールドでのアイテムのグループ化、アイテムのフィルタリングなどができます。 詳しい情報については「[プロジェクト（ベータ）のビューのカスタマイズ](/issues/trying-out-the-new-projects-experience/customizing-your-project-views)」を参照してください。

## 組み込みの自動化の設定

{% data reusables.projects.about-workflows %}

プロジェクトでは、組み込みのワークフローを有効化あるいは無効化できます。

{% data reusables.projects.enable-basic-workflow %}

## リポジトリへのプロジェクトの追加

リポジトリ中で、関連するプロジェクトをリストできます。 リストできるのは、リポジトリを所有している同じユーザもしくはOrganizationが所有しているプロジェクトだけです。

リポジトリのメンバーがリストされているプロジェクトを見るためには、そのプロジェクトを見ることができなければなりません。 詳しい情報については「[プロジェクト（ベータ）の可視性の管理](/issues/trying-out-the-new-projects-experience/managing-the-visibility-of-your-projects)」及び「[プロジェクト（ベータ）へのアクセスの管理](/issues/trying-out-the-new-projects-experience/managing-access-to-projects)」を参照してください。

1. {% data variables.product.prodname_dotcom %}で、リポジトリのメインページにアクセスしてください。
1. {% octicon "table" aria-label="the project icon" %} **Projects（プロジェクト）**をクリックしてください。
1. サイドバーの**Projects (Beta)（プロジェクト（ベータ））**をクリックしてください。
1. **Add project（プロジェクトの追加）**をクリックしてください。
1. 表示される検索バーで、リポジトリを所有しているのと同じユーザあるいはOrganizationが所有しているプロジェクトを検索してください。
1. リポジトリにリストするプロジェクトをクリックしてください。
