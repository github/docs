---
title: Managing issues and pull requests with the GitHub Copilot app
shortTitle: Managing issues and pull requests
allowTitleToDifferFromFilename: true
intro: 'Pick up an issue, direct an agent to implement changes, and land a pull request—all without leaving the {% data variables.copilot.github_copilot_app %}.'
product: '{% data reusables.gated-features.github-app %}'
versions:
  feature: copilot
contentType: how-tos
redirect_from:
  - /copilot/how-tos/github-app/managing-issues-and-pull-requests
category:
  - Author and optimize with Copilot
---

> [!NOTE] The {% data variables.copilot.github_copilot_app %} is in {% data variables.release-phases.technical_preview %} and subject to change.
>
> * **{% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %} users** — Download and install from the [{% data variables.copilot.github_copilot_app %} repository](https://gh.io/github-copilot-app-repo?utm_source=docs-github-copilot-app-managing-issues-prs&utm_medium=docs&utm_campaign=github-copilot-app-tech-preview-2026) if your organization or enterprise has enabled preview features and {% data variables.copilot.copilot_cli_short %}.
> * **{% data variables.copilot.copilot_pro_short %} and {% data variables.copilot.copilot_pro_plus_short %} users** — To request access, [join the waitlist](https://gh.io/github-copilot-app?utm_source=docs-github-copilot-app-managing-issues-prs&utm_medium=docs&utm_campaign=github-copilot-app-tech-preview-2026).

## Browsing your inbox

Click **Inbox** in the sidebar to see your issues and pull requests in one place. The inbox is organized into sections—by default, **All**, **Active**, **Review requests**, and **Done**. You can edit the default sections or add new ones with your own filters. Use the search bar within any section to find items by keyword or qualifiers like `label:bug`.

## Starting a session from an issue

1. In the **Inbox**, find the issue you want to work on, then click it to view its details.
1. Click **Start a session**. The app creates a new session with the issue context already loaded and automatically selects **Plan** mode.
1. The agent proposes a plan. Review the plan, then let the agent start working or have it propose changes that you can apply manually.
1. Once you approve, the agent creates a branch, implements the changes, and opens a pull request for you to review.

## Reviewing a pull request

1. Click a pull request in the **Inbox** to see its overview—including the summary, CI check results, and review activity.
1. Switch to the **Files changed** tab to review the diff.
1. Click **Create session** to start a session for the pull request. Within the session, you can leave review comments on the diff, or ask the agent to make changes.
1. Once done reviewing in the session, you can go back to the pull request detail view and click **Review** at the top to submit a review.

You can also open the pull request in your browser or in another IDE directly from the app.

## Responding to a review

You can respond to review comments and resolve failing CI checks in the {% data variables.copilot.github_copilot_app %}.

1. Open a pull request.
1. Scroll down the page to see review comments on your PR. To ask an agent to resolve a comment, click **{% octicon "copilot" aria-label="The Copilot icon" %} Fix**.
1. At the bottom of the page, view the status of CI checks. To ask an agent to fix failing checks, click **{% octicon "copilot" aria-label="The Copilot icon" %} Fix failing checks**.

## Merging a pull request

When you want to merge a pull request, you can enable **agent merge** at the top of the app. Agent merge will prompt the workspace's Copilot session to read your pull request, fix what is blocking it, and merge it as soon as {% data variables.product.github %} allows. It runs in the background, survives app restarts, and turns itself off once your pull request is merged.
