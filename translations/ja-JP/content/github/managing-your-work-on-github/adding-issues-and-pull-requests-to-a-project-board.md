---
title: プロジェクトボードへの Issue およびプルリクエストの追加
intro: Issue やプルリクエストはカードの形でプロジェクトボードに追加し、列にトリアージしていくことができます。
redirect_from:
  - /articles/adding-issues-and-pull-requests-to-a-project/
  - /articles/adding-issues-and-pull-requests-to-a-project-board
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - pull requests
---

以下のようにして、プロジェクトボードに Issue またはプルリクエストカードを追加できます:
- サイドバーの [**Triage**] セクションからカードをドラッグする。
- Issue またはプルリクエストの URL をカード内に入力する。
- プロジェクトボードの検索サイドバーで Issue またはプルリクエストを検索する。

各プロジェクト列には最大 2,500 のカードを置くことができます。 列のカード数が最大に達すると、その列にカードを移動させることはできません。

![トリアージサイドバーからプロジェクトボードの列へ Issue カードを移動させるカーソル](/assets/images/help/projects/add-card-from-sidebar.gif)

{% note %}

**注釈:** ノートをタスクのリマインダ、{% data variables.product.product_name %} 上の任意のリポジトリからの Issue やプルリクエストへの参照、プロジェクトボードへの関連情報の追加として働くようにプロジェクトボードに追加することもできます。 詳細は「[プロジェクトボードにノートを追加する](/articles/adding-notes-to-a-project-board)」を参照してください。

{% endnote %}

{% data reusables.project-management.edit-in-project %}

{% data reusables.project-management.link-repos-to-project-board %}プロジェクトボードに追加するために Issue やプルリクエストを検索する場合、自動的にその検索の対象はリンクされたリポジトリになります。 それらの条件を取り除いて、Organization のすべてのリポジトリを対象に検索することができます。 詳しい情報については、「[リポジトリをプロジェクトボードにリンクする](/articles/linking-a-repository-to-a-project-board)」を参照してください。

### プロジェクトボードへの Issue およびプルリクエストの追加

1. Issue およびプルリクエストを追加するプロジェクトボードに移動します。
2. プロジェクトボードで {% octicon "plus" aria-label="The plus icon" %} [**Add cards**] をクリックします。 ![カードの追加ボタン](/assets/images/help/projects/add-cards-button.png)
3. 検索条件を使って、プロジェクトボードに追加したい Issue と Pull Request を検索してください。 利用できる検索条件に関する詳しい情報については「[Issue を検索する](/articles/searching-issues)」を参照してください。 ![Issue およびプルリクエストを検索](/assets/images/help/issues/issues_search_bar.png)

  {% tip %}

  **参考:**
    - Issue あるいはプルリクエストの URL をカード内でタイプして、それらを追加することもできます。
    - 特定の機能について作業をしているなら、その機能に関連する Issue あるいはプルリクエストにラベルを適用して、そのラベル名を検索することでプロジェクトボードに簡単にカードを追加することができます。 詳細は「[Issue およびプルリクエストへのラベルの適用](/articles/applying-labels-to-issues-and-pull-requests)」を参照してください。

  {% endtip %}
4. フィルタリングされた Issue とプルリクエストのリストから、プロジェクトボードに追加したいカードをドラッグして、正しい列にドロップします。 あるいは、キーボードショートカットを使ってカードを移動させることもできます。 {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}

    {% tip %}

    **ヒント:** ドラッグアンドドロップやキーボードのショートカットを使用してカードを並び替えたり列間で移動させたりできます。 {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}

    {% endtip %}

### サイドバーからのプロジェクトボードへの Issue およびプルリクエストの追加

1. Issue あるいはプルリクエストの右側で、[**Projects {% octicon "gear" aria-label="The Gear icon" %}**] をクリックします。 ![サイドバーのプロジェクトボードボタン](/assets/images/help/projects/sidebar-project.png)
2. 追加したいプロジェクトボードの [**Recent**]、[**Repository**]、[**User**]、[**Organization**] タブをクリックします。 ![Recent、Repository、Organization タブ](/assets/images/help/projects/sidebar-project-tabs.png)
3. [**Filter projects**] フィールドにプロジェクト名を入力します。 ![プロジェクトボードの検索ボックス](/assets/images/help/projects/sidebar-search-project.png)
4. Issueまたはプルリクエストを追加する1つ以上のプロジェクトボードを選択します。 ![選択されたプロジェクトボード](/assets/images/help/projects/sidebar-select-project.png)
5. {% octicon "triangle-down" aria-label="The down triangle icon" %} をクリックし、Issueまたはプルリクエストが必要な列をクリックします。 カードが、選択したプロジェクトボードの列の下部に移動します。 ![[Move card to column] メニュー](/assets/images/help/projects/sidebar-select-project-board-column-menu.png)

### 参考リンク

- [プロジェクトボードについて](/articles/about-project-boards)
- [プロジェクトボードの編集](/articles/editing-a-project-board)
- 「[プロジェクトボードでカードをフィルタリングする](/articles/filtering-cards-on-a-project-board)」
