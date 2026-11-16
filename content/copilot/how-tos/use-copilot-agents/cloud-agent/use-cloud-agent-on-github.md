---
title: Using Copilot in the cloud on GitHub
shortTitle: Use Copilot in the cloud on GitHub
allowTitleToDifferFromFilename: true
intro: 'Start {% data variables.copilot.copilot_in_the_cloud_short %} sessions directly on {% data variables.product.github %}, then iterate on the results without leaving your browser.'
product: '{% data reusables.gated-features.copilot-in-the-cloud %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=purchase&ref_style=button&utm_source=use-cloud-gh-purchase&utm_medium=docs&utm_campaign=universe-2026" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
redirect_from:
  - /copilot/how-tos/copilot-on-github/use-copilot-agents/iterate-with-copilot
  - /copilot/how-tos/use-copilot-agents/coding-agent/make-changes-to-an-existing-pr
  - /copilot/how-tos/use-copilot-agents/cloud-agent/make-changes-to-an-existing-pr
contentType: how-tos
category:
  - Author and optimize with Copilot
---

## Introduction

You can start {% data variables.copilot.copilot_in_the_cloud %} sessions from several places on {% data variables.product.github %}. Once a session is running, you can monitor its progress, steer it with follow-up prompts, and iterate on the resulting pull request without leaving the browser.

For more information about {% data variables.copilot.copilot_in_the_cloud_short %}, see [AUTOTITLE](/copilot/concepts/copilot-surfaces/copilot-on-github).

You can also start partner-built agents from these same entry points using {% data variables.copilot.agent_apps %}. For more information, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/use-agent-apps).

## Starting a {% data variables.copilot.copilot_in_the_cloud_short %} session

You can start sessions from several different entry points.

* Your {% data variables.product.prodname_copilot_short %} {% octicon "home" aria-label="The home icon" %} home page at [github.com/copilot](https://github.com/copilot?ref_product=copilot&ref_type=engagement&ref_style=text&utm_source=cloud-gh-docs-home-cta&utm_medium=docs&utm_campaign=universe-2026).
* Your {% octicon "mark-github" aria-label="The github octocat logo" %} {% data variables.product.github %} personal dashboard or {% octicon "home" aria-label="The home icon" %} home page when signed in at [https://github.com](https://github.com?ref_product=copilot&ref_type=engagement&ref_style=text).
* The **{% octicon "agent" aria-label="The Agents icon" %} Agents** tab or panel in a repository.

You can send a prompt immediately with the default settings, or configure the session to suit your task before sending a prompt.

1. In the prompt box, describe what you want {% data variables.product.prodname_copilot_short %} to do. Include the outcome you want and any constraints.

   > [!TIP]
   > You can also use slash commands in your prompt to perform specific actions, such as `/rubber-duck` to get an second opinion, `/security-review` to review a repository for vulnerabilities, or `/usage` to display usage information for your session.

1. Optionally, click **{% octicon "plus" aria-hidden="true" aria-label="plus" %} Attach** to give {% data variables.product.prodname_copilot_short %} references for your request.

   Select **Files and folders**, **Upload from computer**, **Repository**, or **Space** to provide context for your request.

   For cloud sandbox sessions, you can provide additional context from third-party sources by configuring connectors and personal custom MCP servers, see [AUTOTITLE](/copilot/concepts/customizations/copilot-connectors) and [AUTOTITLE](/copilot/concepts/customizations/mcp#personal-mcp-servers).

1. Open the **Mode** picker to choose how you want to collaborate with {% data variables.product.prodname_copilot_short %}.

   * **Interactive**: (default) Work with {% data variables.product.prodname_copilot_short %} step by step.
   * **Autopilot**: Delegate the task to {% data variables.product.prodname_copilot_short %} for end-to-end execution.

   In the same menu, use **Tool permissions** to control how tool requests are approved.

   * Choose **Assisted** (default), which uses a safety check to decide whether to approve a request or ask you.
   * Choose **Always ask** to require approval for each request.
   * Choose **Allow all** to automatically approve all tool, path, and URL requests.

1. Open the **Models** picker and select **Auto** (default) or a specific model. Models are grouped by their strengths to help you choose between speed and cost efficiency, versatility and intelligence, or capability for complex tasks. If the selected model supports configurable reasoning, such as **Balance**, you can also use the dropdown menu to select the reasoning level.

1. Below the prompt box, use the **Chat** session context picker to choose the scope of your session (personal, organization, or repository).

   * In the search box, type a repository name to search for a repository to add.
   * Under **Ask anything across repositories**, choose **Chat** to ask questions across repositories. The default scope is your personal repositories. Click on the image to the right to open the account menu, and change the scope by selecting an organization, or searching by repository owner (either a user or an organization).
   * Under **Work in a repository**, select a recent repository to work in. The repositories listed reflect the selected scope.

   > [!NOTE]
   > * Adding a repository through the **Attach** menu (an earlier step) provides a reference (context material) for your prompt. Whereas selecting it here under **Start a session** makes the repository the working repository (scope) for the session. At the start of the session, the cloud sandbox takes a copy of the repository and gives {% data variables.product.prodname_copilot_short %} permission, within existing constraints, to work with its content.
   > * If a repository isn't listed, it may be excluded from {% data variables.product.prodname_copilot_short %} by your personal settings or an organization or enterprise policy.

   Optionally and if you selected a repository above, you can also click **main** (or the default branch name listed) to choose a branch that {% data variables.product.prodname_copilot_short %} uses as the working context and operates within.

{% data reusables.copilot.environment-picker %}

1. Click **Send message** or press <kbd>Enter</kbd> to send the prompt and start the session.

{% data variables.product.prodname_copilot_short %} will respond to your prompt and start the session based on the selected context and environment. If requested, {% data variables.product.prodname_copilot_short %} will generate a list of files changed, a pull request, artifacts it generated (such as a research plan), and any other relevant outputs.

### Starting {% data variables.product.prodname_copilot_short %} from within a file, issue, or pull request

When you open a chat session with {% data variables.product.prodname_copilot_short %} from a contextual page, the session begins with the context of your open file, issue, or pull request.

You cannot start a new agent session from within the contextual panel itself; you need to initiate it from the {% data variables.product.prodname_copilot_short %} page, your home page, or the agents tab.

## Starting a session with {% data variables.copilot.copilot_cloud_agent %}

### Starting a session from the agents tab or panel

You can start sessions from the agents tab and the agents panel. The only difference is the entry point—once you see the "New agent task" form, the steps are the same.

{% data reusables.copilot.open-agents-panel-or-page %}
{% data reusables.copilot.cloud-agent.new-agent-task-form-instructions %}

### Starting a session from the dashboard

You can ask {% data variables.product.prodname_copilot_short %} to start work from the prompt box in the dashboard. The dashboard is your personalized overview of your activity on {% data variables.product.github %}, seen when you visit [https://github.com](https://github.com) while logged in.

1. Navigate to the dashboard at [https://github.com](https://github.com/?ref_product=desktop&ref_type=engagement&ref_style=text).
1. Click the **{% octicon "agent" aria-label="The Agents icon" %} Task** button.
1. Using the dropdown menu in the prompt field, select the repository you want {% data variables.product.prodname_copilot_short %} to work in.
1. Type a prompt describing your request.

    For example, `Implement a user friendly message for common errors.`

    If you want {% data variables.product.prodname_copilot_short %} to open a pull request, you can ask in your prompt, for example `Open a pull request to implement a user friendly message for common errors.`

1. Optionally, select a base branch for {% data variables.product.prodname_copilot_short %}'s pull request. {% data variables.product.prodname_copilot_short %} will create a new branch based on this branch.
{% data reusables.copilot.optional-select-custom-agent-dotcom %}
1. Click **{% octicon "paper-airplane" aria-label="Send now" %} Send now** or press <kbd>Return</kbd>.

   You will be taken to the agents tab, and {% data variables.product.prodname_copilot_short %} will start a new session, which will appear in the "Recent sessions" list below the prompt box. {% data variables.product.prodname_copilot_short %} will work on the task and push any code changes.

   > [!NOTE]
   > If you have enabled the **New Dashboard Experience** in feature preview, the new session will appear in "Agent sessions" under the prompt box in your dashboard. For more information, see [AUTOTITLE](/account-and-profile/reference/personal-dashboard#home-dashboard-view).

### Starting from {% data variables.copilot.copilot_chat_short %}

When you start a task from {% data variables.copilot.copilot_chat_short %}, the new {% data variables.copilot.copilot_cloud_agent %} session incorporates the context of your current chat conversation. This means you don't need to restate details you have already shared with {% data variables.product.prodname_copilot_short %} in your `/task` prompt.

1. Open {% data variables.copilot.copilot_chat %} on {% data variables.product.prodname_dotcom_the_website %}.
1. Type `/task` to ask {% data variables.product.prodname_copilot_short %} to create a pull request, and give details of what you want {% data variables.product.prodname_copilot_short %} to change.

   For example, `/task Create a pull request to put backticks around file names and variables in output.`

1. Optionally, select a base branch for {% data variables.product.prodname_copilot_short %}'s pull request. {% data variables.product.prodname_copilot_short %} will create a new branch based on this branch, then push the changes to a pull request targeting that branch.
{% data reusables.copilot.optional-select-custom-agent-dotcom %}
1. Click **{% octicon "paper-airplane" aria-label="Start task" %}** or press <kbd>Enter</kbd>.

   {% data variables.product.prodname_copilot_short %} will start a new session, which will appear in the list below the prompt box. {% data variables.product.prodname_copilot_short %} will work on the task and push changes to its pull request, then add you as a reviewer when it has finished, triggering a notification.

## Assigning an issue to {% data variables.product.prodname_copilot_short %}

You can ask {% data variables.product.prodname_copilot_short %} to start working on an issue by assigning the issue to {% data variables.product.prodname_copilot_short %}. {% data variables.product.prodname_copilot_short %} will start working on the task, raise a pull request, then request a review from you when it's finished.

> [!NOTE]
> This feature is in {% data variables.release-phases.public_preview %} and subject to change.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issues %}

1. Open the issue that you want to assign to {% data variables.product.prodname_copilot_short %}.
1. In the right side menu, click **Assignees**.

   ![Screenshot of the right sidebar of an issue. A header, labeled "Assignees", is outlined in dark orange.](/assets/images/help/issues/assignee-menu.png)

1. Click **Copilot** from assignees list.

   ![Screenshot of "Assignees" window on an issue. Copilot is available in the list.](/assets/images/help/copilot/cloud-agent/assign-to-copilot.png)

   Additional options are displayed.

   ![Screenshot of "Assign to Copilot" dialog showing options for target repository, starting branch, {% data variables.copilot.copilot_custom_agent_short %}, and additional instructions.](/assets/images/help/copilot/cloud-agent/assign-to-copilot-dialog.png)

1. In the **Optional prompt** field you can add specific guidance for {% data variables.product.prodname_copilot_short %}. Add any context, constraints, or specific requirements that will help {% data variables.product.prodname_copilot_short %} to understand and complete the task.

   For example, you might include instructions about specific coding patterns or frameworks to use, testing requirements, code style preferences, files or directories that should or shouldn't be modified.

   In addition to the details you supply here, {% data variables.product.prodname_copilot_short %} will use any custom instructions that have been configured for the target repository. See [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-repository-instructions).

1. You can use the dropdown menus in the dialog to change the repository that {% data variables.product.prodname_copilot_short %} will work in and the branch that it will branch off from.

   All repositories where you have **at least** read access will be displayed in the repository dropdown menu. However, you can only select a repository if you have write access to it, **and** if {% data variables.copilot.copilot_cloud_agent %} is enabled for that repository.

   If you select a repository in a different organization than the issue's source organization, or if you select a public repository when the issue is in a private repository, a warning will be displayed.

   If you don't specify a repository, {% data variables.product.prodname_copilot_short %} will work in the same repository as the issue. If you don't specify a branch, {% data variables.product.prodname_copilot_short %} will work from the default branch of the selected repository.

   > [!TIP]
   > When you assign an issue to {% data variables.product.prodname_copilot_short %}, it gets sent the issue title, description, any comments that currently exist, and any additional instructions you provide. After assigning the issue, {% data variables.product.prodname_copilot_short %} will not be aware of, and therefore won't react to, any further comments that are added to the issue. If you have more information, or changes to the original requirement, add this as a comment in the pull request that {% data variables.product.prodname_copilot_short %} raises.

{% data reusables.copilot.optional-select-custom-agent-dotcom %}
{% data reusables.copilot.optional-select-copilot-cloud-agent-model %}

You can also assign issues to {% data variables.product.prodname_copilot_short %} from other places on {% data variables.product.prodname_dotcom_the_website %}:

* From the list of issues on a repository's **{% octicon "issue-opened" aria-hidden="true" aria-label="issue-opened" %} Issues** page.
* When viewing an issue in {% data variables.product.github %} {% data variables.projects.projects_v2_caps %}.

## Seeding a new repository

When creating a new repository, you can ask {% data variables.product.prodname_copilot_short %} to seed the new repository by entering a prompt.

{% data reusables.repositories.create_new %}
{% data reusables.repositories.owner-drop-down %}
1. In the **Prompt** field, enter a prompt describing what you want {% data variables.product.prodname_copilot_short %} to build.

    For example, `Create a Rust CLI for converting CSV spreadsheets to Markdown`
{% data reusables.repositories.create-repo %}

    {% data variables.product.prodname_copilot_short %} will immediately open a draft pull request. {% data variables.product.prodname_copilot_short %} will work on the task and push changes to its pull request, then add you as a reviewer when it has finished, triggering a notification.

## Fixing a failing {% data variables.product.prodname_actions %} workflow run

When an {% data variables.product.prodname_actions %} workflow run fails on a pull request branch, you can ask {% data variables.product.prodname_copilot_short %} to investigate and fix the failure.

1. On {% data variables.product.github %}, navigate to the failing workflow run job page.
1. Click the **{% octicon "agent" aria-label="The Agents icon" %} Fix with {% data variables.product.prodname_copilot_short %}** button.

   {% data variables.product.prodname_copilot_short %} will start a new session, investigate the cause of the failure, and push a fix to your branch.

## Continuing work on a pull request

You can ask {% data variables.product.prodname_copilot_short %} to make changes or address review comments on an existing pull request. You can then track the resulting session and provide follow-up instructions.

### Asking {% data variables.product.prodname_copilot_short %} to make changes

You can mention `@copilot` in a comment on any pull request to ask {% data variables.product.prodname_copilot_short %} to make changes. This works on pull requests created by {% data variables.product.prodname_copilot_short %} and on pull requests you or others created.

By default, {% data variables.product.prodname_copilot_short %} pushes commits directly to the pull request branch. To create a separate pull request instead, describe that in your comment. You can also check out the branch and push changes yourself.

When submitting a pull request comment (not a review or review comment) through the {% data variables.product.github %} web interface, select a model with the model picker. {% data variables.product.prodname_copilot_short %} uses the model from the original pull request by default.

### Delegating review comments

You can delegate review comments to have {% data variables.product.prodname_copilot_short %} implement feedback from human reviewers and {% data variables.copilot.copilot_code-review %}.

1. In the pull request, open the **Files changed** tab.
1. Navigate to the first review comment you want {% data variables.product.prodname_copilot_short %} to implement.
   * To delegate one comment, click **Fix with {% data variables.product.prodname_copilot_short %}**.
   * To delegate multiple comments, click **Add to batch**. Continue to add the comments you want {% data variables.product.prodname_copilot_short %} to work on.
1. In the **Manage batch** panel, add any additional instructions, and optionally select a model with the model picker.
1. Choose how you want {% data variables.product.prodname_copilot_short %} to apply the changes:
   * To commit the changes directly to the branch, click **{% octicon "agent" aria-label="The Agents icon" %} Fix and commit**.
   * To have {% data variables.product.prodname_copilot_short %} create a new pull request with the changes, click **Fix and open pull request** from the dropdown menu.

### Tracking and continuing a session

{% data reusables.copilot.cloud-agent.write-access-required %}

When {% data variables.product.prodname_copilot_short %} starts a new session in response to your comment, an eyes emoji (👀) reaction appears on the comment. A "Copilot has started work" event appears in the pull request timeline.

![Screenshot of a pull request timeline with a review comment with the eyes reaction and a "Copilot started work" timeline event.](/assets/images/help/copilot/cloud-agent/comment-to-agent-on-pr.png)

{% data variables.product.prodname_copilot_short %} remembers context from previous sessions on the same pull request, so follow-up requests are faster and more reliable. If the pull request was created by a {% data variables.copilot.copilot_custom_agent_short %}, mentioning `@copilot` continues using that same agent.

## Resolving merge conflicts

You can ask {% data variables.product.prodname_copilot_short %} to resolve merge conflicts on a pull request in two ways:

* **Using the "Fix with {% data variables.product.prodname_copilot_short %}" button**: If a pull request has merge conflicts, click the **Fix with {% data variables.product.prodname_copilot_short %}** button that appears in the merge box.
* **Using an @copilot mention**: Mention `@copilot` in a comment on the pull request and ask it to fix the conflicts—for example, "@copilot resolve the merge conflicts on this PR."

{% data variables.product.prodname_copilot_short %} analyzes the conflicting changes, resolves them, and verifies that the build, tests, and linter still pass. It then requests your review so you can confirm the resolution before merging.

## Running {% data variables.product.prodname_copilot_short %} automatically with {% data variables.copilot.copilot_automations %}

You can set up {% data variables.copilot.copilot_automations %} to run {% data variables.product.prodname_copilot_short %} automatically, on a schedule or in response to events such as an issue being opened. You create and manage {% data variables.copilot.copilot_automations %} from the **{% data variables.copilot.copilot_automations_cap %}** pane in the **Agents** tab of a repository. For more information, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/create-automations).

## Managing {% data variables.product.prodname_actions %} workflow runs

{% data reusables.copilot.cloud-agent-workflow-run-approval-default %} For more information, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/configuring-agent-settings).

## Giving feedback on {% data variables.product.prodname_copilot_short %}'s work

Use the feedback buttons on {% data variables.product.prodname_copilot_short %}'s pull requests and comments to rate the output. Your feedback helps improve {% data variables.product.prodname_copilot_short %}'s quality.

1. On a pull request or comment from {% data variables.product.prodname_copilot_short %}, click the thumbs up (:+1:) or thumbs down (:-1:) button.
1. If you click the thumbs down button, optionally select a reason and leave a comment, then click **Submit feedback**.

## Further reading

* [AUTOTITLE](/copilot/concepts/copilot-surfaces/copilot-on-github)
* [AUTOTITLE](/copilot/tutorials/cloud-agent/get-the-best-results)
* [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/troubleshoot-cloud-agent)
