---
title: '{% data variables.product.prodname_project_v1 %} にノートを追加する'
intro: '{% data variables.projects.projects_v1_board %} にノートを追加して、タスクのリマインダーとして機能させたり、{% data variables.projects.projects_v1_board %} に関連する情報を追加したりすることができます。'
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-project-boards/adding-notes-to-a-project-board
  - /articles/adding-notes-to-a-project
  - /articles/adding-notes-to-a-project-board
  - /github/managing-your-work-on-github/adding-notes-to-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Add notes to {% data variables.product.prodname_project_v1 %}'
allowTitleToDifferFromFilename: true
ms.openlocfilehash: fc9df02b211056a08ed608a6c98b9d2f0b78c5b7
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109788'
---
{% data reusables.projects.project_boards_old %}

{% tip %}

**ヒント:**
- ノートは、Markdown の構文で書式設定できます。 たとえばヘッディング、リンク、タスクリスト、絵文字を使うことができます。 詳細については、「[基本的な書き方とフォーマットの構文](/articles/basic-writing-and-formatting-syntax)」を参照してください。
- ドラッグアンドドロップやキーボードのショートカットを使用してノートを並び替えたり列間で移動させたりできます。 {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}
- ノートを追加するには、{% data variables.projects.projects_v1_board %} に少なくとも 1 つの列が必要です。 詳細については、「[プロジェクト ボードの作成](/articles/creating-a-project-board)」を参照してください。

{% endtip %}

issue、pull request、または別の {% data variables.projects.projects_v1_board %} に対する URL をノートに追加すると、テキストの下のサマリー カードにプレビューが表示されます。

![Issue および他のプロジェクトボードのプレビューを表示しているプロジェクトボードカード](/assets/images/help/projects/note-with-summary-card.png)

## {% data variables.projects.projects_v1_board %} にノートを追加する

1. ノートを追加する {% data variables.projects.projects_v1_board %} に移動します。
2. メモを追加する列で [{% octicon "plus" aria-label="The plus icon" %}] をクリックします。
![列ヘッダー内のプラス アイコン](/assets/images/help/projects/add-note-button.png)
3. メモを入力し、 **[Add]\(追加\)** をクリックします。
![メモの入力フィールドとカードの追加ボタン](/assets/images/help/projects/create-and-add-note-button.png)

  {% tip %}

  **ヒント:** メモ内で issue または pull request を参照するには、カードにその URL を入力します。

  {% endtip %}

## ノートの Issue への変換

ノートを作成した後に、それでは必要を十分満たせないことが分かった場合、Issue に変換できます。

ノートを Issue に変換した場合、ノートの内容を使って Issue が自動的に作成されます。 ノートの先頭行が Issue のタイトルになり、ノートのそれ以降の内容が Issue の説明に追加されます。

{% tip %}

**ヒント:** メモの本文にコンテンツを追加して他のユーザーを @mention したり、別の issue や pull request にリンクしたり、絵文字を追加したりできます。 これらの {% data variables.product.prodname_dotcom %} 形式の Markdown の機能は、{% data variables.projects.projects_v1_board %} のノート内ではサポートされていませんが、ノートが issue に変換されると、正しく表示されるようになります。 これらの機能の使用方法の詳細については、「[{% data variables.product.prodname_dotcom %} での書き込みと書式設定について](/articles/about-writing-and-formatting-on-github)」を参照してください。

{% endtip %}

1. Issue に変換したいノートにアクセスしてください。
{% data reusables.project-management.project-note-more-options %}
3. **[Convert to issue]\(issue に変換\)** をクリックします。
  ![[Convert to issue]\(issue に変換\) ボタン](/assets/images/help/projects/convert-to-issue.png)
4. カードが Organization 全体の {% data variables.projects.projects_v1_board %} 上にある場合は、ドロップダウン メニューで issue を追加するリポジトリを選びます。
  ![issue を作成できるリポジトリのリストを示しているドロップダウン メニュー](/assets/images/help/projects/convert-note-choose-repository.png)
5. 事前に記入された Issue のタイトルを編集することもできます。そして Issue の本文を入力してください。
  ![issue のタイトルと本体のためのフィールド](/assets/images/help/projects/convert-note-issue-title-body.png)
6. **[Convert to issue]\(issue に変換\)** をクリックします。
7. ノートは自動的に Issue に変換されます。 {% data variables.projects.projects_v1_board %} で、新しい issue のカードは以前のノートと同じ場所に置かれます。

## ノートの編集と削除

1. 編集あるいは削除したいノートにアクセスします。
{% data reusables.project-management.project-note-more-options %}
3. メモの内容を編集するには、 **[Edit note]\(メモの編集\)** をクリックします。
  ![メモの編集ボタン](/assets/images/help/projects/edit-note.png)
4. メモの内容を削除するには、 **[Delete note]\(メモの削除\)** をクリックします。
  ![メモの削除ボタン](/assets/images/help/projects/delete-note.png)

## 参考資料

- [{% data variables.product.prodname_projects_v1 %} について](/articles/about-project-boards)
- [{% data variables.product.prodname_project_v1 %} の作成](/articles/creating-a-project-board)
- [{% data variables.product.prodname_project_v1 %} の編集](/articles/editing-a-project-board)
- [{% data variables.product.prodname_project_v1 %} に issue と pull request を追加する](/articles/adding-issues-and-pull-requests-to-a-project-board)
