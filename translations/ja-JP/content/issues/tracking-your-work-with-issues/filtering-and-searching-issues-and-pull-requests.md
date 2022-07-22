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
shortTitle: フィルタリングと検索
type: how_to
---

{% data reusables.cli.filter-issues-and-pull-requests-tip %}

## Issue およびPull Requestをフィルタリングする

Issue およびPull Requestには、適用してリストを整理するためのデフォルトのフィルタが備わっています。

{% data reusables.search.requested_reviews_search %}

Issue およびPull Requestをフィルタリングして、以下を探すことができます:
- すべてのオープンな Issue およびPull Request
- 自分で作成した Issue およびPull Request
- 自分に割り当てられた Issue およびPull Request
- 自分が [**@メンション**](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)された Issue およびPull Request

{% data reusables.cli.filter-issues-and-pull-requests-tip %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
3. [**Filters**] をクリックしてフィルタの種類を選びます。 ![[Filters] ドロップダウンメニューを使用する](/assets/images/help/issues/issues_filter_dropdown.png)

## Issue およびPull Requestをアサインされた人でフィルタリングする

[IssueあるいはPull Requestを誰かに割り当てたら](/articles/assigning-issues-and-pull-requests-to-other-github-users)、それらについての作業をしている人に基づいてアイテムを見つけることができます。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
3. 右上にある [Assignee] ドロップダウンメニューをクリックします。
4. [Assignee] ドロップダウンメニューには、リポジトリへの書き込み権限のあるすべてのユーザがリストされます。 確認したい割り当てられた項目を持つユーザの名前をクリックするか、[**Assigned to nobody**] をクリックして未割り当ての Issue を表示します。 ![[Assignee] ドロップダウンメニューを使用する](/assets/images/help/issues/issues_assignee_dropdown.png)

{% tip %}

フィルタの選択をクリアするには、[**Clear current search query, filters, and sorts**] をクリックします。

{% endtip %}

## Issue およびPull Requestをラベルでフィルタリングする

[IssueあるいはPull Requestにラベルを適用したら](/articles/applying-labels-to-issues-and-pull-requests)、アイテムをラベルに基づいて見つけることができます。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
{% data reusables.project-management.labels %}
4. ラベルのリストでラベルをクリックして、割り当てられた Issue とプルリクエストを表示します。 ![リポジトリのラベルのリスト](/assets/images/help/issues/labels-page.png)

{% tip %}

**ヒント:** フィルタの選択をクリアするには、[**Clear current search query, filters, and sorts**] をクリックします。

{% endtip %}

## プルリクエストをレビューステータスでフィルタリングする

フィルタを使用して、レビューステータスでPull Requestをフィルタリングしたり、自分でレビューしたPull Requestや他のユーザにレビューするよう依頼されたPull Requestを検索したりできます。

Pull Requestのリポジトリのリストをフィルタリングして、次の検索を行えます:
- まだ[レビュー](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)されていないPull Request
- マージの前に[レビューが必要](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)なPull Request
- レビュー担当者が承認したPull Request
- レビュー担当者が変更を求めているPull Request
- 自分がレビューしたPull Request{% ifversion fpt or ghae-issue-5181 or ghes > 3.2 or ghec %}
- 誰かから直接レビューを求められたPull Request{% endif %}
- [自分、または自分のチームに誰かがレビューを依頼](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review)したPull Request

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
3. 右上にある [Reviews] ドロップダウンメニューをクリックします。 ![プルリクエストのリストの上にあるフィルタメニュー内の [Reviews] ドロップダウンメニュー](/assets/images/help/pull_requests/reviews-filter-dropdown.png)
4. フィルタを選択してます。そのフィルタのステータスのPull Requestすべてが検索されます。 ![[Reviews] ドロップダウンメニュー内のフィルタのリスト](/assets/images/help/pull_requests/pr-review-filters.png)

## 検索を使用して Issue およびプルリクエストをフィルタリングする

特定の条件を満たすIssueやPull Requestを検索するために、高度なフィルターを使うことができます。

### IssueやPull Requestの検索

{% webui %}

Issue とPull Requestの検索バーを使用すると、独自のカスタムフィルターを定義し、さまざまな基準で並べ替えることができます。 検索バーは、各リポジトリの [**Issues**] および [**Pull requests**] タブ、ならびに[Issues および Pull requests のダッシュボード](/articles/viewing-all-of-your-issues-and-pull-requests)にあります。

![Issue およびプルリクエストの検索バー](/assets/images/help/issues/issues_search_bar.png)

{% tip %}

**ヒント:** {% data reusables.search.search_issues_and_pull_requests_shortcut %}

{% endtip %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

{% data variables.product.prodname_cli %}を使ってIssueやPull Requestを検索できます。 `--search`引数や検索クエリとともに`gh issue list`あるいは`gh pr list`サブコマンドを使ってください。

たとえば、アサインされた人がなく、`help wanted`あるいは`bug`というラベルを持つすべてのIssueを、作成された日付順にリストできます。

```shell
gh issue list --search 'no:assignee label:"help wanted",bug sort:created-asc'
```

`octo-org/octo-team`チームをメンションしているすべてのPull Requestをリストすることもできます。

```shell
gh pr list --search "team:octo-org/octo-team"
```

{% endcli %}

### 検索語について

Issue およびPull Requestの検索用語により、次のことができます:

- 作者による Issue とPull Requestのフィルタリング: `state:open type:issue author:octocat`
- [特定の人に関連するが、必ずしも **@メンション**](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)ではない Issue とPull Requestのフィルタリング: `state:open type:issue involves:octocat`
- アサインされた人による Issues とPull Requestのフィルタリング: `state:open type:issue assignee:octocat`
- ラベルにより Issue とPull Requestをフィルタリング: `state:open type:issue label:"bug"`
- 次の用語の前に `-` を使用して検索用語を除外: `state:open type:issue -author:octocat`

{% ifversion fpt or ghes > 3.2 or ghae or ghec %}
{% tip %}

**参考:** 論理和あるいは論理積を使って、ラベルでIssueやPull Requestをフィルタリングできます。
- 論理和を使ってIssueをフィルタリングするには、カンマ構文を使ってください:`label:"bug","wip"`
- 論理積を使ってIssueをフィルタリングするには、個別のラベルフィルタを使ってください:`label:"bug" label:"wip"`

{% endtip %}
{% endif %}

Issueについては、以下も検索に利用できます。

- クローズしているリファレンス`linked:pr`によってPull RequestにリンクされているIssueのフィルタリング{% ifversion issue-close-reasons %}
- `is:closed reason:complete`や`is:closed reason:"not planned"`といった、クローズされた理由によるIssueのフィルタリング{% endif %}

プルリクエストについては、検索を利用して以下の操作もできます。
- [ドラフト](/articles/about-pull-requests#draft-pull-requests)Pull Requestのフィルタリング: `is:draft`
- まだ[レビュー](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)されていないPull Requestのフィルタリング: `state:open type:pr review:none`
- マージされる前に[レビューを必要とする](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)Pull Requestのフィルタリング: `state:open type:pr review:required`
- レビュー担当者が承認したPull Requestのフィルタリング: `state:open type:pr review:approved`
- レビュー担当者が変更を要求したPull Requestのフィルタリング: `state:open type:pr review:changes_requested`
- [レビュー担当者](/articles/about-pull-request-reviews/)によるPull Requestのフィルタリング: `state:open type:pr reviewed-by:octocat`
- [レビューを要求された](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review)特定のユーザーによるPull Requestのフィルタリング: `state:open type:pr review-requested:octocat`{% ifversion fpt or ghae-issue-5181 or ghes > 3.2 or ghec %}
- 誰かから直接レビューを求められたPull Requestのフィルタリング:`state:open type:pr user-review-requested:@me`{% endif %}
- レビューを要求されたチームによるプルリクエストのフィルタリング: `state:open type:pr team-review-requested:github/atom`
- プルリクエストでクローズできるIssueにリンクされているプルリクエストのフィルタリング: `linked:issue`

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

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
1. 右上にあるソートドロップダウンメニューをクリックします。 ![ソートドロップダウンタブを使用する](/assets/images/help/issues/issues_sort_dropdown.png)

ソートの選択を解除するには、[**Sort**] > [**Newest**] をクリックします。

## フィルターを共有する

一定の Issue およびプルリクエストをフィルタリングする場合、ブラウザの URL は、次の表示にマッチするように自動的に更新されます。

Issue が生成した URL は、どのユーザにも送れます。そして、あなたが見ているフィルタビューと同じフィルタで表示できます。

たとえば、Hubot にアサインされた Issue でフィルタリングし、最も古いオープン Issue でソートした場合、あなたの URL は、次のように更新されます:

```
/issues?q=state:open+type:issue+assignee:hubot+sort:created-asc
```

## 参考リンク

- 「[Issue及びPull Requestの検索](/articles/searching-issues)」
