---
title: プルリクエストをレビューステータスでフィルタリングする
intro: フィルタを使用して、レビューステータスでプルリクエストをフィルタリングしたり、自分でレビューしたプルリクエストや他のユーザにレビューするよう依頼されたプルリクエストを検索したりできます。
redirect_from:
  - /articles/filtering-pull-requests-by-review-status
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

プルリクエストのリポジトリのリストをフィルタリングして、次の検索を行えます:
- まだ[レビュー](/articles/about-pull-request-reviews)されていないプルリクエスト
- マージの前に[レビューが必要](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)なプルリクエスト
- レビュー担当者が承認したプルリクエスト
- レビュー担当者が変更を求めているプルリクエスト
- 自分がレビューしたプルリクエスト
- [自分、または自分のチームに誰かがレビューを依頼](/articles/requesting-a-pull-request-review)したプルリクエスト

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
3. 右上にある [Reviews] ドロップダウンメニューをクリックします。 ![プルリクエストのリストの上にあるフィルタメニュー内の [Reviews] ドロップダウンメニュー](/assets/images/help/pull_requests/reviews-filter-dropdown.png)
4. フィルタを選択してます。そのフィルタのステータスのプルリクエストすべてが検索されます。 ![[Reviews] ドロップダウンメニュー内のフィルタのリスト](/assets/images/help/pull_requests/pr-review-filters.png)

### 参考リンク

- "[プルリクエストのレビューについて](/articles/about-pull-request-reviews)"
- 「[検索を使用して Issue およびプルリクエストをフィルタリングする](/articles/using-search-to-filter-issues-and-pull-requests)」
- 「[自分のすべての Issue およびプルリクエストを見る](/articles/viewing-all-of-your-issues-and-pull-requests)」
