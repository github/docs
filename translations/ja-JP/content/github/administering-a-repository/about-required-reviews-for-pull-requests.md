---
title: プルリクエストの必須レビューについて
intro: 必須レビューにより、保護されたブランチにコラボレーターが変更を加える前にプルリクエストが指定された数の承認レビューを得ることが保証されます。
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/about-required-reviews-for-pull-requests
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

リポジトリでブランチの保護を強制した場合、必須レビューをセットアップできます。 ブランチ保護の強制に関する詳しい情報については[保護されたブランチの設定](/articles/configuring-protected-branches/)を参照してください。 必須レビューのセットアップに関する詳しい情報については[プルリクエストの必須レビューの有効化](/articles/enabling-required-reviews-for-pull-requests)を参照してください。

{% data reusables.pull_requests.required-reviews-for-prs-summary %}

*管理者*権限を持つ人がレビューで [**Request changes**] を選択した場合、その人が承認しなければプルリクエストはマージできません。 プルリクエストへの変更をリクエストしたレビューアーが見つからない場合、そのリポジトリに*管理*あるいは*書き込み*権限を持つ人が、ブロックしているレビューを却下できます。 詳しい情報については[プルリクエストレビューの却下](/articles/dismissing-a-pull-request-review)を参照してください。

{% note %}

**メモ:**リポジトリ管理者は、プルリクエストレビューを却下する権限を、特定の人物またはチームに限定できます。 詳しい情報については[プルリクエストの必須レビューの有効化](/articles/enabling-required-reviews-for-pull-requests)を参照してください。

{% endnote %}

承認されたプルリクエストのブランチにコードを変更するコミットをプッシュした場合、リポジトリ管理者によって古いレビューの却下がセットアップされていると、その承認は却下されます。 詳しい情報については[プルリクエストの必須レビューの有効化](/articles/enabling-required-reviews-for-pull-requests)を参照してください。 これは、ベースブランチをプルリクエストのブランチにマージするなど、コードを変更しないコミットをプッシュする場合は適用されません。 ベースブランチに関する詳しい情報については「[プルリクエストについて](/articles/about-pull-requests)」を参照してください。

必須レビューがリポジトリ管理者を含むようにセットアップされていないかぎり、*管理者*権限を持つ人は他の管理者のレビューに関係なくプルリクエストをマージできます。

{% data reusables.repositories.review-policy-overlapping-commits %}

保護されたブランチへのプルリクエストのマージは、*書き込み*または*管理者*権限を持つ誰かが承認するまで行えません。 ペンディングになっている、あるいは拒否されたレビューがある場合、エラーメッセージが返されます:

```shell
remote: error: GH006: Protected branch update failed for refs/heads/main.
remote: error: Changes have been requested.
```
