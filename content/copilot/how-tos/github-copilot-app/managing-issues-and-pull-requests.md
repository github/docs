---
title: Managing issues and pull requests with the GitHub Copilot app
shortTitle: Managing issues and pull requests
allowTitleToDifferFromFilename: true
intro: 'Pick up an issue, direct an agent to implement changes, and land a pull request—all without leaving the {% data variables.copilot.github_copilot_app %}.'
product: '{% data reusables.gated-features.github-app %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=purchase&ref_style=button&utm_source=docs-manage-issues-prs-signup&utm_medium=docs&utm_campaign=github-copilot-app-ga-2026" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
contentType: how-tos
redirect_from:
  - /copilot/how-tos/github-app/managing-issues-and-pull-requests
category:
  - Author and optimize with Copilot
---

## Browsing your issues and pull requests

Click **My work** in the sidebar to see your issues and pull requests in one place. The view is organized into sections—by default, **All**, **Active**, **Review requests**, and **Done**. You can edit the default sections or add new ones with your own filters. Use the search bar within any section to find items by keyword or qualifiers like `label:bug`.

## Starting a session from an issue

1. Click **My work** in the sidebar.
1. Browse or filter to find an issue, then click it to view its details.
1. Click **New session**. The app creates a new session with the issue context already loaded.
1. Select a session mode from the dropdown below the prompt field—for example, **Plan** to have the agent propose a plan first, or **Interactive** to work collaboratively with the agent.
1. Prompt the agent with what you want it to do. If you chose **Plan** mode, the agent proposes a plan for you to review first; otherwise, the agent will start working on the issue and propose changes that you can iterate on. Follow along in the conversation view and provide feedback to steer the agent.

## Reviewing a pull request

1. Click a pull request in **My work** to see its overview—including the summary, CI check results, and review activity.
1. Switch to the **Files changed** tab to review the diff.
1. Click **New session** to start a session for the pull request. Within the session, you can leave review comments on the diff, or ask the agent to make changes.
1. Once done reviewing in the session, you can go back to the pull request detail view and click **Review** at the top to submit a review.

You can also open the pull request in your browser or in another IDE directly from the app.

## Responding to a review

You can respond to review comments and resolve failing CI checks in the {% data variables.copilot.github_copilot_app %}.

1. Open a pull request.
1. Scroll down the page to see review comments on your PR. To ask an agent to resolve a comment, click **{% octicon "copilot" aria-label="The Copilot icon" %} Fix**.
1. At the bottom of the page, view the status of CI checks. To ask an agent to fix failing checks, click **{% octicon "copilot" aria-label="The Copilot icon" %} Fix failing checks**.

## Merging a pull request

When you want to merge a pull request, you can enable **agent merge** at the top of the app. Agent merge will prompt the workspace's Copilot session to read your pull request, fix what is blocking it, and merge it as soon as {% data variables.product.github %} allows. It runs in the background, survives app restarts, and turns itself off once your pull request is merged.
