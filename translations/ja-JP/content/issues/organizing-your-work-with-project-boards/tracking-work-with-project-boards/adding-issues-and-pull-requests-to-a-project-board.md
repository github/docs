---
title: '{% data variables.product.prodname_project_v1 %}へのIssueとPull Requestの追加'
intro: 'カードの形で{% data variables.projects.projects_v1_board %}にIssueやPull Requestを追加し、列にトリアージしていくことができます。'
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-project-boards/adding-issues-and-pull-requests-to-a-project-board
  - /articles/adding-issues-and-pull-requests-to-a-project
  - /articles/adding-issues-and-pull-requests-to-a-project-board
  - /github/managing-your-work-on-github/adding-issues-and-pull-requests-to-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: '{% data variables.product.prodname_project_v1 %}へのIssueとPRの追加'
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

以下の方法で、{% data variables.projects.projects_v1_board %}にIssue及びPull Requestカードを追加できます。
- サイドバーの [**Triage**] セクションからカードをドラッグする。
- Issue またはPull Requestの URL をカード内に入力する。
- {% data variables.projects.projects_v1_board %}の検索サイドバーでIssueもしくはPull Requestを検索する。

各プロジェクト列には最大 2,500 のカードを置くことができます。 列のカード数が最大に達すると、その列にカードを移動させることはできません。

![トリアージサイドバーからプロジェクトボードの列へ Issue カードを移動させるカーソル](/assets/images/help/projects/add-card-from-sidebar.gif)

{% note %}

**ノート:**ノートをプロジェクトボードに追加し、タスクのリマインダとして働かせて{% data variables.product.product_name %}上の任意のリポジトリからIssueやPull Requestを参照させたり、{% data variables.projects.projects_v1_board %}に関連する情報を追加したりすることができます。 詳細は「[プロジェクトボードにノートを追加する](/articles/adding-notes-to-a-project-board)」を参照してください。

{% endnote %}

{% data reusables.project-management.edit-in-project %}

{% data reusables.project-management.link-repos-to-project-board %} {% data variables.projects.projects_v1_board %}に追加するためにIssueやPull Requestを検索する場合、検索は自動的にリンクされたリポジトリをスコープとします。 それらの条件を取り除いて、Organization のすべてのリポジトリを対象に検索することができます。 詳しい情報については、「[リポジトリをプロジェクトボードにリンクする](/articles/linking-a-repository-to-a-project-board)」を参照してください。

## {% data variables.projects.projects_v1_board %}へのIssueやPull Requestの追加

1. IssueやPull Requestを追加したい{% data variables.projects.projects_v1_board %}にアクセスしてください。
2. {% data variables.projects.projects_v1_board %}で、{% octicon "plus" aria-label="The plus icon" %} **Add cards（カードの追加）**をクリックしてください。 ![カードの追加ボタン](/assets/images/help/projects/add-cards-button.png)
3. 検索修飾子を使って、{% data variables.projects.projects_v1_board %}に追加するIssueやPull Requestを検索してください。 利用できる検索条件に関する詳しい情報については「[Issue を検索する](/articles/searching-issues)」を参照してください。 ![Issue およびプルリクエストを検索](/assets/images/help/issues/issues_search_bar.png)

  {% tip %}

  **参考:**
    - Issue あるいはPull Requestの URL をカード内でタイプして、それらを追加することもできます。
    - 特定の機能について作業をしているなら、その機能に関連するそれぞれのIssueやPull Requestにラベルを適用し、そのラベル名を検索することによって簡単に{% data variables.projects.projects_v1_board %}にカードを追加できます。 詳細は「[Issue およびPull Requestへのラベルの適用](/articles/applying-labels-to-issues-and-pull-requests)」を参照してください。

  {% endtip %}
4. フィルタされたIssue及びPull Requestのリストから、{% data variables.projects.projects_v1_board %}に追加したいカードをドラッグして、適切な列にドロップしてください。 あるいは、キーボードショートカットを使ってカードを移動させることもできます。 {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}

    {% tip %}

    **ヒント:** ドラッグアンドドロップやキーボードのショートカットを使用してカードを並び替えたり列間で移動させたりできます。 {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}

    {% endtip %}

## サイドバーからの{% data variables.projects.projects_v1_board %}へのIssueやPull Requestの追加

1. Issue あるいはPull Requestの右側で、[**Projects {% octicon "gear" aria-label="The Gear icon" %}**] をクリックしてください。 ![サイドバーのプロジェクトボードボタン](/assets/images/help/projects/sidebar-project.png)
2. 追加したい{% data variables.projects.projects_v1_board %}の**Recent**、**Repository**、**User**、**Organization**のいずれかのタブをクリックしてください。 ![Recent、Repository、Organization タブ](/assets/images/help/projects/sidebar-project-tabs.png)
3. [**Filter projects**] フィールドにプロジェクト名を入力してください。 ![プロジェクトボードの検索ボックス](/assets/images/help/projects/sidebar-search-project.png)
4. IssueもしくはPull Requestを追加したい1つ以上の{% data variables.projects.projects_v1_boards %}を選択してください。 ![選択されたプロジェクトボード](/assets/images/help/projects/sidebar-select-project.png)
5. {% octicon "triangle-down" aria-label="The down triangle icon" %} をクリックし、IssueまたはPull Requestが必要な列をクリックします。 カードは選択した{% data variables.projects.projects_v1_board %}列の下部に移動します。 ![[Move card to column] メニュー](/assets/images/help/projects/sidebar-select-project-board-column-menu.png)

## 参考リンク

- [{% data variables.product.prodname_projects_v1 %}について](/articles/about-project-boards)
- 「[{% data variables.product.prodname_project_v1 %}の編集](/articles/editing-a-project-board)」
- 「[{% data variables.product.prodname_project_v1 %}のカードのフィルタリング](/articles/filtering-cards-on-a-project-board)」
