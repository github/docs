---
title: '{% data variables.product.prodname_project_v1 %}でのカードのフィルタリング'
intro: '{% data variables.projects.projects_v1_board %}上のカードをフィルタリングして、特定のカードを検索したりカードのサブセットを表示したりできます。'
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-project-boards/filtering-cards-on-a-project-board
  - /articles/filtering-cards-on-a-project-board
  - /github/managing-your-work-on-github/filtering-cards-on-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Filter cards on {% data variables.product.prodname_project_v1 %}'
allowTitleToDifferFromFilename: true
ms.openlocfilehash: f203785a6fc18dc5f67b2ae62934aa10c2f6e8b8
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109556'
---
{% data reusables.projects.project_boards_old %}

カードでは、任意の担当者、マイルストーン、またはラベルをクリックして、その修飾子で{% data variables.projects.projects_v1_board %}をフィルター処理できます。 検索をクリアするには、同じアサインされた人、マイルストーン、またはラベルを再度クリックします。

また、各{% data variables.projects.projects_v1_board %}の上部にある [カードをフィルタリングします] 検索バーを使用して、カードを検索することも可能です。 以下の検索修飾子をさまざまに組み合わせて使用したり、検索したいテキストを入力したりすることで、カードをフィルタリングできます。

- `author:USERNAME` を使用して、作成者でカードをフィルター処理する
- `assignee:USERNAME` または `no:assignee` を使用して、アサインされた人でカードをフィルター処理する
- `label:LABEL`、`label:"MULTI-WORD LABEL NAME"`、または `no:label` を使用して、ラベルでカードをフィルター処理する
- `milestone:MY-MILESTONE` を使用して、マイルストーンでフィルター処理する
- `state:open`、`state:closed`、または `state:merged` を使用して、状態でカードをフィルター処理する
- `review:none`、`review:required`、`review:approved`、または `review:changes_requested` を使用して、レビューの状態でフィルター処理する
- `status:pending`、`status:success`、または `status:failure` を使用して、検査の状態でフィルター処理する
- `type:issue`、`type:pr`、または `type:note` を使用して、種類でカードをフィルター処理する
- `is:open`、`is:closed`、または `is:merged`、および `is:issue`、`is:pr`、または `is:note` を使用して、状態と種類でカードをフィルター処理する
- `linked:pr` を使用して、クローズしている参照で、pull request にリンクされている issue をフィルター処理する
- `repo:ORGANIZATION/REPOSITORY` を使用して、組織全体の{% data variables.projects.projects_v1_board %}のリポジトリでカードをフィルタリングする

1. フィルタリングするカードを含む{% data variables.projects.projects_v1_board %}に移動します。
2. プロジェクトのカード列の上で、[Filter cards] 検索バーをクリックして検索クエリを入力し、カードをフィルタリングします。
![カードのフィルタリング検索バー](/assets/images/help/projects/filter-card-search-bar.png)

{% tip %}

**ヒント:** フィルター処理されたカードをドラッグ アンド ドロップしたり、キーボードのショートカットを使用して列間で移動させたりすることができます。 {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}

{% endtip %}

## 参考資料

- 「[{% data variables.product.prodname_projects_v1 %} について](/articles/about-project-boards)」
- 「[{% data variables.product.prodname_project_v1 %}への issue と pull request の追加](/articles/adding-issues-and-pull-requests-to-a-project-board)」
- 「[{% data variables.product.prodname_project_v1 %}へのノートの追加](/articles/adding-notes-to-a-project-board)」
