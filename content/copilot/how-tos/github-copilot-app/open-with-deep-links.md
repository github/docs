---
title: Using deep links to open the GitHub Copilot app
shortTitle: Open with deep links
allowTitleToDifferFromFilename: true
intro: "Use deep links to launch the {% data variables.copilot.github_copilot_app %} from the terminal, tickets, and internal tools, so people can jump directly into the right repository, pull request, automation, or session."
product: '{% data reusables.gated-features.github-app %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=purchase&ref_style=button&utm_source=docs-open-from-github-signup&utm_medium=docs&utm_campaign=github-copilot-app-ga-2026" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
contentType: how-tos
category:
  - Author and optimize with Copilot
---

Deep links help people start work in the {% data variables.copilot.github_copilot_app %} with less context switching. For example, you can share kickoff prompts, include links to the app in markdown files, launch the app from terminal scripts, or add a button to open the app in external tools.

You can open the {% data variables.copilot.github_copilot_app %} from browser links that wrap an app link in the hosted launcher. The hosted launcher opens the app when possible and shows a fallback page if the browser cannot hand off to the app. For a full list of supported app links, see [Available app links](#available-app-links).

## Why use deep links

Use deep links when you want to move from a webpage or workflow directly into a specific page or task in the app. Common use cases include:

* Start sessions with a pre-filled kickoff prompt.
* Share automation prompts so teammates can open and reuse them quickly.
* Add launch buttons in internal docs or markdown files to open common workflows.
* Launch the app from terminal commands or scripts as part of local workflows.
* Open the app from third-party products such as issue or ticket systems.

## Launcher URL format

Use the hosted launcher URL with the full app link encoded in the `open` query parameter. The hosted launcher opens the app when possible and shows a fallback page if the browser cannot hand off to the app.

```text
https://github.com/copilot/app/launch?open=ENCODED_APP_LINK
```

Use `encodeURIComponent`, or the equivalent in your programming language, to encode the full app link. If the app link includes query parameters, encode those query parameter values before encoding the full app link for `open`.

For example, to open a repository the app link is:

```text
ghapp://github.com/OWNER/REPO
```

Encoded in the launcher URL, that becomes:

```text
https://github.com/copilot/app/launch?open=ghapp%3A%2F%2Fgithub.com%2FOWNER%2FREPO
```

Public links should use the official `ghapp://` scheme. The app also accepts `github-app://` and `gh://` links for compatibility, but generated and documented links should use `ghapp://`.

## Open a repository or work item

To open a page in the {% data variables.copilot.github_copilot_app %}, build a launcher URL using the app link for the page you want to open.

* To open a repository, use this app link:

   ```text
   ghapp://github.com/OWNER/REPO
   ```

   Encoded in the launcher URL, that becomes:

   ```text
   https://github.com/copilot/app/launch?open=ghapp%3A%2F%2Fgithub.com%2FOWNER%2FREPO
   ```

* To open an issue, use this app link:

   ```text
   ghapp://github.com/OWNER/REPO/issues/NUMBER
   ```

   Encoded in the launcher URL, that becomes:

   ```text
   https://github.com/copilot/app/launch?open=ghapp%3A%2F%2Fgithub.com%2FOWNER%2FREPO%2Fissues%2F123
   ```

* To open a pull request, use this app link:

   ```text
   ghapp://github.com/OWNER/REPO/pull/NUMBER
   ```

   Encoded in the launcher URL, that becomes:

   ```text
   https://github.com/copilot/app/launch?open=ghapp%3A%2F%2Fgithub.com%2FOWNER%2FREPO%2Fpull%2F123
   ```

* To resume an agent task, use this app link:

   ```text
   ghapp://github.com/OWNER/REPO/tasks/TASK_ID
   ```

   Encoded in the launcher URL, that becomes:

   ```text
   https://github.com/copilot/app/launch?open=ghapp%3A%2F%2Fgithub.com%2FOWNER%2FREPO%2Ftasks%2FTASK_ID
   ```

   Use the {% data variables.product.github %} task ID for `TASK_ID`. Do not use a runtime session ID or an app-local session URL for links that resume {% data variables.product.github %} {% data variables.product.prodname_copilot_short %} agent tasks.

## Open sessions

To start a new session from a deep link, use `ghapp://session/new` with query parameters to pre-fill the repository, branch, pull request, prompt, or mode. For available parameters, see [Session parameters](#session-parameters).

For example, to start a new interactive session with a repository and kickoff prompt, use this app link:

```text
ghapp://session/new?repo=OWNER%2FREPO&mode=interactive&prompt=Investigate%20failing%20tests
```

Encoded in the launcher URL, that becomes:

```text
https://github.com/copilot/app/launch?open=ghapp%3A%2F%2Fsession%2Fnew%3Frepo%3DOWNER%252FREPO%26mode%3Dinteractive%26prompt%3DInvestigate%2520failing%2520tests
```

### Session parameters

The `ghapp://session/new` and `ghapp://session/new/OWNER/REPO` links accept these query parameters.

| Parameter | Required | Notes |
| --- | --- | --- |
| `repo` | Required for `ghapp://session/new`; optional for `ghapp://session/new/OWNER/REPO` | Repository in `OWNER/REPO` format. |
| `pr` | No | Positive pull request number. Cannot be combined with `branch`. |
| `branch` | No | Base branch for the new session. Cannot be combined with `pr`. |
| `prompt` | No | Kickoff prompt. Do not include secrets or sensitive user content in URLs. |
| `mode` | No | One of `plan`, `interactive`, or `autopilot`. |

## Open automations

To open automations or create a new automation draft from a deep link, use the automation app links. For available parameters when creating a new automation draft, see [Automation parameters](#automation-parameters).

* To open the Automations page, use this app link:

   ```text
   ghapp://automations
   ```

   Encoded in the launcher URL, that becomes:

   ```text
   https://github.com/copilot/app/launch?open=ghapp%3A%2F%2Fautomations
   ```

* To open a new automation draft, use this app link:

   ```text
   ghapp://automations/new?name=Daily%20triage&trigger=daily&time=09%3A00&prompt=Summarize%20new%20issues
   ```

   Encoded in the launcher URL, that becomes:

   ```text
   https://github.com/copilot/app/launch?open=ghapp%3A%2F%2Fautomations%2Fnew%3Fname%3DDaily%2520triage%26trigger%3Ddaily%26time%3D09%253A00%26prompt%3DSummarize%2520new%2520issues
   ```

* To open an existing automation, use this app link:

   ```text
   ghapp://automations/AUTOMATION_ID
   ```

   Encoded in the launcher URL, that becomes:

   ```text
   https://github.com/copilot/app/launch?open=ghapp%3A%2F%2Fautomations%2FAUTOMATION_ID
   ```

* To open a cloud automation, add `mode=cloud` to the app link before encoding it:

   ```text
   ghapp://automations/AUTOMATION_ID?mode=cloud
   ```

   Encoded in the launcher URL, that becomes:

   ```text
   https://github.com/copilot/app/launch?open=ghapp%3A%2F%2Fautomations%2FAUTOMATION_ID%3Fmode%3Dcloud
   ```

### Automation parameters

The `ghapp://automations/new` link opens the new automation dialog. It does not create the automation until the user reviews the dialog and confirms in the app. Do not include secrets or sensitive user content in prompts embedded in URLs.

| Parameter | Applies to | Notes |
| --- | --- | --- |
| `name` | `ghapp://automations/new` | Automation name. |
| `prompt` | `ghapp://automations/new` | Automation prompt. Do not include secrets or sensitive user content in URLs. |
| `trigger` | `ghapp://automations/new` | One of `manual`, `hourly`, `daily`, or `weekly`. Invalid values are ignored. `interval` is also accepted as an alias. |
| `time` | `ghapp://automations/new` | Time in `HH:mm` 24-hour local format. Accepted for `daily` and `weekly` triggers. Daily triggers also accept comma-separated or repeated times when all entries share the same minute, for example `time=08:00,13:00`. Invalid values are ignored. |
| `day` | `ghapp://automations/new` | Weekly day as `0`-`6` (`0` = Sunday) or a weekday name. Invalid values are ignored. `schedule_day` is also accepted as an alias, and weekly triggers accept comma-separated or repeated values, such as `schedule_day=1,3,5`. |
| `mode` | `ghapp://automations/AUTOMATION_ID` and `ghapp://automations/AUTOMATION_ID/RUN_ID` | Use `cloud` for cloud automations. Omit it or use `local` for local automations. |

## Open plugin flows

To open plugin install or marketplace flows from a deep link, use the plugin app links. For available parameters, see [Plugin parameters](#plugin-parameters).

For example, to open the plugin install form with a pre-filled source, use this app link:

```text
ghapp://plugins/install?source=my-plugin%40acme
```

Encoded in the launcher URL, that becomes:

```text
https://github.com/copilot/app/launch?open=ghapp%3A%2F%2Fplugins%2Finstall%3Fsource%3Dmy-plugin%2540acme
```

### Plugin parameters

Plugin links open Settings > Plugins with a form pre-filled. They do not install a plugin or add a marketplace until the user confirms in the app.

| Link | Parameter | Required | Notes |
| --- | --- | --- | --- |
| `ghapp://plugins/install` | `source` | Yes | Plugin source in `PLUGIN@MARKETPLACE` format. URL-encode the value, for example `source=my-plugin%40acme`. |
| `ghapp://plugins/marketplace/add` | `source` | Yes | Marketplace source as `OWNER/REPO` or a Git URL. URL-encode the value, for example `source=acme%2Fplugins`. |

## Available app links

The following app links can be wrapped in the hosted launcher. Query strings and hashes are preserved when the app opens the link.

| App link shape | Opens | Notes |
| --- | --- | --- |
| `ghapp://` | Home | Opens the app home route. |
| `ghapp://chats` | Chats | Opens Chats. |
| `ghapp://mywork` | My work | Opens issues and pull requests in My work. |
| `ghapp://github.com/OWNER/REPO` | Repository setup | Opens or clones the repository. |
| `ghapp://github.com/OWNER/REPO/issues/NUMBER` | Issue | Opens the issue in My work when the repository is already added as a project. |
| `ghapp://github.com/OWNER/REPO/pull/NUMBER` | Pull request | Opens the pull request in My work when the repository is already added as a project. Optional trailing path segments are preserved. |
| `ghapp://github.com/OWNER/REPO/tasks/TASK_ID` | Agent task | Resumes a {% data variables.product.github %} {% data variables.product.prodname_copilot_short %} agent task. Use the {% data variables.product.github %} task ID, not an app-local session ID. |
| `ghapp://automations` | Automations | Opens Automations. |
| `ghapp://automations/new` | New automation draft | Opens the new automation dialog with supported query parameters pre-filled. See [Automation parameters](#automation-parameters). |
| `ghapp://automations/AUTOMATION_ID` | Automation | Opens a local automation by default. Add `?mode=cloud` for a cloud automation. |
| `ghapp://automations/AUTOMATION_ID/RUN_ID` | Automation run | Opens a local automation run by default. Add `?mode=cloud` for a cloud automation run. |
| `ghapp://recent` | Recent workspaces | Opens Recent Workspaces. |
| `ghapp://sessions/SESSION_ID` | App session | Opens an app-local workspace or session. Do not use this shape to resume {% data variables.product.github %} Copilot agent tasks. |
| `ghapp://clone/OWNER/REPO` | Repository setup | Shows a confirmation before cloning or opening repository setup. |
| `ghapp://repo/OWNER/REPO` | Repository setup | Shows a confirmation before cloning or opening repository setup. |
| `ghapp://session/new` | New session | Shows a confirmation before creating a session. Use query parameters to provide the repository, pull request, branch, prompt, or session mode. See [Session parameters](#session-parameters). |
| `ghapp://session/new/OWNER/REPO` | New session for a repository | Shows a confirmation before creating a session for the repository. See [Session parameters](#session-parameters). |
| `ghapp://plugins/install` | Plugin install form | Shows a confirmation, then opens Settings > Plugins with the install form pre-filled. See [Plugin parameters](#plugin-parameters). |
| `ghapp://plugins/marketplace/add` | Plugin marketplace form | Shows a confirmation, then opens Settings > Plugins with the marketplace form pre-filled. See [Plugin parameters](#plugin-parameters). |
