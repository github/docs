---
title: プルリクエストで提案された変更をレビューする
intro: 'Pull Request では、コミット、変更されたファイル、ベース ブランチと比較ブランチでのファイル間の違い (つまり "diff") をレビューしたり議論したりできます。'
redirect_from:
  - /articles/reviewing-proposed-changes-in-a-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### プルリクエストのレビューについて

プルリクエストの変更は、1 ファイルごとにレビューできます。 While reviewing the files in a pull request, you can leave individual comments on specific changes. After you finish reviewing each file, you can mark the file as viewed. これによりファイルが折りたたまれるので、まだレビューを必要とするファイルを特定するのに役立ちます。 A progress bar in the pull request header shows the number of files you've viewed. After reviewing as many files as you want, you can approve the pull request or request additional changes by submitting your review with a summary comment.

{% data reusables.search.requested_reviews_search_tip %}

### レビューを開始する

{% data reusables.repositories.sidebar-pr %}
{% data reusables.repositories.choose-pr-review %}
{% data reusables.repositories.changed-files %}
{% data reusables.repositories.start-line-comment %}
{% data reusables.repositories.type-line-comment %}
{% data reusables.repositories.suggest-changes %}
5. 完了したら、[**Start a review**] をクリックします。 レビューがすでに開始していた場合は、[**Add review comment**] (レビューコメントを追加) をクリックします。 ![[Start a review] ボタン](/assets/images/help/pull_requests/start-a-review-button.png)

レビューを提出する前は、行のコメントは_保留中_であり、自分にしか見えません。 レビューを提出する前ならばいつでも、保留中のコメントを編集できます。 その保留中のコメントのすべてを含めて、保留中のレビューをキャンセルするには、[Conversation] タブでタイムラインの最後まで下にスクロールし、[**Cancel review**] をクリックします。

![[Cancel review] ボタン](/assets/images/help/pull_requests/cancel-review-button.png)

{% if currentVersion == "free-pro-team@latest" %}
### Reviewing dependency changes

If the pull request contains changes to dependencies you can use the dependency review for a manifest or lock file to see what has changed and check whether the changes introduce security vulnerabilities. For more information, see "[Reviewing dependency changes in a pull request](/github/collaborating-with-issues-and-pull-requests/reviewing-dependency-changes-in-a-pull-request)."

{% data reusables.repositories.changed-files %}

1. On the right of the header for a manifest or lock file, display the dependency review by clicking the rich diff button.

   ![The rich diff button](/assets/images/help/pull_requests/dependency-review-rich-diff.png)
{% endif %}

### ファイルをレビュー済みとしてマークする

ファイルのレビュー後は、そのファイルをレビュー済みとしてマークできます。マークしたファイルは折りたたまれます。 ファイルを表示後に変更すると、レビュー済みマークが解除されます。

{% data reusables.repositories.changed-files %}
2. レビューを完了したファイルの、ヘッダの右側にある [**Viewed**] を選択します。 ![[Viewed] チェックボックス](/assets/images/help/pull_requests/viewed-checkbox.png)

### レビューを提出する

プルリクエスト内でレビューしたいファイルをすべてレビューし終えたら、レビューをサブミットします。

{% data reusables.repositories.changed-files %}
{% data reusables.repositories.review-changes %}
{% data reusables.repositories.review-summary-comment %}
4. 残しておくレビューの種類を選択します。 ![レビュー オプションを選択するラジオ ボタン](/assets/images/help/pull_requests/pull-request-review-statuses.png)
    - 変更を明確には承認せず、さらなる変更をリクエストすることもなく、おおまかなフィードバックだけを残したい場合は、[**Comment**] を選択します。
    - フィードバックを提出して、Pull Request で提案された変更をマージすることを承認するには、[**Approve**] を選択します。
    - Pull Request をマージする前に対処すべき問題をフィードバックするには、[**Request changes**] を選択します。
{% data reusables.repositories.submit-review %}

{% data reusables.repositories.request-changes-tips %}

### 参考リンク

- [プルリクエストのための必須レビューについて](/github/administering-a-repository/about-required-reviews-for-pull-requests)
- 「[プルリクエストをレビューステータスでフィルタリングする](/github/managing-your-work-on-github/filtering-pull-requests-by-review-status)」
