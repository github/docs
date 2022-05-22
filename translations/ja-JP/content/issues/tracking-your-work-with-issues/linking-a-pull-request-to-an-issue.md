---
title: Pull RequestをIssueにリンクする
intro: Pull RequestをIssueにリンクして、修正が進行中であることを示し、Pull RequestがマージされるときIssueを自動的にクローズすることができます。
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/linking-a-pull-request-to-an-issue
  - /articles/closing-issues-via-commit-message
  - /articles/closing-issues-via-commit-messages
  - /articles/closing-issues-using-keywords
  - /github/managing-your-work-on-github/closing-issues-using-keywords
  - /github/managing-your-work-on-github/linking-a-pull-request-to-an-issue
  - /issues/tracking-your-work-with-issues/creating-issues/linking-a-pull-request-to-an-issue
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: IssueへのPRのリンク
---

{% note %}

**注釈:** Pull Requestにおける特別なキーワードは、Pull Requestがリポジトリの*デフォルト* ブランチをターゲットするときに解釈されます。 ただし、PRのベースが*それ以外のブランチ*である場合、それらのキーワードは無視され、リンクは作成されません。PRのマージはこのIssueに対して何の効果も持ちません。 **キーワードの1つを使用してPull RequestをIssueにリンクしたい場合は、PRがデフォルトブランチ上になければなりません。**

{% endnote %}

## リンクされたIssueとPull Requestについて

手動で、またはPull Requestの説明でサポートされているキーワードを使用して、IssueをPull Requestにリンクすることができます。

Pull Requestが対処するIssueにそのPull Requestをリンクすると、コラボレータは、誰かがそのIssueに取り組んでいることを確認できます。

リンクされたPull Requestをリポジトリのデフォルトブランチにマージすると、それにリンクされているIssueは自動的にクローズされます。 デフォルトブランチの詳細については、「[デフォルトブランチを変更する](/github/administering-a-repository/changing-the-default-branch)」を参照してください。

## キーワードを使用してPull RequestをIssueにリンクする

Pull Requestの説明もしくはコミットメッセージ中でサポートされているキーワードを使い、Pull RequestをIssueへリンクできます。 Pull Requestはデフォルトブランチに**ある必要があります**。

* close
* closes
* closed
* fix
* fixes
* fixed
* 解決
* resolves
* resolved

他のPull RequestでPull Requestのコメントを参照するためにキーワードを使用すると、Pull Requestはリンクされます。 参照元のPull Requestをマージすると、参照先のPull Requestもクローズされます。

クローズするキーワードの構文は、IssueがPull Requestと同じリポジトリにあるかどうかによって異なります。

| リンクするIssue       | 構文                                            | サンプル                                                           |
| ---------------- | --------------------------------------------- | -------------------------------------------------------------- |
| Issueが同じリポジトリにある | *KEYWORD* #*ISSUE-NUMBER*                     | `Closes #10`                                                   |
| Issueが別のリポジトリにある | *KEYWORD* *OWNER*/*REPOSITORY*#*ISSUE-NUMBER* | `Fixes octo-org/octo-repo#100`                                 |
| 複数の Issue        | Issueごとに完全な構文を使用                              | `Resolves #10, resolves #123, resolves octo-org/octo-repo#100` |

手動でリンクされたPull Requestのみが手動でリンク解除できます。 キーワードを使用してリンクしたIssueのリンクを解除するには、Pull Requestの説明を編集してそのキーワードを削除する必要があります。

クローズするキーワードは、コミットメッセージでも使用できます。 デフォルトブランチにコミットをマージするとIssueはクローズされますが、そのコミットを含むPull Requestは、リンクされたPull Requestとしてリストされません。

## 手動でPull RequestをIssueにリンクする

リポジトリへの書き込み権限があるユーザなら誰でも、手動でプルリクエストをIssueにリンクできます。

手動で1つのプルリクエストごとに最大10個のIssueをリンクできます。 Issueとプルリクエストは同じリポジトリになければなりません。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
3. Pull Requestのリストで、IssueにリンクしたいPull Requestをクリックします。
{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6234 %}
4. 右のサイドバーで、"Development（開発）"セクション内で{% octicon "gear" aria-label="The Gear icon" %}をクリックしてください。
{% else %}
4. 右のサイドバーで、[**Linked issues**] をクリックします。 ![右サイドバーの [Linked issues]](/assets/images/help/pull_requests/linked-issues.png)
{% endif %}
5. Pull RequestにリンクするIssueをクリックします。 ![Issueをリンクするドロップダウン](/assets/images/help/pull_requests/link-issue-drop-down.png)

## 参考リンク

- [自動リンクされた参照と URL](/articles/autolinked-references-and-urls/#issues-and-pull-requests)
