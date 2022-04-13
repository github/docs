---
title: Moving assigned issues on project boards
intro: 'You can use {% data variables.product.prodname_actions %} to automatically move an issue to a specific column on a project board when the issue is assigned.'
redirect_from:
  - /actions/guides/moving-assigned-issues-on-project-boards
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - Project management
shortTitle: Move assigned issues
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

This tutorial demonstrates how to use the [`alex-page/github-project-automation-plus` action](https://github.com/marketplace/actions/github-project-automation) to automatically move an issue to a specific column on a project board when the issue is assigned. For example, when an issue is assigned, you can move it into the `In Progress` column your project board.

In the tutorial, you will first make a workflow file that uses the [`alex-page/github-project-automation-plus` action](https://github.com/marketplace/actions/github-project-automation). Then, you will customize the workflow to suit your needs.

## Creating the workflow

1. {% data reusables.actions.choose-repo %}
2. In your repository, choose a project board. You can use an existing project, or you can create a new project. For more information about creating a project, see "[Creating a project board](/github/managing-your-work-on-github/creating-a-project-board)."
3. {% data reusables.actions.make-workflow-file %}
4. Copy the following YAML contents into your workflow file.

    ```yaml{:copy}
{% indented_data_reference reusables.actions.actions-not-certified-by-github-comment spaces=4 %}

    name: Move assigned card
    on:
      issues:
        types:
          - assigned
    jobs:
      move-assigned-card:
        runs-on: ubuntu-latest
        steps:
          - uses: alex-page/github-project-automation-plus@5bcba1c1c091a222584d10913e5c060d32c44044
            with:
              project: Docs Work
              column: In Progress
              repo-token: {% raw %}${{ secrets.PERSONAL_ACCESS_TOKEN }}{% endraw %}
    ```

5. Customize the parameters in your workflow file:
   - Change the value for `project` to the name of your project board. If you have multiple project boards with the same name, the `alex-page/github-project-automation-plus` action will act on all projects with the specified name.
   - Change the value for `column` to the name of the column where you want issues to move when they are assigned.
   - Change the value for `repo-token`:
     1. Create a personal access token with the `repo` scope. For more information, see "[Creating a personal access token](/github/authenticating-to-github/creating-a-personal-access-token)."
     1. Store this personal access token as a secret in your repository. For more information about storing secrets, see "[Encrypted secrets](/actions/reference/encrypted-secrets)."
     1. In your workflow file, replace `PERSONAL_ACCESS_TOKEN` with the name of your secret.
6. {% data reusables.actions.commit-workflow %}

## Testing the workflow

Whenever an issue in your repository is assigned, the issue will be moved to the specified project board column. If the issue is not already on the project board, it will be added to the project board.

If your repository is user-owned, the `alex-page/github-project-automation-plus` action will act on all projects in your repository or personal account that have the specified project name and column. Likewise, if your repository is organization-owned, the action will act on all projects in your repository or organization that have the specified project name and column.

Test your workflow by assigning an issue in your repository.

1. Open an issue in your repository. For more information, see "[Creating an issue](/github/managing-your-work-on-github/creating-an-issue)."
2. Assign the issue. For more information, see "[Assigning issues and pull requests to other GitHub users](/github/managing-your-work-on-github/assigning-issues-and-pull-requests-to-other-github-users)."
3. To see the workflow run that assigning the issue triggered, view the history of your workflow runs. For more information, see "[Viewing workflow run history](/actions/managing-workflow-runs/viewing-workflow-run-history)."
4. When the workflow completes, the issue that you assigned should be added to the specified project board column.

## Next steps

- To learn more about additional things you can do with the `alex-page/github-project-automation-plus` action, like deleting or archiving project cards, visit the [`alex-page/github-project-automation-plus` action documentation](https://github.com/marketplace/actions/github-project-automation).
