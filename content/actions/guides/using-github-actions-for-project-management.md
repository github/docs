---
title: Using GitHub Actions for project management
intro: 'You can use {% data variables.product.prodname_actions %} to automate many of your project management tasks.'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: overview
topics:
  - Project management
---

You can use {% data variables.product.prodname_actions %} to automate your project management tasks by creating workflows. Each workflow contains a series of tasks that are performed automatically every time the workflow runs. For example, you can create a workflow that runs every time an issue is created to add a label, leave a comment, and move the issue onto a project board.

### When do workflows run?

You can configure your workflows to run on a schedule or be triggered when an event occurs. For example, you can set your workflow to run when someone creates an issue in a repository.

Many workflow triggers are useful for automating project management.

- An issue is opened, assigned, or labeled.
- A comment is added to an issue.
- A project card is created or moved.
- A scheduled time.

For a full list of events that can trigger workflows, see "[Events that trigger workflows](/actions/reference/events-that-trigger-workflows)."

### What can workflows do?

Workflows can do many things, such as commenting on an issue, adding or removing labels, moving cards on project boards, and opening issues.

You can learn about using {% data variables.product.prodname_actions %} for project management by following these tutorials, which include example workflows that you can adapt to meet your needs.

- "[Adding labels to issues](/actions/guides/adding-labels-to-issues)"
- "[Removing a label when a card is added to a project board column](/actions/guides/removing-a-label-when-a-card-is-added-to-a-project-board-column)"
- "[Moving assigned issues on project boards](/actions/guides/moving-assigned-issues-on-project-boards)"
- "[Commenting on an issue when a label is added](/actions/guides/commenting-on-an-issue-when-a-label-is-added)"
- "[Closing inactive issues](/actions/guides/closing-inactive-issues)"
- "[Scheduling issue creation](/actions/guides/scheduling-issue-creation)"
