---
title: Getting started with the GitHub Copilot app
shortTitle: Copilot app quickstart
allowTitleToDifferFromFilename: true
intro: 'Sign in to the {% data variables.copilot.github_copilot_app %}, connect a repository or local folder, and create your first agent session to make code changes.'
product: '{% data reusables.gated-features.github-app %}<br>{% data reusables.copilot.github-app-download-button %}'
versions:
  feature: copilot
contentType: get-started
redirect_from:
  - /copilot/how-tos/github-app/getting-started
  - /copilot/how-tos/github-copilot-app/getting-started
category:
  - Quickstarts
  - Author and optimize with Copilot
---

For a conceptual overview of the {% data variables.copilot.github_copilot_app %}, see [AUTOTITLE](/copilot/concepts/copilot-surfaces/github-copilot-app).

In this quickstart, you will:

1. Install and sign in to the {% data variables.copilot.github_copilot_app %}.
1. Connect a repository or local folder.
1. Make code changes in an agent session.

## Prerequisites

* A {% data variables.product.github %} account.
* A {% data variables.product.prodname_copilot_short %} plan, or you can configure your own model provider.
  * If you use your own model provider, you will need provider credentials such as an API key. For setup steps, see [AUTOTITLE](/copilot/how-tos/github-copilot-app/add-llm-models).
* [Git](https://github.com/git-guides/install-git?utm_source=get-started-app-doc-install-git-guide&utm_medium=docs&utm_campaign=universe-2026) installed on your computer.

> [!NOTE]
> For {% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %} users, the {% data variables.copilot.github_copilot_app %} policy must remain enabled. This policy is enabled by default and is separate from the {% data variables.copilot.copilot_cli_short %} policy. See [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies) or [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies).

## Installing the {% data variables.copilot.github_copilot_app %}

Download and install the {% data variables.copilot.github_copilot_app %} for your operating system. For other operating systems and architectures, see the [download page](https://github.com/features/ai/github-app?utm_source=get-started-app-doc-app-features&utm_medium=docs&utm_campaign=universe-2026).

{% data reusables.copilot.github-app-download-button %}

## Opening the {% data variables.copilot.github_copilot_app %} for the first time

1. Open the {% data variables.copilot.github_copilot_app %}.
1. Click **Sign in to {% data variables.product.github %}** and follow the prompts to authenticate.

   If you use {% data variables.product.prodname_ghe_cloud %} with data residency, choose **Use GitHub Enterprise** and enter your `*.ghe.com` hostname when prompted. {% data variables.product.prodname_ghe_server %} is not supported by the {% data variables.copilot.github_copilot_app %}.
1. If you do not have a {% data variables.product.prodname_copilot_short %} plan, choose whether to sign up for a plan or continue with your own model provider.
    * If you choose to use your own model provider, select a provider, enter any required credentials, then click **Save and continue**.
1. When prompted, select one or more repositories based on your recent {% data variables.product.github %} activity. You can also add a local folder or repository, or skip this step and add repositories later.
1. Choose a theme, then complete onboarding to open the app.

## Connecting a repository or folder

To work on code, you need at least one repository or local folder connected to the app. You can connect a folder already on your machine, including a repository you've already cloned locally, or a repository you clone from {% data variables.product.github %} or another remote Git host such as Azure DevOps. Connecting a repository or folder unlocks the core app workflow: reading code, making edits, and opening pull requests from agent sessions. If you skipped repository setup during onboarding, or want to add more repositories or folders later:

1. In the sidebar, next to **Sessions**, click {% octicon "plus" aria-label="New" %}.
1. Choose where to add the repository or folder from:
  * **Open local folder** — Select a folder already on your machine, including one that contains a repository you've already cloned locally.
  * **Add {% data variables.product.github %} repository** — Browse and clone a repository from {% data variables.product.github %}.
  * **Clone repository** — Clone from a Git URL for repositories hosted outside {% data variables.product.github %} (for example, on Azure DevOps) or for private repositories without app access.

## Making your first code changes

1. In the sidebar, next to **Sessions**, click {% octicon "plus" aria-label="New" %}, then select the connected repository or folder under "Start session in."
1. Select a session mode from the dropdown below the prompt field—for example, **Interactive** to work collaboratively with the agent.
1. In the prompt box, paste this prompt:

   ```copilot copy
   Suggest a small low-risk code change in this repository, implement it, and explain the diff.
   ```

1. Respond to any requests for input from the agent. After the agent makes changes, click **Changes** above the prompt box to view the diff.
1. Continue iterating in the same session until you are happy with the result.
1. If you want to keep the change, click **Create PR** to open a pull request for review.
1. If you create a pull request, click **PR** above the prompt box to view it directly in the app.

**Optional:** If you already have tasks you want to complete in your repository, click **Issues** in the sidebar to find an issue and start a session from it. For more information, see [AUTOTITLE](/copilot/how-tos/github-copilot-app/managing-issues-and-pull-requests).

## Orienting yourself


The sidebar gives you access to the main areas of the app:

* **New** — Start a new agent session.
* **Pull requests** — Browse pull requests, check CI status, and leave reviews.
* **Issues** — Browse issues and start agent sessions to work on them.
* **[Automations](https://github.com/copilot/app/launch?open=ghapp%3A%2F%2Fautomations&utm_source=get-started-app-doc-app-launch-my-automations-cta&utm_medium=docs&utm_campaign=universe-2026)** — Saved agent tasks that run on a schedule or on demand.
* **Customize** — Discover and manage plugins, skills, MCP servers, and canvases.
* **Search** — Search across your repositories directly from the app.
* **Projects** — Organize ongoing work with {% data variables.product.prodname_copilot_short %}. Within a project, you can start multiple sessions across repositories, track progress, share context, review artifacts, and set up recurring tasks. See [AUTOTITLE](/copilot/how-tos/github-copilot-app/working-with-projects).
* **Sessions** — View connected repositories, local folders, and their active agent sessions, or start a new session for a repository or folder.
* **Chats** — General conversations that do not require a dedicated branch or workspace.

## Next steps

Find out more about using the {% data variables.copilot.github_copilot_app %}:

* [AUTOTITLE](/copilot/how-tos/github-copilot-app/agent-sessions)
* [AUTOTITLE](/copilot/how-tos/github-copilot-app/working-with-canvas-extensions)
* [AUTOTITLE](/copilot/how-tos/github-copilot-app/managing-issues-and-pull-requests)
* [AUTOTITLE](/copilot/how-tos/github-copilot-app/using-automations)
* [AUTOTITLE](/copilot/reference/github-copilot-app-reference/slash-commands)
* [AUTOTITLE](/copilot/reference/github-copilot-app-reference/built-in-skills)
