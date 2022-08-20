---
title: '{% data variables.product.prodname_project_v1 %}へのノートの追加'
intro: '{% data variables.projects.projects_v1_board %}にノートを追加して、タスクリマインダーとして使ったり、{% data variables.projects.projects_v1_board %}に関連する情報を追加したりできます。'
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-project-boards/adding-notes-to-a-project-board
  - /articles/adding-notes-to-a-project
  - /articles/adding-notes-to-a-project-board
  - /github/managing-your-work-on-github/adding-notes-to-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: '{% data variables.product.prodname_project_v1 %}へのノートの追加'
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

{% tip %}

**参考:**
- ノートは、Markdown の構文で書式設定できます。 たとえばヘッディング、リンク、タスクリスト、絵文字を使うことができます。 詳しい情報については[基本的な書き方とフォーマットの構文](/articles/basic-writing-and-formatting-syntax)を参照してください。
- ドラッグアンドドロップやキーボードのショートカットを使用してノートを並び替えたり列間で移動させたりできます。 {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}
- {% data variables.projects.projects_v1_board %}は、ノートを追加するためには少なくとも1つの列を持っていなければなりません。 詳しい情報については[プロジェクトボードの作成](/articles/creating-a-project-board)を参照してください。

{% endtip %}

Issue、Pull Request、あるいは別の{% data variables.projects.projects_v1_board %}のURLをノートに追加すると、テキストの下のサマリカードにプレビューが表示されます。

![Issue および他のプロジェクトボードのプレビューを表示しているプロジェクトボードカード](/assets/images/help/projects/note-with-summary-card.png)

## {% data variables.projects.projects_v1_board %}へのノートの追加

1. ノートを追加したい{% data variables.projects.projects_v1_board %}にアクセスしてください。
2. ノートを追加したい列で {% octicon "plus" aria-label="The plus icon" %} をクリックします。 ![列ヘッダ内のプラスアイコン](/assets/images/help/projects/add-note-button.png)
3. ノートを入力し、[**Add**] をクリックします。 ![ノートの入力フィールドとカードの追加ボタン](/assets/images/help/projects/create-and-add-note-button.png)

  {% tip %}

  **ヒント:** ノート内では、Issue やプルリクエストの URL をカード内に入力してそれらを参照できます。

  {% endtip %}

## ノートの Issue への変換

ノートを作成した後に、それでは必要を十分満たせないことが分かった場合、Issue に変換できます。

ノートを Issue に変換した場合、ノートの内容を使って Issue が自動的に作成されます。 ノートの先頭行が Issue のタイトルになり、ノートのそれ以降の内容が Issue の説明に追加されます。

{% tip %}

**ヒント:** ノートの本体には誰かへの @メンション、他の Issue あるいはプルリクエストへのリンクを追加したり、絵文字を追加したりできます。 これらの{% data variables.product.prodname_dotcom %}形式のMarkdownの機能は{% data variables.projects.projects_v1_board %}のノート内ではサポートされていませんが、ノートがIssueに変換されれば、正しく表示されるようになります。 これらの機能の使い方に関する詳しい情報については[{% data variables.product.prodname_dotcom %}上での書き込みと書式設定について](/articles/about-writing-and-formatting-on-github)を参照してください。

{% endtip %}

1. Issue に変換したいノートにアクセスしてください。
{% data reusables.project-management.project-note-more-options %}
3. [**Convert to issue**] をクリックします。 ![[Convert to issue] ボタン](/assets/images/help/projects/convert-to-issue.png)
4. カードがOrganization内の{% data variables.projects.projects_v1_board %}上にあるなら、ドロップダウンメニューで、Issueを追加したいリポジトリを選択してください。 ![Issue を作成できるリポジトリのリストを示しているドロップダウンメニュー](/assets/images/help/projects/convert-note-choose-repository.png)
5. 事前に記入された Issue のタイトルを編集することもできます。そして Issue の本文を入力してください。 ![Issue のタイトルと本体のためのフィールド](/assets/images/help/projects/convert-note-issue-title-body.png)
6. [**Convert to issue**] をクリックします。
7. ノートは自動的に Issue に変換されます。 {% data variables.projects.projects_v1_board %}で、新しいIssueカードは以前のノートと同じ位置に置かれます。

## ノートの編集と削除

1. 編集あるいは削除したいノートにアクセスします。
{% data reusables.project-management.project-note-more-options %}
3. ノートの内容を編集したい場合には、**[Edit note]** をクリックしてください。 ![ノートの編集ボタン](/assets/images/help/projects/edit-note.png)
4. ノートの内容を削除するには、[**Delete note**] をクリックします。 ![ノートの削除ボタン](/assets/images/help/projects/delete-note.png)

## 参考リンク

- [{% data variables.product.prodname_projects_v1 %}について](/articles/about-project-boards)
- [{% data variables.product.prodname_project_v1 %}を作成する](/articles/creating-a-project-board)
- 「[{% data variables.product.prodname_project_v1 %}の編集](/articles/editing-a-project-board)」
- 「[{% data variables.product.prodname_project_v1 %}へのIssueやPull Requestの追加](/articles/adding-issues-and-pull-requests-to-a-project-board)」
