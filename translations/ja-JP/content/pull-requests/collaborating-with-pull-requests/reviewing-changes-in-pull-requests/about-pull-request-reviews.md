---
title: プルリクエストのレビューについて
intro: レビューを使うと、コラボレーターはプルリクエスト中で提案された変更に対してコメントしたり、変更を承認したり、プルリクエストがマージされる前にさらなる変更をリクエストしたりできます。 リポジトリ管理者は、すべてのプルリクエストをマージ前に承認することを必須にできます。
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews
  - /articles/about-pull-request-reviews
  - /github/collaborating-with-issues-and-pull-requests/about-pull-request-reviews
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: About PR reviews
---

## プルリクエストのレビューについて

プルリクエストがオープンになった後、*読み取り*アクセスを持つすべてのユーザは、提案された変更をレビューしてコメントできます。 また、作者がプルリクエストから直接適用できるコード行への特定の変更を提案することもできます。 詳細は「[プルリクエストで提案された変更をレビューする](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)」を参照してください。

{% ifversion pull-request-approval-limit %}{% data reusables.pull_requests.code-review-limits %}{% endif %}

リポジトリオーナーとコラボレーターは、特定の人物にプルリクエストのレビューをリクエストできます。 また、Organization メンバーは、リポジトリの読み取りアクセス権を持つ Team にプルリクエストのレビューをリクエストできます。 詳細は「[Pull Request レビューをリクエストする](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review)」を参照してください。 You can specify a subset of team members to be automatically assigned in the place of the whole team. For more information, see "[Managing code review settings for your team](/organizations/organizing-members-into-teams/managing-code-review-settings-for-your-team)."

レビューにより、提案された変更についての議論がなされ、その変更がリポジトリのコントリビューションのガイドラインやその他の品質標準を満たすことを保証しやすくなります。 コードの特定の種類や領域に対して、どの個人や Team をオーナーとするかを、CODEOWNERS ファイルで定義できます。 プルリクエストが、定義されたオーナーを持っているコードを変更するものである場合、オーナーである個人あるいはTeam がレビューを担当するよう、自動的にリクエストされます。 詳細は「[コードオーナーについて](/articles/about-code-owners/)」を参照してください。

{% ifversion fpt or ghec %}レビューが必要なプルリクエストのリマインダーをスケジュールできます。 詳しい情報については、「[プルリクエストのスケジュールされたリマインダーを管理する](/github/setting-up-and-managing-organizations-and-teams/managing-scheduled-reminders-for-pull-requests)」を参照してください。{% endif %}

![凝固メント付きの変更をリクエストするレビューのヘッダ](/assets/images/help/pull_requests/review-header-with-line-comment.png)

レビューには 3 つのステータスがあります:
- **Comment**: 明示的に変更を承認したり追加の変更をリクエストしたりすることなく、一般的なフィードバックをサブミットします。
- **Approve**: フィードバックをサブミットし、プルリクエスト中で提案された変更のマージを承認します。
- **Request changes**: プルリクエストをマージする前に対処しなければならないフィードバックをサブミットします。

![レビューステータスの画像](/assets/images/help/pull_requests/pull-request-review-statuses.png)

{% data reusables.repositories.request-changes-tips %}

プルリクエストが受けたすべてのレビューは、Conversationタイムラインで見ることができ、リポジトリオーナー及びコラボレーターによるレビューは、プルリクエストのマージボックスで見ることができます。

![マージボックス中のレビューの画像](/assets/images/help/pull_requests/merge_box/pr-reviews-in-merge-box.png)

{% data reusables.search.requested_reviews_search_tip %}

{% data reusables.pull_requests.resolving-conversations %}

## レビューを再リクエストする

{% data reusables.pull_requests.re-request-review %}

## 必須のレビュー

{% data reusables.pull_requests.required-reviews-for-prs-summary %}詳しい情報については[保護されたブランチの設定](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)を参照してください。

{% tip %}

**ヒント**: *管理*あるいは*書き込み*アクセスをリポジトリに対して持つ人は、必要に応じてプルリクエストのレビューを却下できます。 詳しい情報については[プルリクエストレビューの却下](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review)を参照してください。

{% endtip %}

## 参考リンク

- 「[プルリクエストで提案された変更をレビューする](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)」
- [プルリクエストレビューの表示](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/viewing-a-pull-request-review)
- [リポジトリコントリビューターのためのガイドラインを定める](/articles/setting-guidelines-for-repository-contributors)
