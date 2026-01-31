---
title: Using conditions to control job execution
shortTitle: Control jobs with conditions
intro: Prevent a job from running unless your conditions are met.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
redirect_from:
  - /actions/using-jobs/using-conditions-to-control-job-execution
  - /actions/writing-workflows/choosing-when-your-workflow-runs/using-conditions-to-control-job-execution
  - /actions/how-tos/writing-workflows/choosing-when-your-workflow-runs/using-conditions-to-control-job-execution
---

You can use the `jobs.<job_id>.if` conditional to prevent a job from running unless a condition is met. {% data reusables.actions.if-supported-contexts %}

### Example: Only run job for a specific repository

This example uses `if` to control when the `production-deploy` job can run. It will only run if the repository is named `octo-repo-prod` and is within the `octo-org` organization. Otherwise, the job will be marked as _skipped_.

```yaml copy
name: example-workflow
on: [push]
jobs:
  production-deploy:
    if: {% raw %}${{ github.repository == 'octo-org/octo-repo-prod' }}{% endraw %}
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '14'
      - run: npm install -g bats
```

Skipped jobs display the message "This check was skipped."

> [!NOTE]
> A job that is skipped will report its status as "Success". It will not prevent a pull request from merging, even if it is a required check.

{% ifversion fpt or ghec %}

To debug why a job was skipped or ran unexpectedly, you can view job condition expression logs. For more information, see [AUTOTITLE](/actions/how-tos/monitor-workflows/view-job-condition-logs).

{% endif %}
