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
ms.openlocfilehash: 3fa7e52f09f3be67a036000b13f484b29852a741
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 07/13/2022
ms.locfileid: "145130971"
---
プロジェクトは、{% data variables.product.company_short %}のデータと最新の状況を保つアイテムのカスタマイズ可能なコレクションです。 プロジェクトでは、Issue、Pull Request、メモ書きできるアイデアを追跡できます。 カスタムフィールドを追加して、特定の目的のためのビューを作成できます。

{% data reusables.projects.projects-beta %}

## <a name="creating-a-project"></a>プロジェクトを作成する

### <a name="creating-an-organization-project"></a>Organizationプロジェクトの作成

{% data reusables.projects.create-project %}

### <a name="creating-a-user-project"></a>ユーザプロジェクトの作成

{% data reusables.projects.create-user-project %}

## <a name="updating-your-project-description-and-readme"></a>プロジェクトの説明とREADMEの更新

{% data reusables.projects.project-description %}

## <a name="adding-items-to-your-project"></a>プロジェクトへのアイテムの追加

プロジェクトは、ドラフトのIssue、Issue、Pull Requestを追跡できます。

### <a name="creating-draft-issues"></a>ドラフトIssueの作成

ドラフトIssueは、素早くアイデアを捕捉するのに役立ちます。

1. カーソルをプロジェクトの最下行、{% octicon "plus" aria-label="plus icon" %}の隣に持ってきてください。
1. アイデアを入力し、**Enter** キーを押します。
1. 本文のテキストを追加するには、ドラフトIssueのタイトルをクリックしてください。 表示されるマークダウンの入力ボックスに、ドラフト Issue の本文のテキストを入力し、 **[保存]** をクリックします。

ドラフトIssueには、タイトル、テキストの本文、アサインされた人、プロジェクトからの任意のカスタムフィールドを持たせることができます。 ドラフトIssueのリポジトリ、ラベル、マイルストーンを展開するには、まずドラフトIssueをIssueに変換しなければなりません。 詳細については、「[ドラフト Issue の Issue への変換](#converting-draft-issues-to-issues)」を参照してください。

{% note %}

**注:** ドラフト Issue が Issue に変換されなければ、ドラフト Issue に割り当てられたりメンションされたりした人は、通知を受けません。

{% endnote %}

### <a name="issues-and-pull-requests"></a>Issue およびプルリクエスト

#### <a name="paste-the-url-of-an-issue-or-pull-request"></a>IssueあるいはPull RequestのURLの貼り付け

1. カーソルをプロジェクトの最下行、{% octicon "plus" aria-label="plus icon" %}の隣に持ってきてください。
1. IssueあるいはPull RequestのURLを貼り付けてください。

#### <a name="searching-for-an-issue-or-pull-request"></a>IssueあるいはPull Requestの検索

1. カーソルをプロジェクトの最下行、{% octicon "plus" aria-label="plus icon" %}の隣に持ってきてください。
2. <kbd>#</kbd> を入力します。
3. Pull RequestあるいはIssueがあるリポジトリを選択してください。 リポジトリ名の一部を入力して、選択肢を狭めることができます。
4. IssueあるいはPull Requestを選択してください。 タイトルの一部を入力して、選択肢を狭めることができます。

#### <a name="adding-multiple-issues-or-pull-requests-from-a-repository"></a>リポジトリからの複数の issue または pull request を追加する

1. {% data variables.product.product_location %} で、プロジェクトに追加する issue または pull request を含むリポジトリに移動します。
{% data reusables.repositories.sidebar-issue-pr %}
1. プロジェクトに追加する各 issue を、そのタイトルの左側で選びます。
  ![issue または pull request を選ぶチェック ボックスを示すスクリーンショット](/assets/images/help/issues/select-issue-checkbox.png)
1. ページ上のすべての issue または pull request を選ぶ必要がある場合は、issue または pull request の一覧の先頭ですべてを選びます。 
  ![画面上のすべての項目を選ぶチェック ボックスを示すスクリーンショット](/assets/images/help/issues/select-all-checkbox.png)
1. issue または pull request の一覧の上にある **[プロジェクト (ベータ)]** をクリックします。 
  ![画面上のすべての項目を選ぶチェック ボックスを示すスクリーンショット](/assets/images/help/issues/projects-beta-assign-button.png)
1. 選んだ issue または pull request を追加するプロジェクトをクリックします。
  ![画面上のすべての項目を選ぶチェック ボックスを示すスクリーンショット](/assets/images/help/issues/projects-beta-assign-dropdown.png)

#### <a name="assigning-a-project-from-within-an-issue-or-pull-request"></a>IssueあるいはPull Requestの中からプロジェクトをアサインする

1. プロジェクトに追加したいIssueあるいはPull Requestにアクセスしてください。
2. サイド バーの **[プロジェクト]** をクリックします。
3. IssueあるいはPull Requestを追加したいプロジェクトを選択してください。
4. あるいは、カスタムフィールドに入力してください。

   ![プロジェクトサイドバー](/assets/images/help/issues/project_side_bar.png)

## <a name="converting-draft-issues-to-issues"></a>ドラフトIssueのIssueへの変換

表レイアウトの場合:

1. 変換したいドラフトIssueの{% octicon "triangle-down" aria-label="the item menu" %}をクリックしてください。
2. **[Issue に変換]** を選択します。
3. Issueを追加したいリポジトリを選択してください。
4. または、変換するドラフト Issue の `labels`、`milestone`、または `repository` フィールドを編集します。

ボードレイアウトの場合:

1. 変換したいドラフトIssueの{% octicon "kebab-horizontal" aria-label="the item menu" %}をクリックしてください。
2. **[Issue に変換]** を選択します。
3. Issueを追加したいリポジトリを選択してください。

## <a name="removing-items-from-your-project"></a>プロジェクトからのアイテムの削除

アイテムをアーカイブして、そのアイテムに関するコンテキストをプロジェクト中に保持しながら、アイテムをプロジェクトのビューから削除できます。 アイテムを削除すれば、それをプロジェクトから完全に取り除くことができます。

1. アーカイブもしくは削除したいアイテム（群）を選択してください。 複数のアイテムを選択するには、以下のいずれかのようにしてください。
     - 各アイテムを <kbd>Command</kbd> + Click (Mac) または <kbd>Ctrl</kbd> + Click (Windows/Linux) キーで選びます。
     - アイテムを選択してから、<kbd>Shift</kbd> + <kbd>↑</kbd> または <kbd>Shift</kbd> + <kbd>↓</kbd> キーを使用すると、最初に選択したアイテムの上または下にある追加のアイテムを選択できます。
     - 2 つのアイテムの間にあるアイテムをすべて選択するには、最初にアイテムを 1 つ選択し、次に <kbd>Shift</kbd> キーを押しながらもう 1 つのアイテムをクリックします。
     - <kbd>Command</kbd> + <kbd>A</kbd> (Mac) または <kbd>Ctrl</kbd> + <kbd>A</kbd> (Windows/Linux) キーを押すとボード レイアウトの全アイテム、またはテーブル レイアウトの全アイテムを選択できます。
2. 選択したアイテムをすべてアーカイブするには、<kbd>E</kbd> を入力します。選択したアイテムをすべて削除するには、<kbd>Del</kbd> を入力します。あるいは {% octicon "triangle-down" aria-label="the item menu" %} (表レイアウトの場合) または、{% octicon "kebab-horizontal" aria-label="the item menu" %} (ボード レイアウトの場合) を選択してから、希望するアクションを選択します。

アーカイブされたアイテムはリストアできますが、削除されたアイテムはリストアできません。 詳細については、「[アーカイブされたアイテムの復元](#restoring-archived-items)」を参照してください。

## <a name="restoring-archived-items"></a>アーカイブされたアイテムのリストア

1. プロジェクトにアクセスします。
1. 右上の {% octicon "kebab-horizontal" aria-label="the kebab icon" %} をクリックします。
1. メニューの **[アーカイブされたアイテム]** をクリックします。
1. 表示されるアーカイブされたアイテムをフィルター処理する必要がある場合は、アイテムの一覧の上にあるテキスト ボックスにフィルターを入力します。 使用可能なフィルターについて詳しくは、「[プロジェクト (ベータ) のフィルタリング](/issues/trying-out-the-new-projects-experience/filtering-projects)」をご覧ください。

   ![アーカイブされたアイテムをフィルター処理するためのフィールドを示すスクリーンショット](/assets/images/help/issues/filter-archived-items.png)
   
1. 各アイテムのタイトルの左側で、復元するアイテムを選びます。

   ![アーカイブされたアイテムの横にあるチェック ボックスを示すスクリーンショット](/assets/images/help/issues/select-archived-item.png)
   
1. 選んだアイテムを復元するには、アイテムの一覧の上にある **[復元]** をクリックします。 

   ![[復元] ボタンを示すスクリーンショット](/assets/images/help/issues/restore-archived-item-button.png)

## <a name="adding-fields"></a>フィールドの追加

フィールドの値が変更されると、プロジェクト及びプロジェクトが追跡するアイテムが最新の状態に保たれるよう、自動的に同期されます。

### <a name="showing-existing-fields"></a>既存のフィールドの表示

プロジェクトは、タイトル、アサインされた人、ラベル、マイルストーン、リポジトリ、レビュー担当者、リンクされたPull Requestへのあらゆる変更を含む、Issue及びPull Requestに関する最新の情報を追跡します。 プロジェクトが初期化された時点では、"title（タイトル）"と"assignees（アサインされた人）"が表示されます。他のフィールドは非表示になります。 プロジェクト内でのそれらのフィールドの可視性は変更できます。

1. {% data reusables.projects.open-command-palette %}
2. "show"と入力を始めてください。
3. 希望するコマンド（たとえば"Show: Repository"）を選択してください。

あるいは、これはUIから行うこともできます。

1. 右端のフィールドヘッダの{% octicon "plus" aria-label="the plus icon" %}をクリックしてください。 プロジェクトのフィールドのドロップダウンメニューが表示されます。
   ![フィールドの表示または非表示](/assets/images/help/issues/projects_fields_menu.png)
2. 表示あるいは非表示にしたいフィールドを選択してください。 {% octicon "check" aria-label="check icon" %}は、表示されるフィールドを示します。

### <a name="adding-custom-fields"></a>カスタムフィールドの追加

プロジェクトにカスタムフィールドを追加できます。 カスタムフィールドは、プロジェクトのIssueあるいはPull Requestのサイドバー上に表示されます。

カスタムのフィールドは、テキスト、数値、日付、単一選択、繰り返しにすることができます。

- テキスト: 値は任意のテキストにできます。
- 数値: 値は数値でなければなりません。
- 日付: 値は日付でなければなりません。
- 単一選択: 値は指定された値の集合から選択されなければなりません。
- 繰り返し: 値は日付範囲のセット（繰り返し）から選択しなければなりません。 過去の繰り返しは、自動的に"completed"としてマークされ、現在の日付範囲をカバーする繰り返しは"current"としてマークされます。 詳細については、「[プロジェクトでの繰り返し管理」](/issues/trying-out-the-new-projects-experience/managing-iterations)を参照してください。

1. {% data reusables.projects.open-command-palette %} "Create new field"のどこかを入力し始めてください。 コマンドパレットに"Create new field"が表示されたら、選択してください。
2. あるいは、右端のフィールドヘッダの{% octicon "plus" aria-label="the plus icon" %}をクリックしてください。 プロジェクトのフィールドのドロップダウンメニューが表示されます。 **[新しいフィールド]** をクリックします。
3. 新しいフィールドに関する情報を入力するためのポップアップが表示されます。
   ![新しいフィールド](/assets/images/help/issues/projects_new_field.png)
4. テキストボックスに、新しいフィールドの名前を入力してください。
5. ドロップダウンメニューを選択し、目的の種類をクリックしてください。
6. 種類として **Single select** を指定した場合は、オプションを入力します。
7. タイプとして **Iteration** を指定した場合は、最初の繰り返しの日付と、繰り返しの期間を入力します。 3つの繰り返しが自動的に作成され、プロジェクトの設定ページで繰り返しを追加できます。

カスタム フィールドを編集することもできます。

{% data reusables.projects.project-settings %}
1. **[フィールド]** で、編集するフィールドを選択します。
1. 単一選択フィールドでは、選択肢を追加、削除、並び替えができます。
1. 繰り返しフィールドでは、繰り返しの追加や削除、繰り返し名の変更、繰り返しの開始日と期間を変更できます。

   繰り返しフィールドの変更の詳細については、「[プロジェクトでの繰り返しの管理](/issues/trying-out-the-new-projects-experience/managing-iterations)」を参照してください。

## <a name="customizing-your-views"></a>ビューをカスタマイズする方法

プロジェクトは、テーブルあるいはボードとしてみることができ、フィールドでのアイテムのグループ化、アイテムのフィルタリングなどができます。 詳細については、「[プロジェクト (ベータ) のビューのカスタマイズ](/issues/trying-out-the-new-projects-experience/customizing-your-project-views)」を参照してください。

## <a name="configuring-built-in-automation"></a>組み込みの自動化の設定

{% data reusables.projects.about-workflows %}

プロジェクトでは、組み込みのワークフローを有効化あるいは無効化できます。

{% data reusables.projects.enable-basic-workflow %}

## <a name="adding-your-project-to-a-repository"></a>リポジトリへのプロジェクトの追加

リポジトリ中で、関連するプロジェクトをリストできます。 リストできるのは、リポジトリを所有している同じユーザもしくはOrganizationが所有しているプロジェクトだけです。

リポジトリのメンバーがリストされているプロジェクトを見るためには、そのプロジェクトを見ることができなければなりません。 詳細については、「[プロジェクト (ベータ) の可視性の管理](/issues/trying-out-the-new-projects-experience/managing-the-visibility-of-your-projects)」および「[プロジェクト (ベータ) へのアクセス管理」](/issues/trying-out-the-new-projects-experience/managing-access-to-projects)を参照してください。

1. {% data variables.product.prodname_dotcom %}で、リポジトリのメインページにアクセスしてください。
1. {% octicon "table" aria-label="the project icon" %} **[プロジェクト]** をクリックします。
1. サイド バーの **[プロジェクト (ベータ)]** をクリックします。
1. **[プロジェクトの追加]** をクリックします。
1. 表示される検索バーで、リポジトリを所有しているのと同じユーザあるいはOrganizationが所有しているプロジェクトを検索してください。
1. リポジトリにリストするプロジェクトをクリックしてください。
