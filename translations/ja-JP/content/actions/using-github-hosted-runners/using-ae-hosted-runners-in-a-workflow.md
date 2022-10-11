---
title: Using AE hosted runners in a workflow
intro: 'You can use labels to send jobs to a pool of {% data variables.actions.hosted_runner %}s.'
versions:
  github-ae: '*'
---

{% data reusables.actions.ae-beta %}

### Using {% data variables.actions.hosted_runner %}s in a workflow

Labels allow you to send workflow jobs to any {% data variables.actions.hosted_runner %} that includes that label. You can use the default labels, and you can create your own custom labels.

### デフォルトラベルを使ったジョブの転送

An {% data variables.actions.hosted_runner %} receives a label when it is added to {% data variables.product.prodname_actions %}. The label is used to indicate where it was assigned.

You can use your workflow's YAML to send jobs to a specific {% data variables.actions.hosted_runner %} pool. This example demonstrates how to configure a workflow to run on a label called `AE-runner-for-CI`:

```yaml
runs-on: [AE-runner-for-CI]
```

詳細については、「[{% data variables.product.prodname_actions %}のワークフロー構文](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idruns-on)」を参照してください。

### カスタムラベルを使ったジョブの転送

You can create custom labels and assign them to your {% data variables.actions.hosted_runner %}s at any time. Custom labels let you send jobs to particular types of runners, based on how they're labeled.

For example, if you have a job that requires a specific software package, you can create a custom label called `octocat` and assign it to the runners that have the package installed. An {% data variables.actions.hosted_runner %} that matches all the assigned labels will then be eligible to run the job.

This example shows a job that uses multiple labels:

```yaml
runs-on: [AE-runner-for-CI, octocat, linux]
```

These labels operate cumulatively, so an {% data variables.actions.hosted_runner %}'s labels must match all of them for it to be eligible to process the job.
