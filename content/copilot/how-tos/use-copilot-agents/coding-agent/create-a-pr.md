---
title: Asking GitHub Copilot to create a pull request
shortTitle: Create a PR
intro: 'You can ask {% data variables.product.prodname_copilot_short %} to create a pull request from many places, including {% data variables.product.prodname_github_issues %}, the agents panel, {% data variables.copilot.copilot_chat_short %}, the {% data variables.product.prodname_cli %}, and agentic coding tools and IDEs with Model Context Protocol (MCP) support.'
product: '{% data reusables.gated-features.copilot-coding-agent %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=engagement&ref_style=button" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
topics:
  - Copilot
redirect_from:
  - /copilot/using-github-copilot/using-copilot-coding-agent-to-work-on-tasks/asking-copilot-to-create-a-pull-request
  - /copilot/using-github-copilot/using-copilot-coding-agent-to-work-on-issues/asking-copilot-to-create-a-pull-request
  - /copilot/using-github-copilot/coding-agent/asking-copilot-to-create-a-pull-request
  - /copilot/how-tos/agents/copilot-coding-agent/asking-copilot-to-create-a-pull-request
  - /copilot/how-tos/agents/copilot-coding-agent/create-a-pr
  - /copilot/how-tos/agents/coding-agent/create-a-pr
  - /copilot/using-github-copilot/using-copilot-coding-agent-to-work-on-tasks/using-copilot-to-work-on-an-issue
  - /copilot/using-github-copilot/using-copilot-coding-agent-to-work-on-issues/using-copilot-to-work-on-an-issue
  - /early-access/copilot/coding-agent/using-copilot-coding-agent
  - /copilot/using-github-copilot/coding-agent/using-copilot-to-work-on-an-issue
  - /copilot/how-tos/agents/copilot-coding-agent/using-copilot-to-work-on-an-issue
  - /copilot/how-tos/agents/copilot-coding-agent/assign-copilot-to-an-issue
  - /copilot/how-tos/agents/coding-agent/assign-copilot-to-an-issue
  - /copilot/how-tos/use-copilot-agents/coding-agent/assign-copilot-to-an-issue
contentType: how-tos
category: 
  - Author and optimize with Copilot
---

> [!NOTE]
> For an overview of {% data variables.copilot.copilot_coding_agent %}, see [AUTOTITLE](/copilot/concepts/about-copilot-coding-agent).

## Introduction

You can ask {% data variables.product.prodname_copilot_short %} to create a new pull request from:

* {% data variables.product.prodname_github_issues %}, by [assigning an issue to {% data variables.product.prodname_copilot_short %}](#assigning-an-issue-to-copilot)
* The [agents tab or panel](#asking-copilot-to-create-a-pull-request-from-the-agents-tab-or-panel) on {% data variables.product.github %}
* The [dashboard](#asking-copilot-to-create-a-pull-request-from-the-dashboard) on {% data variables.product.github %}
* {% data variables.copilot.copilot_chat_short %} in [{% data variables.product.prodname_vscode %}](#asking-copilot-to-create-a-pull-request-from-copilot-chat-in-visual-studio-code), [JetBrains IDEs](#asking-copilot-to-create-a-pull-request-from-copilot-chat-in-jetbrains-ides), and [{% data variables.product.prodname_vs %}](#asking-copilot-to-create-a-pull-request-from-copilot-chat-in-visual-studio)
* {% data variables.copilot.copilot_chat_short %} on [{% data variables.product.prodname_dotcom_the_website %}](#asking-copilot-to-create-a-pull-request-from-copilot-chat-in-githubcom)
* The [{% data variables.product.prodname_cli %}](#asking-copilot-to-create-a-pull-request-from-the-github-cli)
* On [{% data variables.product.prodname_mobile %}](#asking-copilot-to-create-a-pull-request-from-github-mobile)
* Your preferred IDE or agentic coding tool with [Model Context Protocol (MCP)](#asking-copilot-to-create-a-pull-request-from-the-github-mcp-server) support
* The [Raycast](#asking-copilot-to-create-a-pull-request-from-raycast) launcher on macOS
* The ["New repository" form](#asking-copilot-to-create-a-pull-request-from-the-new-repository-page) on {% data variables.product.github %}

{% data variables.product.prodname_copilot_short %} will start working on the task, raise a pull request, then request a review from you when it's finished working. For more information, see [AUTOTITLE](/copilot/using-github-copilot/coding-agent/about-assigning-tasks-to-copilot).

## Assigning an issue to {% data variables.product.prodname_copilot_short %}

You can ask {% data variables.product.prodname_copilot_short %} to start working on an issue by assigning the issue to {% data variables.product.prodname_copilot_short %}.

You can assign an issue to {% data variables.product.prodname_copilot_short %}:

* On {% data variables.product.prodname_dotcom_the_website %} (see the [next section](#assigning-an-issue-to-copilot-on-githubcom))
* On [{% data variables.product.prodname_mobile %}](#assigning-an-issue-to-copilot-on-github-mobile)
* Via the {% data variables.product.github %} API (see [later in this article](#assigning-an-issue-to-copilot-via-the-github-api))
* Using {% data variables.product.prodname_cli %} (see [`gh issue edit`](https://cli.github.com/manual/gh_issue_edit))

### Assigning an issue to {% data variables.product.prodname_copilot_short %} on {% data variables.product.prodname_dotcom_the_website %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issues %}

1. Open the issue that you want to assign to {% data variables.product.prodname_copilot_short %}.
1. In the right side menu, click **Assignees**.

   ![Screenshot of the right sidebar of an issue. A header, labeled "Assignees", is outlined in dark orange.](/assets/images/help/issues/assignee-menu.png)

1. Click **Copilot** from assignees list.

   ![Screenshot of "Assignees" window on an issue. Copilot is available in the list.](/assets/images/help/copilot/coding-agent/assign-to-copilot.png)

   Additional options are displayed.

   ![Screenshot of "Assign to Copilot" dialog showing options for target repository, starting branch, custom agent, and additional instructions.](/assets/images/help/copilot/coding-agent/assign-to-copilot-dialog.png)

1. In the **Optional prompt** field you can add specific guidance for {% data variables.product.prodname_copilot_short %}. Add any context, constraints, or specific requirements that will help {% data variables.product.prodname_copilot_short %} to understand and complete the task.

   For example, you might include instructions about specific coding patterns or frameworks to use, testing requirements, code style preferences, files or directories that should or shouldn't be modified.

   In addition to the details you supply here, {% data variables.product.prodname_copilot_short %} will use any custom instructions that have been configured for the target repository. See [AUTOTITLE](/copilot/how-tos/configure-custom-instructions/add-repository-instructions).

1. You can use the dropdown menus in the dialog to change the repository that {% data variables.product.prodname_copilot_short %} will work in and the branch that it will branch off from.

   All repositories where you have **at least** read access will be displayed in the repository dropdown menu. However, you can only select a repository if you have write access to it, **and** if {% data variables.copilot.copilot_coding_agent %} is enabled for that repository.

   If you select a repository in a different organization than the issue's source organization, or if you select a public repository when the issue is in a private repository, a warning will be displayed.

   If you don't specify a repository, {% data variables.product.prodname_copilot_short %} will work in the same repository as the issue. If you don't specify a branch, {% data variables.product.prodname_copilot_short %} will work from the default branch of the selected repository.

   > [!TIP]
   > When you assign an issue to {% data variables.product.prodname_copilot_short %}, it gets sent the issue title, description, any comments that currently exist, and any additional instructions you provide. After assigning the issue, {% data variables.product.prodname_copilot_short %} will not be aware of, and therefore won't react to, any further comments that are added to the issue. If you have more information, or changes to the original requirement, add this as a comment in the pull request that {% data variables.product.prodname_copilot_short %} raises.

{% data reusables.copilot.optional-select-custom-agent %}

You can also assign issues to {% data variables.product.prodname_copilot_short %} from other places on {% data variables.product.prodname_dotcom_the_website %}:

* From the list of issues on a repository's **{% octicon "issue-opened" aria-hidden="true" aria-label="issue-opened" %} Issues** page.
* When viewing an issue in {% data variables.product.github %} {% data variables.projects.projects_v2_caps %}.

### Assigning an issue to {% data variables.product.prodname_copilot_short %} on {% data variables.product.prodname_mobile %}

1. In {% data variables.product.prodname_mobile %}, navigate to the repository that contains the issue you want to assign to {% data variables.product.prodname_copilot_short %}.
1. Click **Issues**.
1. Open the issue that you want to assign to {% data variables.product.prodname_copilot_short %}.
1. Tap the **{% octicon "info" aria-label="information" %}** icon.
1. Beside "Assignees", tap **Edit**.
1. Beside "{% data variables.product.prodname_copilot_short %}", click the plus sign.
1. Click **Done**.

### Assigning an issue to {% data variables.product.prodname_copilot_short %} via the {% data variables.product.github %} API

You can assign issues to {% data variables.product.prodname_copilot_short %} using the GraphQL API.

#### Creating and assigning a new issue

1. Make sure you're authenticating with the API using a user token, for example a {% data variables.product.pat_generic %} or a {% data variables.product.prodname_github_app %} user-to-server token.

   > [!NOTE]
   > If using a {% data variables.product.pat_v2 %}, it needs the following permissions to assign {% data variables.product.prodname_copilot_short %} to an issue:
   > * Read access to metadata
   > * Read and write access to actions, contents, issues and pull requests
   >
   > If using a {% data variables.product.pat_v1 %}, it needs the `repo` scope to assign {% data variables.product.prodname_copilot_short %} to an issue.

1. Verify that {% data variables.copilot.copilot_coding_agent %} is enabled in the repository by checking if the repository's `suggestedActors` in the GraphQL API includes {% data variables.product.prodname_copilot_short %}. Replace `octo-org` with the repository owner, and `octo-repo` with the repository name.

    ```graphql copy
    query {
      repository(owner: "octo-org", name: "octo-repo") {
        suggestedActors(capabilities: [CAN_BE_ASSIGNED], first: 100) {
          nodes {
            login
            __typename

            ... on Bot {
              id
            }

            ... on User {
              id
            }
          }
        }
      }
    }
    ```

    If {% data variables.copilot.copilot_coding_agent %} is enabled for the user and in the repository, the first node returned from the query will have the `login` value `copilot-swe-agent`.

1. Make a note of the `id` value of this login.

1. Fetch the GraphQL global ID of the repository you want to create the issue in, replacing `octo-org` with the repository owner, and `octo-repo` with the repository name.

    ```graphql copy
    query {
      repository(owner: "octo-org", name: "octo-repo") {
        id
      }
    }
    ```

1. Create the issue with the `createIssue` mutation. Replace `REPOSITORY_ID` with the ID returned from the previous step, and `BOT_ID` with the ID returned from the step before that.

    ```graphql copy
    mutation {
      createIssue(input: {repositoryId: "REPOSITORY_ID", title: "Implement comprehensive unit tests", body: "DETAILS", assigneeIds: ["BOT_ID"]}) {
        issue {
          id
          title
          assignees(first: 10) {
            nodes {
              login
            }
          }
        }
      }
    }
    ```

#### Assigning an existing issue

1. Make sure you're authenticating with the API using a user token, for example a {% data variables.product.pat_generic %} or a {% data variables.product.prodname_github_app %} user-to-server token.
1. Verify that {% data variables.copilot.copilot_coding_agent %} is enabled in the repository by checking if the repository's `suggestedActors` in the GraphQL API includes {% data variables.product.prodname_copilot_short %}. Replace `octo-org` with the repository owner, and `octo-repo` with the repository name.

    ```graphql copy
    query {
      repository(owner: "monalisa", name: "octocat") {
        suggestedActors(capabilities: [CAN_BE_ASSIGNED], first: 100) {
          nodes {
            login
            __typename

            ... on Bot {
              id
            }

            ... on User {
              id
            }
          }
        }
      }
    }
    ```

    If {% data variables.copilot.copilot_coding_agent %} is enabled for the user and in the repository, the first node returned from the query will have the `login` value `copilot-swe-agent`.

1. Fetch the GraphQL global ID of the issue you want to assign to {% data variables.product.prodname_copilot_short %}, replacing `monalisa` with the repository owner, `octocat` with the name and `9000` with the issue number.

    ```graphql copy
    query {
      repository(owner: "monalisa", name: "octocat") {
        issue(number: 9000) {
          id
          title
        }
      }
    }
    ```

1. Assign the existing issue to {% data variables.product.prodname_copilot_short %} using the `replaceActorsForAssignable` mutation. Replace `ISSUE_ID` with the ID returned from the previous step, and `BOT_ID` with the ID returned from the step before that.

    ```graphql copy
    mutation {
      replaceActorsForAssignable(input: {assignableId: "ISSUE_ID", actorIds: ["BOT_ID"]}) {
        assignable {
          ... on Issue {
            id
            title
            assignees(first: 10) {
              nodes {
                login
              }
            }
          }
        }
      }
    }
    ```

## Asking {% data variables.product.prodname_copilot_short %} to create a pull request from the agents tab or panel

You can ask {% data variables.product.prodname_copilot_short %} to open a pull request from either the agents tab or the agents panel. The only difference is the entry point - once you see the "New agent task" form, the steps are the same.

{% data reusables.copilot.open-agents-panel-or-page %}
{% data reusables.copilot.coding-agent.new-agent-task-form-instructions %}

## Asking {% data variables.product.prodname_copilot_short %} to create a pull request from the dashboard

You can ask {% data variables.product.prodname_copilot_short %} to open a pull request from the {% data variables.product.prodname_copilot_short %} prompt box in the dashboard. The dashboard is your personalized overview of your activity on {% data variables.product.github %}, seen when you visit [https://github.com](https://github.com) while logged in.

1. Navigate to the dashboard at [https://github.com](https://github.com/?ref_product=desktop&ref_type=engagement&ref_style=text&utm_source=docs-web-copilot-agents-create-pr&utm_medium=docs&utm_campaign=universe25post).
1. Click the **{% octicon "agent" aria-label="The Agents icon" %} Task** button.
1. Using the dropdown menu in the prompt field, select the repository you want {% data variables.product.prodname_copilot_short %} to work in.
1. Type a prompt describing your request.

    For example, `Implement a user friendly message for common errors.`

1. Optionally, select a base branch for {% data variables.product.prodname_copilot_short %}'s pull request. {% data variables.product.prodname_copilot_short %} will create a new branch based on this branch, then push the changes to a pull request.
{% data reusables.copilot.optional-select-custom-agent %}
1. Click **{% octicon "paper-airplane" aria-label="Send now" %} Send now** or press <kbd>Return</kbd>.

   You will be taken to the agents tab, and {% data variables.product.prodname_copilot_short %} will start a new session, which will appear in the "Recent sessions" list below the prompt box. {% data variables.product.prodname_copilot_short %} will work on the task and push changes to its pull request, then add you as a reviewer when it has finished, triggering a notification.

   > [!NOTE]
   > If you have enabled the **New Dashboard Experience** in feature preview, the new session will appear in "Agent sessions" under the prompt box in your dashboard. For more information, see [AUTOTITLE](/account-and-profile/reference/personal-dashboard#home-dashboard-view).

## Asking {% data variables.product.prodname_copilot_short %} to create a pull request from {% data variables.copilot.copilot_chat_short %} in {% data variables.product.prodname_vscode %}

1. Install the [{% data variables.product.github %} Pull Requests extension](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github) for {% data variables.product.prodname_vscode %}.
1. Open {% data variables.copilot.copilot_chat %} in {% data variables.product.prodname_vscode %}.
1. Type a prompt explaining what you want {% data variables.product.prodname_copilot_short %} to do, and add `#copilotCodingAgent` to the prompt.

   For example, `Put backticks around file names and variables in output #copilotCodingAgent`

   > [!TIP]
   > * To help {% data variables.product.prodname_copilot_short %}, you can select the relevant line(s) of code before submitting your prompt.

1. Submit your prompt.

   {% data variables.product.prodname_copilot_short %} will typically do some research and context-gathering in {% data variables.product.prodname_vscode %}, and then will ask you to confirm that you want to use the coding agent to create a pull request.

1. Click **Continue**.

   {% data variables.product.prodname_copilot_short %} will push up any local changes, start a new session and respond with a link to the pull request it creates. It will work on the task and push changes to the pull request, and then add you as a reviewer when it has finished, triggering a notification.

## Asking {% data variables.product.prodname_copilot_short %} to create a pull request from {% data variables.copilot.copilot_chat_short %} in JetBrains IDEs

> [!NOTE]
> {% data variables.copilot.copilot_coding_agent %} in JetBrains IDEs is in {% data variables.release-phases.public_preview %}, and subject to change.

1. Open {% data variables.copilot.copilot_chat %} in your JetBrains IDE.
1. Type a prompt explaining what you want {% data variables.product.prodname_copilot_short %} to do

   For example, `Put backticks around file names and variables in output`

1. Click the **Delegate to Coding Agent** button next to the **Send** button.

   {% data variables.product.prodname_copilot_short %} will start a new session and respond with a link to the pull request it creates. It will work on the task and push changes to the pull request, and then add you as a reviewer when it has finished, triggering a notification from {% data variables.product.github %} and in the IDE.

## Asking {% data variables.product.prodname_copilot_short %} to create a pull request from {% data variables.copilot.copilot_chat_short %} in {% data variables.product.prodname_vs %}

1. Open {% data variables.copilot.copilot_chat %} in {% data variables.product.prodname_vs %}.
1. Type a prompt, starting with `@github`, asking {% data variables.product.prodname_copilot_short %} to create a pull request, and giving details of what you want {% data variables.product.prodname_copilot_short %} to change.

   For example, `@github Create a PR to put backticks around file names and variables in output.`

   > [!TIP]
   > * To help {% data variables.product.prodname_copilot_short %}, you can select the relevant line(s) of code before submitting your prompt.
   > * From {% data variables.copilot.copilot_chat_short %}, you can ask {% data variables.product.prodname_copilot_short %} to open a pull request using a specific branch as the base branch by including it in your prompt.

1. Submit your prompt.

   {% data variables.product.prodname_copilot_short %} asks you to confirm that you want to use the coding agent to create a pull request.

1. Click **Allow**.

   {% data variables.product.prodname_copilot_short %} will start a new session and respond with a link to the pull request it creates. It will work on the task and push changes to the pull request, and then add you as a reviewer when it has finished, triggering a notification.

## Asking {% data variables.product.prodname_copilot_short %} to create a pull request from {% data variables.copilot.copilot_chat_short %} in {% data variables.product.prodname_dotcom_the_website %}

1. Open {% data variables.copilot.copilot_chat %} on {% data variables.product.prodname_dotcom_the_website %}.
1. Type `/task` to ask {% data variables.product.prodname_copilot_short %} to create a pull request, and give details of what you want {% data variables.product.prodname_copilot_short %} to change.

   For example, `/task Put backticks around file names and variables in output.`

1. Optionally, select a base branch for {% data variables.product.prodname_copilot_short %}'s pull request. {% data variables.product.prodname_copilot_short %} will create a new branch based on this branch, then push the changes to a pull request targeting that branch.
{% data reusables.copilot.optional-select-custom-agent %}
1. Click {% octicon "paper-airplane" aria-label="Start task" %} **Start task** or press <kbd>Return</kbd>.

   {% data variables.product.prodname_copilot_short %} will start a new session, which will appear in the list below the prompt box. {% data variables.product.prodname_copilot_short %} will work on the task and push changes to its pull request, then add you as a reviewer when it has finished, triggering a notification.

## Asking {% data variables.product.prodname_copilot_short %} to create a pull request from {% data variables.product.prodname_mobile %}

1. In {% data variables.product.prodname_mobile %}, navigate to the repository where you want to create a pull request.
1. Tap the **{% octicon "copilot" aria-hidden="true" aria-label="Copilot" %}** icon in the bottom right corner of the screen.
1. Enter a prompt to ask {% data variables.product.prodname_copilot_short %} to create a pull request.

   For example: `Create a pull request to ...`.

   {% data variables.product.prodname_copilot_short %} responds with a brief summary of the task it will perform, asking for your confirmation before it proceeds.

1. Check that {% data variables.product.prodname_copilot_short %} has interpreted your prompt correctly, then tap **Accept** or **Dismiss**.

   {% data variables.product.prodname_copilot_short %} creates a pull request and gives you a link to it. It will work on the task and push changes to the pull request, and then add you as a reviewer when it has finished, triggering a notification.

## Asking {% data variables.product.prodname_copilot_short %} to create a pull request from the {% data variables.product.prodname_cli %}

> [!NOTE]
> The `agent-task` command set is only available in v2.80.0 or later of the {% data variables.product.prodname_cli %}. This command set is a {% data variables.release-phases.public_preview %} and is subject to change.

You can start a new {% data variables.copilot.copilot_coding_agent %} session with the `gh agent-task create` command in the {% data variables.product.prodname_cli %}.

When you run the command without any arguments, you are asked to enter a prompt. {% data variables.copilot.copilot_coding_agent %} acts on the prompt and opens a pull request in the current repository.

You can use command line options to:

* Provide the prompt (`gh agent-task create "Example prompt"`)
* Choose a base branch, instead of using the repository's default branch (`--base`)
* Select a repository, instead of targeting the current repository (`--repo`)
* Follow the session log in real time (`--follow`)

To see all of the available options, run `gh agent-task create --help`.

## Asking {% data variables.product.prodname_copilot_short %} to create a pull request from the {% data variables.product.github %} MCP server

> [!NOTE]
> * This capability is only available on the remote {% data variables.product.github %} MCP server and host applications where remote MCP servers are supported.

1. Install the {% data variables.product.github %} MCP server in your preferred IDE or agentic coding tool. See [AUTOTITLE](/copilot/how-tos/context/model-context-protocol/using-the-github-mcp-server).

1. Ensure the `create_pull_request_with_copilot` tool is enabled.

1. Open chat.

1. Type a prompt asking {% data variables.product.prodname_copilot_short %} to create a pull request, with the details of what you want to change.

   For example, `Open a PR in my repository to expand unit test coverage.`

   > [!TIP]
   > * You can ask {% data variables.product.prodname_copilot_short %} to open a pull request using a specific branch as the base branch by including it in your prompt.

1. Submit your prompt.

   {% data variables.product.prodname_copilot_short %} will start a new session, open a draft pull request and work on the task in the background. As it works, it will push changes to the pull request, and once it has finished, it will add you as a reviewer. In most cases, the MCP host will show you the URL of the created pull request.

## Asking {% data variables.product.prodname_copilot_short %} to create a pull request from Raycast

{% data reusables.copilot.coding-agent.raycast-intro %}

{% data reusables.copilot.coding-agent.raycast-setup %}
1. Open Raycast, search for "{% data variables.product.prodname_copilot_short %}," find the **Create Task** command, then press <kbd>Enter</kbd>.
1. Click **Sign in with {% data variables.product.github %}**, then complete the authentication flow. Raycast will re-open.
1. Type a prompt describing what you want {% data variables.product.prodname_copilot_short %} to do.

    For example, `Implement a user friendly message for common errors.`
1. Select the repository you want {% data variables.product.prodname_copilot_short %} to work in.
1. Optionally, select a base branch for {% data variables.product.prodname_copilot_short %}'s pull request. {% data variables.product.prodname_copilot_short %} will create a new branch based on this branch, then push the changes to a pull request targeting that branch.
1. Press <kbd>Command</kbd>+<kbd>Enter</kbd> to start the task.

    {% data variables.product.prodname_copilot_short %} will start a new session. {% data variables.product.prodname_copilot_short %} will work on the task and push changes to its pull request, then add you as a reviewer when it has finished, triggering a notification.

> [!NOTE]
>
> If you are unable to select a specific repository when starting a task, the organization that owns the repository may have enabled {% data variables.product.prodname_oauth_app %} access restrictions. To learn how to request approval for the "{% data variables.product.prodname_copilot %} for Raycast" {% data variables.product.prodname_oauth_app %}, see [AUTOTITLE](/account-and-profile/how-tos/setting-up-and-managing-your-personal-account-on-github/managing-your-membership-in-organizations/requesting-organization-approval-for-oauth-apps).

## Asking {% data variables.product.prodname_copilot_short %} to create a pull request from the "New repository" page

When creating a new repository, you can ask {% data variables.product.prodname_copilot_short %} to seed the new repository by entering a prompt.

{% data reusables.repositories.create_new %}
{% data reusables.repositories.owner-drop-down %}
1. In the **Prompt** field, enter a prompt describing what you want {% data variables.product.prodname_copilot_short %} to build.

    For example, `Create a Rust CLI for converting CSV spreadsheets to Markdown`
{% data reusables.repositories.create-repo %}

    {% data variables.product.prodname_copilot_short %} will immediately open a draft pull request. {% data variables.product.prodname_copilot_short %} will work on the task and push changes to its pull request, then add you as a reviewer when it has finished, triggering a notification.

{% data reusables.copilot.coding-agent.monitoring-progress-heading %}

## Further reading

* [AUTOTITLE](/copilot/concepts/about-copilot-coding-agent)
* [AUTOTITLE](/copilot/tutorials/coding-agent/best-practices)
* [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/create-custom-agents)
* [AUTOTITLE](/copilot/using-github-copilot/coding-agent/troubleshooting-copilot-coding-agent#copilot-cant-create-a-pull-request-from-copilot-chat)
