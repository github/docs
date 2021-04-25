---
title: Commenting on an issue when a label is added
intro: 'You can use {% data variables.product.prodname_actions %} to automatically comment on issues when a specific label is applied.'
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

### Introduction

This tutorial demonstrates how to use the [`peter-evans/create-or-update-comment` action](https://github.com/marketplace/actions/create-or-update-comment) to comment on an issue when a specific label is applied. For example, when the `help-wanted` label is added to an issue, you can add a comment to encourage contributors to work on the issue.

In the tutorial, you will first make a workflow file that uses the [`peter-evans/create-or-update-comment` action](https://github.com/marketplace/actions/create-or-update-comment). Then, you will customize the workflow to suit your needs.

### Creating the workflow

1. {% data reusables.actions.choose-repo %}
2. {% data reusables.actions.make-workflow-file %}
3. Copy the following YAML contents into your workflow file.

    {% raw %}
    ```yaml{:copy}
    name: Add comment
    on:
      issues:
        types:
          - labeled
    jobs:
      add-comment:
        if: github.event.label.name == 'help-wanted'
        runs-on: ubuntu-latest
        steps:
          - name: Add comment
            uses: peter-evans/create-or-update-comment@v1
            with:
              issue-number: ${{ github.event.issue.number }}
              body: |
                This issue is available for anyone to work on. **Make sure to reference this issue in your pull request.** :sparkles: Thank you for your contribution! :sparkles:
    ```
    {% endraw %}
4. Customize the parameters in your workflow file:
   - Replace `help-wanted` in `if: github.event.label.name == 'help-wanted'` with the label that you want to act on. If you want to act on more than one label, separate the conditions with `||`. For example, `if: github.event.label.name == 'bug' || github.event.label.name == 'fix me'` will comment whenever the `bug` or `fix me` labels are added to an issue.
   - Change the value for `body` to the comment that you want to add. GitHub flavored markdown is supported. For more information about markdown, see "[Basic writing and formatting syntax](/github/writing-on-github/basic-writing-and-formatting-syntax)."
5. {% data reusables.actions.commit-workflow %}

### Testing the workflow

Every time an issue in your repository is labeled, this workflow will run. If the label that was added is one of the labels that you specified in your workflow file, the `peter-evans/create-or-update-comment` action will add the comment that you specified to the issue.

Test your workflow by applying your specified label to an issue.

1. Open an issue in your repository. For more information, see "[Creating an issue](/github/managing-your-work-on-github/creating-an-issue)."
2. Label the issue with the specified label in your workflow file. For more information, see "[Managing labels](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests)."
3. To see the workflow run triggered by labeling the issue, view the history of your workflow runs. For more information, see "[Viewing workflow run history](/actions/managing-workflow-runs/viewing-workflow-run-history)."
4. When the workflow completes, the issue that you labeled should have a comment added.

### 다음 단계

- To learn more about additional things you can do with the `peter-evans/create-or-update-comment` action, like adding reactions, visit the [`peter-evans/create-or-update-comment` action documentation](https://github.com/marketplace/actions/create-or-update-comment).
