---
title: Adding a workflow status badge
shortTitle: Add a status badge
intro: You can display a status badge in your repository to indicate the status of your workflows.
redirect_from:
  - /actions/managing-workflow-runs/adding-a-workflow-status-badge
  - /actions/monitoring-and-troubleshooting-workflows/adding-a-workflow-status-badge
  - /actions/monitoring-and-troubleshooting-workflows/monitoring-workflows/adding-a-workflow-status-badge
  - /actions/how-tos/monitoring-and-troubleshooting-workflows/monitoring-workflows/adding-a-workflow-status-badge
  - /actions/how-tos/monitor-workflows/adding-a-workflow-status-badge
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
---

{% data reusables.actions.enterprise-github-hosted-runners %}

> [!NOTE]
> Workflow badges in a private repository are not accessible externally, so you won't be able to embed them or link to them from an external site.

{% data reusables.repositories.actions-workflow-status-badge-intro %}

To add a workflow status badge to your `README.md` file, first find the URL for the status badge you would like to display. Then you can use Markdown to display the badge as an image in your `README.md` file. For more information about image markup in Markdown, see [AUTOTITLE](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#images).

## Using the UI

You can create a workflow status badge directly on the UI using the workflow file name, branch parameter, and event parameter.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
1. On the right side of the page, next to the "Filter workflow runs" field, click {% octicon "kebab-horizontal" aria-label="Show workflow options" %} to display a dropdown menu and click **Create status badge**.
1. Optionally, select a branch if you want to display the status badge for a branch different from the default branch.
1. Optionally, select the event that will trigger the workflow.
1. Click **{% octicon "copy" aria-hidden="true" aria-label="copy" %} Copy status badge Markdown**.
1. Copy the Markdown into your `README.md` file.

## Using the workflow file name

You can build the URL for a workflow status badge using the name of the workflow file:

```text
{% ifversion fpt or ghec %}https://github.com{% else %}HOSTNAME{% endif %}/OWNER/REPOSITORY/actions/workflows/WORKFLOW-FILE/badge.svg
```

To display the workflow status badge in your `README.md` file, use the Markdown markup for embedding images. For more information about image markup in Markdown, see [AUTOTITLE](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#images).

For example, add the following Markdown to your `README.md` file to add a status badge for a workflow with the file path `.github/workflows/main.yml`. The `OWNER` of the repository is the `github` organization and the `REPOSITORY` name is `docs`.

```markdown
![example workflow](https://github.com/github/docs/actions/workflows/main.yml/badge.svg)
```

## Using the `branch` parameter

To display the status of a workflow run for a specific branch, add `?branch=BRANCH-NAME` to the end of the status badge URL.

For example, add the following Markdown to your `README.md` file to display a status badge for a branch with the name `feature-1`.

```markdown
![example branch parameter](https://github.com/github/docs/actions/workflows/main.yml/badge.svg?branch=feature-1)
```

## Using the `event` parameter

To display the status of workflow runs triggered by the `push` event, add `?event=push` to the end of the status badge URL.

For example, add the following Markdown to your `README.md` file to display a badge with the status of workflow runs triggered by the `push` event, which will show the status of the build for the current state of that branch.

```markdown
![example event parameter](https://github.com/github/docs/actions/workflows/main.yml/badge.svg?event=push)
```
