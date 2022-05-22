---
title: プルリクエストをIssueにリンクする
intro: プルリクエストをIssueにリンクして、修正が進行中であることを示し、プルリクエストがマージされるときIssueを自動的にクローズすることができます。
redirect_from:
  - /articles/closing-issues-via-commit-message/
  - /articles/closing-issues-via-commit-messages/
  - /articles/closing-issues-using-keywords
  - /github/managing-your-work-on-github/closing-issues-using-keywords
  - /github/managing-your-work-on-github/linking-a-pull-request-to-an-issue
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---
{% note %}

**注釈:** プルリクエストにおける特別なキーワードは、プルリクエストがリポジトリの*デフォルト* ブランチをターゲットするときに解釈されます。 ただし、PRのベースが*それ以外のブランチ*である場合、それらのキーワードは無視され、リンクは作成されません。PRのマージはこのIssueに対して何の効果も持ちません。 **キーワードの1つを使用してプルリクエストをIssueにリンクしたい場合は、PRがデフォルトブランチ上になければなりません。**

{% endnote %}

### リンクされたIssueとプルリクエストについて

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}手動で、または{% endif %}プルリクエストの説明でサポートされているキーワードを使用して、Issueをプルリクエストにリンクすることができます。

プルリクエストが対処するIssueにそのプルリクエストにリンクすると、コラボレータは、誰かがそのIssueに取り組んでいることを確認できます。 {% if currentVersion ver_lt "enterprise-server@2.21" %}プルリクエストとIssueが別のリポジトリにある場合は、プルリクエストをマージするユーザーにIssueをクローズする権限もあれば、そのマージが実行された後で{% data variables.product.product_name %}にリンクが表示されます。{% endif %}

リンクされたプルリクエストをリポジトリのデフォルトブランチにマージすると、それにリンクされているIssueは自動的にクローズされます。 デフォルトブランチの詳細については、「[デフォルトブランチを変更する](/github/administering-a-repository/changing-the-default-branch)」を参照してください。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
### 手動でプルリクエストをIssueにリンクする

リポジトリへの書き込み権限があるユーザなら誰でも、手動でプルリクエストをIssueにリンクできます。

手動で1つのプルリクエストごとに最大10個のIssueをリンクできます。 Issueとプルリクエストは同じリポジトリになければなりません。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
3. プルリクエストのリストで、Issueにリンクしたいプルリクエストをクリックします。
4. 右のサイドバーで、[**Linked issues**] をクリックします。 ![右サイドバーの [Linked issues]](/assets/images/help/pull_requests/linked-issues.png)
5. プルリクエストにリンクするIssueをクリックします。 ![Issueをリンクするドロップダウン](/assets/images/help/pull_requests/link-issue-drop-down.png)
{% endif %}

### キーワードを使用してプルリクエストをIssueにリンクする

プルリクエストの説明で、またはコミットメッセージで、サポートされているキーワードを使用してプルリクエストにIssueにリンクすることができます (プルリクエストはデフォルトブランチになければなりません)。

* close
* closes
* closed
* fix
* fixes
* fixed
* resolve
* resolves
* resolved

クローズするキーワードの構文は、Issueがプルリクエストと同じリポジトリにあるかどうかによって異なります。

| リンクするIssue       | 構文                                            | サンプル                                                           |
| ---------------- | --------------------------------------------- | -------------------------------------------------------------- |
| Issueが同じリポジトリにある | *KEYWORD* #*ISSUE-NUMBER*                     | `Closes #10`                                                   |
| Issueが別のリポジトリにある | *KEYWORD* *OWNER*/*REPOSITORY*#*ISSUE-NUMBER* | `Fixes octo-org/octo-repo#100`                                 |
| 複数の Issue        | Issueごとに完全な構文を使用                              | `Resolves #10, resolves #123, resolves octo-org/octo-repo#100` |

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}手動でリンクを解除できるのは、手動でリンクされたプルリクエストだけです。 キーワードを使用してリンクしたIssueのリンクを解除するには、プルリクエストの説明を編集してそのキーワードを削除する必要があります。{% endif %}

クローズするキーワードは、コミットメッセージでも使用できます。 デフォルトブランチにコミットをマージするとIssueはクローズされますが、そのコミットを含むプルリクエストは、リンクされたプルリクエストとしてリストされません。

### 参考リンク

- [自動リンクされた参照と URL](/articles/autolinked-references-and-urls/#issues-and-pull-requests)
