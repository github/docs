---
title: プルリクエストで提案された変更をレビューする
intro: Pull Request では、コミット、変更されたファイル、ベース ブランチと比較ブランチでのファイル間の違い (つまり "diff") をレビューしたり議論したりできます。
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request
  - /articles/reviewing-proposed-changes-in-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/reviewing-proposed-changes-in-a-pull-request
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Review proposed changes
---

## プルリクエストのレビューについて

プルリクエストの変更は、1 ファイルごとにレビューできます。 プルリクエストでファイルを確認しているときに、特定の変更について個別のコメントを残すことができます。 各ファイルの確認が終了したら、ファイルを閲覧済みとしてマークできます。 これによりファイルが折りたたまれるので、まだレビューを必要とするファイルを特定するのに役立ちます。 プルリクエストヘッダのプログレスバーには、閲覧したファイル数が表示されます。 必要な数のファイルを確認した後、要約コメントを付けて確認を送信することにより、プルリクエストを承認するか、追加の変更をリクエストできます。

{% data reusables.search.requested_reviews_search_tip %}

## レビューを開始する

{% webui %}

{% data reusables.repositories.sidebar-pr %}
{% data reusables.repositories.choose-pr-review %}
{% data reusables.repositories.changed-files %}
{% ifversion fpt or ghec or ghes > 3.3 or ghae %}

   You can change the format of the diff view in this tab by clicking {% octicon "gear" aria-label="The Settings gear" %} and choosing the unified or split view. The choice you make will apply when you view the diff for other pull requests.

   ![Diff view settings](/assets/images/help/pull_requests/diff-view-settings.png)

   You can also choose to hide whitespace differences. The choice you make only applies to this pull request and will be remembered the next time you visit this page.
{% endif %}
1. Optionally, filter the files to show only the files you want to review{% ifversion pr-tree-view %} or use the file tree to navigate to a specific file{% endif %}. For more information, see "[Filtering files in a pull request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/filtering-files-in-a-pull-request)."
{% data reusables.repositories.start-line-comment %}
{% data reusables.repositories.type-line-comment %}
{% data reusables.repositories.suggest-changes %}
1. 完了したら、[**Start a review**] をクリックします。 レビューがすでに開始していた場合は、[**Add review comment**] (レビューコメントを追加) をクリックします。

   ![[Start a review] ボタン](/assets/images/help/pull_requests/start-a-review-button.png)

レビューを提出する前は、行のコメントは_保留中_であり、自分にしか見えません。 レビューを提出する前ならばいつでも、保留中のコメントを編集できます。 その保留中のコメントのすべてを含めて、保留中のレビューをキャンセルするには、[Conversation] タブでタイムラインの最後まで下にスクロールし、[**Cancel review**] をクリックします。

![[Cancel review] ボタン](/assets/images/help/pull_requests/cancel-review-button.png)
{% endwebui %}

{% ifversion fpt or ghec %}

{% codespaces %}

You can use [{% data variables.product.prodname_codespaces %}](/codespaces/overview) to test, run, and review pull requests.

{% data reusables.codespaces.review-pr %}

For more information on reviewing pull requests in {% data variables.product.prodname_codespaces %}, see "[Using Codespaces for pull requests](/codespaces/developing-in-codespaces/using-codespaces-for-pull-requests)."

{% endcodespaces %}
{% endif %}

{% ifversion fpt or ghes or ghec %}
## 依存関係の変更をレビューする

{% data reusables.dependency-review.beta %}

プルリクエストに依存関係への変更が含まれている場合は、マニフェストまたはロックファイルの依存関係のレビューを使用して、何が変更されたかを確認し、変更によるセキュリティの脆弱性の発生の有無を確認できます。 詳しい情報については「[Pull Request中の依存関係の変更のレビュー](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request)」を参照してください。

{% data reusables.repositories.changed-files %}

1. マニフェストまたはロックファイルのヘッダの右側で、**リッチ{% octicon "file" aria-label="The rich diff icon" %}** diff ボタンをクリックして依存関係のレビューを表示します。

   ![リッチ diff ボタン](/assets/images/help/pull_requests/dependency-review-rich-diff.png)

{% data reusables.repositories.return-to-source-diff %}
{% endif %}

## ファイルをレビュー済みとしてマークする

ファイルのレビュー後は、そのファイルをレビュー済みとしてマークできます。マークしたファイルは折りたたまれます。 ファイルを表示後に変更すると、レビュー済みマークが解除されます。

{% data reusables.repositories.changed-files %}
2. レビューを完了したファイルの、ヘッダの右側にある [**Viewed**] を選択します。

   ![[Viewed] チェックボックス](/assets/images/help/pull_requests/viewed-checkbox.png)

## レビューを提出する

プルリクエスト内でレビューしたいファイルをすべてレビューし終えたら、レビューをサブミットします。

{% data reusables.repositories.changed-files %}
{% data reusables.repositories.review-changes %}
{% data reusables.repositories.review-summary-comment %}
4. 残しておくレビューの種類を選択します:

   ![レビュー オプションを選択するラジオ ボタン](/assets/images/help/pull_requests/pull-request-review-statuses.png)

    - 変更を明確には承認せず、さらなる変更をリクエストすることもなく、おおまかなフィードバックだけを残したい場合は、[**Comment**] を選択します。
    - フィードバックを提出して、Pull Request で提案された変更をマージすることを承認するには、[**Approve**] を選択します。
    - Pull Request をマージする前に対処すべき問題をフィードバックするには、[**Request changes**] を選択します。
{% data reusables.repositories.submit-review %}

{% data reusables.repositories.request-changes-tips %}

## 参考リンク

- [保護されたブランチについて](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)
- 「[プルリクエストをレビューステータスでフィルタリングする](/github/managing-your-work-on-github/filtering-pull-requests-by-review-status)」
