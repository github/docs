---
title: Issue及びPull Requestのフィルタリングと検索
intro: '{% data variables.product.product_name %}上のリポジトリに関する詳細情報を見つけるために、そのリポジトリに関連するIssueやPull Requestをフィルタリング、ソート、検索できます。'
redirect_from:
  - /github/managing-your-work-on-github/finding-information-in-a-repository/filtering-issues-and-pull-requests-by-assignees
  - /articles/filtering-issues-and-pull-requests-by-assignees
  - /github/managing-your-work-on-github/filtering-issues-and-pull-requests-by-assignees
  - /github/managing-your-work-on-github/finding-information-in-a-repository/filtering-issues-and-pull-requests-by-labels
  - /articles/filtering-issues-and-pull-requests-by-labels
  - /github/managing-your-work-on-github/filtering-issues-and-pull-requests-by-labels
  - /github/managing-your-work-on-github/finding-information-in-a-repository/filtering-issues-and-pull-requests
  - /articles/filtering-issues-and-pull-requests
  - /github/managing-your-work-on-github/filtering-issues-and-pull-requests
  - /github/managing-your-work-on-github/finding-information-in-a-repository/filtering-pull-requests-by-review-status
  - /articles/filtering-pull-requests-by-review-status
  - /github/managing-your-work-on-github/filtering-pull-requests-by-review-status
  - /github/managing-your-work-on-github/finding-information-in-a-repository
  - /articles/finding-information-in-a-repository
  - /github/managing-your-work-on-github/finding-information-in-a-repository/sharing-filters
  - /articles/sharing-filters
  - /github/managing-your-work-on-github/sharing-filters
  - /github/managing-your-work-on-github/finding-information-in-a-repository/using-search-to-filter-issues-and-pull-requests
  - /articles/using-search-to-filter-issues-and-pull-requests
  - /github/managing-your-work-on-github/using-search-to-filter-issues-and-pull-requests
  - /github/managing-your-work-on-github/finding-information-in-a-repository/sorting-issues-and-pull-requests
  - /articles/sorting-issues-and-pull-requests
  - /github/managing-your-work-on-github/sorting-issues-and-pull-requests
  - /github/administering-a-repository/finding-information-in-a-repository
  - /github/administering-a-repository/finding-information-in-a-repository/filtering-issues-and-pull-requests
  - /github/administering-a-repository/finding-information-in-a-repository/filtering-issues-and-pull-requests-by-assignees
  - /github/administering-a-repository/finding-information-in-a-repository/filtering-issues-and-pull-requests-by-labels
  - /github/administering-a-repository/finding-information-in-a-repository/filtering-pull-requests-by-review-status
  - /github/administering-a-repository/finding-information-in-a-repository/sorting-issues-and-pull-requests
  - /github/administering-a-repository/finding-information-in-a-repository/using-search-to-filter-issues-and-pull-requests
  - /github/administering-a-repository/finding-information-in-a-repository/sharing-filters
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Issues
  - Pull requests
shortTitle: Filter and search
type: how_to
ms.openlocfilehash: 24f91958f98f4b6744ee3b21bf3d748aef062eb6
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107598'
---
{% data reusables.cli.filter-issues-and-pull-requests-tip %}

## Issue およびPull Requestをフィルタリングする

Issue およびPull Requestには、適用してリストを整理するためのデフォルトのフィルタが備わっています。

{% data reusables.search.requested_reviews_search %}

Issue およびPull Requestをフィルタリングして、以下を探すことができます:
- すべてのオープンな Issue およびPull Request
- 自分で作成した Issue およびPull Request
- 自分に割り当てられた Issue およびPull Request
- [ **@mentioned**](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams) されていた現在の issue と pull request

{% data reusables.cli.filter-issues-and-pull-requests-tip %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %}
3. **[フィルター]** をクリックして関心のあるフィルターの種類を選択します。
  ![[フィルター] ドロップダウンの使用](/assets/images/help/issues/issues_filter_dropdown.png)

## Issue およびPull Requestをアサインされた人でフィルタリングする

[issue または pull request を他のユーザーに割り当て](/articles/assigning-issues-and-pull-requests-to-other-github-users)ると、作業しているユーザーに基づいて項目を見つけることができます。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %}
3. 右上にある [Assignee] ドロップダウンメニューをクリックします。
4. [Assignee] ドロップダウンメニューには、リポジトリへの書き込み権限のあるすべてのユーザがリストされます。 確認したい割り当て済みの項目を持つユーザの名前をクリックするか、 **[Assigned to nobody]\(未割り当て\)** をクリックして未割り当ての issue を表示します。
![[担当者] ドロップダウン タブの使用](/assets/images/help/issues/issues_assignee_dropdown.png)

{% tip %}

フィルターの選択を解除するには、 **[Clear current search query, filters, and sorts]\(現在の検索クエリ、フィルター、並べ替えをクリアする\)** をクリックします。

{% endtip %}

## Issue およびPull Requestをラベルでフィルタリングする

[issue または pull request にラベルを適用](/articles/applying-labels-to-issues-and-pull-requests)すると、そのラベルに基づいて項目を見つけることができます。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %} {% data reusables.project-management.labels %}
4. ラベルのリストでラベルをクリックして、割り当てられた Issue とプルリクエストを表示します。
  ![リポジトリのラベルの一覧](/assets/images/help/issues/labels-page.png)

{% tip %}

**ヒント:** フィルターの選択を解除するには、 **[Clear current search query, filters, and sorts]\(現在の検索クエリ、フィルター、並べ替えをクリアする\)** をクリックします。

{% endtip %}

## プルリクエストをレビューステータスでフィルタリングする

フィルタを使用して、レビューステータスでPull Requestをフィルタリングしたり、自分でレビューしたPull Requestや他のユーザにレビューするよう依頼されたPull Requestを検索したりできます。

Pull Requestのリポジトリのリストをフィルタリングして、次の検索を行えます:
- まだ[レビュー](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)されていない pull request
- マージできるようになる前に[レビューを必要とする](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging) pull request
- レビュー担当者が承認したPull Request
- レビュー担当者が変更を求めているPull Request
- 自分がレビューした pull request
- 誰かから直接レビューを求められた pull request
- [他のユーザーから、またはメンバーであるチームからレビューするよう求められた](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review) pull request

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %}
3. 右上にある [Reviews] ドロップダウンメニューをクリックします。
  ![pull request の一覧の上にあるフィルター メニュー内の [レビュー] ドロップダウン メニュー](/assets/images/help/pull_requests/reviews-filter-dropdown.png)
4. フィルタを選択してます。そのフィルタのステータスのPull Requestすべてが検索されます。
  ![[レビュー] ドロップダウン メニュー内のフィルターの一覧](/assets/images/help/pull_requests/pr-review-filters.png)

## 検索を使用して Issue およびプルリクエストをフィルタリングする

特定の条件を満たすIssueやPull Requestを検索するために、高度なフィルターを使うことができます。

### IssueやPull Requestの検索

{% webui %}

Issue とPull Requestの検索バーを使用すると、独自のカスタムフィルターを定義し、さまざまな基準で並べ替えることができます。 検索バーは、各リポジトリの **[Issue]** タブと **[Pull requests]** タブ、および [[Issue] ダッシュボードと [Pull requests] ダッシュボード](/articles/viewing-all-of-your-issues-and-pull-requests)にあります。

![Issue およびプルリクエストの検索バー](/assets/images/help/issues/issues_search_bar.png)

{% tip %}

**ヒント:** {% data reusables.search.search_issues_and_pull_requests_shortcut %}

{% endtip %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

{% data variables.product.prodname_cli %}を使ってIssueやPull Requestを検索できます。 `--search` 引数と検索クエリと共に `gh issue list` または `gh pr list` サブコマンドを使用します。

たとえば、担当者がいなくて、`help wanted` または `bug` ラベルを持つすべての issue を、作成された日付順に一覧表示できます。

```shell
gh issue list --search 'no:assignee label:"help wanted",bug sort:created-asc'
```

`octo-org/octo-team` チームにメンションするすべての pull request を一覧表示することもできます。

```shell
gh pr list --search "team:octo-org/octo-team"
```

{% endcli %}

### 検索語について

Issue およびPull Requestの検索用語により、次のことができます:

- 作成者ごとに issue と pull request をフィルター処理します: `state:open type:issue author:octocat`
- 特定のユーザーを含むが必ずしも [ **@mention**](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams) していない issue と pull request をフィルター処理します: `state:open type:issue involves:octocat`
- 担当者ごとに issue と pull request をフィルター処理します: `state:open type:issue assignee:octocat`
- ラベルごとに issue と pull request をフィルター処理します: `state:open type:issue label:"bug"`
- 語句の前に `-` を使用して、検索語句を除外します: `state:open type:issue -author:octocat`

{% tip %}

**ヒント:** 論理和あるいは論理積を使って、ラベルごとに issue と pull request をフィルター処理できます。
- 論理和を使用して issue をフィルター処理するには、コンマ構文を使用します: `label:"bug","wip"`。
- 論理積を使用して issue をフィルター処理するには、別のラベル フィルターを使用します: `label:"bug" label:"wip"`。

{% endtip %}

Issueについては、以下も検索に利用できます。

- クローズしている参照ごとに、pull request にリンクされている issue をフィルター処理します (`linked:pr`{% ifversion issue-close-reasons %})
- issue がクローズされた理由 (`is:closed reason:complete` または `is:closed reason:"not planned"`) でフィルター処理します。{% endif %}

Pull Requestについては、検索を利用して以下の操作もできます。
- [ドラフト](/articles/about-pull-requests#draft-pull-requests)の pull request をフィルター処理する: `is:draft`
- まだ[レビュー](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)されていない pull request をフィルター処理する: `state:open type:pr review:none`
- マージできるようになる前に[レビューを必要とする](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging) pull request をフィルター処理する: `state:open type:pr review:required`
- レビュー担当者が承認した pull request をフィルター処理する: `state:open type:pr review:approved`
- レビュー担当者が変更を求めている pull request をフィルター処理する: `state:open type:pr review:changes_requested`
- [レビュー担当者](/articles/about-pull-request-reviews/)ごとに pull request をフィルター処理する: `state:open type:pr reviewed-by:octocat`
- [レビューを要求した](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review)特定のユーザーで pull request をフィルター処理する: `state:open type:pr review-requested:octocat`
- 誰かから直接レビューするよう求められた pull request をフィルター処理する: `state:open type:pr user-review-requested:@me`
- レビューを要求したチームで pull request をフィルター処理する: `state:open type:pr team-review-requested:github/docs`
- pull request がクローズできる issue にリンクされている pull request をフィルター処理する: `linked:issue`

## Issue およびPull Requestをソートする

フィルターは、特定の期間の情報をよりよく提供するためにソートできます。

これらのフィルタービューでソートできます。

* 一番新しく作成された Issue またはPull Request
* 一番古くに作成された Issue またはPull Request
* 最もコメントされた Issue またはPull Request
* 最もコメントされていない Issue およびPull Request
* 一番新しく更新された Issue またはPull Request
* 一番古くに更新された Issue またはPull Request
* 最もリアクションがあったIssueまたはPull Request

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %}
1. 右上にあるソートドロップダウンメニューをクリックします。
  ![[並べ替え] ドロップダウン タブの使用](/assets/images/help/issues/issues_sort_dropdown.png)

並べ替えの選択を解除するには、 **[並べ替え]**  >  **[最新]** をクリックします。

## フィルターを共有する

一定の Issue およびPull Requestをフィルタリングする場合、ブラウザの URL は、次の表示にマッチするように自動的に更新されます。

Issue が生成した URL は、どのユーザにも送れます。そして、あなたが見ているフィルタビューと同じフィルタで表示できます。

たとえば、Hubot にアサインされた Issue でフィルタリングし、最も古いオープン Issue でソートした場合、あなたの URL は、次のように更新されます:

```
/issues?q=state:open+type:issue+assignee:hubot+sort:created-asc
```

## 参考資料

- 「[issue および pull request の検索](/articles/searching-issues)」
