---
title: Opening the GitHub Copilot app from links
shortTitle: Open from GitHub
allowTitleToDifferFromFilename: true
intro: "Use links to open repositories, issues, pull requests, automations, agent tasks, sessions, and setup flows directly in the {% data variables.copilot.github_copilot_app %}."
product: '{% data reusables.gated-features.github-app %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=purchase&ref_style=button&utm_source=docs-open-from-github-signup&utm_medium=docs&utm_campaign=github-copilot-app-ga-2026" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
contentType: how-tos
category:
  - Author and optimize with Copilot
---

You can open the {% data variables.copilot.github_copilot_app %} from {% data variables.product.github %} links that wrap an app link in the hosted launcher. The hosted launcher opens the app when possible and keeps a fallback page available if the browser cannot hand off to the app.

## Launcher URL format

Use the hosted launcher URL with an `entry_point` value and an encoded app link in `open`.

```text
https://github.com/copilot/app/launch?entry_point=ENTRY_POINT&open=ENCODED_APP_LINK
```

- `entry_point` identifies the source of the link. Use a stable, low-cardinality value, such as the name of the surface that renders the link.
- `open` is the URL-encoded app link to open.

Public examples should use the `ghapp://` scheme. The app also accepts `github-app://` and `gh://` links.

## Available app links

The following app links can be wrapped in the hosted launcher. Query strings and hashes are preserved when the app opens the link.

| App link shape                                | Opens                        | Notes                                                                                                                                          |
| --------------------------------------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `ghapp://`                                    | Home                         | Opens the app home route.                                                                                                                      |
| `ghapp://chats`                               | Chats                        | Opens Chats.                                                                                                                                   |
| `ghapp://mywork`                              | My work                      | Opens issues and pull requests in My work.                                                                                                     |
| `ghapp://github.com/OWNER/REPO`               | Repository setup             | Opens or clones the repository.                                                                                                                |
| `ghapp://github.com/OWNER/REPO/issues/NUMBER` | Issue                        | Opens the issue in My work when the repository is already added as a project.                                                                  |
| `ghapp://github.com/OWNER/REPO/pull/NUMBER`   | Pull request                 | Opens the pull request in My work when the repository is already added as a project. Optional trailing path segments are preserved.            |
| `ghapp://github.com/OWNER/REPO/tasks/TASK_ID` | Agent task                   | Resumes a Copilot agent task from {% data variables.product.github %}. Use the GitHub task ID, not a runtime session ID.                       |
| `ghapp://automations`                         | Automations                  | Opens Automations.                                                                                                                             |
| `ghapp://automations/new`                     | New automation draft         | Opens the new automation dialog with any supported query parameters pre-filled.                                                                |
| `ghapp://automations/AUTOMATION_ID`           | Automation                   | Opens a local automation by default. Add `mode=cloud` for a cloud automation.                                                                  |
| `ghapp://automations/AUTOMATION_ID/RUN_ID`    | Automation run               | Opens a local automation run by default. Add `mode=cloud` for a cloud automation run.                                                          |
| `ghapp://workflows`                           | Automations                  | Legacy compatibility path for `ghapp://automations`. Generate new links with `/automations`.                                                   |
| `ghapp://workflows/new`                       | New automation draft         | Legacy compatibility path for `ghapp://automations/new`. Generate new links with `/automations/new`.                                           |
| `ghapp://workflows/AUTOMATION_ID`             | Automation                   | Legacy compatibility path for `ghapp://automations/AUTOMATION_ID`. Generate new links with `/automations`.                                     |
| `ghapp://workflows/AUTOMATION_ID/RUN_ID`      | Automation run               | Legacy compatibility path for `ghapp://automations/AUTOMATION_ID/RUN_ID`. Generate new links with `/automations`.                              |
| `ghapp://recent`                              | Recent workspaces            | Opens Recent Workspaces.                                                                                                                       |
| `ghapp://sessions/SESSION_ID`                 | App session                  | Opens an app-local workspace or session. Do not use this shape for Copilot agent tasks from {% data variables.product.github %}.               |
| `ghapp://clone/OWNER/REPO`                    | Repository setup             | Shows a confirmation before cloning or opening repository setup.                                                                               |
| `ghapp://repo/OWNER/REPO`                     | Repository setup             | Shows a confirmation before cloning or opening repository setup.                                                                               |
| `ghapp://session/new`                         | New session                  | Shows a confirmation before creating a session. Use query parameters to provide the repository, pull request, branch, prompt, or session mode. |
| `ghapp://session/new/OWNER/REPO`              | New session for a repository | Shows a confirmation before creating a session for the repository.                                                                             |
| `ghapp://plugins/install`                     | Plugin install form          | Shows a confirmation, then opens Settings > Plugins with the install form pre-filled.                                                          |
| `ghapp://plugins/marketplace/add`             | Plugin marketplace form      | Shows a confirmation, then opens Settings > Plugins with the marketplace form pre-filled.                                                      |

## Session creation parameters

The `ghapp://session/new` and `ghapp://session/new/OWNER/REPO` links accept these query parameters.

| Parameter | Required                                                                          | Notes                                                                               |
| --------- | --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `repo`    | Required for `ghapp://session/new`; optional for `ghapp://session/new/OWNER/REPO` | Repository in `OWNER/REPO` format.                                                  |
| `pr`      | No                                                                                | Positive pull request number. Cannot be combined with `branch`.                     |
| `branch`  | No                                                                                | Base branch for the new session. Cannot be combined with `pr`.                      |
| `prompt`  | No                                                                                | Kickoff prompt. Do not include secrets or sensitive user content in generated URLs. |
| `mode`    | No                                                                                | One of `plan`, `interactive`, or `autopilot`.                                       |

## Automation parameters

Automation links open local automations by default. Add `mode=cloud` to open a cloud automation task or run. Legacy `ghapp://workflows` links accept the same parameters, but new links should use `ghapp://automations`.

The `ghapp://automations/new` link opens the new automation dialog. It does not create the automation until the user reviews the dialog and confirms in the app.

| Parameter | Required | Notes                                                                                                                                                                                                                                            |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `name`    | No       | Automation name.                                                                                                                                                                                                                                 |
| `prompt`  | No       | Automation prompt. Do not include secrets or sensitive user content in generated URLs.                                                                                                                                                           |
| `trigger` | No       | One of `manual`, `hourly`, `daily`, or `weekly`. Invalid values are ignored. `interval` is also accepted as an alias.                                                                                                                            |
| `time`    | No       | `HH:mm` in 24-hour local time. Only accepted for `daily` and `weekly` triggers. Daily triggers also accept comma-separated or repeated times when all entries share the same minute, for example `time=08:00,13:00`. Invalid values are ignored. |
| `day`     | No       | Weekly day as `0`-`6` (`0` = Sunday) or a weekday name. Invalid values are ignored. `schedule_day` is also accepted as an alias, and weekly triggers accept comma-separated or repeated values, such as `schedule_day=1,3,5`.                    |
| `mode`    | No       | For `ghapp://automations/AUTOMATION_ID` and `ghapp://automations/AUTOMATION_ID/RUN_ID`, use `cloud` for cloud automations. Omit it or use `local` for local automations.                                                                         |

## Plugin parameters

Plugin links open Settings > Plugins with a form pre-filled. They do not install or add anything until the user confirms in the app.

| Link                              | Parameter | Required | Notes                                                                                                              |
| --------------------------------- | --------- | -------- | ------------------------------------------------------------------------------------------------------------------ |
| `ghapp://plugins/install`         | `source`  | Yes      | Plugin source in `PLUGIN@MARKETPLACE` format. Always URL-encode the value, for example `source=my-plugin%40acme`.  |
| `ghapp://plugins/marketplace/add` | `source`  | Yes      | Marketplace source as `OWNER/REPO` or a Git URL. Always URL-encode the value, for example `source=acme%2Fplugins`. |

## Repository link

To open a repository in the app, encode an app link in this format.

```text
ghapp://github.com/OWNER/REPO
```

For example:

```text
https://github.com/copilot/app/launch?entry_point=docs_repo_link&open=ghapp%3A%2F%2Fgithub.com%2FOWNER%2FREPO
```

## Issue link

To open an issue in the app, encode an app link in this format.

```text
ghapp://github.com/OWNER/REPO/issues/123
```

For example:

```text
https://github.com/copilot/app/launch?entry_point=docs_issue_link&open=ghapp%3A%2F%2Fgithub.com%2FOWNER%2FREPO%2Fissues%2F123
```

## Pull request link

To open a pull request in the app, encode an app link in this format.

```text
ghapp://github.com/OWNER/REPO/pull/123
```

For example:

```text
https://github.com/copilot/app/launch?entry_point=docs_pull_request_link&open=ghapp%3A%2F%2Fgithub.com%2FOWNER%2FREPO%2Fpull%2F123
```

## Agent task link

To resume a Copilot agent task in the app, encode an app link in this format.

```text
ghapp://github.com/OWNER/REPO/tasks/TASK_ID
```

For example:

```text
https://github.com/copilot/app/launch?entry_point=docs_agent_task_link&open=ghapp%3A%2F%2Fgithub.com%2FOWNER%2FREPO%2Ftasks%2FTASK_ID
```

Use the GitHub task ID for `TASK_ID`. Do not use a runtime session ID or an app-local session URL for links that resume Copilot agent tasks from {% data variables.product.github %}.

## Automation links

To open the Automations page in the app, encode this app link.

```text
ghapp://automations
```

For example:

```text
https://github.com/copilot/app/launch?entry_point=docs_automations_link&open=ghapp%3A%2F%2Fautomations
```

To open a new automation draft, encode an app link in this format.

```text
ghapp://automations/new?name=Daily%20triage&trigger=daily&time=09%3A00&prompt=Summarize%20new%20issues
```

For example:

```text
https://github.com/copilot/app/launch?entry_point=docs_new_automation_link&open=ghapp%3A%2F%2Fautomations%2Fnew%3Fname%3DDaily%2520triage%26trigger%3Ddaily%26time%3D09%253A00%26prompt%3DSummarize%2520new%2520issues
```

The new automation link opens a pre-filled draft for review. It does not create the automation until the user confirms in the app. Do not include secrets or sensitive information in automation prompts that are embedded in URLs.

To open an existing automation or automation run, encode an app link in one of these formats.

```text
ghapp://automations/AUTOMATION_ID
ghapp://automations/AUTOMATION_ID/RUN_ID
```

For example:

```text
https://github.com/copilot/app/launch?entry_point=docs_automation_link&open=ghapp%3A%2F%2Fautomations%2FAUTOMATION_ID
https://github.com/copilot/app/launch?entry_point=docs_automation_run_link&open=ghapp%3A%2F%2Fautomations%2FAUTOMATION_ID%2FRUN_ID
```

Automation links open local automations by default. To open a cloud automation, add `mode=cloud` to the app link before encoding it.

```text
ghapp://automations/AUTOMATION_ID?mode=cloud
ghapp://automations/AUTOMATION_ID/RUN_ID?mode=cloud
```

For example:

```text
https://github.com/copilot/app/launch?entry_point=docs_cloud_automation_link&open=ghapp%3A%2F%2Fautomations%2FAUTOMATION_ID%3Fmode%3Dcloud
https://github.com/copilot/app/launch?entry_point=docs_cloud_automation_run_link&open=ghapp%3A%2F%2Fautomations%2FAUTOMATION_ID%2FRUN_ID%3Fmode%3Dcloud
```

## Attribution and privacy

Use `entry_point` to attribute the link source without duplicating details from the `open` target. Keep the value generic and stable, and do not include repository names, issue or pull request numbers, branch names, task IDs, automation IDs, run IDs, prompts, or raw app links in analytics events.
