---
title: Using GitHub Actions for project management
intro: 'You can use {% data variables.product.prodname_actions %} to automate many of your project management tasks.'
redirect_from:
  - /actions/guides/using-github-actions-for-project-management
  - /actions/managing-issues-and-pull-requests/using-github-actions-for-project-management
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: overview
topics:
  - Project management
shortTitle: Actions for project management
---

You can use {% data variables.product.prodname_actions %} to automate your project management tasks by creating workflows. Each workflow contains a series of tasks that are performed automatically every time the workflow runs. For example, you can create a workflow that runs every time an issue is created to add a label{% ifversion projects-v1 %}, move the issue onto a {% data variables.projects.projects_v1_board %},{% endif %} and leave a comment.

## When do workflows run?

You can configure your workflows to run on a schedule or be triggered when an event occurs. For example, you can set your workflow to run when someone creates an issue in a repository.

Many workflow triggers are useful for automating project management.

* An issue is opened, assigned, or labeled.
* A comment is added to an issue.
* A scheduled time.

For a full list of events that can trigger workflows, see "[AUTOTITLE](/actions/using-workflows/events-that-trigger-workflows)."

## What can workflows do?

Workflows can do many things, such as commenting on an issue, adding or removing labels, {% ifversion projects-v1 %}moving cards on {% data variables.projects.projects_v1_boards %}, {% endif %}and opening issues.

You can learn about using {% data variables.product.prodname_actions %} for project management by following these tutorials, which include example workflows that you can adapt to meet your needs.

* "[AUTOTITLE](/actions/managing-issues-and-pull-requests/adding-labels-to-issues)"{%- ifversion projects-v1 %}
* "[AUTOTITLE](/actions/managing-issues-and-pull-requests/removing-a-label-when-a-card-is-added-to-a-project-board-column)"
* "[AUTOTITLE](/actions/managing-issues-and-pull-requests/moving-assigned-issues-on-project-boards)"{% endif %}
* "[AUTOTITLE](/actions/managing-issues-and-pull-requests/commenting-on-an-issue-when-a-label-is-added)"
* "[AUTOTITLE](/actions/managing-issues-and-pull-requests/closing-inactive-issues)"
* "[AUTOTITLE](/actions/managing-issues-and-pull-requests/scheduling-issue-creation)"
