---
title: Getting started with the GitHub Copilot app
shortTitle: Quickstart
allowTitleToDifferFromFilename: true
intro: 'Sign in to the {% data variables.copilot.github_copilot_app %}, connect a repository or local folder, and create your first agent session to make code changes.'
product: '{% data reusables.gated-features.github-app %}<br><a href="https://github.com/features/ai/github-app" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Download {% data variables.copilot.github_copilot_app %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
contentType: how-tos
redirect_from:
  - /copilot/how-tos/github-app/getting-started
category:
  - Quickstarts
  - Author and optimize with Copilot
---

For a conceptual overview of the {% data variables.copilot.github_copilot_app %}, see [AUTOTITLE](/copilot/concepts/agents/github-copilot-app).

In this quickstart, you will:

1. Install and sign in to the {% data variables.copilot.github_copilot_app %}.
1. Connect a repository or local folder.
1. Make code changes in an agent session.

## Prerequisites

* A {% data variables.product.github %} account.
* Access to {% data variables.product.prodname_copilot_short %} or a configured model provider.
  * If you use your own model provider, you will need provider credentials such as an API key. For setup steps, see [AUTOTITLE](/copilot/how-tos/github-copilot-app/use-byok-models).
* [Git](https://github.com/git-guides/install-git) installed on your computer.

> [!NOTE]
> If you use {% data variables.copilot.copilot_business_short %} or {% data variables.copilot.copilot_enterprise_short %}, your plan administrator will need to enable the **{% data variables.copilot.copilot_cli_short %}** policy. For more information, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies) or [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies).

## Installing the {% data variables.copilot.github_copilot_app %}

1. Visit the [download page for {% data variables.copilot.github_copilot_app %}](https://github.com/features/ai/github-app).
1. Download the app for your platform.

## Opening the {% data variables.copilot.github_copilot_app %} for the first time

1. Open the {% data variables.copilot.github_copilot_app %}.
1. Click **Sign in to {% data variables.product.github %}** and follow the prompts to authenticate. If you use {% data variables.product.prodname_ghe_server %}, choose **Use GitHub Enterprise** and enter your server address when prompted.
1. If you do not have a {% data variables.product.prodname_copilot_short %} plan, choose whether to sign up for a plan or continue with your own model provider.
    * If you choose to use your own model provider, select a provider, enter any required credentials, then click **Save and continue**.
1. When prompted, select one or more repositories based on your recent {% data variables.product.github %} activity. You can also add a local folder or repository, or skip this step and add projects later.
1. Choose a theme, then complete onboarding to open the app.

## Connecting a repository or folder

To work on code, you need at least one project connected to the app. A project can be a folder already on your machine, including a repository you've already cloned locally, or a repository you clone from {% data variables.product.github %} or another remote Git host such as Azure DevOps. Connecting a project unlocks the core app workflow: reading code, making edits, and opening pull requests from agent sessions. If you skipped project setup during onboarding, or want to add more projects later:

1. Click the **+** button in the sidebar next to "Sessions".
1. Under **Add project from**, choose one of the following:
  * **Local folder or repository** — Select a folder already on your machine, including one that contains a repository you've already cloned locally.
  * **{% data variables.product.github %} repository** — Browse and clone a repository from {% data variables.product.github %}.
  * **Repository URL** — Clone from a Git URL for repositories hosted outside {% data variables.product.github %} (for example, on Azure DevOps) or for private repositories without app access.

## Making your first code changes

1. Click **+** next to **Sessions**, then choose a connected folder or repository under **Start session in**.
1. Select a session mode from the dropdown below the prompt field—for example, **Interactive** to work collaboratively with the agent.
1. In the prompt box, paste this prompt:

   ```copilot copy
   Suggest a small low-risk code change in this repository, implement it, and explain the diff.
   ```

1. Respond to any requests for input from the agent. After the agent makes changes, click **Changes** above the prompt box to view the diff.
1. Continue iterating in the same session until you are happy with the result.
1. If you want to keep the change, click **Create PR** to open a pull request for review.
1. If you create a pull request, click **PR** above the prompt box to view it directly in the app.

**Optional:** If you already have tasks you want to complete in your repository, you can start a session from an issue in **[My work](https://github.com/copilot/app/launch?open=ghapp%3A%2F%2Fmywork)**. For more information, see [AUTOTITLE](/copilot/how-tos/github-copilot-app/managing-issues-and-pull-requests).

## Orienting yourself

The sidebar gives you access to the main areas of the app:

* **[My work](https://github.com/copilot/app/launch?open=ghapp%3A%2F%2Fmywork)** — Browse and filter issues and pull requests from your repositories, check CI status, and leave reviews.
* **[Automations](https://github.com/copilot/app/launch?open=ghapp%3A%2F%2Fautomations)** — Saved agent tasks that run on a schedule or on demand.
* **Search** — Search across your repositories directly from the app.
* **Sessions** — Active agent sessions, grouped by project. This also includes **Quick chats**, which are general chat conversations.

## Next steps

Find out more about using the {% data variables.copilot.github_copilot_app %}:

* [AUTOTITLE](/copilot/how-tos/github-copilot-app/agent-sessions)
* [AUTOTITLE](/copilot/how-tos/github-copilot-app/working-with-canvas-extensions)
* [AUTOTITLE](/copilot/how-tos/github-copilot-app/managing-issues-and-pull-requests)
* [AUTOTITLE](/copilot/how-tos/github-copilot-app/using-automations)
* [AUTOTITLE](/copilot/how-tos/github-copilot-app/open-with-deep-links)
