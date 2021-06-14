---
title: コメントからIssueを開く
intro: Issueまたはプルリクエストの特定のコメントから新しいIssueを開くことができます。
permissions: People with read permissions can create an issue in a repository where issues are enabled.
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/opening-an-issue-from-a-comment
  - /github/managing-your-work-on-github/opening-an-issue-from-a-comment
---

コメントから開いたIssueには、コメントの元の投稿場所を示すスニペットが含まれています。

{% data reusables.repositories.administrators-can-disable-issues %}

1. 開きたいIssueがあるコメントに移動します。

2. そのコメントで、{% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} をクリックします。 ![Pull Requestレビューコメントの三点ボタン](/assets/images/help/pull_requests/kebab-in-pull-request-review-comment.png)
3. [**Reference in new issue**] をクリックします。 ![[Reference in new issue] メニュー項目](/assets/images/help/pull_requests/reference-in-new-issue.png)
4. [Repository] ドロップダウンメニューで、開こうとするIssueがあるリポジトリを選択します。 ![新しいIssueの [Repository] ドロップダウン](/assets/images/help/pull_requests/new-issue-repository.png)
5. Issueのわかりやすいタイトルと本文を入力します。 ![新しいIssueのタイトルと本文](/assets/images/help/pull_requests/new-issue-title-and-body.png)
6. [**Create issue**] をクリックします。 ![新しいIssueを作成するボタン](/assets/images/help/pull_requests/create-issue.png)
{% data reusables.repositories.assign-an-issue-as-project-maintainer %}

### 参考リンク

- "[Issue の作成](/github/managing-your-work-on-github/creating-an-issue)"
