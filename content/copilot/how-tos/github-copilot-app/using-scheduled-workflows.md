---
title: Using scheduled workflows in the GitHub Copilot app
shortTitle: Scheduled workflows
intro: 'Automate recurring agent tasks so they run on a schedule or on demand, without manual intervention.'
allowTitleToDifferFromFilename: true
product: '{% data reusables.gated-features.github-app %}'
versions:
  feature: copilot
contentType: how-tos
redirect_from:
  - /copilot/how-tos/github-app/using-scheduled-workflows
category:
  - Author and optimize with Copilot
---

> [!NOTE] The {% data variables.copilot.github_copilot_app %} is in {% data variables.release-phases.technical_preview %} and subject to change.
>
> * **{% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %} users** — Download and install from the [{% data variables.copilot.github_copilot_app %} repository](https://gh.io/github-copilot-app-repo?utm_source=docs-github-copilot-app-scheduled-workflows&utm_medium=docs&utm_campaign=github-copilot-app-tech-preview-2026) if your organization or enterprise has enabled preview features and {% data variables.copilot.copilot_cli_short %}.
> * **{% data variables.copilot.copilot_pro_short %} and {% data variables.copilot.copilot_pro_plus_short %} users** — To request access, [join the waitlist](https://gh.io/github-copilot-app?utm_source=docs-github-copilot-app-scheduled-workflows&utm_medium=docs&utm_campaign=github-copilot-app-tech-preview-2026).

## About workflows

Workflows let you save recurring agent tasks and run them on a schedule or on demand. For example, you can create a workflow that triages new issues daily or checks your open pull requests for review status each morning.

Click **Workflows** in the sidebar to see your saved workflows. Each workflow shows its name, schedule, associated repository, and last run status.

## Creating a workflow

1. Click **New workflow** in the top-right corner.
1. Give the workflow a name and write a prompt describing the task. You can type `/` to add skills.
1. Set the interval—either a recurring schedule (for example, daily at 9:00 AM) or manual.
1. Optionally, configure the session mode, project, model, and reasoning effort.
1. Click **Create** to save, or select **Create and run** to save and test the workflow immediately.

## Running a workflow on demand

You can trigger any saved workflow manually by clicking the play button on its card on the "Workflows" page, without waiting for its next scheduled run.
