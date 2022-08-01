---
title: 'Adding issues and pull requests to a {% data variables.product.prodname_project_v1 %}'
intro: 'You can add issues and pull requests to a {% data variables.projects.projects_v1_board %} in the form of cards and triage them into columns.'
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-project-boards/adding-issues-and-pull-requests-to-a-project-board
  - /articles/adding-issues-and-pull-requests-to-a-project
  - /articles/adding-issues-and-pull-requests-to-a-project-board
  - /github/managing-your-work-on-github/adding-issues-and-pull-requests-to-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Add issues & PRs to {% data variables.product.prodname_project_v1 %}'
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

You can add issue or pull request cards to your {% data variables.projects.projects_v1_board %} by:
- サイドバーの [**Triage**] セクションからカードをドラッグする。
- Issue またはプルリクエストの URL をカード内に入力する。
- Searching for issues or pull requests in the {% data variables.projects.projects_v1_board %} search sidebar.

各プロジェクト列には最大 2,500 のカードを置くことができます。 列のカード数が最大に達すると、その列にカードを移動させることはできません。

![トリアージサイドバーからプロジェクトボードの列へ Issue カードを移動させるカーソル](/assets/images/help/projects/add-card-from-sidebar.gif)

{% note %}

**Note:** You can also add notes to your project board to serve as task reminders, references to issues and pull requests from any repository on {% data variables.product.product_name %}, or to add related information to your {% data variables.projects.projects_v1_board %}. 詳細は「[プロジェクトボードにノートを追加する](/articles/adding-notes-to-a-project-board)」を参照してください。

{% endnote %}

{% data reusables.project-management.edit-in-project %}

{% data reusables.project-management.link-repos-to-project-board %} When you search for issues and pull requests to add to your {% data variables.projects.projects_v1_board %}, the search automatically scopes to your linked repositories. それらの条件を取り除いて、Organization のすべてのリポジトリを対象に検索することができます。 詳しい情報については、「[リポジトリをプロジェクトボードにリンクする](/articles/linking-a-repository-to-a-project-board)」を参照してください。

## Adding issues and pull requests to a {% data variables.projects.projects_v1_board %}

1. Navigate to the {% data variables.projects.projects_v1_board %} where you want to add issues and pull requests.
2. In your {% data variables.projects.projects_v1_board %}, click {% octicon "plus" aria-label="The plus icon" %} **Add cards**. ![カードの追加ボタン](/assets/images/help/projects/add-cards-button.png)
3. Search for issues and pull requests to add to your {% data variables.projects.projects_v1_board %} using search qualifiers. 利用できる検索条件に関する詳しい情報については「[Issue を検索する](/articles/searching-issues)」を参照してください。 ![Issue およびプルリクエストを検索](/assets/images/help/issues/issues_search_bar.png)

  {% tip %}

  **参考:**
    - Issue あるいはプルリクエストの URL をカード内でタイプして、それらを追加することもできます。
    - If you're working on a specific feature, you can apply a label to each related issue or pull request for that feature, and then easily add cards to your {% data variables.projects.projects_v1_board %} by searching for the label name. 詳細は「[Issue およびプルリクエストへのラベルの適用](/articles/applying-labels-to-issues-and-pull-requests)」を参照してください。

  {% endtip %}
4. From the filtered list of issues and pull requests, drag the card you'd like to add to your {% data variables.projects.projects_v1_board %} and drop it in the correct column. あるいは、キーボードショートカットを使ってカードを移動させることもできます。 {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}

    {% tip %}

    **ヒント:** ドラッグアンドドロップやキーボードのショートカットを使用してカードを並び替えたり列間で移動させたりできます。 {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}

    {% endtip %}

## Adding issues and pull requests to a {% data variables.projects.projects_v1_board %} from the sidebar

1. Issue あるいはプルリクエストの右側で、[**Projects {% octicon "gear" aria-label="The Gear icon" %}**] をクリックします。 ![サイドバーのプロジェクトボードボタン](/assets/images/help/projects/sidebar-project.png)
2. Click the **Recent**, **Repository**,**User**, or **Organization** tab for the {% data variables.projects.projects_v1_board %} you would like to add to. ![Recent、Repository、Organization タブ](/assets/images/help/projects/sidebar-project-tabs.png)
3. [**Filter projects**] フィールドにプロジェクト名を入力します。 ![プロジェクトボードの検索ボックス](/assets/images/help/projects/sidebar-search-project.png)
4. Select one or more {% data variables.projects.projects_v1_boards %} where you want to add the issue or pull request. ![選択されたプロジェクトボード](/assets/images/help/projects/sidebar-select-project.png)
5. {% octicon "triangle-down" aria-label="The down triangle icon" %} をクリックし、Issueまたはプルリクエストが必要な列をクリックします。 The card will move to the bottom of the {% data variables.projects.projects_v1_board %} column you select. ![[Move card to column] メニュー](/assets/images/help/projects/sidebar-select-project-board-column-menu.png)

## 参考リンク

- [{% data variables.product.prodname_projects_v1 %}について](/articles/about-project-boards)
- "[Editing a {% data variables.product.prodname_project_v1 %}](/articles/editing-a-project-board)"
- "[Filtering cards on a {% data variables.product.prodname_project_v1 %}](/articles/filtering-cards-on-a-project-board)"
