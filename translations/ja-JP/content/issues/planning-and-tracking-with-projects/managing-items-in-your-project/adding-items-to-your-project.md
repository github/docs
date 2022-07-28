---
title: 'Adding items to your {% data variables.projects.project_v2 %}'
shortTitle: Adding items
intro: 'Learn how to add pull requests, issues, and draft issues to your projects individually or in bulk.'
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

**Note:** A project can contain a maximum of 1,200 items and 10,000 archived items.

{% endnote %}

### Adding issues and pull requests to a project

#### Pasting the URL of an issue or pull request

{% data reusables.projects.add-item-via-paste %}

#### IssueあるいはPull Requestの検索

{% data reusables.projects.add-item-bottom-row %}
2. <kbd>#</kbd>を入力してください。
3. Pull RequestあるいはIssueがあるリポジトリを選択してください。 リポジトリ名の一部を入力して、選択肢を狭めることができます。 ![Screenshot showing pasting an issue URL to add it to the project](/assets/images/help/projects-v2/add-item-select-repo.png)
4. IssueあるいはPull Requestを選択してください。 タイトルの一部を入力して、選択肢を狭めることができます。 ![Screenshot showing pasting an issue URL to add it to the project](/assets/images/help/projects-v2/add-item-select-issue.png)

#### Bulk adding issues and pull requests

1. In the bottom row of the project, click {% octicon "plus" aria-label="plus icon" %}. ![Screenshot showing + button at the bottom of the project](/assets/images/help/projects-v2/omnibar-add.png)
1. Click **Add item from repository**. ![Screenshot showing "add item from repository" menu item](/assets/images/help/projects-v2/add-bulk-menu-item.png)
{% data reusables.projects.bulk-add %}

#### リポジトリから複数のIssueあるいはPull Requestを追加する

1. {% data variables.product.product_location %}で、プロジェクトに追加したいIssueあるいはPull Requestが含まれているリポジトリにアクセスしてください。
{% data reusables.repositories.sidebar-issue-pr %}
1. それぞれのIssueのタイトルの左で、プロジェクトに追加したいIssueを選択してください。 ![IssueあるいはPull Requestを選択するためのチェックボックスが表示されているスクリーンショット](/assets/images/help/issues/select-issue-checkbox.png)
1. あるいは、ページ上のすべてのIssueあるいはPull Requestを選択するには、IssueあるいはPull Requestのリストの上部で、すべてを選択してください。 ![画面上のすべてを選択するためのチェックボックスが表示されているスクリーンショット](/assets/images/help/issues/select-all-checkbox.png)
1. Above the list of issues or pull requests, click **Projects**. ![Screenshot showing projects option](/assets/images/help/projects-v2/issue-index-project-menu.png)
1. 選択されたIssueあるいはPull Requestを追加したいプロジェクトをクリックしてください。 ![画面上のすべてを選択するためのチェックボックスが表示されているスクリーンショット](/assets/images/help/projects-v2/issue-index-select-project.png)

#### IssueあるいはPull Requestの中からプロジェクトをアサインする

1. プロジェクトに追加したいIssueあるいはPull Requestにアクセスしてください。
2. サイドバーで**Projects（プロジェクト）**をクリックしてください。 ![Screenshot showing "Projects" in the issue sidebar](/assets/images/help/projects-v2/issue-sidebar-projects.png)
3. Select the project that you want to add the issue or pull request to. ![Screenshot showing selecting a project from the issue sidebar](/assets/images/help/projects-v2/issue-sidebar-select-project.png)
4. Optionally, populate the custom fields. ![プロジェクトサイドバー](/assets/images/help/projects-v2/issue-edit-project-sidebar.png)

#### Using the command palette to add an issue or pull request

1. {% data reusables.projects.open-command-palette %}
1. Start typing "Add items" and press <kbd>Return</kbd>.
{% data reusables.projects.bulk-add %}

### ドラフトIssueの作成

ドラフトIssueは、素早くアイデアを捕捉するのに役立ちます。 Unlike issues and pull requests that are referenced from your repositories, draft issues exist only in your project.

{% data reusables.projects.add-draft-issue %}

ドラフトIssueには、タイトル、テキストの本文、アサインされた人、プロジェクトからの任意のカスタムフィールドを持たせることができます。 ドラフトIssueのリポジトリ、ラベル、マイルストーンを展開するには、まずドラフトIssueをIssueに変換しなければなりません。 詳しい情報については「[ドラフトIssueのIssueへの変換](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/converting-draft-issues-to-issues)」を参照してください。

{% note %}

**ノート**: ドラフトIssueがIssueに変換されなければ、ドラフトIssueにアサインされたりメンションされたりした人は、通知を受けません。

{% endnote %}
