---
title: ワークフロー実行をスキップする
intro: You can skip workflow runs triggered by the `push` and `pull_request` events by including a command in your commit message.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Skip workflow runs
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

{% note %}

**Note:** If a workflow is skipped due to [path filtering](/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore), [branch filtering](/actions/using-workflows/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore) or a commit message (see below), then checks associated with that workflow will remain in a "Pending" state. A pull request that requires those checks to be successful will be blocked from merging.

{% endnote %}

Workflows that would otherwise be triggered using `on: push` or `on: pull_request` won't be triggered if you add any of the following strings to the commit message in a push, or the HEAD commit of a pull request:

* `[skip ci]`
* `[ci skip]`
* `[no ci]`
* `[skip actions]`
* `[actions skip]`

Alternatively, you can end the commit message with two empty lines followed by either:
- `skip-checks:true`
- `skip-checks: true`

最初にリポジトリがパスするための特定のチェックを受けるように設定されている場合、プルリクエストをマージすることはできません。 プルリクエストをマージできるようにするには、コミットメッセージのスキップ命令なしでプルリクエストに新しいコミットをプッシュできます。

{% note %}

**注釈:** スキップ命令は、`push` および `pull_request` イベントにのみ適用されます。 たとえば、コミットメッセージに `[skip ci]` を追加しても、`on: pull_request_target` でトリガーされたワークフロー実行は停止されません。

{% endnote %}

Skip instructions only apply to the workflow run(s) that would be triggered by the commit that contains the skip instructions. You can also disable a workflow from running. 詳しい情報については、「[ワークフローの無効化と有効化](/actions/managing-workflow-runs/disabling-and-enabling-a-workflow)」を参照してください。
