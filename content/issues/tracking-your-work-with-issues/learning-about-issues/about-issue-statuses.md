---
title: About issue statuses
shortTitle: Issue statuses
intro: 'Issue statuses show where each issue is in your work, from Backlog to Done, and {% data variables.product.github %} updates them as people assign issues and link pull requests.'
versions:
  feature: issue-statuses
contentType: concepts
category:
  - Triage and organize issues
---

> [!NOTE]
> {% data reusables.issues.issue-statuses-preview %}

## Statuses and categories

Issues can have a status, such as Todo or In progress. Each status belongs to a category.

{% rowheaders %}

| Status | Category | Issue state |
| --- | --- | --- |
| Backlog | `backlog` | Open |
| Todo | `planned` | Open |
| In progress | `started` | Open |
| In review | `started` | Open |
| Done | `completed` | Closed as completed |
| Not planned | `not_planned` | Closed as not planned |
| Duplicate | `duplicate` | Closed as a duplicate |

{% endrowheaders %}

Choosing a status for closed issues closes an open issue. Choosing a status for open issues reopens a closed issue. To choose Duplicate, you also choose the issue it duplicates.

Closing an issue sets the status that matches its closing reason. New and reopened issues get the Backlog status unless you choose another one. Issues created before their repository used issue statuses don't have a status until someone or {% data variables.product.github %} sets one.

In search, use `not-planned` for the `not_planned` category.

## Setting a status

You can set an issue's status in any of these ways:

* **When creating an issue**: Next to the title field, select the status dropdown, then choose a status. In the "Create new issue" dialog, the status dropdown is below the description.
* **On an existing issue**: Below the issue's title, select the status dropdown, then choose a status.
* **In a project**: Move the issue's item to a different **Status** option. For example, in a board view grouped by **Status**, drag the item to the column for the status you want. The option's name must match an issue status, and status sync must be enabled for the project. For more information, see [Syncing statuses with projects](#syncing-statuses-with-projects), later in this article.

You can change the status of an issue, but you can't remove it.

## Who can set a status

People with triage access or higher to a repository can choose the status of its issues. Additional permission rules apply to custom roles, apps, workflows, and some repositories:

* **Custom repository roles**: In repositories owned by an organization, people with a custom role that inherits the Triage, Write, or Maintain role can choose statuses. People with a custom role that inherits the Read role can't choose statuses, even if the role can set issue types.
* **Apps and workflows**: {% data variables.product.prodname_github_apps %} with write access for the "Issues" repository permission can also choose statuses, including workflows that use `GITHUB_TOKEN` with the `issues: write` permission.
* **Archived and locked repositories**: Nobody can choose a status for issues in an archived repository, or in a repository that's locked, for example during a migration.

Choosing a status that closes or reopens an issue also requires permission to close or reopen the issue. Changing why a closed issue is closed, for example from Done to Not planned, requires permission to both close and reopen it.

People who can't choose a status directly can still close or reopen an issue if they have permission. This changes the issue's state and sets the default status for that state. For example, an issue's author can close or reopen it with read access to the repository.

## Automatic status changes

{% data variables.product.github %} also changes the status of open issues automatically. These changes only move an issue forward from an earlier status, and never close or reopen it. The one exception is an issue in In review, which moves back to In progress when its last ready pull request leaves review.

{% rowheaders %}

| Trigger | From | To |
| --- | --- | --- |
| Linking an open draft pull request, or reopening a linked draft pull request | No status, Backlog, or Todo | In progress |
| Linking an open pull request that's ready for review, reopening a linked one, or marking a linked draft pull request ready for review | No status, Backlog, Todo, or In progress | In review |
| The last linked pull request that's ready for review is converted to a draft, closed without being merged, or unlinked | In review | In progress |
| Assigning a person | No status or Backlog | Todo |
| Assigning an agent, such as {% data variables.product.prodname_copilot_short %} | No status, Backlog, or Todo | In progress |
| Assigning a person or an agent while a linked pull request is ready for review | No status, Backlog, Todo, or In progress | In review |

{% endrowheaders %}

A pull request is linked when it uses a closing keyword for the issue or is linked from the **Development** section. For more information, see [AUTOTITLE](/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue).

Only pull requests in the same repository as the issue, or in a public repository, change the status of an issue. If the person or app whose action would change the status can't choose a status for the issue, the status doesn't change.

## Syncing statuses with projects

When status sync is enabled for a project, {% data variables.product.github %} keeps an issue's status and the **Status** field of its project items in sync. The project must be owned by the same organization or personal account as the issue's repository. Projects owned by other accounts aren't affected.

* **Issue to project**: When an issue's status changes, its item moves to the project's **Status** option with the same name. Names match regardless of case, extra spaces, and emoji, so a new project's **In Progress** option matches In progress. If no option matches, the item's **Status** doesn't change.
* **Project to issue**: Moving an issue's item to a **Status** option with the same name as a status sets the issue's status, which can close or reopen the issue. Adding an issue to a project with a **Status**, for example in a board column, counts as a move. Options that don't match a status don't change the issue's status. A project's **Duplicate** option also doesn't change the status because closing an issue as a duplicate requires identifying the issue it duplicates. If you can't set the issue's status, the item moves back to the option that matches it.
* **Built-in workflows**: Workflows that set **Status** (**Item added to project**, **Item reopened**, **Item closed**, and **Pull request linked to issue**) set the option that matches the issue's status instead of their configured option. For example, **Item closed** sets a **Not planned** option for an issue closed as not planned. If no option matches, and for pull requests, the workflow sets its configured option.

If a project's **Item added to project** workflow is turned off, issues added to the project without a **Status** don't get one. Their item gets a **Status** the next time the issue's status changes or someone moves the item.

Sync is off by default for existing and new projects that don't have a saved setting. To enable sync, see [AUTOTITLE](/issues/planning-and-tracking-with-projects/automating-your-project/using-the-built-in-automations#enabling-issue-status-sync).

## Using statuses with other tools

* **Search**: To find issues by status, see [AUTOTITLE](/search-github/searching-on-github/searching-issues-and-pull-requests#search-by-issue-status).
* **REST API**: Use the `status` parameter to set a status when you create or update an issue. For more information, see [AUTOTITLE](/rest/issues/issues). To list the statuses that issues in a repository can have, see [AUTOTITLE](/rest/repos/planning-statuses).
* **GraphQL API**: Use the `status` field of an issue and the `setIssueStatus` mutation. For more information, see [AUTOTITLE](/graphql/reference/issues) in the GraphQL API documentation.
* **{% data variables.product.github %} MCP server**: Agents and developer tools can read issue statuses and search by status using the built-in {% data variables.product.github %} MCP server. For more information, see [AUTOTITLE](/copilot/concepts/customizations/mcp#about-the-github-mcp-server).
* **Webhooks and workflows**: To respond when the status of an issue changes, see [AUTOTITLE](/issues/tracking-your-work-with-issues/using-issues/issue-status-webhooks-and-workflows).
* **{% data variables.copilot.copilot_automations_cap %}**: To run {% data variables.copilot.copilot_cloud_agent %} when the status of an issue changes, see [AUTOTITLE](/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/about-automations#triggers).
