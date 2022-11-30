---
title: Adding labels to issues
shortTitle: Add labels to issues
intro: 'You can use {% data variables.product.prodname_actions %} to automatically label issues.'
redirect_from:
  - /actions/guides/adding-labels-to-issues
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - Project management
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

This tutorial demonstrates how to use the [`actions/github-script` action](https://github.com/marketplace/actions/github-script) in a workflow to label newly opened or reopened issues. For example, you can add the `triage` label every time an issue is opened or reopened. Then, you can see all issues that need to be triaged by filtering for issues with the `triage` label.

The `actions/github-script` action allows you to easily use the {% data variables.product.prodname_dotcom %} API in a workflow.

In the tutorial, you will first make a workflow file that uses the [`actions/github-script` action](https://github.com/marketplace/actions/github-script). Then, you will customize the workflow to suit your needs.

## Creating the workflow

1. {% data reusables.actions.choose-repo %}
2. {% data reusables.actions.make-workflow-file %}
3. Copy the following YAML contents into your workflow file.
  
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
        permissions:
          issues: write
        steps:
          - uses: {% data reusables.actions.action-github-script %}
            with:
              script: |
                github.rest.issues.addLabels({
                  issue_number: context.issue.number,
                  owner: context.repo.owner,
                  repo: context.repo.repo,
                  labels: ["triage"]
                })
    ```

4. Customize the `script` parameter in your workflow file:
   - The `issue_number`, `owner`, and `repo` values are automatically set using the `context` object. You do not need to change these.
   - Change the value for `labels` to the list of labels that you want to add to the issue. Separate multiple labels with commas. For example, `["help wanted", "good first issue"]`. For more information about labels, see "[Managing labels](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests)."
5. {% data reusables.actions.commit-workflow %}

## Testing the workflow

Every time an issue in your repository is opened or reopened, this workflow will add the labels that you specified to the issue.

Test out your workflow by creating an issue in your repository.

1. Create an issue in your repository. For more information, see "[Creating an issue](/github/managing-your-work-on-github/creating-an-issue)."
2. To see the workflow run that was triggered by creating the issue, view the history of your workflow runs. For more information, see "[Viewing workflow run history](/actions/managing-workflow-runs/viewing-workflow-run-history)."
3. When the workflow completes, the issue that you created should have the specified labels added.

## Next steps

- To learn more about additional things you can do with the `actions/github-script` action, see the [`actions/github-script` action documentation](https://github.com/marketplace/actions/github-script).
- To learn more about different events that can trigger your workflow, see "[Events that trigger workflows](/actions/reference/events-that-trigger-workflows#issues)."
- [Search GitHub](https://github.com/search?q=%22uses:+actions/github-script%22&type=code) for examples of workflows using this action.
