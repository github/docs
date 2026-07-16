---
title: Getting started with the GitHub Copilot app
shortTitle: Quickstart
allowTitleToDifferFromFilename: true
intro: 'Sign in to the {% data variables.copilot.github_copilot_app %}, ask your first question in a quick chat, and then create a full agent session to make changes to your code.'
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

## Prerequisites

* [Git](https://github.com/git-guides/install-git) installed on your computer.
* A {% data variables.product.github %} account.
* A {% data variables.product.prodname_copilot_short %} plan. Alternatively, if using your own model provider, you will need required credentials such as an API key. For more information, see [AUTOTITLE](/copilot/how-tos/github-copilot-app/use-byok-models).
* If you use {% data variables.copilot.copilot_business_short %} or {% data variables.copilot.copilot_enterprise_short %}, your plan administrator must enable the **{% data variables.copilot.copilot_cli_short %}** policy. See [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies) or [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies).

## Installing the {% data variables.copilot.github_copilot_app %}

1. Visit the [download page for {% data variables.copilot.github_copilot_app %}](https://github.com/features/ai/github-app).
1. Download the app for your platform.

## Opening the {% data variables.copilot.github_copilot_app %} for the first time

1. Open the {% data variables.copilot.github_copilot_app %}.
1. Click **Sign in to {% data variables.product.github %}** and follow the prompts to authenticate. If you use {% data variables.product.prodname_ghe_server %}, choose **Use GitHub Enterprise** and enter your server address when prompted.
1. If you do not have a {% data variables.product.prodname_copilot_short %} plan, choose whether to sign up for a plan or continue with your own model provider.
    * If you choose to use your own model provider, select a provider, enter any required credentials, then click **Save and continue**.
1. When prompted, select one or more repositories based on your recent {% data variables.product.github %} activity. You can also add a local repository, or skip this step and add repositories later.
1. Choose a theme, then complete onboarding to open the app.

## Connecting a repository

To work on code, you need at least one repository connected to the app. If you skipped repository setup during onboarding, or want to add more repositories later:

1. Click the **+** button in the sidebar next to "Sessions".
1. Under **Add project from**, choose one of the following:
   * **Local folder or repository** — Select a folder already on your machine.
   * **{% data variables.product.github %} repository** — Browse and clone a repository from {% data variables.product.github %}.
   * **Repository URL** — Clone from any Git URL.

## Orienting yourself

The sidebar gives you access to the main areas of the app:

* **[My work](https://github.com/copilot/app/launch?open=ghapp%3A%2F%2Fmywork)** — Browse and filter issues and pull requests from your repositories, check CI status, and leave reviews.
* **[Automations](https://github.com/copilot/app/launch?open=ghapp%3A%2F%2Fautomations)** — Saved agent tasks that run on a schedule or on demand.
* **Search** — Search across your repositories directly from the app.
* **Sessions** — Active agent sessions, grouped by repository. This also includes **Quick chats**, which are general chat conversations.

## Starting a quick chat

The fastest way to try the {% data variables.copilot.github_copilot_app %} is with a quick chat. Quick chats let you ask questions and brainstorm without creating a branch or worktree.

1. In the sidebar, click **+** next to "Quick chats" to open a new chat.
1. Type a question or prompt—for example, "Give me an overview of the octocat repository."
1. The agent responds in the conversation view. You can continue the conversation, ask follow-up questions, or start a new chat.

## Creating your first session

When you are ready to make changes to code, create a session. You can start from an issue or describe a task directly.

### Starting from an issue

1. Click **[My work](https://github.com/copilot/app/launch?open=ghapp%3A%2F%2Fmywork)** in the sidebar.
1. Browse or filter to find an issue, then click it to view its details.
1. Click **New session**. The app creates a new session with the issue context already loaded.
1. Select a session mode from the dropdown below the prompt field—for example, **Plan** to have the agent propose a plan first, or **Interactive** to work collaboratively with the agent.
1. Prompt the agent with what you want it to do. If you chose **Plan** mode, the agent proposes a plan for you to review first; otherwise, the agent will start working on the issue and propose changes that you can iterate on. Follow along in the conversation view and provide feedback to steer the agent.

### Starting from a task

If you do not have an issue to work from, you can describe a task directly.

1. In the sidebar, click **+** next to "Sessions" to start a new session, then select a repository.
1. Select a session mode from the dropdown below the prompt field—for example, **Interactive** to work collaboratively with the agent.
1. Describe a task—for example, "Fix the failing test in `utils.test.ts`" or "Add input validation to the signup form."
1. The agent will make changes based on your direction. Follow along in the conversation view and provide feedback to steer the agent.

## Next steps

Find out more about using the {% data variables.copilot.github_copilot_app %}:

* [AUTOTITLE](/copilot/how-tos/github-copilot-app/agent-sessions)
* [AUTOTITLE](/copilot/how-tos/github-copilot-app/working-with-canvas-extensions)
* [AUTOTITLE](/copilot/how-tos/github-copilot-app/managing-issues-and-pull-requests)
* [AUTOTITLE](/copilot/how-tos/github-copilot-app/using-automations)
* [AUTOTITLE](/copilot/how-tos/github-copilot-app/open-with-deep-links)
