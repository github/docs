---
title: プルリクエストをIssueにリンクする
intro: 'You can link a pull request to an issue to{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %} show that a fix is in progress and to{% endif %} automatically close the issue when the pull request is merged.'
redirect_from:
  - /articles/closing-issues-via-commit-message/
  - /articles/closing-issues-via-commit-messages/
  - /articles/closing-issues-using-keywords
  - /github/managing-your-work-on-github/closing-issues-using-keywords
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% note %}

**Note:** The special keywords in a pull request description are interpreted when the pull request targets the repository's *default* branch. However, if the PR's base is *any other branch*, then these keywords are ignored, no links are created and merging the PR has no effect on the issues. **If you want to link a pull request to an issue using a keyword, the PR must be on the default branch.**

{% endnote %}

### リンクされたIssueとプルリクエストについて

You can link an issue to a pull request {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}manually or {% endif %}using a supported keyword in the pull request description.

プルリクエストが対処するIssueにそのプルリクエストにリンクすると、コラボレータは、誰かがそのIssueに取り組んでいることを確認できます。 {% if currentVersion ver_lt "enterprise-server@2.21" %}If the pull request and the issue are in different repositories, {% data variables.product.product_name %} will display the link after the pull request is merged, if the person who merges the pull request also has permission to close the issue.{% endif %}

リンクされたプルリクエストをリポジトリのデフォルトブランチにマージすると、それにリンクされているIssueは自動的にクローズされます。 For more information about the default branch, see "[Changing the default branch](/github/administering-a-repository/changing-the-default-branch)."

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
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

You can link a pull request to an issue by using a supported keyword in the pull request's description or in a commit message (please note that the pull request must be on the default branch).

* close
* closes
* closed
* fix
* fixes
* fixed
* 解決
* resolves
* resolved

クローズするキーワードの構文は、Issueがプルリクエストと同じリポジトリにあるかどうかによって異なります。

| リンクするIssue       | 構文                                            | サンプル                                                           |
| ---------------- | --------------------------------------------- | -------------------------------------------------------------- |
| Issueが同じリポジトリにある | *KEYWORD* #*ISSUE-NUMBER*                     | `Closes #10`                                                   |
| Issueが別のリポジトリにある | *KEYWORD* *OWNER*/*REPOSITORY*#*ISSUE-NUMBER* | `Fixes octo-org/octo-repo#100`                                 |
| 複数の Issue        | Issueごとに完全な構文を使用                              | `Resolves #10, resolves #123, resolves octo-org/octo-repo#100` |

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}Only manually linked pull requests can be manually unlinked. キーワードを使用してリンクしたIssueのリンクを解除するには、プルリクエストの説明を編集してそのキーワードを削除する必要があります。{% endif %}

クローズするキーワードは、コミットメッセージでも使用できます。 The issue will be closed when you merge the commit into the default branch, but the pull request that contains the commit will not be listed as a linked pull request.

### 参考リンク

- [自動リンクされた参照と URL](/articles/autolinked-references-and-urls/#issues-and-pull-requests)
