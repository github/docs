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
ms.openlocfilehash: 6e99f8ebf0275d065c640bb7b4c7b60462f51ec0
ms.sourcegitcommit: 84a9475bf99a37021746349a51ce814516928516
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/07/2022
ms.locfileid: '148135807'
---
同じ名前のチェックとステータスがあり、その名前をステータスチェック必須とするようにした場合、チェックとステータスはどちらも必須になります。 詳細については、「[チェック](/rest/reference/checks)」を参照してください。

ステータスチェック必須を有効にした後、マージする前にブランチをベースブランチに対して最新にする必要がある場合があります。 これによって、ブランチがベースブランチからの最新のコードでテストされたことが保証されます。 ブランチが古い場合、ベースブランチをブランチにマージする必要があります。 詳細については、「[保護されたブランチについて](/github/administering-a-repository/about-protected-branches#require-status-checks-before-merging)」を参照してください。

{% note %}

**注:** Git リベースを使用してブランチをベース ブランチと同じ最新状態にすることもできます。 詳細については、「[Git リベースについて](/github/getting-started-with-github/about-git-rebase)」を参照してください。

{% endnote %}

必須ステータスチェックにすべてパスするまでは、ローカルでの変更を保護されたブランチにプッシュすることはできません。 その代わりに、以下のようなエラー メッセージが返されます。

```shell
remote: error: GH006: Protected branch update failed for refs/heads/main.
remote: error: Required status check "ci-build" is failing
```
{% note %}

**注:** 必須状態チェックに合格した最新の pull request は、ローカルでマージされた後で、保護されたブランチにプッシュできます。 これはマージコミット自体でステータスチェックを実行せずに行えます。

{% endnote %}

## head コミットとテスト マージ コミットの間の競合

テストマージコミットと head コミットのステータスチェックの結果が競合する場合があります。 テストマージコミットにステータスがある場合、そのテストマージコミットは必ずパスする必要があります。 それ以外の場合、ヘッドコミットのステータスは、ブランチをマージする前にパスする必要があります。 テスト マージ コミットの詳細については、「[プル](/rest/reference/pulls#get-a-pull-request)」を参照してください。

![マージコミットが競合しているブランチ](/assets/images/help/repository/req-status-check-conflicting-merge-commits.png)

## スキップされた必須チェックの処理

{% note %}

**注:** [パスのフィルター処理](/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)、[ブランチのフィルター処理](/actions/using-workflows/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore)、または [コミット メッセージ](/actions/managing-workflow-runs/skipping-workflow-runs)のためにワークフローがスキップされた場合、そのワークフローに関連付けられているチェックは "保留中" 状態のままになります。 これらのチェックを成功させる必要がある pull request は、マージが禁止されます。

ワークフロー内のジョブが条件付きでスキップされた場合、状態は "成功" として報告されます。 詳細については、「[ワークフロー実行をスキップする](/actions/managing-workflow-runs/skipping-workflow-runs)」および「[条件を使用してジョブの実行を制御する](/actions/using-jobs/using-conditions-to-control-job-execution)」を参照してください。

{% endnote %}

### 例

次の例で示すのは、`build` ジョブの完了状態が "成功" であることが必要なワークフローです。ただし、pull request が `scripts` ディレクトリのどのファイルも変更しないと、このワークフローはスキップされます。

```yaml
name: ci
on:
  pull_request:
    paths:
      - 'scripts/**'
jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [12.x, 14.x, 16.x]
    steps:
    - uses: {% data reusables.actions.action-checkout %}
    - name: Use Node.js {% raw %}${{ matrix.node-version }}{% endraw %}
      uses: {% data reusables.actions.action-setup-node %}
      with:
        node-version: {% raw %}${{ matrix.node-version }}{% endraw %}
        cache: 'npm'
    - run: npm ci
    - run: npm run build --if-present
    - run: npm test
```

[パスのフィルター処理](/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)のために、リポジトリのルートのファイルのみを変更する pull request は、このワークフローをトリガーせず、マージがブロックされます。 この pull request では次の状態が表示されます。

![必須チェックがスキップされたが保留中として表示](/assets/images/help/repository/PR-required-check-skipped.png)

これを修正するには、同じ名前の汎用ワークフローを作成して、次のワークフローのようにどのケースでも true を返すようにします。

```yaml
name: ci
on:
  pull_request:
    paths-ignore:
      - 'scripts/**'
      - 'middleware/**'
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - run: 'echo "No build required"'
```
これで、誰かが送った pull request が最初のワークフローの `paths` 内のファイルを変更しないときも常にチェックに合格します。

![チェックがスキップされたが汎用ワークフローによって合格](/assets/images/help/repository/PR-required-check-passed-using-generic.png)

{% note %}

**注:**
* 両方のワークフロー ファイルの `name` キーと必須ジョブ名を同じにしてください。 詳細については、「[{% data variables.product.prodname_actions %} のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions)」を参照してください。
* 上記の例では {% data variables.product.prodname_actions %} が使用されていますが、この対処方法は、{% data variables.product.company_short %} と統合されている他の CI/CD プロバイダーにも適用できます。

{% endnote %}

{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}
## 予期しないソースからの必要な状態チェック

保護されたブランチで、特定の {% data variables.product.prodname_github_app %} の状態チェックを必須にすることもできます。 次のようなメッセージが表示された場合は、マージ ボックスに一覧表示されているチェックが、想定されるアプリによって設定されたことを確認する必要があります。

```
Required status check "build" was not set by the expected {% data variables.product.prodname_github_app %}.
```
{% endif %}
