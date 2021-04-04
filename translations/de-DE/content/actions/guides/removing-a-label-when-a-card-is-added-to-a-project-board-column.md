---
title: Removing a label when a card is added to a project board column
intro: You can use {% data variables.product.prodname_actions %} to automatically remove a label when an issue or pull request is added to a specific column on a project board.
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: 'tutorial'
topics:
  - 'Workflows'
  - 'Project management'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}
{% data reusables.actions.ae-self-hosted-runners-notice %}

### Einführung

This tutorial demonstrates how to use the [`andymckay/labeler` action](https://github.com/marketplace/actions/simple-issue-labeler) along with a conditional to remove a label from issues and pull requests that are added to a specific column on a project board. For example, you can remove the `needs review` label when project cards are moved into the `Done` column.

In the tutorial, you will first make a workflow file that uses the [`andymckay/labeler` action](https://github.com/marketplace/actions/simple-issue-labeler). Then, you will customize the workflow to suit your needs.

### Creating the workflow

1. {% data reusables.actions.choose-repo %}
2. Choose a project that belongs to the repository. This workflow cannot be used with projects that belong to users or organizations. You can use an existing project, or you can create a new project. For more information about creating a project, see "[Creating a project board](/github/managing-your-work-on-github/creating-a-project-board)."
3. {% data reusables.actions.make-workflow-file %}
4. Copy the following YAML contents into your workflow file.

    {% raw %}
    ```yaml{:copy}
    name: Remove labels
    on:
      project_card:
        types:
          - moved
    jobs:
      remove_labels:
        if: github.event.project_card.column_id == '12345678'
        runs-on: ubuntu-latest
        steps:
          - name: remove labels
            uses: andymckay/labeler@master
            with:
              remove-labels: "needs review"
    ```
    {% endraw %}
5. Customize the parameters in your workflow file:
   - In `github.event.project_card.column_id == '12345678'`, replace `12345678` with the ID of the column where you want to un-label issues and pull requests that are moved there.

    To find the column ID, navigate to your project board. Next to the title of the column, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} then click **Copy column link**. The column ID is the number at the end of the copied link. For example, `24687531` is the column ID for `https://github.com/octocat/octo-repo/projects/1#column-24687531`.

     If you want to act on more than one column, separate the conditions with `||`. For example, `if github.event.project_card.column_id == '12345678' || github.event.project_card.column_id == '87654321'` will act whenever a project card is added to column `12345678` or column `87654321`. The columns may be on different project boards.
   - Change the value for `remove-labels` to the list of labels that you want to remove from issues or pull requests that are moved to the specified column(s). Separate multiple labels with commas. For example, `"help wanted, good first issue"`. For more information on labels, see "[Managing labels](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests)."
6. {% data reusables.actions.commit-workflow %}

### Testing the workflow

Every time a project card on a project in your repository moves, this workflow will run. If the card is an issue or a pull request and is moved into the column that you specified, then the workflow will remove the specified labels from the issue or a pull request. Cards that are notes will not be affected.

Test your workflow out by moving an issue on your project into the target column.

1. Open an issue in your repository. For more information, see "[Creating an issue](/github/managing-your-work-on-github/creating-an-issue)."
2. Label the issue with the labels that you want the workflow to remove. For more information, see "[Managing labels](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests)."
3. Add the issue to the project column that you specified in your workflow file. Weitere Informationen finden Sie unter „[Issues und Pull Requests zu einem Projektboard hinzufügen](/github/managing-your-work-on-github/adding-issues-and-pull-requests-to-a-project-board)“.
4. To see the workflow run that was triggered by adding the issue to the project, view the history of your workflow runs. For more information, see "[Viewing workflow run history](/actions/managing-workflow-runs/viewing-workflow-run-history)."
5. When the workflow completes, the issue that you added to the project column should have the specified labels removed.

### Nächste Schritte:

- To learn more about additional things you can do with the `andymckay/labeler` action, like adding labels or skipping this action if the issue is assigned or has a specific label, visit the [`andymckay/labeler` action documentation](https://github.com/marketplace/actions/simple-issue-labeler).
- [Search GitHub](https://github.com/search?q=%22uses:+andymckay/labeler%22&type=code) for examples of workflows using this action.
