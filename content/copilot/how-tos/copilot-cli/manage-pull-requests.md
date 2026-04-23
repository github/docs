---
title: 'Managing pull requests with the /pr command'
shortTitle: Manage pull requests
intro: 'Use the `/pr` slash command to view, create, and fix pull requests directly from {% data variables.copilot.copilot_cli_short %}.'
versions:
  feature: copilot
contentType: how-tos
category:
  - Author and optimize with Copilot # Copilot discovery page
  - Build with Copilot CLI # Copilot CLI bespoke page
docsTeamMetrics:
  - copilot-cli
---

## Overview

The `/pr` slash command lets you manage the full pull request lifecycle without leaving your terminal. You can check pull request status, create new pull requests, and fix common issues such as review feedback, merge conflicts, and CI failures.

## Prerequisite

You must be working in a Git repository that is hosted on {% data variables.product.prodname_dotcom %}.

## Subcommands

The `/pr` slash command has several subcommands that you can use to perform different actions on your pull requests.

> [!NOTE]
> All `/pr` subcommands relate to the current branch—for example, fixing failing CI checks for the pull request associated with the current branch.

<!-- Use HTML tags rather than Markdown to avoid bad column width rendering. -->

<table>
<thead>
<tr>
<th style="width: 20%;">Use this subcommand</th>
<th style="width: 50%;">To do this</th>
<th style="width: 15%; text-align: center;">Requires an existing PR</th>
<th style="width: 15%; text-align: center;">May commit and push</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>/pr</code> or <code>/pr view</code></td>
<td>Show the status of the pull request for the current branch. <a href="#viewing-pull-request-status">Find out more</a></td>
<td align="center">Yes</td>
<td align="center">No</td>
</tr>
<tr>
<td><code>/pr view web</code></td>
<td>Open the pull request in your browser. <a href="#opening-the-pull-request-in-your-browser">Find out more</a></td>
<td align="center">Yes</td>
<td align="center">No</td>
</tr>
<tr>
<td><code>/pr create</code></td>
<td>Create or update a pull request. <a href="#creating-a-pull-request">Find out more</a></td>
<td align="center">No</td>
<td align="center">Yes</td>
</tr>
<tr>
<td><code>/pr fix feedback</code></td>
<td>Address review comments on the pull request. <a href="#fixing-review-feedback">Find out more</a></td>
<td align="center">Yes</td>
<td align="center">Yes</td>
</tr>
<tr>
<td><code>/pr fix conflicts</code></td>
<td>Sync the branch with the base branch and resolve conflicts. <a href="#resolving-merge-conflicts">Find out more</a></td>
<td align="center">Yes</td>
<td align="center">Yes</td>
</tr>
<tr>
<td><code>/pr fix ci</code></td>
<td>Diagnose and fix failing CI checks. <a href="#fixing-ci-failures">Find out more</a></td>
<td align="center">Yes</td>
<td align="center">Yes</td>
</tr>
<tr>
<td><code>/pr fix</code> or <code>/pr fix all</code></td>
<td>Run all three fix phases in order: feedback, conflicts, then CI. <a href="#fixing-all-issues-at-once">Find out more</a></td>
<td align="center">Yes</td>
<td align="center">Yes</td>
</tr>
<tr>
<td><code>/pr auto</code></td>
<td>Create a pull request if needed, then loop through all fix phases until all pull request checks are passing. <a href="#automating-the-full-pull-request-workflow">Find out more</a></td>
<td align="center">No</td>
<td align="center">Yes</td>
</tr>
</tbody>
</table>

Subcommands that commit and push changes will prompt you for permission before performing potentially destructive actions, unless you have pre-allowed those tools. For more information, see [AUTOTITLE](/copilot/how-tos/copilot-cli/allowing-tools).

## Viewing pull request status

To check the status of the pull request associated with your current branch, enter the following in an interactive session:

```copilot copy
/pr
```

### Opening the pull request in your browser

If you want to view the pull request on {% data variables.product.prodname_dotcom_the_website %} instead of in the terminal, enter:

```copilot copy
/pr view web
```

This opens the pull request URL in your default browser.

## Creating a pull request

To create a pull request from your current branch, enter:

```copilot copy
/pr create
```

{% data variables.product.prodname_copilot_short %} ensures that all local commits are pushed to the remote branch, then creates the pull request. If a pull request template exists in the repository, {% data variables.product.prodname_copilot_short %} follows it when generating the pull request title and description.

If a pull request already exists for the current branch, `/pr create` updates the existing pull request instead of creating a new one.

### Adding instructions for pull request creation

You can append instructions after `/pr create` to guide {% data variables.product.prodname_copilot_short %}. For example:

```copilot copy
/pr create prefix the PR title 'Project X: '
```

## Fixing review feedback

To have {% data variables.product.prodname_copilot_short %} read and address review comments on your pull request, enter:

```copilot copy
/pr fix feedback
```

{% data variables.product.prodname_copilot_short %} fetches all review comment threads on the pull request, determines what changes are requested, applies the changes to your codebase, and commits and pushes the fixes. Actionable code change requests are prioritized over conversational comments.

## Resolving merge conflicts

To sync your branch with the base branch and resolve any merge conflicts, enter:

```copilot copy
/pr fix conflicts
```

{% data variables.product.prodname_copilot_short %} fetches the latest base branch, syncs your branch, resolves any conflicts, and pushes the result.

### Choosing a merge strategy

When resolving conflicts, {% data variables.copilot.copilot_cli_short %} needs to know whether to use a rebase or merge strategy. If you have not configured a preference, {% data variables.product.prodname_copilot_short %} prompts you to choose when you run a command that involves conflict resolution.

To set a default merge strategy so that you are not prompted each time, add the `mergeStrategy` setting to your configuration file. You can set this in your personal user settings for {% data variables.product.prodname_copilot_short %}, or in the repository settings.

* **User settings**: Add `"mergeStrategy": "rebase"` or `"mergeStrategy": "merge"` to your user-level configuration file (typically `~/.copilot/config.json`).
* **Repository settings**: Add the same setting to `.github/copilot/settings.json` in your repository root.

## Fixing CI failures

To have {% data variables.product.prodname_copilot_short %} diagnose and fix failing CI checks, enter:

```copilot copy
/pr fix ci
```

{% data variables.product.prodname_copilot_short %} identifies the failing CI jobs, analyzes the logs to determine root causes, applies targeted fixes, and pushes them. It then re-checks the CI status and repeats the process until the checks pass or it determines that further progress is not possible.

If failures are unrelated to your branch changes, {% data variables.product.prodname_copilot_short %} notes this clearly so you can take appropriate action.

You can append additional context to help {% data variables.product.prodname_copilot_short %} focus on specific failures. For example:

```copilot copy
/pr fix ci focus on test failures
```

## Fixing all issues at once

To address all outstanding issues on a pull request in a single command, enter:

```copilot copy
/pr fix
```

This runs three phases in order:

1. **Review feedback** — Addresses all review comments.
1. **Conflicts** — Syncs the branch with the base branch and resolves any conflicts.
1. **CI failures** — Diagnoses and fixes failing CI checks.

## Automating the full pull request workflow

To have {% data variables.product.prodname_copilot_short %} manage the entire pull request process from creation to a fully green state, enter:

```copilot copy
/pr auto
```

If no pull request exists for the current branch, {% data variables.product.prodname_copilot_short %} creates one first. It then loops through the fix phases—review feedback, conflicts, and CI—repeating until there are no more review comments, no conflicts, and all CI checks pass.

You can append instructions to guide the pull request creation. For example:

```copilot copy
/pr auto include migration notes in the description
```

## Further reading

* [AUTOTITLE](/copilot/how-tos/copilot-cli/allowing-tools)
* [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-command-reference)
