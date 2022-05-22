---
title: 必須ステータスチェックについて
intro: 必須ステータスチェックにより、コラボレータが保護されたブランチに変更を加える前に、すべての必須 CI テストにパスしていることが保証されます。
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/about-required-status-checks
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### 必須ステータスチェックについて

リポジトリでブランチの保護を強制した場合、必須ステータスチェックをセットアップできます。 リポジトリでブランチの保護を強制した場合、必須ステータスチェックをセットアップできます。 詳細は「[保護されたブランチを設定する](/articles/configuring-protected-branches/)」および「[必須ステータスチェックを有効にする](/articles/enabling-required-status-checks)」を参照してください。 詳しい情報については、「[ステータスチェックについて](/github/administering-a-repository/enabling-required-status-checks)」を参照してください。

必須ステータスチェックを有効化すると、保護されたブランチへのブランチのマージは、すべての必須ステータスチェックにパスするまでできません。 必須ステータスチェックをパスしたら、コミットを別のブランチにプッシュしてから、マージするか、保護されたブランチに直接プッシュする必要があります。

![保護されたブランチのマージ ](/assets/images/help/repository/req-status-check-all-passed.png)

{% tip %}

**注釈:** リポジトリへの書き込み権限があるユーザまたはインテグレーションなら誰でも、リポジトリのステータスチェックを任意のステータスに設定できます。 {% data variables.product.product_name %} は、チェックの作者が、特定の名前でチェックを作成したり、既存のステータスを変更したりする権限を持っているかを確認しません。 プルリクエストをマージする前に、マージボックスにリストされている各ステータスの作者が想定された人物であることを確認する必要があります。

{% endtip %}

リポジトリの管理者は、必須のステータスチェックが失敗したりペンディングになっていたりしても、保護されたブランチをマージできます。 You can require administrators to be subject to required status checks. 詳しい情報については、「[必須ステータスチェックの有効化](/github/administering-a-repository/enabling-required-status-checks)」を参照してください。

![保護されたブランチの管理者によるマージ](/assets/images/help/repository/req-status-check-admin-merge.png)

管理者はまた、ブランチがベースブランチに対して古くなっていたとしても保護されたブランチをマージできます。

### 必須ステータスチェックの設定

ブランチをマージする前に、ベースブランチが最新である必要があるかどうかに応じて、ステータスチェックを緩めまたは厳密に設定することができます。 詳しい情報については、「[必須ステータスチェックのタイプ](/github/administering-a-repository/types-of-required-status-checks)」を参照してください。

### 必須ステータスチェックのトラブルシューティング

同じ名前の Check と Status を持っており、その名前をステータスチェック必須とするようにした場合、Check と Status はどちらも必須です。 詳しい情報については、「[チェック](/rest/reference/checks)」を参照してください。

必須ステータスチェックをセットアップした場合、ブランチはマージする前にベースブランチに対して最新になっていなければなりません。 これによって、ブランチがベースブランチからの最新のコードでテストされたことが保証されます。 ブランチが古い場合、ベースブランチをブランチにマージする必要があります。

{% note %}

**注釈:** Git リベースを使用してブランチをベースブランチに対して最新にすることもできます。 詳しい情報については、「[Git リベースについて](/github/using-git/about-git-rebase)」を参照してください。

{% endnote %}

![古くなったブランチ](/assets/images/help/repository/req-status-check-out-of-date.png)

必須ステータスチェックにすべてパスするまでは、ローカルでの変更を保護されたブランチにプッシュすることはできません。 その代わりに、以下のようなエラーメッセージが返されます:

```shell
remote: error: GH006: Protected branch update failed for refs/heads/main.
remote: error: Required status check "ci-build" is failing
```
{% note %}

**メモ:** 最新で必須のステータスチェックをパスしたプルリクエストは、ローカルでマージしてから保護されたブランチにプッシュできます。 これはマージコミット自体でステータスチェックを実行せずに行えます。

{% endnote %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}

テストマージコミットと head コミットのステータスチェックの結果が競合する場合があります。 テストマージコミットにステータスがある場合、必ずパスする必要があります。 それ以外の場合、ヘッドコミットのステータスは、ブランチをマージする前にパスする必要があります。 テストマージコミットに関する詳しい情報については、「[プルリクエスト](/rest/reference/pulls#response-1)」を参照してください。

![マージコミットが競合しているブランチ](/assets/images/help/repository/req-status-check-conflicting-merge-commits.png)
{% endif %}

### 参考リンク

- "[ステータスチェックについて](/github/collaborating-with-issues-and-pull-requests/about-status-checks)"
