---
title: Filtering and searching issues and pull requests
intro: 'To find detailed information about a repository on {% data variables.product.product_name %}, you can filter, sort, and search issues and pull requests that are relevant to the repository.'
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
topics:
  - Issues
  - Pull requests
shortTitle: Filter and search
---

{% data reusables.cli.filter-issues-and-pull-requests-tip %}

## Issue およびプルリクエストをフィルタリングする

Issue およびプルリクエストには、適用してリストを整理するためのデフォルトのフィルタが備わっています。

{% data reusables.search.requested_reviews_search %}

Issue およびプルリクエストをフィルタリングして、以下を探すことができます:
- すべてのオープンな Issue およびプルリクエスト
- 自分で作成した Issue およびプルリクエスト
- 自分に割り当てられた Issue およびプルリクエスト
- 自分が [**@メンション**](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)された Issue およびプルリクエスト

{% data reusables.cli.filter-issues-and-pull-requests-tip %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
3. [**Filters**] をクリックしてフィルタの種類を選びます。 ![[Filters] ドロップダウンメニューを使用する](/assets/images/help/issues/issues_filter_dropdown.png)

## Issue およびプルリクエストをアサインされた人でフィルタリングする

Once you've [assigned an issue or pull request to someone](/articles/assigning-issues-and-pull-requests-to-other-github-users), you can find items based on who's working on them.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
3. 右上にある [Assignee] ドロップダウンメニューをクリックします。
4. [Assignee] ドロップダウンメニューには、リポジトリへの書き込み権限のあるすべてのユーザがリストされます。 確認したい割り当てられた項目を持つユーザの名前をクリックするか、[**Assigned to nobody**] をクリックして未割り当ての Issue を表示します。 ![[Assignee] ドロップダウンメニューを使用する](/assets/images/help/issues/issues_assignee_dropdown.png)

{% tip %}

フィルタの選択をクリアするには、[**Clear current search query, filters, and sorts**] をクリックします。

{% endtip %}

## Issue およびプルリクエストをラベルでフィルタリングする

Once you've [applied labels to an issue or pull request](/articles/applying-labels-to-issues-and-pull-requests), you can find items based on their labels.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
{% data reusables.project-management.labels %}
4. ラベルのリストでラベルをクリックして、割り当てられた Issue とプルリクエストを表示します。 ![リポジトリのラベルのリスト](/assets/images/help/issues/labels-page.png)

{% tip %}

**ヒント:** フィルタの選択をクリアするには、[**Clear current search query, filters, and sorts**] をクリックします。

{% endtip %}

## プルリクエストをレビューステータスでフィルタリングする

フィルタを使用して、レビューステータスでプルリクエストをフィルタリングしたり、自分でレビューしたプルリクエストや他のユーザにレビューするよう依頼されたプルリクエストを検索したりできます。

プルリクエストのリポジトリのリストをフィルタリングして、次の検索を行えます:
- まだ[レビュー](/articles/about-pull-request-reviews)されていないプルリクエスト
- マージの前に[レビューが必要](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)なプルリクエスト
- レビュー担当者が承認したプルリクエスト
- レビュー担当者が変更を求めているプルリクエスト
- Pull requests that you have reviewed{% ifversion fpt or ghae or ghes > 3.2 %}
- Pull requests that someone has asked you directly to review{% endif %}
- [自分、または自分のチームに誰かがレビューを依頼](/articles/requesting-a-pull-request-review)したプルリクエスト

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
3. 右上にある [Reviews] ドロップダウンメニューをクリックします。 ![プルリクエストのリストの上にあるフィルタメニュー内の [Reviews] ドロップダウンメニュー](/assets/images/help/pull_requests/reviews-filter-dropdown.png)
4. フィルタを選択してます。そのフィルタのステータスのプルリクエストすべてが検索されます。 ![[Reviews] ドロップダウンメニュー内のフィルタのリスト](/assets/images/help/pull_requests/pr-review-filters.png)

## 検索を使用して Issue およびプルリクエストをフィルタリングする

You can use advanced filters to search for issues and pull requests that meet specific criteria.

### Searching for issues and pull requests

{% include tool-switcher %}

{% webui %}

Issue とプルリクエストの検索バーを使用すると、独自のカスタムフィルターを定義し、さまざまな基準で並べ替えることができます。 検索バーは、各リポジトリの [**Issues**] および [**Pull requests**] タブ、ならびに[Issues および Pull requests のダッシュボード](/articles/viewing-all-of-your-issues-and-pull-requests)にあります。

![Issue およびプルリクエストの検索バー](/assets/images/help/issues/issues_search_bar.png)

{% tip %}

**ヒント:** {% data reusables.search.search_issues_and_pull_requests_shortcut %}

{% endtip %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

You can use the {% data variables.product.prodname_cli %} to search for issues or pull requests. Use the `gh issue list` or `gh pr list` subcommand along with the `--search` argument and a search query.

For example, you can list, in order of date created, all issues that have no assignee and that have the label `help wanted` or `bug`.

```shell
gh issue list --search 'no:assignee label:"help wanted",bug sort:created-asc'
```

You can also list all pull requests that mention the `octo-org/octo-team` team.

```shell
gh pr list --search "team:octo-org/octo-team"
```

{% endcli %}

### About search terms

Issue およびプルリクエストの検索用語により、次のことができます:

- 作者による Issue とプルリクエストのフィルタリング: `state:open type:issue author:octocat`
- [特定の人に関連するが、必ずしも **@メンション**](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)ではない Issue とプルリクエストのフィルタリング: `state:open type:issue involves:octocat`
- アサインされた人による Issues とプルリクエストのフィルタリング: `state:open type:issue assignee:octocat`
- ラベルにより Issue とプルエストをフィルタリング: `state:open type:issue label:"bug"`
- 次の用語の前に `-` を使用して検索用語を除外: `state:open type:issue -author:octocat`

{% ifversion fpt or ghes > 3.2 or ghae-next %}
{% tip %}

**Tip:** You can filter issues and pull requests by label using logical OR or using logical AND.
- To filter issues using logical OR, use the comma syntax: `label:"bug","wip"`.
- To filter issues using logical AND, use separate label filters: `label:"bug" label:"wip"`.

{% endtip %}
{% endif %}

{% ifversion fpt or ghes or ghae %}
Issueについては、以下も検索に利用できます。

- クローズしているリファレンス`linked:pr`によってプルリクエストにリンクされているIssueのフィルタリング
{% endif %}

プルリクエストについては、検索を利用して以下の操作もできます。
- [ドラフト](/articles/about-pull-requests#draft-pull-requests)プルリクエストのフィルタリング: `is:draft`
- まだ[レビュー](/articles/about-pull-request-reviews)されていないプルリクエストのフィルタリング: `state:open type:pr review:none`
- マージされる前に[レビューを必要とする](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)プルリクエストのフィルタリング: `state:open type:pr review:required`
- レビュー担当者が承認したプルリクエストのフィルタリング: `state:open type:pr review:approved`
- レビュー担当者が変更を要求したプルリクエストのフィルタリング: `state:open type:pr review:changes_requested`
- [レビュー担当者](/articles/about-pull-request-reviews/)によるプルリクエストのフィルタリング: `state:open type:pr reviewed-by:octocat`
- Filter pull requests by the specific user [requested for review](/articles/requesting-a-pull-request-review): `state:open type:pr review-requested:octocat`{% ifversion fpt or ghae or ghes > 3.2 %}
- Filter pull requests that someone has asked you directly to review: `state:open type:pr user-review-requested:@me`{% endif %}
- レビューを要求されたチームによるプルリクエストのフィルタリング: `state:open type:pr team-review-requested:github/atom`{% ifversion fpt or ghes or ghae %}
- プルリクエストでクローズできるIssueにリンクされているプルリクエストのフィルタリング: `linked:issue`{% endif %}

## Issue およびプルリクエストをソートする

フィルターは、特定の期間の情報をよりよく提供するためにソートできます。

これらのフィルタービューでソートできます。

* 一番新しく作成された Issue またはプルリクエスト
* 一番古くに作成された Issue またはプルリクエスト
* 最もコメントされた Issue またはプルリクエスト
* 最もコメントされていない Issue およびプルリクエスト
* 一番新しく更新された Issue またはプルリクエスト
* 一番古くに更新された Issue またはプルリクエスト
* The most added reaction on issues or pull requests

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

- "[Searching issues and pull requests](/articles/searching-issues)""
