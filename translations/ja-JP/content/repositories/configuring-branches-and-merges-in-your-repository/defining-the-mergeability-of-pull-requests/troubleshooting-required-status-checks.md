---
title: 必須ステータスチェックのトラブルシューティング
intro: ステータスチェック必須を使用して、一般的なエラーを調べ、問題を解決できます。
product: '{% data reusables.gated-features.protected-branches %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
redirect_from:
  - /github/administering-a-repository/troubleshooting-required-status-checks
  - /github/administering-a-repository/defining-the-mergeability-of-pull-requests/troubleshooting-required-status-checks
shortTitle: Required status checks
---

同じ名前のチェックとステータスがあり、その名前をステータスチェック必須とするようにした場合、チェックとステータスはどちらも必須になります。 詳しい情報については、「[チェック](/rest/reference/checks)」を参照してください。

ステータスチェック必須を有効にした後、マージする前にブランチをベースブランチに対して最新にする必要がある場合があります。 これによって、ブランチがベースブランチからの最新のコードでテストされたことが保証されます。 ブランチが古い場合、ベースブランチをブランチにマージする必要があります。 詳しい情報については[保護されたブランチについて](/github/administering-a-repository/about-protected-branches#require-status-checks-before-merging)を参照してください。

{% note %}

**注釈:** Git リベースを使用してブランチをベースブランチに対して最新にすることもできます。 詳しい情報については、「[Git リベースについて](/github/getting-started-with-github/about-git-rebase)」を参照してください。

{% endnote %}

必須ステータスチェックにすべてパスするまでは、ローカルでの変更を保護されたブランチにプッシュすることはできません。 その代わりに、以下のようなエラーメッセージが返されます.

```shell
remote: error: GH006: Protected branch update failed for refs/heads/main.
remote: error: Required status check "ci-build" is failing
```
{% note %}

**注釈:** 最新で必須のステータスチェックをパスしたプルリクエストは、ローカルでマージしてから保護されたブランチにプッシュできます。 これはマージコミット自体でステータスチェックを実行せずに行えます。

{% endnote %}

{% ifversion fpt or ghae or ghes or ghec %}

テストマージコミットと head コミットのステータスチェックの結果が競合する場合があります。 テストマージコミットにステータスがある場合、そのテストマージコミットは必ずパスする必要があります。 それ以外の場合、ヘッドコミットのステータスは、ブランチをマージする前にパスする必要があります。 テストマージコミットに関する詳しい情報については、「[プル](/rest/reference/pulls#get-a-pull-request)」を参照してください。

![マージコミットが競合しているブランチ](/assets/images/help/repository/req-status-check-conflicting-merge-commits.png)
{% endif %}
