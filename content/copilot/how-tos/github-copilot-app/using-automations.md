---
title: Using automations in the GitHub Copilot app
shortTitle: Automations
intro: 'Automate recurring agent tasks so they run on a schedule or on demand, without manual intervention.'
allowTitleToDifferFromFilename: true
product: '{% data reusables.gated-features.github-app %}'
versions:
  feature: copilot
contentType: how-tos
redirect_from:
  - /copilot/how-tos/github-copilot-app/using-scheduled-workflows
  - /copilot/how-tos/github-app/using-scheduled-workflows
category:
  - Author and optimize with Copilot
---

> [!NOTE] The {% data variables.copilot.github_copilot_app %} is in {% data variables.release-phases.technical_preview %} and subject to change.
>
> * **{% data variables.copilot.copilot_business_short %}, {% data variables.copilot.copilot_enterprise_short %}, {% data variables.copilot.copilot_pro_short %}, and {% data variables.copilot.copilot_pro_plus_short %} users** — Download and install from the [{% data variables.copilot.github_copilot_app %} repository](https://gh.io/github-copilot-app-repo?utm_source=docs-github-copilot-app-automations&utm_medium=docs&utm_campaign=msbuild-2026). For {% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %}, your organization or enterprise must enable preview features and {% data variables.copilot.copilot_cli_short %}.
> * **{% data variables.copilot.copilot_free_short %} users and users without a {% data variables.product.prodname_copilot_short %} plan** — To request access, [join the waitlist](https://gh.io/github-copilot-app?utm_source=docs-github-copilot-app-automations&utm_medium=docs&utm_campaign=msbuild-2026).

## About automations

Automations let you save recurring agent tasks and run them on a schedule or on demand. For example, you can create an automation that triages new issues daily or checks your open pull requests for review status each morning.

If you enable **Run in the cloud** when creating an automation, the automation runs in cloud sandboxes (public preview) hosted by {% data variables.product.github %}. This lets the automation keep running even when your computer is off. For more information, see [AUTOTITLE](/copilot/concepts/about-cloud-and-local-sandboxes).

Click **Automations** in the sidebar to see your saved automations. Each automation shows its name, schedule, associated repository, and last run status.

## Creating an automation

1. Click **New automation** in the top-right corner.
1. Give the automation a name and write a prompt describing the task. You can type `/` to add skills.
1. Set the interval—either a recurring schedule (for example, daily at 9:00 AM) or manual.
1. Optionally, configure the session mode, project, model, and reasoning effort.
1. Optionally, enable **Run in the cloud** to let the automation run in a cloud sandbox, allowing the automation to run even when your computer is off.
1. Click **Create** to save, or select **Create and run** to save and test the automation immediately.

## Running an automation on demand

You can trigger any saved automation manually by clicking the play button on its card on the "Automations" page, without waiting for its next scheduled run.
