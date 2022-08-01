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

## Conflicts between head commit and test merge commit

テストマージコミットと head コミットのステータスチェックの結果が競合する場合があります。 テストマージコミットにステータスがある場合、そのテストマージコミットは必ずパスする必要があります。 それ以外の場合、ヘッドコミットのステータスは、ブランチをマージする前にパスする必要があります。 テストマージコミットに関する詳しい情報については、「[プル](/rest/reference/pulls#get-a-pull-request)」を参照してください。

![マージコミットが競合しているブランチ](/assets/images/help/repository/req-status-check-conflicting-merge-commits.png)

## Handling skipped but required checks

{% note %}

**ノート:** [path filtering](/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)、[branch filtering](/actions/using-workflows/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore)、[commit message](/actions/managing-workflow-runs/skipping-workflow-runs)によってワークフローがスキップされた場合、そのワークフローに関連づけられたチェックは、"Pending"状態のままになります。 A pull request that requires those checks to be successful will be blocked from merging.

If a job in a workflow is skipped due to a conditional, it will report its status as "Success". For more information see [Skipping workflow runs](/actions/managing-workflow-runs/skipping-workflow-runs) and [Using conditions to control job execution](/actions/using-jobs/using-conditions-to-control-job-execution).

{% endnote %}

### サンプル

The following example shows a workflow that requires a "Successful" completion status for the `build` job, but the workflow will be skipped if the pull request does not change any files in the `scripts` directory.

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

Due to [path filtering](/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore), a pull request that only changes a file in the root of the repository will not trigger this workflow and is blocked from merging. You would see the following status on the pull request:

![Required check skipped but shown as pending](/assets/images/help/repository/PR-required-check-skipped.png)

You can fix this by creating a generic workflow, with the same name, that will return true in any case similar to the workflow below :

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
      - run: 'echo "No build required" '
```
Now the checks will always pass whenever someone sends a pull request that doesn't change the files listed under `paths` in the first workflow.

![Check skipped but passes due to generic workflow](/assets/images/help/repository/PR-required-check-passed-using-generic.png)

{% note %}

**ノート:**
* Make sure that the `name` key and required job name in both the workflow files are the same. For more information, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions)".
* The example above uses {% data variables.product.prodname_actions %} but this workaround is also applicable to other CI/CD providers that integrate with {% data variables.product.company_short %}.

{% endnote %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-5379 or ghec %}It's also possible for a protected branch to require a status check from a specific {% data variables.product.prodname_github_app %}. If you see a message similar to the following, then you should verify that the check listed in the merge box was set by the expected app.

```
Required status check "build" was not set by the expected {% data variables.product.prodname_github_app %}.
```
{% endif %}
