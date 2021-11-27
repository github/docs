---
title: プルリクエストをIssueにリンクする
intro: プルリクエストをIssueにリンクして、修正が進行中であることを示し、プルリクエストがマージされるときIssueを自動的にクローズすることができます。
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/linking-a-pull-request-to-an-issue
  - /articles/closing-issues-via-commit-message/
  - /articles/closing-issues-via-commit-messages/
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

**注釈:** プルリクエストにおける特別なキーワードは、プルリクエストがリポジトリの*デフォルト* ブランチをターゲットするときに解釈されます。 ただし、PRのベースが*それ以外のブランチ*である場合、それらのキーワードは無視され、リンクは作成されません。PRのマージはこのIssueに対して何の効果も持ちません。 **キーワードの1つを使用してプルリクエストをIssueにリンクしたい場合は、PRがデフォルトブランチ上になければなりません。**

{% endnote %}

## リンクされたIssueとプルリクエストについて

{% ifversion fpt or ghes or ghae or ghec %}手動で、または{% endif %}プルリクエストの説明でサポートされているキーワードを使用して、Issueをプルリクエストにリンクすることができます。

プルリクエストが対処するIssueにそのプルリクエストにリンクすると、コラボレータは、誰かがそのIssueに取り組んでいることを確認できます。

リンクされたプルリクエストをリポジトリのデフォルトブランチにマージすると、それにリンクされているIssueは自動的にクローズされます。 デフォルトブランチの詳細については、「[デフォルトブランチを変更する](/github/administering-a-repository/changing-the-default-branch)」を参照してください。

## キーワードを使用してプルリクエストをIssueにリンクする

プルリクエストの説明で、またはコミットメッセージで、サポートされているキーワードを使用してプルリクエストにIssueにリンクすることができます (プルリクエストはデフォルトブランチになければなりません)。

* close
* closes
* closed
* fix
* fixes
* fixed
* 解決
* resolves
* resolved

If you use a keyword to reference a pull request comment in another pull request, the pull requests will be linked. Merging the referencing pull request will also close the referenced pull request.

クローズするキーワードの構文は、Issueがプルリクエストと同じリポジトリにあるかどうかによって異なります。

| リンクするIssue       | 構文                                            | サンプル                                                           |
| ---------------- | --------------------------------------------- | -------------------------------------------------------------- |
| Issueが同じリポジトリにある | *KEYWORD* #*ISSUE-NUMBER*                     | `Closes #10`                                                   |
| Issueが別のリポジトリにある | *KEYWORD* *OWNER*/*REPOSITORY*#*ISSUE-NUMBER* | `Fixes octo-org/octo-repo#100`                                 |
| 複数の Issue        | Issueごとに完全な構文を使用                              | `Resolves #10, resolves #123, resolves octo-org/octo-repo#100` |

{% ifversion fpt or ghes or ghae or ghec %}手動でリンクを解除できるのは、手動でリンクされたプルリクエストだけです。 キーワードを使用してリンクしたIssueのリンクを解除するには、プルリクエストの説明を編集してそのキーワードを削除する必要があります。{% endif %}

クローズするキーワードは、コミットメッセージでも使用できます。 デフォルトブランチにコミットをマージするとIssueはクローズされますが、そのコミットを含むプルリクエストは、リンクされたプルリクエストとしてリストされません。


{% ifversion fpt or ghes or ghae or ghec %}
## 手動でプルリクエストをIssueにリンクする

リポジトリへの書き込み権限があるユーザなら誰でも、手動でプルリクエストをIssueにリンクできます。

手動で1つのプルリクエストごとに最大10個のIssueをリンクできます。 Issueとプルリクエストは同じリポジトリになければなりません。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
3. プルリクエストのリストで、Issueにリンクしたいプルリクエストをクリックします。
4. 右のサイドバーで、[**Linked issues**] をクリックします。 ![右サイドバーの [Linked issues]](/assets/images/help/pull_requests/linked-issues.png)
5. プルリクエストにリンクするIssueをクリックします。 ![Issueをリンクするドロップダウン](/assets/images/help/pull_requests/link-issue-drop-down.png)
{% endif %}

## 参考リンク

- [自動リンクされた参照と URL](/articles/autolinked-references-and-urls/#issues-and-pull-requests)
