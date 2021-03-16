---
title: 必須ステータスチェックのトラブルシューティング
intro: 'You can check for common errors and resolve issues with required status checks.'
product: '{% data reusables.gated-features.protected-branches %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

If you have a check and a status with the same name, and you select that name as a required status check, both the check and the status are required. 詳しい情報については、「[チェック](/rest/reference/checks)」を参照してください。

After you enable required status checks, your branch may need to be up-to-date with the base branch before merging. これによって、ブランチがベースブランチからの最新のコードでテストされたことが保証されます。 ブランチが古い場合、ベースブランチをブランチにマージする必要があります。 詳しい情報については[保護されたブランチについて](/github/administering-a-repository/about-protected-branches#require-status-checks-before-merging)を参照してください。

{% note %}

**注釈:** Git リベースを使用してブランチをベースブランチに対して最新にすることもできます。 詳しい情報については、「[Git リベースについて](/github/using-git/about-git-rebase)」を参照してください。

{% endnote %}

必須ステータスチェックにすべてパスするまでは、ローカルでの変更を保護されたブランチにプッシュすることはできません。 その代わりに、以下のようなエラーメッセージが返されます.

```shell
remote: error: GH006: Protected branch update failed for refs/heads/main.
remote: error: Required status check "ci-build" is failing
```
{% note %}

**Note:** Pull requests that are up-to-date and pass required status checks can be merged locally and pushed to the protected branch. これはマージコミット自体でステータスチェックを実行せずに行えます。

{% endnote %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}

テストマージコミットと head コミットのステータスチェックの結果が競合する場合があります。 If the test merge commit has a status, the test merge commit must pass. それ以外の場合、ヘッドコミットのステータスは、ブランチをマージする前にパスする必要があります。 For more information about test merge commits, see "[Pulls](/rest/reference/pulls#get-a-pull-request)."

![マージコミットが競合しているブランチ](/assets/images/help/repository/req-status-check-conflicting-merge-commits.png)
{% endif %}
