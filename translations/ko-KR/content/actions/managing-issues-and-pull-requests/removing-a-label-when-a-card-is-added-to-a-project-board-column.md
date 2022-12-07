---
title: Removing a label when a card is added to a project board column
intro: 'You can use {% data variables.product.prodname_actions %} to automatically remove a label when an issue or pull request is added to a specific column on a {% data variables.projects.projects_v1_board %}.'
redirect_from:
  - /actions/guides/removing-a-label-when-a-card-is-added-to-a-project-board-column
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - Project management
shortTitle: Remove label when adding card
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

This tutorial demonstrates how to use the [`actions/github-script` action](https://github.com/marketplace/actions/github-script) along with a conditional to remove a label from issues and pull requests that are added to a specific column on a {% data variables.projects.projects_v1_board %}. For example, you can remove the `needs review` label when project cards are moved into the `Done` column.

In the tutorial, you will first make a workflow file that uses the [`actions/github-script` action](https://github.com/marketplace/actions/github-script). Then, you will customize the workflow to suit your needs.

## Creating the workflow

1. {% data reusables.actions.choose-repo %}
2. Choose a {% data variables.projects.projects_v1_board %} that belongs to the repository. This workflow cannot be used with projects that belong to users or organizations. You can use an existing {% data variables.projects.projects_v1_board %}, or you can create a new {% data variables.projects.projects_v1_board %}. For more information about creating a project, see "[Creating a {% data variables.product.prodname_project_v1 %}](/github/managing-your-work-on-github/creating-a-project-board)."
3. {% data reusables.actions.make-workflow-file %}
4. Copy the following YAML contents into your workflow file.

    ```yaml{:copy}
    name: Remove a label
    on:
      project_card:
        types:
          - moved
    jobs:
      remove_label:
        if: github.event.project_card.column_id == '12345678'
        runs-on: ubuntu-latest
        permissions:
          issues: write
          pull-requests: write
        steps:
          - uses: {% data reusables.actions.action-github-script %}
            with:
              script: |
                // this gets the number at the end of the content URL, which should be the issue/PR number
                const issue_num = context.payload.project_card.content_url.split('/').pop()
                github.rest.issues.removeLabel({
                  issue_number: issue_num,
                  owner: context.repo.owner,
                  repo: context.repo.repo,
                  name: ["needs review"]
                })
    ```

5. Customize the parameters in your workflow file:
   - In `github.event.project_card.column_id == '12345678'`, replace `12345678` with the ID of the column where you want to un-label issues and pull requests that are moved there.

     To find the column ID, navigate to your {% data variables.projects.projects_v1_board %}. Next to the title of the column, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} then click **Copy column link**. The column ID is the number at the end of the copied link. For example, `24687531` is the column ID for `https://github.com/octocat/octo-repo/projects/1#column-24687531`.

     If you want to act on more than one column, separate the conditions with `||`. For example, `if github.event.project_card.column_id == '12345678' || github.event.project_card.column_id == '87654321'` will act whenever a project card is added to column `12345678` or column `87654321`. The columns may be on different project boards.
   - Change the value for `name` in the `github.rest.issues.removeLabel()` function to the name of the label that you want to remove from issues or pull requests that are moved to the specified column(s). For more information on labels, see "[Managing labels](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests)."
6. {% data reusables.actions.commit-workflow %}

## Testing the workflow

Every time a project card on a {% data variables.projects.projects_v1_board %} in your repository moves, this workflow will run. If the card is an issue or a pull request and is moved into the column that you specified, then the workflow will remove the specified label from the issue or a pull request. Cards that are notes will not be affected.

Test your workflow out by moving an issue on your {% data variables.projects.projects_v1_board %} into the target column.

1. Open an issue in your repository. For more information, see "[Creating an issue](/github/managing-your-work-on-github/creating-an-issue)."
2. Label the issue with the label that you want the workflow to remove. For more information, see "[Managing labels](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests)."
3. Add the issue to the {% data variables.projects.projects_v1_board %} column that you specified in your workflow file. For more information, see "[Adding issues and pull requests to a {% data variables.product.prodname_project_v1 %}](/github/managing-your-work-on-github/adding-issues-and-pull-requests-to-a-project-board)."
4. To see the workflow run that was triggered by adding the issue to the project, view the history of your workflow runs. For more information, see "[Viewing workflow run history](/actions/managing-workflow-runs/viewing-workflow-run-history)."
5. When the workflow completes, the issue that you added to the project column should have the specified label removed.

## Next steps

- To learn more about additional things you can do with the `actions/github-script` action, see the [`actions/github-script` action documentation](https://github.com/marketplace/actions/github-script).
- [Search GitHub](https://github.com/search?q=%22uses:+actions/github-script%22&type=code) for examples of workflows using this action.
