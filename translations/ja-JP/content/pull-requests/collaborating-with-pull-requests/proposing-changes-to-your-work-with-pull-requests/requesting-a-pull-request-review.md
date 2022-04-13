---
title: Pull Request レビューをリクエストする
intro: Pull Request を作成したら、提案した変更を特定の人にレビューするように依頼できます。 あなたが Organization のメンバーである場合、特定の Team に変更をレビューするようリクエストすることもできます。
product: '{% data reusables.gated-features.multiple-pr-reviewers %}'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review
  - /articles/requesting-a-pull-request-review
  - /github/collaborating-with-issues-and-pull-requests/requesting-a-pull-request-review
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Request a PR review
---

Repositories belong to a personal account (a single individual owner) or an organization account (a shared account with numerous collaborators or maintainers). 詳しい情報については、「[{% data variables.product.prodname_dotcom %}アカウントの種類](/get-started/learning-about-github/types-of-github-accounts)」を参照してください。" Owners and collaborators on a repository owned by a personal account can assign pull request reviews. Organization members with triage permissions can also assign a reviewer for a pull request.

To assign a reviewer to a pull request, you will need write access to the repository. For more information about repository access, see "[Repository roles for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)." If you have write access, you can assign anyone who has read access to the repository as a reviewer.

Organization members with write access can also assign a pull request review to any person or team with read access to a repository. リクエストされたレビュー担当者または Team は、Pull Request レビューをするようあなたが依頼したという通知を受け取ります。 {% ifversion fpt or ghae or ghes or ghec %}Team にレビューをリクエストし、コードレビューの割り当てが有効になっている場合、特定のメンバーがリクエストされ、Team はレビュー担当者として削除されます。 For more information, see "[Managing code review settings for your team](/organizations/organizing-members-into-teams/managing-code-review-settings-for-your-team)."{% endif %}

{% note %}

**メモ:** プルリクエスト作成者は、リポジトリ オーナー、またはリポジトリへの書き込みアクセス権を持つコラボレーターのどちらかでなければ、レビューをリクエストすることはできません。

{% endnote %}

推奨された人または特定の人のいずれかにレビューをリクエストできます。 推奨されたレビュー担当者は [git blame のデータ](/articles/tracking-changes-in-a-file/)に基づきます。 レビューをリクエストする場合、リポジトリへの読み取りアクセス権を所有しているならば誰でも Pull Request をレビューできます。 プルリクエストがレビューされ、必要な変更を加えたら、同じレビュー担当者のレビューを再リクエストできます。 リクエストされたレビュー担当者がレビューを提出しない場合でも、プルリクエストがリポジトリの[マージ可能性の要件](/articles/defining-the-mergeability-of-pull-requests)を満たしていれば、プルリクエストをマージできます。

{% data reusables.repositories.sidebar-pr %}
1. Pull Request のリストで、特定の人または Team にレビューを依頼したい Pull Request をクリックします。
2. 右側のサイドバーで [**Reviewers**] に移動します。
3. [**Reviewers**] で推奨された人にレビューをリクエストするには、 そのユーザ名の横にある [**Request**] をクリックします。 ![右サイドバーのレビュー担当者リクエストアイコン](/assets/images/help/pull_requests/request-suggested-review.png)
5. 必要に応じて、推奨された個人以外にレビューをリクエストするには、[**Reviewers**] をクリックし、続いてドロップダウンメニューで名前をクリックします。 ![右サイドバーでのレビュー担当者連動アイコン](/assets/images/help/pull_requests/request-a-review-not-suggested.png)
6. 必要に応じて、レビューを依頼したい人または Team の名前がわかっている場合は、[**Reviewers**] をクリックしたら、変更のレビューを依頼する人のユーザー名または Team の名前を入力します。 Team 名またはユーザー名をクリックしてレビューをリクエストします。 ![レビュー担当者のユーザ名を入力するフィールドおよびレビュー担当者の名前を含むドロップダウン](/assets/images/help/pull_requests/choose-pull-request-reviewer.png)
7. Pull Request がレビューされ、必要な変更を行ったら、レビュー担当者に Pull Request を再びレビューするように依頼できます。 右側のサイドバーで [**Reviewers**] に移動し、レビューを依頼するレビュー担当者の名前の横にある {% octicon "sync" aria-label="The sync icon" %} をクリックします。 ![右サイドバーの再レビュー同期アイコン](/assets/images/help/pull_requests/request-re-review.png)

## 参考リンク

- "[プルリクエストのレビューについて](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)"
