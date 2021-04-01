---
title: Adding labels to issues
intro: 'You can use {% data variables.product.prodname_actions %} to automatically label issues.'
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

This tutorial demonstrates how to use the [`andymckay/labeler` action](https://github.com/marketplace/actions/simple-issue-labeler) in a workflow to label newly opened or reopened issues. For example, you can add the `triage` label every time an issue is opened or reopened. Then, you can see all issues that need to be triaged by filtering for issues with the `triage` label.

In the tutorial, you will first make a workflow file that uses the [`andymckay/labeler` action](https://github.com/marketplace/actions/simple-issue-labeler). Then, you will customize the workflow to suit your needs.

### Creating the workflow

1. {% data reusables.actions.choose-repo %}
2. {% data reusables.actions.make-workflow-file %}
3. Copy the following YAML contents into your workflow file.

    {% raw %}
    ```yaml{:copy}
    name: Label issues
    on:
      issues:
        types:
          - reopened
          - opened
    jobs:
      label_issues:
        runs-on: ubuntu-latest
        steps:
          - name: Label issues
            uses: andymckay/labeler@1.0.2
            with:
              add-labels: "triage"
    ```
    {% endraw %}
4. Customize the parameters in your workflow file:
   - Change the value for `add-labels` to the list of labels that you want to add to the issue. Separate multiple labels with commas. For example, `"help wanted, good first issue"`. For more information about labels, see "[Managing labels](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests)."
5. {% data reusables.actions.commit-workflow %}

### Testing the workflow

Every time an issue in your repository is opened or reopened, this workflow will add the labels that you specified to the issue.

Test out your workflow by creating an issue in your repository.

1. Create an issue in your repository. For more information, see "[Creating an issue](/github/managing-your-work-on-github/creating-an-issue)."
2. To see the workflow run that was triggered by creating the issue, view the history of your workflow runs. For more information, see "[Viewing workflow run history](/actions/managing-workflow-runs/viewing-workflow-run-history)."
3. When the workflow completes, the issue that you created should have the specified labels added.

### 다음 단계

- To learn more about additional things you can do with the `andymckay/labeler` action, like removing labels or skipping this action if the issue is assigned or has a specific label, see the [`andymckay/labeler` action documentation](https://github.com/marketplace/actions/simple-issue-labeler).
- To learn more about different events that can trigger your workflow, see "[Events that trigger workflows](/actions/reference/events-that-trigger-workflows#issues)." The `andymckay/labeler` action only works on `issues`, `pull_request`, or `project_card` events.
- [Search GitHub](https://github.com/search?q=%22uses:+andymckay/labeler%22&type=code) for examples of workflows using this action.
