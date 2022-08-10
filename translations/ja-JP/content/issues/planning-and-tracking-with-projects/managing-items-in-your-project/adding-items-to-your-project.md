---
title: '{% data variables.projects.project_v2 %}へのアイテムの追加'
shortTitle: アイテムの追加
intro: Pull Request、Issue、ドラフトIssueをプロジェクトに個別あるいはまとめて追加する方法を学んでください。
miniTocMaxHeadingLevel: 4
versions:
  feature: projects-v2
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
---

プロジェクトは、ドラフトのIssue、Issue、Pull Requestを追跡できます。

{% note %}

**ノート:** プロジェクトには最大で1,200個のアイテム及び10,000個のアーカイブされたアイテムを含めることができます。

{% endnote %}

### プロジェクトへのIssueやPull Requestの追加

#### IssueあるいはPull RequestのURLの貼り付け

{% data reusables.projects.add-item-via-paste %}

#### IssueあるいはPull Requestの検索

{% data reusables.projects.add-item-bottom-row %}
2. <kbd>#</kbd>を入力してください。
3. Pull RequestあるいはIssueがあるリポジトリを選択してください。 リポジトリ名の一部を入力して、選択肢を狭めることができます。 ![IssueのURLを貼り付けてプロジェクトに追加しているスクリーンショット](/assets/images/help/projects-v2/add-item-select-repo.png)
4. IssueあるいはPull Requestを選択してください。 タイトルの一部を入力して、選択肢を狭めることができます。 ![IssueのURLを貼り付けてプロジェクトに追加しているスクリーンショット](/assets/images/help/projects-v2/add-item-select-issue.png)

#### IssueやPull Requestの一括での追加

1. プロジェクトの最下行で{% octicon "plus" aria-label="plus icon" %}をクリックしてください。 ![プロジェクトの下部に+ボタンが表示されているスクリーンショット](/assets/images/help/projects-v2/omnibar-add.png)
1. **Add item from repository（リポジトリからアイテムを追加）**をクリックしてください。 !["add item from repository" メニューアイテムが表示されているスクリーンショット](/assets/images/help/projects-v2/add-bulk-menu-item.png)
{% data reusables.projects.bulk-add %}

#### リポジトリから複数のIssueあるいはPull Requestを追加する

1. {% data variables.product.product_location %}で、プロジェクトに追加したいIssueあるいはPull Requestが含まれているリポジトリにアクセスしてください。
{% data reusables.repositories.sidebar-issue-pr %}
1. それぞれのIssueのタイトルの左で、プロジェクトに追加したいIssueを選択してください。 ![IssueあるいはPull Requestを選択するためのチェックボックスが表示されているスクリーンショット](/assets/images/help/issues/select-issue-checkbox.png)
1. あるいは、ページ上のすべてのIssueあるいはPull Requestを選択するには、IssueあるいはPull Requestのリストの上部で、すべてを選択してください。 ![画面上のすべてを選択するためのチェックボックスが表示されているスクリーンショット](/assets/images/help/issues/select-all-checkbox.png)
1. IssueあるいはPull Requestのリストの上で**Projects（プロジェクト）**をクリックしてください。 ![プロジェクトのオプションが表示されているスクリーンショット](/assets/images/help/projects-v2/issue-index-project-menu.png)
1. 選択されたIssueあるいはPull Requestを追加したいプロジェクトをクリックしてください。 ![画面上のすべてを選択するためのチェックボックスが表示されているスクリーンショット](/assets/images/help/projects-v2/issue-index-select-project.png)

#### IssueあるいはPull Requestの中からプロジェクトをアサインする

1. プロジェクトに追加したいIssueあるいはPull Requestにアクセスしてください。
2. サイドバーで**Projects（プロジェクト）**をクリックしてください。 ![Issueサイドバーに"Projects"が表示されているスクリーンショット](/assets/images/help/projects-v2/issue-sidebar-projects.png)
3. IssueあるいはPull Requestを追加したいプロジェクトを選択してください。 ![Issueサイドバーからプロジェクトを選択しているところが表示されているスクリーンショット](/assets/images/help/projects-v2/issue-sidebar-select-project.png)
4. あるいは、カスタムフィールドに入力してください。 ![プロジェクトサイドバー](/assets/images/help/projects-v2/issue-edit-project-sidebar.png)

#### コマノン度パレットを使用してIssueあるいはPull Requestを追加する

1. {% data reusables.projects.open-command-palette %}
1. "Add items"と入力し、<kbd>Return</kbd>を押してください。
{% data reusables.projects.bulk-add %}

### ドラフトIssueの作成

ドラフトIssueは、素早くアイデアを捕捉するのに役立ちます。 リポジトリから参照されるIssueやPull Requestとは異なり、ドラフトIssueはプロジェクトの中にだけ存在します。

{% data reusables.projects.add-draft-issue %}

ドラフトIssueには、タイトル、テキストの本文、アサインされた人、プロジェクトからの任意のカスタムフィールドを持たせることができます。 ドラフトIssueのリポジトリ、ラベル、マイルストーンを展開するには、まずドラフトIssueをIssueに変換しなければなりません。 詳しい情報については「[ドラフトIssueのIssueへの変換](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/converting-draft-issues-to-issues)」を参照してください。

{% note %}

**ノート**: ドラフトIssueがIssueに変換されなければ、ドラフトIssueにアサインされたりメンションされたりした人は、通知を受けません。

{% endnote %}
