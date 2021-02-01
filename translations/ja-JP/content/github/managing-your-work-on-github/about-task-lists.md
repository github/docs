---
title: タスクリストについて
intro: タスクリストを使って、リポジトリ内のプルリクエストや Issue へのコメント、あるいは Markdown ファイル内でチェックボックスの付いたアイテムのリストを作成できます。
redirect_from:
  - /articles/about-task-lists
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

タスクリストは、コメント内でクリックできるチェックボックスと共に表示されます。 チェックボックスを選択するか選択を解除して、それらが完了したか、あるいは未完了であることをマークできます。

タスクリストは、Markdown ファイル内では読み取りのみのチェックボックスとして表示されます。 リポジトリに書き込み権限を持っている人は、そのファイルを編集してチェックボックスの選択あるいは選択解除ができます。

タスクリストが先頭のコメント内にある場合、タスクリストのサマリ情報を Issue およびプルリクエストのリスト中で見ることができます。

![タスクリストのサマリ](/assets/images/help/issues/task-list-summary.png)

### タスクリストの作成

{% data reusables.repositories.task-list-markdown %}

### タスクの順序変更

単一コメント内のタスクリストでは、タスクのチェックのボックスの左をクリックして新しい場所にドラッグアンドドロップすることで、順序を変更できます。 コメント内に複数のリストがある場合、1 つのコメント内でタスクの順序を変更できます。 別々のコメント間でタスクを追加したり順序変更したりすることはできません。

![順序変更されたタスクリスト](/assets/images/help/writing/task-list-reordered.gif)

### 参考リンク

* [基本的な書き方とフォーマットの構文](/articles/basic-writing-and-formatting-syntax)
