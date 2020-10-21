---
title: 検索を使用して Issue およびプルリクエストをフィルタリングする
intro: すべての Issue およびプルリクエストビューには、高度なフィルター管理のための検索バーが付いています。
redirect_from:
  - /articles/using-search-to-filter-issues-and-pull-requests
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Issue とプルリクエストの検索バーを使用すると、独自のカスタムフィルターを定義し、さまざまな基準で並べ替えることができます。 検索バーは、各リポジトリの [**Issues**] および [**Pull requests**] タブ、ならびに[Issues および Pull requests のダッシュボード](/articles/viewing-all-of-your-issues-and-pull-requests)にあります。

![Issue およびプルリクエストの検索バー](/assets/images/help/issues/issues_search_bar.png)

{% tip %}

**ヒント:** {% data reusables.search.search_issues_and_pull_requests_shortcut %}

{% endtip %}

Issue およびプルリクエストの検索用語により、次のことができます:

- 作者による Issue とプルリクエストのフィルタリング: `state:open type:issue author:octocat`
- [特定の人に関連するが、必ずしも **@メンション**](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)ではない Issue とプルリクエストのフィルタリング: `state:open type:issue involves:octocat`
- アサインされた人による Issues とプルリクエストのフィルタリング: `state:open type:issue assignee:octocat`
- ラベルにより Issue とプルエストをフィルタリング: `state:open type:issue label:"bug"`

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
Issueについては、以下も検索に利用できます。

- クローズしているリファレンス`linked:pr`によってプルリクエストにリンクされているIssueのフィルタリング
{% endif %}

プルリクエストについては、検索を利用して以下の操作もできます。
- [ドラフト](/articles/about-pull-requests#draft-pull-requests)プルリクエストのフィルタリング: `is:draft`
- まだ[レビュー](/articles/about-pull-request-reviews)されていないプルリクエストのフィルタリング: `state:open type:pr review:none`
- マージされる前に[レビューを必要とする](/articles/about-required-reviews-for-pull-requests)プルリクエストのフィルタリング: `state:open type:pr review:required`
- レビュー担当者が承認したプルリクエストのフィルタリング: `state:open type:pr review:approved`
- レビュー担当者が変更を要求したプルリクエストのフィルタリング: `state:open type:pr review:changes_requested`
- [レビュー担当者](/articles/about-pull-request-reviews/)によるプルリクエストのフィルタリング: `state:open type:pr reviewed-by:octocat`
- [レビューを要求された](/articles/requesting-a-pull-request-review)特定のユーザーによるプルリクエストのフィルタリング: `state:open type:pr review-requested:octocat`
- Filter pull requests by the team requested for review: `state:open type:pr team-review-requested:github/atom`{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
- プルリクエストでクローズできるIssueにリンクされているプルリクエストのフィルタリング: `linked:issue`{% endif %}

### 参考リンク

- 「[Issue を検索する](/articles/searching-issues)」
- 「[Issue およびプルリクエストをフィルタリングする](/articles/filtering-issues-and-pull-requests)」
- [Issue およびプルリクエストのソート](/articles/sorting-issues-and-pull-requests)
- 「[フィルタの共有](/articles/sharing-filters)」
