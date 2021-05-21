---
title: Closing inactive issues
intro: 'You can use {% data variables.product.prodname_actions %} to comment on or close issues that have been inactive for a certain period of time.'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: tutorial
topics:
  - Workflows
  - Project management
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}
{% data reusables.actions.ae-self-hosted-runners-notice %}

### はじめに

This tutorial demonstrates how to use the [`actions/stale` action](https://github.com/marketplace/actions/close-stale-issues) to comment on and close issues that have been inactive for a certain period of time. For example, you can comment if an issue has been inactive for 30 days to prompt participants to take action. Then, if no additional activity occurs after 14 days, you can close the issue.

In the tutorial, you will first make a workflow file that uses the [`actions/stale` action](https://github.com/marketplace/actions/close-stale-issues). Then, you will customize the workflow to suit your needs.

### ワークフローの作成

1. {% data reusables.actions.choose-repo %}
2. {% data reusables.actions.make-workflow-file %}
3. Copy the following YAML contents into your workflow file.

    ```yaml{:copy}
    name: Close inactive issues
    on:
      schedule:
        - cron: "30 1 * * *"

    jobs:
      close-issues:
        runs-on: ubuntu-latest{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
        permissions:
          issues: write
          pull-requests: write{% endif %}
        steps:
          - uses: actions/stale@v3
            with:
              days-before-issue-stale: 30
              days-before-issue-close: 14
              stale-issue-label: "stale"
              stale-issue-message: "This issue is stale because it has been open for 30 days with no activity."
              close-issue-message: "This issue was closed because it has been inactive for 14 days since being marked as stale."
              days-before-pr-stale: -1
              days-before-pr-close: -1
              repo-token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
    ```

4. Customize the parameters in your workflow file:
   - Change the value for `on.schedule` to dictate when you want this workflow to run. In the example above, the workflow will run every day at 1:30 UTC. For more information about scheduled workflows, see "[Scheduled events](/actions/reference/events-that-trigger-workflows#scheduled-events)."
   - Change the value for `days-before-issue-stale` to the number of days without activity before the `actions/stale` action labels an issue. If you never want this action to label issues, set this value to `-1`.
   - Change the value for `days-before-issue-close` to the number of days without activity before the `actions/stale` action closes an issue. If you never want this action to close issues, set this value to `-1`.
   - Change the value for `stale-issue-label` to the label that you want to apply to issues that have been inactive for the amount of time specified by `days-before-issue-stale`.
   - Change the value for `stale-issue-message` to the comment that you want to add to issues that are labeled by the `actions/stale` action.
   - Change the value for `close-issue-message` to the comment that you want to add to issues that are closed by the `actions/stale` action.
5. {% data reusables.actions.commit-workflow %}

### Expected results

Based on the `schedule` parameter (for example, every day at 1:30 UTC), your workflow will find issues that have been inactive for the specified period of time and will add the specified comment and label. Additionally, your workflow will close any previously labeled issues if no additional activity has occurred for the specified period of time.

{% data reusables.actions.schedule-delay %}

You can view the history of your workflow runs to see this workflow run periodically. 詳しい情報については、「[ワークフロー実行の履歴を表示する](/actions/managing-workflow-runs/viewing-workflow-run-history)」を参照してください。

This workflow will only label and/or close 30 issues at a time in order to avoid rate limit abuse. You can configure this with the `operations-per-run` setting. For more information, see the [`actions/stale` action documentation](https://github.com/marketplace/actions/close-stale-issues).

### 次のステップ

- To learn more about additional things you can do with the `actions/stale` action, like closing inactive pull requests, ignoring issues with certain labels or milestones, or only checking issues with certain labels, see the [`actions/stale` action documentation](https://github.com/marketplace/actions/close-stale-issues).
- [Search GitHub](https://github.com/search?q=%22uses%3A+actions%2Fstale%22&type=code) for examples of workflows using this action.
