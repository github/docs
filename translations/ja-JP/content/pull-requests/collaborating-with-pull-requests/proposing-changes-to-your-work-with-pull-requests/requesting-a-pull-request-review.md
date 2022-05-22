---
title: Pull Request レビューをリクエストする
intro: Pull Request を作成したら、提案した変更を特定の人にレビューするように依頼できます。 あなたが Organization のメンバーである場合、特定の Team に変更をレビューするようリクエストすることもできます。
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

ユーザアカウントが所有しているリポジトリのオーナーとコラボレータは、プルリクエストのレビューを割り当てることができます。 リポジトリに対するトリアージ権限を持つ Organization メンバーは、プルリクエストのレビューを割り当てることができます。

オーナーまたはコラボレータは、ユーザ所有のリポジトリに明示的に[読み取りアクセス](/articles/access-permissions-on-github)を付与された人にプルリクエストのレビューを割り当てることができます。 Organization メンバーは、リポジトリの読み取りアクセス権を持つ人や Team にプルリクエストのレビューを割り当てることができます。 リクエストされたレビュー担当者または Team は、Pull Request レビューをするようあなたが依頼したという通知を受け取ります。 {% ifversion fpt or ghae or ghes or ghec %}Team にレビューをリクエストし、コードレビューの割り当てが有効になっている場合、特定のメンバーがリクエストされ、Team はレビュー担当者として削除されます。 For more information, see "[Managing code review settings for your team](/organizations/organizing-members-into-teams/managing-code-review-settings-for-your-team)."{% endif %}

{% note %}

**メモ:** プルリクエスト作成者は、リポジトリ オーナー、またはリポジトリへの書き込みアクセス権を持つコラボレーターのどちらかでなければ、レビューをリクエストすることはできません。

{% endnote %}

推奨された人または特定の人のいずれかにレビューをリクエストできます。 推奨されたレビュー担当者は [git blame のデータ](/articles/tracking-changes-in-a-file/)に基づきます。 レビューをリクエストする場合、リポジトリへの読み取りアクセス権を所有しているならば誰でも Pull Request をレビューできます。 プルリクエストがレビューされ、必要な変更を加えたら、同じレビュー担当者のレビューを再リクエストできます。 リクエストされたレビュー担当者がレビューを提出しない場合でも、プルリクエストがリポジトリの[マージ可能性の要件](/articles/defining-the-mergeability-of-pull-requests)を満たしていれば、プルリクエストをマージできます。

{% data reusables.repositories.sidebar-pr %}
2. Pull Request のリストで、特定の人または Team にレビューを依頼したい Pull Request をクリックします。
3. 右側のサイドバーで [**Reviewers**] に移動します。
4. [**Reviewers**] で推奨された人にレビューをリクエストするには、 そのユーザ名の横にある [**Request**] をクリックします。 ![右サイドバーのレビュー担当者リクエストアイコン](/assets/images/help/pull_requests/request-suggested-review.png)
5. 必要に応じて、推奨された個人以外にレビューをリクエストするには、[**Reviewers**] をクリックし、続いてドロップダウンメニューで名前をクリックします。 ![右サイドバーでのレビュー担当者連動アイコン](/assets/images/help/pull_requests/request-a-review-not-suggested.png)
6. 必要に応じて、レビューを依頼したい人または Team の名前がわかっている場合は、[**Reviewers**] をクリックしたら、変更のレビューを依頼する人のユーザー名または Team の名前を入力します。 Team 名またはユーザー名をクリックしてレビューをリクエストします。 ![レビュー担当者のユーザ名を入力するフィールドおよびレビュー担当者の名前を含むドロップダウン](/assets/images/help/pull_requests/choose-pull-request-reviewer.png)
7. Pull Request がレビューされ、必要な変更を行ったら、レビュー担当者に Pull Request を再びレビューするように依頼できます。 右側のサイドバーで [**Reviewers**] に移動し、レビューを依頼するレビュー担当者の名前の横にある {% octicon "sync" aria-label="The sync icon" %} をクリックします。 ![右サイドバーの再レビュー同期アイコン](/assets/images/help/pull_requests/request-re-review.png)

## 参考リンク

- "[プルリクエストのレビューについて](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)"
