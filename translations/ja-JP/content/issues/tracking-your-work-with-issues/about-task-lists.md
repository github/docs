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
ms.openlocfilehash: 0d6973dfe6fbd59d945602423621918a600b15d7
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "146179512"
---
{% ifversion fpt or ghec %} {% note %}

**注:** 改善されたタスクリストは現在ベータであり、変更されることがあります。

{% endnote %} {% endif %}

## タスクリストについて

タスクリストはタスクの集合で、それぞれのタスクはクリックできるチェックボックス付きの行に個別に表示されます。 タスクが完了しているか未完了かをマークするために、チェックボックスを選択あるいは選択解除できます。 

{% data variables.product.product_name %}上の任意のコメント内で、Markdownを使ってタスクリストを作成できます。 {% ifversion fpt or ghec %}タスクリストで issue、pull request、ディスカッションを参照すると、その参照はタイトルと状態を表示するように展開されます。{% endif %} 

{% ifversion not fpt or ghec %} タスクリストが先頭のコメント内にある場合、タスクリストのサマリ情報を issue と pull request のリスト中で見ることができます。
{% else %}

## Issueのタスクリストについて

タスクリストをIssueの本体に追加すると、そのリストには機能が追加されています。

- IssueについてのTeamの作業を追跡しやすくするために、Issueのタスクリストの進捗が、たとえばリポジトリのIssueのリストなど、{% data variables.product.product_name %}上の様々な場所に表示されます。
- タスクが他のIssueを参照しており、誰かがそのIssueをクローズすると、そのタスクのチェックボックスは自動的に完了としてマークされます。 
- さらなる追跡あるいはディスカッションがタスクに必要な場合、そのタスクにマウスを移動させ、タスクの右上の{% octicon "issue-opened" aria-label="The issue opened icon" %}をクリックし、Issueに変換できます。 Issueを作成する前に詳細を追加するには、キーボードショートカットを使って新規Issueフォームをオープンできます。 詳細については、「[Keyboard shortcuts](/github/getting-started-with-github/using-github/keyboard-shortcuts#issues-and-pull-requests)」 (キーボード ショートカット) を参照してください。
- タスクリストから参照されているIssueは、参照元のIssueで追跡されていることを示します。

![表示されたタスクリスト](/assets/images/help/writing/task-list-rendered.png)

{% endif %}

## タスクリストの作成

{% data reusables.repositories.task-list-markdown %}

{% tip %}

**参考:** クローズされた issue や、リンクされた pull request を持つ issue 内では、タスクリストのアイテムを作成することはできません。

{% endtip %}

## タスクの順序変更

タスクリスト内のアイテムは、タスクのチェックボックスの左をクリックし、新しい場所へドラッグして落とすことによって、順序を変更できます。 同じコメント中のリスト間でタスクを並び替えることができますが、別々のコメント間でタスクを並び替えることはできません。

{% ifversion fpt %} ![並べ替えられたタスクリスト](/assets/images/help/writing/task-list-reordered.gif) {% else %} ![並べ替えられたタスクリスト](/assets/images/enterprise/writing/task-lists-reorder.gif) {% endif %}

{% ifversion fpt %}

## 追跡されたIssueへのアクセス

タスクリストから参照されているIssueは、そのタスクリストを含むIssueから追跡されていることを示します。 追跡されている Issue から追跡元のIssueへアクセスするには、Issue のステータスの隣にある **[追跡元]** セクション内の追跡している Issue 番号をクリックしてください。

![追跡元の例](/assets/images/help/writing/task_list_tracked.png)

{% endif %}

## 参考資料

* 「[記述と書式設定の基本構文](/articles/basic-writing-and-formatting-syntax)」{% ifversion code-scanning-task-lists %}
* 「[タスクリストを使って issue の {% data variables.product.prodname_code_scanning %} アラートを追跡する](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/tracking-code-scanning-alerts-in-issues-using-task-lists)」{% endif %}
