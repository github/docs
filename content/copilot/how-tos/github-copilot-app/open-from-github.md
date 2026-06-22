---
title: Opening the GitHub Copilot app from GitHub
shortTitle: Open from GitHub
allowTitleToDifferFromFilename: true
intro: "Use links from {% data variables.product.github %} to open repositories, issues, pull requests, and agent tasks directly in the {% data variables.copilot.github_copilot_app %}."
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
