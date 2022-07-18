---
title: タスクリストについて
intro: タスクリストを使って、IssueやPull Requestの作業を小さなタスクに分割し、作業全体が完了するまで追跡してください。
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/about-task-lists
  - /articles/about-task-lists
  - /github/managing-your-work-on-github/about-task-lists
  - /issues/tracking-your-work-with-issues/creating-issues/about-task-lists
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
---

{% ifversion fpt or ghec %}
{% note %}

**ノート:** 改善されたタスクリストは現在ベータであり、変更されることがあります。

{% endnote %}
{% endif %}

## タスクリストについて

タスクリストはタスクの集合で、それぞれのタスクはクリックできるチェックボックス付きの行に個別に表示されます。 タスクが完了しているか未完了かをマークするために、チェックボックスを選択あるいは選択解除できます。

{% data variables.product.product_name %}上の任意のコメント内で、Markdownを使ってタスクリストを作成できます。 {% ifversion fpt or ghec %}タスクリストでIssue、Pull Request、ディスカッションを参照すると、その参照はタイトルと状態を表示するように展開されます。{% endif %}

{% ifversion not fpt or ghec %}
タスクリストが先頭のコメント内にある場合、タスクリストのサマリ情報を Issue およびプルリクエストのリスト中で見ることができます。
{% else %}

## Issueのタスクリストについて

タスクリストをIssueの本体に追加すると、そのリストには機能が追加されています。

- IssueについてのTeamの作業を追跡しやすくするために、Issueのタスクリストの進捗が、たとえばリポジトリのIssueのリストなど、{% data variables.product.product_name %}上の様々な場所に表示されます。
- タスクが他のIssueを参照しており、誰かがそのIssueをクローズすると、そのタスクのチェックボックスは自動的に完了としてマークされます。
- さらなる追跡あるいはディスカッションがタスクに必要な場合、そのタスクにマウスを移動させ、タスクの右上の{% octicon "issue-opened" aria-label="The issue opened icon" %}をクリックし、Issueに変換できます。 Issueを作成する前に詳細を追加するには、キーボードショートカットを使って新規Issueフォームをオープンできます。 詳細は「[キーボードのショートカット](/github/getting-started-with-github/using-github/keyboard-shortcuts#issues-and-pull-requests)」を参照してください。
- タスクリストから参照されているIssueは、参照元のIssueで追跡されていることを示します。

![表示されたタスクリスト](/assets/images/help/writing/task-list-rendered.png)

{% endif %}

## タスクリストの作成

{% data reusables.repositories.task-list-markdown %}

{% tip %}

**参考:** クローズされたIssueや、リンクされたPull Requestを持つIssue内では、タスクリストのアイテムを作成することはできません。

{% endtip %}

## タスクの順序変更

タスクリスト内のアイテムは、タスクのチェックボックスの左をクリックし、新しい場所へドラッグして落とすことによって、順序を変更できます。 同じコメント中のリスト間でタスクを並び替えることができますが、別々のコメント間でタスクを並び替えることはできません。

{% ifversion fpt %} ![順序変更されたタスクリスト](/assets/images/help/writing/task-list-reordered.gif)
{% else %} ![Reordered task list](/assets/images/enterprise/writing/task-lists-reorder.gif) {% endif %}

{% ifversion fpt %}

## 追跡されたIssueへのアクセス

タスクリストから参照されているIssueは、そのタスクリストを含むIssueから追跡されていることを示します。 追跡されているIssueから追跡元のIssueへアクセスするには、Issueのステータスの隣にある**Tracked in**セクション内の追跡しているIssue番号をクリックしてください。

![追跡元の例](/assets/images/help/writing/task_list_tracked.png)

{% endif %}

## 参考リンク

* 「[基本的な執筆とフォーマットの構文](/articles/basic-writing-and-formatting-syntax)」{% ifversion code-scanning-task-lists %}
* 「タスクリストを使ったIssue内の[{% data variables.product.prodname_code_scanning %} アラートの追跡](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/tracking-code-scanning-alerts-in-issues-using-task-lists)」{% endif %}
