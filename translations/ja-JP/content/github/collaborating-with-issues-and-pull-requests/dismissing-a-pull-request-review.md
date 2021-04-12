---
title: プルリクエストレビューの却下
intro: 'リポジトリにレビューが必要な場合は、有効でなくなった、またはレビュー担当者による承認不可のプルリクエストレビューを却下できます。'
redirect_from:
  - /articles/dismissing-a-pull-request-review
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - pull requests
---

{% data reusables.pull_requests.dismiss_review %}
これにより、ステータスが「レビュー」から「レビューコメント」に変更されます。 レビューを却下する場合は、却下の理由を説明するコメントを追加する必要があります。 コメントはプルリクエストの会話に追加されます。

{% data reusables.search.requested_reviews_search %}

{% data reusables.repositories.sidebar-pr %}
{% data reusables.repositories.choose-pr-review %}
3. [Conversation] タブで却下したいレビューまでスクロールして、[{% octicon "chevron-down" aria-label="The down button" %}] をクリックします。 ![マージボックス中の V 字型アイコン](/assets/images/help/pull_requests/merge_box/pull-request-open-menu.png)
4. {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} をクリックし、続いて [**Dismiss review**] をクリックします。 ![マージボックス中のケバブアイコン](/assets/images/help/pull_requests/merge_box/pull-request-dismiss-review.png)
5. レビューの却下理由を入力して、[**Dismiss review**] をクリックします。 ![[Dismiss review] ボタン](/assets/images/help/pull_requests/merge_box/pull-request-dismiss-review-button.png)

### 参考リンク

- "[プルリクエストのレビューについて](/articles/about-pull-request-reviews)"
- [プルリクエストで提案された変更のレビュー](/articles/reviewing-proposed-changes-in-a-pull-request)
- [保護されたブランチについて](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)
