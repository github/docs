---
title: '{% data variables.product.prodname_project_v1 %} に issue と pull request を追加する'
intro: 'issue や pull request をカードの形式で {% data variables.projects.projects_v1_board %} に追加し、それらを列にトリアージすることができます。'
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
ms.openlocfilehash: 3adfb2c337a417b8e4f932ab9ae9860939217c6c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109692'
---
{% data reusables.projects.project_boards_old %}

次のようにして、issue や pull request のカードを {% data variables.projects.projects_v1_board %} に追加できます。
- サイドバーの **[Triage]\(トリアージ\)** セクションからカードをドラッグする。
- Issue またはプルリクエストの URL をカード内に入力する。
- {% data variables.projects.projects_v1_board %} の検索サイドバーで issue または pull request を検索する。

各プロジェクト列には最大 2,500 のカードを置くことができます。 列のカード数が最大に達すると、その列にカードを移動させることはできません。

![トリアージサイドバーからプロジェクトボードの列へ Issue カードを移動させるカーソル](/assets/images/help/projects/add-card-from-sidebar.gif)

{% note %}

**注:** タスクのリマインダーや、{% data variables.product.product_name %} 上の任意のリポジトリの issue や pull request への参照として機能するように、または {% data variables.projects.projects_v1_board %} に関連情報を追加するために、プロジェクト ボードにノートを追加することもできます。 詳細については、「[プロジェクト ボードへのメモの追加](/articles/adding-notes-to-a-project-board)」を参照してください。

{% endnote %}

{% data reusables.project-management.edit-in-project %}

{% data reusables.project-management.link-repos-to-project-board %}{% data variables.projects.projects_v1_board %} に追加するために issue や pull request を検索する場合、検索のスコープはリンクされたリポジトリに自動的に設定されます。 それらの条件を取り除いて、Organization のすべてのリポジトリを対象に検索することができます。 詳細については、「[リポジトリをプロジェクト ボードにリンクする](/articles/linking-a-repository-to-a-project-board)」を参照してください。

## {% data variables.projects.projects_v1_board %} に issue と pull request を追加する

1. issue や pull request を追加する {% data variables.projects.projects_v1_board %} に移動します。
2. {% data variables.projects.projects_v1_board %} で、{% octicon "plus" aria-label="The plus icon" %} **[カードの追加]** をクリックします。
![[Add cards]\(カードの追加\) ボタン](/assets/images/help/projects/add-cards-button.png)
3. 検索修飾子を使って、{% data variables.projects.projects_v1_board %} に追加する issue や pull request を検索します。 使用できる検索修飾子の詳細については、「[issue の検索](/articles/searching-issues)」を参照してください。
  ![issue および pull request を検索する](/assets/images/help/issues/issues_search_bar.png)

  {% tip %}

  **ヒント:**
    - Issue あるいはプルリクエストの URL をカード内でタイプして、それらを追加することもできます。
    - 特定の機能で作業している場合、その機能に関連する各 issue または pull request にラベルを適用し、そのラベル名を検索することで、{% data variables.projects.projects_v1_board %} にカードを簡単に追加できます。 詳細については、「[issue と pull request にラベルを適用する](/articles/applying-labels-to-issues-and-pull-requests)」を参照してください。

  {% endtip %}
4. issue と pull request のフィルター処理されたリストから、{% data variables.projects.projects_v1_board %} に追加するカードをドラッグして、正しい列にドロップします。 あるいは、キーボードショートカットを使ってカードを移動させることもできます。 {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}

    {% tip %}

    **ヒント:** ドラッグアンドドロップやキーボードのショートカットを使用してカードを並び替えたり列間で移動させたりできます。 {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}

    {% endtip %}

## サイドバーから {% data variables.projects.projects_v1_board %} に issue と pull request を追加する

1. issue または pull request の右側で、 **[Projects]\(プロジェクト\) {% octicon "gear" aria-label="The Gear icon" %}** をクリックします。
  ![サイド バーのプロジェクト ボード ボタン](/assets/images/help/projects/sidebar-project.png)
2. 追加先の {% data variables.projects.projects_v1_board %} の **[最近使用したファイル]** 、 **[リポジトリ]** 、 **[ユーザー]** 、または **[Organization]** タブをクリックします。
  ![[Recent]\(最近使用したファイル\)、[Repository]\(リポジトリ\)、[Organization]\(組織\) タブ](/assets/images/help/projects/sidebar-project-tabs.png)
3. **[Filter projects]\(プロジェクトのフィルター\)** フィールドにプロジェクトの名前を入力します。
  ![プロジェクト ボードの検索ボックス](/assets/images/help/projects/sidebar-search-project.png)
4. issue または pull request を追加する 1 つ以上の {% data variables.projects.projects_v1_boards %} を選びます。
  ![選択されたプロジェクト ボード](/assets/images/help/projects/sidebar-select-project.png)
5. {% octicon "triangle-down" aria-label="The down triangle icon" %} をクリックし、issue または pull request が必要な列をクリックします。 カードが、選んだ {% data variables.projects.projects_v1_board %} の列の末尾に移動します。
  ![カードを列メニューに移動する](/assets/images/help/projects/sidebar-select-project-board-column-menu.png)

## 参考資料

- [{% data variables.product.prodname_projects_v1 %} について](/articles/about-project-boards)
- [{% data variables.product.prodname_project_v1 %} の編集](/articles/editing-a-project-board)
- [{% data variables.product.prodname_project_v1 %} でのカードのフィルター処理](/articles/filtering-cards-on-a-project-board)
